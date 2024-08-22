import React, { useState, useEffect } from "react";
import "./Clock.css"; // Assuming you have this CSS file for styles

const Clock = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");

  useEffect(() => {
    const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    const updateTime = () => {
      const cd = new Date();
      setTime(
        `${zeroPadding(cd.getHours(), 2)}:${zeroPadding(
          cd.getMinutes(),
          2
        )}:${zeroPadding(cd.getSeconds(), 2)}`
      );
      setDate(
        `${zeroPadding(cd.getFullYear(), 4)}-${zeroPadding(
          cd.getMonth() + 1,
          2
        )}-${zeroPadding(cd.getDate(), 2)}`
      );
      setDay(week[cd.getDay()]);
    };

    const zeroPadding = (num, digit) => {
      return num.toString().padStart(digit, "0");
    };

    const timerID = setInterval(updateTime, 1000);
    updateTime();

    return () => clearInterval(timerID);
  }, []);

  return (
    <div id="clock">
      <p className="time">{time}</p>
      <p className="date">{date}</p>
      <p className="day">{day}</p> {/* Day added here */}
      
    </div>
  );
};

export default Clock;
