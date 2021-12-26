import React from 'react';
import reactDom from 'react-dom';

function Current() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay 
  
    if (hours < 12) {
      this.timeOfDay = "Morning"
    }else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon"
    }else {
      timeOfDay = "Night"
    }

    const styles = {
      color: "orange",
      backgroundColor: "grey"
    }
    return (
      <h1 style={styles}> Good {timeOfDay}!</h1>
    )
  }
  export default Current