
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from "./components/Menu"
import Ajouter from "./components/Ajouter"

import Modifier from "./components/Modifier"

import Filter from "./components/Filter"

import Home from './components/Home';

import Pays from './components/Pays';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
            <Route index element={<Pays />}/>
            <Route path="ajouter" element={<Ajouter />} />
            <Route path="modifier/:id" element={<Modifier />} />
            <Route path="filter" element={<Filter />} />
            <Route path="/pays/:id" element={<Pays />} />
        </Route>
            
      </Routes>
    </BrowserRouter>
  );
}

export default App;
