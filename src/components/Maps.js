import React, { useState } from 'react'
import styles from '../scss/Map.module.scss'
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import MapStyles from './MapStyles'
import { EventForm } from './EventForm'

const libraries = ['places']
const mapContainerStyle = {
  width: '100%',
  height: '100%',
}
const center = {
  lat: 23.79794304425684,
  lng: 120.92169897361532,
}

const options = {
  styles: MapStyles,
  disableDefaultUI: true,
  zoomControl: true,
  mapTypeControl: true,
}

export function Maps(props) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: `AIzaSyAhDv35adlrxazUwPtZvjU7NE3RAaq3piQ`,
    libraries,
  })
  //marker
  const [markers, setMarkers] = useState([])

  //onMapClick function

  const onMapClick = React.useCallback((event) => {
    setMarkers(() => [
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        time: new Date(),
      },
    ])
    console.log(event.latLng.lat())
    console.log(event.latLng.lng())
  }, [])

  const mapRef = React.useRef()
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map
  }, [])

  const [selected, setSelected] = useState(null)
  console.log(markers)

  if (loadError) return 'Error loading maps'
  if (!isLoaded) return 'Loading Maps'

  // function showEventButton() {
  //   let eventBtn = document.querySelector('.setEventBtn')
  //   eventBtn.style.display = 'block'
  // }

  function showEventForm() {
    let closePopup = document.getElementById('eventForm')
    closePopup.style.display = 'block'
  }

  return (
    <div className={styles.map}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.time.toISOString()}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => {
              setSelected(marker)
            }}
          />
        ))}

        {selected ? (
          <InfoWindow position={{ lat: selected.lat, lng: selected.lng }} onCloseClick={() => setSelected(null)}>
            <div>
              <h2 onClick={showEventForm}>我要開團</h2>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
      <EventForm location={markers} />
    </div>
  )
}