import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { getMostRecentResponse } from "../../helperFunctions/getrecentresponse";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { Collapse, Typography } from "@mui/material";
import GradView from "../GradView";

export default function GradTable({ gradData }) {
  const [open, setOpen] = useState(false);
  const latestResponse = getMostRecentResponse(gradData.responses);

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
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
          <Typography>{gradData.graduate_name}</Typography>
        </TableCell>
        <TableCell align="left">
          <Typography>{gradData.cohort}</Typography>
        </TableCell>
        <TableCell align="left">
          <Typography> {latestResponse.current_employer}</Typography>
        </TableCell>
        <TableCell align="right">
          <Typography> {latestResponse.current_salary}</Typography>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <GradView gradData={gradData} />
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
