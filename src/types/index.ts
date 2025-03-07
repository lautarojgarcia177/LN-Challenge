// Interfaces generadas con app.quicktype.io

export interface Article {
  _id: string;
  display_date: string;
  headlines: Headlines;
  promo_items?: PromoItems;
  subtype: string;
  taxonomy: Taxonomy;
  website_url: string;
}

export interface Headlines {
  basic: string;
}

export interface PromoItems {
  basic: Basic;
}

export interface Basic {
  resized_urls?: ResizedURL[];
  subtitle?: string;
  type: Type;
  url?: string;
}

export interface ResizedURL {
  option: Option;
  resizedUrl: string;
}

export interface Option {
  media: Media;
}

export enum Media {
  MinWidth20Em = "(min-width: 20em)",
  MinWidth48Em = "(min-width: 48em)",
  MinWidth64Em = "(min-width: 64em)",
}

export enum Type {
  Image = "image",
  Video = "video",
}

export interface Tag {
  slug: string;
  text: string;
}

export interface Taxonomy {
  tags: Tag[];
}

export interface TagCount extends Tag {
  count: number;
}
