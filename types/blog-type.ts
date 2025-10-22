

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

export interface NextPrevPost {
  slug: string;
  title_ita: string;
  title_eng: string;
}

export interface BlogPostTranslated {
  post: IBlogTranslated;
  prevPost: NextPrevPost;
  nextPost: NextPrevPost;
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