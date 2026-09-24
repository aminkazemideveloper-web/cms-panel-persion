import type { ReactNode } from "react";

import styles from './ErrorPage.module.css'

export default function ErrorPage () : ReactNode {
    return (
        <div className={styles["error-page"]}>
            <h2>Oops! something is wrong</h2>
            <a href="/">Go to Home page</a>
        </div>
    )
}