import React from "react";
import { IconProps } from "../Icon.interface";

const DashboardIconRegular = ({
    size = 14,
    color = "black"
}:IconProps) => {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill={color}
        >
            <path d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z"></path>
        </svg>
    )
};

const DashboardIconLine = ({
    size = 14,
    color = "black"
}:IconProps) => {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill={color}
        >
            <path d="M13 21V11H21V21H13ZM3 13V3H11V13H3ZM9 11V5H5V11H9ZM3 21V15H11V21H3ZM5 19H9V17H5V19ZM15 19H19V13H15V19ZM13 3H21V9H13V3ZM15 5V7H19V5H15Z"></path>
        </svg>
    )
}

export {
    DashboardIconLine,
    DashboardIconRegular
}