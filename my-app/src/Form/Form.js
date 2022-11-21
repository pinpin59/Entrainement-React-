import React, {useState, useEffect} from "react";
import './form.css';

export const Form = (props) => {
    
    return(
    
        <form action="" >
            <div className="div-form">
                <div className="div-input">
                    {props.children}
                </div>
                <div>
                    <button className="form-btn" type="submit" onClick={props.connection}>Envoyer</button>
                </div>
            </div>
        </form>
    
    )
    
    
}