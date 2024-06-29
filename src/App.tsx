import { PathFindingProvider } from "./context/PathFindingContext";
import { TileProvider } from "./context/TileContext";

function App() {
  return (
    <PathFindingProvider>
      <TileProvider>
        <div>
          <h1 className="text-6xl">Hello</h1>
        </div>
      </TileProvider>
    </PathFindingProvider>
  );
}

export default App;
