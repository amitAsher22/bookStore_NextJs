import { SparklesIcon } from "@heroicons/react/24/solid";

const Logo = () => {
  return (
    <div className="flex flex-row items-center text-purple-600  ">
      <SparklesIcon className="w-12 h-12" />
      <p className="text-[28px] ml-1">Book Store</p>
    </div>
  );
};

export default Logo;
