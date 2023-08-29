import React from "react";
import Modal from "react-modal";
import { Button } from "@material-tailwind/react";
import FormInput from "../common/form/FormInput";
interface Props {
  isOpen: boolean;
  onclickOpen: () => void;
}

const AuthModal: React.FC<Props> = ({ isOpen, onclickOpen }) => (
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
    <div className="mx-auto w-full p-14">
      <div className="text-center mb-3">
        <h5 className="text-4xl font-bold ">Sign In</h5>
        <p  className="text-base-paragraph text-base py-6">
          Don’t Have an account?{" "}
          <a href="#signUp" className="text-base-green font-medium">
            Create an account
          </a>
        </p>
      </div>

      <div className="flex flex-col gap-8">
        <FormInput name="Email" placeholder="" type="email" />
        <FormInput
          name="Password"
          placeholder=""
          type="password"
        />
      </div>
      <div className="pt-8">
        <Button
          className="bg-gradient-to-r from-base-green-medium to-base-blue-light w-1/3 mx-auto"
          onClick={onclickOpen}
          fullWidth
        >
          Sign In
        </Button>
        <p className="text-base-paragraph text-base py-6 text-center">
          <a href="/" className="text-base-green font-medium mr-3">
           Forgot?
          </a>
          User Name or Password
        </p>
        {/* <button onClick={onclickOpen}>Close</button> */}
      </div>
    </div>
  </Modal>
);
export default AuthModal;
