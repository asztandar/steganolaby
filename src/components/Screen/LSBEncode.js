import * as React from "react";
import * as classess from "@styles/module/lsb_encode.module.css";

const Lsb = () => {
    const [range, setRange] = React.useState({
        red: 0,
        green: 0,
        blue: 0,
    });

    const [rangeShow, setRangeShow] = React.useState({
        red: "11111111",
        green: "11111111",
        blue: "11111111",
    });

    const handleChange = (e) => {
        setRange({
            ...range,
            [e.target.name]: e.target.value,
        });
        let temp = "11111111";
        let tempTab = [...temp];
        for (let i = 7; i > 7 - e.target.value; i--) {
            tempTab[i] = "#";
        }
        setRangeShow({
            ...rangeShow,
            [e.target.name]: tempTab.join(""),
        });
    };
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
                        LSB składowa czerwonego: {rangeShow.red}
                        <input
                            type="range"
                            min={0}
                            max={8}
                            step={1}
                            name="red"
                            id="red"
                            defaultValue={range.red}
                            onChange={handleChange}
                            className={`${classess.redSlider} ${classess.slider}`}
                        />
                    </label>
                    <label htmlFor="green">
                        LSB składowa zielonego: {rangeShow.green}
                        <input
                            type="range"
                            min={0}
                            max={8}
                            step={1}
                            name="green"
                            id="green"
                            defaultValue={range.green}
                            onChange={handleChange}
                            className={`${classess.greenSlider} ${classess.slider}`}
                        />
                    </label>
                    <label htmlFor="blue">
                        LSB składowa niebieskiego: {rangeShow.blue}
                        <input
                            type="range"
                            min={0}
                            max={8}
                            step={1}
                            name="blue"
                            id="blue"
                            defaultValue={range.blue}
                            onChange={handleChange}
                            className={`${classess.blueSlider} ${classess.slider}`}
                        />
                    </label>
                </div>
            </div>
        </article>
    );
};
export default Lsb;
