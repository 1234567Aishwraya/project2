import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setDestination,
  setCheckIn,
  setCheckOut,
  setGuests,
} from "./store";
import {
  Box,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import { Search, People, LocationOn, Close } from "@mui/icons-material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const guestOptions = [
  "1 adult · 1 room",
  "2 adults · 0 children · 1 room",
  "2 adults · 2 children · 1 room",
];

const SearchBar = () => {
  const dispatch = useDispatch();
  const { destination, checkIn, checkOut, guests } = useSelector(
    (state) => state.search
  );

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        background: "white",
        padding: 1,
        borderRadius: 3,
        boxShadow: 3,
        maxWidth: "900px",
        margin: "auto",
        border: "3px solid orange",
      }}
    >
      {/* Destination Input */}
      <TextField
        fullWidth
        variant="outlined"
        value={destination}
        onChange={(e) => dispatch(setDestination(e.target.value))}
        
        InputProps={{
          startAdornment: <LocationOn />,
          endAdornment: destination && (
            <Close onClick={() => dispatch(setDestination(""))} style={{ cursor: "pointer" }} />
          ),
        }}
      />

      {/* Check-in Date Picker */}
      <TextField
  type="date"
  label="Check-in date"
  value={checkIn}
  onChange={(e) => dispatch(setCheckIn(e.target.value))}
/>

    <TextField
   type="date"
  label="Check-out date"
  value={checkOut}
  onChange={(e) => dispatch(setCheckOut(e.target.value))}
/>


      {/* Guests & Rooms Dropdown */}
      <TextField
        select
        fullWidth
        value={guests}
        onChange={(e) => dispatch(setGuests(e.target.value))}
      >
        {guestOptions.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>

      {/* Search Button */}
      <Button
        variant="contained"
        color="primary"
        sx={{
          height: "100%",
          fontSize: "16px",
          backgroundColor: "#0066ff",
          ":hover": { backgroundColor: "#0052cc" },
        }}
      >
        <Search /> Search
      </Button>
    </Box>
  );
};

export default SearchBar;
