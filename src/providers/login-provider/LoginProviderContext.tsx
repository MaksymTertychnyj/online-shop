import React, { createContext } from "react";

const returnType: any = {};

const LoginProviderContext = createContext({
  setShowModal: (state: boolean) => returnType,
  isLogged: false,
  setIsLogged: (state: boolean) => returnType,
});

export default LoginProviderContext;
