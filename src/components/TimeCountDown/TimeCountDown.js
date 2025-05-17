// import React from 'react'
// const { useState, useEffect } = React;

// const TimeCountDown = (props) => {
//   const [countdownDate] = useState(new Date('5/23/2025').getTime());
//   const [state, setState] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });

//   useEffect(() => {
//     setInterval(() => setNewTime(), 1000);
//   }, []);

//   const setNewTime = () => {
//     if (countdownDate) {
//       const currentTime = new Date().getTime();

//       const distanceToDate = countdownDate - currentTime;

//       let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
//       let hours = Math.floor(
//         (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
//       );
//       let minutes = Math.floor(
//         (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
//       );
//       let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

//       const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//       days = `${days}`;
//       if (numbersToAddZeroTo.includes(hours)) {
//         hours = `0${hours}`;
//       } else if (numbersToAddZeroTo.includes(minutes)) {
//         minutes = `0${minutes}`;
//       } else if (numbersToAddZeroTo.includes(seconds)) {
//         seconds = `0${seconds}`;
//       }

//       setState({ days: days, hours: hours, minutes, seconds });
//     }
//   };

//   return (
//     <div className="react-countdown">
//       <div className='time-section'>
//         <div className='time'>{state.days || '0'}</div>
//         <small className="time-text">Days</small>
//       </div>
//       <div className='time-section'>
//         <div className='time'>{state.hours || '00'}</div>
//         <small className="time-text">Hours</small>
//       </div>
//       <div className='time-section'>
//         <div className='time'>{state.minutes || '00'}</div>
//         <small className="time-text">Min</small>
//       </div>
//       <div className='time-section'>
//         <div className='time'>{state.seconds || '00'}</div>
//         <small className="time-text">Sec</small>
//       </div>
//     </div>
//   );
// };

// export default TimeCountDown;

import React, { useState, useEffect } from "react";

const TimeCountDown = () => {
  const countdownDate = new Date("5/23/2025").getTime();
  const [state, setState] = useState({
    days: "0",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const distanceToDate = countdownDate - currentTime;

      if (distanceToDate < 0) {
        clearInterval(interval);
        return;
      }

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const pad = (num) => String(num).padStart(2, "0");

      setState({
        days: String(days),
        hours: pad(hours),
        minutes: pad(minutes),
        seconds: pad(seconds),
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [countdownDate]);

  return (
    <div className="react-countdown">
      <div className="time-section">
        <div className="time">{state.days}</div>
        <small className="time-text">Days</small>
      </div>
      <div className="time-section">
        <div className="time">{state.hours}</div>
        <small className="time-text">Hours</small>
      </div>
      <div className="time-section">
        <div className="time">{state.minutes}</div>
        <small className="time-text">Min</small>
      </div>
      <div className="time-section">
        <div className="time">{state.seconds}</div>
        <small className="time-text">Sec</small>
      </div>
    </div>
  );
};

export default TimeCountDown;
