'use client';

import { redirect } from "next/navigation";

const Redirecting = () => {
  const cookie = localStorage.getItem('token')
  console.log(cookie)

  if (cookie) return redirect('/feed')

  return redirect('/auth/signin')
}

export default Redirecting;
