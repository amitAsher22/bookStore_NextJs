
import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { MyProvider } from '../app/context/MyContext';





export const metadata: Metadata = {
  title: "Create Next App amit",
  description: "Generated by create next app",
};
interface MyComponentProps {
  children: ReactNode | ReactNode[];
}

export default async  function RootLayout({children}: MyComponentProps) {

  return (
    <html lang="en">
      <body
        className={ `antialiased`}
      >
        <MyProvider>

        {children}
        <ToastContainer position="bottom-center"/>
        </MyProvider>
      </body>
    </html>
  );
}
