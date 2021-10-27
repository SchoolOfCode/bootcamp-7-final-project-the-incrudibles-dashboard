import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

const data = [
  { country: 'employed', area: 12 },
  { country: 'unemployed', area: 7 },
  
];
export default function Piechart({ data, text }) {
  
    return (
        <Chart
          data={chartData}
        >
          <PieSeries
            valueField="area"
            argumentField="country"
          />
          <Title
            text="Area of Countries"
          />
          <Animation />
        </Chart>
    );
  }
}
