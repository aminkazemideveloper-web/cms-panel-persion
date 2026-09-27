import CreateUserModal from "../../../modals/CreateUserModal/CreateUserModal";
import UserItem from "../../ui/UserItem/UserItem";

import type { UserType } from "../../../types/user-type";

import Toolbar from "./components/Toolbar/Toolbar";

import styles from "./Users.module.css";
import EmptyCard from "../../ui/EmptyCard/EmptyCard";
import { useUsers } from "./useUsers";

import clsx from "clsx";
import useScrollAnimation from "../../../hooks/useScrollAnimation";
type Props = {
  users: UserType[];
  loading: boolean;
};

function Users({ users, loading }: Props) {
  const containerRef = useScrollAnimation();

  const {
    showCreateModalRef,
    filteredUsers,
    handleShowNewUserModalButtonClick,
    setSearch,
  } = useUsers({ users });

  return (
    <div ref={containerRef} className={styles.wrapper}>
      <div className={clsx("animate", "slide-right")}>
        <Toolbar
          onShowModal={handleShowNewUserModalButtonClick}
          onSearch={setSearch}
          loading={loading}
        />
      </div>
      <div className={clsx(styles.content, "animate", "fade-up")}>
        {filteredUsers.map((user) => (
          <UserItem user={user} key={user._id} />
        ))}

        {filteredUsers.length === 0 && (
          <EmptyCard title="هیچ کاربری فعلا عضو نیست" />
        )}
      </div>

      <CreateUserModal ref={showCreateModalRef} />
    </div>
  );
}

export default Users;
