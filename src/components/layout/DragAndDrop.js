import * as React from "react";
import * as classess from "@styles/module/drag_and_drop.module.css";
import cloud from "../../images/cloud_1.svg"
import wrong from "../../images/warning.svg"
import Modal from "./Modal";



const DragAndDrop = () =>{

    const [showModal, setShowModal] = React.useState(false);

    const acceptedExtension = ['bmp'];
    let file = null;
    let fileType = "";

    const handleDragOver = (e) =>{
        e.preventDefault();
        console.log("over");
        document.querySelector(`.${classess.dnd}`).classList.add(`${classess.active}`);
    }
    
    const handleDragLeave = (e) =>{
        e.preventDefault();
        console.log("leave");
        document.querySelector(`.${classess.dnd}`).classList.remove(`${classess.active}`);
    }
    
    const handleDrop = (e) =>{
        e.preventDefault();
        e.stopPropagation();
        console.log("drop");
        file = e.dataTransfer.files[0];
        fileType = file.type.split('/').pop().toLowerCase();
        if(acceptedExtension.includes(fileType)){
            let fileReader = new FileReader();
            fileReader.onload = () =>{
                let fileURL = fileReader.result;
                console.log(fileURL);
                let imgTag = `<img src="${fileURL}" alt="your picture" class="${classess.yourImage}">`;
                // document.getElementById('dropArea').innerHTML = "";
                document.getElementById('dropArea').innerHTML = imgTag;
            }
            fileReader.readAsDataURL(file)

        }
        else{
            badFormat();
        }
    }

    function badFormat(){
        setShowModal(prev => !prev);
    }

    return (
        <article className={classess.container}>
            <div id="dropArea" className={classess.dnd} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop} role="presentation">
                <figure>
                    <img src={cloud} alt="cloud" className={classess.cloud}/>
                </figure>
                <span className={classess.text}>
                    Przeciągnij i upuść tutaj
                    <br />
                    lub
                    <br />
                    <button id="butt">Przeglądaj</button>
                </span>
                <Modal showModal={showModal} setShowModal={setShowModal} alt="wrong" text="Przepraszam, wykryto nie obsługiwany format" image={wrong}/>
            </div>
        </article>
    );
}

export default DragAndDrop;