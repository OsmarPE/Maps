import React from 'react'
import Form from './Form'
import Location from '../icons/Location'
import Container from './Container'
function Header({logo,setPosition,setAlert,setDetails}) {
  return (
    <header className='header'>
        <Container>
            <div className="header__body">
                <h1 className="header__logo">
                  <Location width='20'/>
                  {logo}</h1>
                <Form setPosition={setPosition} setDetails={setDetails} setAlert={setAlert}/>
            </div>
        </Container>
    </header>
  )
}

export default Header