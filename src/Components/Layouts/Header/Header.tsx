
import styles from "./Header.module.css";




import { Link } from "react-router";
import TiTleSectionItem from "../../shared/TiTleSectionItem/TiTleSectionItem";
import { useEffect, useState } from "react";
import clsx from "clsx";
import IconButton from "../../shared/IconButton/IconButton";
import ThemeSwitch from "../../shared/ThemeSwitch/ThemeSwitch";
import MingcuteExitLine from "../../../icons/MingcuteExitLine";
import MingcuteNotificationFill from "../../../icons/MingcuteNotificationFill";

function Header() {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShow(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header
      className={clsx(styles.header, "container", isShow && styles.active)}
    >
      <div className={styles.profile}>
        <div className={styles["img-box"]}>
          <img
            className={styles.img}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQksR3Lt2Iy2rlmUKvJmc27GcXpe297gINhTA&s"
            alt=""
          />
        </div>

        <TiTleSectionItem title="امین کاظمی" sub="توسعه دهنده وب" />
      </div>
      <div className={styles.actions}>
        <ThemeSwitch />

        <IconButton color="secondary" className={styles.notif}>
          <MingcuteNotificationFill />
        </IconButton>

        <Link to="/" className={styles["signIn-link"]}>
          <MingcuteExitLine  className={styles.icon} />
          <span className={styles["login-text"]}>خروج از پنل</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
