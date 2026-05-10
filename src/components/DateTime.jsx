import React, { useState, useEffect } from "react";

const DateTime = () => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    // Funtion to get current date and time
    const updateDateTime = () => {
      // Created a date object
      const now = new Date();

      // Automatically converts current date and time into a formatted readable string
      const formattedDateTime = now
        .toLocaleString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
        .toLowerCase()
        .replace(/,/g, ""); // replaces all commas

      setDateTime(formattedDateTime);
    };

    // calling updateDateTime() manually once for the first sec
    updateDateTime();
    const interval = setInterval(updateDateTime, 1000); //calling updatetime after every seconds

    return () => clearInterval(interval); // cleanup function when component unmounts
  }, []);

  return <div>{dateTime}</div>;
};

export default DateTime;