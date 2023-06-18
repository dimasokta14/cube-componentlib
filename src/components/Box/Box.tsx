import React from "react";
import './style.scss';

export interface BoxProps {
    children?: any,
    box_shadow?: boolean,
    rounded?: boolean
}

const Box:React.FC<BoxProps> = ({children, box_shadow = false, rounded = false}) => {
    return <div className={`base-box ${box_shadow && "box-shadow"} ${rounded && "rounded"}`}>{children}</div>
}

export default Box;