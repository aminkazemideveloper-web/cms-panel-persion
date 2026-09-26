import clsx from "clsx";

import Button from "../../shared/Button/Button";

import Detailes from "./components/Detailes/Detailes";
import Profile from "./components/Profile/Profile";

import MingcutePencil3AiLine from "../../../icons/MingcutePencil3AiLine";

import "./Sidebar.css";
import { useSidebar } from "./useSidebar";

function Sidebar() {
  const { detailesData } = useSidebar();

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
          {detailesData.map((detail) => (
            <Detailes key={detail.id} detail={detail} />
          ))}
        </div>
        <div className="sidebar_btn">
          <Button color="primary" className={clsx("btn", "primary")}>
            <MingcutePencil3AiLine />
            تغییر اطلاعات
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
