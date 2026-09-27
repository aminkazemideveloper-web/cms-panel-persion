import { useRef } from "react";

export const useCourses = () => {
  const showCreateCourseModalRef = useRef<HTMLDialogElement | null>(null);

  const handleShowCreateCourseButtonClick = () => {
    showCreateCourseModalRef.current?.showModal();
  };

  return {
    handleShowCreateCourseButtonClick,
    showCreateCourseModalRef,
  };
};
