import { userLogin } from "../types/auth";

async function Login(user: userLogin) {
 return await fetch('http://localhost:3000/api/auth', {
  method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
 });
}

const Auth = {
 Login
}

export default Auth;