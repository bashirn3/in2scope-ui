import React, { useState } from "react";
import axios from "axios";
import {
  Paper,
  Typography,
  Grid,
  TextField,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  MenuItem,

} from "@mui/material";
import { Search, UploadFile } from "@mui/icons-material";
import { baseApi } from "../api/base-api";

const boroughs = [
  "Barking and Dagenham", "Barnet", "Bexley", "Brent", "Bromley",
  "Camden", "Croydon", "Ealing", "Enfield", "Greenwich", "Hackney",
  "Hammersmith and Fulham", "Haringey", "Harrow", "Havering",
  "Hillingdon", "Hounslow", "Islington", "Kensington and Chelsea",
  "Kingston upon Thames", "Lambeth", "Lewisham", "Merton", "Newham",
  "Redbridge", "Richmond upon Thames", "Southwark", "Sutton",
  "Tower Hamlets", "Waltham Forest", "Wandsworth", "Westminster",
];

export const Controller = (props) => {
  const { filterView, setData, loading, setLoading, isSmallScreen } = props;

  const [postCode, setPostCode] = useState("");
  const [maxTravelTime, setMaxTravelTime] = useState("");
  const [modeOfTransport, setModeOfTransport] = useState("driving");
  const [selectedBorough, setSelectedBorough] = useState("");

  const handlePostCodeChange = (event) => setPostCode(event.target.value);
  const handleMaxTravelTimeChange = (event) => setMaxTravelTime(event.target.value);
  const handleModeOfTransportChange = (event) => setModeOfTransport(event.target.value);
  const handleBoroughChange = (event) => setSelectedBorough(event.target.value);

  const isValidForm = postCode.trim() !== "" && maxTravelTime.trim() !== "";

  const handleSubmit = async () => {
    if (isValidForm) {
      try {
        setLoading(true);
        const requestData = {
          max_travel_time: maxTravelTime,
          postcode: postCode,
          mode_of_transport: modeOfTransport,
        };

        const response = await axios.post(
          `${baseApi}/find_schools?borough=${selectedBorough}`,
          
          requestData
        );

        setData(response.data.schools);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <Paper elevation={3} style={{ padding: "20px", margin: "20px 0" }}>
      <Grid container spacing={2}>
        {filterView && (
          <Grid item xs={12}>
            <Button
              variant="contained"
              startIcon={<UploadFile />}
              loading={loading}
              fullWidth
            >
              Upload File
            </Button>
          </Grid>
        )}

        <Grid item xs={12} sm={6}>
          <TextField
            value={selectedBorough}
            label="Borough"
            onChange={handleBoroughChange}
            fullWidth
            select
          >
            {boroughs.map((borough) => (
              <MenuItem key={borough} value={borough}>
                {borough}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="Max Travel Time(In Minutes)"
            type="number"
            fullWidth
            onChange={handleMaxTravelTimeChange}
            value={maxTravelTime}
            required
          />
        </Grid>


        {selectedBorough !== "" && (
          <Grid item xs={12} sm={6}>
            <TextField
              label="Post Code"
              fullWidth
              onChange={handlePostCodeChange}
              value={postCode}
              required
            />
          </Grid>
        )}


        <Grid item xs={12}>
          <Typography variant="subtitle1">Mode of Transport</Typography>
          <FormControl component="fieldset" fullWidth>
            <RadioGroup
              row
              aria-label="mode"
              name="mode"
              defaultValue={modeOfTransport}
              onChange={handleModeOfTransportChange}
              required 
            >
              <FormControlLabel
                value="bicycling"
                control={<Radio />}
                label={<Typography variant="caption">
                Cycling
              </Typography>}
              />
              <FormControlLabel
                value="transit"
                control={<Radio />}
                label={<Typography variant="caption">
                Public Transport 
              </Typography>}
              />
              <FormControlLabel
                value="driving"
                control={<Radio />}
                label={<Typography variant="caption">
                  Car
                </Typography>}
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            startIcon={<Search />}
            onClick={handleSubmit}
            fullWidth={isSmallScreen}
          >
            {loading ? "Fetching..." : "Scope"}
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};
