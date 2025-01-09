import Link from "next/link";
import NavLinks from "../../ui/sidebar/NavLinks";
import Logo from "../../ui/sidebar/Logo";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";

const Sidebar = () => {
  return (
    <div className="flex flex-col ">
      <Link
        href="/store"
        className=" mb-2 flex h-20 items-end justify-start rounded-md  "
      >
        <div>
          <Logo />
        </div>
      </Link>

      <div className="flex flex-wrap  justify-between md:grow flex-row md:justify-between space-x-2 md:flex-col md:space-x-2 md:space-y-2 ">
        <NavLinks />
        <form>
          <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-purple-600 md:flex-none md:justify-start md:px-3">
            <Link href="/login">
              <ArrowLeftOnRectangleIcon className="w-6" />
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sidebar;
