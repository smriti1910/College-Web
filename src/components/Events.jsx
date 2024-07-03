import React, { useState, useEffect } from 'react';
import './Events.css';  // Import the CSS file for styling

const events = [
  {
    title: 'Tech Conference 2024',
    description: 'An annual tech conference with the latest in technology and innovation.',
    image: '/tech-conference.jpg'
  },
  {
    title: 'Art Exhibition',
    description: 'A display of the finest art from upcoming artists.',
    image: '/art-exhibition.jpg'
  },
  {
    title: 'Music Fest',
    description: 'A weekend filled with music from top bands and artists.',
    image: '/music-fest.jpg'
  },
  {
    title: 'Science Fair',
    description: 'A showcase of the latest scientific discoveries and projects by students.',
    image: '/science-fair.jpg'
  },
  {
    title: 'Sports Day',
    description: 'An exciting day of sports activities and competitions.',
    image: '/sports-day.jpg'
  }
];

const Events = () => {
  const [currentEvent, setCurrentEvent] = useState(events[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * events.length);
      setCurrentEvent(events[randomIndex]);
    }, 5000); // Switch event every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="events-container">
      <h1>Events</h1>
      <div className="event-card">
        <img src="src/assets/img/music-fest.jpg" alt={currentEvent.title} className="event-image" />
        <h2>{currentEvent.title}</h2>
        <p>{currentEvent.description}</p>
      </div>
    </div>
  );
};

export default Events;
