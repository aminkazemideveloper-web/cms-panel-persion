import clsx from "clsx";
import React, { type ComponentProps } from "react";
import "./Button.css";

type Variant = "solid" | "outline" | "ghost";
type Color = "red" | "blue" | "gray" | "brown";
type Size = "sm" | "md" | "lg" | "icon";

type ButtonTypes = ComponentProps<"button"> & {
  children: React.ReactNode;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  color: Color;
  variant?: Variant;
  size?: Size;
  onclick?: () => void;
  disabled?: boolean;
};

const Button: React.FC<ButtonTypes> = ({
  children,
  rightIcon,
  className,
  leftIcon,
  color,
  variant = "solid",
  size = "md",
  onclick,
  disabled = false,
  ...rest
}) => {
  const baseClasses = "btn_base";

  const disabledClass = disabled ? "btn_disabled" : "";

  const classes = clsx(
    baseClasses,
    checkVariant(variant, color),
    checkSize(size),
    disabledClass,
  );

  return (
    <button
      className={clsx(classes, className)}
      onClick={onclick}
      disabled={disabled}
      {...rest}
    >
      {rightIcon && <span>{rightIcon}</span>}
      {children}
      {leftIcon && <span>{leftIcon}</span>}
    </button>
  );
};
export default Button;

const checkVariant = (variant: Variant, color: Color) => {
  let variantClasses = "";
  if (variant === "solid") {
    return (variantClasses =
      color === "red"
        ? "variant_solid-red"
        : color === "blue"
          ? "variant_solid-blue"
          : color === "brown"
            ? "variant_solid-brown"
            : "variant_solid-gray");
  } else if (variant === "outline") {
    return (variantClasses =
      color === "red"
        ? "variant_outline-red"
        : color === "blue"
          ? "variant_outline-blue"
          : color === "brown"
            ? "variant_outline-brown "
            : "variant_outline-gray ");
  } else if (variant === "ghost") {
    return (variantClasses =
      color === "red"
        ? "variant_ghost-red"
        : color === "blue"
          ? "variant_ghost-blue"
          : color === "brown"
            ? "variant_ghost-brown"
            : "variant_ghost-gray");
  }
};

const checkSize = (size: Size) => {
  let sizeClass = "";
  if (size === "sm") {
    return (sizeClass = "btn_size--sm");
  } else if (size === "md") {
    return (sizeClass = "btn_size--md");
  } else if (size === "icon") {
    return (sizeClass = "btn_size--icon");
  } else {
    return (sizeClass = "btn_size--lg");
  }
};
