import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/constants";

const Header: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-red-500">
      <div className="flex flex-auto ml-10 py-5 text-white text-4xl">
        MOVIE DATABASE
      </div>
      <ul className="flex flex-auto gap-16 p-4 text-white text-xl">
        <li className="hover:bg-neutral-950 rounded-full hover:bg-opacity-20 px-2">
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li className="hover:bg-neutral-950 rounded-full hover:bg-opacity-20 px-2">
          <Link to={ROUTES.POPULAR}>Popular</Link>
        </li>
        <li className="hover:bg-neutral-950 rounded-full hover:bg-opacity-20 px-2">
          <Link to={ROUTES.TOPRATED}>Top Rated</Link>
        </li>
        <li className="hover:bg-neutral-950 rounded-full hover:bg-opacity-20 px-2">
          <Link to={ROUTES.UPCOMING}>Upcoming</Link>
        </li>
        <li className="hover:bg-neutral-950 rounded-full hover:bg-opacity-20 px-2">
          <Link to={ROUTES.FAVORITES}>My Favorites</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
