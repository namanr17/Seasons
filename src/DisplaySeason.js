import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach",
    iconName: "sun"
  },
  winter: {
    text: "Burr it's cold",
    iconName: "snowflake"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const DisplaySeason = props => {
  const season = getSeason(props.lat, new Date().getMonth());

  return (
    <div className={`season-display ${season}`}>
      <i
        className={`icon-left massive ${seasonConfig[season].iconName} icon`}
      />
      <h1>{seasonConfig[season].text}</h1>
      <i
        className={`icon-right massive ${seasonConfig[season].iconName} icon`}
      />
    </div>
  );
};

export default DisplaySeason;
