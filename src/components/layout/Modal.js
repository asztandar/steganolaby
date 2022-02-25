import * as React from "react";
import * as classess from "@styles/module/modal.module.css";
import { MdClose } from "react-icons/md";

const Modal = ({ showModal, setShowModal, image, alt, text }) => {
    const modalRef = React.useRef();

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    };

    const keyPress = React.useCallback(
        (e) => {
            if (e.key === "Escape" && showModal) {
                setShowModal(false);
                console.log("I pressed");
            }
        },
        [setShowModal, showModal]
    );

    React.useEffect(() => {
        document.addEventListener("keydown", keyPress);
        return () => document.removeEventListener("keydown", keyPress);
    }, [keyPress]);

    return (
        <>
            {showModal ? (
                <article
                    className={classess.background}
                    onClick={closeModal}
                    ref={modalRef}
                    onKeyDown={closeModal}
                >
                    <div className={classess.modal}>
                        <img src={image} alt={alt} />
                        <div className={classess.content}>
                            <p>{text}</p>
                        </div>
                    </div>
                    <div
                        className={classess.closeButton}
                        onClick={() => setShowModal((prev) => !prev)}
                        role="presentation"
                        onKeyDown={() => setShowModal((prev) => !prev)}
                    >
                        <MdClose />
                    </div>
                </article>
            ) : null}
        </>
    );
};

export default Modal;
