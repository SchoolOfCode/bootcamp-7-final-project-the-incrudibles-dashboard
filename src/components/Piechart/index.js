import React from "react";
import { Pie } from "react-chartjs-2";

const Piechart = ({ employmentStatus }) => {
  let employed = 0;
  let unEmployed = 0;

  let isEmployed = employmentStatus.map((employed) => {
    return employed.tech_role;
  });
  for (let i = 0; i < isEmployed.length; i++) {
    isEmployed[i] ? employed++ : unEmployed++;
  }

  return (
    <div>
      <Pie
        data={{
          labels: ["Employed", "Unemployed"],
          datasets: [
            {
              label: "Employment Status",
              data: [employed, unEmployed],
              backgroundColor: [
                "rgba(75, 192, 192, 0.8)",
                "rgba(255, 99, 132, 0.8)",
              ],
              borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
              borderWidth: 1,
            },
          ],
        }}
        height={250}
        width={800}
      />
    </div>
  );
};

export default Piechart;
