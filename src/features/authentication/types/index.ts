export type Login = {
  email: string;
  password: string;
};

export type LoginResponse = {
  session: Session;
};

export type Session = {
  accessToken: string;
  user: User;
};

export type User = {
  id: string;
  image: string;
  email: string;
  firstName: string;
  lastName: string;
};
