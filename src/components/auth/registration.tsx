import React from "react";
import Modal from "react-modal";
import { Button } from "@material-tailwind/react";
import InputField from "../common/form/InputField";
import FormInput from "../common/form/FormInput";
import { FiUserCheck } from "react-icons/fi";
interface Props {
  isOpen: boolean;
  onclickOpen: () => void;
}

const AuthModal: React.FC<Props> = ({ isOpen, onclickOpen }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onclickOpen}
    contentLabel="Modal"
    className={{
      base: "modal-base rounded-3xl !w-[27%]",
      afterOpen: "modal-base_after-open",
      beforeClose: "modal-base_before-close",
    }}
    id="signUp"
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
        <h5 className="text-3xl font-bold ">Sign Up Now</h5>
        <p className="text-base-paragraph text-lg py-6">
          It takes less than a minutes
        </p>
      </div>

      <div className="flex flex-col gap-8">
        <FormInput name="First name" placeholder="" type="text"/>
        <FormInput name="Last name" placeholder="" type="text" />
        <FormInput name="Email" placeholder="" type="email" />
        <FormInput name="Password" placeholder="" type="password" />
      </div>
      <div className="pt-8">
        <Button
          className="bg-gradient-to-r from-base-green-medium to-base-blue-light w-1/3 mx-auto"
          onClick={onclickOpen}
          fullWidth
        >
          Sign Up
        </Button>
        <p className="text-base-paragraph text-center text-base pt-6">
          Already have an account?
          <a href="#signIn" className="text-base-green font-medium pl-2">
            Sign In
          </a>
        </p>
      </div>
    </div>
  </Modal>
);
export default AuthModal;
