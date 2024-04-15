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
        const file = body.image;

        formData.append("username", body.username);
        formData.append("email", body.email);
        formData.append("birthdate", body.birthdate);
        formData.append("favorite_food_ids", body.favorite_food_ids);
        formData.append("upload_photo", file);

        return {
          url: `/create`,
          method: "POST",
          body: formData,
        };
      },
      invalidatesTags: ["Users", "User"],
    }),

    updateUser: build.mutation({
      query: (body) => {
        const formData = new FormData();
        const file = body.image;

        formData.append("username", body.username);
        formData.append("email", body.email);
        formData.append("birthdate", body.birthdate);
        formData.append("favorite_food_ids", body.favorite_food_ids);
        formData.append("upload_photo", file);

        return {
          url: `/create`,
          method: "POST",
          body: formData,
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
  useLazyGetUserQuery,
  useDeleteUserMutation,
  useDeleteAvatarUserMutation,
  useCreateUserMutation,
  useUpdateUserMutation,
} = usersQuery;
