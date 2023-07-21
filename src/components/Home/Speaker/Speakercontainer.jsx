import React, { useState, useEffect } from 'react';
import Speaker from './Speaker';

const speakers = [
  {
    name: 'Name of Speaker 1',
    position: 'Position of speaker 1',
    quote: 'A quote or message by the author about the company or its mission that will be displayed in this area',
    image: 'https://www.shutterstock.com/image-vector/business-man-icon-trendy-flat-260nw-1041223936.jpg',
  },
  {
    name: 'Name of Sepeaker 2',
    position: 'Posotionn of speaker 2',
    quote: 'A quote or message by the author about the company or its mission that will be displayed in this area',
    image: 'https://www.shutterstock.com/image-vector/business-man-icon-trendy-flat-260nw-1041223936.jpg',
  },
  // Add more speakers as needed
];


const SpeakerContainer = () => {
  const [currentSpeakerIndex, setCurrentSpeakerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpeakerIndex((prevIndex) =>
        prevIndex === speakers.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <Speaker
        name={speakers[currentSpeakerIndex].name}
        position={speakers[currentSpeakerIndex].position}
        quote={speakers[currentSpeakerIndex].quote}
        image={speakers[currentSpeakerIndex].image}
      />
    </div>
  );
};

export default SpeakerContainer;
