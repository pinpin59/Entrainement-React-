import React, {useState, useEffect,Fragment} from "react";
import "./label.css";
export const Label = (props) => {
    return(
        <>
            <label htmlFor={props.htmlFor}>{props.name}</label>
        </>
    )
    
    
}