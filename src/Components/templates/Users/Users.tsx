import CreateUserModal from "../../../modals/CreateUserModal/CreateUserModal";
import UserItem from "../../ui/UserItem/UserItem";

import type { UserType } from "../../../types/user-type";

import Toolbar from "./components/Toolbar/Toolbar";

import styles from "./Users.module.css";
import EmptyCard from "../../ui/EmptyCard/EmptyCard";
import { useUsers } from "./useUsers";
type Props = {
  users: UserType[];
  loading: boolean;
};

function Users({ users, loading }: Props) {
  const {
    showCreateModalRef,
    filteredUsers,
    handleShowNewUserModalButtonClick,
    setSearch,
  } = useUsers({ users });

  return (
    <div className={styles.wrapper}>
      <Toolbar
        onShowModal={handleShowNewUserModalButtonClick}
        onSearch={setSearch}
        loading={loading}
      />
      {filteredUsers.map((user) => (
        <UserItem user={user} key={user._id} />
      ))}
      {filteredUsers.length === 0 && (
        <EmptyCard title="هیچ کاربری فعلا عضو نیست" />
      )}

      <CreateUserModal ref={showCreateModalRef} />
    </div>
  );
}

export default Users;
