
import './App.css';
import HomePage from './Pages/Homepage/HomePage.Component';
import { Routes, Route } from 'react-router-dom';
import Shoppage from './Pages/Shoppage/Shoppage.component';
import Header from './Components/header/Header.component';



function App() {
  return (
    <div >
      <Header/>
        <Routes>
          <Route exact path='/' Component={HomePage} />
          <Route path='/shop' Component={Shoppage} />
        </Routes>
      {/* <HomePage/> */}
    </div>
  );
}

export default App;
