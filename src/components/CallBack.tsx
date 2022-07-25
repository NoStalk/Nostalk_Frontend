import React, { useEffect } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { useSearchParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
export default function CallBack() {
    const user = useAuth();
    const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const params = new URLSearchParams(window.location.pathname);
    
      const userData = {
        email: searchParams.get("email") as string,
        firstName: searchParams.get("firstName") as string,
        lastName: searchParams.get("lastName") as string,
      };
        console.log(userData);
      user.logIn(userData, searchParams.get("path") as string);
  }, []);

  return (
    <div style={{ display: "grid", placeItems: "center", width: "100vw", height: "100vh" }}>
      <InfinitySpin width="200" color="#4fa94d" />
    </div>
  );
}
