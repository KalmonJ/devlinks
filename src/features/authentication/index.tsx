import Image from "next/image";
import { AuthenticationForm } from "./components/authentication-form";
import Link from "next/link";

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
        <div className="flex flex-col gap-6">
          <AuthenticationForm />
          <div className="flex flex-col gap-3">
            <span className="text-center text-base font-normal text-grey">
              Don&apos;t have an account?
            </span>
            <Link
              href="/register"
              className="text-base text-center text-purple"
            >
              Create account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
