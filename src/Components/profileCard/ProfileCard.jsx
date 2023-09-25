/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./ProfileCard.css";
const ProfileCard = ({ user }) => {
  console.log(user);

  return (
    <div>
      <div className="bg-pink-400 w-full h-64"></div>
      <div className="flex items-center  justify-center -mt-16">
        <div className="bg-white w-full mx-12 shadow-xl rounded-lg pb-3">
          <div className="photo-wrapper p-2 -mt-16">
            <img
              className="w-44 h-44 rounded-full mx-auto bg-yellow-200"
              src={user?.image}
              alt={user?.firstName}
            />
          </div>
          <div className="p-2">
            <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
              {user?.firstName} {user?.lastName}
            </h3>
            <div className="text-center text-gray-400 text-xs font-semibold">
              <p>{user?.company?.title}</p>
            </div>

            {/* user Details */}
            <div className="lg:flex md:flex justify-between lg:mx-20 mt-12">
              <div className="flex justify-center">
                <div className="text-start shadow-lg p-3 ps-5 w-80 border-gradient overflow-hidden">
                  <div className="transition-transform hover:scale-110">
                    <h3 className="text-lg font-semibold mb-2 text-center text-blue-500">
                      personal info
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Address: {user?.address?.state}, {user?.address?.city}
                    </p>
                    <p className="text-gray-500 text-sm">
                      Email: {user?.email}
                    </p>
                    <p className="text-gray-500 text-sm">
                      phone: {user?.phone}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="text-start shadow-lg p-3 ps-5 w-80 border-gradient overflow-hidden">
                  <div className="transition-transform hover:scale-110">
                    <h3 className="text-lg font-semibold mb-2 text-center text-blue-500">
                      Company info
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Name: {user?.company?.name}
                    </p>
                    <p className="text-gray-500 text-sm">
                      Role: {user?.company?.title}
                    </p>
                    <p className="text-gray-500 text-sm">
                      Address: {user?.company?.address?.state},{" "}
                      {user?.company?.address?.city}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="text-start shadow-lg p-3 ps-5 w-80 border-gradient overflow-hidden">
                  <div className="transition-transform hover:scale-110">
                    <h3 className="text-lg font-semibold mb-2 text-center text-blue-500">
                      Others info
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Date of birth: {user?.birthDate}
                    </p>
                    <p className="text-gray-500 text-sm">
                      Blood Group: {user?.bloodGroup}
                    </p>
                    <Link to={user?.domain}>
                      {" "}
                      <p className="text-gray-500 text-sm">
                        personal website: {user?.domain}
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center my-3">
              <a
                className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                href="#"
              >
                View Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
