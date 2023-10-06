import {
  useFormHandler,
  type UseFormHandlerProps,
} from "@/hooks/useFormHandler";
import { AuthenticationValues } from "../components/authentication-form";
import { LoginResponse } from "../types";
import { saveClientCookie } from "@/lib/utils";
import { userStore } from "@/stores/user";

interface UseAuthenticationFormProps
  extends Pick<
    UseFormHandlerProps<AuthenticationValues, LoginResponse>,
    "schema" | "submitFunction"
  > {}

const PATH_REDIRECT = "/management";
const DEFAULT_VALUES: AuthenticationValues = {
  email: "",
  password: "",
};

export const useAuthenticationForm = (props: UseAuthenticationFormProps) => {
  const setUser = userStore((state) => state.setUser);
  const { form, onSubmit } = useFormHandler<
    AuthenticationValues,
    LoginResponse
  >({
    ...props,
    onSuccessRedirect: PATH_REDIRECT,
    successToastConfig: {
      description: "login successful.",
    },
    formProps: {
      defaultValues: DEFAULT_VALUES,
    },
    onSuccess(data) {
      saveClientCookie("session", JSON.stringify(data));
      setUser(data.session.user);
    },
  });

  return {
    form,
    onSubmit,
  };
};
