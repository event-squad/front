type Props = {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  disabled: boolean;
  handlePasswordType: () => void;
};

import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { FormEvent } from "react";
import IconEyeSlash from "@/app/components/icons/eyeClosed";
import IconEye from "@/app/components/icons/eyeOpen";

export default function Login({
  handleSubmit,
  disabled,
  handlePasswordType,
}: Props) {
  return (
    <div
      className="flex items-center flex-col
      bg-[#614946] rounded-lg border-solid
      w-72 h-auto p-5"
    >
      <form onSubmit={(e) => handleSubmit(e)}>
        <Input
          required
          id="email"
          placeholder="Email"
          type="email"
          className="bg-white text-black mb-2"
        />
        <div className="relative">
          <Input
            required
            id="password"
            placeholder="Senha"
            type={disabled ? "password" : "text"}
            className="bg-white text-black mb-2"
          />

          {disabled ? (
            <IconEyeSlash onClick={handlePasswordType} className="absolute right-4 top-1/4 text-xl cursor-pointer" />
          ) : (
            <IconEye onClick={handlePasswordType} className="absolute right-4 top-1/4 text-xl cursor-pointer" />
          )}
        </div>
        <Button
          type="submit"
          className="bg-[#F73B5D] w-full font-extrabold hover:bg-red-500"
        >
          Entrar
        </Button>
      </form>
      <h1 className="text-white m-3 font-extrabold">ou</h1>
      <Button className="bg-white text-black w-full mb-2 hover:bg-white">
        Google
      </Button>
      <Button className="bg-blue-500 text-white w-full hover:bg-blue-500">
        Facebook
      </Button>
      <p className="text-white text-sm mt-3">
        Não possui uma conta?{" "}
        <Link href="/auth/signup" className="text-white text-sm mt-3 underline">
          Cadastre-se
        </Link>
      </p>
    </div>
  );
}
