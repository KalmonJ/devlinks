import { User } from "@/features/authentication/types";
import { UserProfileValues } from "../schema";

type UpdateProfileProps = Omit<UserProfileValues, "image"> & {
  image: FileList;
  _id: string;
};

export const updateProfile = async (props: UpdateProfileProps) => {
  const formData = new FormData();

  Object.entries(props).forEach(([key, value]) => {
    if (value instanceof FileList) {
      formData.append(key, value[0]);
    } else {
      formData.append(key, value);
    }
  });

  const response = await fetch(`http://localhost:3333/user`, {
    method: "PUT",
    body: formData,
  });

  const data: User = await response.json();

  console.log(data, "dataaaaaa");

  return data;
};
