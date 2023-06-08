"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

const Redirecting = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) return redirect("/feed");

    return redirect("/auth/signin");
  }, []);
};

export default Redirecting;
