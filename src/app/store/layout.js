import Sidebar from "../ui/sidebar/Sidebar";

export const metadata = {
  title: "book store",
  description: "stor book shop",
};

export default function BookStoreLayout({ children }) {
  return (
    <div className="flex xs:flex-col sm:flex-col md:flex-row lg:flex-row">
      <div className="flex flex-wrap p-2 justify-center">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
