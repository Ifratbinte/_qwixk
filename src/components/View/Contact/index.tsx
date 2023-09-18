import React from "react";
import ContactInfo from "./ContactInfo";
import InputField from "#/components/common/form/InputField";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="container mx-auto md:section-gap-m py-0 px-6">
      <div className="lg:grid lg:grid-cols-3 gap-8 sm:w-5/6 mx-auto">
        <div className="shadow-base rounded-lg bg-white mb-8 lg:mb-0">
          <ContactInfo />
        </div>
        <div className="col-span-2 lg:p-8 p-4 bg-white shadow-base">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
