import * as React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import * as classess from "@styles/module/header.module.css";

const Header = () => {
    return (
        <header className={classess.header}>
            <Logo />
            <Menu />
        </header>
    );
};

export default Header;
