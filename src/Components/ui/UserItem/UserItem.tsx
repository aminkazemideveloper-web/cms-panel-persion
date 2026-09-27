import styles from "./UserItem.module.css";

import type { UserType } from "../../../types/user-type";

import RemoveModal from "../../../modals/RemoveModal/RemoveModal";

import EditUserModal from "../../../modals/EditUserModal/EditUserModal";

import { useUserItem } from "./useUserItem";
import IconButton from "../../shared/IconButton/IconButton";
import MingcutePencil3AiLine from "../../../icons/MingcutePencil3AiLine";
import MingcuteDelete2Line from "../../../icons/MingcuteDelete2Line";
import MingcuteInformationLine from "../../../icons/MingcuteInformationLine";
import Card from "../../shared/Card/Card";
import TiTleSectionItem from "../../shared/TiTleSectionItem/TiTleSectionItem";

type Props = {
  user: UserType;
};

function UserItem({ user }: Props) {
  const { _id, firstname, lastname, email } = user;

  const {
    handleRemoveUser,
    handleshowEditUserModalClick,
    removeHandler,
    removeShowModalRef,
    showEditModalRef,
    loading,
  } = useUserItem();

  return (
    <Card className={styles["userItem-wraper"]}>
      <div className={styles.profile}>
        <div className={styles["img-box"]}>
          <img
            className={styles.img}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQksR3Lt2Iy2rlmUKvJmc27GcXpe297gINhTA&s"
            alt=""
          />
        </div>
        <TiTleSectionItem title={`${firstname} ${lastname}`} sub={email} />
      </div>
      <div className={styles.actions}>
        <IconButton className={styles.info}>
          <MingcuteInformationLine />
        </IconButton>
        <IconButton
          className={styles.edit}
          onClick={handleshowEditUserModalClick}
        >
          <MingcutePencil3AiLine />
        </IconButton>
        <IconButton onClick={removeHandler} className={styles.remove}>
          <MingcuteDelete2Line />
        </IconButton>
      </div>

      <RemoveModal
        heading="حذف کاربر"
        ref={removeShowModalRef}
        title={`${firstname} ${lastname}`}
        onRemove={() => handleRemoveUser(_id)}
        loading={loading}
      />

      <EditUserModal ref={showEditModalRef} defaultValues={user} />
    </Card>
  );
}

export default UserItem;
