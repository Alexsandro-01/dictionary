import { useState } from 'react';
import appStyle from './App.module.css';
import Header from './components/header/Header'
import SearchBar from './components/searchBar/SearchBar'
import requestWordFromApi from './services/requests';
import { IWord } from './interfaces/IWord';
import Wordinfo from './components/wordInfo/WordInfo';

function App() {

  const [errorMessage, setErrorMessage] = useState('');
  const [apiResponse, setApiResponse] = useState<IWord[]>();

  async function requestApi(word: string): Promise<void> {
    const response = await requestWordFromApi(word);

    setApiResponse(response);
  }

  return (
    <>
      <Header />
      <main>
        <section className={appStyle["input-container"]}>
          <SearchBar
            requestApi={requestApi}
            setErrorMessage={setErrorMessage}
          />
          {
            errorMessage !== '' && (
              <p className={appStyle['error-message']}>{errorMessage}</p>
            )
          }
        </section>
        {
          apiResponse && (
            <Wordinfo wordData={apiResponse[0]} />
          )
        }
      </main>
    </>
  )
}

export default App
