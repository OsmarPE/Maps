import React from 'react'

function DetailsItem({title,text}) {
    return (
        <div className="details__item">
            <h4 className='details__title'>{title}</h4>
            <p className="details__copy">{text}</p>
        </div>
    )
}

export default DetailsItem