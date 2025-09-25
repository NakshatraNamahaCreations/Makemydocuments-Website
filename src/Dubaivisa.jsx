import React, { useState, useEffect, useRef } from "react";
import bannerimage from "../src/images/UAE_image_banner.jpg";
import circleIcon from "../src/images/circle1.svg";
import documentsIcon from "../src/images/documents.svg";
import TimeIcon from "../src/images/Time.svg";
import Price from "./images/Price Tag.svg";
import axios from "axios";

import { Link } from "react-router-dom";


import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const relatedServices = [
  { name: "Singapore", path: "/singapore-visa" },
  { name: "United Kingdom", path: "/uk-visa" },
  { name: "Australia", path: "/australia-visa" },
  { name: "Malaysia", path: "/malaysia-visa" },
  { name: "Egypt", path: "/egypet-visa" },
  { name: "Vietnam", path: "/vietnam-visa" },
  { name: "Hong Kong", path: "/hongkong-visa" },

  { name: "Indonesia", path: "/indonesia-visa" },

  { name: "Azerbaijan", path: "/azerbaijan-visa" },
  { name: "Oman", path: "/oman-visa" },

  { name: "Morocco", path: "/morocco-visa" },
  { name: "Bahrain", path: "/bahrain-visa" },

  { name: "Qatar", path: "/qatar-visa" },

  { name: "Russia", path: "/russia-visa" },
  { name: "Uzbekistan", path: "/uzbekistan-visa" },
];

const DubaiVisa = () => {
  // const serviceRef = useRef(null);
  const navigate = useNavigate();
  //   const { services } = useParams();
  const [visibleCount, setVisibleCount] = useState(3);
  const [openIndex, setOpenIndex] = useState(null);

  const [blogs, setBlogs] = useState([]);
  const [isSticky, setIsSticky] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [active, setActive] = useState(null);
  const stickyColumnRef = useRef(null);
  const firstColumnRef = useRef(null);
  const stopStickyRef = useRef(null);
  const handleClick = (service) => {
    setActive(service.name);
    navigate(service.path);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      const stickyColumn = stickyColumnRef.current;
      const firstColumn = firstColumnRef.current;
      const stopSection = stopStickyRef.current;

      if (!stickyColumn || !firstColumn || !stopSection) return;

      const bannerHeight = document.querySelector('.breadcrumb-title')?.offsetHeight || 0;
      const scrollTop = window.scrollY;
      const firstColumnTop = firstColumn.getBoundingClientRect().top + window.scrollY;
      const stopSectionTop = stopSection.getBoundingClientRect().top + window.scrollY;
      const stickyOffset = 100; // adjust for margin if needed

      if (
        scrollTop > firstColumnTop - bannerHeight - stickyOffset &&
        scrollTop + stickyColumn.offsetHeight < stopSectionTop
      ) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const handleContinue = () => {
    // setShowPopup(true)
    navigate("/dubai-tourist-visa-for-indians-form");
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        "https://api.makemydocuments.com/api/blogs"
      );
      setBlogs(response.data.slice(0, 3));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setLoading(false);
    }
  };

  const faqs = [
    {
      question: " Can I apply for a Dubai tourist visa online? ",
      // answer: (
      //   <ul style={{ listStyleType: 'disc' }}>
      //     <li>Minimizes the conflicts between a tenant and the owner</li>
      //     <li>Rental/lease agreement acts as an address proof</li>
      //     <li>Acts as a proof for Bank loans</li>
      //     <li>Helps in investment & loan</li>
      //     <li>Vehicle registration</li>
      //   </ul>
      // ),
      answer:
        "Yes, you can apply for a Dubai tourist visa online through official visa platforms or travel agencies.",
    },
    {
      question: "Is it possible to extend my Dubai tourist visa?",
      answer:
        "Yes, a Dubai tourist visa can be extended for up to 30 days, but the extension is subject to approval by immigration authorities.",
    },
    {
      question: "Do I need to book a flight and hotel before applying for the visa?",
      answer:
        "Yes, you need to provide flight and hotel booking details as part of the visa application process.",
    },
    {
      question: "Can I apply for a Dubai tourist visa if I have a previous visa rejection? ",
      answer:
        "Yes, you can still apply, but previous rejections might affect the approval process depending on the reason.",
    },
    {
      question: "Is health insurance required for a Dubai tourist visa? ",
      answer:
        "While not mandatory, travel health insurance is highly recommended for emergencies during your stay.",
    },
    {
      question: "Do I need to submit original documents for a Dubai tourist visa? ",
      answer:
        "No, you only need to submit scanned copies of the required documents unless requested otherwise by the authorities.",
    },
    {
      question: "How can I track my Dubai tourist visa application status? ",
      answer:
        "You can track your application status online through the visa platform or agency you applied through.",
    },
    {
      question: "Can I get a visa on arrival in Dubai? ",
      answer:
        "Indian nationals generally need to apply for a tourist visa before traveling, as visa on arrival is not available for most Indians.",
    },
    {
      question: "Can I travel to other countries in the UAE with a Dubai tourist visa? ",
      answer:
        "Yes, a Dubai tourist visa allows travel to other emirates within the UAE, as long as the visa is valid.",
    },
    {
      question: "What is the difference between a tourist visa and a transit visa for Dubai? ",
      answer:
        "A tourist visa is for leisure or business stays, while a transit visa is for shortstops (usually 48-96 hours) when passing through Dubai en route to another destination.",
    },
  ];


  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Dubai Tourist Visa for Indians | Fees and Application Process</title>
        <meta name="description" content="Apply for a Dubai tourist visa for Indians with a simple online process. Get all the details on eligibility, visa types, etc., to plan your trip to Dubai.
" />
        <meta name="keywords" content="Apply for a Dubai tourist visa for Indians with a simple online process. Get all the details on eligibility, visa types, etc., to plan your trip to Dubai." />
        <link rel="canonical" href="https://www.makemydocuments.com/dubai-tourist-visa-for-indians" />
        {/* <meta name="author" content={currentMeta.canonical} /> */}
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="2 days" />
        <meta name="robots" content="ALL, index, follow" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="Safe For All" />
        <meta name="language" content="English" />
        <meta httpEquiv="window-target" content="_top" />
        <meta httpEquiv="pics-label" content="for all ages" />
        <meta name="GOOGLEBOTS" content="All, FOLLOW" />
        <meta name="YAHOOBOTS" content="All, FOLLOW" />
        <meta name="MSNBOTS" content="All, FOLLOW" />
        <meta name="BINGBOTS" content="All, FOLLOW" />
        <meta name="Googlebot-Image" content="All" />
        <meta name="Slurp" content="All" />
        <meta name="Scooter" content="All" />
        <meta name="WEBCRAWLERS" content="All" />

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
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Make My Documents",
        "image": "https://www.makemydocuments.com/logo.png",
        "@id": "https://www.makemydocuments.com/dubai-tourist-visa-for-indians",
        "url": "https://www.makemydocuments.com/dubai-tourist-visa-for-indians",
        "telephone": "+91-9429690973",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "No 344, 2nd Main Rd, Manjunath Nagar, Mookambika Nagar, Dattatreya Nagar, Hosakerehalli",
          "addressLocality": "Bengaluru",
          "addressRegion": "Karnataka",
          "postalCode": "560085",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "12.925435912146988",
          "longitude": "77.5409615823579"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "10:00",
            "closes": "17:00"
          }
        ],
        "priceRange": "₹₹",
        "description": "Apply for a Dubai tourist visa for Indians with a simple online process. Get all the details on eligibility, visa types, etc., to plan your trip to Dubai.",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Visa Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "New Tourist Visa Applications"
              }
            }
          ]
        }
      }
    `}
        </script>

        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can I apply for a Dubai tourist visa online?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, you can apply for a Dubai tourist visa online through official visa platforms or travel agencies."
            }
          },
          {
            "@type": "Question",
            "name": "Is it possible to extend my Dubai tourist visa?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, a Dubai tourist visa can be extended for up to 30 days, but the extension is subject to approval by immigration authorities."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need to book a flight and hotel before applying for the visa?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, you need to provide flight and hotel booking details as part of the visa application process."
            }
          },
          {
            "@type": "Question",
            "name": "Can I apply for a Dubai tourist visa if I have a previous visa rejection?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, you can still apply, but previous rejections might affect the approval process depending on the reason."
            }
          },
          {
            "@type": "Question",
            "name": "Is health insurance required for a Dubai tourist visa?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While not mandatory, travel health insurance is highly recommended for emergencies during your stay."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need to submit original documents for a Dubai tourist visa?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, you only need to submit scanned copies of the required documents unless requested otherwise by the authorities."
            }
          },
          {
            "@type": "Question",
            "name": "How can I track my Dubai tourist visa application status?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can track your application status online through the visa platform or agency you applied through."
            }
          },
          {
            "@type": "Question",
            "name": "Can I get a visa on arrival in Dubai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Indian nationals generally need to apply for a tourist visa before traveling, as visa on arrival is not available for most Indians."
            }
          },
          {
            "@type": "Question",
            "name": "Can I travel to other countries in the UAE with a Dubai tourist visa?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, a Dubai tourist visa allows travel to other emirates within the UAE, as long as the visa is valid."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between a tourist visa and a transit visa for Dubai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A tourist visa is for leisure or business stays, while a transit visa is for shortstops (usually 48-96 hours) when passing through Dubai en route to another destination."
            }
          }
        ]
      }
    `}
        </script>
        <meta property="og:title" content="Dubai Tourist Visa for Indians | Fees and Application Process" />
        <meta property="og:description" content="Apply for a Dubai tourist visa for Indians with a simple online process. Get all the details on eligibility, visa types, etc., to plan your trip to Dubai." />
        <meta property="og:url" content="https://www.makemydocuments.com/dubai-visa" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.makemydocuments.com/static/media/bannerimage-g.9468cc5ebd5dcf5ebb9d.png" />
        <meta property="og:site_name" content="Make My Documents" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dubai Tourist Visa for Indians | Fees and Application Process" />
        <meta name="twitter:description" content="Apply for a Dubai tourist visa for Indians with a simple online process. Get all the details on eligibility, visa types, etc., to plan your trip to Dubai." />
        <meta name="twitter:image" content="https://www.makemydocuments.com/static/media/bannerimage-g.9468cc5ebd5dcf5ebb9d.png" />
        <meta name="twitter:site" content="@makemydocuments" />


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
            <li className="breadcrumb-item" style={{ fontWeight: "bold", fontSize: '14px' }}>
              <Link to="/" style={{ color: "#007bff", textDecoration: "none" }}>
                Home
              </Link>
            </li>
            <li
              className="breadcrumb-item active"
              aria-current="page"
              style={{ fontWeight: "bold", fontSize: '14px' }}
            >
              Dubai Tourist Visa for Indians

            </li>
          </ol>
        </nav>
      </div>

      <div style={{ overflow: "hidden" }}>
        <div className="mobile-header">
          {/* Header Section */}
          <div style={{ margin: 0, fontFamily: "Poppins, sans-serif" }}>
            {/* Banner Section */}
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
                      color:"#fff"
                    }}
                  >
                    Dubai Tourist Visa for Indians
                  </h1>

                  {/* Approval Rate Badge */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "#e6f7fa",
                      padding: "5px 10px",
                      borderRadius: "5px",
                      marginTop: "10px",
                      width: "fit-content",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "18px",
                        color: "#00c4cc",
                        marginRight: "5px",
                      }}
                    >
                      ⭐
                    </span>
                    <span
                      style={{
                        fontSize: "14px",
                        color: "#000000",
                        fontWeight: "bold",
                      }}
                    >
                      99% Visa Approved on Time
                    </span>
                  </div>

                  {/* Visa Details */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "20px",
                      width: "100%",
                      maxWidth: "320px",

                      // padding: "15px",
                      borderRadius: "10px",

                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <p
                        style={{
                          fontSize: "14px",
                          marginBottom: "5px",
                         color:"#fff",
                          fontWeight: "600",
                        }}
                      >
                        Processing time
                      </p>
                      <p
                        style={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#333",
                          margin: 0,
                          backgroundColor: "#e3f2fd",
                          padding: "6px 10px",
                          borderRadius: "6px",
                          whiteSpace: 'nowrap',
                          display: "inline-block",
                        }}
                      >
                        04 to 05 working days

                      </p>

                    </div>

                    <div style={{ flex: 1, textAlign: "right" }}>
                      <p
                        style={{
                          fontSize: "14px",
                          marginBottom: "5px",
                        color:"#fff",
                          fontWeight: "600",
                        }}
                      >
                        Starting from
                      </p>
                      <p
                        style={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#333",
                          backgroundColor: "#e3f2fd",
                          padding: "6px 10px",
                          borderRadius: "6px",
                          display: "inline-block",
                          margin: 0,
                        }}
                      >
                        ₹7,854/-
                      </p>
                    </div>
                  </div>
                  <div style={{ marginTop: "20px" }}>
                    <button
                      onClick={handleContinue}
                      style={{
                        backgroundColor: "#fea400 ",
                        color: "#333",
                        padding: "12px 24px",
                        border: "none",
                        borderRadius: "6px",
                        fontSize: "16px",
                        fontWeight: "bold",
                        cursor: "pointer",
                        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                        transition: "background-color 0.3s ease",
                      }}
                      onMouseOver={(e) => (e.target.style.backgroundColor = "#fea400")}
                      onMouseOut={(e) => (e.target.style.backgroundColor = "#fea400")}
                    >
                      Apply Now
                    </button>
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
                  marginTop: '36%'
                }}
              >
                {/* Image */}
                <img
                  src={bannerimage}
                  alt="Hong Kong Visa"
                  style={{
                    width: "100%",
                    height: "auto",
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
                    padding: "15px",
                  }}
                >
                  <h2 style={{ fontSize: "14px", fontWeight: "bold", marginBottom: "8px" }}>
                    Dubai Tourist Visa for Indians
                  </h2>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "#e6f7fa",
                      color: "#000",
                      padding: "3px 8px",
                      borderRadius: "5px",
                      fontSize: "10px",
                      fontWeight: "500",
                      marginBottom: "10px",
                      width: "fit-content",
                    }}
                  >
                    ⭐ <span style={{ marginLeft: "6px" }}>99% Visa Approved on Time</span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "10px",
                    }}
                  >
                    <div>
                      <p style={{ margin: 0, fontWeight: "bold", fontSize: "10px", }}>Processing time</p>

                      <p style={{ margin: 0, fontSize: "10px", }}> 04 to 05 working days

                      </p>
                    </div>
                    <div>
                      <p style={{ margin: 0, fontWeight: "bold", fontSize: "10px", }}>Starting from</p>
                      <p style={{ margin: 0, color: "#ffc107", fontWeight: "bold", fontSize: "10px", }}>
                        ₹7,854/-
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="container my-5">
              <div className="row" style={{ position: "relative" }}>
                {/* Left Column () */}
                <div className="col-md-8" ref={firstColumnRef} >
                  {/* Charges Section (Scrollable) */}
         
              

                  <br />
                  {/* Documents Required Section (Non-scrollable) */}
                  <div
                    className="d-none d-lg-block"
                    style={{
                      marginTop: "20px",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      paddingTop: "15px",
                      paddingBottom: "15px",
                      backgroundColor: "#fff",
                      borderRadius: "8px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <h2
                      style={{
                        fontSize: "24px",
                        fontWeight: "bold",
                        marginBottom: "15px",
                        textAlign: "left",
                      }}
                    >
                      Documents Required For Dubai Tourist Visa for Indians
                    </h2>


                    <p style={{ fontSize: "16px", color: "#333", margin: 0 }}>- India PAN Card  </p>
                    <p style={{ fontSize: "16px", color: "#333", margin: 0 }}>- Passport  </p>
                    <p style={{ fontSize: "16px", color: "#333", margin: 0 }}>- Passport Back  </p>
                    <p style={{ fontSize: "16px", color: "#333", margin: 0 }}>- Traveler Photo  </p>
                    <p style={{ fontSize: "16px", color: "#333", margin: 0 }}>- Round Trip Flight Ticket  </p>
                    <p style={{ fontSize: "16px", color: "#333", margin: 0 }}>- Hotel Booking  </p>



                  </div>

                  <div className="d-block d-lg-none" style={{ padding: "15px" }}>
                    <div
                      style={{
                        backgroundColor: "#fff",
                        borderRadius: "8px",
                        padding: "12px",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                        marginBottom: "20px",
                      }}
                    >
                      <h5 style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "10px" }}>
                        Documents Required For Dubai Tourist Visa for Indians
                      </h5>

                      <p style={{ fontSize: "13px", color: "#333", margin: 0 }}>- India PAN Card  </p>
                      <p style={{ fontSize: "13px", color: "#333", margin: 0 }}>- Passport  </p>
                      <p style={{ fontSize: "13px", color: "#333", margin: 0 }}>- Passport Back  </p>
                      <p style={{ fontSize: "13px", color: "#333", margin: 0 }}>- Traveler Photo  </p>
                      <p style={{ fontSize: "13px", color: "#333", margin: 0 }}>- Round Trip Flight Ticket  </p>
                      <p style={{ fontSize: "13px", color: "#333", margin: 0 }}>- Hotel Booking  </p>
                    </div>
                  </div>

                  <br />
                  {/* How It Works Section (Non-scrollable) */}
                  <div
                    style={{
                      marginTop: "20px",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      paddingTop: "15px",
                      paddingBottom: "15px",
                      backgroundColor: "#fff",
                      borderRadius: "8px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <h2
                      style={{
                        fontSize: "24px",
                        fontWeight: "bold",
                        marginBottom: "20px",
                        textAlign: "left",
                      }}
                    >
                      How It Works
                    </h2>
                    <div style={{ position: "relative", paddingLeft: "40px" }}>
                      <div
                        style={{
                          position: "absolute",
                          left: "15px",
                          top: "0",
                          height: "calc(100% - 8px)",
                          width: "2px",
                          backgroundColor: "#1976D2",
                        }}
                      />
                      <div
                        style={{ position: "relative", marginBottom: "40px" }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            left: "-33px",
                            top: "5px",
                            width: "16px",
                            height: "16px",
                            backgroundColor: "#1976D2",
                            borderRadius: "50%",
                            border: "2px solid #fff",
                          }}
                        />
                        <div>
                          <h3
                            style={{
                              fontSize: "18px",
                              fontWeight: "bold",
                              marginBottom: "5px",
                              color: "#333",
                            }}
                          >
                            Step 1: Register Online
                          </h3>
                          <p
                            style={{
                              fontSize: "14px",
                              color: "#555",
                              margin: 0,
                            }}
                          >
                            Fill all the basic details in the application on our secure portal.

                          </p>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", marginBottom: "40px" }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            left: "-33px",
                            top: "5px",
                            width: "16px",
                            height: "16px",
                            backgroundColor: "#1976D2",
                            borderRadius: "50%",
                            border: "2px solid #fff",
                          }}
                        />
                        <div>
                          <h3
                            style={{
                              fontSize: "18px",
                              fontWeight: "bold",
                              marginBottom: "5px",
                              color: "#333",
                            }}
                          >
                            Step 2: Upload Documents
                          </h3>
                          <p
                            style={{
                              fontSize: "14px",
                              color: "#555",
                              margin: 0,
                            }}
                          >
                            Submit the required documents via WhatsApp or email.

                          </p>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", marginBottom: "40px" }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            left: "-33px",
                            top: "5px",
                            width: "16px",
                            height: "16px",
                            backgroundColor: "#1976D2",
                            borderRadius: "50%",
                            border: "2px solid #fff",
                          }}
                        />
                        <div>
                          <h3
                            style={{
                              fontSize: "18px",
                              fontWeight: "bold",
                              marginBottom: "5px",
                              color: "#333",
                            }}
                          >
                            Step 3: Documents Verification
                          </h3>
                          <p
                            style={{
                              fontSize: "14px",
                              color: "#555",
                              margin: 0,
                              marginBottom: "10px",
                            }}
                          >
                            Our experts review your documents for accuracy and compliance.

                          </p>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", marginBottom: "40px" }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            left: "-33px",
                            top: "5px",
                            width: "16px",
                            height: "16px",
                            backgroundColor: "#1976D2",
                            borderRadius: "50%",
                            border: "2px solid #fff",
                          }}
                        />
                        <div>
                          <h3
                            style={{
                              fontSize: "18px",
                              fontWeight: "bold",
                              marginBottom: "5px",
                              color: "#333",
                            }}
                          >
                            Step 4: Payment
                          </h3>
                          <p
                            style={{
                              fontSize: "14px",
                              color: "#555",
                              margin: 0,
                            }}
                          >
                            Complete the payment securely to process your
                            application.
                          </p>
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", marginBottom: "20px" }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            left: "-33px",
                            top: "5px",
                            width: "16px",
                            height: "16px",
                            backgroundColor: "#1976D2",
                            borderRadius: "50%",
                            border: "2px solid #fff",
                          }}
                        />
                        <div>
                          <h3
                            style={{
                              fontSize: "18px",
                              fontWeight: "bold",
                              marginBottom: "5px",
                              color: "#333",
                            }}
                          >
                            Step 5: Receive your E-Visa via E-mail
                          </h3>
                          <p
                            style={{
                              fontSize: "14px",
                              color: "#555",
                              margin: 0,
                            }}
                          >
                            Get your approved E-Visa conveniently delivered to
                            your inbox.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                                  <div
                    className="d-block d-lg-none"
                    style={{
                      padding: "15px",
                      backgroundColor: "#ffffff",
                      borderRadius: "10px",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                      margin: "15px",
                    }}
                  >
                    {/* Charges Section */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        marginBottom: "20px",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          width: "100px",
                          height: "100px",
                        }}
                      >
                        <img
                          src={circleIcon}
                          alt="Circle"
                          style={{ width: "100%", height: "100%" }}
                        />
                        <img
                          src={Price}
                          alt="Price Icon"
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "26px",
                          }}
                        />
                      </div>
                      <div>
                        <h5 style={{ color: "#007BFF", fontWeight: "bold", fontSize: "16px" }}>
                          Charges
                        </h5>
                        <ul style={{ fontSize: "14px", paddingLeft: "15px", marginBottom: 0 }}>
                          <li>
                            UAE 30 Days Single Entry E-Visa
                            {" "}
                            <strong style={{ color: "#ff9800" }}>Rs: 7,854/-</strong>
                          </li>
                          <li>
                            UAE 30 Days Multiple  Entry E-Visa
                            {" "}
                            <strong style={{ color: "#ff9800" }}>Rs: 14,600/-</strong>
                          </li>
                          <li>
                            UAE 60 Days Single Entry E-Visa
                            {" "}
                            <strong style={{ color: "#ff9800" }}>Rs: 12,446/-</strong>
                          </li>
                          <li>
                            UAE 60 Days Multiple Entry E-Visa
                            {" "}
                            <strong style={{ color: "#ff9800" }}>Rs: 19,118/-</strong>
                          </li>
                          <li>
                            <strong style={{ color: "#ff9800" }}>Rs. 99/-</strong> as booking fee.
                            Need to pay while submitting online form (This amount will be
                            adjusted in total bill)
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                           <div className="d-flex align-items-center w-100 flex-wrap mt-5 gap-3  d-none d-lg-block" style={{ marginLeft: '2%' }}>
                    {/* Image Section */}
            

                    {/* Content Section */}
                    <div style={{ marginTop: '' }}>
                      <h5 style={{ color: "#007BFF", fontWeight: "bold" }}>Charges</h5>
                      <ul style={{ listStyleType: "disc", paddingLeft: "20px", }}>
                        <li>
                          UAE 30 Days Single Entry E-Visa <strong style={{ color: '#ff9800' }}>Rs. 7,854/-</strong>
                        </li>
                        <li>
                          UAE 30 Days Multiple  Entry E-Visa <strong style={{ color: '#ff9800' }}>Rs. 14,600/-</strong>
                        </li>
                        <li>
                          UAE 60 Days Single Entry E-Visa <strong style={{ color: '#ff9800' }}>Rs. 12,446/-</strong>
                        </li>
                        <li>
                          UAE 60 Days Multiple Entry E-Visa <strong style={{ color: '#ff9800' }}>Rs. 19,118/-</strong>
                        </li>

                        <li> <strong style={{ color: '#ff9800' }}>Rs. 99/-</strong> as booking fee. Need to pay while submitting online form <br />(This mount will a be adjusted in total bill)</li>

                      </ul>
                    </div>
                  </div>
                  <br />
                  {/* Client Reviews */}
                  <div
                    className="col-md-12  d-none d-lg-block"
                    style={{ padding: "20px", backgroundColor: "#f0f4f8" }}
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
                                >
                                  "The process was super smooth! I applied for my Dubai tourist visa and got it within 3 days. The team was very helpful and guided me at every step. Highly recommended for anyone looking for a hassle-free Dubai visa service."
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
                                    P
                                  </div>
                                  <span
                                    style={{
                                      fontWeight: "bold",
                                      fontSize: "14px",
                                      color: "#374151",
                                    }}
                                  >
                                    Neha Sharma

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
                                  "I was a bit confused about the Dubai visa documentation, but their team made it so simple. They handled everything professionally and kept me updated until I received my visa. Excellent service for Indians applying for Dubai tourist visas."
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
                                    A
                                  </div>
                                  <span
                                    style={{
                                      fontWeight: "bold",
                                      fontSize: "14px",
                                      color: "#374151",
                                    }}
                                  >
                                    Rahul Mehta

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
                                  "I needed an urgent Dubai tourist visa for a family trip, and they ensured it was processed on time. Very responsive and reliable. Their expert assistance made the entire visa process stress-free."
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
                                    Priya Reddy
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
                                  "Best service for Dubai tourist visas! Their team clarified all my doubts and provided a checklist that made document preparation easy. I received my visa faster than expected. Great experience."
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
                                    A
                                  </div>
                                  <span
                                    style={{
                                      fontWeight: "bold",
                                      fontSize: "14px",
                                      color: "#374151",
                                    }}
                                  >
                                    Karan Gupta

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
                                  "Applying for a Dubai tourist visa through them was a great decision. I was worried about delays, but they handled my application swiftly and professionally. Truly impressed with their transparency and timely updates."
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
                                    A
                                  </div>
                                  <span
                                    style={{
                                      fontWeight: "bold",
                                      fontSize: "14px",
                                      color: "#374151",
                                    }}
                                  >
                                    Aditi Desai
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
                                  "Perfect for first-time travelers! I had no idea about Dubai visa formalities, but their step-by-step support made it simple. The visa was delivered to my inbox within 4 days. Highly efficient and trustworthy service."
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
                                    s
                                  </div>
                                  <span
                                    style={{
                                      fontWeight: "bold",
                                      fontSize: "14px",
                                      color: "#374151",
                                    }}
                                  >
                                    Sameer Khan


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
                                name: "Neha Sharma",
                                initial: "P",
                                review:
                                  "The process was super smooth! I applied for my Dubai tourist visa and got it within 3 days. The team was very helpful and guided me at every step. Highly recommended for anyone looking for a hassle-free Dubai visa service.",
                              },
                              {
                                name: "Rahul Mehta",
                                initial: "A",
                                review:
                                  "I was a bit confused about the Dubai visa documentation, but their team made it so simple. They handled everything professionally and kept me updated until I received my visa. Excellent service for Indians applying for Dubai tourist visas.",
                              },
                              {
                                name: "Priya Reddy",
                                initial: "M",
                                review:
                                  "I needed an urgent Dubai tourist visa for a family trip, and they ensured it was processed on time. Very responsive and reliable. Their expert assistance made the entire visa process stress-free.",
                              },
                              {
                                name: "Karan Gupta",
                                initial: "P",
                                review:
                                  "Best service for Dubai tourist visas! Their team clarified all my doubts and provided a checklist that made document preparation easy. I received my visa faster than expected. Great experience.",
                              },
                              {
                                name: "Aditi Desai",
                                initial: "A",
                                review:
                                  "Applying for a Dubai tourist visa through them was a great decision. I was worried about delays, but they handled my application swiftly and professionally. Truly impressed with their transparency and timely updates.",
                              },
                              {
                                name: "Sameer Khan",
                                initial: "M",
                                review:
                                  "Perfect for first-time travelers! I had no idea about Dubai visa formalities, but their step-by-step support made it simple. The visa was delivered to my inbox within 4 days. Highly efficient and trustworthy service.",
                              }
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


                </div>



                {/* Right Column () */}
                <div
                  className="col-md-4 d-none d-lg-block"
                  ref={stickyColumnRef}
                  style={{
                    position: isSticky ? "fixed" : "absolute",
                    top: isSticky ? "200px" : "auto", // Adjust this to avoid banner overlap
                    right: 0,
                    width: isSticky && stickyColumnRef.current ? `${stickyColumnRef.current.offsetWidth}px` : "auto",
                    zIndex: 1000,
                  }}

                >
                  <div
                    style={{
                      backgroundColor: "#1976D2",
                      padding: "20px",
                      borderRadius: "10px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      zIndex: 1000,
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#ff9800",
                        color: "#333",
                        padding: "5px",
                        borderRadius: "5px",
                        fontWeight: "bold",
                        marginBottom: "15px",
                        textAlign: "center",
                      }}
                    >
                      <p style={{ fontSize: "14px" }}>
                        It takes less than 2 minutes to Apply
                      </p>
                    </div>
                    <div
                      style={{
                        backgroundColor: "#f3f3f3",
                        padding: "5px",
                        borderRadius: "5px",
                        marginBottom: "15px",
                        textAlign: "center",
                      }}
                    >
                      <button
                        onClick={handleContinue}
                        style={{
                          backgroundColor: "",
                          color: "#000",
                          border: "none",
                          padding: "10px 20px",
                          fontSize: "14px",
                          fontWeight: "bold",
                          borderRadius: "5px",
                        }}
                      >
                        Apply Online
                      </button>
                    </div>

                    {/* <a href="https://wa.me/+919980097315" style={{ textDecoration: "none" }}>
  <div
    style={{
      backgroundColor: "#f3f3f3",
      color: "#000",
      padding: "5px",
      borderRadius: "5px",
      marginBottom: "15px",
      display: "flex",
      alignItems: "center",
    }}
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
      alt="WhatsApp Icon"
      style={{ width: "20px", marginRight: "10px" }}
    />
    <div>
      <p
        style={{
          fontSize: "14px",
          margin: 0,
          color:'#fff',
          backgroundColor: "#128C7E",
          padding: "3px 5px",
          borderRadius: "3px",
        }}
      >
        Visa on WhatsApp
      </p>
      <p style={{ fontSize: "16px", fontWeight: "bold", margin: 0 }}>
        +91 9980097315
      </p>
    </div>
  </div>
</a>

<a href="tel:+919429690973" style={{ textDecoration: "none" }}>
  <div
    style={{
      backgroundColor: "#f3f3f3",
      color: "#000",
      padding: "5px",
      borderRadius: "5px",
      marginBottom: "15px",
      display: "flex",
      alignItems: "center",
    }}
  >
    <i
      className="fa fa-phone"
      style={{
        fontSize: "20px",
        marginRight: "10px",
        color: "#408bdd",
      }}
    ></i>
    <div>
      <p
        style={{
          fontSize: "14px",
          margin: 0,
          backgroundColor: "#128C7E",
          padding: "3px 5px",
          color:'#fff',
          borderRadius: "3px",
        }}
      >
        Call us on
      </p>
      <p style={{ fontSize: "16px", fontWeight: "bold", margin: 0 }}>
        94296 90973
      </p>
    </div>
  </div>
</a>


<div
  style={{
    backgroundColor: "#f3f3f3",
    color: "#000",
    padding: "5px",
    borderRadius: "5px",
    marginBottom: "15px",
    display: "flex",
    alignItems: "center",
  }}
>
  <i className="fas fa-clock" style={{ marginRight: "10px", fontSize: "16px" }}></i>
  <div>
    <p style={{ fontSize: "14px", margin: 0 }}>Timing</p>
    <p
      style={{
        fontSize: "16px",
        fontWeight: "bold",
        margin: 0,
      }}
    >
      9am to 9pm
    </p>
  </div>
</div> */}
                  </div>
                </div>
                {/* Sticky Bottom Bar for Mobile Only */}
                <div

                  style={{
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    backgroundColor: "#ffffff",
                    boxShadow: "0 -2px 6px rgba(0,0,0,0.1)",
                    display: window.innerWidth <= 768 ? "flex" : "none",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px 15px",
                    zIndex: 9999,
                  }}
                >


                  {/* <a
    href="https://wa.me/+919980097315"
    style={{
      width: "45px",
      height: "45px",
      backgroundColor: "#25d366",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "8px",
      marginRight: "10px",
      color: "#fff",
      fontSize: "20px",
      textDecoration: "none",
    }}
  >
    <i className="fab fa-whatsapp"></i>
  </a> */}
                  <button
                    onClick={handleContinue}
                    style={{
                      flex: 1,
                      marginRight: "10px",
                      padding: "10px",
                      backgroundColor: "#007bff",
                      color: "#fff",
                      border: "none",
                      borderRadius: "8px",
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    Apply Now
                  </button>

                  {/* <a
    href="tel:+919429690973"
    style={{
      width: "45px",
      height: "45px",
      backgroundColor: "#ff9800",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "8px",
      color: "#fff",
      fontSize: "20px",
      textDecoration: "none",
    }}
  >
    <i className="fa fa-phone"></i>
  </a> */}
                </div>


              </div>
            </div>

            <div
              ref={stopStickyRef}
              style={{
                backgroundColor: "#f8f8f8",
                padding: "30px 20px",
                borderRadius: "10px",
                textAlign: "center",
                margin: "40px auto",
                maxWidth: "1000px",
              }}
            >
              <h2
                style={{
                  fontWeight: "bold",
                  fontSize: "24px",
                  marginBottom: "20px",
                }}
              >
                Our Other Country Visa Services
              </h2>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "12px",
                  justifyContent: "center",
                }}
              >
                {relatedServices.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => handleClick(service)}
                    style={{
                      padding: "10px 20px",
                      borderRadius: "999px",
                      border: `1px solid ${active === service.name ? "#000" : "#ccc"
                        }`,
                      backgroundColor:
                        active === service.name ? "#212529" : "#fff",
                      color: active === service.name ? "#fff" : "#000",
                      cursor: "pointer",
                      fontSize: "14px",
                      fontWeight: "500",
                      transition: "all 0.3s ease",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {service.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
                Explore Our Latest Blogs
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "20px",
                  margin: "40px",
                }}
              >
                {blogs.slice(0, visibleCount).map((blog, index) => (
                  <div
                    key={blog.title}
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: "8px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                      overflow: "hidden",
                    }}
                  >
                    {blog.image && (
                      <Link to={`/blogs/${blog.title.toLowerCase()}`}>
                        <img
                          className="blog-card-image"
                          src={`https://api.makemydocuments.com/uploads/blogs/${blog.image}`}
                          alt={blog.title}
                        />
                      </Link>
                    )}

                    <div style={{ padding: "15px" }}>
                      <h3 className="blog-title">
                        {blog.title.replace(/-/g, " ")}
                      </h3>

                      <div
                        style={{
                          fontSize: "14px",
                          color: "#333",
                          overflow: "hidden",
                          height: "60px",
                        }}
                        dangerouslySetInnerHTML={{
                          __html: blog.description.substring(0, 120) + "...",
                        }}
                      />
                      <Link
                        to={`/blogs/${blog.title.toLowerCase()}`}
                        style={{
                          display: "inline-block",
                          marginTop: "10px",
                          color: "#007bff",
                          textDecoration: "underline",
                          fontWeight: "500",
                        }}
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="faq-section-visa"
            // style={{
            //   margin: "10px auto",
            //   padding: "20px",
            //   background: "#FFFFFF",
            //   borderRadius: "10px",
            //   width: "80%",
            // }}
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
                      <h5 style={{ fontSize: '16px' }}>{faq.question}</h5>
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
              <br></br>
              <>
                <h2 className="faq-tag-title-h3">
                  <strong>Dubai Tourist Visa for Indians - A Complete Guide

                  </strong>
                </h2>
                <br />
                <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}> Types of Dubai Tourist Visas for Indians
                </h2>
                <br />
                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}> 30-Day Tourist Visa: </h3>
                <p style={{ textAlign: 'left' }}>
                  The 30-Day Tourist Visa is perfect for travelers who want to explore Dubai for a short period. This visa allows you to stay in Dubai for up to 30 days, providing ample time to explore the city's iconic attractions, shopping destinations and cultural sites. This visa is ideal for a quick vacation or business trip.
                </p>
                <br />
                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}> 90-Day Tourist Visa
                  : </h3>
                <p style={{ textAlign: 'left' }}>
                  The 90-Day Tourist Visa is designed for those who want to stay in Dubai for a longer duration. With this visa, you can stay up to 90 days, making it perfect for travelers planning a more extended visit. It’s an excellent option for tourists who want to enjoy Dubai at a relaxed pace or who are attending long-term events or activities.
                </p>
                <br />
                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}> Multiple Entry Visa
                  : </h3>
                <p style={{ textAlign: 'left' }}>
                  The Multiple Entry Visa allows travelers to visit Dubai multiple times within a specific period (usually six months). This visa is ideal for individuals who need to travel to Dubai for business or leisure multiple times during their stay. The multiple-entry option is more flexible and convenient, as you don't need to apply for a new visa every time you travel.
                </p>
                <br />
                <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>
                  Who is Eligible for a Dubai Tourist Visa?
                </h2>
                <br />
                <ul style={{ textAlign: 'left', paddingLeft: '18px', listStyleType: 'disc' }}>
                  <li>
                    <strong>Indian Nationals:</strong> Indian passport holders are eligible to apply for a Dubai tourist visa.
                  </li>
                  <li>
                    <strong>Age Requirement:</strong> Applicants must be 18 years or older. Minors must travel with parents or a guardian.
                  </li>
                  <li>
                    <strong>Valid Passport:</strong> Passport must be valid for at least six months from the date of travel.
                  </li>
                  <li>
                    <strong>Travel Purpose:</strong> The visa is for those visiting Dubai for tourism, leisure, or short business trips.

                  </li>
                  <li>
                    <strong>Clear Travel History:</strong> Applicants should have a clean travel history without any prior visa violations or overstay issues.
                  </li>
                  <li>
                    <strong>Return Ticket:</strong> A return flight booking is typically required to prove the intention of returning to India after the visit.

                  </li>
                  <li>
                    <strong>Hotel Accommodation:</strong> Proof of hotel booking or accommodation details in Dubai is necessary.

                  </li>
                  <li>
                    <strong>No Criminal Record:</strong> A clean criminal background is essential for visa approval.

                  </li>
                </ul>
                <br />
                <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>
                  Why Choose Dubai as a Travel Destination?

                </h2>
                <br />
                <ul style={{ textAlign: 'left', paddingLeft: '18px', listStyleType: 'disc' }}>
                  <li>
                    <strong>World-Class Attractions:</strong> Dubai is home to some of the world’s most iconic landmarks, including the Burj Khalifa, Burj Al Arab and Palm Jumeirah.
                  </li>
                  <li>
                    <strong>Shopping Paradise:</strong> Dubai boasts some of the largest malls, including the Dubai Mall, offering a vast range of international brands, luxury goods and entertainment options.

                  </li>
                  <li>
                    <strong>Luxury and Comfort:</strong>  The city is renowned for its luxury hotels, resorts and high-end experiences, catering to those seeking a lavish lifestyle.

                  </li>
                  <li>
                    <strong>Adventure and Thrills:</strong>  From desert safaris and dune bashing to skydiving over the Palm, Dubai offers thrilling activities for adventure seekers.


                  </li>
                  <li>
                    <strong>Vibrant Nightlife:</strong> Dubai offers a lively nightlife scene with upscale bars, nightclubs and beach parties.

                  </li>
                  <li>
                    <strong>Events and Festivals:</strong> The city hosts various international events, including the Dubai Shopping Festival, Dubai World Cup and global music festivals.
                  </li>

                </ul>
                <br />
                <h2 style={{ fontSize: '16px', fontWeight: 'bold' }}>How to Apply for a Dubai Tourist Visa for Indians</h2>

                <br />
                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>Register Online
                  : </h3>
                <p style={{ textAlign: 'left' }}>
                  The first step in applying for a Dubai Tourist Visa is to register online through the official visa application platform. You will need to provide basic personal information, such as your name, nationality, passport details, and travel dates.
                </p>
                <br />
                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>Upload Documents
                  : </h3>
                <p style={{ textAlign: 'left' }}>
                  After registering, you’ll need to upload necessary documents like a clear scan of your passport, a recent passport-sized photograph, flight bookings, hotel reservations, and proof of financial stability (e.g., bank statements).
                </p>
                <br />
                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>Documents Verification
                  : </h3>
                <p style={{ textAlign: 'left' }}>
                  Once the documents are uploaded, they will undergo a verification process. The Dubai immigration authorities will check for document authenticity and ensure that all necessary information has been provided.
                </p>
                <br />
                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>Payment
                  : </h3>
                <p style={{ textAlign: 'left' }}>
                  Next, you’ll be required to make the payment for the visa application. The payment can be made online using various methods, such as debit/credit cards or bank transfers. Once the payment is confirmed, the processing of your visa application begins.
                </p>
                <br />
                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}> Receive your E-Visa via E-mail

                  : </h3>
                <p style={{ textAlign: 'left' }}>
                  After processing your application, the approved tourist visa will be sent to your email address in the form of an e-visa. This e-visa will contain all the details about your travel, including the visa validity, entry dates, and duration of stay. Ensure that you print a copy of your e-visa to present at immigration upon arrival in Dubai.

                </p>
                <br />
                <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>Things to Know Before Traveling          </h2>
                <br />
                <h3 style={{ fontSize: '17px', fontWeight: 'bold' }}> Dubai Travel Restrictions </h3>
                <br />
                <h4 style={{ fontSize: '16px', fontWeight: 'bold' }}> Health Insurance
                  : </h4>
                <p style={{ textAlign: 'left' }}>
                  Travel insurance covering health and medical emergencies is often recommended.
                </p>
                <br />
                <h4 style={{ fontSize: '16px', fontWeight: 'bold' }}>Customs Regulations
                  : </h4>
                <p style={{ textAlign: 'left' }}>
                  Adhere to Dubai’s strict customs regulations, including limits on alcohol and restricted items.
                </p>
                <br />
                <h4 style={{ fontSize: '16px', fontWeight: 'bold' }}>Baggage Allowances
                  : </h4>
                <p style={{ textAlign: 'left' }}>
                  Be mindful of baggage restrictions and customs allowances for duty-free goods.
                </p>
                <br />
                <h4 style={{ fontSize: '16px', fontWeight: 'bold' }}>Travel Advisories
                  : </h4>
                <p style={{ textAlign: 'left' }}>
                  Always check for any specific travel advisories or regional restrictions before departure.
                </p>
                <br />

                <h4 style={{ fontSize: '16px', fontWeight: 'bold' }}> Travel Restrictions for Certain Nationalities
                  : </h4>
                <p style={{ textAlign: 'left' }}>
                  Some countries may face specific entry restrictions; always check the latest updates before applying for a visa.
                </p>
                <br />
                <h4 style={{ fontSize: '16px', fontWeight: 'bold' }}> Return Flight

                  : </h4>
                <p style={{ textAlign: 'left' }}>
                  Proof of a return flight booking or onward travel may be required.
                </p>
                <br />
                <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>
                  Important Travel Tips

                </h3>
                <p>Here are a few essential travel tips for your visit to Dubai:
                </p>
                <br />
                <ul style={{ textAlign: 'left', paddingLeft: '18px', listStyleType: 'disc' }}>
                  <li>
                    Always carry a copy of your passport and visa.

                  </li>
                  <li>
                    Respect local customs and laws, such as dress codes in public places.


                  </li>
                  <li>
                    Be mindful of the weather, as Dubai can be extremely hot during summer months.


                  </li>
                  <li>
                    Stay hydrated and carry sunscreen to protect from the sun.



                  </li>
                  <li>
                    Familiarize yourself with Dubai’s public transport system for easy travel across the city.


                  </li>
                  <li>
                    Ensure you have travel insurance for emergencies or unforeseen circumstances.

                  </li>

                </ul>
                <br />
              </>
            </div>

            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default DubaiVisa;
