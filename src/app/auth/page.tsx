// pages/login.js
"use client";
import { apiFetch, baseUrl } from "@/utils/apiFetch";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AlertDialog from "../components/dialog/dialog";

export default function Login() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [signInDialog, setSignInDialog] = useState(false);
  const [signUpDialog, setSignUpDialog] = useState(false);
  const router = useRouter();

  const signIn = async () => {
    const response = await fetch(baseUrl + "/api/auth/local", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ identifier: email, password }),
    });

    if (response.ok) {
      response.json().then((data) => {
        localStorage.setItem("token", data.jwt);
        setSignInDialog(true);
      });
    } else {
      // Handle errors (e.g., show a message)
    }
  };

  const signUp = async () => {
    const response = await fetch(baseUrl + "/api/auth/local/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });

    if (response.ok) {
      const token = await response.json();
      localStorage.setItem("token", token);
      setSignUpDialog(true);
    } else {
      // Handle errors (e.g., show a message)
    }
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    isLogin ? signIn() : signUp();
  };

  const handleFormType = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        className="w-1/2  bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        {!isLogin && (
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Nom d'utilisateur ..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        )}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Votre adresse mail ..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button className="btn-sm" type="submit">
            {isLogin ? "Sign In" : "Sign Up"}
          </button>
          <p
            onClick={handleFormType}
            className="text-blue-300 cursor-pointer transition ease-out delay-75 hover:text-blue-700 "
          >
            {isLogin ? "Je n'ai pas de compte" : "J'ai déjà un compte"}
          </p>
        </div>
      </form>

      {signInDialog && (
        <AlertDialog
          open={signInDialog}
          handleClose={() => {
            setSignInDialog(false);
            router.push("/");
          }}
          title="Vous êtes connecté"
          description="Bienvenue"
          buttonText="D'accord"
        />
      )}
      {signUpDialog && (
        <AlertDialog
          open={signUpDialog}
          handleClose={() => {
            setSignUpDialog(false);
            router.push("/");
          }}
          title="Vous êtes inscrit"
          description="Bienvenue"
          buttonText="D'accord"
        />
      )}
    </div>
  );
}
