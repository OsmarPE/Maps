import React from 'react'
import DetailsItem from './DetailsItem'

function Details({ details }) {
  const { ip, location, timezone, isp } = details

  return (
    <section className='details'>
      <DetailsItem title={'IP ADDRESS'} text={ip} />
      <DetailsItem title={'LOCATION'} text={location} />
      <DetailsItem title={'TIMEZONE'} text={timezone} />
      <DetailsItem title={'ISP'} text={isp} />

    </section>
  )
}

export default Details