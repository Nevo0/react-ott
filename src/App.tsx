import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "./app/hooks";
import "./App.css";
import { Home } from "./features/home/Home";
import { Splash } from "./features/splash/Splash";
import { Authorization } from "./features/auth/Authorization";
import SingleVideo from "./features/singleVideo/SingleVideo";
import { userStatus } from "./features/auth/authorizationSlice";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  const status: "idle" | "loading" | "failed" | "LogIn" =
    useAppSelector(userStatus);
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Splash />
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path=":videoId"
              element={
                <ProtectedRoute>
                  <SingleVideo />
                </ProtectedRoute>
              }
            />

            <Route
              path="/login"
              element={
                status == "LogIn" ? <Navigate to="/" /> : <Authorization />
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
