import { arrayBinToArrayDec } from "./arrayBinToArrayDec";
export const createSteganoImageData = (encodeBMP, imageData) =>{
    // console.log("createSteganoImage encodeBMP: ", encodeBMP);
    const temp = [];
    for(let i=0;i<encodeBMP.r.length;i++){
        temp.push(encodeBMP.r[i]);
        temp.push(encodeBMP.g[i]);
        temp.push(encodeBMP.b[i]);
        temp.push(encodeBMP.a[i]);
    }
    // console.log("createSteganoImage temp: ", temp)
    const arrayDec = arrayBinToArrayDec(temp);
    // console.log("imageData.data start:", imageData.data)
    for(let i=0;i<imageData.data.length;i++){
        imageData.data[i] = arrayDec[i];
    }
    return imageData;
}