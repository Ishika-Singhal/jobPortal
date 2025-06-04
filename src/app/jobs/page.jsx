import { fetchProfile } from '@/actions'
import JobListing from '@/components/JobListing'
import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

const page = async() => {
    const user = await currentUser()
    const profileInfo = await fetchProfile(user?.id)
  return (
    <JobListing 
      user = {JSON.parse(JSON.stringify(user))}
      profileInfo = {profileInfo}
    />
  )
}

export default page