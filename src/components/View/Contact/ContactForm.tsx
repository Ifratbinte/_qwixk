import React from "react";
import FormField from "./FormField";

const ContactForm = () => {
  return (
    <>
      <FormField
        name="Enter Your Name*"
        email="Enter your email address*"
        textarea="Write Your Message*"
      />
    </>
  );
};

export default ContactForm;
