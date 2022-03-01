import * as React from "react";
import * as classess from "@styles/module/message_encode.module.css";
import image from "../../images/6.svg";
const Message = () =>{

    const [input, setInput] = React.useState("");


    const handleChange = (e) =>{
        setInput(e.target.value)
    }

    React.useEffect(()=>{
        console.log(input)
    },[input]);
    return(
        <article className={classess.message}>
            <div className={classess.left}>
                <textarea value={input} onChange={handleChange} />
            </div>
            <div className={classess.right}>
                <h1>Wprowadź tekst</h1>
                <p>Wprowadz tekstu, który chcesz ukryć w grafice.</p>
                {/* <img src={image} alt="type text" /> */}
            </div>
        </article>
    );
}

export default Message;