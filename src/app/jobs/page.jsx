import { fetchJobForRecruiter, fetchProfile } from '@/actions'
import JobListing from '@/components/JobListing'
import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

const page = async() => {
    const user = await currentUser()
    const profileInfo = await fetchProfile(user?.id)

    const jobList = await fetchJobForRecruiter(user?.id)
  return (
    <JobListing 
      user = {JSON.parse(JSON.stringify(user))}
      profileInfo = {profileInfo}
      jobList = {jobList}
    />
  )
}

export default page