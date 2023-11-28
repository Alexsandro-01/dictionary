export interface IWord {
  word: string;
  phonetic: string;
  phonetics: IPhonetics[];
  origin?: string;
  meanings: {
    partOfSpeech: string;
    definitions: {
      definition: string;
      example?: string;
      synonyms: string[];
      antonyms: string[];
    }[];
    synonyms: string[];
    antonyms: string[];
  }[];
  license: {
    name: string;
    url: string
  };
  sourceUrls: string[]
}

export interface IPhonetics {
  text: string;
  audio: string;
  sourceUrl?: string;
  license?: {
    name: string
    url: string;
  };
}