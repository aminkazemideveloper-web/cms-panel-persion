import { useRef } from "react";
import { toast } from "react-toastify";
import { useRemoveArticle } from "../../../services/hooks/articles/useRemoveArticle";

type Props = {
  id: string;
};

export const useArticleItem = ({ id }: Props) => {
  const removeModalRef = useRef<HTMLDialogElement | null>(null);
  const removeMutation = useRemoveArticle();

  const handleShowRemoveModal = () => {
    removeModalRef.current?.showModal();
  };

  const handleRemoveArticle = () => {
    removeMutation.mutate(id, {
      onSuccess: () => {
        toast.success("با موفقیت حذف شد");
        removeModalRef.current?.close();
      },
      onError: (error) => {
        toast.error("مشکلی پیش آمده");
        console.log(error);
      },
    });
  };

  return {
    handleShowRemoveModal,
    handleRemoveArticle,
    removeModalRef,
  };
};
