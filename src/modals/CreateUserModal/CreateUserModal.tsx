import { useForm } from "react-hook-form";
import Inputbox from "../../components/Inputbox/Inputbox";
import FormModal from "../FormModal/FormModal";
import { z } from "zod";
import { UserSchema } from "../../vlidators/user-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import useCreateUser from "../../services/hooks/users/useCreateUser";
import { toast } from "react-toastify";
import type { ComponentProps } from "react";
import {
  BiMessageDetail,
  BiSolidCity,
  BiSolidPlusSquare,
  BiUser,
  BiUserPin,
  BiUserPlus,
} from "react-icons/bi";

type Values = z.infer<typeof UserSchema>;

type Props = Pick<ComponentProps<typeof FormModal>, "ref">;

function CreateUserModal({ ref }: Props) {
  const {
    handleSubmit,
    reset,

    register,
    formState: { errors },
  } = useForm<Values>({
    resolver: zodResolver(UserSchema),
  });

  const createMutation = useCreateUser();

  const handleCreateSubmitForm = (values: Values) => {
    createMutation.mutate(values, {
      onSuccess: () => {
        toast.success("کاربر جدید با موفقیت ایجاد  شد");
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
      heading="ایجاد کاربر جدید"
      ref={ref}
      onSubmit={handleSubmit(handleCreateSubmitForm)}
    >
      <Inputbox
        type="text"
        label="اسم"
        icon={<BiUser />}
        {...register("firstname")}
        error={errors.firstname?.message}
      />
      <Inputbox
        type="text"
        icon={<BiUserPlus />}
        label="نام خانوادگی"
        {...register("lastname")}
        error={errors.lastname?.message}
      />
      <Inputbox
        type="text"
        icon={<BiUserPin />}
        label="نام کاربری"
        {...register("username")}
        error={errors.username?.message}
      />
      <Inputbox
        type="email"
        icon={<BiMessageDetail />}
        label="ایمیل"
        {...register("email")}
        error={errors.email?.message}
      />

      <Inputbox
        type="number"
        icon={<BiSolidPlusSquare />}
        label="سن"
        {...register("age", {
          setValueAs: (value) => {
            if (value === "") return undefined;
            return Number(value);
          },
        })}
        error={errors.age?.message}
      />
      <Inputbox
        type="text"
        label="شهر"
        icon={<BiSolidCity />}
        {...register("city")}
        error={errors.city?.message}
      />
    </FormModal>
  );
}

export default CreateUserModal;
