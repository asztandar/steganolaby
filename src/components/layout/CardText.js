import * as React from "react"

const CardText = (props) =>{
    return(
        <div className={props.cn}>
            <h1>Tekst:</h1>
            <p>{props.text}</p>
        </div>
    )
}

export default CardText;