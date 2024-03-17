"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SignoutPage() {
  const router = useRouter();
  useEffect(() => {
    localStorage.removeItem("token");
    alert("Vous êtes déconnecté");
    router.push("/");
  }, []);

  return <div className="min-h-screen"></div>;
}
