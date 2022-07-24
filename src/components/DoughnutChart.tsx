import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Element } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { doughnutData as data } from "./../data/websitedata";
import ChartDataLabels from 'chartjs-plugin-datalabels';


const DoughnutChart = () => {
  ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);
  ChartJS.defaults.color = "#fff";
  ChartJS.defaults.elements.arc.borderWidth = 20;
  ChartJS.defaults.font.family = "Open Sans";
  const dataArray = data.datasets[0].data;
  const totalValue = dataArray.reduce((a, b) => a + b, 0);
  // console.log(totalValue);
  const options = {
    cutout: 130,
    elements: {
      arc: {
        borderWidth: 19,
      },
    },
    plugins: {
      datalabels: {
        color: 'black',
        backgroundColor: '#ccc',
        borderRadius: 4,
        formatter: (value: string,) => {
          return value;
        }
      }
    },
  }
  return (
    <div style={{ width: "28vw", color: "#fff" }}>
      <Doughnut
        data={data}
        options={options}
      />
    </div>
  );
};

export default DoughnutChart;
