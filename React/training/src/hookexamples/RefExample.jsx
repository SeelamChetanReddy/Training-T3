import React, { useEffect, useRef, useState } from "react";
import video from "./2023-08-06-013501000.mp4";
import image from "./Ro.jpg";
const RefExample = () => {
  const [play, setPlay] = useState(true);
  const eleRef = useRef();
  const videoRef = useRef();
  console.log(videoRef);
  console.log(eleRef);
  useEffect(() => {
    eleRef.current.style.color = "teal";
    eleRef.current.innerText = "React Ref";
    videoRef.current.style.width = "1000px";
    videoRef.current.style.height = "500px";
  });

  let playORpause = () => {
    console.log(play);
    if (play === true) {
      videoRef.current.play();
      setPlay(false);
    } else {
      videoRef.current.pause();
      setPlay(true);
    }
  };
  return (
    <div>
      <h1 ref={eleRef}>RefExample</h1>
      <video src={video} ref={videoRef} onClick={playORpause}></video>
      <img src={image} width={"1000px"} height={"500px"}></img>
    </div>
  );
};

export default RefExample;
