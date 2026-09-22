import Container from "../../Components/Container/Container";
import "./Header.css";
import Button from "../../Components/Button/Button";

import { RxExit } from "react-icons/rx";

import ThemeButton from "../../Components/ThemeButton/ThemeButton";
import { BiSolidBellRing } from "react-icons/bi";
import { Link } from "react-router";

function Header() {
  return (
    <Container>
      <header className="header">
        <div className="header_right">
          <div className="img_box">
            <img
              className="header__img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQksR3Lt2Iy2rlmUKvJmc27GcXpe297gINhTA&s"
              alt=""
            />
          </div>
          <div className="text_box">
            <span className="header_title">امین کاظمی</span>
            <p className="header_desc">توسعه دهنده جاوا اسکریپت</p>
          </div>
        </div>
        <div className="header_left">
          <div className="icon__sun">
            <ThemeButton />
          </div>
          <div className="icon__notification">
            <Button color="secondary" varient="solid">
              <BiSolidBellRing className="notif_icon" />
            </Button>
          </div>
          <div className="signIn">
            <Link to="/" className="signIn_link">
              <RxExit />
              <span className="login__text">خروج از پنل</span>
            </Link>
          </div>
        </div>
      </header>
    </Container>
  );
}

export default Header;
