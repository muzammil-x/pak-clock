import { useEffect, useState } from "react";

function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("interval setup");
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log("interval canceled");
    };
  }, []);
  return (
    <h3>
      This is the current time: {time.toLocaleDateString()} -
      {time.toLocaleTimeString()}
    </h3>
  );
}
export default Time;
