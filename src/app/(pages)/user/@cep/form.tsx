type Props = {
  handleForm: (e: any) => void;
  handleSubmit: (e: any) => void;
  error: boolean;
  loading: boolean;
};

import Image from "next/image";
import ProfilePicture from "@/../public/images/profile-picture.webp";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";

const Form = ({ handleForm, handleSubmit, error, loading }: Props) => {
  return (
    <form
      onSubmit={handleSubmit}
      onChange={handleForm}
      className="flex w-3/4 justify-center items-center gap-2 flex-col"
    >
      <Image
        className="rounded-full mb-2"
        width={200}
        src={ProfilePicture}
        alt="profile picture"
      />
      <Input
        id="cep"
        placeholder="Digite seu CEP..."
        disabled={loading}
        className={`bg-white w-72 text-black ${
          error && "border-red-500 animate-pulse"
        }`}
        type="number"
      />
      {error && (
        <h1 className="text-red-500 text-center pulse">
          CEP precisa pode conter no maximo 8 caracateres
        </h1>
      )}
      <Button disabled={loading} className={`${loading ? "bg-black" : "bg-[#F73B5D]"} w-72 border-solid text-center border-black font-extrabold`}>
        {loading ? "..." : "Adicionar / alterar CEP"}
      </Button>
    </form>
  );
};

export default Form;
