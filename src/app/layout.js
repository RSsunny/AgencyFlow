import Footer from "@/Components/Footer/Footer";
import "./globals.css";
import Subscribe from "@/Components/Subscribe/Subscribe";

export const metadata = {
  title: "Agency Flow",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>{children}</body>
      <Subscribe />
      <Footer></Footer>
    </html>
  );
}
