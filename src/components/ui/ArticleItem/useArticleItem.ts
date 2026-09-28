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
    removeMutation.mutate(id);
  };

  return {
    handleShowRemoveModal,
    handleRemoveArticle,
    removeModalRef,
  };
};
