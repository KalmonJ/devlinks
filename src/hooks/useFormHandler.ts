import { type FieldValues, type UseFormProps, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "react-query";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import z from "zod";

export type BaseProps<T = any, R = any> = {
  schema: z.ZodType<T>;
  submitFunction: (props: T) => Promise<R>;
};

export type UseFormHandlerProps<T extends FieldValues, R> = {
  toast?: boolean;
  successToastConfig?: SuccessToastConfig;
  errorToastConfig?: ErrorToastConfig;
  onSuccess?: (data: R, variables: T) => void;
  onError?: (error: unknown, variables: T) => void;
  onSuccessRedirect?: string;
  onErrorRedirect?: string;
} & FormConfig<T> &
  BaseProps<T, R>;

type ToastConfig = Parameters<ReturnType<typeof useToast>["toast"]>[number];

type SuccessToastConfig = ToastConfig;
type ErrorToastConfig = ToastConfig;

type FormConfig<T extends FieldValues> = {
  formProps?: UseFormProps<T>;
};

export const useFormHandler = <T extends FieldValues, R = any>({
  submitFunction,
  toast: hasToast = true,
  ...props
}: UseFormHandlerProps<T, R>) => {
  const { toast } = useToast();
  const { push } = useRouter();

  const { mutate, ...mutationResult } = useMutation({
    mutationFn: submitFunction,
    onSuccess(data, variables) {
      if (hasToast) {
        toast({
          title: "success",
          variant: "success",
          description: "success in sending data",
          ...props.successToastConfig,
        });
      }

      if (props.onSuccessRedirect) push(props.onSuccessRedirect);

      props.onSuccess?.(data, variables);
    },
    onError(error, variables) {
      if (hasToast) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "an error occurred when trying to send the data.",
          ...props.errorToastConfig,
        });
      }

      if (props.onErrorRedirect) push(props.onErrorRedirect);

      props.onError?.(error, variables);
    },
  });

  const form = useForm<T>({
    mode: "all",
    criteriaMode: "all",
    ...props.formProps,
    resolver: zodResolver(props.schema),
  });

  const onSubmit = (values: T) => mutate(values);

  return {
    form,
    mutationResult,
    onSubmit,
  };
};
