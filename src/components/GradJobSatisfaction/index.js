import * as React from "react";
import { Box } from "@mui/system";
import { getMostRecentResponse } from "../../helperFunctions/getrecentresponse";
import Image1 from "../../images/number1.jpg"
import Image2 from "../../images/number2.jpg";
import Image3 from "../../images/number3.jpg";
import Image4 from "../../images/number4.jpg";
import Image5 from "../../images/number5.jpg";
import Image0 from "../../images/0.png";

export default function GradJobSatisfaction({ gradData }) {
  const currentSatisfaction = getMostRecentResponse(
    gradData.responses
  ).job_satisfaction;

  const formattedSatisfaction = currentSatisfaction ? currentSatisfaction : 0;

  function HappinessIndicator({ score }) {
    switch (score) {
      case 0:
        return (
          <img
            src={Image0}
            alt="No data on job satisfaction"
            style={{
              marginTop: 8,
              maxWidth: "80%",
            }}
          />
        );
      case 1:
        return (
          <img
            src={Image1}
            alt="Very low job satisfaction"
            style={{
              marginTop: 8,
              maxWidth: "80%",
            }}
          />
        );
      case 2:
        return (
          <img
            src={Image2}
            alt="Low job satisfaction"
            style={{
              marginTop: 8,
              maxWidth: "80%",
            }}
          />
        );
      case 3:
        return (
          <img
            src={Image3}
            alt="Average job satisfaction"
            style={{
              marginTop: 8,
              maxWidth: "80%",
            }}
          />
        );
      case 4:
        return (
          <img
            src={Image4}
            alt="Good job satisfaction"
            style={{
              marginTop: 8,
              maxWidth: "80%",
            }}
          />
        );
      case 5:
        return (
          <img
            src={Image5}
            alt="Very Good job satisfaction"
            style={{
              marginTop: 8,
              maxWidth: "80%",
            }}
          />
        );
      default:
    }
  }

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        boxShadow: 1,
        borderRadius: 1,
        p: 2,
        mt: 2,
        minWidth: 200,
      }}
    >
      <Box sx={{ color: "text.secondary" }}>Current job satisfaction</Box>
      <Box sx={{ color: "text.secondary", display: "inline", fontSize: 12 }}>
        <div style={{ display: "flex", justifyContent: "center" }}><HappinessIndicator score={formattedSatisfaction} /></div>
      </Box>
    </Box>
  );
}
