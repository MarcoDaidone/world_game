import React from 'react';
import { range } from '../../../utils';
import GuessPresult from './guess';
import Guess from './guess';


const GuessResult = ({ allAnswers, answer, guess }) => {
     
     return (
          <div className='guess-results'>
               {range(6).map((num) => (
                    <Guess guess={guess} answer={answer} key={num} value={allAnswers[num]} />
               ))}
          </div>
     );
};

export default GuessResult;
