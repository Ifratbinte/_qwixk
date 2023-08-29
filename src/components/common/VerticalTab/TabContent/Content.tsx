import React from "react";

function TabContent(props: any) {
  let data = props.data;

  return (
    <div
      key={props.index}
      className={`${
        props.isActive ? "block" : "hidden"
      } font-poppins text-left text-base-paragraph`}
    >
      <div>
        <img src={data.gfx} alt="" />
      </div>
    </div>
  );
}

export default TabContent;
