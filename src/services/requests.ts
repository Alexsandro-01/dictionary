async function requestWordFromApi(word: string): Promise<Response> {
  const URL = "https://api.dictionaryapi.dev/api/v2/entries/en/"

  const response = await fetch(URL + word);
  return response;
}

export default requestWordFromApi;