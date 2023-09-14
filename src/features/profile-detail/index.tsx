import { FormProfile } from "./components/form-profile";

export const ProfileDetail = () => {
  return (
    <section className="bg-white flex flex-col gap-10 rounded-xl">
      <div className="flex flex-col p-6 gap-2">
        <h2 className="text-dark-gray font-bold text-2xl">Profile Details</h2>
        <p className="text-base font-normal text-grey">
          Add your details to create a personal touch to your profile.
        </p>
      </div>
      <FormProfile />
    </section>
  );
};
