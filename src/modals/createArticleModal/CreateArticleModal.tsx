import type z from "zod";
import Inputbox from "../../components/shared/Inputbox/Inputbox";
import FormModal from "../FormModal/FormModal";
import { ArticleSchemas } from "../../vlidators/article-schemas";
import type { ComponentProps } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useCreateArticle from "../../services/hooks/articles/useCreateArticle";
import { toast } from "react-toastify";
import TextErea from "../../components/shared/TextErea/TextErea";
import MingcuteText2Line from "../../icons/MingcuteText2Line";
import MingcuteCalendarTimeAddLine from "../../icons/MingcuteCalendarTimeAddLine";
import MingcuteNewdotLine from "../../icons/MingcuteNewdotLine";

type Props = Pick<ComponentProps<typeof FormModal>, "ref">;
type Values = z.infer<typeof ArticleSchemas>;

function CreateArticleModal({ ref }: Props) {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<Values>({
    resolver: zodResolver(ArticleSchemas),
  });

  const createMutation = useCreateArticle();

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
      heading="ایجاد مقاله جدید"
      disabled={createMutation.isPending}
      ref={ref}
      onSubmit={handleSubmit(handleCreateSubmitForm)}
    >
      <Inputbox
        icon={<MingcuteText2Line />}
        label="عنوان"
        {...register("title")}
        error={errors.title?.message}
      />
      {/* <Inputbox
        label="توضیحات"
        {...register("desc")}
        error={errors.desc?.message}
      /> */}

      <Inputbox
        icon={<MingcuteCalendarTimeAddLine />}
        label="دسته بندی"
        {...register("category")}
        error={errors.category?.message}
      />
      <Inputbox
        icon={<MingcuteNewdotLine />}
        type="number"
        label="مطالعه شده"
        {...register("views", { valueAsNumber: true })}
        error={errors.views?.message}
      />
      <TextErea
        lable="توضیحات"
        {...register("desc")}
        error={errors.desc?.message}
      />
    </FormModal>
  );
}

export default CreateArticleModal;
