import * as React from "react";
import * as classess from "@styles/module/drag_and_drop.module.css";
import cloud from "../../images/cloud_1.svg"
const DragAndDrop = () =>{
    return (
        <div className={classess.dnd}>
            <figure>
                <img src={cloud} alt="cloud" className={classess.cloud}/>
            </figure>
            <span className={classess.text}>
                Przeciągnij i upuść tutaj
                <br />
                lub
                <br />
                <button>Przeglądaj</button>
            </span>
        </div>
    );
}

export default DragAndDrop;