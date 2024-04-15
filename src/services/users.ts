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
    getUser: build.query<IUser, string | undefined>({
      query: (id) => `/view?id=${id}`,
      providesTags: ["User"],
    }),
    getFoodList: build.query({
      query: () => "/get-food-list",
    }),
    deleteUser: build.mutation({
      query: ({ id }) => ({
        url: `/delete?id=${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Users", "User"],
    }),
    deleteAvatarUser: build.mutation({
      query: (body) => ({
        url: `/file/delete`,
        params: {
          id: body.id,
        },
        method: "DELETE",
      }),
      invalidatesTags: ["Users", "User"],
    }),
    createUser: build.mutation({
      query: (body) => {
        const formData = new FormData();

        formData.append("file", body.image);

        return {
          url: `/create`,
          method: "POST",
          body: {
            username: body.username,
            email: body.email,
            favorite_food_ids: body.selectedFoods,
            birthdate: body.birthdate,
            upload_photo: formData,
          },

          headers: {
            "content-type": "application/json",
          },
        };
      },
      invalidatesTags: ["Users", "User"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetFoodListQuery,
  useGetUserQuery,
  useDeleteUserMutation,
  useDeleteAvatarUserMutation,
  useCreateUserMutation,
} = usersQuery;
