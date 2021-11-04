import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Piechart from "../../components/Piechart";
import { useDataContext } from "../../hooks/useDataContext";
import GradTable from "../../components/GradTable";
import JobSatisfaction from "../../components/JobSatisfaction";
import { getMostRecentResponse } from "../../helperFunctions/getrecentresponse";
import SalaryGraph from "../../components/SalaryGraph";
import SuccessTime from "../../components/SuccessTime";
import TechStack from "../../components/TechStack";

export default function Homepage() {
  const { data } = useDataContext();
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

  function createTechStackArray(dataContext) {
    let array = [];
    dataContext.forEach((response) =>
      array.push(...response.current_tech_stack)
    );
    return array;
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <TechStack data={createTechStackArray(data)} />
      <Grid container spacing={3}>
        <Grid item xs={12}></Grid>
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
