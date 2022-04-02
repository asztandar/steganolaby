export const text2Bin = (string) =>{
    return string.split('').map(function (char) {
        return ("00000000" + char.charCodeAt(0).toString(2)).substr(-8);
    }).join('');
}