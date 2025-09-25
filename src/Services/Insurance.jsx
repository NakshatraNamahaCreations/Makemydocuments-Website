import React, { useState , useEffect} from 'react';
import "./InsurancePage.css";
import mmd1Image from "../images/MMD 1.svg";
import mmd2Image from "../images/MMD 2.svg";
import mmd3Image from "../images/MMD 3.svg";
import mmd4Image from "../images/MMD 4.svg";
import { useLayoutEffect } from "react";
import bannerimage from "../images/InsurenceBanner.png";
import checklistIcon from "../images/notebook.svg";
import vehiclesIcon from "../images/image 29.svg";
import oneImage from "../images/1.png";
import twoImage from "../images/2.svg";
import threeImage from "../images/3.svg";
import bikeImage from "../images/bike.svg";
import carImage from "../images/car.svg";
import tempoImage from "../images/tempo.svg";
import healthImage from "../images/health.svg";
import lifeImage from "../images/life.svg";
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const InsurancePage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  // window.scrollTo({
  //   top: 0,
  //   behavior: 'smooth', 
  // })

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


  const faqs = [
    {
      question: "Can I renew my two-wheeler or four-wheeler insurance online?",
 
      answer:
        "Yes, you can renew your vehicle insurance in just a few clicks through our online portal.",
    },
    {
      question: "How long does it take to get the insurance policy?",
      answer:
        "Once payment is made, you’ll receive your policy instantly via email or WhatsApp.",
    },
    {
      question: "Do I need to submit physical documents?",
      answer: "No. You can upload documents digitally, making the entire process seamless.",
    },
    {
      question: "Can I compare multiple policies before buying?",
     answer: "Absolutely! We provide multiple quotes so you can choose the best plan at the best price.",
    },
    {
      question: "Do you provide assistance in case of claims?",
      answer:
        "Yes, our team will guide you through the entire claim process and connect you with your insurer.",
    },
    {
      question: "What if my vehicle insurance has expired?",
      answer: "You can still renew it online. In some cases, a vehicle inspection may be required.",
    },
    {
      question: "Can I buy life or health insurance for my family?",
      answer:
        "Yes, we offer health and life insurance policies for individuals, couples, and families.",
    },
    {
      question: "Are your services available across India?",
      answer:
        "Yes, Make My Documents offers insurance services to customers across India.",
    },
    {
      question: "Which insurance companies do you work with?",
      answer:
        "We partner with top insurers like HDFC Ergo, ICICI Lombard, Bajaj Allianz, and more.",
    },
    {
      question: "Do you charge extra for your services?",
      answer:
        "No, there are no hidden charges. You pay only for the insurance premium.",
    },
  ];
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
    <Helmet>
    <title>Buy & Renew Insurance Online | Bike, Health, Life, Card</title>

<meta name="description" content=" Buy or renew bike, health, life & card insurance online. Fast approvals, secure process, and instant policy downloads without extra steps - Apply online"/>
<meta name="keywords" content="bike insurance, two wheeler insurance, health insurance, life insurance, car insurance, motorcycle insurance, scooter insurance, insurance renewal, bike insurance online, health insurance online, life insurance online, motorcycle policy, two wheeler insurance renewal, instant bike insurance, health and life policies, card insurance online, buy insurance online, renew insurance online, no inspection, paperless insurance"/>
<meta name="author" content="https://www.makemydocuments.com/insurance "/>
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
     <div
            style={{
              backgroundColor: "#f4f4f4",
              padding: "15px 25px",
              marginTop: "10%",
            }}
            className="breadcrumb-title"
          >
            <nav aria-label="breadcrumb" style={{ marginTop: "1%" }}>
              <ol className="breadcrumb mb-0">
                <li
                  className="breadcrumb-item"
                  style={{ fontWeight: "bold", fontSize: "14px" }}
                >
                  <Link to="/" style={{ color: "#007bff", textDecoration: "none" }}>
                    Home
                  </Link>
                </li>
                <li
                  className="breadcrumb-item active"
                  aria-current="page"
                  style={{ fontWeight: "bold", fontSize: "14px" }}
                >
                 Insurance 
                </li>
              </ol>
            </nav>
          </div>
    
    <div style={{overflow:'hidden'}} >
        <div style={{ width: "100%" }} className="d-none d-lg-block">
                    <div
                      style={{
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        minHeight: "65vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      {/* Container for Image */}
                      <div
                        style={{
                          position: "absolute",
                          width: "100%",
                          height: "100%",
                          zIndex: 1,
                        }}
                      >
                        <img
                          src={bannerimage}
                          alt="Hong Kong Visa"
                          style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "cover",
                          }}
                        />
                      </div>
      
                      {/* Container for Text */}
                      <div
                        style={{
                          position: "relative",
                          zIndex: 2,
                          textAlign: "left",
                          color: "#333",
                          padding: "20px",
                          marginRight: "auto",
                        }}
                      >
                        <h1
                          style={{
                            fontSize: "36px",
                            fontWeight: "bold",
                            margin: 0,
                          }}
                        >
                          Protect Your Future with Ease
                        </h1>
      
                        {/* Approval Rate Badge */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            // backgroundColor: "#e6f7fa",
                            padding: "5px 10px",
                            borderRadius: "5px",
                            marginTop: "10px",
                            width: "fit-content",
                          }}
                        >
                          {/* <span
                            style={{
                              fontSize: "18px",
                              color: "#00c4cc",
                              marginRight: "5px",
                            }}
                          >
                            ⭐
                          </span> */}
                          <span
                            style={{
                              fontSize: "14px",
                              color: "#000000",
                              fontWeight: "bold",
                            }}
                          >
                           Insurance applications made simple and stress-free.
                          </span>
                        </div>
      
                     
                 
                      </div>
                    </div>
                  </div>
                    <div style={{ width: "100%" }} className="d-block d-lg-none">
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        overflow: "hidden",
                        // marginTop: "37%",
                      }}
                    >
                      {/* Image */}
                      <img
                        src={bannerimage}
                        alt="Hong Kong Visa"
                        style={{
                          width: "100%",
                          height: "150",
                          objectFit: "cover",
                        }}
                      />
      
                      {/* Text Container */}
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))",
                          color: "#fff",
                          padding: "10px",
                        }}
                      >
                        <p
                          style={{
                            fontSize: "14px",
                            fontWeight: "bold",
                            marginBottom: "8px",
                          }}
                        >
                        Protect Your Future with Ease
                        </p>
      
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            // backgroundColor: "#e6f7fa",
                            color: "#fff",
                            padding: "3px 8px",
                            borderRadius: "5px",
                            fontSize: "10px",
                            fontWeight: "500",
                            marginBottom: "10px",
                            width: "fit-content",
                          }}
                        >
                          {/* ⭐{" "} */}
                          <span >
                           Insurance applications made simple <br />and stress-free.
                          </span>
                        </div>
      
           
                      </div>
                    </div>
                  </div>

    <div
     
    >
      {/* <div  className="container-fluid-insurance-all"
      style={{
        background: "linear-gradient(182.42deg, #FCA505 2.01%, #FFFFFF)",
        minHeight: "65vh",
        position: "relative",
        
        
      }} >
      <div
        className="row justify-content-start align-items-center"
        style={{ minHeight: "125%", padding:"20px" , margin:"0"}}
      >
     
        <div className="col-12 col-md-6 text-left">
          <div className="text-content ">
            <h2> <strong>Protect Your Future with Ease</strong> </h2>
            <p>Insurance applications made simple and stress-free.</p>
          </div>

          <img
            src={checklistIcon}
            alt="Checklist Icon"
            className="checklist-icon d-none d-lg-block"
            style={{maxWidth:'293px', marginTop:'6%'}}
          />
        </div>

        
        <div className="col-12 col-md-6 text-center vehical-image-container">
          <img
            src={vehiclesIcon}
            alt="Vehicles and Phone"
            className="img-fluid"
          />
        </div>
      </div>
      </div> */}

        
      
                
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
          <br /> 
          
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
  <div className="col-md-12  d-none d-lg-block"
                                        style={{ padding: "20px", backgroundColor: "#f0f4f8", margin: "10px auto", width: "80%", }}
                                    >
                                        <div
                                            style={{ padding: "20px", backgroundColor: "#f9fafb" }}
                                        >
                                            <h4
                                                style={{
                                                    color: "#FF6F20",
                                                    marginBottom: "20px",
                                                    fontWeight: "bold",
                                                    fontSize: "24px",
                                                }}
                                            >
                                                Our Client Reviews
                                            </h4>
                                            <div
                                                id="reviewCarousel"
                                                className="carousel slide"
                                                data-bs-ride="carousel"
                                                data-bs-interval="3000"
                                            >
                                                <div className="carousel-inner">
                                                    <div className="carousel-item active">
                                                        <div className="d-flex justify-content-between">
                                                            <div
                                                                style={{
                                                                    width: "30%",
                                                                    padding: "20px",
                                                                    backgroundColor: "#fff",
                                                                    borderRadius: "8px",
                                                                    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                                                                    marginRight: "10px",
                                                                }}
                                                            >
                                                                <div style={{ marginBottom: "10px" }}>
                                                                    <div style={{ color: "#FFAA00" }}>★★★★★</div>
                                                                </div>
                                                                <p
                                                                    style={{
                                                                        color: "#4B5563",
                                                                        marginBottom: "10px",
                                                                        fontSize: "14px",
                                                                    }}
                                                                > "Renewing my bike insurance with Make My Documents was so simple! Got multiple quotes and downloaded my policy"
                                                                </p>
                                                                <div
                                                                    style={{
                                                                        display: "flex",
                                                                        alignItems: "center",
                                                                        marginTop: "auto",
                                                                    }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            width: "32px",
                                                                            height: "32px",
                                                                            borderRadius: "50%",
                                                                            backgroundColor: "#E5E7EB",
                                                                            color: "#fff",
                                                                            fontWeight: "bold",
                                                                            display: "flex",
                                                                            justifyContent: "center",
                                                                            alignItems: "center",
                                                                            marginRight: "10px",
                                                                        }}
                                                                    >
                                                                        N
                                                                    </div>
                                                                    <span
                                                                        style={{
                                                                            fontWeight: "bold",
                                                                            fontSize: "14px",
                                                                            color: "#374151",
                                                                        }}
                                                                    >
                                                                       Ramesh K.

                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div
                                                                style={{
                                                                    width: "30%",
                                                                    padding: "20px",
                                                                    backgroundColor: "#fff",
                                                                    borderRadius: "8px",
                                                                    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                                                                    marginRight: "10px",
                                                                }}
                                                            >
                                                                <div style={{ marginBottom: "10px" }}>
                                                                    <div style={{ color: "#FFAA00" }}>★★★★★</div>
                                                                </div>
                                                                <p
                                                                    style={{
                                                                        color: "#4B5563",
                                                                        marginBottom: "10px",
                                                                        fontSize: "14px",
                                                                    }}
                                                                >
                                                                    "Excellent customer support and clear guidance. I was able to switch to a better health plan that suited my family’s needs perfectly."
                                                                </p>
                                                                <div
                                                                    style={{
                                                                        display: "flex",
                                                                        alignItems: "center",
                                                                        marginTop: "auto",
                                                                    }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            width: "32px",
                                                                            height: "32px",
                                                                            borderRadius: "50%",
                                                                            backgroundColor: "#E5E7EB",
                                                                            color: "#fff",
                                                                            fontWeight: "bold",
                                                                            display: "flex",
                                                                            justifyContent: "center",
                                                                            alignItems: "center",
                                                                            marginRight: "10px",
                                                                        }}
                                                                    >
                                                                        R
                                                                    </div>
                                                                    <span
                                                                        style={{
                                                                            fontWeight: "bold",
                                                                            fontSize: "14px",
                                                                            color: "#374151",
                                                                        }}
                                                                    >
                                                                     Ananya P.

                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div
                                                                style={{
                                                                    width: "30%",
                                                                    padding: "20px",
                                                                    backgroundColor: "#fff",
                                                                    borderRadius: "8px",
                                                                    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                                                                }}
                                                            >
                                                                <div style={{ marginBottom: "10px" }}>
                                                                    <div style={{ color: "#FFAA00" }}>★★★★★</div>
                                                                </div>
                                                                <p
                                                                    style={{
                                                                        color: "#4B5563",
                                                                        marginBottom: "10px",
                                                                        fontSize: "14px",
                                                                    }}
                                                                >
                                                                    "Very professional service! I renewed my car insurance without any hassle, and the team followed up to ensure I got my documents instantly"
                                                                </p>
                                                                <div
                                                                    style={{
                                                                        display: "flex",
                                                                        alignItems: "center",
                                                                        marginTop: "auto",
                                                                    }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            width: "32px",
                                                                            height: "32px",
                                                                            borderRadius: "50%",
                                                                            backgroundColor: "#E5E7EB",
                                                                            color: "#fff",
                                                                            fontWeight: "bold",
                                                                            display: "flex",
                                                                            justifyContent: "center",
                                                                            alignItems: "center",
                                                                            marginRight: "10px",
                                                                        }}
                                                                    >
                                                                        S
                                                                    </div>
                                                                    <span
                                                                        style={{
                                                                            fontWeight: "bold",
                                                                            fontSize: "14px",
                                                                            color: "#374151",
                                                                        }}
                                                                    >
                                                                      Vivek S.
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="carousel-item">
                                                        <div className="d-flex justify-content-between">
                                                            <div
                                                                style={{
                                                                    width: "30%",
                                                                    padding: "20px",
                                                                    backgroundColor: "#fff",
                                                                    borderRadius: "8px",
                                                                    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                                                                    marginRight: "10px",
                                                                }}
                                                            >
                                                                <div style={{ marginBottom: "10px" }}>
                                                                    <div style={{ color: "#FFAA00" }}>★★★★★</div>
                                                                </div>
                                                                <p
                                                                    style={{
                                                                        color: "#4B5563",
                                                                        marginBottom: "10px",
                                                                        fontSize: "14px",
                                                                    }}
                                                                >
                                                                    "The best part about Make My Documents is their quick response. I received quotes for my commercial vehicle insurance within an hour and finalized everything online."
                                                                </p>
                                                                <div
                                                                    style={{
                                                                        display: "flex",
                                                                        alignItems: "center",
                                                                        marginTop: "auto",
                                                                    }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            width: "32px",
                                                                            height: "32px",
                                                                            borderRadius: "50%",
                                                                            backgroundColor: "#E5E7EB",
                                                                            color: "#fff",
                                                                            fontWeight: "bold",
                                                                            display: "flex",
                                                                            justifyContent: "center",
                                                                            alignItems: "center",
                                                                            marginRight: "10px",
                                                                        }}
                                                                    >
                                                                        M
                                                                    </div>
                                                                    <span
                                                                        style={{
                                                                            fontWeight: "bold",
                                                                            fontSize: "14px",
                                                                            color: "#374151",
                                                                        }}
                                                                    >
                                                                      Suresh M.
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div
                                                                style={{
                                                                    width: "30%",
                                                                    padding: "20px",
                                                                    backgroundColor: "#fff",
                                                                    borderRadius: "8px",
                                                                    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                                                                }}
                                                            >
                                                                <div style={{ marginBottom: "10px" }}>
                                                                    <div style={{ color: "#FFAA00" }}>★★★★★</div>
                                                                </div>
                                                                <p
                                                                    style={{
                                                                        color: "#4B5563",
                                                                        marginBottom: "10px",
                                                                        fontSize: "14px",
                                                                    }}
                                                                >
                                                                    "Applying for travel insurance was super easy! The team explained every detail and I had my policy in hand the same day."
                                                                </p>

                                                                <div
                                                                    style={{
                                                                        display: "flex",
                                                                        alignItems: "center",
                                                                        marginTop: "auto",
                                                                    }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            width: "32px",
                                                                            height: "32px",
                                                                            borderRadius: "50%",
                                                                            backgroundColor: "#E5E7EB",
                                                                            color: "#fff",
                                                                            fontWeight: "bold",
                                                                            display: "flex",
                                                                            justifyContent: "center",
                                                                            alignItems: "center",
                                                                            marginRight: "10px",
                                                                        }}
                                                                    >
                                                                        K
                                                                    </div>
                                                                    <span
                                                                        style={{
                                                                            fontWeight: "bold",
                                                                            fontSize: "14px",
                                                                            color: "#374151",
                                                                        }}
                                                                    >
                                                                        Priya R.
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div
                                                                style={{
                                                                    width: "30%",
                                                                    padding: "20px",
                                                                    backgroundColor: "#fff",
                                                                    borderRadius: "8px",
                                                                    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                                                                }}
                                                            >
                                                                <div style={{ marginBottom: "10px" }}>
                                                                    <div style={{ color: "#FFAA00" }}>★★★★★</div>
                                                                </div>
                                                                <p
                                                                    style={{
                                                                        color: "#4B5563",
                                                                        marginBottom: "10px",
                                                                        fontSize: "14px",
                                                                    }}
                                                                >
                                                                    "Make My Documents made my two-wheeler insurance renewal seamless. No paperwork headaches and instant confirmation!"
                                                                </p>
                                                                <div
                                                                    style={{
                                                                        display: "flex",
                                                                        alignItems: "center",
                                                                        marginTop: "auto",
                                                                    }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            width: "32px",
                                                                            height: "32px",
                                                                            borderRadius: "50%",
                                                                            backgroundColor: "#E5E7EB",
                                                                            color: "#fff",
                                                                            fontWeight: "bold",
                                                                            display: "flex",
                                                                            justifyContent: "center",
                                                                            alignItems: "center",
                                                                            marginRight: "10px",
                                                                        }}
                                                                    >
                                                                          R
                                                                    </div>
                                                                    <span
                                                                        style={{
                                                                            fontWeight: "bold",
                                                                            fontSize: "14px",
                                                                            color: "#374151",
                                                                        }}
                                                                    >
                                                                      Rajesh T.
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Carousel Controls */}
                                                <button
                                                    className="carousel-control-prev"
                                                    type="button"
                                                    data-bs-target="#reviewCarousel"
                                                    data-bs-slide="prev"
                                                    style={{
                                                        width: "40px",
                                                        height: "40px",
                                                        top: "45%",
                                                        left: "-30px",
                                                        backgroundColor: "#fff",
                                                        borderRadius: "50%",
                                                        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                                                        border: "none",
                                                    }}
                                                >
                                                    <span
                                                        className="carousel-control-prev-icon"
                                                        aria-hidden="true"
                                                        style={{ filter: "invert(1)", width: "20px", height: "20px" }}
                                                    ></span>
                                                    <span className="visually-hidden">Previous</span>
                                                </button>

                                                <button
                                                    className="carousel-control-next"
                                                    type="button"
                                                    data-bs-target="#reviewCarousel"
                                                    data-bs-slide="next"
                                                    style={{
                                                        width: "40px",
                                                        height: "40px",
                                                        top: "45%",
                                                        right: "-30px",
                                                        backgroundColor: "#fff",
                                                        borderRadius: "50%",
                                                        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                                                        border: "none",
                                                    }}
                                                >
                                                    <span
                                                        className="carousel-control-next-icon"
                                                        aria-hidden="true"
                                                        style={{ filter: "invert(1)", width: "20px", height: "20px" }}
                                                    ></span>
                                                    <span className="visually-hidden">Next</span>
                                                </button>

                                            </div>
                                        </div>
                                         </div>
                                            {window.innerWidth <= 768 && (
                                        <div style={{ padding: "20px", backgroundColor: "#f0f4f8" }} className="d-block d-lg-none">
                                            <div style={{ padding: "20px", backgroundColor: "#f9fafb" }}>
                                                <h4
                                                    style={{
                                                        color: "#007bff",
                                                        marginBottom: "20px",
                                                        fontWeight: "bold",
                                                        fontSize: "22px",
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    Our Client Reviews
                                                </h4>

                                                <div
                                                    id="mobileReviewCarousel"
                                                    className="carousel slide"
                                                    data-bs-ride="carousel"
                                                    data-bs-interval="4000"
                                                >
                                                    <div className="carousel-inner">
                                                        {[
                                                            {
                                                                name: "Ramesh K",
                                                                initial: "V",
                                                                review:
                                                                    "Renewing my bike insurance with Make My Documents was so simple! Got multiple quotes and downloaded my policy",
                                                            },
                                                            {
                                                                name: "Ananya P.",
                                                                initial: "H",
                                                                review:
                                                                    "Excellent customer support and clear guidance. I was able to switch to a better health plan that suited my family’s needs perfectly",
                                                            },
                                                             {
                                                                name: "Vivek S.",
                                                                initial: "K",
                                                                review:
                                                                    "Very professional service! I renewed my car insurance without any hassle, and the team followed up to ensure I got my documents instantly",
                                                            },
                                                             {
                                                                name: "Suresh M",
                                                                initial: "S",
                                                                review:
                                                                    "The best part about Make My Documents is their quick response. I received quotes for my commercial vehicle insurance within an hour and finalized everything online.",
                                                            },
                                                             {
                                                                name: "Priya R.",
                                                                initial: "R",
                                                                review:
                                                                    "Applying for travel insurance was super easy! The team explained every detail and I had my policy in hand the same day.",
                                                            },
                                                             {
                                                                name: "Rajesh T",
                                                                initial: "T",
                                                                review:
                                                                    "Make My Documents made my two-wheeler insurance renewal seamless. No paperwork headaches and instant confirmation!",
                                                            },
                                                         
                                                        ].map((item, index) => (
                                                            <div
                                                                className={`carousel-item ${index === 0 ? "active" : ""}`}
                                                                key={index}
                                                            >
                                                                <div
                                                                    style={{
                                                                        backgroundColor: "#fff",
                                                                        padding: "15px",
                                                                        borderRadius: "8px",
                                                                        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                                                                        marginBottom: "10px",
                                                                    }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            color: "#FFAA00",
                                                                            fontSize: "18px",
                                                                            marginBottom: "5px",
                                                                        }}
                                                                    >
                                                                        ★★★★★
                                                                    </div>
                                                                    <p
                                                                        style={{
                                                                            color: "#4B5563",
                                                                            fontSize: "14px",
                                                                            marginBottom: "10px",
                                                                        }}
                                                                    >
                                                                        {item.review}
                                                                    </p>
                                                                    <div style={{ display: "flex", alignItems: "center" }}>
                                                                        <div
                                                                            style={{
                                                                                width: "32px",
                                                                                height: "32px",
                                                                                borderRadius: "50%",
                                                                                backgroundColor: "#E5E7EB",
                                                                                display: "flex",
                                                                                alignItems: "center",
                                                                                justifyContent: "center",
                                                                                marginRight: "10px",
                                                                                fontWeight: "bold",
                                                                                color: "#000",
                                                                            }}
                                                                        >
                                                                            {item.initial}
                                                                        </div>
                                                                        <span
                                                                            style={{
                                                                                fontWeight: "bold",
                                                                                fontSize: "14px",
                                                                                color: "#374151",
                                                                            }}
                                                                        >
                                                                            {item.name}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    {/* Optional carousel controls */}
                                                    <button
                                                        className="carousel-control-prev"
                                                        type="button"
                                                        data-bs-target="#mobileReviewCarousel"
                                                        data-bs-slide="prev"
                                                    >
                                                        <span className="carousel-control-prev-icon" aria-hidden="true" style={{ marginLeft: '-120%' }}></span>
                                                    </button>
                                                    <button
                                                        className="carousel-control-next"
                                                        type="button"
                                                        data-bs-target="#mobileReviewCarousel"
                                                        data-bs-slide="next"
                                                    >
                                                        <span className="carousel-control-next-icon" aria-hidden="true" style={{ marginRight: '-80%' }}></span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}




      <br />


        <div style={{   margin: "14px auto",
          padding: "20px",
          background: "#FFFFFF",
          borderRadius: "10px",
          width: "80%",}}>
          <h1 className="faq-tag-title-h3">
            <strong>Insurance Services – Buy/Renew Insurance Online</strong>
          </h1>
          <p style={{textAlign:'left'}}>
            Insurance is a big step in ensuring your future and the safety of people you care about. Through challenging situations, a proper coverage plan of the car, health or family will provide you with monetary safety. Make My Documents is your best bet to getting an easy and straightforward insurance plan. In only a few minutes, you can obtain quotes, evaluate policies, and buy insurance with no trouble.
          </p>

          <h2 className="faq-tag-title-h3" style={{textAlign:'left', fontSize: "22px"}}>
            <strong>Benefits of Insurance</strong>
          </h2>
       <p  style={{textAlign:'left'}} >
           Insurance is definitely not just a mandatory requirement by law—it should be viewed as a very important financial instrument that guarantees both your future and your loved ones while keeping your mind at rest in the middle of life’s changes. Diseases, an accident with a car, theft, or a natural catastrophe–when fitted with the perfect insurance policy, there is never a moment where you are left caught off guard. In Make My Documents, we present to you a variety of insurance programs composed to give you the maximum potential of protection and of a stressless life with cheap premiums.
          </p>
      
        <h3  style={{textAlign:'left', fontSize: "20px"}}>
            <strong>Financial Protection </strong>
          </h3>
<p  style={{textAlign:'left'}}>
          Insurance works as the core financial prosthesis that will be covering the unexpected costs that come with the likes of, medical bills, the accidental destruction of your property, and the stealing of your valuable assets. Health, vehicle, and life policies with the word comprehensive in them will go a long way in securing your finances and in avoiding the turning into suddenly financial burdens.
          </p>
             <h3  style={{textAlign:'left', fontSize: "20px"}}>
            <strong>Risk Management </strong>
          </h3>
<p  style={{textAlign:'left'}}>
          For an individual, family, or business, having a well-chosen insurance plan is like having a shield that will nearly eliminate all the risks. Be it a vehicle accident, hospitalization, or property damage, insurance will always let you bounce back quickly without breaking your bank account
          </p>
             <h3  style={{textAlign:'left', fontSize: "20px"}}>
            <strong>Peace of Mind </strong>
          </h3>
<p  style={{textAlign:'left'}}>
          After knowing that your car, bike, health, and family are all covered under a solid insurance plan, you wont have any trouble living and travelling with confidence. Make My Documents will give you the correct cover for every need thus eliminating panic and uncertainty.
          </p>
             <h3  style={{textAlign:'left', fontSize: "20px"}}>
            <strong>Legal Compliance </strong>
          </h3>
<p  style={{textAlign:'left'}}>
          The Indian law states that owning a car without insurance is illegal and as for business, the latter helps you to meet the standards set by the authorities. Our platform will do all the work for you in the process of staying compliant by simply renewing your policies online and avoiding any kind of punishment or legal trouble.
          </p>
             <h3  style={{textAlign:'left', fontSize: "20px"}}>
            <strong> Future Security</strong>
          </h3>
<p  style={{textAlign:'left'}}>
          Life and health insurance are a great way for your family to get the needed financial assistance in the unfortunate cases of emergencies. Basically, through temporary schemes, health care, and mix-investment policies, a person is made capable to continue the family flow even in unpredicted events.
          </p>
          <h2 className="faq-tag-title-h3" style={{textAlign:'left', fontSize: "22px"}}>
            <strong>Types of Insurance We Offer</strong>
          </h2>
        <br />
        <h3  style={{textAlign:'left', fontSize: "20px"}}>
            <strong> Two-Wheeler Insurance</strong>
          </h3>
<p  style={{textAlign:'left'}}>
          Insure your two-wheeler against mishaps, theft, the forces of nature, and other liabilities with a comprehensive two-wheeler insurance plan. You can generate the duplicate policy online in just a few minutes, along with the premium amount, and also get the benefit of a cashless claim settlement procedure at any of your automobile network garages. Enjoy a safe ride because we are always there for you.

          </p>
             <h3  style={{textAlign:'left', fontSize: "20px"}}>
            <strong>Four-Wheeler Insurance </strong>
          </h3>
<p  style={{textAlign:'left'}}>
          With our car insurance package, you are safe and secure against the risks of the accident, the theft of your vehicle, fire, and any other type of calamity. Also included are complete comprehensive cover and third-party injury cover. It is our pleasure to provide assistance in online buying or renewing of car insurance where you can get competitive premiums, a policy for instant downloading, and get support anytime.
          </p>
             <h3  style={{textAlign:'left', fontSize: "20px"}}>
            <strong>Commercial Vehicle Insurance </strong>
          </h3>
<p  style={{textAlign:'left'}}>
          Commercial vehicle insurance is a great way to protect your business investments and equipment such as trucks, vans, cabs, as well as delivery vehicles. Our insurance plans will cover you against any damage, theft, or accidents, thus ensuring smooth business operations and protecting your revenue and assets.
          </p>
             <h3  style={{textAlign:'left', fontSize: "20px"}}>
            <strong> Health Insurance</strong>
          </h3>
<p  style={{textAlign:'left'}}>
          Sign up for a reasonably priced yet comprehensive health insurance plan that includes hospitalization, surgery, treatment for very serious diseases (such as cancer), and medical emergencies all at a reasonable rate. Moreover, there is an option for individuals and families to buy medical insurance plans to make sure the people you care about have the best treatment and the financial burden is minimized.
          </p>
             <h3  style={{textAlign:'left', fontSize: "20px"}}>
            <strong> Life Insurance</strong>
          </h3>
<p  style={{textAlign:'left'}}>
          The most relieving part of life, other than the presence of your loved ones, is assuring that your absence will not disrupt your family's lives or their standard of living. A well thought-out life insurance policy plan such as term insurance, money-saving plans, and investment-oriented policies will provide monetary support to them and also become the reason for achieving your long-term objectives.
          </p>
         <h2 className="faq-tag-title-h3" style={{textAlign:'left', fontSize: "22px"}}>
            <strong>Why Choose Our Insurance Services?</strong>
          </h2>
<p  style={{textAlign:'left'}}>
          Make My Documents is a company that is dedicated to simplifying, demystifying, and removing the stress from the process of insurance. If you are the first person to buy a policy or simply a last-minute renewal, our platform promises that you will receive the ideal coverage at the most reasonable price without any inconvenience.
          </p>
            <h3  style={{textAlign:'left', fontSize: "20px"}}>
            <strong>Quick & Easy Process </strong>
          </h3>
<p  style={{textAlign:'left'}}>
          You can no longer do paperwork or stand in long queues—just a few clicks online and your insurance policy will be bought or renewed. The use of our basic platform will save you both time and energy.
          </p>
            <h3  style={{textAlign:'left', fontSize: "20px"}}>
            <strong> Trusted Insurance Partners</strong>
          </h3>
<p  style={{textAlign:'left'}}>
          We have the support of the best insurance companies in India such as HDFC Ergo, ICICI Lombard, Bajaj Allianz, and others, to provide safe policies that you can have confidence in.
          </p>
            <h3  style={{textAlign:'left', fontSize: "20px"}}>
            <strong>Competitive Premiums </strong>
          </h3>
<p  style={{textAlign:'left'}}>
          It is really easy to compare different insurance policies side by side and choose the plan that meets your budget without lessening the coverage.
          </p>
            <h3  style={{textAlign:'left', fontSize: "20px"}}>
            <strong>Expert Guidance </strong>
          </h3>
<p  style={{textAlign:'left'}}>
          Our experienced team will always be by your side to help you identify the right plan and understand policy benefits clearly.
          </p>
            <h3  style={{textAlign:'left', fontSize: "20px"}}>
            <strong>Instant Policy Delivery </strong>
          </h3>
<p  style={{textAlign:'left'}}>
          After you finish making your payment, it will be sent to your email or WhatsApp right away; thus, you can download it and use it easily.
          </p>
  <h2 className="faq-tag-title-h3" style={{textAlign:'left', fontSize: "22px"}}>
            <strong>How Make My Documents Works</strong>
          </h2>
<p  style={{textAlign:'left'}}>
          We have made it very easy to buy and renew your insurance in the case of a two-wheeler, four-wheeler, commercial vehicles, health, or life insurance. Basically, our method is simple, easy to understand, and without any worry. Just by filling out a form with your details, you can research the best insurance providers to get the best plan at once without any paper work or a long wait.
          </p>
          <h3  style={{textAlign:'left', fontSize: "20px"}}>
            <strong> Documents Required for Insurance Services</strong>
          </h3>
           <ul>
            <li>If you are going to buy or renew an insurance policy, the first step would be to have the necessary documents at hand.</li>
          <li>Vehicle Registration Certificate (RC) – In the case of two-wheeler, four-wheeler, and commercial vehicle insurances.</li>
          <li>Old Policy Details – In case you want to renew the policy you already have.</li>
          <li>Identity Proof – Aadhaar, PAN, Passport, or Driving License (for all insurance services).</li>
          <li>Address Proof – A utility bill, Aadhaar, or Passport for the identification process.</li>
          <li>Medical/Health Records – For health and life insurance plans (if applicable).</li>
          </ul>

  <h3  style={{textAlign:'left', fontSize: "20px"}}>
            <strong> Simple Steps to Get Any Insurance Policy</strong>
          </h3>
           <ul>
            <li>Register Online – Enter your personal information and the kind of policy you require to proceed further.</li>
          <li>Get Quotation – Tailored quotes can be sent to you either through e-mail or WhatsApp</li>
          <li>Compare Policies – Look at the coverage options, premiums, and benefits of the top insurers.</li>
          <li>Make Payment – We accept your payment online through our secure transaction system.</li>
          <li>Download Policy Instantly – Your insurance policy shall be handed over to you immediately via email or WhatsApp.</li>
         
          </ul>
        </div>
      

        <div
        className="faq-section"
        style={{
          margin: "14px auto",
          padding: "20px",
          background: "#FFFFFF",
          borderRadius: "10px",
          width: "80%",
        }}
      >
        <h4
          style={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#007BFF",
            marginBottom: "20px",
          }}
        >
          FAQs
        </h4>
        <p
          style={{
            textAlign: "center",
            fontWeight: "500",
            marginBottom: "30px",
          }}
        >
          Need help? Contact us for any queries related to us
        </p>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item"
              style={{ marginBottom: "10px" }}
            >
              <button
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  padding: "10px 20px",
                  border: "1px solid #007BFF",
                  borderRadius: "5px",
                  background: "#F9F9F9",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
                onClick={() => handleToggle(index)}
              >
                {faq.question}
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    marginLeft: "10px",
                  }}
                >
                  {openIndex === index ? "▲" : "▼"}
                </span>
              </button>
              {openIndex === index && (
                <div
                  style={{
                    marginTop: "10px",
                    padding: "10px 20px",
                    background: "#F3F3F3",
                    borderRadius: "5px",
                    color: "#333",
                  }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
    </div>

    <section
  style={{
    fontSize: "16px",
    lineHeight: "1.9",
    color: "#333",
    margin: "20px auto",
    maxWidth: "80%",
  }}
>
  <p style={{ margin: "10px 0 14px",  lineHeight: "1.4"  }}>
    <strong>Motor Insurance </strong> : Car Insurance | Second-Hand Car Insurance | Comprehensive Car Insurance | Third-Party Car Insurance | Car Insurance Calculator | Compare Car Insurance | Zero Depreciation Car Insurance | Renew Expired Car Insurance | No Claim Bonus (NCB) | Standalone OD Car Insurance | Return to Invoice Cover | Insured Declared Value (IDV) | Two-Wheeler Insurance | Bike Insurance Calculator | Comprehensive Two-Wheeler Insurance | Third-Party Two-Wheeler Insurance | Compare Two-Wheeler Insurance | Standalone OD Bike Insurance | Vehicle Insurance | Commercial Vehicle Insurance | Multi-Year Two-Wheeler Insurance | Break-In Policy Renewal | Pay As You Drive Car Insurance | Engine Protection Cover (Car & Bike) | Roadside Assistance Cover | Scooter Insurance | NCB in Bike Insurance | RTI in Bike Insurance
  </p>

  <p style={{ margin: "10px 0 14px",  lineHeight: "1.4"  }}>
    <strong>Health Insurance</strong> : Individual Health Insurance | Family Health Insurance | Senior Citizen Health Insurance | Parents Health Insurance | Health Insurance Renewal | Cashless Health Insurance | Health Insurance Premium Calculator | Critical Illness Insurance | Top-Up Health Plans | Personal Accident Cover | Health Wallet Insurance (Family & Individual) | Arogya Sanjeevani Plan | Health Insurance Portability | Diabetes & Hypertension Plans | Cancer Care Insurance | Maternity & Women Health Plans | BMI Calculator | Optima Restore (Family & Individual) | Optima Secure (Individual, Family & Global) | Optima Lite | Optima Super Secure Plan | Comprehensive Medical Coverage | Hospital Cash Benefit Plans | Daily Cash Health Cover
  </p>

  <p style={{ margin: "10px 0 14px",  lineHeight: "1.4"  }}>
    <strong>Life Insurance</strong> : Term Life Insurance | Whole Life Insurance | Endowment Plans | Retirement Plans | ULIPs (Unit Linked Insurance Plans) | Child Education Plans | Income Protection Plans | Life Cover with Investment Benefits | Savings & Protection Plans | Guaranteed Return Plans
  </p>


</section>

    </div>
    </div>
    </>
  );
};

export default InsurancePage;
