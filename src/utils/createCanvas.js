import { createImage } from "./createImage";
export const createCanvas = async(file) =>{
    const image = await createImage(file)
    // console.log("createCanvas width: ", image.width)
    const canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    const context = canvas.getContext("2d");
    context.drawImage(image,0,0);
    const imageData = context.getImageData(0,0,canvas.width,canvas.height)
    // console.log("createCanvas imageData:",imageData)
    return imageData;
}