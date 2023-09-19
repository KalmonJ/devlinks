import { useForm } from "react-hook-form";
import z from "zod";

type UseAuthenticationFormProps = {
  schema: z.Schema;
};

export const useAuthenticationForm = (props: UseAuthenticationFormProps) => {
  const form = useForm();
};
