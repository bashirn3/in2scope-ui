import React, { useState } from "react";
import { CSVLink } from "react-csv";
import {
  Tabs,
  Tab,
  Container,
  Paper,
  Typography,
  Button,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  School,
  List,
  Map as MapIcon,
  DownloadSharp,
} from "@mui/icons-material";
import Map from "../components/Map/map";
import { Controller } from "../components/controller";
import DataTable from "../components/data-table";

type TableColumns = {field: string, headerName: string, flex?: number}[]

const columns : TableColumns = [
  { field: "borough", headerName: "Borough", flex: 1 },
  { field: "schoolname", headerName: "School Name", flex: 1 },
  { field: "travel_time", headerName: "Travel time (In Minutes)", flex: 1 },
  { field: "address", headerName: "Address", flex: 1 },
  { field: "postcode", headerName: "Post Code", flex: 1 },
];

const Main = () => {
  const [tabValue, setTabValue] = useState<number>(0);
  const [subTabValue, setSubTabValue] = useState<number>(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChangeTab = (event, newValue): void => {
    setTabValue(newValue);
  };

  const handleChangeSubTab = (event, newValue): void => {
    setSubTabValue(newValue);
  };

  const dataToDownload = cleanData(data);

  return (
    <Container>
      <Typography variant="h4" align="center" mt={3} mb={3}>
        Eduscope
      </Typography>
      <Paper square>
        <Tabs
          value={tabValue}
          onChange={handleChangeTab}
          indicatorColor="primary"
          textColor="primary"
          variant={isSmallScreen ? "scrollable" : "fullWidth"}
          scrollButtons={isSmallScreen ? "auto" : "off" as any}
        >
          <Tab label="School Checker" icon={<School />} />
          {/* Add more tabs here if needed */}
        </Tabs>
      </Paper>
      {tabValue === 0 && (
        <div>
          <Controller
            setData={setData}
            loading={loading}
            setLoading={setLoading}
            isSmallScreen={isSmallScreen}
          />
          <Paper
            square
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 10px 0 0",
              flexDirection: isSmallScreen ? "column" : "row",
            }}
          >
            <Tabs
              value={subTabValue}
              onChange={handleChangeSubTab}
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab label="Map View" icon={<MapIcon />} />
              <Tab label="List View" icon={<List />} />
            </Tabs>
            <Grid
              container
              spacing={2}
              alignItems="center"
              style={{ width: isSmallScreen ? "100%" : "auto", margin: 0 }}
            >
              <div style={{display: "flex", justifyContent: "center", margin: "10px", width:"100%"}}>
                <Typography
                  variant={isSmallScreen ? "caption" : "h6"}
                  color="primary"
                  align={isSmallScreen ? "left" : "left"}
                >
                  {data.length} school(s) found
                </Typography>
              </div>
              {data?.length > 0 && (
                <div style={{ marginBottom: "20px", display: "flex", justifyContent: "center", width: "100%" }}>
                  <CSVLink data={dataToDownload} filename={"schools-data.xlsx"}>
                    <Button
                      variant="contained"
                      endIcon={<DownloadSharp />}
                      disabled={data?.length === 0}
                      fullWidth={isSmallScreen}
                    >
                      Export
                    </Button>
                  </CSVLink>
                </div>
              )}
            </Grid>
          </Paper>
          {subTabValue === 0 && <Map data={data} />}
          {subTabValue === 1 && (
            <DataTable
              columns={columns}
              data={data}
              getRowId={(row) => row.id}
            />
          )}
        </div>
      )}
    </Container>
  );
};

export default Main;

function cleanData(data) {
  return data.map((obj) => {
    const { id, latitude, longitude, ...rest } = obj;
    return rest;
  });
}
