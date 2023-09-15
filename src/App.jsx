import "./App.css";
import Toggle from "./Toggle";
import Tooltip from "./Tooltip";
const Result = Tooltip(Toggle);
function App() {
  return (
    <div>
      <Result />
    </div>
  );
}

export default App;
