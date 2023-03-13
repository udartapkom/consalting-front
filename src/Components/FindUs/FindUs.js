import React from "react";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

function FindUs(){
    const defaultState = {
        center: [47.198646, 39.621732],
        zoom: 14,
      };
    return(
 <YMaps>
      <Map defaultState={defaultState} className='FindUs'>
        <Placemark geometry={[47.198646, 39.621732]} />
      </Map>
    </YMaps> 
   )
}
export default FindUs;