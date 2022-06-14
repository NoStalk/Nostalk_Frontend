import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { doughnutData as data } from './../data/websitedata';
const DoughnutChart = () => {
    ChartJS.register(ArcElement, Tooltip, Legend);

    return (
      <div style={{width: "28vw", color: "#fff"}}>
            
          <Doughnut data={data} />
      </div>
  )
}

export default DoughnutChart