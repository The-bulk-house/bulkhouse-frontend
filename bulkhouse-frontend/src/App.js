import Navbar from '../src/Components/Navbar.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../src/Pages/Home.js';
import Workouts from '../src/Pages/Workouts.js';

function App() {
  return (
      <BrowserRouter>
        <Navbar/>
          <Routes>
              <Route exact path="/"  element={<Home/>} />
              <Route path="/workouts"  element={<Workouts/>} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;