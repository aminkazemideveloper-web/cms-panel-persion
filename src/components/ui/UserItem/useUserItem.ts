import { useRef } from "react";

import { useRemoveUser } from "../../../services/hooks/users/useRemoveUser";

export const useUserItem = () => {
  const showEditModalRef = useRef<HTMLDialogElement | null>(null);
  const removeShowModalRef = useRef<HTMLDialogElement | null>(null);
  const { mutate: removeMutation, isPending: loading } = useRemoveUser();

  const handleshowEditUserModalClick = () => {
    showEditModalRef.current?.showModal();
  };

  const removeHandler = () => {
    removeShowModalRef.current?.showModal();
  };

  const handleRemoveUser = (id: string) => {
    removeMutation(id);
  };

  return {
    removeHandler,
    handleRemoveUser,
    handleshowEditUserModalClick,
    showEditModalRef,
    removeShowModalRef,
    loading,
  };
};
