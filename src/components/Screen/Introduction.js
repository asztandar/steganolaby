import * as React from "react";
import * as classess from "@styles/module/introduction.module.css";
import image_2 from "../../images/welcome.png";
import Button from "../layout/Button";
const Introduction = (props) => {
    return (
        <div className={classess.introduction}>
            <h1>Na czym polega metoda LSB?</h1>
            <figure>
                <img src={image_2} alt="lsb" />
                <figcaption><a href="https://commons.wikimedia.org/wiki/File:Seformatbmp-embedding_full.png">Źródło</a></figcaption>
            </figure>
            <p>
            LSB jest popularną  metodą ukrywania treści w plikach graficznych. Działanie algorytmu polega na zmianie najmniej znaczącego bitu/bitów składowych trzech barw (czerwonej, zielonej, niebieskiej) każdego piksela na bity odpowiadające treści ukrywanej wiadomości.
            </p>
            <Button order={2} title="ZAKODOWYWANIE" text="ZAKODOWYWANIE" navigateTo="encode_index" />
        </div>
    );
};

export default Introduction;
