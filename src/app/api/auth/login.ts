import { userLogin, userSignUp } from "../../types/auth";
import backendUrl from "../backend";

async function Login(user: userLogin) {
  const response = await fetch(`${backendUrl}/api/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  return response;
}

async function SignUp(user: userSignUp) {
  const response = await fetch(`${backendUrl}/api/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  return response;
}

const Auth = {
  Login,
  SignUp
};

export default Auth;
