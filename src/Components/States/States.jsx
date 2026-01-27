import { useState, useEffect } from 'react'
import axios from 'axios'

function StateCard({ stateData }) {
  console.log(stateData);
  const { name, latitude, longitude } = stateData;
  return (
    <div className="state-card">
      <p>
        Name: {name} <br />
        Latitude: {latitude} <br />
        Longitude: {longitude}
      </p>
    </div>
  )
}


function States() {
  const [results, setResults] = useState();
  const baseURL = 'https://geodata2025.pythonanywhere.com';
  const stateReadEP = 'state/read';

  useEffect(() => {
    axios.get(`${baseURL}/${stateReadEP}`)
      .then(({ data }) => {
        setResults(data.States);
      });
  }, []);


  return (
    <>
      <h1>State Data</h1>
      <ul>
        { results 
          ? Object.keys(results).map((objKey) => (
              <StateCard stateData={results[objKey]} key={objKey} />
            ))
          : (<p>Loading...</p>)
        }
      </ul>
    </>
  )
}

// expression ? do-if-true : do-if-false;
/*
if (expression) {
return do-if-true}
else {return do-if-false}


*/

export default States;