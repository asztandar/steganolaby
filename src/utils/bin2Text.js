export const bin2Text = (binary) =>{
    let result = [];
    const length = binary.length
    for(let i=0;i<length;i+=8){
        result.push(binary.slice(i,i+9))
    }
    
}