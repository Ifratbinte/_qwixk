import navItems, { NavInterface } from "./MenuItems";
import NavItem from "./NavItem";

const Nav = () => {
  return (
    <>
      <ul className="menu flex lg:items-center items-start lg:flex-row flex-col lg:ml-10">
        {navItems &&
          navItems.map((item: NavInterface, index: number) => (
            <NavItem
              key={index}
              title={item.title}
              path={item.path}
              items={item.submenu || []}
            />
          ))}
      </ul>
    </>
  );
};

export default Nav;
