import { useRef } from "react";
import { toast } from "react-toastify";
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
    removeMutation(id, {
      onSuccess: () => {
        removeShowModalRef.current?.close();
        toast.success("با موفقیت حذف شد");
      },

      onError: () => {
        toast.error("حذف کاربر انجام نشد");
      },
    });
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
