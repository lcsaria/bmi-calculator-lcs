import "./index.css";
import React, { useState } from "react";

function App() {
  // state
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = (event) => {
    //prevent submitting to the server
    event.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      // Logic for message

      if (bmi < 25) {
        setMessage("You are underweight");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("You are a healthy weight");
      } else {
        setMessage("You are overweight");
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <div className="rounded-lg p-12 bg-slate-400">
        <h2 className="font-bold text-xl text-center mb-10">BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input
              value={weight === 0 ? null : weight}
              onChange={(e) => setWeight(e.target.value)}
              className="appearance-none block w-full  border border-gray-400 rounded py-2 px-2 leading-tight outline-none focus:border-gray-500"
            />
          </div>

          <div>
            <label>Height (in)</label>
            <input
              value={height === 0 ? null : height}
              onChange={(event) => setHeight(event.target.value)}
              className="appearance-none block w-full  border border-gray-400 rounded py-2 px-2 leading-tight outline-none focus:border-gray-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-2 mt-5">
            <button
              className="appearance-none w-full py-2 text-white bg-gray-900 hover:bg-gray-500  hover:-translate-y-0.5 transform transition rounded-md focus:outline-none"
              type="submit"
            >
              Submit
            </button>
            <button
              className="appearance-none w-full  py-2 text-white bg-gray-900 hover:bg-gray-500  hover:-translate-y-0.5 transform transition rounded-md focus:outline-none"
              onClick={reload}
            >
              Reload
            </button>
          </div>
        </form>

        <div className="text-justify mt-10">
          <h3>
            Your BMI is: <span className="font-bold">{bmi}</span>
          </h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
