import * as React from "react"
import * as classess from "@styles/module/loader.module.css";
const Loading = () =>{
    // console.log("ładowanie!!!!!")
    return(
        <article className={classess.loader}>
            Ładowanie...
        </article>
    )
}

export default Loading;