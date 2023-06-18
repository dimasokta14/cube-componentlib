import React from "react";
import './style.scss';

export interface TitleProps {
    children?: any,
    weight?: "normal" | "bold" | "thin",
    type: 'p' | 'span',
    style?: any
}

const Text:React.FC<TitleProps> = ({children, type = 'p', weight = "normal", style}) => {
    let typography = {
        'p': () => {
            return <p style={style} className={`text-base text-${type} text-weight-${weight}`}>{children}</p>
        },
        'span': () => {
            return <span className={`text-base text-${type} text-weight-${weight}`}>{children}</span>
        }
        
    }

    return (typography[type])();
}

export default Text