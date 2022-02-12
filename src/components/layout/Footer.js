import * as React from "react";
import * as classess from "@styles/module/footer.module.css";


const Footer = () => {
  const dateBegin = 2021;
  const dateNow = new Date().getFullYear();
  return (
    <footer className={classess.footer}>
        <span>
            &copy; Copyright {`${dateBegin} - ${dateNow}`}. All Rights Reserved.
        </span>
    </footer>
  );
};

export default Footer;
