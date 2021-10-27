import * as React from "react";
import { Chart, PieSeries } from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";
import Title from "../../components/Title";
import { getMostRecentResponse } from "../../helperFunctions/getrecentresponse";

function parseResponse(array) {
  let isEmployed = 0;
  let isNotEmployed = 0;
  array.forEach((item) => {
    const last = getMostRecentResponse(item.responses);
    if (last.isemployed) {
      isEmployed++;
    } else isNotEmployed++;
  });
  const data = [
    { status: "employed", area: isEmployed },
    { status: "unemployed", area: isNotEmployed },
  ];
  return data;
}

export default function Piechart({ chartData, text }) {
  let parsedData = parseResponse(chartData);
  console.log(parsedData);
  return (
    <Chart data={parsedData}>
      <PieSeries valueField="area" argumentField="status" />
      <Title text={text} />
      <Animation />
    </Chart>
  );
}
