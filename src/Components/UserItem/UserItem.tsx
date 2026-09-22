import Button from "../Button/Button";
import "./UserItem.css";

import type { UserType } from "../../types/user-type";
import { useRemoveUser } from "../../servises/hooks/users/useRemoveUser";

import { useRef } from "react";
import RemoveModal from "../../modals/RemoveModal/RemoveModal";
import { toast } from "react-toastify";
import EditUserModal from "../../modals/EditUserModal/EditUserModal";
import { BiInfoCircle, BiMessage, BiTrash } from "react-icons/bi";

type Props = {
  user: UserType;
};

function UserItem({ user }: Props) {
  const { _id, firstname, lastname, email } = user;

  const showEditModalRef = useRef<HTMLDialogElement | null>(null);
  const removeShowModalRef = useRef<HTMLDialogElement | null>(null);
  const removeMutation = useRemoveUser();

  const handleshowEditUserModalClick = () => {
    showEditModalRef.current?.showModal();
  };

  const removeHandler = () => {
    removeShowModalRef.current?.showModal();
  };

  const handleRemmoveUser = (id: string) => {
    removeMutation.mutate(id);
    removeShowModalRef.current?.close();
    toast.success("با موفقیت حذف شد");
  };
  return (
    <div className="userItem__wraper">
      <div className="userItem__right">
        <div className="userItem__right--img-box">
          <img
            className="userItem__right--img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQksR3Lt2Iy2rlmUKvJmc27GcXpe297gINhTA&s"
            alt=""
          />
          {/* "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQksR3Lt2Iy2rlmUKvJmc27GcXpe297gINhTA&s" */}
        </div>
        <div className="userItem__right--content">
          <span className="userItem__right--content-top">
            {firstname} {lastname}
          </span>
          <span className="userItem__right--content-bottom">{email}</span>
        </div>
      </div>
      <div className="userItem__left">
        <Button color="gray" size="md" variant="solid">
          <BiMessage />
          پیام ها
        </Button>
        <Button
          color="brown"
          size="md"
          variant="outline"
          onclick={handleshowEditUserModalClick}
        >
          <BiInfoCircle />
          اطلاعات
        </Button>
        <Button color="red" size="md" variant="solid" onclick={removeHandler}>
          <BiTrash />
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
