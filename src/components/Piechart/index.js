import * as React from "react";
import {
  Chart,
  PieSeries,
  Title,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";

export default function Piechart({ response }) {
  const data = [
    { status: "employed", area: isEmployed },
    { status: "unemployed", area: isNotEmployed },
  ];
  return (
    <Chart data={data}>
      <PieSeries valueField="area" argumentField="status" />
      <Title text="Area of Countries" />
      <Animation />
    </Chart>
  );
}
