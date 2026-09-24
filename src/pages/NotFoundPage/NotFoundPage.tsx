import type { ReactNode } from "react";

import styles from './NotFoundPage.module.css'
import { Link } from "react-router";
export default function NotFoundPage () : ReactNode {
    return (
        <div className={styles["not-found"]}>
            <h3 className={styles.title}>This page not found | Error 404</h3>
            <Link to="/">go to Home page</Link>
        </div>
    )
}