import { useEffect } from 'react';

const FacebookFeed = () => {
  useEffect(() => {
    // Dynamically load the Facebook SDK script
    if (typeof window !== 'undefined' && !window.FB) {
      // Ensure the SDK is only loaded once
      window.fbAsyncInit = function () {
        FB.init({
          xfbml: true, // Parse XFBML elements like the Facebook Page plugin
          version: 'v21.0', // Facebook SDK version
          appId: '780198726835349', // Replace with your own app ID
        });
      };

      // Add the SDK script to the page asynchronously
      const script = document.createElement('script');
      script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v21.0&appId=780198726835349';
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      document.body.appendChild(script); // Add script tag to the body
    }
  }, []);

  return (
    <>
      {/* Facebook Root Div for SDK initialization */}
      <div id="fb-root"></div>

      {/* Facebook Feed Plugin */}
      <div
        className="fb-page"
        data-href="https://www.facebook.com/determinationMA"
        data-tabs="timeline"
        data-width="500" // Set the width of the plugin
        data-height="500" // Let the height be auto based on content
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/determinationMA"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/determinationMA" target='blank'>Determination Martial Arts</a>
        </blockquote>
      </div>
    </>
  );
};

export default FacebookFeed;
