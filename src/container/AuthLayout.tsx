/* eslint-disable jsx-a11y/anchor-is-valid */
"use client";

import Link from "next/link";

const AuthLayout = ({ children }: any) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center flex-col p-10 lg:pb-20">
        <Link href="/"><img src="/images/logo/logo.png" alt="" /></Link>
        <div className="rounded shadow p-7 lg:px-14 lg:py-10 lg:w-[600px] dark:bg-dark-200">
          {children}
        </div>
      </div>
    </div>
  );
};
export default AuthLayout;
