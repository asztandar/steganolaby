import * as React from 'react';
import { Link } from "gatsby"
import * as classess from '@styles/module/menu.module.css';

const links = [
    {
        text:"Strona główna",
        url: "/",
        title: "Strona główna projektu",
    },
    {
        text:"Zakoduj",
        url: "/encode.js",
        title: "Zakoduj wiadomość w grafice",
    },
    {
        text:"Odkoduj",
        url: "/decode.js",
        title: "Odkoduj wiadomość z grafiki",
    },
    {
        text:"Sprawdzanie",
        url: "/check.js",
        title: "Opcja jedynie dla prowadzącego",
    }
]

const Menu = () => {
    return(
        <nav className={classess.menu}>
            <ul>
                {links.map(link => (
                    <li key={link.url}>
                        <Link to={link.url} title={link.title}>{link.text}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );

}

export default Menu;