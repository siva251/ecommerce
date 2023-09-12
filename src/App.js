
import './App.css';
import HomePage from './Pages/Homepage/HomePage.Component';
import { Routes, Route } from 'react-router-dom';
import Shoppage from './Pages/Shoppage/Shoppage.component';



function App() {
  return (
    <div >
        <Routes>
          <Route exact path='/' Component={HomePage} />
          <Route path='/shop' Component={Shoppage} />
        </Routes>
      {/* <HomePage/> */}
    </div>
  );
}

export default App;
