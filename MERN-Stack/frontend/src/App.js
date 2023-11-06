import {BrowserRouter , Route, Routes} from 'react-router-dom'

// Pages and components 
import Home from './pages/Home';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar/>
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home/>}>

              </Route>
            </Routes>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;