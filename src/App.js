import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from "src/pages/Home"
import Following from './pages/Following';
function App() {
  return (
      <div className='App'>
        <Routes>
          <Route path='/' element = {<Home />}></Route>
          <Route path='/following' element = {<Following />}></Route>
        </Routes>
      </div>
  );
}

export default App;
