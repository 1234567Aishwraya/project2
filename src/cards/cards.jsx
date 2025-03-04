import React from "react";
import { Card } from "antd";
import { Button } from "antd";
import cardData from "./cards";  
import "./cards.css";

const HotelCards = () => {
  return (
    <>
      <h2 className="featured-card">Luxuary Hotels</h2>
      <div className="section-container">
        {cardData.map((card) => (
          <Card key={card.id} className="card">
            <img src={card.image} alt={card.title} className="img-container" />
            <h3>{card.title}</h3>
            <p>{card.location}</p>
            <div className="price-booking">
              <p className="price">₹{card.price}</p>
              <Button className="book-button" > Book Now</Button> 
            </div>
            
          </Card>
        ))}
      </div>
    </>
  );
};

export default HotelCards; 
