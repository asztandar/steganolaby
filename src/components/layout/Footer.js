import * as React from "react";
import * as classess from "@styles/module/footer.module.css";


const Footer = () => {
  const dateNow = new Date().getFullYear();
  return (
    <footer className={classess.footer}>
        <span>
            &copy; Copyright {`${dateNow}`} by Adam Sztandar. All Rights Reserved.
        </span>
    </footer>
  );
};

export default Footer;
