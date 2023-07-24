import React, { useState, useEffect } from 'react';
import Speaker from './Speaker';

const speakers = [
  {
    quote: 'The Biogen pharma, established in 2008, offers an exemplary range of pharmaceutical products in the domestic market which have made the company a bulwark in the  industry and in the segments in which it enjoys good repute.',
    quote2: 'We continue to work seamlessly to ensure that the needs of our customers are fully met and aim to expand our range to cover the widest spectrum possible in the market. We offered unparalleled quality that meets the highest international standards. This is reflected in our growth over the years which allowed us to emerge as a competitive force in Pakistan at the onset of the 21st century and our vision for the next decade is even more ambitious. All of this is the result of the excellent relations that we have developed with our clients, our suppliers, our employees and our stakeholders.',
    quote3: 'At Biogen pharma, we will continue to push forward, to break new boundaries and to seize emerging opportunities in the research, design and implementation of human healthcare solutions. Our dream is underpinned by our commitment to quality and our desire to serve customers to the very best of our ability.',
  },
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
    <div className="speaker-container">
      <h1>CEO Message</h1>
      <div className="speaker-message">
        <Speaker quote={speakers[currentSpeakerIndex].quote} />
        <Speaker quote={speakers[currentSpeakerIndex].quote2} />
        <Speaker quote={speakers[currentSpeakerIndex].quote3} />
      </div>
    </div>
  );
};

export default SpeakerContainer;
