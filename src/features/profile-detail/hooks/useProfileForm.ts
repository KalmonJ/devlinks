import { type BaseProps, useFormHandler } from "@/hooks/useFormHandler";
import type { UserProfileValues } from "../schema";
import type { User } from "@/features/authentication/types";

interface UseProfileFormProps extends BaseProps<UserProfileValues, void> {
  userProfile: User;
}

const DEFAULT_VALUES: UserProfileValues = {
  email: "",
  firstName: "",
  lastName: "",
  image: "",
};

export const useProfileForm = (props: UseProfileFormProps) => {
  return useFormHandler<UserProfileValues, void>({
    ...props,
    formProps: {
      defaultValues: {
        ...DEFAULT_VALUES,
        ...props.userProfile,
      },
    },
    successToastConfig: {
      description: "profile updated successfully.",
    },
  });
};
