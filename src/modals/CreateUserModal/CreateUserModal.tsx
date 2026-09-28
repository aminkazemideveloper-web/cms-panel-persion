import Inputbox from "../../components/shared/Inputbox/Inputbox";
import FormModal from "../FormModal/FormModal";

import type { ComponentProps } from "react";

import MingcuteUser1Fill from "../../icons/MingcuteUser1Fill";
import MingcuteUserQuestionFill from "../../icons/MingcuteUserQuestionFill";
import MingcuteNewdotLine from "../../icons/MingcuteNewdotLine";
import MingcuteMailSendLine from "../../icons/MingcuteMailSendLine";
import MingcutePhoneCallLine from "../../icons/MingcutePhoneCallLine";
import MingcuteEiffelTowerLine from "../../icons/MingcuteEiffelTowerLine";
import { useCreateUserModal } from "./useCreateUserModal";

type Props = Pick<ComponentProps<typeof FormModal>, "ref">;

function CreateUserModal({ ref }: Props) {
  const { register, errors, loading, onSubmit } = useCreateUserModal({ ref });

  return (
    <FormModal
      disabled={loading}
      heading="ایجاد کاربر جدید"
      ref={ref}
      onSubmit={onSubmit}
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
