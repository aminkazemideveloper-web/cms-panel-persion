import CreateUserModal from "../../modals/CreateUserModal/CreateUserModal";
import UserItem from "../UserItem/UserItem";

import type { UserType } from "../../types/user-type";
import { useRef, useState } from "react";

import Toolbar from "./components/Toolbar/Toolbar";

type Props = {
  users: UserType[];
  loading: boolean;
};

function Users({ users, loading }: Props) {


  const showCreateModalRef = useRef<HTMLDialogElement | null>(null);
  const [search, setSearch] = useState("");

  const handleShowNewUserModalButtonClick = () => {
    showCreateModalRef.current?.showModal();
  };

  const searchValue = search.trim().toLowerCase();
  const filteredUsers = users.filter((user) => {
    if (!searchValue) {
      return true;
    }

    return (
      user.firstname?.toLowerCase().includes(searchValue) ||
      user.lastname?.toLowerCase().includes(searchValue) ||
      user.email?.toLowerCase().includes(searchValue) ||
      user.city?.toLowerCase().includes(searchValue)
    );
  });

  return (
    <div className="users__wrapper">
      <Toolbar
        onShowModal={handleShowNewUserModalButtonClick}
        onSearch={setSearch}
        loading={loading}
      />
      {filteredUsers.map((user) => (
        <UserItem user={user} key={user._id} />
      ))}
      {filteredUsers.length === 0 && (
        <div className="users__wrapper-warning">هیچ کاربری فعلا عضو نیست</div>
      )}
      {users.length > 0 && filteredUsers.length === 0 && (
        <div>جستجو برای پیدا کردن کاربر مورد نظر به نتیجه ای نرسید</div>
      )}
      <CreateUserModal ref={showCreateModalRef} />
    </div>
  );
}

export default Users;
