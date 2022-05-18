import { useState } from "react";

//création du script FB
const injectFbSDKScript = () => {
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/fr_FR/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  };

  //fonction d'initialisation de FB
  
  export const useInitFbSDK = () => {
    const [isInitialized, setIsInitialized] = useState(false);
  
    // Initializes the SDK once the script has been loaded
    // https://developers.facebook.com/docs/javascript/quickstart/#loading
    window.fbAsyncInit = function () {
      window.FB.init({
        // Find your App ID on https://developers.facebook.com/apps/
        appId: "1102954973859392",
        cookie: true,
        xfbml: true,
        version: "v8.0",
      });
  
      window.FB.AppEvents.logPageView();
      setIsInitialized(true);
    };
  
    injectFbSDKScript();
  
    return isInitialized;
  };