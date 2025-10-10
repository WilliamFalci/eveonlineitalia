

export interface IBlog {
  title: string;
  link: string;
  author: string;
  category: string;
  guid: string;
  pubDate: Date;
  content: string;
}

export interface IBlogTranslated {
  title_eng: string;
  title_ita: string;
  link: string;
  author: string;
  category: string;
  guid: string;
  pubDate: Date;
  content_eng: string;
  content_ita: string;
  slug: string;
}