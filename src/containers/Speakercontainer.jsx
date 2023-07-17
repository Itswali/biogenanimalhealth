import React, { useState, useEffect } from 'react';
import Speaker from '../components/Home/Speaker';

const speakers = [
  {
    name: 'John Doe',
    position: 'CEO',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRutjbY4gp6c3pqZ_70f1FRAbFLoFQ-_s6sA&usqp=CAU',
  },
  {
    name: 'Jane Smith',
    position: 'CTO',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgW28WHdmtA53Tc4jbDqzhllR58B412wi9Aw&usqp=CAU',
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
