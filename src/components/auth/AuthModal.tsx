import React, { useState } from "react";
import Modal from "react-modal";
import Login from "./login";
import Registration from "./registration";

interface Props {
  isOpen: boolean;
  onclickOpen: () => void;
}

const AuthModal: React.FC<Props> = ({ isOpen, onclickOpen }) => {
  const [isLogin, setIsLogin] = useState(true);

  const handleOpen = () => {
    setIsLogin((prevState) => !prevState);
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onclickOpen}
      contentLabel="Modal"
      id="signIn"
      className={{
        base: "modal-base rounded-3xl !w-[27%] h",
        afterOpen: "modal-base_after-open",
        beforeClose: "modal-base_before-close",
      }}
      overlayClassName={{
        base: "overlay-base",
        afterOpen: "overlay-base_after-open",
        beforeClose: "overlay-base_before-close",
      }}
      shouldCloseOnOverlayClick={true}
      closeTimeoutMS={2000}
    >
      {isLogin ? (
        <Login onClick={handleOpen} />
      ) : (
        <Registration onClick={handleOpen} />
      )}
    </Modal>
  );
};
export default AuthModal;
