import React from "react";
import Button from "./Button";
import "./ErrorModal.css";
const ErrorModal=(props)=>{
    return(
        <div className="backdrop" onClick={props.onConfirm}>
        <div className="error-modal">
            <header className="error-modal__header">
                <h2>{props.title}</h2>
            </header>
            <div className="error-modal__content"> 
                <p>{props.message}</p>
            </div>
            <footer className="error-modal__footer">
                <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
        </div>
        </div>
    )
    
}
export default ErrorModal;