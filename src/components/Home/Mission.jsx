import React, { useState, useEffect } from "react";
import "./_mission.scss";

const Mission = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data = [
    {
      heading: "Core Values",
      image: "https://vetpharma.com/wp-content/uploads/2021/04/values2.jpg",
      mission: "Focus on quality, fare business practices corporate culture global outreach, economy with quality. ",
    },
    {
      heading: "Missions",
      image: "https://vetpharma.com/wp-content/uploads/2021/04/mision2.jpg",
      mission: "Providing solution through our high quality future tested product range & Services for animal health. ",
    },
    {
      heading: "Culture",
      image: "https://vetpharma.com/wp-content/uploads/2021/04/vision2.jpg",
      mission: "Sharia compliance, Merit, Discipline integrity, Flexibility ",
    },
  ];

  const [currentDataIndex, setCurrentDataIndex] = useState(0);
  const [currentData, setCurrentData] = useState(data[currentDataIndex]);

  useEffect(() => {
    // Function to update the data and image after 5 seconds
    const intervalId = setInterval(() => {
      setCurrentDataIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000);

    return () => clearInterval(intervalId); // Clear the interval on unmount
  }, [data.length]);

  useEffect(() => {
    setCurrentData(data[currentDataIndex]);
  }, [currentDataIndex, data]);

  const containerStyle = {
    backgroundImage: `linear-gradient(45deg, rgba(0,102,161,1) 0%,rgba(110,37,133,0.1) 100%), url(${currentData.image})`,
  };

  return (
    <div className="image-with-text" style={containerStyle}>
      <h1>{currentData.heading}</h1>
      <p>{currentData.mission}</p>
    </div>
  );
};

export default Mission;
