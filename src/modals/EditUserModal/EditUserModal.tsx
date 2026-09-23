import FormModal from "../FormModal/FormModal";
import Inputbox from "../../components/Inputbox/Inputbox";
import { type ComponentProps } from "react";
import type { UserType } from "../../types/user-type";
import { useForm } from "react-hook-form";
import { UserSchema } from "../../vlidators/user-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import type z from "zod";
import useEditUser from "../../services/hooks/users/useEditUser";
import { toast } from "react-toastify";

type Props = Pick<ComponentProps<typeof FormModal>, "ref"> & {
  defaultValues: UserType;
};

type Values = z.infer<typeof UserSchema>;

function EditUserModal({ ref, defaultValues }: Props) {
  const {
    handleSubmit,

    register,
  } = useForm<Values>({ defaultValues, resolver: zodResolver(UserSchema) });

  const editMutation = useEditUser();

  const handleSubmitForm = (values: Values) => {
    editMutation.mutate({
      id: defaultValues._id,
      formData: { ...values, _id: defaultValues._id },
    });
    toast.success("ویرایش انجام شد");
    ref.current?.close();
  };

  return (
    <FormModal
      onSubmit={handleSubmit(handleSubmitForm)}
      ref={ref}
      heading="ویرایش اطلاعات"
    >
      <Inputbox type="text" label="اسم" {...register("firstname")} />
      <Inputbox type="text" label="نام خانوادگی" {...register("lastname")} />
      <Inputbox type="text" label="نام کاربری" {...register("username")} />
      <Inputbox type="email" label="ایمیل" {...register("email")} />
      <Inputbox
        type="number"
        label="سن"
        {...register("age", { valueAsNumber: true })}
      />
      <Inputbox type="text" label="شهر" {...register("city")} />
    </FormModal>
  );
}

export default EditUserModal;
