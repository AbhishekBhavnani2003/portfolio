import './App.css';
import Intro from './component/Intro';
import Navbar from './component/Navbar'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Projects from './component/Projects';
import Contact from './component/Contact';
import Aboutme from './component/Aboutme';
import Services from './component/Services';

function App() {
  return (
    <>
      <Router>
        <div >
          <Navbar />

          <Routes>
            <Route exact path='/' element={<Intro/>} />
            <Route exact path='/project' element={<Projects />}></Route>
            <Route exact path='/contact' element={<Contact />}></Route>
            <Route exact path='/aboutme' element={<Aboutme />}></Route>
            <Route exact path='/services' element={<Services />}></Route>
          </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;
