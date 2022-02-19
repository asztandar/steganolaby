import * as React from "react";
import * as classess from "@styles/module/introduction.module.css";
import image_2 from "../../images/t.svg";
import Button from "../layout/Button";
const Introduction = (props) => {
    return (
        <div className={classess.introduction}>
            <h1>Na czym polega metoda LSB?</h1>
            <img src={image_2} alt="lsb" />
            <p>
                LSB to inaczej metoda najmniej znaczącego bitu. Jest najczęściej
                wykorzystywaną metodą ukrywania treści w plikach graficznych.
                Działanie algorytmu polega na zmianie najmniej znaczącego bitu
                każdego piksela na bity odpowiadające treści ukrywanej
                wiadomości.
            </p>
            <Button order={2} title="ZAKODOWYWANIE" text="ZAKODOWYWANIE" navigateTo="encode_index" />
        </div>
    );
};

export default Introduction;
