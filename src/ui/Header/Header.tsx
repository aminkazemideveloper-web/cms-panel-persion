import Container from "../../components/Container/Container";
import styles from "./Header.module.css";
import Button from "../../components/Button/Button";

import { RxExit } from "react-icons/rx";

import ThemeButton from "../../components/ThemeButton/ThemeButton";
import { BiSolidBellRing } from "react-icons/bi";
import { Link } from "react-router";
import TiTleSectionItem from "../../components/TiTleSectionItem/TiTleSectionItem";
import { useEffect, useState } from "react";
import clsx from "clsx";

function Header() {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShow(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      <header className={clsx(styles.header, isShow && styles.active)}>
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
          <ThemeButton />

          <Button color="secondary" varient="solid">
            <BiSolidBellRing />
          </Button>

          <Link to="/" className={styles["signIn-link"]}>
            <RxExit />
            <span className={styles["login-text"]}>خروج از پنل</span>
          </Link>
        </div>
      </header>
    </Container>
  );
}

export default Header;
