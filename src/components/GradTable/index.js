import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Paper, Typography } from "@mui/material";
import GradTableRow from "../GradTableRow";

export default function GradTable({ data }) {
  return (
    <Paper>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>
              <Typography
                sx={{ typography: "subtitle2", fontSize: 16, fontWeight: 800 }}
                component="div"
              >
                Name
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                sx={{ typography: "subtitle2", fontSize: 16, fontWeight: 800 }}
                component="div"
              >
                Cohort
              </Typography>
            </TableCell>
            <TableCell>
              <Typography
                sx={{ typography: "subtitle2", fontSize: 16, fontWeight: 800 }}
                component="div"
              >
                Current Employer
              </Typography>
            </TableCell>
            <TableCell align="left">
              <Typography
                sx={{ typography: "subtitle2", fontSize: 16, fontWeight: 800 }}
                component="div"
              >
                Current Role
              </Typography>
            </TableCell>
            <TableCell align="center">
              <Typography
                sx={{ typography: "subtitle2", fontSize: 16, fontWeight: 800 }}
                component="div"
              >
                Job Satisfaction
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography
                sx={{ typography: "subtitle2", fontSize: 16, fontWeight: 800 }}
                component="div"
              >
                Current Salary (£)
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <GradTableRow key={row.id} gradData={row} />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
