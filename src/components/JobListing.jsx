'use client'
import React from 'react'
import PostNewJob from './PostNewJob'

const JobListing = ({user , profileInfo}) => {
  return (
    <div className='mx-auto max-w-7xl'>
        <div className="flex justify-between items-baseline border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-500">
                {
                    profileInfo?.role === 'candidate'?
                    "Explore All Jobs":"Jobs Dashboard"
                }
            </h1>
            <div className='flex items-center'>
                {
                   profileInfo?.role === "candidate" ?
                   <p>Filter</p> : <PostNewJob profileInfo={profileInfo}/>
                }
            </div>
          

        </div>
    </div>
  )
}

export default JobListing