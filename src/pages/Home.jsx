import React from 'react';
import { useParams } from 'react-router-dom';

import Hero from '../components/Hero';
import Article from '../components/Article';
import Cards from '../components/Cards';
import Accordeon from '../components/Accordeon';

const Home = ({ cards, lists }) => {
  const { page } = useParams();

  const list = lists.find(list => list.name === page)
  const getComponent = (card) => {
    const comps = {
      hero: <Hero card={card} />,
      accordeon: <Accordeon card={card} />,
      cards: <Cards card={card} />,
      article: <Article card={card} />
    }
    console.log(card)
    return comps[card.labels[0].name]
  }
  return (
    <div className="App">
      <h1>Dynamic Component with trello Api as Back Office TEST STETESFEDZ TEST AGAIN</h1>
      { cards
        .filter(card => card.idList === list.id)
        .map(card => getComponent(card))}
    </div>
  )
}

export default Home