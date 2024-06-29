import { useContext } from "react";
import { TileContext } from "../context/TileContext";

export const useTile = () => {
  const ctx = useContext(TileContext);

  if (!ctx) {
    throw new Error("useTile must be used within a tile provider");
  }

  return ctx;
};
