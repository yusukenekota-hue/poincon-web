-- POINÇON Web版 — 初期スキーマ
-- Supabaseプロジェクト(必ずEUリージョン)のSQL Editorで実行してください。
-- 実行前提: プロジェクトはRGPD対応のためEU(Frankfurt等)リージョンで作成すること。

create extension if not exists "pgcrypto";

-- ============ makers（窯元） ============
create table if not exists makers (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  kana text,
  region_ja text not null,
  region_fr text not null,
  region_en text not null,
  period text not null,
  blurb_ja text not null,
  blurb_fr text not null,
  blurb_en text not null,
  created_at timestamptz not null default now()
);

-- ============ marks（刻印） ============
create table if not exists marks (
  id uuid primary key default gen_random_uuid(),
  maker_id uuid not null references makers(id) on delete cascade,
  slug text not null,
  label text not null,
  shape text not null check (shape in ('circle','oval','octagon','shield','ribbon','mono')),
  period text not null,
  style_ja text, style_fr text, style_en text,
  desc_ja text not null, desc_fr text not null, desc_en text not null,
  created_at timestamptz not null default now(),
  unique (maker_id, slug)
);

-- ============ profiles（会員プロフィール） ============
create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text unique not null check (username ~ '^[a-zA-Z0-9_]{3,}$'),
  display_name text not null,
  region text,
  approved_count integer not null default 0,
  created_at timestamptz not null default now()
);

-- ============ contributions（投稿） ============
create table if not exists contributions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references profiles(id) on delete cascade,
  maker_name text not null,
  label text not null,
  period text not null,
  style text,
  description text,
  photo_mark_url text not null,
  photo_piece_url text,
  status text not null default 'pending' check (status in ('pending','approved','rejected')),
  created_at timestamptz not null default now()
);

-- ============ shops（店主） ============
create table if not exists shops (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  place_ja text, place_fr text, place_en text,
  genre_ja text, genre_fr text, genre_en text,
  owner_ja text, owner_fr text, owner_en text,
  note_ja text, note_fr text, note_en text,
  instagram_url text,
  published boolean not null default false,
  created_at timestamptz not null default now()
);

-- ============ reports（通報） ============
create table if not exists reports (
  id uuid primary key default gen_random_uuid(),
  target_type text not null check (target_type in ('mark','contribution','shop')),
  target_id uuid not null,
  reason text not null,
  created_at timestamptz not null default now()
);

-- ============ ai_usage（AI判定の1日回数制限） ============
create table if not exists ai_usage (
  user_id uuid not null references profiles(id) on delete cascade,
  date date not null,
  count integer not null default 0,
  primary key (user_id, date)
);

-- ================= RLS =================
alter table makers enable row level security;
alter table marks enable row level security;
alter table shops enable row level security;
alter table profiles enable row level security;
alter table contributions enable row level security;
alter table reports enable row level security;
alter table ai_usage enable row level security;

-- makers / marks: 誰でも閲覧可（ログイン不要が最重要原則）
create policy "makers are public" on makers for select using (true);
create policy "marks are public" on marks for select using (true);

-- shops: published=true のみ公開。未公開分は管理画面(サービスロール)から操作
create policy "published shops are public" on shops for select using (published = true);

-- profiles: 誰でも閲覧可(投稿者名表示のため)。更新は本人のみ
create policy "profiles are public" on profiles for select using (true);
create policy "users can insert own profile" on profiles for insert with check (auth.uid() = id);
create policy "users can update own profile" on profiles for update using (auth.uid() = id);

-- contributions: 承認済みは誰でも閲覧可。本人は自分の投稿を閲覧・作成可
create policy "approved contributions are public" on contributions for select
  using (status = 'approved' or user_id = auth.uid());
create policy "users can insert own contribution" on contributions for insert
  with check (user_id = auth.uid());

-- reports: 誰でも通報を作成可（閲覧・更新は管理画面のサービスロールのみ）
create policy "anyone can create a report" on reports for insert with check (true);

-- ai_usage: 本人のみ閲覧・更新可
create policy "users can view own ai_usage" on ai_usage for select using (user_id = auth.uid());
create policy "users can upsert own ai_usage" on ai_usage for insert with check (user_id = auth.uid());
create policy "users can update own ai_usage" on ai_usage for update using (user_id = auth.uid());
