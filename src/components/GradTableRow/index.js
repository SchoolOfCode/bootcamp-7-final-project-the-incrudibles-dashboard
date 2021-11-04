import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { getMostRecentResponse } from "../../helperFunctions/getrecentresponse";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { Collapse, Typography } from "@mui/material";
import GradView from "../GradView";
import image1 from "../../images/1.png";
import image2 from "../../images/2.png";
import image3 from "../../images/3.png";
import image4 from "../../images/4.png";
import image5 from "../../images/5.png";

export default function GradTable({ gradData }) {
  const [open, setOpen] = useState(false);
  const latestResponse = getMostRecentResponse(gradData.responses);

  const formattedSatisfaction = latestResponse.job_satisfaction
    ? latestResponse.job_satisfaction
    : 0;

  function Indicator({ colour, image, alt }) {
    return (
      <div
        style={{
          align: "center",
          display: "relative",
        }}
      >
        <div
          style={{
            height: "2em",
            width: "110px",
            backgroundColor: colour,
            borderRadius: "15px",
            position: "relative",
            left: "23%",
          }}
        >
          <img
            src={image}
            alt={alt}
            style={{
              width: "75px",
              position: "relative",
              top: "-83%",
            }}
          />
        </div>
      </div>
    );
  }

  function HappinessIndicator({ score }) {
    switch (score) {
      case 0:
        return <div style={{ width: "1px" }}></div>;
      case 1:
        return (
          <Indicator
            colour={"#ff4545"}
            image={image1}
            alt={"Very low job satisfaction"}
          />
        );
      case 2:
        return (
          <Indicator
            colour={"#ffa534"}
            image={image2}
            alt={"Low job satisfaction"}
          />
        );
      case 3:
        return (
          <Indicator
            colour={"#ffe234"}
            image={image3}
            alt={"Average satisfaction"}
          />
        );
      case 4:
        return (
          <Indicator
            colour={"#b7dd29"}
            image={image4}
            alt={"good satisfaction"}
          />
        );
      case 5:
        return (
          <Indicator
            colour={"#57e32c"}
            image={image5}
            alt={"Very good satisfaction"}
          />
        );
      default:
    }
  }

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
          <Typography sx={{ typography: "subtitle2", fontSize: 16 }}>
            {gradData.graduate_name}
          </Typography>
        </TableCell>
        <TableCell align="left">
          <Typography sx={{ typography: "subtitle2", fontSize: 16 }}>
            {gradData.cohort}
          </Typography>
        </TableCell>
        <TableCell align="left">
          <Typography sx={{ typography: "subtitle2", fontSize: 16 }}>
            {latestResponse.current_employer}
          </Typography>
        </TableCell>
        <TableCell align="left">
          <Typography sx={{ typography: "subtitle2", fontSize: 16 }}>
            {latestResponse.current_position}
          </Typography>
        </TableCell>
        <TableCell align="center" style={{ padding: 0 }}>
          <HappinessIndicator
            score={formattedSatisfaction}
          ></HappinessIndicator>
        </TableCell>
        <TableCell align="right">
          <Typography sx={{ typography: "subtitle2", fontSize: 16 }}>
            {latestResponse.current_salary
              ? `£${String(latestResponse.current_salary).slice(0, 2)},${String(
                  latestResponse.current_salary
                ).slice(2)}`
              : "No tech role"}
          </Typography>
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
