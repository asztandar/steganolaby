import * as React from "react";
import * as classess from "@styles/module/checking.module.css";
import axios from "axios";

const Checking = () =>{

    const [pin, setPin] = React.useState("");
    const [hash, setHash] = React.useState("");
    const [tokenLife, setTokenLife] = React.useState(0);
    const handleChangeText = (e) =>{
        setPin(e.target.value);
    }

    const handleOnClickPin = async(event) =>{
        event.preventDefault();
        if(pin.length > 0){
            // console.log("pin:",pin)
            axios.post(`https://rodwald.pl/steganolab/api/sprawdzanie.php?pin=${pin}`).then(function(response){
                // console.log("response:", response.data.data)
                if(response.data.data != null){
                    setHash(response.data.data.token);
                    alert("poprawny pin");
                    setPin("");
                    setTokenLife(response.data.data.token_life)
                }else{
                    alert("niepoprawny pin, administrator został poinformowany");
                }
            })
            
        }else{
            alert("no pin")
        }
    }

    React.useEffect(()=>{
        if(hash !== ""){
            const date = new Date();
            date.setTime(date.getTime() + (tokenLife * 60 * 1000));
            document.cookie = `tokenCheck=${hash}; expires=${date.toUTCString()}; path=/`;
        }
    },[hash, tokenLife])

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