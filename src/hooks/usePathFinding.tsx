import { useContext } from "react";
import { PathFindingContext } from "../context/PathFindingContext";

export const usePathFinding = () => {
  const ctx = useContext(PathFindingContext);

  if (!ctx) {
    throw new Error("usePathFinding must be used within pathFinding provider");
  }

  return ctx;
};
