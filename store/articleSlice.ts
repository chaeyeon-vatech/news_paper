import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StateType } from "store";

export type ArticleType = {
  abstract: string;
  byline: {
    original: string;
    person: Array<any>; // 현재는 any 타입입니다. 실제 데이터 구조에 맞게 수정하세요.
    organization: null;
  };
  document_type: string;
  headline: {
    content_kicker: null;
    kicker: null;
    main: string;
    name: null;
    print_headline: string;
    seo: null;
    sub: null;
  };
  keywords: Array<Keyword>; // 현재는 any 타입입니다. 실제 데이터 구조에 맞게 수정하세요.
  lead_paragraph: string;
  multimedia: Array<Multimedia>; // 현재는 any 타입입니다. 실제 데이터 구조에 맞게 수정하세요.
  news_desk: string;
  print_page: string;
  print_section: string;
  pub_date: string;
  section_name: string;
  snippet: string;
  source: string;
  subsection_name: string;
  type_of_material: string;
  uri: string;
  web_url: string;
  word_count: number;
  _id: string;
};

// 예를 들어, keywords 및 multimedia를 더 자세히 정의하려면 다음과 같이 할 수 있습니다.

type Keyword = {
  name: string;
  value: string;
  rank: number;
  major: string;
};

type Multimedia = {
  type: string;
  url: string;
  width: number;
  height: number;
  subtype: string;
  caption: string;
  credit: string;
};

interface ArticleState {
  articles: ArticleType[];
}

const initialState: ArticleState = {
  articles: [],
};

const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setArticles: (state, action: PayloadAction<ArticleType[]>) => {
      state.articles = action.payload;
    },
  },
});

export const { setArticles } = articleSlice.actions;

export const selectArticles = (state: StateType) => state.articles;

export default articleSlice.reducer;
