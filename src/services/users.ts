import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser, IGetUsersParams } from "../types/types";

export const usersQuery = createApi({
  reducerPath: "usersQuery",
  tagTypes: ["Users", "User"],

  baseQuery: fetchBaseQuery({
    baseUrl: "http://tasks.tizh.ru/v1/user/",
  }),

  endpoints: (build) => ({
    getUsers: build.query<IUser[], IGetUsersParams>({
      query: (params) => {
        // const {} = params;
        console.log("params", params);

        return {
          url: `/index`,
          params,
        };
      },
      providesTags: ["Users"],
    }),
  }),
});

export const { useGetUsersQuery } = usersQuery;
