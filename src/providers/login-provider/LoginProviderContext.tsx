import React, { createContext } from "react";

const returnType: any = {};

const LoginProviderContext = createContext({
  setShowModalLogin: (state: boolean) => returnType,
  setShowModalRegister: (state: boolean) => returnType,
  isLogged: false,
  setIsLogged: (state: boolean) => returnType,
});

export default LoginProviderContext;
