import React, { useState } from "react";
import { Tabs, Tab, Container, Paper, Typography } from "@mui/material";

import { School, FilterList, List, Map as MapIcon } from "@mui/icons-material";
import Map from "./components/Map/map";
import { Controller } from "./components/controller";
import DataTable from "./components/data-table";

const columns = [

  {
    field: "borough",
    headerName: "Borough",
    flex: 1,
  },

  {
    field: "schoolname", headerName: "School Name", flex:1
  },

  {
    field: "travel_time",
    headerName: "Travel time (In Minutes)",
    flex: 1,
  
  },
  
  {
    field: "address",
    headerName: "Address",
    flex: 1,
  },
 

  { field: "postcode", headerName: "Post Code", flex: 1 },
];

const data = [
  {
    id: 1,
    borough: "Westminster",
    name: "John Doe School",
    postcode: "W1A 1AA",
  },
  {
    id: 2,
    borough: "Kensington and Chelsea",
    name: "Jane Smith School",
    postcode: "SW1A 2AA",
  },
  {
    id: 3,
    borough: "Camden",
    name: "Michael Johnson School",
    postcode: "NW1 1AA",
  },
  {
    id: 4,
    borough: "Islington",
    name: "Sarah Wilson School",
    postcode: "N1 1AA",
  },
  {
    id: 5,
    borough: "Tower Hamlets",
    name: "David Taylor School",
    postcode: "E1 0AA",
  },
];

const App = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue);
  };

  const [subTabValue, setSubTabValue] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChangeSubTab = (event, newValue) => {
    setSubTabValue(newValue);
  };

  return (
    <Container>
      <Typography variant="h4" align="center" mt={3} mb={3}>
        In2Scope
      </Typography>
      <Paper square>
        <Tabs
          value={tabValue}
          onChange={handleChangeTab}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="School Checker" icon={<School />} />
          {/* <Tab label="Data Filter" icon={<FilterList />}  /> */}
        </Tabs>
      </Paper>
      {tabValue === 0 && (
        <div>
          <Controller
            setData={setData}
            loading={loading}
            setLoading={setLoading}
          />

          <Paper square style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 10px 0 0"


          }}>

            <Tabs
              value={subTabValue}
              onChange={handleChangeSubTab}
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab label="Map View" icon={<MapIcon />} />
              <Tab label="List View" icon={<List />} />
            </Tabs>
            <Typography variant="h6" color="primary">
              {data.length} schools found
            </Typography>
          </Paper>
          {subTabValue === 0 && <Map data={data} />}

          {subTabValue === 1 && (
            <div>
              {/* List View */}
              <DataTable columns={columns} data={data} getRowId={(row)=> row.id} />
            </div>
          )}
        </div>
      )}
      {tabValue === 1 && (
        <div>
          <Controller filterView />
        </div>
      )}
    </Container>
  );
};

export default App;
