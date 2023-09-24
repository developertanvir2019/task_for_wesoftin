/* eslint-disable react/prop-types */
import { useState } from "react";

const Card = ({ user }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className={`relative group card ${hovered ? "hovered" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ width: "330px", height: "400px" }}
      >
        <div className="overflow-hidden">
          <div className="card w-full bg-stone-200 bg-opacity-40">
            <figure>
              <img
                src={user?.picture?.large}
                alt=""
                className="transition-transform transform group-hover:scale-110 w-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Life hack</h2>
            </div>
          </div>
        </div>
        <div
          className={`absolute inset-0 bg-blue-500 bg-opacity-0 transition-opacity opacity-0 ${
            hovered ? "group-hover:bg-opacity-90 opacity-100" : ""
          }`}
        >
          <div className="flex flex-col justify-center items-center h-full p-4 text-white">
            <h2 className="text-xl font-bold mb-2">title</h2>
            <p>details</p>
            <button className="bg-white text-blue-500 mt-2 py-1 px-4 rounded hover:bg-blue-500 hover:text-white transition-colors">
              buttonText
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
