import { AUTH_URL } from "../constant";
import { apiSlice } from "./apiSlice";

interface AuthResponse {
  user: {
    _id: string;
    email: string;
    name: string;
    role: string;
  };
}

interface AuthRequest {
  email: string;
  password: string;
}

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation<AuthResponse, AuthRequest>({
      query: (data) => ({
        url: `${AUTH_URL}/sign-up`,
        method: "POST",
        body: data,
      }),
    }),
    signIn: builder.mutation<AuthResponse, AuthRequest>({
      query: (data) => ({
        url: `${AUTH_URL}/sign-in`,
        method: "POST",
        body: data,
      }),
    }),
    signOut: builder.mutation<void, void>({
      query: () => ({
        url: `${AUTH_URL}/sign-out`,
        method: "POST",
        // cookie or not checked ?
      }),
    }),
    verifyEmail: builder.mutation<void, { email: string; token: string }>({
      query: (data) => ({
        url: `${AUTH_URL}/verify-email`,
        method: "POST",
        body: data,
        // cookie or not checked ?
      }),
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation, useSignOutMutation, useVerifyEmailMutation } = authApiSlice;
