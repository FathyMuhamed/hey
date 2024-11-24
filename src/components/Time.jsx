import { useState, useEffect } from "react";

export default function Time({ style }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className={`text-black transition-colors absolute top-2 sm:top-1 -right-20 sm:-right-32 z-50 text-xs sm:text-base ${style}`}
    >
      {time.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })}
    </div>
  );
}
