import "./App.css";
import ProfileBar from "./Components/ProfileBar";
import SideBar from "./Components/SideBar";
import Main from "./Components/Main";

function App() {
  return (
    <div className="App">
      <ProfileBar />
      <SideBar />
      <Main />
    </div>
  );
}

export default App;
