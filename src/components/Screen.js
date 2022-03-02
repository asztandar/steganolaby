import * as React from "react";
import cx from "classnames";
import * as classess from "@styles/module/screen.module.css";

/**
 * @param {string} order
 */
function whatClass(order){
    switch(order.toLowerCase()){
        case "header":{
            return classess.article_header;
            // break;
        }
        case "primary":{
            return classess.article_primary;
            // break;
        }
        case "second":{
            return classess.article_second;
            // break;
        }
        case "footer_primary":{
            return classess.article_footer_primary;
            // break;
        }
        case "footer_second":{
            return classess.article_footer_second;
            // break;
        }
        case "header_footer":{
            return classess.article_header_footer;
            // break;
        }
        default:{
            return classess.article_primary;
            // break;
        }
    }
}

const Screen = (props) => {
    return (
        <article className={cx(whatClass(props.order))} id={props.id}>
            {props.children}
        </article>
    );
};

export default Screen;
