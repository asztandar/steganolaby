import * as React from "react";
import * as classess from "@styles/module/button.module.css";
import cx from "classnames";
import { Link } from "gatsby";
const Button = (props) => {
    return (
        <button
            className={`${classess.button} ${cx(
                props.order === 1 ? classess.button_1 : classess.button_2
            )} `}
            type="button"
            title={props.title}>
            <Link to={`#${props.navigateTo}`}>
                {props.text}
            </Link>
        </button>
    );
};

export default Button;
