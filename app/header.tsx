import React from "react";
import "../styles/globals.css";
import Link from "next/link";

function Header() {
  return (
    <header className="p-5 bg-blue-500">
      <Link className=" px-2 py-1 text-blue-500 mr-3 bg-white rounded-lg" href="">
        Home
      </Link>
      <Link className="mr-3 px-2 py-1 text-blue-500 bg-white rounded-lg" href="/todos">
        Todos
      </Link>
      <Link className=" px-2 py-1 text-blue-500 bg-white rounded-lg" href="/search">
        Search
      </Link>
    </header>
  );
}

export default Header;
