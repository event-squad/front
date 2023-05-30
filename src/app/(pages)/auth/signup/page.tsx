"use client";

import { Alert, AlertDescription, AlertTitle } from "@/app/components/ui/alert";
import { Terminal } from "lucide-react";
import { useState } from "react";
import SignUp from "./signup";
import Auth from "@/app/api/auth/login";

const Page = () => {
  const [disabled, setDisabled] = useState(true);
  const [alert, setAlert] = useState(false);

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

    const user = {
      name: e.target.nome.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    const response = await Auth.SignUp(user)
    console.log(response)
    return response;
  };

  const handlePasswordType = () => {
    setDisabled(!disabled);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <h1 className="font-extrabold text-white m-3 text-2xl -ml-24">
        Cadastrar-se
      </h1>

      <Alert
        className={`transition-all ${
          alert ? "top-0 animate-slide-down" : "-top-96  animate-slide-up"
        } delay-0 animate-bounce absolute bg-[#614946] text-white border-none right-0 m-6 w-auto h-auto fade-out-5`}
      >
        <Terminal />
        <AlertTitle>Aconteceu algo!</AlertTitle>
        <AlertDescription>Verifique suas credenciais.</AlertDescription>
      </Alert>
      <SignUp
        handleSubmit={handleSubmit}
        disabled={disabled}
        handlePasswordType={handlePasswordType}
      />
    </div>
  );
};

export default Page;
