import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import defultimage from "../src/images/defultsuccessimage.svg";
import pancardsuccess from "../src/images/pancardsuccess.svg";
import seniorsuccess from "../src/images/seniorcitizensuccess.svg";
import { Helmet } from "react-helmet";

const ApplicationStatus = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Hook to navigate programmatically
  const [service, setService] = useState("");
  const [content, setContent] = useState({
    message: "",
    whatsappLink: null,
    whatsappText: "",
    image: "",
  });

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const serviceParam = queryParams.get("service");
    setService(serviceParam); // Update the service state
  }, [location.search]); // Re-run this effect when location.search changes

  useEffect(() => {
    // Update content based on service
    switch (service) {
      case "Pancard":
        setContent({
          message:
            "We have received your PAN card application. Please upload your documents via WhatsApp for eKYC and eSign to process further.",
          whatsappLink: "https://wa.me/9980097315",
          whatsappText: "Upload your documents via WhatsApp",
          image: pancardsuccess,
        });
        break;
      case "SeniorCitizen":
        setContent({
          message:
            "We have received your Senior Citizen Card application. Please upload your documents via WhatsApp for eKYC and eSign to process further.",
          whatsappLink: "https://wa.me/9980097315",
          whatsappText: "Upload your documents via WhatsApp",
          image: seniorsuccess,
        });
        break;
      default:
        setContent({
          message:
            "We have received your request. One of our consultants will get back to you shortly.",
          whatsappLink: null,
          whatsappText: "",
          image: defultimage,
        });
    }
  }, [service]); // Re-run this effect when the service state changes

  // Function to navigate back to the home page
  const handleBackToHome = () => {
    navigate("/"); // This will navigate to the home page
  };

  return (
    <>
    <Helmet>
    <title>Request Success</title>

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
    </Helmet>
    <div className="status-container bg-white" style={{ marginLeft: "-1%" }}>
      <div className="content">
      <div className="text-content">
  <div className="checkmark-container">
    <div className="checkmark-circle">
      <span className="checkmark">&#10003;</span>
    </div>
  </div>
  <h1 className="header-text">Application Received</h1>
  
  <p className="message-text">{content.message}</p>

  {content.whatsappLink && (
    <a
      href={content.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-link"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp Logo"
        className="whatsapp-logo"
      />
      <span>{content.whatsappText}</span>
    </a>
  )}

  {/* Wrap button inside a div */}
  <div className="button-container">
    <button className="back-to-home" onClick={handleBackToHome} style={{margin:'1%'}}>
      Back to Home
    </button>
  </div>
</div>

        <div className="image-content">
          <img src={content.image} alt={`${service} Illustration`} />
        </div>
      </div>

      <style>
        {`
          .status-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            padding: 20px;
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
          }
          .content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 80%;
            max-width: 1000px;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          }
          .text-content {
            flex: 1;
            margin-right: 20px;
            text-align: center;
          }
          .checkmark-container {
            display: flex;
            justify-content: center;
            margin-bottom: 10px;
          }
          .checkmark-circle {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 80px;
            height: 80px;
            background-color: #25d366;
            border-radius: 50%;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            animation: fadeInCircle 0.8s ease-out forwards;
          }
          .checkmark {
            font-size: 48px;
            color: #ffffff;
            animation: fadeInCheckmark 0.8s ease-out forwards;
          }

          .button-container {
  width: 100%;
  display: flex;
  justify-content: center; /* Center align */
  margin-top: 20px; /* Add space above */
}

.back-to-home {
  display: block; /* Force it to be on a new line */
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.back-to-home:hover {
  background-color: #45a049;
}

          @keyframes fadeInCircle {
            from {
              opacity: 0;
              transform: scale(0.5);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          @keyframes fadeInCheckmark {
            from {
              opacity: 0;
              transform: scale(0.5);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          .header-text {
            font-size: 24px;
            margin-bottom: 16px;
            color: #333;
          }
          .message-text {
            font-size: 18px;
            margin-bottom: 16px;
            color: #333;
          }
          .whatsapp-link {
            display: inline-flex;
            align-items: center;
            text-decoration: none;
            color: #25d366;
            font-weight: bold;
            margin-top: 10px;
          }
          .whatsapp-logo {
            width: 24px;
            height: 24px;
            margin-right: 8px;
          }
          .image-content {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .image-content img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
          }
          .back-to-home {
            background-color: #4caf50;
            color: white;
            border: none;
            padding: 10px 20px;
            margin-top: 20px;
            font-size: 16px;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }
          .back-to-home:hover {
            background-color: #45a049;
          }

          /* Media Queries for responsiveness */
          @media (max-width: 768px) {
            .content {
              flex-direction: column;
              align-items: center;
            }
            .text-content {
              margin-right: 0;
              text-align: center;
              margin-bottom: 20px;
            }
            .image-content {
              margin-top: 20px;
            }
            .checkmark-circle {
              width: 60px;
              height: 60px;
            }
            .checkmark {
              font-size: 36px;
            }
            .header-text {
              font-size: 20px;
            }
            .message-text {
              font-size: 16px;
            }
            .back-to-home {
              font-size: 14px;
              padding: 8px 16px;
            }
          }

          @media (max-width: 480px) {
            .header-text {
              font-size: 18px;
            }
            .message-text {
              font-size: 14px;
            }
            .whatsapp-link {
              font-size: 14px;
            }
            .back-to-home {
              font-size: 12px;
              padding: 6px 12px;
            }
          }
        `}
      </style>
    </div>
    </>
  );
};

export default ApplicationStatus;
