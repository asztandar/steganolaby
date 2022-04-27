import * as React from "react";
import { Link } from "gatsby";
import * as classess from "@styles/module/menu.module.css";

const links = [
    {
        text: "Start",
        url: "/",
        title: "Strona główna projektu",
    },
    {
        text: "Ukryj",
        url: "/encode",
        title: "Ukryj wiadomość w grafice",
    },
    {
        text: "Odkryj",
        url: "/decode",
        title: "Odkryj wiadomość z grafiki",
    },
    // {
    //     text: "Sprawdzanie",
    //     url: "/check",
    //     title: "Opcja jedynie dla prowadzącego",
    // },
];

function toggleMobileMenu() {
    const menu = document.querySelector(`.${classess.hamburger_icon}`);
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
