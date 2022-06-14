import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import {
  Navigate,
  useParams,
  useLocation,
  useNavigate,
} from "react-router-dom";

import React from "react";

type Props = {
  children: JSX.Element;
};

export const AuthProvider = ({ children }: Props) => {
  let ocation = useParams();
  let location = useLocation();

  let navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    const authTokens = localStorage.getItem("authTokens");
    if (authTokens) {
      const jsonauthTokens = JSON.parse(authTokens);
      setAuthToken(jsonauthTokens);
      setUser(jwt_decode(jsonauthTokens.Token));
    } else {
      setAuthToken(null);
      setUser(null);
    }
  });

  const logoutUser = () => {
    console.log("logout");
    setAuthToken(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    navigate("/login");
  };
  useEffect(() => {
    const time_to_update = 1000 * (60 * 4);
    const interval = setInterval(() => {
      if (authToken) {
      }
    }, time_to_update);
    return () => clearInterval(interval);
  }, []);
  return <div>{children}</div>;
};
