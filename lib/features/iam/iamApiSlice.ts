import { apiSlice } from "@/lib/apiSlice";

export const iamApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
    }),
    getOneUser: builder.query({
      query: (id) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
    }),
    createUser: builder.mutation({
      query: (user) => ({
        url: "/users",
        method: "POST",
        body: { ...user },
      }),
    }),
    updateUser: builder.mutation({
      query: (user) => ({
        url: `/users/${user.id}`,
        method: "PUT",
        body: { ...user },
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
    }),
    getRoles: builder.query({
      query: () => ({
        url: "/roles",
        method: "GET",
      }),
    }),
    getOneRole: builder.query({
      query: (id) => ({
        url: `/roles/${id}`,
        method: "GET",
      }),
    }),
    createRole: builder.mutation({
      query: (role) => ({
        url: "/roles",
        method: "POST",
        body: { ...role },
      }),
    }),
    updateRole: builder.mutation({
      query: (role) => ({
        url: `/roles/${role.id}`,
        method: "PUT",
        body: { ...role },
      }),
    }),
    deleteRole: builder.mutation({
      query: (id) => ({
        url: `/roles/${id}`,
        method: "DELETE",
      }),
    }),
    getPermissions: builder.query({
      query: () => ({
        url: "/permissions",
        method: "GET",
      }),
    }),
    getOnePermission: builder.query({
      query: (id) => ({
        url: `/permissions/${id}`,
        method: "GET",
      }),
    }),
    createPermission: builder.mutation({
      query: (permission) => ({
        url: "/permissions",
        method: "POST",
        body: { ...permission },
      }),
    }),
    updatePermission: builder.mutation({
      query: (permission) => ({
        url: `/permissions/${permission.id}`,
        method: "PUT",
        body: { ...permission },
      }),
    }),
    deletePermission: builder.mutation({
      query: (id) => ({
        url: `/permissions/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetOneUserQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,

  useGetRolesQuery,
  useGetOneRoleQuery,
  useCreateRoleMutation,
  useUpdateRoleMutation,
  useDeleteRoleMutation,

  useGetPermissionsQuery,
  useGetOnePermissionQuery,
  useCreatePermissionMutation,
  useUpdatePermissionMutation,
  useDeletePermissionMutation,
} = iamApiSlice;
