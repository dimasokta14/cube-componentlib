import React from "react";
import { IconProps } from "./Icon.interface";

export const PieChartIconRegular = ({color = "black", size = 18}: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24"><path d="M11 2.04932V12.9999H21.9506C21.4489 18.0533 17.1853 21.9999 12 21.9999C6.47715 21.9999 2 17.5228 2 11.9999C2 6.81459 5.94668 2.55104 11 2.04932ZM13 2.04932C17.7244 2.51839 21.4816 6.27552 21.9506 10.9999H13V2.04932Z"></path></svg>
    )
}

export const PieChartIconLine = ({color = "black", size = 18}: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24"><path d="M9 2.4578V4.58152C6.06817 5.76829 4 8.64262 4 12C4 16.4183 7.58172 20 12 20C15.3574 20 18.2317 17.9318 19.4185 15H21.5422C20.2679 19.0571 16.4776 22 12 22C6.47715 22 2 17.5228 2 12C2 7.52236 4.94289 3.73207 9 2.4578ZM12 2C17.5228 2 22 6.47715 22 12C22 12.3375 21.9833 12.6711 21.9506 13H11V2.04938C11.3289 2.01672 11.6625 2 12 2ZM13 4.06189V11H19.9381C19.4869 7.38128 16.6187 4.51314 13 4.06189Z"></path></svg>
    )
}

export const DashboardIconRegular = ({
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

export const DashboardIconLine = ({
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

export const AccountCircleLine = ({
    size = 14,
    color = "black"
}:IconProps) => {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg"             
            width={size}
            height={size} 
            fill={color}
            viewBox="0 0 24 24">
                <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12.1597 16C10.1243 16 8.29182 16.8687 7.01276 18.2556C8.38039 19.3474 10.114 20 12 20C13.9695 20 15.7727 19.2883 17.1666 18.1081C15.8956 16.8074 14.1219 16 12.1597 16ZM12 4C7.58172 4 4 7.58172 4 12C4 13.8106 4.6015 15.4807 5.61557 16.8214C7.25639 15.0841 9.58144 14 12.1597 14C14.6441 14 16.8933 15.0066 18.5218 16.6342C19.4526 15.3267 20 13.7273 20 12C20 7.58172 16.4183 4 12 4ZM12 5C14.2091 5 16 6.79086 16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5ZM12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7Z"></path>
        </svg>
    )
}


export const AccountCircleRegular = ({
    size = 14,
    color = "black"
}:IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24"><path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM6.02332 15.4163C7.49083 17.6069 9.69511 19 12.1597 19C14.6243 19 16.8286 17.6069 18.2961 15.4163C16.6885 13.9172 14.5312 13 12.1597 13C9.78821 13 7.63095 13.9172 6.02332 15.4163ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"></path></svg>
    )
}

export const GobletRegular = ({
    size = 14,
    color = "black"
}:IconProps) => {
    return (
        <svg width={size} height={size} fill={color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 19V13.8889L3 5V3H21V5L13 13.8889V19H18V21H6V19H11ZM7.49073 7H16.5093L18.3093 5H5.69072L7.49073 7Z"></path></svg>    
    )
}

export const GobletLine= ({
    size = 14,
    color = "black"
}:IconProps) => {
    return (
        <svg width={size} height={size} fill={color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 19V13.8889L3 5V3H21V5L13 13.8889V19H18V21H6V19H11ZM7.49073 7H16.5093L18.3093 5H5.69072L7.49073 7ZM9.29072 9L12 12.0103L14.7093 9H9.29072Z"></path></svg>
    )
}