import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import { Grid, Paper, TableBody, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { getMostRecentResponse } from "../../helperFunctions/getrecentresponse";
import SalaryOverTime from "../SalaryOverTime";
import SalaryCompare from "../SalaryCompare";
import GradJobSatisfaction from "../GradJobSatisfaction";
import ResponseRow from "../ResponseTableRow";

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
        <Grid xs={12} md={7}>
          <Grid xs={12}>
            <Grid xs={12} md={6}>
              <SalaryCompare gradData={gradData} />
            </Grid>
            <Grid xs={12} md={6}>
              <GradJobSatisfaction gradData={gradData} />
            </Grid>
          </Grid>
          <Grid xs={12}>
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
        </Grid>
        <Grid xs={12} md={5}>
          <Grid xs={12}>
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
                  <TableCell align="center"></TableCell>
                  <TableCell align="left">
                    <Typography gutterBottom component="div">
                      Survey responses
                    </Typography>
                  </TableCell>
                </TableHead>
                <TableBody>
                  {gradData.responses.map((response) => (
                    <ResponseRow responseData={response} />
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
          <Grid xs={12}></Grid>
        </Grid>
        {/* selection */}
        {/* <Grid item xs={12} md={3} lg={3}></Grid>
        {/* job satisfaction */}
        {/* <Grid item xs={12} md={3} lg={3}>
          <div
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          ></div>
        </Grid>
        {/* salary over time */}
        {/* <Grid item xs={12} md={6} lg={6}></Grid> */}
      </Grid>
    </Box>
  );
}
