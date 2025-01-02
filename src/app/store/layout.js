import Sidebar from "../ui/sidebar/Sidebar";

export const metadata = {
  title: "list of books",
  description: "stor book shop",
};

export default function BookStoreLayout({ children }) {
  return (
    <div className="flex flex-col sm:flex-row ">
      <div>
        <Sidebar />
      </div>
      <div className="w-full flex justify-center items-center flex-wrap bg-gray-50 ">
        {children}
      </div>
    </div>
  );
}
