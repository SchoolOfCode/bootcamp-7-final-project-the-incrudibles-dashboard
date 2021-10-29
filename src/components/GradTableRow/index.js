import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { getMostRecentResponse } from "../../helperFunctions/getrecentresponse";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { Collapse } from "@mui/material";
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
          {gradData.graduate_name}
        </TableCell>
        <TableCell align="left">{gradData.cohort}</TableCell>
        <TableCell align="left">{latestResponse.current_employer}</TableCell>
        <TableCell align="right">{latestResponse.current_salary}</TableCell>
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
