import { useState } from "react";
import axios  from "axios";
import {
  Paper,
  Typography,
  Grid,
  TextField,
//   OutlinedInput,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";

import { Search, UploadFile } from "@mui/icons-material";

export const Controller = (props) => {
  const { filterView, setData, loading, setLoading } = props;

const [postCode, setPostCode] = useState('');
const [maxTravelTime, setMaxTravelTime] = useState('');
const [modeOfTransport, setModeOfTransport] = useState('driving'); // Default value


const handlePostCodeChange = (event) => setPostCode(event.target.value);
const handleMaxTravelTimeChange = (event) => setMaxTravelTime(event.target.value);
const handleModeOfTransportChange = (event) => setModeOfTransport(event.target.value);

const isValidForm = postCode.trim() !== '' && maxTravelTime.trim() !== '';

const handleSubmit = async () => {
    if (isValidForm) {
      // Construct the payload

      try {
        setLoading(true);
  
        // Specify the data to be sent in the request body
        const requestData = {
          max_travel_time: maxTravelTime,
          postcode:postCode,
          mode_of_transport: modeOfTransport
        };
  
        // Send a POST request to the specified URL
        const response = await axios.post('https://in2scope-api.onrender.com/find_schools', requestData);
  
        // Update state with the returned data
        setData(response.data.schools);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
  
      // Call your API here, passing formData
      // Example: apiService.submitFormData(formData);
    } else {
      // Handle form validation error
      alert('Please fill in all required fields.');
    }
  };









  return (
    <Paper elevation={3} style={{ padding: "20px", margin: "20px 0" }}>
      <Grid container spacing={2}>
        {filterView && (
          <Grid item xs={12}>
            <Button variant="contained" startIcon={<UploadFile />} loading={loading}>
              Upload File
            </Button>
          </Grid>
        )}

        <Grid item xs={6}>
          <TextField label="Post Code" fullWidth onChange={handlePostCodeChange} value={postCode} required/>
        </Grid>
        <Grid item xs={6}>
          <TextField  label="Max Travel Time"  type="number"fullWidth onChange={handleMaxTravelTimeChange} value={maxTravelTime} required/>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">Mode of Transport</Typography>
          <FormControl component="fieldset">
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
                label="Cycling"
              />
              <FormControlLabel
                value="transit"
                control={<Radio />}
                label="Public Transport"
              />
              <FormControlLabel value="driving" control={<Radio />} label="Car" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" startIcon={<Search />} onClick={handleSubmit}>
            {loading ? "Fetching..." : "Scope"}
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};
