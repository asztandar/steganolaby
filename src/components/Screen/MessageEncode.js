import * as React from "react";
import * as classess from "@styles/module/message_encode.module.css";
import { text2Bin } from "../../utils/text2Bin";
import Button from "../layout/Button";
import Context from "../../utils/context";

const Message = () =>{

    const [input, setInput] = React.useState("");
    const [inputBin, setInputBin] = React.useState("");
    const [isDisabled, setIsDisabled] = React.useState(false);

    const [context, setContext] = React.useContext(Context);

    const handleChange = (e) =>{
        setInput(e.target.value)
        setContext({...context, text: e.target.value})
    }

    React.useEffect(()=>{
        const t2b = text2Bin(input);
        setInputBin(t2b);
    },[input, inputBin]);

    React.useEffect(()=>{
        if(context.disabled){
            setIsDisabled(true);
        }
    },[context])


    return(
        <article className={classess.message}>
            <div className={classess.left}>
                <textarea value={input} onChange={handleChange} disabled={isDisabled} />
            </div>
            <div className={classess.right}>
                <h1>Wprowadź tekst</h1>
                <p>Wprowadz tekstu, który chcesz ukryć w grafice.</p>
                <p>UWAGA! Tekst musi składać się ze znaków z podstawowej tablicy ASCII (bez np. polskich znaków).</p>
                <Button order={1} title="PODSUMOWANIE" text="PODSUMOWANIE" navigateTo="summary"/>
            </div>
        </article>
    );
}

export default Message;