import { useEffect, useRef } from "react";
import { IWord } from "../../interfaces/IWord";
import wordInfoStyle from './wordInfo.module.css';
import { GiSpeaker } from "react-icons/gi";
import { VscDebugBreakpointLog } from "react-icons/vsc";

function Wordinfo({ wordData }: { wordData: IWord }) {

  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayClick = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }

  const uniqueKey = (indx: number): number => indx + Math.random();

  useEffect(() => {

  })

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
          wordData.phonetics.map((elem, index) => {
            if (elem.audio) {
              return (
                <div key={uniqueKey(index)} className={wordInfoStyle['audio-btn']}>
                  <audio ref={audioRef}>
                    <source src={elem.audio} type="audio/mpeg" />
                  </audio>
                  <button
                    onClick={handlePlayClick}
                    type="button"
                  >
                    <GiSpeaker />
                  </button>
                </div>
              )
            }
          })
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