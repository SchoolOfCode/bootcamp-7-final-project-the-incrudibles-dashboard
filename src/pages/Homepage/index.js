import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { CSVLink } from "react-csv";
import convertJsonToCsv from "../../helperFunctions/jsontocsv";
import { useResponsesData } from "../../hooks/useDashboardData";

export default function Homepage() {
  const { response, isLoading } = useResponsesData();

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {!isLoading && (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <CSVLink
                data={convertJsonToCsv(response)}
                filename={"graduate_responses.csv"}
              >
                Download CSV
              </CSVLink>
            </Paper>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}
