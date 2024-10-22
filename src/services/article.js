import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const rapidApiKey = '497806add8msh786b803d5b9e483p18f28fjsn3fbcefcbf9e8';

export const articleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', rapidApiKey);
      headers.set(
        'X-RapidAPI-Host',
        'article-extractor-and-summarizer.p.rapidapi.com'
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) =>
        `summarize?url=${encodeURIComponent(params.articleUrl)}&length=5`,
    }),
  }),
});

export const { useLazyGetSummaryQuery } = articleApi;
