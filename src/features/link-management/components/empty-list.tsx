import Image from "next/image";

export const EmptyList = () => {
  return (
    <div className="flex flex-col gap-6 p-5 pb-10 rounded-xl bg-light-grey">
      <Image
        src="/get-started.png"
        alt="phone"
        className="my-0 mx-auto"
        width={124}
        height={80}
      />
      <h3 className="text-center text-2xl text-dark-gray font-bold">
        Let’s get you started
      </h3>
      <p className="text-grey text-center text-base font-normal">
        Use the “Add new link” button to get started. Once you have more than
        one link, you can reorder and edit them. We’re here to help you share
        your profiles with everyone!
      </p>
    </div>
  );
};
