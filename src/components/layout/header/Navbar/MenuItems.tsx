export interface NavInterface {
  id: number;
  title: string;
  path: string
}

const NavItems: NavInterface[] = [
  {
    id: 1,
    title: "Home",
    path: "/"
  },
  {
    id: 2,
    title: "Apps",
    path: "/apps"
  },
  {
    id: 3,
    title: "Resources",
    path: "/resources"
  },
  {
    id: 4,
    title: "Contact",
    path: "/contact"
  },
  {
    id: 5,
    title: "About",
    path: "/about"
  },
];
export default NavItems;
