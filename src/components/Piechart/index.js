import * as React from "react";
import {
  Chart,
  PieSeries,
  Title,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";
import Paper from "@mui/material/Paper";

function parseResponse(array) {
  let isEmployed = 0;
  let isNotEmployed = 0;
  array.forEach((item) => {
    if (item.responses[0].tech_role) {
      isEmployed++;
    } else isNotEmployed++;
  });
  const data = [
    { status: "employed", area: isEmployed },
    { status: "unemployed", area: isNotEmployed },
  ];
  return data;
}

export default function Piechart({ data, text }) {
  let chartData = parseResponse(data);

  return (
    <Chart data={chartData}>
      <PieSeries valueField="area" argumentField="status" />
      <Title text={text} />
      <Animation />
    </Chart>
  );
}
