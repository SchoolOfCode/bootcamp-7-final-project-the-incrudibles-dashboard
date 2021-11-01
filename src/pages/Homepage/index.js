import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { CSVLink } from "react-csv";
import convertJsonToCsv from "../../helperFunctions/jsontocsv";
import Piechart from "../../components/Piechart";
import { useDataContext } from "../../hooks/useDataContext";
import GradTable from "../../components/GradTable";
import JobSatisfaction from "../../components/JobSatisfaction";
import { getMostRecentResponse } from "../../helperFunctions/getrecentresponse";
import SalaryGraph from "../../components/SalaryGraph";
import SuccessTime from "../../components/SuccessTime";

export default function Homepage() {
  const { data, filterDataByCohort, resetFilter, filterDataByName } =
    useDataContext();
  const ChartData = data.map((row) => {
    const graduationDate = row.graduation_date;
    const firstJobDate = row.first_job_date;
    const { job_satisfaction, current_salary, tech_role } =
      getMostRecentResponse(row.responses);
    return {
      job_satisfaction,
      current_salary,
      tech_role,
      graduationDate,
      firstJobDate,
    };
  });
  console.log("CHartdata", data);
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "row" }}>
            <input
              type="text"
              onChange={(e) => filterDataByName(e.target.value)}
            />
            <button onClick={() => filterDataByCohort(1)}>cohort 1</button>
            <button onClick={() => filterDataByCohort(2)}>cohort 2</button>
            <button onClick={() => filterDataByCohort(3)}>cohort 3</button>
            <button onClick={() => filterDataByCohort(4)}>cohort 4</button>
            <button onClick={() => filterDataByCohort(5)}>cohort 5</button>
            <button onClick={() => filterDataByCohort(6)}>cohort 6</button>
            <button onClick={() => filterDataByCohort(7)}>cohort 7</button>
            <button onClick={() => resetFilter()}>All cohorts</button>
            <CSVLink
              data={convertJsonToCsv(data)}
              filename={"graduate_responses.csv"}
            >
              Download CSV
            </CSVLink>
          </Paper>
        </Grid>
        {/* selection */}
        <Grid item xs={4}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 380,
            }}
          >
            <JobSatisfaction satisfactionIndex={ChartData} />
          </Paper>
        </Grid>

        {/* pie chart */}

        <Grid item xs={8}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 380,
            }}
          >
            <SuccessTime times={ChartData} />
          </Paper>
        </Grid>

        <Grid item xs={8}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 380,
            }}
          >
            <SalaryGraph salaryInfo={ChartData} />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 380,
            }}
          >
            <Piechart employmentStatus={ChartData} />
          </Paper>
        </Grid>
        {/* all graduates */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <GradTable data={data} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
