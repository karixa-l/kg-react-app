// App.jsx
import React from 'react';
import './App.css'; // Import your existing App.css
import './index.css'; // Import the index.css with the video container styles

const VideoBackground = () => {
  return (
    <div className="video-container">
      <iframe
        src="https://www.youtube.com/embed/xNwQF0kYJjM?si=Dmq4PVMr-vpO_3D8&autoplay=1&mute=1&loop=1&playlist=xNwQF0kYJjM&modestbranding=1&controls=0&showinfo=0&rel=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const OverlayBlocks = () => {
  return (
    <div className="overlay-container">
      <div className="grid-block"><h3>Block 1</h3></div>
      <div className="grid-block"><h3>Block 2</h3></div>
      <div className="grid-block"><h3>Block 3</h3></div>
      <div className="grid-block"><h3>Block 4</h3></div>
    </div>
  );
};
const ScrollSection = () => {
  return (
    <div className="scroll-section">
      <h1>scroll.</h1>
      <ul>
        {Array.from({ length: 10 }).map((_, index) => (
          <li key={index}>
            <img src={`https://picsum.photos/900/1200?random=${index + 1}`} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <div className="hero-section">
        <VideoBackground />
        <OverlayBlocks />
      </div>
      <ScrollSection /> 
    </div>
  );
};


export default App;