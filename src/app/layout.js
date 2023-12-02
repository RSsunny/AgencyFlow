import "./globals.css";
import Footer from "../Components/Footer/Footer";
import Subscribe from "../Components/Subscribe/Subscribe";
import Navbar from "@/Components/Header/Navbar";

async function getData() {
  const res = await fetch("https://agency.teamrabbil.com/api/SiteMeta/home");
  return res.json();
}

export const metadata = {
  title: "Home - Agency Flow",
  description:
    "We help businesses like yours earn more customers, standout from competitors, make more money",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <Navbar />
        {children}

        <Subscribe />
        <Footer></Footer>
      </body>
    </html>
  );
}
