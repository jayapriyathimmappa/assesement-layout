import "./App.css";
import Dashboard from "./Component/Dashboard";
import Header from "./Component/Header";
import Sidebar from "./Component/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-parent">
        <Dashboard className="dash" percentage={70} rating={3} />
        <Sidebar className="side" />
      </div>
    </div>
  );
}

export default App;
