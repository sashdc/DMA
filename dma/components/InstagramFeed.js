import React, { useEffect } from "react";
import Instafeed from "instafeed.js";
import "./InstaFeed.css";

const InstagramFeed = () => {
  const token = process.env.NEXT_PUBLIC_INSTA_TOKEN;

  useEffect(() => {
    const feed = new Instafeed({
      accessToken: token, // Access token from .env
      target: "instafeed", // The ID of the target div
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

    feed.run();
  }, []);

  return (
    <div>
      <div id="instafeed" className="instagram-feed"></div>
    </div>
  );
};

export default InstagramFeed;
