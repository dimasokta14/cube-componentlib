import React from "react";
import './style.scss';

export interface AvatarProps {
    children?: any,
    src?: string,
    height?: number | string,
    width?: number | string
}

const NoPicAvatar:React.FC = () => {
    return (
        <svg fill="#eaeaea" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PersonIcon"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>
    )
}

const Avatar:React.FC<AvatarProps> = ({
    children,
    src,
    height,
    width
}) => {
    return (
        <div className="base-avatar" style={{
            height: height,
            width: width
        }}>
            {src 
                ? <img className="base-avatar__picture" src={src} alt={src}/> 
                : <NoPicAvatar/>
            }
        </div>
    )
}

export default Avatar;