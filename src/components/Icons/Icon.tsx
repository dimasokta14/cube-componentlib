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