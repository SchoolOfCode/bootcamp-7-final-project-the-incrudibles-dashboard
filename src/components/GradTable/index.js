import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Paper } from "@mui/material";
import GradTableRow from "../GradTableRow";

export default function GradTable({ data }) {
  return (
    <Paper>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell>Cohort</TableCell>
            <TableCell>Current Employer</TableCell>
            <TableCell align="right">Current Salary (£)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <GradTableRow key={row.gradute_name} gradData={row} />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
