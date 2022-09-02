import React from "react";
import { Line } from "react-chartjs-2";

function Graph1() {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June',];
    const data = {
        labels,
        datasets: [
          {
            label: "Products sold",
            fill: true,
            data:[15000,10000,16500,12500,17000,24000],
            borderColor: 'rgba(181, 179, 251, 1)',
            backgroundColor: 'rgba(181, 179, 251, 0.2)',
            cubicInterpolationMode: 'monotone'
          },
          {
            label: "Total views",
            fill: true,
            data:[19000,7000,15500,12500,16000,10000],
            borderColor: 'rgba(128, 226, 255, 1)',
            backgroundColor: 'rgba(128, 226, 255, 0.2)',
            cubicInterpolationMode: 'monotone'
          },
        ],
      };
      let option = {
        plugins: {
          legend: {
            position: 'bottom'
          },
        },
      };
    


  return (
    <Line options={option} data={data} />
  )
}

export default Graph1;
