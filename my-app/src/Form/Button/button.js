import React, {useState, useEffect,Fragment} from "react";

import "./button.css";
export const Button = (props) => {
    return(
        <>
        <button type={props.type}>{props.name}</button>
        </>
    )
    
    
}