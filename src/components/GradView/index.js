import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Grid, Paper, TableBody, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { getMostRecentResponse } from "../../helperFunctions/getrecentresponse";
import SalaryOverTime from "../SalaryOverTime";
import SalaryCompare from "../SalaryCompare";
import GradJobSatisfaction from "../GradJobSatisfaction";

export default function GradView({ gradData }) {
  const latestResponse = getMostRecentResponse(gradData.responses);

  return (
    <Box sx={{ margin: 1, height: "65vh" }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "row" }}>
            <Typography
              gutterBottom
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              {latestResponse.current_employer
                ? `${
                    gradData.graduate_name.split(" ")[0]
                  } has been working as a ${
                    latestResponse.current_position
                  } at ${latestResponse.current_employer} for ${
                    latestResponse.length_of_service
                  }`
                : `${
                    gradData.graduate_name.split(" ")[0]
                  } is currently not working in the technology sector`}
            </Typography>
          </Paper>
        </Grid>
        {/* selection */}
        <Grid item xs={12} md={3} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: "content",
            }}
          >
            <Table size="small" aria-label="purchases">
              <TableHead>
                <TableCell align="center">
                  <Typography gutterBottom component="div">
                    Survey responses
                  </Typography>
                </TableCell>
              </TableHead>
              <TableBody>
                {gradData.responses.map((response) => (
                  <TableRow>
                    <TableCell align="center">
                      {response.timestamp.slice(0, 10)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
        {/* job satisfaction */}
        <Grid item xs={12} md={3} lg={3}>
          <div
            sx=
            {{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
            >
            <SalaryCompare gradData={gradData} />
            <GradJobSatisfaction gradData={gradData} />
          </div>
        </Grid>
        {/* salary over time */}
        <Grid item xs={12} md={6} lg={6}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 360,
            }}
          >
            <SalaryOverTime gradData={gradData} />
          </Paper>
        </Grid>
        {/* all graduates */}
        <Grid item xs={12}>
          <Paper
            sx={{ p: 2, display: "flex", flexDirection: "column" }}
          ></Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
