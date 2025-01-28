import { FcGoogle } from "react-icons/fc";
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  const {  loginWithRedirect } = useAuth0();


  return (
    <div>
      <form className="w-96  shadow-md  shadow-slate-500 space-y-2  flex flex-col p-5  m-auto mt-16  rounded-md ">
        <label className="border-b-2 w-10 border-slate-500" htmlFor="email">
          Email:
        </label>
        <input
          className="outline-none  border-b-2 p-2 border-black "
          type="email"
          placeholder="Enter Your Email"
        />
        <label
          className="border-b-2  w-[4.5em] border-slate-500"
          htmlFor="password"
        >
          Password:
        </label>
        <input
          className="outline-none mb-4 border-b-2 p-2 border-black"
          type="password"
          placeholder="Enter Your Password"
        />
        <button className="bg-orange-600  text-white mt-10 rounded-md p-3 text-base">
          Login
        </button>
        <button
          onClick={() => {
            loginWithRedirect();
          }}
          className="border-black border-2 gap-x-4 text-base flex justify-center items-center  rounded-xl p-2  "
        >
          <FcGoogle size={25} />

          <span>Login With Google</span>
        </button>
      </form>
    </div>
  );
}

export default Login;
