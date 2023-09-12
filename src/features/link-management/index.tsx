import { LinkList } from "./components/link-list";

export const LinkManagement = () => {
  return (
    <div className="flex flex-col bg-white rounded-xl">
      <div className="p-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl text-dark-gray font-bold">
            Customize your links
          </h2>
          <p className="text-grey text-base font-normal">
            Add/edit/remove links below and then share all your profiles with
            the world!
          </p>
        </div>
      </div>
      <LinkList />
    </div>
  );
};
