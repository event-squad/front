"use client";

import Auth from "@/app/api/auth/login";
import AlertComponent from "@/app/components/ui/alertComponent";
import { useState } from "react";
import Login from "./signin";
import { useRouter } from "next/navigation";

const Page = () => {
  const [disabled, setDisabled] = useState(true);
  const [alert, setAlert] = useState(false);
  const route = useRouter();

  if (alert)
    setTimeout(() => {
      setAlert(false);
    }, 3000);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const user = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    try {
      const response = await Auth.Login(user);

      if (response.status === 409 || response.status === 404) {
        console.log("error")
        throw new ErrorEvent("error");
      }

      localStorage.setItem('token', await response.text());
      return route.push("/");
    } catch (err: any) {
      console.log(err);
      setAlert(true);
      e.target.email.value = "";
      e.target.password.value = "";
    }
  };

  const handlePasswordType = () => {
    setDisabled(!disabled);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <h1 className="font-extrabold text-white m-3 text-2xl mr-64 ml-12">
        Login
      </h1>
      <AlertComponent
        alert={alert}
        mainText="Houve um erro!"
        description="Email e/ou senha inválido!"
      />
      <Login
        handleSubmit={handleSubmit}
        disabled={disabled}
        handlePasswordType={handlePasswordType}
      />
    </div>
  );
};

export default Page;
