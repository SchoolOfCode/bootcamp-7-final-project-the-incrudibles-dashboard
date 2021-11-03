import React from "react";
import { Doughnut } from "react-chartjs-2";

const JobSatisfaction = ({ satisfactionIndex }) => {
  let one = 0;
  let two = 0;
  let three = 0;
  let four = 0;
  let five = 0;

  let jobSatisfaction = satisfactionIndex.map((satisfaction) => {
    return satisfaction.job_satisfaction;
  });
  for (let i = 0; i < jobSatisfaction.length; i++) {
    switch (jobSatisfaction[i]) {
      case 1:
        one++;
        break;
      case 2:
        two++;
        break;
      case 3:
        three++;
        break;
      case 4:
        four++;
        break;
      case 5:
        five++;
        break;

      default:
    }
  }
  return (
    <div>
      <Doughnut
        data={{
          labels: [
            "Very Dissattisfied",
            "Dissattisfied",
            "Satisfied",
            "Happy",
            "Very Happy",
          ],
          datasets: [
            {
              label: "Current Salary",
              data: [one, two, three, four, five],
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

      />
    </div>
  );
};

export default JobSatisfaction;
