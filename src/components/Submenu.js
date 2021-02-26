import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Submenu.scss";

const Subnav_Store = [
  { id: 1, path: "/store/games", name: "games" },
  { id: 2, path: "/store/gadgets", name: "gadgets" },
];

const tab = [{ Subnav_Store }];

const Submenu = ({ index, name, onClick }) => {
  const [click, setClick] = React.useState(true);

  const handleClick = () => setClick(!click);

  const List = tab[index][name];
  const nav = List.map((element) => (
    <li className="submenu__item" key={element.id}>
      <NavLink
        className="submenu__item-link"
        to={element.path}
        onClick={onClick}
      >
        {element.name}
      </NavLink>
    </li>
  ));
  return (
    <ul
      className={click ? "submenu" : "submenu--clicked"}
      onClick={handleClick}
    >
      {nav}
    </ul>
  );
};

export default Submenu;
