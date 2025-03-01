import React from 'react';
import { Card } from 'antd';

import { cardData } from './card';
import './card.css';


const Section = () => (
  <>
   <h2 className='featured-card'>Featured Events</h2>
  <div className="section-container">
    {cardData.map((card) => (
      <Card key={card.id} className="card">
        <p><img src={card.image} alt={card.title} className='img-container' /></p>
        <h3>{card.title}</h3>
        <p>{card.description}</p>
      </Card>
    ))}
  </div>
  
  </>
);

export default Section;