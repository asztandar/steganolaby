import * as React from "react";
import * as classess from "@styles/module/welcome.module.css";
import image_1 from "../../images/1.svg"
import Button from "../layout/Button";

const Welcome = (props) => {
    return (
        <div className={classess.welcome}>
            <Left order={props.order}/>
            <Right/>
        </div>
    );
}

const Left = (props) => {
    return (
        <article className={classess.left}>
            <h1>Steganografia</h1>
            <p>
                Wykorzystaj metodę najmniej znaczącego bitu w celu zakodowania/odkodowania tajnej wiadomości w pliku graficznym BMP.
            </p>
            <Button order={props.order} title="WPROWADZENIE" text="WPROWADZENIE" navigateTo="introduction"/>
        </article>
    );
}

const Right = () => {
    return (
        <article className={classess.right}>
            <img src={image_1} alt="welcome" />
        </article>
    );
}

export default Welcome;