import { userLogin, userSignUp } from "../../types/auth";

async function Login(user: userLogin) {
  return await fetch("http://localhost:3000/api/auth/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
}

async function SignUp(user: userSignUp) {
  return await fetch("http://localhost:3000/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
}

const Auth = {
  Login,
  SignUp
};

export default Auth;
