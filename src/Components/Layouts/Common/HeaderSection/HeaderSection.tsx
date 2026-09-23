import { NavLink } from "react-router";
import "./HeaderSection.css";
import { FaRegUser } from "react-icons/fa6";

import { MdOutlineArticle } from "react-icons/md";
import { FaDiscourse } from "react-icons/fa";
import clsx from "clsx";

function HeaderSection() {
  return (
    <div>
      <ul className="navbar">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              clsx("navbar_item", isActive && "item_active")
            }
          >
            <span>
              <FaRegUser />{" "}
            </span>
            <span>داشبورد</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            end
            className={({ isActive }) =>
              clsx("navbar_item", isActive && "item_active")
            }
          >
            <span>
              <FaRegUser />{" "}
            </span>
            <span>کاربران</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/articles"
            className={({ isActive }) =>
              clsx("navbar_item", isActive && "item_active")
            }
          >
            <span>
              <MdOutlineArticle />
            </span>
            <span>مقالات</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              clsx("navbar_item", isActive && "item_active")
            }
          >
            <span>
              <FaDiscourse />
            </span>
            <span>دوره ها</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default HeaderSection;
