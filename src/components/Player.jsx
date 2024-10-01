import { useRef, useState } from "react";

const Play = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 -960 960 960"
    width="24px"
    fill="currentColor"
  >
    <path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z"></path>
  </svg>
);

const Pause = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 -960 960 960"
    width="24px"
    fill="currentColor"
  >
    <path d="M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z" />
  </svg>
);

export function Player() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef();

  const handleClick = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.src = `/sounds/sound.mp3`;
      audioRef.current.volume = 0.5;
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <div>
      <div onClick={handleClick}>{playing ? <Pause /> : <Play />}</div>
      <audio ref={audioRef} />
    </div>
  );
}
