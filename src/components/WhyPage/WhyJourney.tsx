import React from 'react'
import Journey from "../../assets/Journey.jpg"
import { Stack } from 'react-bootstrap'

const WhyJourney = () => {
  return (
    <>
    <Stack gap={5} className='my-5 text-center text-dark-green'>
      <h2>26 Years of Research and Progress</h2>
      <img
      src={Journey}
      alt="why journey pic"
      className="w-100" />
    </Stack>
    </>
  )
}

export default WhyJourney