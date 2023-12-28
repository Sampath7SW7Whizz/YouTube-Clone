import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {AiOutlineMenu, AiOutlineSearch } from  "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { cacheResults } from '../utils/searchSlice';
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiSolidVideoPlus } from "react-icons/bi";
import { GoSearch } from "react-icons/go";

import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/config';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        await getSearchSuggestions();
      }
    }, 200);
  
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  

const getSearchSuggestions = async () => {
  const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
  const json = await data.json();

  setSuggestions(json[1]);

  // update cache
  dispatch(
    cacheResults({
      [searchQuery]: json[1],
    })
  );
};

  

  return (
    <div className='grid grid-flow-col  px-5 py-2.5 shadow h-14 fixed top-0 left-0 right-0 bg-white z-10 ' >
      <div className="flex col-span-1">
        <AiOutlineMenu className="h-8 cursor-pointer" onClick={()=> toggleMenuHandler()}/>
        <a href="/"> <img  className="h-8 mx-2"
            alt="youtube-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
        /> 
        </a>

      </div >
      
      <div className="col-span-10 px-10">
        <div className="relative">
          <input
            className="w-3/4 border border-gray-400 p-2 rounded-l-full transition duration-300 focus:border-blue-500 focus:outline-none focus:shadow-outline-blue"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-3 py-2 rounded-r-full bg-gray-200">
          🔍
          </button>
        </div>
        {showSuggestions && (
          <div className=" bg-white py-2 px-2 w-[29.7rem] shadow-lg rounded-lg border border-gray-200">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍 {s}{" "}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1 flex items-center">
      <BiSolidVideoPlus  size={30} className='mr-5'/>
      <IoMdNotificationsOutline size={30} className='mr-5' />
        <FaUserCircle size={30} />
      </div>
    </div>
  )
}

export default Head;