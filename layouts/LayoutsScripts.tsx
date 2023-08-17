import Script from "next/script";

export default function Scripts() {
  return (
    <>
  {/* <!--Script Boostrap-React  --> */}
    <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossOrigin="anonymous"></script>
    <script
      src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
      crossOrigin="anonymous"></script>
    <script
    src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
     crossOrigin="anonymous"></script>
   {/* <!-- API Google --> */}
   <Script type="text/javascript" src="https://apis.google.com/js/api:client.js?onLoad=onGoogleScriptLoaded"></Script>
   <Script src="https://apis.google.com/js/platform.js?onload=onLoadCallback" async defer></Script>
   <Script src="https://www.gstatic.com/external_hosted/jquery2.min.js"></Script>
    <Script src="auth.js"></Script>
    <Script src="search.js"></Script>
    <Script src="https://apis.google.com/js/client.js?onload=googleApiClientReady"></Script>

      {/* <!-- Animation Scroll --> */}
      <iframe aria-hidden="true" id="ssIFrame_google" sandbox="allow-scripts allow-same-origin" 
      src="https://accounts.google.com/o/oauth2/iframe#origin=http%3A%2F%2Flocalhost%3A4200&amp;rpcToken=902946799.4541115&amp;clearCache=1"
       style={{position: 'absolute', width: '1px', height: '1px', left: '-9999px', display: 'none'}}></iframe>
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  <script>
    AOS.init();
  </script>
    </>
  )
}