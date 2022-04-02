export const imageRGBArrayBin = (rgbArray) =>{
    const rgbArrayBin = {
        rBin: [],
        gBin: [],
        bBin: [],
        aBin: [],
    }
    for(let i=0;i<rgbArray.r.length;i++){
        rgbArrayBin.rBin.push(("00000000"+rgbArray.r[i].toString(2)).substr(-8));
        rgbArrayBin.gBin.push(("00000000"+rgbArray.g[i].toString(2)).substr(-8));
        rgbArrayBin.bBin.push(("00000000"+rgbArray.b[i].toString(2)).substr(-8));
        rgbArrayBin.aBin.push(("00000000"+rgbArray.a[i].toString(2)).substr(-8));
    }
    return rgbArrayBin;
}