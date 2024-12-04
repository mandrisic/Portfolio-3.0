import React, { useState, useEffect } from 'react';
import events from './events.js';

const Experience = () => {
  const [activeDot, setActiveDot] = useState(null);

  useEffect(() => {
    if (activeDot !== null) {
      const timer = setTimeout(() => {
        setActiveDot(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [activeDot]);

  const handleDotClick = (id) => {
    setActiveDot(activeDot === id ? null : id);
  };

  const handleBackgroundClick = (e) => {
    if (!e.target.closest('.dot')) {
      setActiveDot(null);
    }
  };

  return (
    <div className='experience' id='experience' onClick={handleBackgroundClick}>
      <h1>Experience</h1>
      <div className="dots__container">
      {events.map((event) => (
          <div
            key={event.id}
            id={`dot-${event.id}`}
            className={`dot ${activeDot === event.id ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              handleDotClick(event.id);
            }}
          >
            <div className="dot__text">
              <strong>{event.date}</strong>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
