import wordInfoStyle from './wordInfo.module.css';
import { VscDebugBreakpointLog } from "react-icons/vsc";
import Speak from "../Speak";
import { IPhonetics, IWord } from '../../interfaces/IWord';
import { useEffect } from 'react';

function Wordinfo({ wordData }: { wordData: IWord }) {

  const uniqueKey = (indx: number): number => indx + Math.random();

  function filterAudio(phonetics: IPhonetics[]) {
    const audios = phonetics.filter((audio) => audio)
    let usAudio: IPhonetics[];

    if (audios.length > 0) {
      usAudio = audios.filter((elem) => {
        const rgx = /us\.mp3$/;

        return rgx.test(elem.audio)
      })

      return usAudio[0].audio
    }

    return '';
  }

  useEffect(() => {

  }, [wordData])

  return (
    <section className={wordInfoStyle.container}>
      <div className={wordInfoStyle['word-name-box']}>
        <div>
          <h2>
            {
              wordData.word
            }
          </h2>
          <p className={wordInfoStyle.phonetic}>
            <strong>
              {
                wordData.phonetic
              }
            </strong>
          </p>
        </div>
        {
          wordData.phonetics.length > 0 && (
            <Speak audioSrc={filterAudio(wordData.phonetics)} />
          )
        }
      </div>
      {
        wordData.meanings.map((content) => (
          <article key={content.partOfSpeech}>
            <div>
              <h3>
                {
                  content.partOfSpeech
                }
              </h3>
            </div>

            <p className={wordInfoStyle.meaning}>Meaning</p>

            <ul className={wordInfoStyle['meaning-list']}>
              {
                content.definitions.map((definition, indx) => (
                  <li key={uniqueKey(indx)}>
                    <div>
                      <span>
                        <VscDebugBreakpointLog />
                      </span>
                      <p>
                        {
                          definition.definition
                        }
                      </p>
                    </div>
                    {
                      definition.example && (
                        <p className={wordInfoStyle.example} key={uniqueKey(indx)}>
                          {
                            `"${definition.example}"`
                          }
                        </p>
                      )
                    }
                  </li>
                ))
              }
            </ul>

            {
              content.synonyms.length > 0 && (
                <p className={wordInfoStyle.synonym}>
                  Synonyms
                  {' '}
                  {
                    content.synonyms.map((synonym, index) => (
                      <strong key={synonym}>
                        {
                          index - 1 !== content.synonyms.length ? `${synonym}, ` : synonym
                        }
                      </strong>
                    ))
                  }
                </p>
              )
            }
          </article>
        ))
      }

      <div className={wordInfoStyle.source}>
        <p><i>Source</i></p>
        <p>
          <a href={wordData.sourceUrls[0]}>{wordData.sourceUrls[0]}</a>
        </p>
      </div>
    </section>
  )
}

export default Wordinfo;