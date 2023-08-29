import React, { useEffect, useState } from "react";
import List from "../TabList/List";
import Content from "../TabContent/Content";

function VerticalTab(props: any) {
  const [activeTabId, setActiveTabId] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setActiveTabId(id);
  };

  useEffect(() => {
    setActiveTabId(0);
  }, []);

  console.log("tab data : ", props.data);

  return (
    <div className="relative">
      <div className="lg:flex justify-between gap-10">
        <div className="lg:w-7/12">
          <ul>
            {props.data.map((tablist: any, index: number) => (
              <List
                key={index}
                index={index}
                onClick={handleClick}
                data={tablist}
                isActive={index === activeTabId}
              />
            ))}
          </ul>
        </div>
        <div className="lg:w-5/12">
          {props.data.map((tabContent: any, index: number) => (
            <Content
              key={index}
              index={index}
              data={tabContent}
              isActive={index === activeTabId}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default VerticalTab;
