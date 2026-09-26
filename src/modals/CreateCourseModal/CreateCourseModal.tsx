import type { ComponentProps } from "react";
import FormModal from "../FormModal/FormModal";
import { CourseSchema } from "../../vlidators/course-schemas";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateCourse } from "../../services/hooks/courses/useCreateCourse";
import { toast } from "react-toastify";
import Inputbox from "../../components/shared/Inputbox/Inputbox";
import MingcuteText2Line from "../../icons/MingcuteText2Line";
import MingcuteCalendarTimeAddLine from "../../icons/MingcuteCalendarTimeAddLine";
import MingcuteCurrencyDollar2Line from "../../icons/MingcuteCurrencyDollar2Line";
import MingcutePercentageLine from "../../icons/MingcutePercentageLine";
import MingcuteNewdotLine from "../../icons/MingcuteNewdotLine";
import TextErea from "../../components/shared/TextErea/TextErea";

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
      onSuccess: () => {
        toast.success("دوره جدید با موفقیت ثبت  شد");
        ref?.current?.close();
        reset();
      },
      onError: () => {
        toast.error("مشکلی پیش آمده");
      },
    });
  };

  return (
    <FormModal
      disabled={createMutation.isPending}
      heading="ایجاد دوره ی جدید"
      ref={ref}
      onSubmit={handleSubmit(handleCreateSubmitForm)}
    >
      <Inputbox
        icon={<MingcuteText2Line />}
        label="عنوان"
        {...register("title")}
        error={errors.title?.message}
      />
      <Inputbox
        icon={<MingcuteCalendarTimeAddLine />}
        label="دسته بندی"
        {...register("category")}
        error={errors.category?.message}
      />
      <Inputbox
        icon={<MingcuteCurrencyDollar2Line />}
        label="قیمت"
        type="number"
        {...register("price", { valueAsNumber: true })}
        error={errors.price?.message}
      />
      <Inputbox
        icon={<MingcutePercentageLine />}
        label="تخفیف"
        type="number"
        {...register("discount", { valueAsNumber: true })}
        error={errors.discount?.message}
      />
      <Inputbox
        icon={<MingcuteNewdotLine />}
        label="تعداد دانش آموختگان"
        type="number"
        {...register("registersCount", { valueAsNumber: true })}
        error={errors.registersCount?.message}
      />

      <TextErea
        lable="توضیحات"
        {...register("desc")}
        error={errors.desc?.message}
      />
    </FormModal>
  );
}

export default CreateCourseModal;
