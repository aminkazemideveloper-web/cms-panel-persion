import type { ComponentProps } from "react";
import FormModal from "../FormModal/FormModal";
import { CourseSchema } from "../../vlidator/course-schemas";
import type z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateCourse } from "../../servises/hooks/courses/useCreateCourse";
import { toast } from "react-toastify";
import Inputbox from "../../Components/Inputbox/Inputbox";

type Values = z.infer<typeof CourseSchema>;

type Props = Pick<ComponentProps<typeof FormModal>, "ref">;

function CreateCourseModal({ ref }: Props) {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<Values>({
    resolver: zodResolver(CourseSchema),
  });

  const createMutation = useCreateCourse();

  const handleCreateSubmitForm = (values: Values) => {
    createMutation.mutate(values, {
      onSuccess: (data) => {
        console.log("data success", data);

        toast.success("دوره جدید با موفقیت ثبت  شد");
        ref?.current?.close();
        reset();
      },
      onError: (error) => {
        toast.error("مشکلی پیش آمده");
        console.log("error in create course", error);
      },
    });
  };

  return (
    <FormModal
      disabled={createMutation.isPending}
      heading="ایجاد کاربر جدید"
      ref={ref}
      onSubmit={handleSubmit(handleCreateSubmitForm)}
    >
      <Inputbox
        label="عنوان"
        {...register("title")}
        error={errors.title?.message}
      />
      <Inputbox
        label="دسته بندی"
        {...register("category")}
        error={errors.category?.message}
      />
      <Inputbox
        label="قیمت"
        type="number"
        {...register("price", { valueAsNumber: true })}
        error={errors.price?.message}
      />
      <Inputbox
        label="تخفیف"
        type="number"
        {...register("discount", { valueAsNumber: true })}
        error={errors.discount?.message}
      />
      <Inputbox
        label="تعداد دانش آموختگان"
        type="number"
        {...register("registersCount", { valueAsNumber: true })}
        error={errors.registersCount?.message}
      />
      <Inputbox
        label="توضیحات"
        {...register("desc")}
        error={errors.desc?.message}
      />
    </FormModal>
  );
}

export default CreateCourseModal;
