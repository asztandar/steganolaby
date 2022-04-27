import { arrayBinToArrayDec } from "./arrayBinToArrayDec";
export const createSteganoImageData = (encodeBMP, imageData) =>{
    const temp = [];
    for(let i=0;i<encodeBMP.r.length;i++){
        temp.push(encodeBMP.r[i]);
        temp.push(encodeBMP.g[i]);
        temp.push(encodeBMP.b[i]);
        temp.push(encodeBMP.a[i]);
    }
    const arrayDec = arrayBinToArrayDec(temp);
    for(let i=0;i<imageData.data.length;i++){
        imageData.data[i] = arrayDec[i];
    }
    return imageData;
}