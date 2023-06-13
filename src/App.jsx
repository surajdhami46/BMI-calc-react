import React, { useState } from "react";
function BMIForm(){
const [massState, setMassState] = React.useState();
  const [heightState, setHeightState] = React.useState();
  const [result, setResult] = React.useState(0);
 
  const submitHandler = (e) => {
    e.preventDefault();

    const height =heightState*2.4;
    const bmi = (massState/(height*height)*703); 
    setResult(bmi)
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <label>Mass(Body in KG)</label>
          <input
            onChange={(event) => {
              setMassState(event.target.value);
            }}
            type="number"
            id="mass"
            name="mass"
          />
        </div>
        <div>
          <label htmlFor="height">height(Body height in cm)</label>
          <input
            onChange={(e) => setHeightState(e.target.value)}
            type="number"
            id="height"
            name="height"
          />
        </div>
        <button type="submit">submit</button>
      </form>
      <h5>
        Result:{result.toPrecision(4)}
      </h5>
    </> 
  );
}
export default function App() {
  return (
    <main>
      <h2>BMI Calculator</h2>
      <BMIForm />
    </main>
  );
}
