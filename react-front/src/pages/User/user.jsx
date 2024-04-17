import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setLoading, setError } from "../Store/userSlice";

const UserComponent = () => {
  const dispatch = useDispatch();
  const { username, loading, error } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    const fetchUser = async () => {
      try {
        dispatch(setLoading());
        const response = await fetch("http://localhost:3000/auth/login");
        const userData = await response.json();
        dispatch(setUser(userData));
      } catch (error) {
        dispatch(setError(error.message));
      }
    };

    fetchUser();
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>User Information</h2>
      <p>Username: {username}</p>
    
    </div>
  );
};

export default UserComponent;