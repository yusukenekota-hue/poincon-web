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
