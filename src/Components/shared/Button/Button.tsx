import clsx from "clsx";
import type { ComponentProps, ReactNode } from "react";

type Varient = "solid" | "outlined"
type Color = "primary" | "secondary" | "danger"
type Props = ComponentProps<'button'> & {
    
    varient? : Varient;
    color ?:  Color;
}


import styles from './Button.module.css'

function Button ({
    className,
    children,
    varient= "solid",
    color = "primary",
    ...otherProps
}: Props):ReactNode{
    return (
        <button className={clsx(styles.button , styles[varient] , styles[color] , className)}  {...otherProps}>
            {children}
        </button>
    )
}
export default Button