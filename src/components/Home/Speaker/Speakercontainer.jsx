import React, { useState, useEffect } from 'react';
import Speaker from './Speaker';

const speakers = [
  {
    name: 'Khawaja Nouman Ajmal',
    position: 'C.E.O Apex Biotical Solution',
    quote: 'As a Dedicated client based enterprise, Apex Biotical Solution emphasis on the creation of pioneering worth to accomplish sustainable profit growth of the Livestock and poultry farmers. Needs brilliant individuals who can see into the future and bring about changes in dairy and poultry sector. Apex Biotical solution thanks each of our customer, employee, poultry and dairy farmers for your commitment, partnership and persistent support throughout the year.',
    image: 'http://absvet.org/images/resource/team-1.png',
  },
  {
    name: 'Mr. Jalil ur Rehman',
    position: 'Managing Director Apex Biotical Solution',
    quote: 'At Apex, we envision to make sustainable, safe and profitable livestock and poultry business a reality. “Try try again” is the key to success. You never lose until you accept defeat. If you want to be strong, successful and want to move forward as compared to others then keep trying to change for betterment and adopt new efforts. Those organization are successful who are sustainable and inplace innovative ideas related to poultry and livestock medicines and modern farming. ',
    image: 'http://absvet.org/images/resource/team-2.png',
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
