import React from 'react'
import { CircleLoader } from 'react-spinners'

const Loading = () => {
  return (
    <CircleLoader
        color="blue"
        size={300}
        aria-label="Loading Spinner"
        data-testid="loader"
        className='flex mx-auto my-10 justify-center items-center h-screen w-screen'
      />
  )
}

export default Loading