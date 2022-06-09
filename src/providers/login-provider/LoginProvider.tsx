import { useState } from "react";
import ModalLogIn from "../../components/modal-login/ModalLogIn";
import ModalRegister from "../../components/modal-register/ModalRegister";
import LoginProviderContext from "./LoginProviderContext";

const LoginProvider = ({ children }: any) => {
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [showModalRegister, setShowModalRegister] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  return (
    <LoginProviderContext.Provider
      value={{ setShowModalLogin, setShowModalRegister, isLogged, setIsLogged }}
    >
      {children}
      <ModalLogIn visible={showModalLogin} closeModal={setShowModalLogin} />
      <ModalRegister visible={showModalRegister} closeModal={setShowModalRegister} />
    </LoginProviderContext.Provider>
  );
};

export default LoginProvider;
