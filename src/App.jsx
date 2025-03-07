const VideoBackground = () => {
  return (
    <div className="video-container">
      <iframe
        src="https://www.youtube.com/embed/xNwQF0kYJjM?si=gNiYbEoS1iKxQLBQ&autoplay=1&mute=1&loop=1&playlist=xNwQF0kYJjM"
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; encrypted-media; fullscreen"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;

