import React, { useState, useEffect } from 'react';

const Timer: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the count every second
      setCount(prevCount => prevCount + 1);
    }, 1000); // Interval of 1000 milliseconds (1 second)

    // Cleanup function to clear the interval when the component unmounts or when dependencies change
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run effect only once on component mount

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

export default Timer;
