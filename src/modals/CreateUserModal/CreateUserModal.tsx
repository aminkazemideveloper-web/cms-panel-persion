import { useForm } from "react-hook-form";
import Inputbox from "../../components/shared/Inputbox/Inputbox";
import FormModal from "../FormModal/FormModal";
import { z } from "zod";
import { UserSchema } from "../../vlidators/user-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import useCreateUser from "../../services/hooks/users/useCreateUser";
import { toast } from "react-toastify";
import type { ComponentProps } from "react";

import MingcuteUser1Fill from "../../icons/MingcuteUser1Fill";
import MingcuteUserQuestionFill from "../../icons/MingcuteUserQuestionFill";
import MingcuteNewdotLine from "../../icons/MingcuteNewdotLine";
import MingcuteMailSendLine from "../../icons/MingcuteMailSendLine";
import MingcutePhoneCallLine from "../../icons/MingcutePhoneCallLine";
import MingcuteEiffelTowerLine from "../../icons/MingcuteEiffelTowerLine";

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
        icon={<MingcuteUser1Fill />}
        {...register("firstname")}
        error={errors.firstname?.message}
      />
      <Inputbox
        type="text"
        icon={<MingcuteUserQuestionFill />}
        label="نام خانوادگی"
        {...register("lastname")}
        error={errors.lastname?.message}
      />
      <Inputbox
        type="text"
        icon={<MingcuteNewdotLine />}
        label="نام کاربری"
        {...register("username")}
        error={errors.username?.message}
      />
      <Inputbox
        type="email"
        icon={<MingcuteMailSendLine />}
        label="ایمیل"
        {...register("email")}
        error={errors.email?.message}
      />

      <Inputbox
        type="number"
        icon={<MingcutePhoneCallLine />}
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
        icon={<MingcuteEiffelTowerLine />}
        {...register("city")}
        error={errors.city?.message}
      />
    </FormModal>
  );
}

export default CreateUserModal;
