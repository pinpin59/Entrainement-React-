import React, {useState, useEffect,Fragment} from "react";
import "./input.css";
export const Input = (props) => {
    return(
        <>
            <input className="input-login" type={props.type}  placeholder={props.placeholder} onClick={props.funcOnClick} onChange={props.function}/>
        </>
    )
    
    
}