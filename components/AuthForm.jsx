"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { signIn } from "next-auth/react";

const AuthForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const router = useRouter();

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  const login = useCallback(async (e) => {
    e.preventDefault();

    try {
      signIn("credentials", { username, password, redirect: false });

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  });

  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        email,
        username,
        password,
      });
      login();
    } catch (error) {
      console.log(error);
    }
  }, [email, username, password]);

  return (
    <div>
      <div>
        <section className="">
          <div className="">
            <div className="flex items-center justify-center">
              <div className="mb-12 md:mb-0 bg-slate-100/80 border border-slate-200 px-14 py-10 rounded-lg">
                <form>
                  <div className="flex items-center justify-center mb-5">
                    <p className="text-lg">
                      {variant === "login"
                        ? "Sign in to your account"
                        : "Sign up a new account"}
                    </p>
                  </div>
                  <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300"></div>
                  <div className="relative z-0 mb-6">
                    <input
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      type="text"
                      id="floating_standard"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-lime-500 peer"
                      placeholder=" "
                    />
                    <label className="absolute text-sm text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lime-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Username
                    </label>
                  </div>

                  {variant === "register" && (
                    <div className="relative z-0 mb-6">
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        id="floating_standard"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-lime-500 peer"
                        placeholder=" "
                      />
                      <label className="absolute text-sm text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lime-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Email
                      </label>
                    </div>
                  )}

                  <div className="relative z-0 mb-8">
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-lime-500 peer"
                      placeholder=" "
                    />
                    <label className="absolute text-sm text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lime-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Password
                    </label>
                  </div>

                  <div className="text-center lg:text-left">
                    <button
                      onClick={variant === "login" ? login : register}
                      type="button"
                      className="w-full text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 shadow-[0_4px_9px_-4px_#84997f] uppercase"
                    >
                      {variant === "login" ? "Sign In" : "Sign Up"}
                    </button>

                    <p className="mb-0 mt-4 pt-1 text-sm font-medium text-gray-900">
                      {variant === "login"
                        ? "Don't have an account?"
                        : "Already have an account?"}
                      <a
                        onClick={toggleVariant}
                        className="ml-2 text-lime-500 transition duration-150 ease-in-out hover:text-lime-600 focus:text-lime-600 active:text-lime-700 cursor-pointer"
                      >
                        {variant === "login" ? "Sign Up" : "Sign In"}
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AuthForm;
