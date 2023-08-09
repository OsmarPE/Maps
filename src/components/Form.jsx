import React from 'react'
import Search from '../icons/Search';

function Form() {


function HandleSubmit(e) {
    e.preventDefault()
    console.log('click....');
}

  return (
    <form onSubmit={HandleSubmit} className='form'>
            <input type="text" name='search' placeholder='Search for any IP address' className="form__input" />
            <Search width='20'/>
    </form>
  )
}

export default Form