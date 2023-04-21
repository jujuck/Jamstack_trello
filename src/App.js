import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Home from './pages/Home';
import NavBar from './components/Nav';

function App() {
  const [cards, setCards] = useState([]);
  const [lists, setLists] = useState([]);
  useEffect(() => {
    axios.get('https://trello.com/b/TXsA6WS9/dynamic-component.json')
      .then(res => {
        console.log(res.data)
        setCards(res.data.cards)
        setLists(res.data.lists)
      })
      .catch(err => console.error(err))
  },[])



  return (
    <BrowserRouter>
    <NavBar lists={lists} />
      <Routes>
        <Route path="/:page" element={<Home cards={cards} lists={lists} />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
