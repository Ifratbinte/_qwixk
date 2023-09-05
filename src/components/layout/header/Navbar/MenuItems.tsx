export interface NavInterface {
  id: number;
  title: string;
  path: string;
  submenu?: any;
}

const NavItems: NavInterface[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Apps",
    path: "/apps",
  },
  {
    id: 3,
    title: "Resources",
    path: "#",
    submenu: [
      {
        id: 1,
        title: "News & Articles",
        path: "/news",
      },
      {
        id: 1,
        title: "Research",
        path: "#",
      },
      {
        id: 1,
        title: "Support",
        path: "/support",
      },
    ],
  },
  {
    id: 4,
    title: "Contact",
    path: "/contact",
  },
  {
    id: 5,
    title: "About",
    path: "/about",
  },
];
export default NavItems;
