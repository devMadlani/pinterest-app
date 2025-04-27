import "./App.css";
import Gallery from "./components/Gallery";
import Leftbar from "./components/Leftbar";
import Topbar from "./components/Topbar";

function App() {
  return (
    <div className="flex gap-4">
      <Leftbar />
      <div className="flex-1  mr-4">
        <Topbar />
        <Gallery />
      </div>
    </div>
  );
}

export default App;
