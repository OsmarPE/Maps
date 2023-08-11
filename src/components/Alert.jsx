import React from 'react'
import Warning from '../icons/Warning'

function Alert({alert}) {

    const {showAlert,message} = alert

  return (
    <div className={`alert ${ showAlert && 'active'} `}>
        <Warning width={22} />
        <h3 className="alert__message">{message}</h3>
    </div>
  )
}

export default Alert