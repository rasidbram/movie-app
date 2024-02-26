import "./App.css";
import { Search } from "./components/Search";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Star Wars</h1>
      </div>
      <div className="App-body">
        <Search />
      </div>
    </div>
  );
}

export default App;
