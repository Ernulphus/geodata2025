import {
  ComposableMap,
  Geographies,
  Geography,
} from '@vnedyalk0v/react19-simple-maps';

import mapData from './us-albers.json';
import './StateMap.css';

export default function StateMap({
  setChosenState = () => {}
}) {
  const setFormattedState = (geography) => {
    const codeAddend = ',USA';
    const isoCode = geography.properties.iso_3166_2;
    const formattedState = isoCode + codeAddend;
    setChosenState(formattedState);
  }

  return (
    <>
      <ComposableMap
        projection="geoAlbers"
        className="us-map"
      >
        <Geographies geography={mapData}>
          {({ geographies }) => geographies.map((geography) => (
            <Geography 
              key={geography.rsmKey}
              geography={geography}
              stroke="teal"
              fill="white"
              onClick={() => {
                setFormattedState(geography);
              }}
            />
          ))
          }

        </Geographies>
      </ComposableMap>


    </>
  )
}