import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleUser } from "../features/singleUser/singleUserSlice";
import { useParams } from "react-router-dom";
import ProfileCard from "./profileCard/ProfileCard";

const SingleProfile = () => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const { singleUser, isLoading, isError } = useSelector(
    (state) => state.singleUser
  );
  useEffect(() => {
    dispatch(fetchSingleUser(id));
  }, [dispatch, id]);
  console.log(id, singleUser);
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
      <div className="text-center text-red-400 font-semibold text-lg mt-12">
        No User Found
      </div>
    );

  if (!isError && !isLoading && !singleUser) {
    content = <div className="text-center">No User found!</div>;
  }

  if (!isError && !isLoading && singleUser) {
    content = (
      <>
        <ProfileCard user={singleUser} />
      </>
    );
  }

  return <div>{content}</div>;
};

export default SingleProfile;
