export const kLSB = (rgbArrayBin, iR, iG, iB, textBin) => {
     let r = rgbArrayBin.rBin;
     let g = rgbArrayBin.gBin;
     let b = rgbArrayBin.bBin;
     let a = rgbArrayBin.aBin;
     let text = textBin + "00000000";
     const textLength = text.length;
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

     const result = {
          r: r,
          g: g,
          b: b,
          a: a
     }
     return result;
}