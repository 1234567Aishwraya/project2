import React, { useState } from "react";
import {
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Box,
  TextField,
  InputAdornment,
} from "@mui/material";
import { Search, People, LocationOn, Close, Remove, Add } from "@mui/icons-material";

const SearchBar = () => {
  // Local States
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState({ adults: 1, children: 0, rooms: 1 });

  // Dropdown State
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // Open/Close Dropdown
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  // Increment/Decrement Handler
  const handleChange = (type, value) => {
    setGuests((prev) => ({
      ...prev,
      [type]: Math.max(value, type === "adults" || type === "rooms" ? 1 : 0),
    }));
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        background: "white",
        padding: 1.5,
        borderRadius: 3,
        boxShadow: 3,
        maxWidth: "900px",
        margin: "auto",
        border: "3px solid white",
        flexWrap: "wrap",
      }}
    >
      {/* Destination Input */}
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Where to go?"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LocationOn />
            </InputAdornment>
          ),
          endAdornment: destination && (
            <InputAdornment position="end">
              <IconButton onClick={() => setDestination("")}> <Close /> </IconButton>
            </InputAdornment>
          ),
        }}
      />

      {/* Check-in Date */}
      <TextField type="date" label="Check-in" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} InputLabelProps={{ shrink: true }} />

      {/* Check-out Date */}
      <TextField type="date" label="Check-out" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} InputLabelProps={{ shrink: true }} />

      {/* Guests & Rooms Dropdown */}
      <Box>
        <Button
          onClick={handleClick}
          variant="outlined"
          startIcon={<People />}
          sx={{
            padding: "10px 15px",
            borderRadius: "8px",
            fontWeight: 600,
            textTransform: "none",
            minWidth: "200px",
            maxWidth: "280px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            backgroundColor: "#FFFFFF",
            ":hover": { backgroundColor: "#FFFFFF" },
          }}
        >
          {`${guests.adults} Adults, ${guests.children} Children, ${guests.rooms} Room`}
        </Button>

        {/* Dropdown Menu */}
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose} keepMounted sx={{ mt: 1 }}>
          {["adults", "children", "rooms"].map((type) => (
            <MenuItem
              key={type}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "250px",
                padding: "10px 15px",
              }}
            >
              <Typography sx={{ textTransform: "capitalize", fontWeight: 500 }}>
                {type === "adults" ? "Adults" : type === "children" ? "Children" : "Rooms"}
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {/* Decrement Button */}
                <IconButton
                  onClick={() => handleChange(type, guests[type] - 1)}
                  disabled={type === "adults" || type === "rooms" ? guests[type] <= 1 : guests[type] <= 0}
                  sx={{
                    border: "2px solid gray",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                  }}
                >
                  <Remove />
                </IconButton>

                {/* Count Display */}
                <Typography sx={{ minWidth: "30px", textAlign: "center", fontWeight: "bold" }}>
                  {guests[type]}
                </Typography>

                {/* Increment Button */}
                <IconButton
                  onClick={() => handleChange(type, guests[type] + 1)}
                  sx={{
                    border: "2px solid gray",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                  }}
                >
                  <Add />
                </IconButton>
              </Box>
            </MenuItem>
          ))}

          {/* Apply Button */}
          <MenuItem>
            <Button
              fullWidth
              onClick={handleClose}
              variant="contained"
              sx={{
                backgroundColor: "#0071c2",
                fontWeight: "bold",
                padding: "10px",
              }}
            >
              Apply
            </Button>
          </MenuItem>
        </Menu>
      </Box>

      {/* Search Button */}
      <Button
        variant="contained"
        color="primary"
        sx={{
          width: { xs: "100%", sm: "auto" },
          fontSize: "16px",
          backgroundColor: "#6a2e1f",
          ":hover": { backgroundColor: "#f4a261" },
        }}
      >
        <Search /> Search
      </Button>
    </Box>
  );
};

export default SearchBar;
