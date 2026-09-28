import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { UserSchema } from "../../vlidators/user-schema";
import type z from "zod";
import useCreateUser from "../../services/hooks/users/useCreateUser";
import type { FormEvent, RefObject } from "react";

type Values = z.infer<typeof UserSchema>;

type Props = {
  ref: RefObject<HTMLDialogElement | null>;
};

export const useCreateUserModal = ({ ref }: Props) => {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<Values>({
    resolver: zodResolver(UserSchema),
  });

  const { mutate: createMutation, isPending: loading } = useCreateUser();

  const handleCreateSubmitForm = (values: Values) => {
    createMutation(values, {
      onSuccess: () => {
        toast.success("کاربر جدید با موفقیت ایجاد  شد");
        reset();
        ref?.current?.close();
      },
      onError: () => {
        toast.error("مشکلی پیش آمده");
      },
    });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(handleCreateSubmitForm)(e);
  };

  return { register, errors, loading, onSubmit };
};
