import { toast } from "react-toastify";
import { useRemoveCourse } from "../../../services/hooks/courses/useRemoveCourse";
import { useRef } from "react";

type Props = {
  id: string;
};

export const useCourseItem = ({ id }: Props) => {
  const removeCourseMutation = useRemoveCourse();
  const showRemoveModalRef = useRef<HTMLDialogElement | null>(null);

  const handleRemoveModalShowButtonClick = () => {
    showRemoveModalRef.current?.showModal();
  };

  const handleRemoveCourse = () => {
    removeCourseMutation.mutate(id);
  };

  return {
    handleRemoveCourse,
    handleRemoveModalShowButtonClick,
    showRemoveModalRef,
  };
};
