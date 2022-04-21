export const kLSB = (rgbArrayBin, iR, iG, iB, textBin) => {
     let r = rgbArrayBin.rBin;
     let g = rgbArrayBin.gBin;
     let b = rgbArrayBin.bBin;
     let a = rgbArrayBin.aBin;
     //     console.log(iR,iG,iB,text);
     // console.log("kLSB rgbArrayBin: ", rgbArrayBin);
     // console.log("kLSB r: ", r);
     //     console.log("kLSB r[0]: ", r[0])
     //     console.log("kLSB r[1]: ", r[1])
     let text = textBin + "00000000";
     const textLength = text.length;
     console.log("text: ", text)
     for (let i = 0; i < r.length && i<textLength; i++) {
               let temp = r[i].substring(0, 8 - iR);
               while (temp.length < 8) {
                    if (text.length > 0) {
                         temp = temp.concat(text[0])
                         text = text.slice(1)
                    } else {
                         temp = temp.concat("0")
                    }
               }
               r[i] = temp;

               temp = g[i].substring(0, 8 - iG);
               while (temp.length < 8) {
                    if (text.length > 0) {
                         temp = temp.concat(text[0])
                         text = text.slice(1)
                    } else {
                         temp = temp.concat("0")
                    }
               }
               g[i] = temp;

               temp = b[i].substring(0, 8 - iB);
               while (temp.length < 8) {
                    if (text.length > 0) {
                         temp = temp.concat(text[0])
                         text = text.slice(1)
                    } else {
                         temp = temp.concat("0")
                    }
               }
               b[i] = temp;
          

     }
     //     console.log("kLSBa r[0]: ", r[0])
     //     console.log("kLSBa r[1]: ", r[1])

     const result = {
          r: r,
          g: g,
          b: b,
          a: a
     }
     console.log("result: ", result)
     return result;
}