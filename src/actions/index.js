"use server";

import connectToDB from "@/database";
import Job from "@/models/job";
import Profile from "@/models/profile";
import { revalidatePath } from "next/cache";

//create profile action
export async function createProfile(formData, pathToRevalidate) {
  await connectToDB();
  await Profile.create(formData);
  revalidatePath(pathToRevalidate);
}


export async function fetchProfile(id){
    await connectToDB();
    const result = await Profile.findOne({userId : id})
    return JSON.parse(JSON.stringify(result))
}

export async function postNewJob(formData,pathToRevalidate){
  await connectToDB();
  await Job.create(formData);
  revalidatePath(pathToRevalidate)
}

export async function  fetchJobForRecruiter(id){
  await connectToDB();
  const result = await Job.find({recruiterId : id})
  return JSON.parse(JSON.stringify(result))
}