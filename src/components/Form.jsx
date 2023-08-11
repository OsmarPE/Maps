import React, { useEffect, useState } from 'react'
import Search from '../icons/Search';

function Form({ setPosition, setAlert ,setDetails }) {

  const [value, setValue] = useState('')


  async function queryLocation(ip) {

    try {
      const response = await fetch(`http://ip-api.com/json/${ip}`)
      const data = await response.json()

      if (data.status === 'fail') throw new Error('Location Not Found')

      const { lat, lon, country, city, timezone, isp, query } = data
      
      setDetails({
        ip:query,
        location: `${country}, ${city}`,
        timezone,
        isp
      });

      setPosition([lat, lon])

      setAlert({
        message: ` You're located in ${country}`,
        showAlert: true
      })

    } catch (error) {

      setAlert({
        message: error.message,
        showAlert: true
      })

    } finally {
      setValue('')

      setTimeout(() => {

        setAlert(alert => {
          return {
            ...alert,
            showAlert: false
          }
        })

      }, 3000);
    }

  }



  function handleSubmit(e) {
    e.preventDefault()
    queryLocation(value);

  }

  function hanledChange(e) {
    setValue(e.target.value)
    setPosition([])
  }

  return (
    <form onSubmit={handleSubmit} className='form'>
      <input type="text" value={value} onChange={hanledChange} name='search' placeholder='Search for any IP address' className="form__input" />
      <Search width='20' />
    </form>
  )
}

export default Form