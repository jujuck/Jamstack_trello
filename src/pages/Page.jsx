import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Hero from '../components/Hero';
import Article from '../components/Article';
import Cards from '../components/Cards';

const matching = {
  "accueil": "626f809e3b144437758f8991",
  "product": "626facbe3a0d886b12d2c5ea"
}
const Page = () => {
  const [cards, setCards] = useState([]);
  const { name } = useParams();
  useEffect(() => {
    axios.get('https://trello.com/b/TXsA6WS9/dynamic-component.json')
      .then(data => setCards(data.data.cards))
      .catch(err => console.error(err))
  }, [])

  const getComponent = (label, card) => {
    console.log(label)
    const componentListe = {
      "hero": () => <Hero hero={card} />,
      "article": () => <Article article={card} />,
      "cards": () => <Cards cards={card} />
    }
    return componentListe[label]()
  }
  return (
    <div className="App">
      {console.log(name)}
      <h1>Dynamic Component with trello Api as Back Office</h1>
      {console.log(cards)}
      {cards
        .filter(cards => cards.idList === matching[name])
        .map(card => getComponent(card.labels[0].name, card))}
    </div>
  );
}

export default Page