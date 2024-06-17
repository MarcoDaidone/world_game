import React from 'react';
import { range } from '../../../utils';
import { checkGuess } from '../../../game-helpers';

const Cell = ({value})=> {
     return(
                    <span className={`cell`}>
                         {value}
                    </span>
     )
};

const Guess = ({ value , answer, guess}) => {

const result = checkGuess(guess,answer)
console.log(answer)
console.log(guess)
console.log(result)


    
     
     const status = checkGuess(guess, answer)
     return (
          <>
               <p className='guess'>
                    {range(5).map((num) => (
                        <Cell key={num} value={result ? result[num].letter : undefined}/>
                    ))}
               </p>
          </>
     );
};

export default Guess;
