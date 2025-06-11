import { fetchApplicationForCandidate, fetchJobForCandidate } from '@/actions'
import CandidateActivity from '@/components/CandidateActivity'
import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

const Activity = async() => {

  const user = await currentUser()
  const jobList = await fetchJobForCandidate(user?.id)
  const jobApplicant = await fetchApplicationForCandidate(user?.id)
  console.log(jobApplicant);
  return (
    <CandidateActivity jobList={jobList} jobApplicant={jobApplicant}/>
  )
}

export default Activity