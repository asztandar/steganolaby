export const arrayBinToArrayDec = (arrayBin) =>{
    const temp = [];
    for(let i=0;i<arrayBin.length;i++){
        temp.push(parseInt(arrayBin[i], 2))
    }
    return temp;
}