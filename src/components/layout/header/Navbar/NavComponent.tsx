import NavItems, { NavInterface } from "./MenuItems";
import NavItem from "./NavItem";
const Nav = () => {
  return (
    <>
      <ul className="menu lg:flex lg:items-center lg:ml-10">
        {NavItems &&
          NavItems.map((item: NavInterface, i: number) => {
            return <NavItem key={i} item={item} />;
          })}
      </ul>
    </>
  );
};

export default Nav;
