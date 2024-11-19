import React, { useEffect } from "react";
import Instafeed from "instafeed.js";

const InstagramFeed = () => {
  const token = process.env.NEXT_PUBLIC_INSTA_TOKEN;
  console.log('Token:', token);
  

  

useEffect(() => {
  const feed = new Instafeed({
    accessToken: token, // Access token from .env
    target: "instafeed", // The ID of the target div
    limit: 12, // Number of posts to display
    template: `
      <a href="{{link}}" target="_blank" rel="noopener noreferrer">
        <img src="{{image}}" alt="{{caption}}" style="width: 275px; height: 275px; margin-bottom: 5px;" />
      </a>
    `,
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
