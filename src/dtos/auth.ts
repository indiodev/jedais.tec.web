export type Login = {
  email: string;
  password: string;
};

export type ResponseLogin = {
  token: string;
  role: "admin" | "listener";
};
