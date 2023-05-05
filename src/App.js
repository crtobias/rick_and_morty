import './App.css';
import Cards from './components/cards/Cards';
import Nav from './components/nav/Nav';
import {useState} from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import About from './components/about/About';
import Detail from './components/detail/Detail';
import Home from './components/home/Home'


function App(){

   const [characters, setCharacters] = useState([]);
   

function onSearch(id) {
   console.log(id);
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {


   if (data.name ) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      } 
   });
}

function onClose(id) {
   console.log(id);
   setCharacters((oldChars) => oldChars.filter((char) => char.id!== id));
}





   return(
      <div className='App'>
         
         <Nav onSearch={onSearch}/>
         
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
         </Routes>
      </div>
   );
}




export default App;

