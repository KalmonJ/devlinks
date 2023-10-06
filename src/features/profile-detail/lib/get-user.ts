export const getUser = async (userId: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/user/${userId}`
  );
  const data = await response.json();
  return data;
};
