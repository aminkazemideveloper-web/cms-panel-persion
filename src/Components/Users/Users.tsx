import CreateUserModal from "../../modals/CreateUserModal/CreateUserModal";
import UserItem from "../UserItem/UserItem";

import type { UserType } from "../../types/user-type";
import { useRef } from "react";

import Toolbar from "./components/Toolbar/Toolbar";

type Props = {
  users: UserType[];
};

function Users({ users }: Props) {
  const showCreateModalRef = useRef<HTMLDialogElement | null>(null);

  const handleShowNewUserModalButtonClick = () => {
    showCreateModalRef.current?.showModal();
  };

  return (
    <div className="users__wrapper">
      <Toolbar onShowModal={handleShowNewUserModalButtonClick} />

      {users.map((user: UserType) => (
        <UserItem user={user} key={user._id} />
      ))}

      {users.length === 0 && (
        <div className="users__wrapper-warning">هیچ کاربری فعلا عضو نیست</div>
      )}

      <CreateUserModal ref={showCreateModalRef} />
    </div>
  );
}

export default Users;
