import React from 'react'
import styles from "./Chart.module.css";
import { Line, Bar } from "react-chartjs-2";

import { useSelector } from "react-redux";
import { selectData, selectDailyData, selectCountry } from "../covidSlice";

const Chart:React.FC = () => {
  const data = useSelector(selectData)
  const dailyData = useSelector(selectDailyData)
  const country = useSelector(selectCountry)


  const barChart = data && (
    <Bar
      data={{
        labels: ["感染者した人", "回復した人", "死んだ人"],
        datasets: [
          {
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "#008080",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [
              data.confirmed.value,
              data.recovered.value,
              data.deaths.value,
            ],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `${country}の最新状況` },
      }}
    />
  );


  const lineChart = dailyData[0] && (
    <Line
      data={{
        labels: dailyData.map(({ reportDate }) => reportDate),
        datasets: [
          {
            data: dailyData.map((data) => data.confirmed.total),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map((data) => data.deaths.total),
            label: "Deaths",
            borderColor: "#ff3370",
            fill: true,
          },
        ],
      }}
    />
  );


  return (
    <div className={styles.container}>
      {country.length ? barChart : lineChart}
    </div>
  );

}

export default Chart
