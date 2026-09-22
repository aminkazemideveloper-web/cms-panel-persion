import Detailes from "./components/Detailes/Detailes";
import Profile from "./components/Profile/Profile";
import "./Sidebar.css";

import Button from "../../Components/Button/Button";
import { FaPencil } from "react-icons/fa6";
import { BiSolidUserAccount, BiUser, BiUserPlus } from "react-icons/bi";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <div className="sidebar_img--background">
          <img
            className="sidebar_img--background--img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3AisGh6SudM-fSDH54jLPmyGEMSBdJIY--g&s"
            alt=""
          />
        </div>
        <div className="sidebar_img--profile">
          <img
            className="sidebar_img--profile--img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQksR3Lt2Iy2rlmUKvJmc27GcXpe297gINhTA&s"
            alt=""
          />
        </div>
      </div>
      <div className="sidebar__bottom">
        <Profile />
        <div className="sidebar_detailes">
          <Detailes icon={<BiUser />} color="blue" msg="امین" text="نام" />

          <Detailes
            color="brown"
            msg="کاظمی"
            text="نام خانوادگی"
            icon={<BiSolidUserAccount />}
          />

          <Detailes
            icon={<BiUserPlus />}
            color="blue"
            msg="35"
            text="تعداد دوره"
          />
        </div>
        <div className="sidebar_btn">
          <Button color="primary">
            <FaPencil />
            تغییر اطلاعات
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
