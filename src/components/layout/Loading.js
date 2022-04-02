import * as React from "react"
import loader from "../../images/loading.gif"
import * as classess from "@styles/module/loader.module.css";
const Loading = () =>{
    return(
        <article className={classess.loader}>
            <figure>
                <img src={loader} alt="loading"/>
            </figure>
        </article>
    )
}

export default Loading;