"use client";
export const isAuthenticated = localStorage.getItem("token") ? true : false;
