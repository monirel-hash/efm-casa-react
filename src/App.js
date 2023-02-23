
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from "./components/Menu"
import Ajouter from "./components/Ajouter"

import Modifier from "./components/Modifier"

import Filter from "./components/Filter"

import Home from './components/Home';

import Pays from './components/Pays';

import Details from './components/Details';

import Search from './components/Search';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
            <Route index element={<Pays />}/>
            <Route path="ajouter" element={<Ajouter />} />
            <Route path="modifier/:id" element={<Modifier />} />
            <Route path="filter" element={<Filter />} />

            <Route path="search" element={<Search />} />

            <Route path="/pays/:id" element={<Pays />} />

            <Route path="/pay/:code" element={<Details />} />
        </Route>
            
      </Routes>
    </BrowserRouter>
  );
}

export default App;
