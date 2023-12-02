import Link from "next/link";
import React from "react";

const NavList = () => {
  return (
    <div className="font-bold flex justify-center items-center gap-5">
      <Link href={"/"}>Home</Link>
      <Link href={"/team"}>Team</Link>
      <Link href={"/service"}>Service</Link>
      <Link href={"/projects"}>Projects</Link>
      <Link href={"/testimonials"}>Testimonial List</Link>
      <Link href={"/login"} className="px-4 py-2 rounded-md border">
        Login
      </Link>
      <Link
        href={"/register"}
        className="bg-green-500 text-white px-4 py-2 rounded-md"
      >
        Register
      </Link>
    </div>
  );
};

export default NavList;
