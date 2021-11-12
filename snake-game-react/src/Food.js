import React from "react";
import { findDOMNode } from "react-dom";

export default (props) => {

    const style = {
        left: `${props.dot[0]}%`,
        top: `${props.dot[1]}%`
    }

    return (
        <dic className="snake-food" style={style}></dic>
    )
}