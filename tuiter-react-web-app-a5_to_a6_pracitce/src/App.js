import AddScreen from "./screens/add-screen";
import HouseScreen from "./screens/house-screen";
import TodoScreen from "./screens/todo-screen";
import DescructorScreen from "./screens/destructor-screen";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/nav-bar";
import Tarp from "./tarp";

function App() {
  return (
    <div className="container-fluid mt-2">
      {/* <h1>Welcome to webdev</h1> */}
      <BrowserRouter>
        <div className="row">
          <div className="col-1">
            <NavBar />
          </div>
          <div className="col-11">
            <Routes>
              <Route index="/" element={<Tarp/>} />
              <Route path="/tarp/*" element={<Tarp/>} />
              <Route path="/descructors" element={<DescructorScreen/>}/>
              <Route path="/add/:paramA/:paramB" element={<AddScreen/>}/>
              <Route path="/house" element={<HouseScreen/>}/>
              <Route path="/todos" element={<TodoScreen/>}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
