import { useState } from 'react';
import appStyle from './App.module.css';
import Header from './components/header/Header'
import SearchBar from './components/searchBar/SearchBar'
import requestWordFromApi from './services/requests';
import { IWord } from './interfaces/IWord';
import Wordinfo from './components/wordInfo/WordInfo';
import { IErrorMessage } from './interfaces/IErrorMessage';
import Errors from './Errors/Errors';

function App() {

  const [errorMessage, setErrorMessage] = useState('');
  const [apiResponse, setApiResponse] = useState<IWord[]>();

  const [notFoundWord, setNotFoundWord] = useState<IErrorMessage>();

  async function requestApi(word: string): Promise<void> {
    const response = await requestWordFromApi(word);

    if (response.status === 404) {
      setNotFoundWord({
        message: Errors.notFound,
      })

      setApiResponse(undefined)
    }

    if (response.status === 200) {
      setApiResponse(await response.json())
      setNotFoundWord(undefined)
    }

    console.log(response.status);
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
          apiResponse && !notFoundWord && (
            <Wordinfo wordData={apiResponse[0]} />
          )
        }
        {
          notFoundWord && (
            <h3 className={appStyle['word-notfound']}>
              {
                notFoundWord.message
              }
            </h3>
          )
        }
      </main>
    </>
  )
}

export default App
