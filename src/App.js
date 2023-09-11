
import './App.css';
import HomePage from './Pages/Homepage/HomePage.Component';
import { Routes, Route } from 'react-router-dom';

const HatPage = () => (
  <div>
    <h1>Hat Page</h1>
  </div>
)

function App() {
  return (
    <div >
        <Routes>
          <Route exact path='/' Component={HomePage} />
          <Route path='/hats' Component={HatPage} />
        </Routes>
      {/* <HomePage/> */}
    </div>
  );
}

export default App;
