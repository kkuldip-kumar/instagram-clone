import React, { useRef, useState } from "react";
import reel from "@/assets/videos/insta_reel.mp4";
import { FaPlay, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { RxSpeakerOff, RxSpeakerLoud } from "react-icons/rx";
import BaseButton from "@/components/buttons/BaseButton";
export default function Reel() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [mute, setMute] = useState(true);
  //   toggle sound
  const toggleSound = () => {
    const video = videoRef.current;

    console.log("toggle sound", video.muted);
    video.muted = !video.muted;
    setMute(video.muted);
  };
  // toggle play
  const togglePlay = () => {
    const video = videoRef.current;
    console.log("video", video.paused);
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };
  return (
    <div className="">
      <div className="relative grid place-items-center ">
        <video
          onClick={togglePlay}
          ref={videoRef}
          src={reel}
          className=" aspect-[9/16] max-h-[85vh] w-[480px] rounded object-cover"
          autoPlay
          muted
        />
        <div className="absolute items-center ">
          <BaseButton clickHandler={togglePlay} classes="">
            {!isPlaying ? (
              <FaPlay
                size={56}
                fill="#ffffff"
                className="text-white"
                opacity={0.8}
              />
            ) : null}
          </BaseButton>
        </div>
        <div className="absolute bottom-2 right-2">
          <BaseButton
            clickHandler={toggleSound}
            classes="w-8 h-8 bg-black !rounded-full  "
          >
            {mute ? (
              <RxSpeakerOff size={16} className="text-white" fill="#fff" />
            ) : (
              <RxSpeakerLoud size={16} className="text-white" fill="#fff" />
            )}
          </BaseButton>
        </div>
      </div>
    </div>
  );
}
