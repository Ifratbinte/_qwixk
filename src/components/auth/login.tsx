import React from "react";
import { Button } from "@material-tailwind/react";
import FormInput from "../common/form/FormInput";

interface LoginProps {
  onClick: () => void;
}

const Login: React.FC<LoginProps> = ({ onClick }) => {
  return (
    <div className="mx-auto w-full p-14">
      <div className="text-center mb-3">
        <h5 className="text-4xl font-bold ">Sign In</h5>
        <p className="text-base-paragraph text-base py-6">
          Don’t Have an account?
          <button onClick={onClick} className="text-base-green font-medium ml-2">
            Create an account
          </button>
        </p>
      </div>

      <div className="flex flex-col gap-8">
        <FormInput name="Email" placeholder="" type="email" />
        <FormInput name="Password" placeholder="" type="password" />
      </div>
      <div className="pt-8">
        <Button
          className="bg-gradient-to-r font-poppins from-base-green-medium to-base-blue-light w-1/3 mx-auto"
          fullWidth
        >
          Sign In
        </Button>
        <p className="text-base-paragraph text-base py-6 text-center">
          <a href="#" className="text-base-green font-medium mr-3">
            Forgot?
          </a>
          User Name or Password
        </p>
      </div>
    </div>
  );
};

export default Login;
