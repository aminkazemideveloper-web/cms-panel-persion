import { useRef } from "react";
import { toast } from "react-toastify";
import { useRemoveUser } from "../../../services/hooks/users/useRemoveUser";

export const useUserItem = () => {
  
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

  return {
    removeHandler,
    handleRemmoveUser,
    handleshowEditUserModalClick,
    showEditModalRef,
    removeShowModalRef,
  };
};
