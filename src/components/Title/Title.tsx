import React from "react";
import './style.scss';

export interface TitleProps {
    children?: any,
    weight?: "normal" | "bold" | "thin",
    type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
    style?: any
}

const Title:React.FC<TitleProps> = ({children, type = 'h1', weight = "normal", style}) => {
    let typography = {
        'h1': () => {
            return <h1 style={style} className={`title-base title-${type} title-weight-${weight}`}>{children}</h1>
        },
        'h2': () => {
            return <h2 className={`title-base title-${type} title-weight-${weight}`}>{children}</h2>
        },
        'h3': () => {
            return <h3 className={`title-base title-${type} title-weight-${weight}`}>{children}</h3>
        },
        'h4': () => {
            return <h4 className={`title-base title-${type} title-weight-${weight}`}>{children}</h4>
        },
        'h5': () => {
            return <h5 className={`title-base title-${type} title-weight-${weight}`}>{children}</h5>
        },
        'h6': () => {
            return <h6 className={`title-base title-${type} title-weight-${weight}`}>{children}</h6>
        }
    }

    return (typography[type])();
}

export default Title