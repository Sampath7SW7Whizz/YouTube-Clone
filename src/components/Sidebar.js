import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiSolidHome,BiSolidVideos} from "react-icons/bi";
import { SiYoutubeshorts,SiYoutubegaming } from "react-icons/si";
import { LiaPhotoVideoSolid } from "react-icons/lia";
import { CgLivePhoto } from "react-icons/cg";
import { FaMusic } from "react-icons/fa";
import { MdSportsCricket } from "react-icons/md";
import { PiFilmSlateBold } from "react-icons/pi";

const NavItem = ({ icon, to, children }) => {
  return (
    <li className="flex items-center m-2 hover:bg-gray-100 rounded-md p-1">
      {React.cloneElement(icon, { size: 24, className: 'mr-5' })}
      <Link to={to}>{children}</Link>
    </li>
  );
};

const categories=["Music","Sports","Gaming","Movies"];

const iconarr=[<FaMusic />,<MdSportsCricket />,<SiYoutubegaming />,<PiFilmSlateBold />];

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early Return pattern
  if (!isMenuOpen) return null;

  return (
    <div className="pt-1 pl-1 shadow-lg w-48">
      <ul className="border-b-2 ">
      <NavItem icon={<BiSolidHome />} to="/">Home</NavItem>
      <NavItem icon={<SiYoutubeshorts />} >Shorts</NavItem>
      <NavItem icon={<BiSolidVideos />} >Videos</NavItem>
      <NavItem icon={<CgLivePhoto />} >Live</NavItem>
      </ul>
      <h1 className="font-bold pl-1 pt-1">Subscriptions</h1>
      <ul className="border-b-2">
      {categories.map((cat,index)=><NavItem icon={iconarr[index]} >{cat}</NavItem>)}
      </ul>
      <h1 className="font-bold pl-1 pt-1">Watch Later</h1>
      <ul className="border-b-2">
      {categories.map((cat,index)=><NavItem icon={iconarr[index]} >{cat}</NavItem>)}
      </ul>
    </div>
  );
};

export default Sidebar;
