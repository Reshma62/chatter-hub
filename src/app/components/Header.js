"use client"
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { usersInformation } from "../GlobalRedux/slices/useSlices";
import { useRouter } from "next/navigation";
const Header = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const signout = () => {
    router.push("/login");
    dispatch(usersInformation(null));
    localStorage.removeItem("users");
  };
  return (
    <div>
      <p>Header</p>
      <button onClick={signout}>signOut</button>
    </div>
  );
};

export default Header;
