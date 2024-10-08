import { RxAvatar } from "react-icons/rx";
const testimony_cards = ({ name, role, feedback }: any) => {
  return (
    <div className="w-full flex flex-col gap-5 bg-teal2 rounded-lg p-10 shadow-lg text-gray-800">
      {/* Profile Info */}
      <div className="flex items-center gap-5">
        <div className="text-teal3"><RxAvatar size={45} /></div>
        <div className="flex flex-col">
          <div className="font-bold">{name}</div>
          <div className="font-medium">{role}</div>
        </div>
      </div>
      {/* Feedback */}
      <div>&quot;{feedback}&quot;</div>
    </div>
  );
};

export default testimony_cards;
