import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { getMostRecentResponse } from "../../helperFunctions/getrecentresponse";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { Box } from "@mui/system";
import { Collapse, Typography } from "@mui/material";

export default function GradTable({ gradData }) {
  const [open, setOpen] = useState(false);
  const latestResponse = getMostRecentResponse(gradData.responses);

  return (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {gradData.graduate_name}
        </TableCell>
        <TableCell align="right">{gradData.cohort}</TableCell>
        <TableCell align="right">{latestResponse.current_employer}</TableCell>
        <TableCell align="right">{latestResponse.current_salary}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Career information
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell> </TableCell>
                    <TableCell> </TableCell>
                    <TableCell align="right"> </TableCell>
                    <TableCell align="right"> </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <p> </p>
                  <p> </p>
                  <p> </p>
                  <p> </p>
                  <p> </p>
                  <p> </p>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
