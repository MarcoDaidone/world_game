import React, { useState } from 'react';

const GuessInput = ({ guess, setGuess, setAllAnswers, allAnswers }) => {
     const [input, setInput] = useState('');
     return (
          <div>
               <form
                    className='guess-input-wrapper'
                    onSubmit={(event) => {
                         event.preventDefault();
                         const newGuess = {
                              guess: input.toUpperCase(),
                              id: crypto.randomUUID(),
                         };
                         setGuess(input.toUpperCase());
                         setAllAnswers([...allAnswers, newGuess]);
                         setInput('');
                    }}
               >
                    <label htmlFor='guess-input'>Enter guess:</label>
                    <input
                         maxLength={5}
                         minLength={5}
                         id='guess-input'
                         type='text'
                         value={input}
                         onChange={(event) => {
                              setInput(event.target.value);
                         }}
                    />
               </form>
          </div>
     );
};

export default GuessInput;
