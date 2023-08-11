import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import React from 'react'
import 'leaflet/dist/leaflet.css'
function MapsView({position}) {
    
    return (
        <MapContainer center={position} zoom={15}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} >
                <Popup>
                    You're Here
                </Popup>
            </Marker>
        </MapContainer>


    )
}

export default MapsView