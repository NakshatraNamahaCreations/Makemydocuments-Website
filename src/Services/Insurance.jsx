import React, { useState , useEffect} from 'react';
import "./InsurancePage.css";
import mmd1Image from "../images/MMD 1.svg";
import mmd2Image from "../images/MMD 2.svg";
import mmd3Image from "../images/MMD 3.svg";
import mmd4Image from "../images/MMD 4.svg";
import { useLayoutEffect } from "react";
import checklistIcon from "../images/notebook.svg";
import vehiclesIcon from "../images/image 29.svg";
import oneImage from "../images/1.svg";
import twoImage from "../images/2.svg";
import threeImage from "../images/3.svg";
import bikeImage from "../images/bike.svg";
import carImage from "../images/car.svg";
import tempoImage from "../images/tempo.svg";
import healthImage from "../images/health.svg";
import lifeImage from "../images/life.svg";
import { Helmet } from 'react-helmet';

const InsurancePage = () => {

  window.scrollTo({
    top: 0,
    behavior: 'smooth', 
  })

  // Array for insurance types
  const insuranceTypes = [
    { name: "Two - Wheeler", image: bikeImage, route: "/two-wheeler-insurance" },
    { name: "Four - Wheeler", image: carImage, route: "/car-insurance" },
    {
      name: "Commercial Vehicle",
      image: tempoImage,
      route: "/commercial-insurance-instruction",
    },
    { name: "Health", image: healthImage, route: "/health-insurance" },
    { name: "Life", image: lifeImage, route: "/life-insurance" },
  ];


  useLayoutEffect(() => {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, []);

  //  useEffect(() => {
  //     try {
  //       // Create and configure the script element
  //       const script = document.createElement("script");
  //       script.type = "text/javascript";
  //       script.async = true;
  //       script.src = `https://app.interakt.ai/kiwi-sdk/kiwi-sdk-17-prod-min.js?v=${new Date().getTime()}`;
        
  //       // Append the script to the document
  //       script.onload = () => {
  //         try {
  //           // Initialize the Kiwi SDK once the script is loaded
  //           if (window.kiwi) {
  //             window.kiwi.init("", "AMai21iIUS09oEEkxbBftGabLTzAZeI0", {});
  //           } else {
  //             console.error("Kiwi SDK failed to load.");
  //           }
  //         } catch (error) {
  //           console.error("Error initializing Kiwi SDK:", error);
  //         }
  //       };
  
  //       script.onerror = () => {
  //         console.error("Failed to load the Kiwi SDK script.");
  //       };
  
  //       document.body.appendChild(script);
  //     } catch (error) {
  //       console.error("Error adding the script:", error);
  //     }
  
  //     return () => {
  //       // Cleanup: Remove the script element
  //       const existingScript = document.querySelector(`script[src*="kiwi-sdk"]`);
  //       if (existingScript) {
  //         existingScript.parentNode.removeChild(existingScript);
  //       }
  //     };
  //   }, []);

  return (
    <>
    <Helmet>
    <title>Insurance Services - Buy/Renew Bike, Health, Life, Card Insurance Policies Online</title>

<meta name="description" content="Click here to get instant insurance coverage for bikes, health, life, and cards, with no paperwork, no inspections, and the ability to download policies instantly. 100% online process for all types of insurance."/>
<meta name="keywords" content="bike insurance, two wheeler insurance, health insurance, life insurance, car insurance, motorcycle insurance, scooter insurance, insurance renewal, bike insurance online, health insurance online, life insurance online, motorcycle policy, two wheeler insurance renewal, instant bike insurance, health and life policies, card insurance online, buy insurance online, renew insurance online, no inspection, paperless insurance"/>
<meta name="author" content="https://makemydocuments.com/insurance "/>
<link rel="canonical" href="https://www.makemydocuments.com/insurance" />
<meta name="rating" content="General"/>
<meta name="revisit-after" content="2 days"/>
<meta name="robots" content="ALL, index, follow"/>
<meta name="distribution" content="Global"/>
<meta name="rating" content="Safe For All"/>
<meta name="language" content="English"/>
<meta http-equiv="window-target" content="_top"/>
<meta http-equiv="pics-label" content="for all ages"/>
<meta name="rating" content="general"/>
<meta content="All, FOLLOW" name="GOOGLEBOTS"/>
<meta content="All, FOLLOW" name="YAHOOBOTS"/>
<meta content="All, FOLLOW" name="MSNBOTS"/>
<meta content="All, FOLLOW" name="BINGBOTS"/>
<meta content="all" name="Googlebot-Image"/>
<meta content="all" name="Slurp"/>
<meta content="all" name="Scooter"/>
<meta content="ALL" name="WEBCRAWLERS"/>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-QN4189EDG5"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QN4189EDG5');
        `}
      </script>
<script>
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '865961251883214');
            fbq('track', 'PageView');
          `}
        </script>
        <noscript>
          {`<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=865961251883214&ev=PageView&noscript=1" alt="Meta Pixel" />`}
        </noscript>

        <script>
          {`
            (function(w,d,t,r,u){
              var f,n,i;w[u]=w[u]||[],f=function(){
                var o={ti:"56340877", enableAutoSpaTracking: true};
                o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")
              },
              n=d.createElement(t),n.src=r,n.async=1,
              n.onload=n.onreadystatechange=function(){
                var s=this.readyState;
                s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)
              },
              i=d.getElementsByTagName(t)[0];
              i.parentNode.insertBefore(n,i)
            })(window,document,"script","//bat.bing.com/bat.js","uetq");
          `}
        </script>


<script>
{`!function(e,t,n,s,u,a){
  e.twq||(s=e.twq=function(){
    s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
  },s.version='1.1',s.queue=[],u=t.createElement(n),
  u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
  a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))
}(window,document,'script');
twq('config','onik3');`}
</script>

<script type="text/javascript">
{`_linkedin_partner_id = "7447820";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);`}
</script>

<script type="text/javascript">
{`(function(l) {
  if (!l) {
    window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
    window.lintrk.q=[];
  }
  var s = document.getElementsByTagName("script")[0];
  var b = document.createElement("script");
  b.type = "text/javascript"; b.async = true;
  b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
  s.parentNode.insertBefore(b, s);
})(window.lintrk);`}
</script>

<noscript dangerouslySetInnerHTML={{
  __html: `<img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=7447820&fmt=gif" />`
}} />

    </Helmet>
    <div style={{overflow:'hidden'}} >
      
    <div
     
    >
      <div  className="container-fluid-insurance-all"
      style={{
        background: "linear-gradient(182.42deg, #FCA505 2.01%, #FFFFFF)",
        // minHeight: "65vh",
        position: "relative",
        
        
      }} >
      <div
        className="row justify-content-start align-items-center"
        style={{ minHeight: "125%" , marginTop:''}}
      >
        {/* Left side: Text content */}
        <div className="col-12 col-md-6 text-left" >
          <div className="text-content">
            <h1>Protect Your Future with Ease</h1>
            <p>Insurance applications made simple and stress-free.</p>
          </div>

          {/* Checklist icon at the bottom of the left side */}
          <img
            src={checklistIcon}
            alt="Checklist Icon"
            className="checklist-icon d-none d-lg-block"
            style={{maxWidth:'293px', marginTop:'6%'}}
          />
        </div>

        {/* Right side: Vehicles and Phone Icon */}
        <div className="col-12 col-md-6 text-center vehical-image-container">
          <img
            src={vehiclesIcon}
            alt="Vehicles and Phone"
            className="img-fluid"
          />
        </div>
      </div>
      </div>

      {/* Insurance type selection */}
      <div className="insurance-cards-container row justify-content-center">
        <div className="text-center mt-4">
          <h2 className="insurance-section-title">
            Pick the Type of Insurance
          </h2>
        </div>
        {insuranceTypes.map((type, index) => (
          <div
            key={index}
            className="insurance-card col-6 col-md-3 text-center p-3"
            onClick={() => (window.location.href = type.route)}
          >
            <div className="card-content">
              <img
                src={type.image}
                alt={type.name}
                className="insurance-icon "
              />
              <h5 className="insurance-title">{type.name}</h5>
              <button className="get-quotes-btn">GET QUOTES</button>
            </div>
          </div>
        ))}
      </div>

      <div
  className="associated-with-section text-center"
  style={{
    backgroundColor: "#FFF2DA",
    width: "100%",
    height: "auto",
    padding: "30px 0", // Adjusted for better responsiveness
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <h3
    className="associated-title"
    style={{ fontWeight: "bold", marginBottom: "20px" }}
  >
    ASSOCIATED WITH
  </h3>
  <div className="row justify-content-center">
    <div className="col-6 col-md-2">
      <img
        src={mmd1Image}
        alt="MMD 1"
        className="associated-img img-fluid"
      />
    </div>
    <div className="col-6 col-md-2">
      <img
        src={mmd2Image}
        alt="MMD 2"
        className="associated-img img-fluid"
      />
    </div>
    <div className="col-6 col-md-2">
      <img
        src={mmd3Image}
        alt="MMD 3"
        className="associated-img img-fluid"
      />
    </div>
    <div className="col-6 col-md-2">
      <img
        src={mmd4Image}
        alt="MMD 4"
        className="associated-img img-fluid"
      />
    </div>
  </div>
  <button
    className="btn btn-primary mt-4"
    style={{
      backgroundColor: "#FF7F50", // Coral color
      border: "none",
      padding: "10px 20px",
      fontSize: "16px",
      fontWeight: "bold",
      borderRadius: "5px",
    }}
    onClick={() => window.location.href = "/our_partners"} // Redirects to the partners page
  >
    View All Partners
  </button>
</div>

      <br />
    </div>
    </div>
    </>
  );
};

export default InsurancePage;
