import React from "react";
import { Bar } from "react-chartjs-2";

const TechStack = ({ data }) => {
  const top6 = [1, 2, 3, 4, 5, 6];

  const values = [1, 2, 3, 4, 5, 6];

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
        }}
        data={{
          labels: top6,
          datasets: [
            {
              label: "Technology in use",
              data: values,
              backgroundColor: ["#55ba46"],
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