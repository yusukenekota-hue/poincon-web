export type Lang = "ja" | "fr" | "en";

export type LocalizedText = Record<Lang, string>;

export type MarkShape =
  | "circle"
  | "oval"
  | "octagon"
  | "shield"
  | "ribbon"
  | "mono";

export interface Mark {
  id: string;
  label: string;
  shape: MarkShape;
  period: string;
  style: LocalizedText;
  desc: LocalizedText;
  by: string;
  trust: number;
}

export interface Maker {
  id: string;
  name: string;
  kana: string;
  region: LocalizedText;
  period: string;
  blurb: LocalizedText;
  marks: Mark[];
}

export interface Shop {
  id: string;
  name: string;
  place: LocalizedText;
  genre: LocalizedText;
  owner: LocalizedText;
  note: LocalizedText;
  link: string;
  published: boolean;
}

export interface Profile {
  id: string;
  username: string;
  display_name: string;
  region: string | null;
  approved_count: number;
  created_at: string;
}

export type ContributionStatus = "pending" | "approved" | "rejected";

export interface Contribution {
  id: string;
  user_id: string;
  maker_name: string;
  label: string;
  period: string;
  style: string | null;
  description: string | null;
  photo_mark_url: string;
  photo_piece_url: string | null;
  status: ContributionStatus;
  created_at: string;
}

