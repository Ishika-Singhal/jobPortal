import { fetchProfile } from "@/actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await currentUser();

  const profileInfo = await fetchProfile(user?.id);

  if (user && !profileInfo?._id) redirect("/onboard");
  return (
    <div>
      <h1 className="text-4xl text-blue-900">Hello</h1>
    </div>
  );
}
