import { PathFindingProvider } from "./context/PathFindingContext";
import { SpeedProvider } from "./context/SpeedContext";
import { TileProvider } from "./context/TileContext";

function App() {
  return (
    <PathFindingProvider>
      <TileProvider>
        <SpeedProvider>
          <div>
            <h1 className="text-6xl">Hello</h1>
          </div>
        </SpeedProvider>
      </TileProvider>
    </PathFindingProvider>
  );
}

export default App;
