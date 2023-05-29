"use client";

import { FormControl, TextField, Button, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material"
import { useState } from "react";
import Link from "next/link";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  return (
    <div className="flex flex-col">
      <FormControl className="md:w-96 mx-auto w-11/12 rounded-lg p-5 bg-[#5F4844]">
        <TextField
          id="outlined-basic"
          placeholder="Email"
          variant="outlined"
          className="bg-white rounded-lg my-1"
        />
        <TextField
        type={showPassword ? 'text' : 'password'}
        className="bg-white rounded-lg my-1"
        placeholder="Senha"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleTogglePasswordVisibility}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
        <Button
          className="bg-red-500 my-2 h-12 hover:bg-red-400"
          type="submit"
          variant="contained"
        >
          Entrar
        </Button>
        <h1 className="text-white font-extrabold text-lg mx-auto my-4">ou</h1>
        <Button className="bg-white my-2 h-12 text-black">Google</Button>
        <Button className="bg-blue-600 my-2 h-12 text-black">Facebook</Button>
        <h1 className="text-white font-extrabold my-4 mx-auto">
          Não possui uma conta?{" "}
          <Link className="underline" href="/auth/signup">
            Cadastre-se
          </Link>
        </h1>
      </FormControl>
    </div>
  );
};

export default LoginForm;
