import React from "react";
import { MdOutlineNotificationsNone } from "react-icons/md";

function Notification() {
  return (
    <>
      {/* after:absolute after:content-[' '] after:h-2 after:w-2 after:bg-red-500 after:rounded-full after:right-0 */}
      <MdOutlineNotificationsNone className="notification relative hover:bg-green-50 text-[#526484] hover:text-green-500 rounded-full cursor-pointer transition-all ease-in-out delay-150 h-12 w-12 p-2" />
    </>
  );
}

export default Notification;
