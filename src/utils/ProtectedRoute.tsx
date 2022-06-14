import { Routes, Route, Link, Navigate } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { userStatus } from '../features/auth/authorizationSlice';

type Props = {    
    children: JSX.Element,
  };

const ProtectedRoute = ({ children }: Props) => {
    

    const status: any = useAppSelector(userStatus);
  const dispatch = useAppDispatch();
// console.log(user);

  if (status !== "LogIn") {
    // console.log("Navigate");
      return <Navigate to="/login" replace />;
  }  
  
  // console.log("children");
    return children;
};
  
export default ProtectedRoute;