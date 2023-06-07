'use client';

import { redirect } from "next/navigation";

const Redirecting = () => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem('token')

    if (token) return redirect('/feed')
  
    return redirect('/auth/signin')
  }
  
}

export default Redirecting;
