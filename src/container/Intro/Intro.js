import React, { useRef, useState } from "react";
import { meal } from "../../constants";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import "./Intro.css";

const Intro = () => {
  const [playvideo, setPlayvideo] = useState(false);
  const videoref = useRef(null);
  const handlevideo = () => {
    setPlayvideo((prev) => !prev);
    if (playvideo) videoref.current.pause();
    if (!playvideo) videoref.current.play();
  };
  return (
    <div className="app__video section__padding flex__center">
      <video
        src={meal}
        ref={videoref}
        type="video/mp4"
        muted
        loop
        controls={false}
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay-circle flex__center"
          onClick={handlevideo}
        >
          {playvideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
