"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { usersInformation } from "../GlobalRedux/slices/useSlices";
import { useRouter } from "next/navigation";
import DashboardLayout from "../(dashboard)/layout";
const Feed = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.allUserInfo.userInfo);
  const router = useRouter();
  if (!data) {
    router.push("/login");
  }

  return (
    <>
      <DashboardLayout>
        <div>Feed</div>
      </DashboardLayout>
    </>
  );
};

export default Feed;
