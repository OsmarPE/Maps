import React from 'react'
import Container from './Container'
import MapsView from './MapsView'
import Details from './Details'

function Maps({position,details}) {
    return (
        <Container>
            <main className='maps'>
                <Details details={details}/>
                <div className="maps__content">
                    <MapsView position={position}/>
                </div>
            </main>
        </Container>
    )
}

export default Maps