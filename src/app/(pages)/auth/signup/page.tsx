"use client";

import { useState } from "react";
import SignUp from "./signup";
import Auth from "@/app/api/auth/login";
import AlertComponent from "@/app/components/ui/alertComponent";
import { useRouter } from "next/navigation";

const Page = () => {
  const [disabled, setDisabled] = useState(true);
  const [alert, setAlert] = useState(false);
  const route = useRouter();

  if (alert) {
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (e.target.password.value !== e.target.confirmPassword.value) {
      setAlert(true);
      e.target.password.value = "";
      e.target.confirmPassword.value = "";
      return;
    }

    try {
      const user = {
        name: e.target.nome.value,
        email: e.target.email.value,
        password: e.target.password.value,
      };

      const response = await Auth.SignUp(user);

      if (response.status === 409 || response.status === 404) throw new ErrorEvent("error");

      return route.push("/auth/signin");
    } catch (err: any) {
      setAlert(true)
      console.log(err)
    }
  };

  const handlePasswordType = () => {
    setDisabled(!disabled);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <h1 className="font-extrabold text-white m-3 text-2xl -ml-24">
        Cadastrar-se
      </h1>
      <AlertComponent
        alert={alert}
        mainText="Houve um erro!"
        description="Verifique suas credenciais."
      />
      <SignUp
        handleSubmit={handleSubmit}
        disabled={disabled}
        handlePasswordType={handlePasswordType}
      />
    </div>
  );
};

export default Page;
