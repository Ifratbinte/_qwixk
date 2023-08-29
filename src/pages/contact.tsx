import Cooking from "#/components/Cooking";
import SectionHeader from "#/components/section-header";
import React from "react";
import FormElem from "#/components/View/Contact";
import section_header from "#/__mocks__/sectionHeader.json";

const Contact = () => {
  return (
    <div>
      <SectionHeader
        title={section_header.contact.title}
        subtitle={section_header.contact.subtitle}
      />
      <FormElem />
    </div>
  );
};

export default Contact;
