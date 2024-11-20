import React, { useEffect, useRef } from "react";
import Instafeed from "instafeed.js";
import "./InstaFeed.css";

const InstagramFeed = () => {
  const token = process.env.NEXT_PUBLIC_INSTA_TOKEN;
  const feedRef = useRef(null);

  useEffect(() => {
    // Only initialize Instafeed if it's not already running
    if (feedRef.current && !feedRef.current.instafeed) {
      const feed = new Instafeed({
        accessToken: token, // Access token from .env
        target: feedRef.current, // Target the div reference
        limit: 12, // Number of posts to display
        template: `
          <a href="{{link}}" target="_blank" rel="noopener noreferrer" class="insta-post-wrapper">
            <div class="insta-post-container">
              <img src="{{image}}" alt="{{caption}}" class="insta-post" />
              <div class="insta-caption">{{caption}}</div>
            </div>
          </a>
        `,
        filter: (image) => {
          // Remove hashtags from the caption
          if (image.caption) {
            image.caption = image.caption.replace(/#[^\s#]+/g, "").trim();
          }
          return image;
        },
      });

      feedRef.current.instafeed = feed; // Store the feed instance in the ref
      feed.run(); // Run the feed
    }
  }, [token]); // Effect only runs on the first mount

  return (
    <div>
      <div id="instafeed" ref={feedRef} className="instagram-feed"></div>
    </div>
  );
};

export default InstagramFeed;
