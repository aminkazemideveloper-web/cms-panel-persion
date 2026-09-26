import clsx from "clsx";
import type { ComponentProps, ReactNode } from "react";

type Props = ComponentProps<'button'>


import styles from './IconButton.module.css'
export default function IconButton({
    className,
    children,
    ...otherProps }: Props): ReactNode {

    return <button className={clsx(styles['icon-button'], className)} {...otherProps}>
        {children}
    </button>

}