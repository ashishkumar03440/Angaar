import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

//  case 1 — no dependency
  // useEffect(() => {
  //   console.log('Effect running with no dependency runs for every render');
  // });

  // case 2 — empty dependency
  // useEffect(() => {
  //   console.log('Effect running with empty dependency runs only once');
  // }, []);

    // case 3 — runs only ion specific change 
  // useEffect(() => {
  //   console.log('count changed',count);
  // }, [count]);

  // case 4 = we use it to clean the code 
  useEffect(() => {
    const interval = setInterval(()=>{    console.log('timer tick');
},2000)
return()=>{
  clearInterval(interval);
  console.log("clear");
}
  }, [count]);

  return (
    <div>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        Increment Count
      </button>
      <p className="text-lg">Count: {count}</p>
    </div>
  );
}

export default App;
