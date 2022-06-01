import { useState } from "react";
import ModalLogIn from "../../components/modal-login/ModalLogIn";
import LoginProviderContext from "./LoginProviderContext";

const LoginProvider = ({ children }: any) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <LoginProviderContext.Provider value={{ setShowModal }}>
      {children}
      <ModalLogIn visible={showModal} closeModal={setShowModal} />
    </LoginProviderContext.Provider>
  );
};

export default LoginProvider;