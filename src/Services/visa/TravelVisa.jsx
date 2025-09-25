import React, { useState, useEffect } from "react";
// import './InsurancePage.css'; 
import { Link } from 'react-router-dom';
import vehiclesIcon from '../../images/Visa_image1.svg';
import oneImage from '../../images/1.png';
import twoImage from '../../images/2.svg';
import threeImage from '../../images/3.svg';
import visaImage2 from '../../images/Visa_image2.svg';
import '../visa/TravelVisa.css';
import { useLayoutEffect } from "react";
import singapurImage from '../../images/singapure_image.png'
import arabImage1 from "../../images/arab1stimage.png";
import ukImage from "../../images/uk-image.png"
import australiaimage from "../../images/australia_image.png"
import malysiaimage from "../../images/malaysia_image.png"
import egyptimage from "../../images/egypt_image.png"
import vietnamimage from "../../images/vietnm_image.png"
import hongkong from "../../images/hongkong_image.png"
import indonesiimage from "../../images/indonesia_image.png"
import azerbaijanimage from "../../images/azerbijan_image.png"
import omanimage from "../../images/oman_image.png"
import moroccoimage from "../../images/moroco_image.png"
import baharinimage from "../../images/baharin_image.png"
import qatarimage from "../../images/qatar_image.png"
import russiaimage from "../../images/russia_image.png"
import uzbekistanimage from "../../images/uzerbekstan_image.png"
import { useLocation } from 'react-router-dom';
import { Helmet } from "react-helmet";



const visadata = [
  {
    name: "United Arab Emirated",
      routeName: "dubai-tourist-visa-for-indians",
    img: arabImage1,
  },
  {
    name: "Singapore",
    routeName: "singapore-visa",
    img: singapurImage,
  },
  {
    name: "United Kingdom",
    routeName:"uk-visa",
    img: ukImage,
  },
  {
    name: "Australia",
    routeName:"australia-visa",
    img: australiaimage,
  },
  {
    name: "Malaysia",
    routeName:"malaysia-visa",
    img: malysiaimage,
  },
  {
    name: "Egypet",
    routeName:"egypt-visa",
    img: egyptimage,
  },
  {
    name: "Vietnam",
    routeName:"vietnam-tourist-visa-for-indians",
    img: vietnamimage,
  },
  {
    name: "Hong Kong",
    routeName:"hong-kong-tourist-visa-for-indians",
    img: hongkong,
  },
  {
    name: "Indonesia",
    routeName:"indonesia-tourist-visa-for-indians",
    img: indonesiimage,
  },
  {
    name: "Azerbaijan",
    routeName:"azerbaijan-visa",
    img: azerbaijanimage,
  },
  {
    name: "OmanImage",
    routeName:"oman-visa",
    img: omanimage,
  },
  {
    name: "Morocco",
    routeName:"morocco-visa",
    img: moroccoimage,
  },
  {
    name: "Bahrain",
    routeName:"bahrain-visa",
    img: baharinimage,
  },
  {
    name: "Qatar",
    routeName:"qatar-visa",
    img: qatarimage,
  },
  {
    name: "Russia",
    routeName:"russia-visa",
    img: russiaimage,
  },
  {
    name: "Uzbekistan",
    routeName:"uzbekistan-visa",
    img: uzbekistanimage,
  },
];


const TravelVisa = () => {
  const location = useLocation();
    const [openIndex, setOpenIndex] = useState(null);
  // window.scrollTo({
  //   top: 0,
  //   behavior: 'smooth', 
  // })

  // useEffect(() => {
  //   try {
  //     // Create and configure the script element
  //     const script = document.createElement("script");
  //     script.type = "text/javascript";
  //     script.async = true;
  //     script.src = `https://app.interakt.ai/kiwi-sdk/kiwi-sdk-17-prod-min.js?v=${new Date().getTime()}`;
      
  //     // Append the script to the document
  //     script.onload = () => {
  //       try {
  //         // Initialize the Kiwi SDK once the script is loaded
  //         if (window.kiwi) {
  //           window.kiwi.init("", "AMai21iIUS09oEEkxbBftGabLTzAZeI0", {});
  //         } else {
  //           console.error("Kiwi SDK failed to load.");
  //         }
  //       } catch (error) {
  //         console.error("Error initializing Kiwi SDK:", error);
  //       }
  //     };

  //     script.onerror = () => {
  //       console.error("Failed to load the Kiwi SDK script.");
  //     };

  //     document.body.appendChild(script);
  //   } catch (error) {
  //     console.error("Error adding the script:", error);
  //   }

  //   return () => {
  //     // Cleanup: Remove the script element
  //     const existingScript = document.querySelector(`script[src*="kiwi-sdk"]`);
  //     if (existingScript) {
  //       existingScript.parentNode.removeChild(existingScript);
  //     }
  //   };
  // }, []);


  const [searchText, setSearchText] = useState("");

  // Filtered visa data based on search text
  const filteredVisadata = visadata.filter((visa) =>
    visa.name.toLowerCase().includes(searchText.toLowerCase())
  );

  useLayoutEffect(() => {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, []);


  const faqs = [
    {
      question: "When should I apply for a tourist visa?",
 
      answer:
        "It’s best to apply 3–4 weeks before your travel date to ensure enough time for document verification and embassy processing.",
    },
    {
      question: "Is the tourist visa application process 100% online?",
      answer:
        "Yes! You can apply online, upload documents, and make secure payments without visiting an office.",
    },
    {
      question: "How long does it take to get a tourist visa approved?  ",
      answer: "Processing time varies by destination but typically takes 3–15 working days. Some countries may issue e-visas in as little as 48 hours.",
    },
    {
      question: "Will I need to visit an embassy in person?",
          answer: "Not always. Many destinations allow online applications and e-visas. For countries requiring biometrics or interviews, we’ll guide you step-by-step.",
   
    },
    {
      question: "What happens if my tourist visa is delayed or rejected?",
      answer:
        "Our team will review your application, identify errors, and assist with reapplication to increase your chances of approval.",
    },
    {
      question: "Which countries require travel insurance for tourist visas?",
      answer: "Countries like Schengen states, UAE, and some European destinations make travel insurance mandatory. We’ll inform you based on your destination.",
    },
    {
      question: "Can I apply for a tourist visa if my passport is about to expire?",
      answer:
        "Most countries require your passport to have at least 6 months of validity. Renew your passport before applying if needed.",
    },
    {
      question: "Do I need confirmed flight tickets before applying?",
      answer:
        "Yes, most embassies require proof of round-trip flight bookings and hotel reservations to process your visa.",
    },
    {
      question: "Can I get a tourist visa if I have no travel history?",
      answer:
        "Yes! We help first-time travelers with proper documentation and guidance to get their tourist visa approved.",
    },
    {
      question: "How do I track my visa application status?",
      answer:
        "We keep you updated with real-time notifications and provide embassy or consulate tracking details where applicable.",
    },
  ];
    const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <>
    <Helmet>
    <title>Tourist Visa Services - Apply for Tourist Visa Online</title>

<meta name="description" content="Apply for your tourist visa online with ease. No paperwork, no hassles—get your visa approved quickly and download your visa instantly. Complete online process for tourist visas worldwide."/>
<meta name="keywords" content="tourist visa, apply tourist visa online, visa application, tourist visa approval, travel visa, online tourist visa, tourist visa services, easy visa application, tourist visa online, how to apply tourist visa, instant visa approval, download tourist visa, no paperwork tourist visa, hassle-free tourist visa"/>

<link rel="canonical" href="https://www.makemydocuments.com/visa" />
<meta name="author" content="https://www.makemydocuments.com/visa "/>
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
<meta content="all" name="TouristVisa"/>
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
      className="container-fluid"
      style={{
        background: 'linear-gradient(182.42deg, #FCA505 2.01%, #FFFFFF)',
        minHeight: '65vh',
        position: 'relative',
      }}
    >
   <div
  className="row justify-content-start align-items-center"
  style={{ minHeight: "100%" }}
>
  <div className="col-12 col-md-6 text-left">
    <div className="text-content">
      <h2 style={{ color: "#1A76D8" }}>We Make Visas Easy For You</h2>
      
      {/* Search Input Box */}
      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Search for your visa or destination..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
      </div>
    </div>
  </div>

  <div className="col-12 col-md-6 text-center imageicon-visa" >
    <img
      src={vehiclesIcon}
      alt="Vehicles and Phone"
      className="img-fluid"
      style={{ maxWidth: "82%" }}
    />
    <img
      src={visaImage2}
      alt="Visa Image 2"
      className="img-fluid"
      style={{ marginTop: "-145px", maxWidth: "81%" }}
    />
  </div>
</div>


      {/* Destination Cards */}
      <div className="destination-cards-container row justify-content-center" style={{ marginTop: "28px" }}>
        {filteredVisadata.length > 0 ? (
          filteredVisadata.map((visa, index) => (
            <div
              key={index}
              className="destination-card col-12 col-md-4 text-center"
              style={{ position: "relative", marginBottom: "20px" }}
            >
              {/* <Link to={`/${visa.routeName}`}> */}
                <img
                  src={visa.img}
                  alt={visa.name}
                  onClick={() => (window.location.href = `/${visa.routeName}`)}
                  style={{ width: "100%", borderRadius: "8px" , cursor:'pointer'}}
                />
              {/* </Link> */}
              <p style={{ marginTop: "10px", fontWeight: "bold" }}>
                {visa.name}
              </p>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", fontSize: "18px", marginTop: "20px" }}>
            No results found.
          </p>
        )}
      </div>

      {/* Why Choose Section */}
      <div className="why-make-my-documents text-center my-10">
        <h3
          className="mb-4"
          style={{ color: '#007BFF', fontWeight: 'bold' }}
        >
          Why Make My Documents?
        </h3>
        <div className="row justify-content-center">
          <div className="col-12 col-md-4 text-center">
            <img
              src={oneImage}
              alt="Complete Online Process"
              className="mb-3 feature-img img-fluid"
            />
            <h5 style={{ fontWeight: 'bold' }}>COMPLETE ONLINE PROCESS</h5>
            <p>Upload the documents as mentioned and leave the rest to us.</p>
          </div>
          <div className="col-12 col-md-4 text-center">
            <img
              src={twoImage}
              alt="Dedicated Team"
              className="mb-3 feature-img img-fluid"
            />
            <h5 style={{ fontWeight: 'bold' }}>DEDICATED TEAM</h5>
            <p>Prompt notifications on every stage of visa.</p>
          </div>
          <div className="col-12 col-md-4 text-center">
            <img
              src={threeImage}
              alt="99% Approval Rate"
              className="mb-3 feature-img img-fluid"
            />
            <h5 style={{ fontWeight: 'bold' }}>99% APPROVAL RATE</h5>
            <p>Based on visas processed so far.</p>
          </div>
        </div>
      </div>
      <br /><br />
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
                                                                > "Excellent service! The team was quick, professional, and made the entire process smooth and stress-free"
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
                                                                    Ramesh K

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
                                                                    "Good service I got my Dubai visa with 2 days thanks to make my documents and team"
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
                                                                     Rathik KR

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
                                                                    "It was good experience they r very fasting in collecting and submitting details, its good no waiting long."
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
                                                                      Dhyan
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
                                                                    "Great behaviour. Very polite. And organised. Easiest and fastest way to make your documents"
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
                                                                      Grithachi Mirle
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
                                                                    "Patiently answered all our doubts and confusion. Thank you for your service."
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
                                                                    Lasya m
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
                                                                    "Thank you make my documents..Its very helpful to working peoples and fast response."
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
                                                                    Kavya
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
                                                                    "Excellent service! The team was quick, professional, and made the entire process smooth and stress-free.",
                                                            },
                                                            {
                                                                name: "Rathik KR",
                                                                initial: "H",
                                                                review:
                                                                    "Good service I got my Dubai visa with 2 days thanks to make my documents and team",
                                                            },
                                                             {
                                                                name: "Grithachi Mirle",
                                                                initial: "K",
                                                                review:
                                                                    "Great behaviour. Very polite. And organised. Easiest and fastest way to make your documents",
                                                            },
                                                             {
                                                                name: "Lasya m",
                                                                initial: "S",
                                                                review:
                                                                    "Patiently answered all our doubts and confusion. Thank you for your service.",
                                                            },
                                                             {
                                                                name: "Dhyan",
                                                                initial: "V",
                                                                review:
                                                                    "It was good experience they r very fasting in collecting and submitting details, its good no waiting long.",
                                                            },
                                                             {
                                                                name: "Kavya",
                                                                initial: "R",
                                                                review:
                                                                    "Thank you make my documents..Its very helpful to working peoples and fast response.",
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
    <br /><br />
     <div style={{   margin: "14px auto",
          padding: "20px",
          background: "#FFFFFF",
          borderRadius: "10px",
          width: "80%",}}>
          <h1 className="faq-tag-title-h3">
            <strong>Tourist Visa Services – Apply Online With Ease</strong>
          </h1>
         <h3  style={{textAlign:'left', fontSize:"20px"}}>
            <strong>Your Dream Trip, Just a Few Clicks Away</strong>
          </h3>
<p  style={{textAlign:'left'}}>
        Are you thinking about traveling abroad. To free you up to devote more time to organizing your trip, we handle all the formalities of your tourist visa in a fast and simple way, making the whole process less stressful.  
        
          </p>
          <p  style={{textAlign:'left'}}>
          We at Make My Documents are the best in the business when it comes to providing tourist visa services only. We provide the most reliable and safest support to travelers going to Dubai, Singapore, the UK, USA, and other popular destinations.
        
          </p>
          <h2 className="faq-tag-title-h3" style={{textAlign:'left', fontSize: "22px"}}>
            <strong>Get the Best Tourist Visa Assistance in Bangalore</strong>
          </h2>
          <p  style={{textAlign:'left'}}>
          Looking for fast and reliable tourist visa assistance in Bangalore, At Make My Documents, we specialize in helping travelers get their tourist visas approved quickly and hassle-free. Whether you’re planning a trip to Dubai, Singapore, the UK, USA, Canada, Australia, or Schengen countries, our team provides end-to-end support from document preparation to final visa approval. Our easy online visa application process ensures you can apply from the comfort of your home without worrying about embassy procedures.
        
          </p>
   <h2 className="faq-tag-title-h3" style={{textAlign:'left', fontSize: "22px"}}>
            <strong>Trusted Agents for Tourist Visas in Bangalore</strong>
          </h2>
         <p  style={{textAlign:'left'}}>
          We are known as one of the most trusted tourist visa agents in Bangalore, with a track record of assisting thousands of travelers. From first-time travelers to frequent flyers, our tourist visa consultants provide accurate guidance, secure document handling, and timely updates to make your travel plans stress-free. We stay updated on embassy rules, visa requirements, and processing timelines, giving you a smooth and reliable experience.
        
          </p>
       <h2 className="faq-tag-title-h3" style={{textAlign:'left', fontSize: "22px"}}>
            <strong>How We Help as Your Tourist Visa Agents</strong>
          </h2>
          <p  style={{textAlign:'left'}}>
          As your tourist visa agents in Bangalore, we do more than just process paperwork. We provide step-by-step assistance, including:
        
          </p>

           <ul>
         <li><strong>Document Verification & Guidance: </strong>We review your application and ensure compliance with embassy standards.</li>
            <li><strong> Secure Online Submissions:</strong>Apply tourist visas online without visiting multiple offices.</li>
             <li><strong>Multi-Destination Coverage: </strong>Whether it’s a Dubai tourist visa, Schengen visa, or Singapore e-visa or any other country we’ve got you covered.</li>
              <li><strong>Timely Updates & Support: </strong>Get real-time updates and personalized help at every step.</li>
               <li><strong>Reapplication Assistance: </strong>If needed, we guide you through correcting errors and reapplying.</li>
          </ul>
          <p  style={{textAlign:'left'}}>
          
        Our goal is to make us your go-to visa consultants in Bangalore, so you can travel confidently without worrying about delays or rejections.
          </p> 
          <h2 className="faq-tag-title-h3" style={{textAlign:'left', fontSize: "22px"}}>
            <strong>How It Works – Simple 5-Step Process</strong>
          </h2>
          <p  style={{textAlign:'left'}}>
          If you are out of time or just don’t feel like queuing, take a trip online. An online tourist visa application with Make My Documents is a perfect solution. We will take you through our step-by-step process, which is guaranteed to be accurate, safe, and quicker to get the approvals:
        
          </p>
  <h3  style={{textAlign:'left', fontSize:"20px"}}>
            <strong> Register Online</strong>
          </h3>
           <p  style={{textAlign:'left'}} >
           The first step will be to provide your basic details in our offline visa application portal, which is completely secure. It is like a place where we keep your travel plans to serve you better.
          </p>
           <h3  style={{textAlign:'left', fontSize:"20px"}}>
            <strong>Upload Documents </strong>
          </h3>
           <p  style={{textAlign:'left'}} >
           Sending your passport, photos, and travel details can be done in a matter of minutes using WhatsApp or email. We make document submission quick and easy for all users.
          </p>
           <h3  style={{textAlign:'left', fontSize:"20px"}}>
            <strong> Documents Verification</strong>
          </h3>
           <p  style={{textAlign:'left'}} >
           The visa issue is probably one of those situations where honesty is the best policy. Our visa issue specialists verify all the details in the visa application and ensure it fulfills the requirements of the diplomatic mission, thus lowering the probability of refusal.
          </p>
           <h3  style={{textAlign:'left', fontSize:"20px"}}>
            <strong> Make a Secure Payment </strong>
          </h3>
           <p  style={{textAlign:'left' }} >
           Quickly and without hassle, payment can be made through a secure, fully encrypted network for the visa application without any delay.
          </p>
           <h3  style={{textAlign:'left', fontSize:"20px"}}>
            <strong>  Receive Your E-Visa via Email</strong>
          </h3>
           <p  style={{textAlign:'left'}} >
           When your e-visa application is successful, the e-visa file will be sent directly to your email. You can download it to your computer or print it out and be good to go.
          </p>
           <h2 className="faq-tag-title-h3" style={{textAlign:'left', fontSize: "22px"}}>
            <strong>Documents You’ll Need</strong>
          </h2>
            <p  style={{textAlign:'left'}}>
          To get a tourist visa online, the most important thing is the documents to be in the right order. This will be the essentials you are usually expected to present:
          </p>
            <h3  style={{textAlign:'left', fontSize:"20px"}}>
            <strong> Valid Passport (6+ Months Validity): </strong>
          </h3>
            <p  style={{textAlign:'left'}}>
          First of all, make sure that the passport you are using has at least six months of validity and has enough blank pages for any visa stamp.
          </p>
           <h3  style={{textAlign:'left', fontSize:"20px"}}>
            <strong> Passport-Size Photographs: </strong>
          </h3>
            <p  style={{textAlign:'left'}}>
          Take recent pictures of yourself that correspond to the size and format set by the embassy.
          </p>
           <h3  style={{textAlign:'left', fontSize:"20px"}}>
            <strong> Confirmed Flight Tickets & Hotel Bookings: </strong>
          </h3>
            <p  style={{textAlign:'left'}}>
          A certificate of round-trip tickets and hotel reservations request you to show your traveling itinerary.
          </p>
           <h3  style={{textAlign:'left', fontSize:"20px"}}>
            <strong> Proof of Funds or Bank Statements:  </strong>
          </h3>
            <p  style={{textAlign:'left'}}>
          There are some countries which request bank statements to make sure that the traveler has enough money to go on the trip.
          </p>
           <h3  style={{textAlign:'left', fontSize:"20px"}}>
            <strong> Travel Insurance (If Required): </strong>
          </h3>
            <p  style={{textAlign:'left'}}>
           If the destination is a country from the Schengen area, then travel insurance will be obligatory for the stay.
          </p>
           <h3  style={{textAlign:'left', fontSize:"20px"}}>
            <strong> Additional Embassy-Specific Forms:  </strong>
          </h3>
            <p  style={{textAlign:'left'}}>
          You may also have to submit some additional paperwork or a declaration depending on where you are going.
          </p>
       
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
        <br />
    </div>
 </div> 
    
    </>
  );
};

export default TravelVisa;
