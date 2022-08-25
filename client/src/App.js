import {Route, Routes} from 'react-router-dom'
import React from 'react';
import './App.css';
import Home from './components/Home/Home'
import Details from './components/Detail/Detail'
import SearchAppBar from './components/NavBar/Navbar';

function App() {
  return (
    
    <div className="App">
      <SearchAppBar />
      <Routes>
      <Route exact path='/api' element={<Home/>}></Route>
      <Route exact path='/api/:id' element={<Details/>}></Route>
      </Routes>
    </div>
  )
}

export default App;