// App.jsx
import React from 'react';
import './App.css'; // Import your existing App.css
import './index.css'; // Import the index.css with the video container styles

const VideoBackground = () => {
  return (
    <div className="video-container">
      <iframe
        src="https://www.youtube.com/embed/xNwQF0kYJjM?si=Dmq4PVMr-vpO_3D8&controls=0&autoplay=1&mute=1&loop=1&playlist=xNwQF0kYJjM"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

function App() {
  return (
    <div>
      <VideoBackground />
      <h1>Welcome to My Website</h1>
      <button>Click me</button>
    </div>
  );
}

export default App;
