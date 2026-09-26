import { useRef, useState } from "react";
import type { UserType } from "../../../types/user-type";

type Props = {
  users: UserType[];
};

export const useUsers = ({ users }: Props) => {
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

  return {
    filteredUsers,
    handleShowNewUserModalButtonClick,
    showCreateModalRef,
    search,
    setSearch,
  };
};
