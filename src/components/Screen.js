import * as React from "react";
import cx from "classnames";
import * as classess from "@styles/module/screen.module.css";

function whatClass(order){
    if(order === 0) return classess.article_header;
    else if(order === 1) return classess.article_1;
    else if(order === 2) return classess.article_2;
    else if(order === 3) return classess.article_header_footer;
    else return classess.article_footer
}

const Screen = (props) => {
    return (
        <article className={cx(whatClass(props.order))} id={props.id}>
            {props.children}
        </article>
    );
};

export default Screen;
