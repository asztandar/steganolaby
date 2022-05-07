import * as React from "react";
import * as classess from "@styles/module/decodeSummary.module.css";
import Context from "../../utils/context";
import CardImage from "../layout/CardImage";
import CardLSB from "../layout/CardLSB";
import Loading from "../layout/Loading";
import { createCanvas } from "../../utils/createCanvas";
import { imageRGBArray } from "../../utils/imageRGBArray";
import { imageRGBArrayBin } from "../../utils/imageRGBArrayBin";
import { createImage } from "../../utils/createImage";
import { text2Bin } from "../../utils/text2Bin";


const dkLSB = (rgbArrayBin, red, green, blue) => {
    let textBin = "";
    for(let i=0;i<rgbArrayBin.rBin.length;i++){
        if(red > 0) textBin = textBin.concat(rgbArrayBin.rBin[i].slice(-red));
        if(green > 0) textBin = textBin.concat(rgbArrayBin.gBin[i].slice(-green));
        if(blue > 0) textBin = textBin.concat(rgbArrayBin.bBin[i].slice(-blue));
    }

    const textBinArray = [];
    for(let i=0;i<textBin.length;i+=8){
        textBinArray.push(textBin.slice(i,i+8))
    }
    return textBinArray

} 

const textBinArrayToText = (textBinArray) => {
    let text = "";
    let i=0;
    while(textBinArray[i] !== "00000000" && textBinArray.length > i){
        text = text.concat(String.fromCharCode(parseInt(textBinArray[i], 2)));
        i++;
    }
    if(text2Bin(text.slice(-1)) === "00000000") return text.slice(0,-1);
    return text;
}

const handleDecode = async({file, red, green, blue}) =>{
    const imageData = await createCanvas(file);
    const rgbArray = imageRGBArray(imageData);
    const rgbArrayBin = imageRGBArrayBin(rgbArray);
    const textBinArray = dkLSB(rgbArrayBin, red, green, blue);
    const decodeText = textBinArrayToText(textBinArray);
    return decodeText;
}

const Summary = (props) =>{
    const [context,setContext] = React.useContext(Context);
    const [url, setUrl] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(0);
    const [isResponse, setIsResponse] = React.useState(false);
    const [message, setMessage] = React.useState("");
    const [limit, setLimit] = React.useState(0);
    const [containerSize, setContainerSize] = React.useState(0);
    React.useEffect(()=>{
        if(context.file !== ""){
            let fileReader = new FileReader();
            fileReader.onload = () =>{
                let fileURL = fileReader.result;
                setUrl(fileURL);
            };
            fileReader.readAsDataURL(context.file)
        }
    },[context]);

    React.useEffect(()=>{
        if(isResponse){
            setIsLoading(2);
        }
    }, [isResponse])

    const handleButtonOnClick = async() =>{
        if(context.file ===""){
            alert("Upewnij się że załadowałeś grafikę");
        }else{
            setContext({...context, disabled:true})
            setIsLoading(1);
            const decodedText =  await handleDecode(context);
            setMessage(decodedText);
            if(props.admin){
                const image = await new Promise((res,rej)=>{
                    res(createImage(context.file));
                });
                const width = image.width;
                const height = image.height;
                const val = (parseInt(context.red) + parseInt(context.green) + parseInt(context.blue));
                const ret = (val * width * height)/8
                const sizeContainer = (width*height*val)/(context.file.size*8);
                setLimit(ret);
                setContainerSize(sizeContainer);
            }
            setIsResponse(true);
        }
    }

    const Summary0 = () => {
        return(
            <>
                <h1>Podsumowanie i odkrywanie</h1>
                <div className={classess.cards}>
                    <CardImage cn={classess.card} url={url} />
                    <CardLSB cn={classess.card} red={context.red} green={context.green} blue={context.blue} />
                </div>
                <button className={classess.button} type="button" title="UKRYJ" onClick={handleButtonOnClick}>ODKRYJ</button>
            </>
        )
    }

    const Summary1 = () => {
        return(
            <>
                {props.admin === false?
                    <>
                    <h1>Odczytana wiadomość:</h1>
                    <p className={`${classess.p} ${classess.overflowText}`}>{message}</p>
                    </>
                    :
                    <>
                        <h1>Odczytana wiadomość oraz pojemność kontenera:</h1>
                        <p className={`${classess.p} ${classess.overflowText}`}>Wiadomość: {message}</p>
                        <p className={classess.p}>Długość wiadomości: {message.length} znaków.</p>
                        <p className={classess.p}>Pojemność:{Math.floor(limit)} znaków.</p>
                        <p className={classess.p}>Pojemność: {(containerSize*100).toFixed(2)}%</p>
                        <button style={{marginBottom: 5}} onClick={() => {
                            window.scrollTo(0,0)
                            window.location.reload(true)
                            }}>Od początku</button>
                    </>
                }
                
            </>
        )
    }


    
    return(
        <section className={classess.summary}>
            {
                isLoading === 1 ?
                <Loading />
                :
                isLoading === 0 ?
                    <Summary0 />
                    :
                    <Summary1 />
            }
        </section>
        
    );
}

export default Summary;