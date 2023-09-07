import Image from "next/image";
import { AuthenticationForm } from "./componentes/authentication-form";

export const Authentication = () => {
  return (
    <div className="flex flex-col p-8 gap-16">
      <Image src="/devlinks-logo.svg" alt="logo" width={182} height={40} />
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-dark-gray">Login</h1>
          <p className="leading-6 text-base font-normal text-grey">
            Add your details below to get back into the app
          </p>
        </div>
        <AuthenticationForm />
      </div>
    </div>
  );
};
