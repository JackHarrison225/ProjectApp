"use client";
import { useEffect, useState } from "react";
import { ApiClient } from "./ApiClient";
import Dashboard from "./componants/dashboard";
import AuthoriseUser from "./componants/authbox";

export default function Home() {
  const [token, setToken] = useState(null);
  const client = new ApiClient(
    () => token,
    () => logout()
  );

  useEffect(() => {
  }, [token]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);

  const login = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const logout = () => {
    localStorage.setItem("token", null);
    setToken(null);
  };

  return (
    <body className="h-full">
      {token ? (
        <Dashboard setToken={setToken} client={client}/>
      ) : (
        <AuthoriseUser loggedIn={(token) => login(token)} client={client} />
      )}
    </body>  
  );
}