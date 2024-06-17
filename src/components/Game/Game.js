import React, { useEffect, useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Form from './NewsComponents/guessInput';
import Answers from './NewsComponents/guessResult';
import GuessInput from './NewsComponents/guessInput';
import GuessResult from './NewsComponents/guessResult';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
     const [guess, setGuess] = useState('');
     const [allAnswers, setAllAnswers] = useState([]);


     useEffect(() => {
          if (guess === answer) {
               console.log('good match');
          }
     }, [guess]);

     return (
          <>
               <GuessResult guess={guess} answer={answer} allAnswers={allAnswers} />
               <GuessInput
                    guess={guess}
                    setGuess={setGuess}
                    setAllAnswers={setAllAnswers}
                    allAnswers={allAnswers}
                    
               />
          </>
     );
}

export default Game;
