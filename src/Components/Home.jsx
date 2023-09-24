import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfiles } from "../features/userProfiles/userProfilesSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { userProfiles, isLoading, isError, error } = useSelector(
    (state) => state.userProfiles
  );
  console.log(userProfiles, isLoading, isError, error);
  useEffect(() => {
    dispatch(fetchUserProfiles());
  }, [dispatch]);
  return <div>Home</div>;
};

export default Home;
