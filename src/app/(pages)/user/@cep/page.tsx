"use client";

import Address from "@/app/api/address/address";
import AlertComponent from "@/app/components/ui/alertComponent";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Form from "./form";

const Page = () => {
  const [error, setError] = useState(false);
  const [alert, setAlert] = useState(false);
  const [token, setToken] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const redirect = useRouter();

  useEffect(() => {
    const receivedToken = localStorage.getItem("token");
    if (!receivedToken) return redirect.push("/auth/signin");
    setToken(receivedToken);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleForm = (e: any) => {
    const valor = e.target.value;
    if (valor.length > 8) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    const input = e.target.cep.value;
    if (input.length > 8) {
      handleAlert();
      return;
    }
    const response = await Address.getAddress(token);

    try {
      if (response) {
        const response = await Address.updateAddress(token, { cep: input });
        setLoading(false);
        handleSuccess();
        e.target.cep.value = "";
        return response;
      } else {
        const response = await Address.createAddress(token, { cep: input });
        setLoading(false);
        handleSuccess();
        e.target.cep.value = "";
        return response;
      }
    } catch (err) {
      setLoading(false);
      e.target.cep.value = "";
      handleAlert();
    }
  };

  const handleAlert = () => {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };

  const handleSuccess = () => {
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  }

  return (
    <div className="flex pb-20 gap-2 justify-center items-center flex-col w-screen h-screen">
      <AlertComponent
        alert={alert}
        mainText="Houve um erro!"
        description="Verifique o CEP inserido!!!"
      />
      <AlertComponent
        alert={success}
        mainText="Sucesso!!!"
        description="CEP atualizado/criado com sucesso!!!"
      />
      <Form handleForm={handleForm} handleSubmit={handleSubmit} error={error} loading={loading} />
    </div>
  );
};

export default Page;
