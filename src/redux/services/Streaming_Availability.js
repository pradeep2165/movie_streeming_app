import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const StreemingAvailability = createApi({
  reducerPath: "StreemingAvailability",
  baseQuery: fetchBaseQuery({
    
    baseUrl: "https://streaming-availability.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", "ddf1639fbmsh33d69adb9550963p16f529jsn706069293abe");
      return headers;
    },
  }),
  
  endpoints: (builder) => ({
    getSearchBasic: builder.query({ query: () => `/search/basic?country=us&service=netflix&type=movie&genre:18&page=1`}),
  }),
});

console.log(StreemingAvailability);
export const {useGetSearchBasicQuery} = StreemingAvailability;
