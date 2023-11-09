import React, { useState } from 'react';
import millify from 'millify';

const VideoCard = ({ video }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {/* resim kısmı */}
      <div>
        <img
          className="rounded-lg w-full h-full object-contain"
          src={
            isHover && video.richThumbnail
              ? video.richThumbnail[0].url // hover'sa ve gif thumbnail varsa bu basılır
              : video.thumbnail[video.thumbnail.length - 1].url // değilse bu basılır
          }
        />
      </div>
      {/* detay alanı */}
      <div className="flex gap-4 mt-5">
        <img
          className="w-14 h-14 rounded-full"
          src={video.channelThumbnail[0].url}
        />
        <div>
          <h4 className="font-bold">{video.title}</h4>
          <p>{video.channelTitle}</p>
          <div className="flex gap-2">
            <p>{millify(video.viewCount)}</p>
            <p>{video.publishedTimeText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
