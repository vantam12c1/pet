import React from 'react'
import { withGoogleMap, withScriptjs, GoogleMap } from "react-google-maps"
import Marker from 'react-google-maps/lib/components/Marker';

const Map = () => {
  return (
    <div>
      <GoogleMap
          defaultZoom={15}
          defaultCenter={{ lat: 10.823099, lng: 106.629662 }}
        >
         <Marker
              icon={{
                url: 'https://insulationpads.co.uk/wp-content/uploads/2017/10/Home.png',
                scaledSize: new window.google.maps.Size(40, 40),
              }}
              position={{ lat: 10.823099, lng: 106.629662 }}
          />
      </GoogleMap>
    </div>
  );
}

export default withScriptjs(withGoogleMap(Map));