import { NavLink } from "react-router-dom";
import React, { useState } from "react";

import {ReactComponent as Logo} from "../images/controller.svg";

import "../styles/Nav.scss";
import Submenu from "./Submenu";

const Nav = () => {
	const [click, setClick] = useState(false);
	const [submenu, setSubmenu] = useState(false);
	const handleClick = () => setClick(!click);
	const closeMobile = () => setClick(false);
	//pojawianie sie i znikanie submenu
	const onMouseEnter = () => {
		if (window.innerWidth > 600) {
			setSubmenu(true);
		} else setSubmenu(false);
	};

	const onMouseLeave = () => {
		if (Window.innerWidth > 600) {
			setSubmenu(false);
		} else setSubmenu(false);
	};

	const clickOnMobile = () => {
		setSubmenu(!submenu);
	};

	return (
		<div>
			<nav className="nav">
				<NavLink to="/" className="nav__logo-link">
					<Logo className="nav__logo-link__svg"/>
					GG
				</NavLink>
				<div className="nav__hamburger">
					<i className={click ? "fas fa-times" : "fas fa-bars"} onClick={handleClick}></i>
				</div>
				<ul className={click ? "navbar--mobile" : "navbar"}>
					<li className="navbar__item" onClick={closeMobile}>
						<NavLink to="/about-us" className="navbar__item-link">
							About Us
						</NavLink>
					</li>
					<li className="navbar__item" onMouseLeave={onMouseLeave} onClick={clickOnMobile}>
						<NavLink to="/store" className="navbar__item-link" onMouseEnter={onMouseEnter}>
							Store <i className="fas fa-angle-down"></i>
						</NavLink>
						{submenu && <Submenu index="0" name="Subnav_Store" onClick={closeMobile} />}
					</li>
					<li className="navbar__item" onClick={closeMobile}>
						<NavLink to="/contact" className="navbar__item-link">
							Contact
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Nav;
