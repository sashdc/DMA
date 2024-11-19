// components/FacebookFeed.js
import { useEffect } from 'react';

const FacebookFeed = () => {
  useEffect(() => {
    // Dynamically load the Facebook SDK for JavaScript
    if (typeof window !== 'undefined' && !window.FB) {
      window.fbAsyncInit = function () {
        FB.init({
          xfbml: true,
          version: 'v12.0',
        });
      };

      // Load the SDK
      ((d, s, id) => {
        let js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk.js';
        fjs.parentNode.insertBefore(js, fjs);
      })(document, 'script', 'facebook-jssdk');
    }
  }, []);

  return (
    <div
      className="fb-page"
      data-href="https://www.facebook.com/determinationMA"
      data-tabs="timeline"
      // data-width="700" // Set width or leave as "auto"
      // data-height="600" // Set height or leave blank to fit content
      data-small-header="false"
      data-adapt-container-width="true"
      data-hide-cover="false"
      data-show-facepile="true"
    >
      <blockquote
        cite="https://www.facebook.com/determinationMA"
        className="fb-xfbml-parse-ignore"
      >
        <a href="https://www.facebook.com/determinationMA">Your Facebook Page</a>
      </blockquote>
    </div>
  );
};

export default FacebookFeed;
