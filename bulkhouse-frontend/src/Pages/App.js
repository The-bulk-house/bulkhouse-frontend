import Navbar from '../Components/Navbar.js';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from '../Pages/Home';

function App() {
  return (
    <div className='App'>
       <Router>
        <Navbar/>
          <Routes>
              <Route exact path="/" component={<Home/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
