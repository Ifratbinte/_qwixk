import React from "react";
import footerData from "#/__mocks__/link.json";
import Link from "next/link";

const FooterTop = () => {
  return (
    <div className="container mx-auto lg:section-gap sm:section-gap-m section-gap-sm">
      <div className="w-5/6 mx-auto">
        <ul className="flex md:flex-row flex-col items-center mb-10">
          {footerData.links.map((link: any, i: number) => {
            return (
              <li className="lg:mx-7 my-2 md:mt-0" key={i}>
                <Link
                  href={link.path}
                  className="font-poppins font-medium text-base-black hover:text-base-green hover:border-b-2 hover:border-b-green-500 transition duration-700 ease-in-out text-lg"
                >
                  {link.link_option}
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className="flex items-center justify-center">
          {footerData.icons.map((social: any, i: number) => {
            return (
              <li className="mx-2" key={i}>
                <Link href={social.path}>
                  <img src={social.icon} alt="" />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FooterTop;
