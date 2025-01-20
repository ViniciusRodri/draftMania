import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

type TimerProps = {
  isPlaying: boolean;
};

export const Timer: React.FC<TimerProps> = ({ isPlaying }) => {
  const duration = 120;
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`; // Formato MM:SS
  };

  return (
    <CountdownCircleTimer
      isPlaying={isPlaying}
      size={150}
      colors="#63F1D6"
      duration={duration}
      onComplete={() => {
        return { shouldRepeat: true };
      }}>
      {({ remainingTime }) => (
        <div
          style={{
            color: "#000",
            fontSize: "32px",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}>
          {formatTime(remainingTime)}
        </div>
      )}
    </CountdownCircleTimer>
  );
};
