import { useState } from 'react';
import appStyle from './App.module.css';
import Header from './components/header/Header'
import SearchBar from './components/searchBar/SearchBar'

function App() {

  const [errorMessage, setErrorMessage] = useState('');

  return (
    <>
      <Header />
      <main>
        <section>
          <SearchBar setErrorMessage={setErrorMessage} />
          {
            errorMessage !== '' && (
              <p className={appStyle['error-message']}>{errorMessage}</p>
            )
          }
        </section>
      </main>
    </>
  )
}

export default App
