import { fetchProfile } from "@/actions";
import AccountInfo from "@/components/AccountInfo";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const AccountPage = async () => {
  const user = await currentUser();
  const profileInfo = await fetchProfile(user?.id);
  if (!profileInfo) redirect("/onboard");
  return <AccountInfo profileInfo={profileInfo}/>;
};

export default AccountPage;
