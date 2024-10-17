import React, { useState, useRef, useEffect } from "react";
import speed from "../assets/footer/speed.png";
import play from "../assets/footer/play.png";
import replay from "../assets/footer/replay.png";
import mute from "../assets/footer/mute.png";
import pause from "../assets/footer/pause.png";
import back from "../assets/footer/back.png";
import next from "../assets/footer/next.png";
import audioFile from "../audio/T01P00.mp3";

const Footer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  // Update the progress bar as the audio plays
  useEffect(() => {
    const audio = audioRef.current;
    const updateTime = () => setCurrentTime(audio.currentTime);
    audio.addEventListener("timeupdate", updateTime);
    return () => {
      audio.removeEventListener("timeupdate", updateTime);
    };
  }, []);

  // Play or pause audio
  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Replay audio (reset currentTime to 0 and play)
  const handleReplay = () => {
    const audio = audioRef.current;
    audio.currentTime = 0; // Reset to the beginning
    audio.play(); // Start playing the audio
    setIsPlaying(true); // Update the state to playing
  };

  // Update currentTime when seeking through the input slider
  const handleSeek = (e) => {
    const audio = audioRef.current;
    const time = e.target.value;
    audio.currentTime = time;
    setCurrentTime(time);
  };

  // Set audio duration when it's loaded
  const handleLoadedMetadata = () => {
    const audio = audioRef.current;
    setDuration(audio.duration);
  };

  return (
    <footer className="bg-white h-28 flex justify-between">
      <audio
        ref={audioRef}
        src={audioFile}
        onLoadedMetadata={handleLoadedMetadata}
      ></audio>
      <input
        type="range"
        min="0"
        max={duration}
        value={currentTime}
        onChange={handleSeek}
        className="progressBar w-full absolute -mt-3"
      />
      <div className="rightFoot flex ">
        <img src={speed} alt="" className="h-28" />
        <img
          src={isPlaying ? pause : play}
          alt="play/pause"
          className="h-28"
          onClick={handlePlayPause}
        />
        <img
          src={replay}
          alt="replay"
          className="h-28"
          onClick={handleReplay} // Add onClick event for replay
        />
      </div>
      <div className="bg-[#3a5569] w-0.5"></div>
      <div className="transcript w-[48%] p-5">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas id, saepe
        sint fuga qui enim laboriosam deleniti facere necessitatibus. Qui
        numquam ratione illo perspiciatis facilis excepturi veritatis rerum
        expedita voluptates.
      </div>
      <div className="bg-[#3a5569] w-0.5"></div>
      <div className="leftFoot flex items-center">
        <img src={mute} alt="" className="h-28" />
        <img src={back} alt="" className="h-28" />
        <h2 className="font-semibold text-2xl -mt-8">01/22</h2>
        <img src={next} alt="" className="h-28" />
      </div>
    </footer>
  );
};

export default Footer;
