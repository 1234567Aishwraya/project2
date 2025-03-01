import React from "react";
import SearchBar from "./searchbar";
import backgroundImage from "../images/backimage.jpg"; //  Import Image


function Search() {
  return (
    
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`, //  Use Imported Image
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "white", fontWeight: "bold" }}>Search hotels in Hyderabad</h1>
        <p style={{ color: "white", fontSize: "18px" }}>
          Enter your dates to see the latest prices and deals for Hyderabad hotels
        </p>
        <SearchBar />
      </div>
    
  );
}

export default Search;
