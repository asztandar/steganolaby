import * as React from "react";
import * as classess from "@styles/module/summary.module.css";
import Context from "../../utils/context";
import CardImage from "../layout/CardImage";
import CardLSB from "../layout/CardLSB";
import CardText from "../layout/CardText";
import Loading from "../layout/Loading";
import { text2Bin } from "../../utils/text2Bin";
import { createCanvas } from "../../utils/createCanvas";
import { kLSB } from "../../utils/kLSB";
import { imageRGBArray } from "../../utils/imageRGBArray";
import {imageRGBArrayBin} from "../../utils/imageRGBArrayBin";
import { createSteganoImageData } from "../../utils/createSteganoImageData";
import Canvas2Image from "../../utils/canvas2image";

const handleEncode = async({file, red, green, blue, text}) =>{
    const imageData = await createCanvas(file);
    /* File to RGB_ARRAY */

    const rgbArray = imageRGBArray(imageData);
    const rgbArrayBin = imageRGBArrayBin(rgbArray)
    /* Text to bin */
    const textBin = text2Bin(text);
    /* kLSB */
    const encodeBMP = kLSB(rgbArrayBin, red, green, blue, textBin)
    /* Create new image data */
    const steganoImageData = createSteganoImageData(encodeBMP,imageData);
    const newCanvas = await new Promise((resolve,reject)=>{
        resolve(createNewCanvas(steganoImageData))
    })
    // const newCanvas = createNewCanvas(steganoImageData);

    return newCanvas;

}

const createNewCanvas = async(imageData) =>{

    const canvas = document.createElement("canvas");
    canvas.width = imageData.width;
    canvas.height = imageData.height;
    const context = canvas.getContext("2d");
    context.putImageData(imageData,0,0);
    const image = await new Promise((resolve, reject)=>{
        resolve(canvas)
    });
    return image;
}



const Summary = () =>{
    const [context, setContext] = React.useContext(Context);
    const [url, setUrl] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(0);
    const [imageNew, setImageNew] = React.useState(null);
    const [canvasNew, setCanvasNew] = React.useState(null);
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

    React.useEffect(() =>{
        if(imageNew !== null){
            setIsLoading(2);
        }
    },[imageNew])


    const handleButtonOnClick = async() => {
        if(context.file ==="" || context.text === ""){
            alert("Upewnij się że załadowałeś grafikę oraz wpisałeś tekst!");
        }else{
            setContext({...context, disabled:true})
            setIsLoading(1)
            const canvas = await handleEncode(context)
            const image = await new Promise((resolve, reject)=>{
                resolve(Canvas2Image.convertToBMP(canvas, canvas.width, canvas.height).src);
            })
            setCanvasNew(canvas);
            setImageNew(image);
        }
    }


    const Summary0 = () => {
        return(
            <>
                <h1>Podsumowanie i ukrywanie</h1>
                <div className={classess.cards}>
                    <CardImage cn={classess.card} url={url} />
                    <CardLSB cn={classess.card} red={context.red} green={context.green} blue={context.blue} />
                    <CardText cn={classess.card} overflowText={classess.overflowText} text={context.text} />
                </div>
                <button className={classess.button} type="button" title="UKRYJ" onClick={handleButtonOnClick}>UKRYJ</button>
            </>
        )
    }
    
    const Summary1 = (canvasNew) => {
        const handleOnClick = () =>{
            const canvas = canvasNew.canvasNew;
            const w = canvas.width;
            const h = canvas.height;
            const type = "bmp";
            Canvas2Image.saveAsImage(canvas, w, h, type, "steganolab");
        }
        return (
            <>
                <h1>Pobieranie</h1>
                <div className={classess.summary_1}>
                    <div className={classess.image} id="image">
                        <img src={imageNew} alt="nowy obraz" />
                    </div>
                    <div className={classess.download}>
                        <button onClick={handleOnClick}>Pobierz</button>
                    </div>
                </div>
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
               <Summary1 canvasNew={canvasNew}/>
            }
        </section>
    );
}



export default Summary;