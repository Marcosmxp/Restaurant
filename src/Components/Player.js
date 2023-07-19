import React, { useState } from 'react';
import { BsFillPlayCircleFill } from "react-icons/bs";

const Player = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleButtonClick = () => {
    setShowVideo(true);
  };

  const handleVideoClose = () => {
    setShowVideo(false);
  };

  return (
    <div>
      <button className='watch-video-button' onClick={handleButtonClick}>
      <BsFillPlayCircleFill/> Watch Video
      </button>

      {showVideo && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 9999,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            padding: '20px',
            borderRadius: '8px',
          }}
        >
         <iframe width="560" height="315" src="https://www.youtube.com/embed/rI8FOLA-9XM?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <button className='secondary-button' onClick={handleVideoClose}>Fechar</button>
        </div>
      )}
    </div>
  );
};

export default Player;