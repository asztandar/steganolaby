export const createImage = async(file) =>{
    const image = new Image();
    const reader = new FileReader();
    reader.readAsDataURL(file);
    const readerResult = await new Promise((resolve, reject)=>{
        reader.onload = function(){
            resolve(reader.result)
        }
    })
    
    image.src = readerResult;
    return image;
}