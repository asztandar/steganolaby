import * as React from "react";

import * as classess from "@styles/module/encode_index.module.css";
import Card from "../layout/Card";
import Button from "../layout/Button";
import image_1 from "../../images/3.svg"
import image_2 from "../../images/6.svg"
import image_3 from "../../images/5.svg"

const EncodeIndex = (props) => {
    return (
        <div className={classess.encode}>
            <h1>Zakoduj wiadomość</h1>
            <span className={classess.text}>w trzech prostych krokach:</span>
            <div className={classess.card}>
                <Card order={1} src={image_1} alt="wgraj grafikę" h1="Wgraj swoją grafikę" p='Przeciągnij i upuść swoją grafikę w wyznaczonym miejscu lub skorzystaj z przycisku "Wczytaj grafikę"' />
                <Card order={1} src={image_2} alt="Dodaj wiadomość" h1="Dodaj wiadomość" p='Wprowadź tekst jaki chcesz ukryć w grafice.' />
                <Card order={1} src={image_3} alt="Ustaw najmniej znaczący bit" h1="Ustaw najmniej znaczący bit" p='Za pomocą suwaków zaznacz najmniej znaczące bity każdej ze składowej RGB.' />
            </div>
            <Button order={1} title="ODKODOWYWANIE" text="ODKODOWYWANIE" navigateTo="decode_index" />
        </div>
    );
}

export default EncodeIndex;