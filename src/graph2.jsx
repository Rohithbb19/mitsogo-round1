import React from "react";
import { Doughnut } from "react-chartjs-2";

function Graph2() {
  let data = {
    labels: ["France", "Italy", "Japan", "Canada"],
    datasets: [
      {
        lable: "sales",
        data: [4260, 3970, 4260, 3970],
        backgroundColor: [
          "rgba(128, 226, 255, 1)",
          "rgba(244, 159, 168, 1)",
          "rgba(255, 223, 148, 1)",
          "rgba(181, 179, 251, 1)",
        ],
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
  let plugins = [{
    id: 'text',
    beforeDraw: function(chart, a, b) {
      var width = chart.width,
        height = chart.height,
        ctx = chart.ctx;

      ctx.restore();
      var fontSize = (height / 320).toFixed(2);
      ctx.font = fontSize + "em sans-serif";
      ctx.textBaseline = "middle";
      ctx.textAlign = "center"

      var text = "16,460",
        textX = Math.round((width - ctx.measureText(text).width) / 1.70),
        textY = height / 2.5
    
        var text2 = "Sales",
        textX2 = Math.round((width - ctx.measureText(text).width) / 1.68),
        textY2 = height / 2.1

      ctx.fillText(text, textX, textY);
      ctx.fillText(text2, textX2, textY2);
      ctx.save();
    }
  }]

  return <Doughnut plugins={plugins} options={option} data={data} />;
}

export default Graph2;
