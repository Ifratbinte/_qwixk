import React from "react";
import { MdOutlineNotificationsNone } from "react-icons/md";

function Notification() {
  return (
    <>
    {/* after:absolute after:content-[' '] after:h-2 after:w-2 after:bg-red-500 after:rounded-full after:right-0 */}
      <MdOutlineNotificationsNone className="notification relative bg-emerald-100 hover:bg-green-200 rounded-full border-2 border-green-200 cursor-pointer transition ease-in-out delay-150 h-12 w-12 p-2 " />
    </>
  );
}

export default Notification;
