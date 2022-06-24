import { useState, useEffect } from "react";
import data from "./videoData";
import "./video.css";
// import close from "../../assets/close.png";
import CloseIcon from "@mui/icons-material/Close";

export default function VideoComp() {
  const [video, setVideo] = useState(0);
  function handleVideo(id) {
    setVideo(id);
  }
  function handleClose() {
    setVideo(0);
  }

  return (
    <div>
      <ul>
        {data.map((item) => {
          return (
            <li key={item.id} onClick={() => handleVideo(item.id)}>
              <img src={item.picture} alt={`pictue__${item.id}`} />
            </li>
          );
        })}
      </ul>
      {video && (
        <div className={video ? "trailer watch" : "trailer"}>
          <video class="bg-video__content" autoplay={true} controls>
            <source src={data[video - 1].video} type="video/mp4" />

            {/*<source src="/img/video.webm" type="video/webm"/> 
               <!-- for video suitable for background visit coverr.co 
               your browser is not supportde! */}
          </video>
          <CloseIcon class="close__video" onClick={handleClose} />
        </div>
      )}
    </div>
  );
}
