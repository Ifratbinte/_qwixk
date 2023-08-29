import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Menu from "./SidebarMenu";
import SubMenu from "./SubMenu";
import Link from "next/link";
// import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container">
      <div style={{ width: isOpen ? "50px" : "280px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "none" : "block" }} className="logo">
            Logo
          </h1>
          <div
            style={{ marginLeft: isOpen ? "-5px" : "50px" }}
            className="bars"
          >
            <h2 style={{ display: isOpen ? "block" : "none" }}>M</h2>
          </div>
        </div>
        {Menu.map((item, index) => {
          if (item.submenu) {
            return (
              <div className="submenu-container">
                <SubMenu isOpen={isOpen} item={item} key={item.title} />
              </div>
            );
          }
          return (
            <Link href={item.path} key={index} className="link">
              {/* <div className="icon">{item.Icon}</div> */}
              <div
                style={{ display: isOpen ? "none" : "block" }}
                className="link_text"
              >
                {item.title}
              </div>
            </Link>
          );
        })}
      </div>
      <main>
        <FaBars onClick={toggle} />
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
