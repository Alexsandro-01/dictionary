import { useRef, useEffect, FormEvent, useState } from 'react';
import searchBarStyle from './searchBar.module.css';

function SearchBar(
  { setErrorMessage }: { setErrorMessage: React.Dispatch<React.SetStateAction<string>> }
) {

  const inputRef = useRef<HTMLInputElement>(null);

  const [word, setWord] = useState('');


  function searchWord(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    validateWord();
  }

  function validateWord() {
    const response = {
      validWord: true,
      message: ''
    }

    if (word === '') {
      response.message = 'Type something!'
      response.validWord = false

      return response;
    }

    word.trim()

    const wordList = word.split(' ');

    if (wordList.length > 1) {
      response.message = 'Type one word only!'
      response.validWord = false

      return response;
    }

    return response;
  }

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      validateWord();
    }
  }

  useEffect(() => {
    if (inputRef.current != null) {
      inputRef.current.focus();
    }
  }, [])

  return (
    <section className={searchBarStyle.container}>
      <div className={searchBarStyle.form}>

        <input
          type="text"
          name="word"
          id="word"
          value={word}
          onKeyDown={(e) => handleKeyPress(e)}
          onChange={(e) => setWord(e.target.value)}
          ref={inputRef}
        />

        <button
          type="submit"
          onClick={(e) => searchWord(e)}
        >search</button>
      </div>
    </section>
  )
}

export default SearchBar;