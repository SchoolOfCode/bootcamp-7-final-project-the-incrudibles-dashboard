import * as React from "react";
import { Box, ThemeProvider, createTheme } from "@mui/system";
import { getMostRecentResponse } from "../../helperFunctions/getrecentresponse";

const theme = createTheme({
  palette: {
    background: {
      paper: "#fff",
    },
    text: {
      primary: "#173A5E",
      secondary: "#46505A",
    },
    action: {
      active: "#001E3C",
    },
    success: {
      dark: "#009688",
    },
  },
});

export default function SalaryCompare({ gradData }) {
  const currentSalary = getMostRecentResponse(
    gradData.responses
  ).current_salary;

  const formattedSalary = currentSalary
    ? `£${String(currentSalary).slice(0, 2)},${String(currentSalary).slice(2)}`
    : "Unemployed";

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: "background.paper",
          boxShadow: 1,
          borderRadius: 1,
          p: 2,
          minWidth: 200,
        }}
      >
        <Box sx={{ color: "text.secondary" }}>Current salary</Box>
        <Box sx={{ color: "text.primary", fontSize: 34, fontWeight: "medium" }}>
          {formattedSalary}
        </Box>
        <Box
          sx={{
            color: "success.dark",
            display: "inline",
            fontWeight: "medium",
            mx: 0.5,
          }}
        >
          +18.77%
        </Box>
        <Box sx={{ color: "text.secondary", display: "inline", fontSize: 12 }}>
          vs. pre-bootcamp
        </Box>
      </Box>
    </ThemeProvider>
  );
}
