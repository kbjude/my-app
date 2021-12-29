import React from 'react';
import reactDom from 'react-dom';

function Current() {
  const styles = {
    color: "orange",
    backgroundColor: "grey"
  }
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay 
  
    if (hours < 12) {
      timeOfDay = "Morning"
      styles.color = "green"
    }else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon"
      styles.color = "green"
    }else {
      timeOfDay = "Night"
      styles.color = "purple"
    }

    return (
      <h1 style={styles}> Good {timeOfDay}!</h1>
    )
  }
  export default Current