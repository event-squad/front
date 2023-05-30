type Props = {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  disabled: boolean;
  handlePasswordType: () => void;
};

import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { FormEvent } from "react";

export default function SignUp({ handleSubmit, disabled }: Props) {
  return (
    <div
      className="flex items-center flex-col
      bg-[#614946] rounded-lg border-solid
      w-72 h-auto p-5 shadow-perso"
    >
      <form onSubmit={(e) => handleSubmit(e)}>
        <Input
          required
          id="nome"
          placeholder="Nome"
          type="text"
          className="bg-white text-black mb-2"
        />
        <Input
          required
          id="email"
          placeholder="Email"
          type="email"
          className="bg-white text-black mb-2"
        />
        <Input
          required
          id="password"
          type="password"
          placeholder="Senha"
          className="bg-white text-black mb-2"
        />
        <Input
          required
          id="confirmPassword"
          type="password"
          placeholder="Confirmar Senha"
          className="bg-white text-black mb-2"
        />
        <Button
          type="submit"
          className="bg-[#F73B5D] w-full font-extrabold hover:bg-red-500"
        >
          Cadastrar-se
        </Button>
      </form>
      <p className="text-white text-sm mt-3">
        Já possui uma conta?{" "}
        <Link href="/auth/signin" className="text-white text-sm mt-3 underline">
          Clique aqui!
        </Link>
      </p>
    </div>
  );
}
