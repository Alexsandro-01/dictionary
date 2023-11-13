import { useRef, useEffect, FormEvent, useState } from 'react';
import searchBarStyle from './searchBar.module.css';

function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [word, setWord] = useState('');

  function searchWord(event: FormEvent<HTMLButtonElement>) {
    event.preventDefault();
  }

  useEffect(() => {
    if (inputRef.current != null) {
      inputRef.current.focus();
    }
  }, [])

  return (
    <section className={searchBarStyle.section}>
      <form className={searchBarStyle.form}>

        <input
          type="text"
          name="word"
          id="word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          ref={inputRef}
        />

        <button
          type="submit"
          onSubmit={(e) => searchWord(e)}
        >search</button>

      </form>
    </section>
  )
}

export default SearchBar;