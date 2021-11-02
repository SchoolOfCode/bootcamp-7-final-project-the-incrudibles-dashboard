import * as React from "react";
import { Box } from "@mui/system";
import { getMostRecentResponse } from "../../helperFunctions/getrecentresponse";
import Image1 from "../../images/1.png";
import Image2 from "../../images/2.png";
import Image3 from "../../images/3.png";
import Image4 from "../../images/4.png";
import Image5 from "../../images/5.png";

export default function GradJobSatisfaction({ gradData }) {
  const currentSatisfaction = getMostRecentResponse(
    gradData.responses
  ).job_satisfaction;

  function HappinessIndicator({ score }) {
    switch (score) {
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
        <HappinessIndicator score={currentSatisfaction} />
      </Box>
    </Box>
  );
}
