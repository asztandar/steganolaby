import * as React from "react";
import * as classess from "@styles/module/card.module.css";
import cx from "classnames";

const Card = (props) => {
    return (
        <article className={`${classess.card} ${cx(props.order === 1 ? classess.card_1 : classess.card_2)} `}>
            <figure>
                <img src={props.src} alt={props.alt} />
            </figure>
            <h1>{props.h1}</h1>
            <p>{props.p}</p>
        </article>
    );
};

export default Card;
