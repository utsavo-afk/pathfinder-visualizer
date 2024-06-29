import { usePathFinding } from "../hooks/usePathFinding";
import { twMerge } from "tailwind-merge";
import { MAX_COLS, MAX_ROWS } from "../utils/constants";

export const Grid: React.FC = () => {
  const { grid } = usePathFinding();

  return (
    <div
      className={twMerge(
        // base style
        "flex items-center flex-col justify-center border-sky-300",
        // row style
        `lg:min-h-[${MAX_ROWS * 17}px] md:min-h-[${
          MAX_ROWS * 15
        }px] xs:min-h-[${MAX_ROWS * 8}px] min-h-[${MAX_ROWS * 7}px]`,
        // col style
        `lg:w-[${MAX_COLS * 17}px] md:w-[${MAX_COLS * 15}px] xs:w-[${
          MAX_COLS * 8
        }px] w-[${MAX_COLS * 7}px]`
      )}
    >
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((_tile, tileIndex) => (
            <div key={tileIndex} className="bg-white h-2 w-2 border" />
          ))}
        </div>
      ))}
    </div>
  );
};
