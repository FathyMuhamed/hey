import { useState } from "react";

export function useProgress({ islandState, setIslandState }) {
  const [progress, setProgress] = useState(0);

  const handleProgress = () => {
    if (islandState !== "nav") return;
    setIslandState("progress");
    setProgress(90);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIslandState("complete");
          return 100;
        }
        return prev + 10;
      });
    }, 400);
  };

  return {
    progress,
    handleProgress,
  };
}
