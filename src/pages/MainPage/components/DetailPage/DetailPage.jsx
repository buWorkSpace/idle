import "./DetailPage.css";
import { X } from "lucide-react";

function DetailPage({ item, onClose }) {
  if (!item) return null;

  // 유튜브 영상 주소 처리
  const getVideoSrc = (url) => {
    if (url.includes("youtube.com/watch")) {
      const videoId = url.split("v=")[1]?.split("&")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  };

  const videoSrc = getVideoSrc(item.videoUrl);

  return (
    <div className="detail-overlay" onClick={onClose}>
      <div className="detail-modal" onClick={(e) => e.stopPropagation()}>

        <button className="D-close-btn" onClick={onClose}>
          <img 
            src={`${import.meta.env.BASE_URL}Close.png`} 
            alt="close" 
          />
        </button>

        <div className="video-wrapper">
          {videoSrc.includes("youtube.com/embed") ? (
            <iframe
              className="detail-video"
              src={videoSrc}
              title={item.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <video
              src={videoSrc}
              controls
              autoPlay
              muted
              className="detail-video"
            />
          )}
          
        </div>

        <h3 className="detail-title">{item.title}</h3>
        <p className="detail-desc">
          {item.description ||
            "Our customers are currently using and customizing the simple and convenient Fashion AI Plan"}
        </p>

        <button className="btn-primary">Service shortcuts</button>
        <button className="btn-link">View the source image</button>
      </div>
    </div>
  );
}

export default DetailPage;
