import { Counter } from "#/components/counter";
import Home from "#/components//View/Home";
import SweetAlert from "sweetalert2";
import { useEffect } from "react";

export default function HomePage() {
  // useEffect(() => {
  //   SweetAlert.fire({
  //     title:
  //       "<span style='color: #00B860; font-size: 36px', <b>Qwixk</b></span> is Under Construction",
  //     html: `
  //        <img src="./images/maintenance.gif" alt="Your Image" style="width: 150px; height: 150px; margin: auto">
  //        <p>Hi! Our site is <b>Undergoing Maintenance</b>. We reach to you very soon. Thank You!</p>
  //        <span></span>
  //      `,
  //   });
  // }, []);
  return (
    <>
      <Home />
    </>
  );
}
