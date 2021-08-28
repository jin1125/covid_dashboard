import React from 'react';
import './App.css';
import Cards from './features/covid/Cards/Cards';
import Chart from './features/covid/Chart/Chart';
import PieChart from './features/covid/PieChart/PieChart';
import SwitchCoutry from './features/covid/SwitchCountry/SwitchCountry';

function App() {
  return (
    <div className="App">
     <Cards/>
     <Chart/>
     <PieChart/>
     <SwitchCoutry/>
    </div>
  );
}

export default App;
