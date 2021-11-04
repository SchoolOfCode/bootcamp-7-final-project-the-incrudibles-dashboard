import React from "react";
import { Line } from "react-chartjs-2";

const SuccessTime = ({ times }) => {
  let oneMonth = 0;
  let twoMonths = 0;
  let threeMonths = 0;
  let fourMonths = 0;

  const duration = times.map((time) => {
    const timeDiff = Math.abs(
      new Date(time.graduationDate.slice(0, 10)) -
        new Date(time.firstJobDate.slice(0, 10))
    );
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  });
  for (let i = 0; i < duration.length; i++) {
    switch (true) {
      case duration[i] >= 120:
        fourMonths++;
        break;
      case duration[i] >= 90:
        threeMonths++;
        break;
      case duration[i] >= 60:
        twoMonths++;
        break;
      case duration[i] >= 30:
        oneMonth++;
        break;

      default:
    }
  }
  return (
    <div>
      <Line
        data={{
          labels: [
            "0 - 1 months",
            "1 - 2 months",
            "2 - 3 months",
            "3 - 4 months",
          ],
          datasets: [
            {
              label: "Time taken to secure first job",
              data: [oneMonth, twoMonths, threeMonths, fourMonths],
              // data: [10, 23, 2, 1],
              backgroundColor: [
                "rgba(255, 99, 132, 0.5)",
                "rgba(54, 162, 235, 0.5)",
                "rgba(255, 206, 86, 0.5)",
                "rgba(75, 192, 192, 0.5)",
                "rgba(153, 102, 255, 0.5)",
                "rgba(255, 159, 64, 0.5)",
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

export default SuccessTime;
