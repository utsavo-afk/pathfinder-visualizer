import { TileType } from "../utils/types";

export const Tile: React.FC = ({
  row,
  col,
  isStart,
  isEnd,
  isTraversed,
  isPath,
  isWall,
}: Pick<
  TileType,
  "row" | "col" | "isStart" | "isEnd" | "isTraversed" | "isPath" | "isWall"
>) => {};
