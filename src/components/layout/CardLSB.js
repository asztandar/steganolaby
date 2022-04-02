import * as React from "react"

const CardLSB = (props) =>{
    // console.log("CardLSB props: ", props)
    return(
        <div className={props.cn}>
            <h1>LSB:</h1>
            <p>Czerwony: {props.red}</p>
            <p>Zielony: {props.green}</p>
            <p>Niebieski: {props.blue}</p>
        </div>
    )
}

export default CardLSB;