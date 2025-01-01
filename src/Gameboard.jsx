import { useState } from "react";
import './Gameboard.css';
import { Card } from "./Card.jsx";

import batman from './assets/batman.png';
import superman from './assets/superman.jpg';
import wonderwoman from './assets/wonderwoman.jpg';
import spiderman from './assets/spiderman.jpg';
import deadpool from './assets/deadpool.jpg';
import wolverine from './assets/wolverine.jpg';
import ironman from './assets/ironman.jpg';
import thor from './assets/thor.jpg';
import hulk from './assets/hulk.png';
import loki from './assets/loki.jpg';


function Gameboard (){
    let heroes = [batman, superman, wonderwoman, spiderman, deadpool, wolverine, ironman, thor, hulk, loki];
    const [score, setScore] = useState(0);
    const [clickedCards, setClickedCards] = useState([]);
    const [cards, setCards] = useState(heroes);

    const shuffleCards = () => {
        setCards(prevCards => [...prevCards].sort(() => Math.random() - 0.5));
      };

    const handleChange = (name) =>{
        if(score >= 9){
            setClickedCards([]);
            setScore(0);
            alert("Game Over, You Won");
        }
        else if(clickedCards.includes(name)){
            setClickedCards([]);
            setScore(0);
        }
        else{
            setClickedCards([...clickedCards, name]);
            setScore(score + 1);
            shuffleCards();
        }
    };

    return (
    <div className="app">
      <div className='header'>
        <h1>A Memory Game</h1>
        <p>Score: {score}</p>
      </div>
    <br />
    <p>Gets points by clicking on an image but do not click on any more than once! Click all 10 images without repeating and you win</p>
    <br />
        <div className="cards">
        <Card key={0} name={cards[0].slice(12,-4)} url={cards[0]} handleChange={() => handleChange(cards[0].slice(12,-4))} />
        <Card key={1} name={cards[1].slice(12,-4)} url={cards[1]} handleChange={() => handleChange(cards[1].slice(12,-4))} />
        <Card key={2} name={cards[2].slice(12,-4)} url={cards[2]} handleChange={() => handleChange(cards[2].slice(12,-4))} />
        <Card key={3} name={cards[3].slice(12,-4)} url={cards[3]} handleChange={() => handleChange(cards[3].slice(12,-4))} />
        <Card key={4} name={cards[4].slice(12,-4)} url={cards[4]} handleChange={() => handleChange(cards[4].slice(12,-4))} />
        <Card key={5} name={cards[5].slice(12,-4)} url={cards[5]} handleChange={() => handleChange(cards[5].slice(12,-4))} />
        <Card key={6} name={cards[6].slice(12,-4)} url={cards[6]} handleChange={() => handleChange(cards[6].slice(12,-4))} />
        <Card key={7} name={cards[7].slice(12,-4)} url={cards[7]} handleChange={() => handleChange(cards[7].slice(12,-4))} />
        <Card key={8} name={cards[8].slice(12,-4)} url={cards[8]} handleChange={() => handleChange(cards[8].slice(12,-4))} />
        <Card key={9} name={cards[9].slice(12,-4)} url={cards[9]} handleChange={() => handleChange(cards[9].slice(12,-4))} />
        </div>
    </div>
    );
}

export { Gameboard};