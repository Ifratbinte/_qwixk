import React from "react";
import { Button } from "@material-tailwind/react";
import FormInput from "../common/form/FormInput";
interface Props {
  onClick: () => void;
}

const Registration: React.FC<Props> = ({ onClick }) => (
  <div className="mx-auto w-full p-14">
    <div className="text-center mb-3">
      <h5 className="text-3xl font-bold ">Sign Up Now</h5>
      <p className="text-base-paragraph text-lg py-6">
        It takes less than a minutes
      </p>
    </div>

    <div className="flex flex-col gap-8">
      <FormInput name="First name" placeholder="" type="text" />
      <FormInput name="Last name" placeholder="" type="text" />
      <FormInput name="Email" placeholder="" type="email" />
      <FormInput name="Password" placeholder="" type="password" />
    </div>
    <div className="pt-8">
      <Button
        className="bg-gradient-to-r from-base-green-medium to-base-blue-light w-1/3 mx-auto font-poppins"
        fullWidth
      >
        Sign Up
      </Button>
      <p className="text-base-paragraph text-center text-base pt-6">
        Already have an account?
        <button onClick={onClick} className="text-base-green font-medium pl-2">
          Sign In
        </button>
      </p>
    </div>
  </div>
);
export default Registration;
