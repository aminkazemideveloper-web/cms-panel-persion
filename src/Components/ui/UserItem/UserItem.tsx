import Button from "../../shared/Button/Button";
import styles from "./UserItem.module.css";

import type { UserType } from "../../../types/user-type";

import RemoveModal from "../../../modals/RemoveModal/RemoveModal";

import EditUserModal from "../../../modals/EditUserModal/EditUserModal";
import { BiInfoCircle, BiMessage } from "react-icons/bi";
import { IoTrashBin } from "react-icons/io5";

import { useUserItem } from "./useUserItem";

type Props = {
  user: UserType;
};

function UserItem({ user }: Props) {
  const { _id, firstname, lastname, email } = user;

  const {
    handleRemmoveUser,
    handleshowEditUserModalClick,
    removeHandler,
    removeShowModalRef,
    showEditModalRef,
  } = useUserItem();

  return (
    <div className={styles["userItem-wraper"]}>
      <div className={styles.profile}>
        <div className={styles["img-box"]}>
          <img
            className={styles.img}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQksR3Lt2Iy2rlmUKvJmc27GcXpe297gINhTA&s"
            alt=""
          />

        </div>
        <div className={styles.content}>
          <span className={styles.title}>
            {firstname} {lastname}
          </span>
          <span className={styles.mail}>{email}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <Button color="secondary" varient="solid">
          <BiMessage />
          پیام ها
        </Button>
        <Button
          color="primary"
          varient="outlined"
          onClick={handleshowEditUserModalClick}
        >
          <BiInfoCircle />
          ویرایش
        </Button>
        <Button color="danger" varient="solid" onClick={removeHandler}>
          <span className={styles.icon}>
            <IoTrashBin />
          </span>
          <span className={styles.text}></span>
          حذف
        </Button>
      </div>

      <RemoveModal
        heading="حذف کاربر"
        ref={removeShowModalRef}
        title={`${firstname} ${lastname}`}
        onRemove={() => handleRemmoveUser(_id)}
      />

      <EditUserModal ref={showEditModalRef} defaultValues={user} />
    </div>
  );
}

export default UserItem;
