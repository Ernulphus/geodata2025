import {
  ComposableMap,
  Geographies,
  Geography,
} from '@vnedyalk0v/react19-simple-maps';
import mapData from './us-albers.json';
import './StateMap.css';


export default function StateMap() {
  return (
    <>
      <p>Map</p>
      <ComposableMap
        projection="geoAlbers"
        className="us-map"
      >
        <Geographies geography={mapData}>
          {({ geographies }) => geographies.map((geography) => (
            // console.log(geography);
            <Geography
              key={geography.rsmKey}
              geography={geography}
              stroke="teal"
              fill="white"
              onClick={console.log}
            />
          ))}
        </Geographies>

      </ComposableMap>
    </>
  )
}