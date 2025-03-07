const VideoBackground = () => {
  return (
    <div className="video-container">
      <iframe
        src="https://www.youtube.com/embed/xNwQF0kYJjM?si=Dmq4PVMr-vpO_3D8&controls=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
