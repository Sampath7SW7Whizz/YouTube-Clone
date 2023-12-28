import React from "react";
import { FaUserCircle } from "react-icons/fa";

const VideoCards1 = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;

  return (
    <div className="p-2 m-2 w-60 shadow-lg flex flex-col rounded-lg">
      <div>
        <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      </div>
      <div className="flex justify-center">
        <div className="pt-2 pr-2">
          <FaUserCircle />
        </div>
        <div className="">
          <h6 className="text-base font-medium w-4/5">{title}</h6>
          <p className="text-gray-dark text-xs w-4/5 h-[32px]">{channelTitle}</p>
          <div className="flex mt-1 justify-between items-center text-xs pb-2.5 text-gray-details font-semibold mob:flex-col mob:items-start">
            <div>{statistics.viewCount} views</div>
            
          </div>
        </div>
      </div>
      

    </div>
  );
};

export default VideoCards1;