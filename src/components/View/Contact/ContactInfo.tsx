import React from "react";
import ContactList from "#/components/common/widgets/List";
import { Divider } from "@mui/material";
import links from "#/__mocks__/link.json";
import Link from "next/link";

const ContactInfo = () => {
  return (
    <>
      <div className="px-10 py-8 bg-gradient-to-r from-base-green-medium to-base-blue rounded-t-lg">
        <div className="text-[30px] font-bold text-white">Contact Details</div>
      </div>
      <div className="p-10">
        <h5 className="text-xl font-semibold mb-4">Contact Info</h5>
        <ContactList />
        <Divider className="py-6 text-base-green-light" />
        <h5 className="text-xl font-semibold my-4">Follow Us</h5>
        <ul className="flex items-center">
          {links.icon_stroke.map((social: any, i: number) => {
            return (
              <li className="mr-10" key={i}>
                <Link href={social.path}>
                  <img src={social.icon} alt="" className="h-7 w-7" />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ContactInfo;
