import { useRef, useEffect, useState } from 'react';
import searchBarStyle from './searchBar.module.css';
import { IProps } from '../../interfaces/IProps';
import { FaSearch } from 'react-icons/fa';

function SearchBar(
  {
    requestApi, setErrorMessage
  }: IProps
) {

  const inputRef = useRef<HTMLInputElement>(null);

  const [word, setWord] = useState('');

  function wordIsvalid() {
    if (validateWord().validWord) {
      setErrorMessage('');
      requestApi(word);
    } else {
      setErrorMessage(validateWord().message);
    }
  }

  function searchWord(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    wordIsvalid();
  }

  function validateWord() {
    const response = {
      validWord: true,
      message: ''
    }

    const wordWithoutSpace = word.trim();

    if (wordWithoutSpace === '') {
      response.message = 'Type something!'
      response.validWord = false

      return response;
    }


    if (/\s/g.test(wordWithoutSpace)) {
      response.message = 'Type one word only!'
      response.validWord = false

      return response;
    }

    return response;
  }

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      wordIsvalid();
    }
  }

  useEffect(() => {
    if (inputRef.current != null) {
      inputRef.current.focus();
    }
  }, [])

  return (
    <section>
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
        ><FaSearch /></button>
      </div>
    </section>
  )
}

export default SearchBar;