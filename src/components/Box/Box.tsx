import React from "react";
import './style.scss';

export interface BoxProps {
    children?: any,
    box_shadow?: boolean,
    rounded?: boolean,
    style?: any
}

const Box:React.FC<BoxProps> = ({children, box_shadow = false, rounded = false, style}) => {
    return <div className={`base-box ${box_shadow && "box-shadow"} ${rounded && "rounded"}`} style={style}>{children}</div>
}

export default Box;