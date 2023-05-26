import LoginForm from "./login-form";
import Logo from "./logo";

const Page = () => {
 return(
  <div className="md:flex flex-col justify-center items-center">
   <Logo />
   <h1 className=" text-white font-extrabold text-3xl my-4 mx-7">Login</h1>
   <LoginForm />
  </div>
 )
}

export default Page;