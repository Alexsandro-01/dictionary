import { IWord } from "../interfaces/IWord";

async function requestWordFromApi(word: string): Promise<IWord> {
  const URL = "https://api.dictionaryapi.dev/api/v2/entries/en/"
  const response = await fetch(URL + word);

  return response.json();
}

export default requestWordFromApi;