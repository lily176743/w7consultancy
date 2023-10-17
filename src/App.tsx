// project import
import Routes from "./routes";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="flex flex-row">
      <SideBar />
      <Routes />
    </div>
  );
}

export default App;
