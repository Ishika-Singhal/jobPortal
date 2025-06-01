import { fetchProfile } from "@/actions";
import Onboard from "@/components/Onboard";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const OnBoard = async () => {
  //get the authenticated user foem clerk

  const user = await currentUser();
  const profileInfo = await fetchProfile(user?.id);
  if (profileInfo?._id) {
    if (profileInfo?.role === "recruiter" && !profileInfo?.isPremiumUser) {
      redirect("/membership");
    } else {
      redirect("/");
    }
  } else return <Onboard />;
};

export default OnBoard;
