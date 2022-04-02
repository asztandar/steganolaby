export const imageRGBArray = (imageData) =>{
    const rgbArray={
        r: [],
        g: [],
        b: [],
        a: [],
    }
    for(let i = 0; i < imageData.data.length; i=i+4){
        rgbArray.r.push(imageData.data[i])
        rgbArray.g.push(imageData.data[i+1])
        rgbArray.b.push(imageData.data[i+2])
        rgbArray.a.push(imageData.data[i+3])
    }
    return rgbArray;
}