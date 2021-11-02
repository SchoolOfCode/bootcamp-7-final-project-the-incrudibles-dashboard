import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useLoginContext } from "../../hooks/useLogin";
import Homepage from "../../pages/Homepage";
import AdminPage from "../../pages/AdminPage";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import LogoutIcon from "@mui/icons-material/Logout";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useDataContext } from "../../hooks/useDataContext";
import { useResponsesData } from "../../hooks/useSWR";
import FilterListIcon from '@mui/icons-material/FilterList';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';

import GroupsIcon from '@mui/icons-material/Groups';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { CSVLink } from "react-csv";

import DownloadIcon from '@mui/icons-material/Download';

import convertJsonToCsv from "../../helperFunctions/jsontocsv";

const drawerWidth = 240;
//

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

export default function Dashboard() {
  const { handleLogout } = useLoginContext();
  const { data, filterDataByCohort, resetFilter, filterDataByName } = useDataContext();
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
    setOpenList(false)
  };

  const [openList, setOpenList] = React.useState(false);

  const handleClick = () => {
    if (open) { setOpenList(!openList); }
  };

  return (
    <Router>
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar position="absolute" open={open}>
            <Toolbar
              sx={{
                pr: "24px", // keep right padding when drawer closed
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                  marginRight: "36px",
                  ...(open && { display: "none" }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                component="h1"
                variant="h5"
                color="inherit"
                alignItems="center"
                sx={{ flexGrow: 1, marginLeft: "300px" }}
              >
                School of Code Alumni Reporting Dashboard
              </Typography>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  <ListItem button edge="end">
                    <ListItemIcon>
                      <DashboardIcon sx={{ color: "white" }} />
                    </ListItemIcon>
                    <ListItemText primary="Graduates" />
                  </ListItem>
                </Link>
                <Link
                  to="/administration"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <ListItem button>
                    <ListItemIcon>
                      <AdminPanelSettingsIcon sx={{ color: "white" }} />
                    </ListItemIcon>
                    <ListItemText primary="Partners" />
                  </ListItem>
                </Link>
                <ListItem button onClick={() => handleLogout()}>
                  <ListItemIcon>
                    <LogoutIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </ListItem>
              </div>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open}>
            <Toolbar
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                px: [1],
              }}
            >
              <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
              </IconButton>
            </Toolbar>
            <Divider />
            <List
              sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
              component="nav"
              aria-labelledby="nested-list-subheader"

            >


              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <FilterListIcon />
                </ListItemIcon>
                <ListItemText primary="Cohorts" />
                {openList ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openList} timeout="auto" unmountOnExit>

                <List component="div" disablePadding>
                  <ListItemButton onClick={() => filterDataByCohort(1)
                  } sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <GroupsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Cohort 1" />
                  </ListItemButton>
                </List>

                <List component="div" disablePadding>
                  <ListItemButton onClick={() => filterDataByCohort(2)
                  } sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <GroupsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Cohort 2" />
                  </ListItemButton>
                </List>

                <List component="div" disablePadding>
                  <ListItemButton onClick={() => filterDataByCohort(3)
                  } sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <GroupsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Cohort 3" />
                  </ListItemButton>
                </List>

                <List component="div" disablePadding>
                  <ListItemButton onClick={() => filterDataByCohort(4)
                  } sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <GroupsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Cohort 4" />
                  </ListItemButton>
                </List>
                <List component="div" disablePadding>
                  <ListItemButton onClick={() => filterDataByCohort(5)
                  } sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <GroupsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Cohort 5" />
                  </ListItemButton>
                </List>
                <List component="div" disablePadding>
                  <ListItemButton onClick={() => filterDataByCohort(6)
                  } sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <GroupsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Cohort 6" />
                  </ListItemButton>
                </List>
                <List component="div" disablePadding>
                  <ListItemButton onClick={() => filterDataByCohort(7)
                  } sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <GroupsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Cohort 7" />
                  </ListItemButton>
                </List>
                <List component="div" disablePadding>
                  <ListItemButton onClick={() => resetFilter()
                  } sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <GroupsIcon />
                    </ListItemIcon>
                    <ListItemText primary="All Cohorts" />
                  </ListItemButton>
                </List>
              </Collapse>

              <Divider />

              <ListItemButton >



                <ListItemIcon>
                  <DownloadIcon />
                </ListItemIcon>
                <CSVLink
                  data={convertJsonToCsv(data)}
                  filename={"graduate_responses.csv"}
                >
                  Export
                </CSVLink>

              </ListItemButton>



            </List>


          </Drawer>
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}
          >
            <Toolbar />
            <Switch>
              {/* <Route exact path="/home"> */}
              <Route exact path="/">
                <Homepage />
              </Route>

              {/* </Route> */}
              <Route path="/integrations">{/* <Blogs /> */}</Route>
              <Route path="/reports">{/* <Piechart /> */}</Route>
              <Route path="/administration">
                <AdminPage />
              </Route>
            </Switch>
          </Box>
        </Box>
      </ThemeProvider>
    </Router>
  );
}
