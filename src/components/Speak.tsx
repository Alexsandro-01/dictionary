import { GiSpeaker } from 'react-icons/gi';
import wordInfoStyle from './wordInfo/wordInfo.module.css';

function Speak({ audioSrc }: { audioSrc: string }) {

  const play = (src: string) => {
    const audio = new Audio(src);

    audio.play();
  };

  return (
    <div className={wordInfoStyle['audio-btn']}>
      <button
        onClick={() => play(audioSrc)}
        type="button"
      >
        <GiSpeaker />
      </button>
    </div>
  );
}

export default Speak;