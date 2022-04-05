import * as React from "react";
import * as classess from "@styles/module/upload_encode.module.css";
import DragAndDrop from "../layout/DragAndDrop";
import Button from "../layout/Button";

const Upload = (props) => {
    return (
        <div className={classess.upload}>
            <Left />
            <Right />
        </div>
    );
};


const Left = () =>{
    return(
        <article className={classess.left}>
            <h1>Wgraj grafikę BMP</h1>
            <p>Przeciągnij i upuść swoją grafikę lub użyj przycisku aby wyszukać ją na swoim urządzeniu.</p>
            <Button order={1} title="USTAW LSB" text="USTAW LSB" navigateTo="lsb"/>
        </article>
    );
}

const Right = () =>{
    return(
        <article className={classess.right}>
            <DragAndDrop />
        </article>
    )
}

export default Upload;
