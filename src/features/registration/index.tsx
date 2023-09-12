import Image from "next/image";
import Link from "next/link";
import { RegistrationForm } from "./components/registration-form";

export const Registration = () => {
  return (
    <div className="flex flex-col p-8 gap-16">
      <Image src="/devlinks-logo.svg" alt="logo" width={182} height={40} />
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-dark-gray">Create account</h1>
          <p className="leading-6 text-base font-normal text-grey">
            Let&apos;s get you started sharing your links!
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <RegistrationForm />
          <div className="flex flex-col gap-3">
            <span className="text-center text-base font-normal text-grey">
              Already have an account?
            </span>
            <Link href="/" className="text-base text-center text-purple">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
