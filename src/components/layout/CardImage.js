import * as React from "react"
import * as classess from "@styles/module/summary.module.css";
const CardImage = (props) => {
    return(
        <div className={props.cn}>
            <h1>Grafika:</h1>
            {props.url!==""? 
                <figure className={classess.figure}>
                    <img src={props.url} alt="twoja grafika" />
                </figure>
                :
                <p>Wczytaj grafikę w pierwszym kroku...</p>
            
        
            }
        </div>
    )
}
export default CardImage;