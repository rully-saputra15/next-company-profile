import { MdAccessTime } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { IoCall } from "react-icons/io5";

const data = [
  {
    icon: <MdAccessTime className="text-xl text-neutral-50" />,
    title: "Mon-Fri 9:00-17:00",
    description: "Working hours",
  },
  {
    icon: <ImLocation className="text-xl text-neutral-50" />,
    title: "Lorem ipsum street No 28",
    description: "Our HQ Location",
  },
  {
    icon: <IoCall className="text-xl text-neutral-50" />,
    title: "+62 812 3456 7890",
    description: "Call Online",
  },
];

const InfoSection = () => {
  return (
    <section className="py-10 w-full flex flex-row flex-wrap justify-around items-stretch gap-5 bg-yellow-200">
      {data.map((item) => {
        return (
          <div
            key={item.title}
            className="flex flex-col justify-center items-center gap-5 p-4 w-72 shadow-lg rounded-xl bg-white"
          >
            <div className="bg-yellow-500 rounded-full p-2">{item.icon}</div>
            <div className="flex flex-col items-center">
              <h1 className="text-xl font-bold">{item.title}</h1>
              <p className="text-slate-400">{item.description}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default InfoSection;
