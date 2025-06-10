"use server";

import connectToDB from "@/database";
import Application from "@/models/application";
import Job from "@/models/job";
import Profile from "@/models/profile";
import { revalidatePath } from "next/cache";

//create profile action
export async function createProfile(formData, pathToRevalidate) {
  await connectToDB();
  await Profile.create(formData);
  revalidatePath(pathToRevalidate);
}

export async function fetchProfile(id) {
  await connectToDB();
  const result = await Profile.findOne({ userId: id });
  return JSON.parse(JSON.stringify(result));
}

export async function postNewJob(formData, pathToRevalidate) {
  await connectToDB();
  await Job.create(formData);
  revalidatePath(pathToRevalidate);
}

export async function fetchJobForRecruiter(id) {
  await connectToDB();
  const result = await Job.find({ recruiterId: id });
  return JSON.parse(JSON.stringify(result));
}

export async function fetchJobForCandidate(id) {
  await connectToDB();
  const result = await Job.find({});
  return JSON.parse(JSON.stringify(result));
}

export async function createJobApplication(data, pathToRevalidate) {
  await connectToDB();
  await Application.create(data);
  revalidatePath(pathToRevalidate);
}

export async function fetchApplicationForCandidate(id) {
  await connectToDB();
  const result = await Application.find({ candidateUserId: id });
  return JSON.parse(JSON.stringify(result));
}

export async function fetchApplicationForRecruiter(id) {
  await connectToDB();
  const result = await Application.find({ recruiterUserID: id });
  return JSON.parse(JSON.stringify(result));
}

export async function getCandidateDetailsById(id) {
  await connectToDB();
  const result = await Profile.findOne({ userId: id });
  return JSON.parse(JSON.stringify(result));
}

export async function updateJobApplication(data, pathToRevalidate) {
  await connectToDB();
  const {
    recruiterUserID,
    name,
    email,
    candidateUserId,
    status,
    jobID,
    _id,
    jobApplicationDate,
  } = data;

  const result = await Application.findOneAndUpdate(
    { _id: _id },
    {
      recruiterUserID: recruiterUserID,
      name: name,
      email: email,
      candidateUserId: candidateUserId,
      status: status,
      jobID: jobID,
      jobApplicationDate: jobApplicationDate,
    },
    {
      new: true,
    }
  );
  revalidatePath(pathToRevalidate);
}
