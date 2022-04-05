import * as React from "react";
import * as classess from "@styles/module/checking.module.css";
import axios from "axios";

const Checking = () =>{

    const [pin, setPin] = React.useState("");
    const [hash, setHash] = React.useState("");
    const handleChangeText = (e) =>{
        setPin(e.target.value);
    }

    const handleOnClickPin = (event) =>{
        event.preventDefault();
        if(pin.length > 0){
            console.log("pin:",pin)
            axios.post(`http://localhost/stegano/api/sprawdzanie.php?pin=${pin}`).then(function(response){
                console.log("response:", response.data.data)
                if(response.data.data != null){
                    setHash(response.data.data);
                }
            })
        }else{
            alert("no pin")
        }
    }

    React.useEffect(()=>{
        if(hash !== ""){
            const date = new Date();
            date.setTime(date.getTime() + (5 * 60 * 1000));//5min
            document.cookie = `tokenCheck=${hash}; expires=${date.toUTCString()}; path=/`;
        }
    },[hash])

    return(
        <article className={classess.checking}>
            <h1>Podstrona tylko dla prowadzącego!</h1>
            <p>Wszystkie próby wysłania pinu są rejestrowane i nadużycia będą zgłaszane.</p>
            <p>Wprowadź pin:</p>
            <input type="text" onChange={handleChangeText} value={pin}/>
            <button onClick={handleOnClickPin}>Wyślij</button>
        </article>
    );
}

export default Checking;