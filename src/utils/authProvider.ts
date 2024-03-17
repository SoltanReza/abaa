"use client";
export const isAuthenticated =
  typeof window !== "undefined"
    ? localStorage.getItem("token")
      ? true
      : false
    : false;
