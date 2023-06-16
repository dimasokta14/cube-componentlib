import React from "react";
import "./style.scss";

export interface ButtonProps {
    text?: string;
    children?: any,
	style?: any;
	type?: "submit" | "button";
	width?: string;
	height?: string;
	clickHandler?: Function;
	is_disabled?: boolean;
	is_active?: boolean;
	btn_color?:
		| "primary"
		| "secondary"
		| "tretiary"
		| "error"
		| "green-9f"
		| "white"
		| "red"
		| "transparent"
		| "grey"
		| "grey-f5";
	hover_style?: true | false;
	text_color?:
		| "primary"
		| "secondary"
		| "tretiary"
		| "error"
		| "green-9f"
		| "white"
		| "red"
		| "grey"
		| "grey-f5";
}

const Button:React.FC<ButtonProps> = ({
    text,
	type = "button",
	is_disabled = false,
	clickHandler,
	hover_style,
	style,
	width,
	height,
	btn_color,
	text_color,
	children,
	is_active = false,
}) => {
  return (
    <button
        disabled={is_disabled}
        type={type}
        className={
            is_disabled
                ? `button disabled text-color-white default-pointer`
                : `button ${btn_color} text-color-${text_color} ${
                        hover_style && "hover"
                } ${is_active && "active"}`
        }
        style={Object.assign({ width, height }, style)}
        onClick={() => (clickHandler ? clickHandler() : {})}
    >
        {text || children}
    </button>
  )
};

export default Button;