import React from "react";
import subscription_data from "#/__mocks__/subcription.json"
import Button from "#/components/Button/btn-primary"

const Subscription = () => {
  return (
    <div className="shadow-blur bg-white flex flex-col justify-center items-center px-16 py-6 mt-6">
      <img src={subscription_data.icon} alt="" className="h-14 w-14"/>
      <div className="text-2xl font-medium w-4/5 text-center tracking-wide py-4 mb-6">{subscription_data.title}</div>
      <input type="email" placeholder="Email Address" className="w-full rounded-lg px-4 py-3 mb-8 border border-green-100" />
      <Button text="Subscribe" />
    </div>
  );
};

export default Subscription;
