import { useContext } from "react";
import { SpeedContext } from "../context/SpeedContext";

export const useSpeed = () => {
  const ctx = useContext(SpeedContext);

  if (!ctx) {
    throw new Error("useSpeed must be used within a SpeedProvider");
  }

  return ctx;
};
