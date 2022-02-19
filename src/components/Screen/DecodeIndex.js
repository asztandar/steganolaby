import * as React from "react";

import * as classess from "@styles/module/decode_index.module.css";
import Card from "../layout/Card";
import image_1 from "../../images/3.svg"
import image_2 from "../../images/5.svg"
import image_3 from "../../images/7.svg"

const DecodeIndex = (props) => {
    return (
        <div className={classess.decode}>
            <h1>Odkoduj wiadomość</h1>
            <span className={classess.text}>w trzech prostych krokach:</span>
            <div className={classess.card}>
                <Card order={2} src={image_1} alt="wgraj grafikę" h1="Wgraj swoją grafikę" p='Przeciągnij i upuść swoją grafikę w wyznaczonym miejscu lub skorzystaj z przycisku "Wczytaj grafikę"' />
                <Card order={2} src={image_2} alt="Ustaw najmniej znaczący bit" h1="Ustaw najmniej znaczący bit" p='Za pomocą suwaków zaznacz najmniej znaczące bity każdej ze składowej RGB.' />
                <Card order={2} src={image_3} alt="Odczytaj wiadomość" h1="Odczytaj wiadomość" p='W wyznaczonym miejscu pojawi się wiadomość ukryta w grafice.' />

            </div>
        </div>
    );
}

export default DecodeIndex;