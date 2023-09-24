import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfiles } from "../features/userProfiles/userProfilesSlice";
import Card from "./Card";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const { userProfiles, isLoading, isError, error } = useSelector(
    (state) => state.userProfiles
  );
  useEffect(() => {
    dispatch(fetchUserProfiles());
  }, [dispatch]);

  let content;

  if (isLoading)
    content = (
      <div className="flex justify-center items-center h-screen">
        <div>
          <span className="loading loading-bars loading-xs"></span>
          <span className="loading loading-bars loading-sm"></span>
          <span className="loading loading-bars loading-md"></span>
          <span className="loading loading-bars loading-lg"></span>
        </div>
      </div>
    );
  if (!isLoading && isError)
    content = (
      <div className="text-center text-red-400 font-semibold">{error}</div>
    );

  if (!isError && !isLoading && userProfiles?.users?.length === 0) {
    content = <div className="text-center">No videos found!</div>;
  }

  if (!isError && !isLoading && userProfiles?.users?.length > 0) {
    content = (
      <div className="grid xxl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mx-auto">
        {userProfiles?.users?.map((user, key) => (
          <Link
            key={key}
            to={{
              pathname: `/profile/${user?.id}`,
            }}
          >
            <Card user={user} />
          </Link>
        ))}
      </div>
    );
  }

  return <div className="my-5">{content}</div>;
};

export default Home;
