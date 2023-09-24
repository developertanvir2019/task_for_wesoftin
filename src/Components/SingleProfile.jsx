import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleUser } from "../features/singleUser/singleUserSlice";
import { useParams } from "react-router-dom";

const SingleProfile = () => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const { singleUser, isLoading, isError, error } = useSelector(
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
      <div className="text-center text-red-400 font-semibold">{error}</div>
    );

  if (!isError && !isLoading && singleUser?.users?.length === 0) {
    content = <div className="text-center">No User found!</div>;
  }

  if (!isError && !isLoading && singleUser?.users?.length > 0) {
    content = <div>heijfo</div>;
  }

  return <div>{content}</div>;
};

export default SingleProfile;
