import * as React from "react";
import * as classess from "@styles/module/message_encode.module.css";
import { text2Bin } from "../../utils/text2Bin";
import Button from "../layout/Button";
import Context from "../../utils/context";

const Message = () =>{

    const [input, setInput] = React.useState("");
    const [inputBin, setInputBin] = React.useState("");

    const [context, setContext] = React.useContext(Context);

    const handleChange = (e) =>{
        setInput(e.target.value)
        setContext({...context, text: e.target.value})
    }

    React.useEffect(()=>{
        const t2b = text2Bin(input);
        // console.log("t2b: ",t2b)
        setInputBin(t2b);
        // console.log("setIB: ", inputBin);
    },[input, inputBin]);


    return(
        <article className={classess.message}>
            <div className={classess.left}>
                <textarea value={input} onChange={handleChange} />
            </div>
            <div className={classess.right}>
                <h1>Wprowadź tekst</h1>
                <p>Wprowadz tekstu, który chcesz ukryć w grafice.</p>
                <Button order={1} title="PODSUMOWANIE" text="PODSUMOWANIE" navigateTo="summary"/>
            </div>
        </article>
    );
}

export default Message;