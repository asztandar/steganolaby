import * as React from "react";
import * as classess from "@styles/module/lsb_encode.module.css";

const Lsb = () => {
    return (
        <article className={classess.lsb}>
            <div className={classess.left}>
                <h1>Ustaw najmniej znaczący bit</h1>
                <p>
                    Za pomocą suwaków zaznacz najmniej znaczące bity każdej ze
                    składowej RGB.
                </p>
            </div>
            <div className={classess.right}>
                <div className={classess.range}>
                    <label htmlFor="red">
                        Składowa czerwonego:
                        <input type="range" min={0} max={7} id="red" className={`${classess.redSlider} ${classess.slider}`}/>
                    </label>
                    <label htmlFor="green">
                        Składowa zielonego:
                        <input type="range" min={0} max={7} id="green" className={`${classess.greenSlider} ${classess.slider}`}/>
                    </label>
                    <label htmlFor="blue">
                        Składowa niebieskiego:
                        <input type="range" min={0} max={7} id="blue" className={`${classess.blueSlider} ${classess.slider}`}/>
                    </label>
                </div>
            </div>
        </article>
    );
};
export default Lsb;
