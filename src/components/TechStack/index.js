import React from "react";
import { Bar } from "react-chartjs-2";

const TechStack = ({ data }) => {
  let labels = [];
  let values = [];

  function createGraphData(numberOfRows) {
    const map = data.reduce(function (obj, b) {
      obj[b] = ++obj[b] || 1;
      return obj;
    }, {});
    for (let i = 0; i < numberOfRows; i++) {
      let highest = Object.keys(map).reduce((a, b) =>
        map[a] > map[b] ? a : b
      );
      labels.push(highest);
      values.push((map[highest] / data.length) * 100);
      delete map[highest];
    }
  }

  createGraphData(8);

  return (
    <div>
      <Bar
        options={{
          indexAxis: "y",
          elements: {
            bar: {
              borderWidth: 0,
            },
          },
          scales: {
            x: {
              max: 10,
            },
          },
        }}
        data={{
          labels: labels,
          datasets: [
            {
              label: "Technology in use",
              data: values,
              backgroundColor: [
                "#003f5c",
                "#58508d",
                "#bc5090",
                "#ff6361",
                "#ffa600",
                "#40cc4c",
              ],
            },
          ],
        }}
        height={500}
        width={800}
      />
    </div>
  );
};

export default TechStack;
