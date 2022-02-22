import * as React from "react";
import { Link } from "gatsby";
import * as classess from "@styles/module/menu.module.css";

const links = [
    {
        text: "Strona główna",
        url: "/",
        title: "Strona główna projektu",
    },
    {
        text: "Zakoduj",
        url: "/encode",
        title: "Zakoduj wiadomość w grafice",
    },
    {
        text: "Odkoduj",
        url: "/decode",
        title: "Odkoduj wiadomość z grafiki",
    },
    {
        text: "Sprawdzanie",
        url: "/check",
        title: "Opcja jedynie dla prowadzącego",
    },
];

function toggleMobileMenu() {
    const menu = document.querySelector(`.${classess.hamburger_icon}`);
    console.log("menu: ", menu)
    menu.classList.toggle(`${classess.open}`);


    const menuList = document.querySelector(`.${classess.menuMobile}`);
    menuList.classList.toggle(`${classess.open}`);
}

const Menu = () => {
        return (
            <nav className={classess.menu}>
                <div className={classess.menuScreen}>
                    <ul>
                        {links.map((link) => (
                            <li key={link.url}>
                                <Link to={link.url} title={link.title} activeClassName={classess.active_link}>
                                    {link.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div
                    className={classess.hamburger_icon}
                    onClick={toggleMobileMenu}
                    onKeyDown={toggleMobileMenu}
                    role="presentation"
                >
                    <div className={`${classess.bar1} ${classess.bar}`}></div>
                    <div className={`${classess.bar2} ${classess.bar}`}></div>
                    <div className={`${classess.bar3} ${classess.bar}`}></div>
                    <div className={classess.menuMobile}>
                        <ul>
                            {links.map((link) => (
                                <li key={link.url}>
                                    <Link to={link.url} title={link.title} activeClassName={classess.active_link} >
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    };

export default Menu;
