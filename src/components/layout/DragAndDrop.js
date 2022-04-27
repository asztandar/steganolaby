import * as React from "react";
import * as classess from "@styles/module/drag_and_drop.module.css";
import cloud from "../../images/cloud_1.svg";
import wrong from "../../images/warning.svg";
import Modal from "./Modal";
import Context from "../../utils/context";


const DragAndDrop = () => {

    const [context, setContext] = React.useContext(Context);


    const [showModal, setShowModal] = React.useState(false);
    const [message, setMessage] = React.useState("");

    const acceptedMagicNumber = ["424d"];
    /*
    magic number:
    bmp : 424d
    */
    let file = null;

    const handleDragOver = (e) => {
        e.preventDefault();
        document
            .querySelector(`.${classess.dnd}`)
            .classList.add(`${classess.active}`);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        document
            .querySelector(`.${classess.dnd}`)
            .classList.remove(`${classess.active}`);
    };

    const handleDrop = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        file = e.dataTransfer.files[0];
        checkType();
    };

    const checkType = () => {
        let headerType = "";
        let blob = file;
        const fileReader = new FileReader();
        fileReader.onloadend = function (e) {
            const arr = new Uint8Array(e.target.result).subarray(0, 4);
            let header = "";
            for (let i = 0; i < arr.length; i++) {
                header += arr[i].toString(16);
            }
            headerType = header.slice(0, 4);
            if (acceptedMagicNumber.includes(headerType)) {
                showFile();
            } else {
                badFormat();
            }
        };
        fileReader.readAsArrayBuffer(blob);
    };

    function badFormat() {
        setMessage("Upewnij się że grafika na pewno jest bitmapą");
        setShowModal((prev) => !prev);
    }

    function showFile() {
        let fileReader = new FileReader();
        fileReader.onload = () => {
            let fileURL = fileReader.result;
            let imgTag = `<img src="${fileURL}" alt="your picture" class="${classess.yourImage}">`;
            // document.getElementById('dropArea').innerHTML = "";
            document.getElementById("dropArea").innerHTML = imgTag;
            saveToStore();
        };
        fileReader.readAsDataURL(file);
    }

    function saveToStore(){
        setContext({...context, file: file})
    }

    const handlePrzegladaj = () => {
        const input = document.querySelector("#inputFile");
        input.click();
        input.addEventListener("change", (e) => {
            file = e.target.files[0];
            checkType();
        });
    };

    return (
        <article className={classess.container}>
            <div
                id="dropArea"
                className={classess.dnd}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                role="presentation"
            >
                <figure>
                    <img src={cloud} alt="cloud" className={classess.cloud} />
                </figure>
                <span className={classess.text}>
                    Przeciągnij i upuść tutaj
                    <br />
                    lub
                    <br />
                    <button id="butt" onClick={handlePrzegladaj}>
                        Przeglądaj
                    </button>
                    <input
                        type="file"
                        id="inputFile"
                        accept="image/bmp"
                        hidden
                    />
                </span>
                <Modal
                    showModal={showModal}
                    setShowModal={setShowModal}
                    alt="wrong"
                    text={message}
                    image={wrong}
                />
            </div>
        </article>
    );
};

export default DragAndDrop;
