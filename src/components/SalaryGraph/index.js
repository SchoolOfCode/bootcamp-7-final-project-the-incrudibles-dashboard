import React from "react";
import { Bar } from "react-chartjs-2";

const SalaryGraph = ({ salaryInfo }) => {
  let twenty = 0;
  let twentyFive = 0;
  let thirty = 0;
  let thirtyFive = 0;
  let fortyFive = 0;
  let forty = 0;

  let salaries = salaryInfo.map((salary) => {
    return salary.current_salary;
  });
  for (let i = 0; i < salaries.length; i++) {
    switch (true) {
      case salaries[i] >= 45000:
        fortyFive++;
        break;
      case salaries[i] >= 40000:
        forty++;
        break;
      case salaries[i] >= 35000:
        thirtyFive++;
        break;
      case salaries[i] >= 30000:
        thirty++;
        break;
      case salaries[i] >= 25000:
        twentyFive++;
        break;
      case salaries[i] >= 20000:
        twenty++;
        break;

      default:
    }
  }
  return (
    <div>
      <Bar
        data={{
          labels: [
            "£20,000",
            "£25,000",
            "£30,000",
            "£35,000",
            "£40,000",
            "£45,000",
          ],
          datasets: [
            {
              label: "Current Salary",
              data: [twenty, twentyFive, thirty, thirtyFive, fortyFive, forty],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        }}
        height={350}
        width={800}
      />
    </div>
  );
};

export default SalaryGraph;
