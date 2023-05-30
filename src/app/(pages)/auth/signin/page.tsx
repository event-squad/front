"use client";

import Auth from "@/app/api/auth/login";
import { useState } from "react";
import Login from "./login";

const Page = () => {
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const user = {
      email: e.target.email.value,
      password: e.target.password.value
    }

    const response = await Auth.Login(user);

    console.log(await response.text());
  };

  const handlePasswordType = () => {
    setDisabled(!disabled);
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <h1 className="font-extrabold text-white m-3 text-2xl mr-64 ml-12">
        Login
      </h1>
      <Login handleSubmit={handleSubmit} disabled={disabled} handlePasswordType={handlePasswordType} />
    </div>
  );
};

export default Page;
