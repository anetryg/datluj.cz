import React, { useState, useEffect } from 'react';
import './style.css';

const Wordbox = ({ word, onFinish, active }) => {
  const [lettersLeft, setLettersLeft] = useState(word); 
  const [mistake, setMistake] =  useState(false)

  const handleLetter = (e) => {
    if (e.key === lettersLeft[0]){
      setMistake(false)
      if (lettersLeft.length === 1) {
        onFinish()
      } else{
        console.log(e.key)
        setLettersLeft(lettersLeft.substring(1))
      }}
    else {
      setMistake(true)
    }
      
    
    
  };

  useEffect(() => {
    document.addEventListener('keyup', handleLetter);
    return () => document.removeEventListener('keyup', handleLetter);
  }, [lettersLeft]);
  
  return (
    <div className={mistake ? "wordbox--mistake" : "wordbox"}>{lettersLeft}</div>
  );
};

export default Wordbox;
