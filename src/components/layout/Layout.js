import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "@styles/main.css";

const Layout = (props) => {
    return (
        <main>
            <Header />
            <section>{props.children}</section>
            <Footer />
        </main>
    );
};

export default Layout;
