import {Routes, Route, Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Home';
import Newspage from './pages/News'
import Contactpage from './pages/Contact';
function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to = "/">Home</Link>
          </li>
          <li>
            <Link to = "/news">News</Link>
          </li>
          <li>
            <Link to = "/news">News</Link>
          </li>
        </ul>
      </nav>
      
      <Routes>
        <Route path = "/" element = {<Homepage></Homepage>}></Route>
        <Route path = "/news" element = {<Newspage></Newspage>}></Route>
        <Route path = "/contact" element = {<Contactpage></Contactpage>}></Route>
      </Routes>
    </>
  );
}

export default App;
