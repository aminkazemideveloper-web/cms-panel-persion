import { useRef } from "react";

export const useArticles = () => {
  const createArticleModalRef = useRef<HTMLDialogElement | null>(null);

  const handleShowCreateCourseModal = () => {
    createArticleModalRef.current?.showModal();
  };

  return {
    createArticleModalRef,
    handleShowCreateCourseModal,
  };
};
