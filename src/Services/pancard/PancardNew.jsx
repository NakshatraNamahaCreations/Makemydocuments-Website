import React, { useState, useEffect, useRef } from "react";
import bannerimage from "../../images/pancardbannerimagenew.png";
import circleIcon from "../../images/circle1.svg";
// import documentsIcon from "../../images/documents.svg";  /static/media/Time.a182ea0df536d5368cf1da508977e5a9.svg
// import TimeIcon from "../../images/Time.svg";
import Price from "../../images/Price Tag.svg";
import time from "../../images/Time.svg";
import axios from "axios";

import { Link } from "react-router-dom";
import "../passport/passport.css";

import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const relatedServices = [
  { name: "Insurance", path: "/insurance" },
  { name: "Travel Visa", path: "/visa" },
  { name: "Police Verification", path: "/policeverification" },
  {
    name: "Police Clearance Certificate",
    path: "/police-clearance-certificate",
  },
  { name: "Pan Card", path: "/pan-card" },
  { name: "Affidavits / Annexure", path: "/affidavits" },
];

const PancardNew = () => {
  // const serviceRef = useRef(null);
  const navigate = useNavigate();
  //   const { services } = useParams();
  const [visibleCount] = useState(3);
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

      const bannerHeight =
        document.querySelector(".breadcrumb-title")?.offsetHeight || 0;
      const scrollTop = window.scrollY;
      const firstColumnTop =
        firstColumn.getBoundingClientRect().top + window.scrollY;
      const stopSectionTop =
        stopSection.getBoundingClientRect().top + window.scrollY;
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
    navigate("/pan-card-form");
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
      question: "What is a PAN card and why is it important?",
      answer:
        "A PAN (Permanent Account Number) card is a government-issued ID required for filing taxes, opening bank accounts, and conducting high-value financial transactions in India.",
    },
    {
      question: "Can I apply for a PAN card online without visiting an office?",
      answer:
        "Yes! With Aadhaar-based e-KYC, the entire process is 100% online. You can apply, verify, and receive your PAN card without visiting any office.",
    },
    {
      question:
        "How long does it take to get a PAN card?",
      answer: (
        <div>
          {/* <p>
            e-PAN: Delivered via email within 24–48 hours (for new applications).
          </p>
          <p>In such cases:</p> */}
          <ul style={{ listStyleType: "disc" }}>
            <li>
              e-PAN: Delivered via email within 24–48 hours (for new applications).
            </li>
            <li>
             Physical PAN Card: Delivered within 15–20 working days.
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "What if I have lost my PAN card?",
      answer: "You can easily request a duplicate or reprint. Just submit Aadhaar details and your PAN number, and you’ll receive a replacement card.",
    },
    {
      question:
        "Is Aadhaar mandatory for PAN card applications?",

      answer:  "Yes, Aadhaar is mandatory for identity verification and linking PAN.",
      
    },
    {
      question: "How much does it cost to apply for a PAN card online?",
      answer:
        "We charge ₹350 for new, correction, or lost card applications. A cancellation fee of ₹50 applies if you cancel after payment",
    },
    {
      question: "Can I update my name or address on the PAN card?",
      answer:
        "Yes! You can apply for PAN card correction to update your name, DOB, photo, or signature online.",
    },
    {
      question: "Can NRI or foreign citizens apply for a PAN card through this service?",
      answer:
        "Yes, NRIs and foreign citizens can apply, but additional documents may be required, such as passport copies or overseas address proof.",
    },
    {
      question: "Is e-PAN a valid document?",
      answer:
        "Yes, e-PAN is fully valid and can be used anywhere like a physical PAN car",
    },
    {
      question:
        "Can I link my PAN with Aadhaar through this service?",
      answer:
        "Yes, we assist with Aadhaar-PAN linking during the application process for hassle-free transactions.",
    },
  ];
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    
          <Helmet>
           <title>PAN Card Services Online | Apply New, Update & Correction</title>
       <meta name="description" content="Apply PAN card online easily. Get expert help with new PAN (Form 49A), updates, or corrections. Secure process with guidance and quick PAN application support."/>
       <meta name="keywords" content="passport, get passport fast, passport application, passport services, passport assistance, hassle-free passport, quick passport, passport team, passport solutions, secure passport, professional passport services, efficient passport application"/>
       <link rel="canonical" href="https://makemydocuments.com/passport" />
       <meta name="rating" CONTENT="General"/>
       <meta name="revisit-after" CONTENT="2 days"/>
       <meta name="robots" content=" ALL, index, follow"/>
       <meta name="distribution" content="Global" />
       <meta name="rating" content="Safe For All" />
       <meta name="language" content="English" />
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
          marginTop: "8%",
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
             PAN Card
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
                    }}
                  >
                   PAN Card Services 
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
                      99% Delivered on time
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
                          color: "#333",
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
                          whiteSpace: "nowrap",
                          display: "inline-block",
                        }}
                      >
                       15-20 working days (New Physical Pan Card)
                      </p>
                    
                      <p
                        style={{
                          fontSize: "12px",
                          fontWeight: "bold",
                          color: "#333",
                          margin: 0,
                          marginTop:"10px",
                          backgroundColor: "#e3f2fd",
                          padding: "6px 10px",
                          borderRadius: "6px",
                          whiteSpace: "nowrap",
                          display: "inline-block",
                        }}
                      >
                        20-30 working days (Lost/Correction)
                      </p>
                      
                    </div>

                    {/* <div style={{ flex: 1, textAlign: "right" }}>
                      <p
                        style={{
                          fontSize: "14px",
                          marginBottom: "5px",
                          color: "#333",
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
                        ₹2,499/-
                      </p>
                    </div> */}
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
                      onMouseOver={(e) =>
                        (e.target.style.backgroundColor = "#fea400")
                      }
                      onMouseOut={(e) =>
                        (e.target.style.backgroundColor = "#fea400")
                      }
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
                  marginTop: "37%",
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
                 PAN Card Services 
                  </p>

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
                    ⭐{" "}
                    <span style={{ marginLeft: "6px" }}>
                      99% Delivered on time
                    </span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "10px",
                    }}
                  >
                    <div>
                      <p
                        style={{
                          margin: 0,
                          fontWeight: "bold",
                          fontSize: "10px",
                        }}
                      >
                        Processing time
                      </p>
                      <p style={{ margin: 0, fontSize: "10px" }}>
                       15-20 working days (New Physical Pan Card)
                      </p>
                      
                      <p style={{ margin: 0, fontSize: "10px" }}>
                       20-30 working days (Lost/Correction)
                      </p>
                    </div>
                    {/* <div>
                      <p
                        style={{
                          margin: 0,
                          fontWeight: "bold",
                          fontSize: "10px",
                        }}
                      >
                        Starting from
                      </p>
                      <p
                        style={{
                          margin: 0,
                          color: "#ffc107",
                          fontWeight: "bold",
                          fontSize: "10px",
                        }}
                      >
                        ₹2,499/-
                      </p>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="container my-5">
              <div className="row" style={{ position: "relative" }}>
                {/* Left Column () */}
                <div className="col-md-8" ref={firstColumnRef}>

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
                        {/* <h2
                        style={{
                            fontSize: "24px",
                            fontWeight: "bold",
                            marginBottom: "15px",
                            textAlign: "left",
                        }}
                        >
                        Documents Required For New Pan Card
                        </h2> */}

                    <h4 style={{ fontWeight: "600", fontSize: "22px" }}>
                      Documents Required For New Pan Card
                    </h4>
                     <p style={{ fontSize: "16px", color: "#333", margin: 0 }}>
                      - Aadhar Card
                    </p>

                    <h4
                      style={{ fontWeight: "600", fontSize: "22px" }}
                      className="mt-3"
                    >
                      Documents Required For Correction/Lost/Damage Pan Card
                    </h4>
                    <p style={{ fontSize: "16px", color: "#333", margin: 0 }}>
                      - Aadhar Card
                    </p>
                    <p style={{ fontSize: "16px", color: "#333", margin: 0 }}>
                      - Existing Pan copy
                    </p>
               

               
                  </div>

                  <div
                    className="d-block d-lg-none"
                    style={{ padding: "15px" }}
                  >
                    <div
                      style={{
                        backgroundColor: "#fff",
                        borderRadius: "8px",
                        padding: "12px",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                        marginBottom: "20px",
                      }}
                    >
                      <h5
                        style={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          marginBottom: "10px",
                        }}
                      >
                        Documents Required For New Pan Card
                      </h5>

                      
                      <p style={{ fontSize: "13px", marginBottom: "5px" }}>
                        - Aadhar Card
                      </p>
               

                      <h5
                        style={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          marginBottom: "10px",
                        }}
                      >
                        Documents Required For New Pan Card
                      </h5>

                      <p style={{ fontSize: "13px", marginBottom: "5px" }}>
                        - Aadhar Card
                      </p>
                      <p style={{ fontSize: "13px", marginBottom: "5px" }}>
                        - Existing Pan copy
                      </p>
                 

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
                            Step 1: Register And Pay Online
                          </h3>
                         
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
                            Step 3: Online EKYC
                          </h3>
                     
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
                            Step 4: Get Delivered
                          </h3>
                         
                        </div>
                      </div>
                    
                      
                    </div>
                  </div>




                  {/* Charges Section (Scrollable) */}
                  <div
                    className="d-flex align-items-center w-100 flex-wrap mt-5 gap-3  d-none d-lg-block"
                    style={{ marginLeft: "2%" }}
                  >
                    {/* Image Section */}
                    {/* <div className="d-flex justify-content-center align-items-center">
    <div style={{ position: "relative", display: "inline-block",  marginTop:'-100%', marginLeft:'' }}>
      <img src={circleIcon} alt="Circle Background" className="img-fluid"  />
      <img
        src={Price}
        alt="Charges Icon"
        style={{
          position: "absolute",
          top: "56%",
          left: "43%",
          transform: "translate(-50%, -50%)",
          maxWidth: "35px",
        }}
      />
    </div>
  </div> */}

                    {/* Content Section */}
                    <div style={{ marginTop: "" }}>
                      <h5 style={{ color: "#007BFF", fontWeight: "bold" }}>
                        Charges
                      </h5>
                      <ul
                        style={{ listStyleType: "disc", paddingLeft: "20px" }}
                      >
                        <li>
                          <strong style={{ color: "#ff9800" }}>
                            Rs. 350/-
                          </strong>{" "}
                          For (Normal Application)
                        </li>
                        <li>
                          {/* <strong style={{ color: "#ff9800" }}>
                            Rs. 4,499/-
                          </strong>{" "} */}
                         
If you decide to cancel your order after payment, please note that a cancellation fee of Rs. 50 will apply.
                        </li>
                     
                      </ul>
                    </div>
                    <br />
                      <div style={{ marginTop: "" }}>
                      <h5 style={{ color: "#007BFF", fontWeight: "bold" }}>
                        Time Duration
                      </h5>
                      <ul
                        style={{ listStyleType: "disc", paddingLeft: "20px" }}
                      >
                        <li>
                         15-20 working days (New Physical Pan Card)
                        </li>
                        <li>
                          20-30 working days (Lost/Correction)
                        </li>
                      <li>
                          E- Pan Card Copy 24 - 48 hrs (New Application Only)

                        </li>
                         <li>
                          Applicant Will Receive Both E- Pan And Physical Card
                        </li>
                      </ul>
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
                        <h5
                          style={{
                            color: "#007BFF",
                            fontWeight: "bold",
                            fontSize: "16px",
                          }}
                        >
                          Charges
                        </h5>
                        <ul
                          style={{
                            fontSize: "14px",
                            paddingLeft: "15px",
                            marginBottom: 0,
                          }}
                        >
                          <li>
                            <strong style={{ color: "#ff9800" }}>
                              Rs. 2,499/-
                            </strong>{" "}
                            For (Normal Application){" "}
                          </li>
                          <li>
                            <strong style={{ color: "#ff9800" }}>
                              Rs. 4,499/-{" "}
                            </strong>{" "}
                            For (Tatkal Application){" "}
                          </li>
                          <li>
                            <strong style={{ color: "#ff9800" }}>
                              Rs. 99/-
                            </strong>{" "}
                            as booking fee. Need to pay while submitting online
                            form (This amount will be adjusted in total bill)
                          </li>
                        </ul>
                      </div>
                    </div>
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
                          style={{ width: "70%", height: "70%" }}
                        />
                        <img
                          src={time}
                          alt="Price Icon"
                          style={{
                            position: "absolute",
                            top: "35%",
                            left: "38%",
                            transform: "translate(-50%, -50%)",
                            width: "26px",
                          }}
                        />
                      </div>
                      <div>
                        <h5
                          style={{
                            color: "#007BFF",
                            fontWeight: "bold",
                            fontSize: "16px",
                          }}
                        >
                         Time Duration  
                        </h5>
                        <ul
                          style={{
                            fontSize: "14px",
                            paddingLeft: "15px",
                            marginBottom: 0,
                          }}
                        >
                          <li>
                          15-20 working days (New Physical Pan Card)
                          </li>
                          <li>
                           20-30 working days (Lost/Correction)
                          </li>
                          <li>
                          E- Pan Card Copy 24 - 48 hrs (New Application Only)
                          </li>
                            <li>
                         Applicant Will Receive Both E- Pan And Physical Card
                          </li>
                        </ul>
                      </div>
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
                                                                > "Trustworthy and very easy making pan at home."
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
                                                                       Maryam Azeez

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
                                                                    "I had lost my PAN card and needed a replacement urgently. The team guided me step-by-step, and I received both the e-PAN and physical card without any hassle. Highly recommended!"
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
                                                                      Arun Kumar

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
                                                                    "Very professional and secure service! I was worried about rejections, but their verification process ensured everything was correct the first time"
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
                                                                       Meera N
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
                                                                    "Make my documents was supportive and attentive to let me get my new pan card It actively works during its scheduled time"
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
                                                                       Aneel Ram
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
                                                                    "Process is very clearly defined which made it easy to follow through. The person is also very helpful and polite. Thanks"
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
                                                                        
                                                                        Aneev Sinha
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
                                                                    "Exceptional service! The entire process was smooth and stress-free. They kept me updated at every stage, and I received my documents right on time. Highly recommend!"
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
                                                                      Sahana R.


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
                            style={{
                              filter: "invert(1)",
                              width: "20px",
                              height: "20px",
                            }}
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
                            style={{
                              filter: "invert(1)",
                              width: "20px",
                              height: "20px",
                            }}
                          ></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {window.innerWidth <= 768 && (
                    <div
                      style={{ padding: "20px", backgroundColor: "#f0f4f8" }}
                      className="d-block d-lg-none"
                    >
                      <div
                        style={{ padding: "20px", backgroundColor: "#f9fafb" }}
                      >
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
                                                                name: "Maryam Azeez",
                                                                initial: "N",
                                                                review:
                                                                    "Trustworthy and very easy making pan at home",
                                                            },
                                                            {
                                                                name: "Arun Kumar",
                                                                initial: "R",
                                                                review:
                                                                    "I had lost my PAN card and needed a replacement urgently. The team guided me step-by-step, and I received both the e-PAN and physical card without any hassle. Highly recommended!",
                                                            },
                                                            {
                                                                name: "Meera N",
                                                                initial: "S",
                                                                review:
                                                                    "Very professional and secure service! I was worried about rejections, but their verification process ensured everything was correct the first time.",
                                                            },
                                                            {
                                                                name: "Aneel Ram",
                                                                initial: "M",
                                                                review:
                                                                    "Make my documents was supportive and attentive to let me get my new pan card It actively works during its scheduled time",
                                                            },
                                                            {
                                                                name: "Aneev Sinha",
                                                                initial: "S",
                                                                review:
                                                                    "Process is very clearly defined which made it easy to follow through. The person is also very helpful and polite. Thanks",
                                                            },
                                                            {
                                                                name: "Sahana R.",
                                                                initial: "R",
                                                                review:
                                                                    "Exceptional service! The entire process was smooth and stress-free. They kept me updated at every stage, and I received my documents right on time. Highly recommend!",
                                                            },
                            ].map((item, index) => (
                              <div
                                className={`carousel-item ${
                                  index === 0 ? "active" : ""
                                }`}
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
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
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
                            <span
                              className="carousel-control-prev-icon"
                              aria-hidden="true"
                              style={{ marginLeft: "-120%" }}
                            ></span>
                          </button>
                          <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#mobileReviewCarousel"
                            data-bs-slide="next"
                          >
                            <span
                              className="carousel-control-next-icon"
                              aria-hidden="true"
                              style={{ marginRight: "-80%" }}
                            ></span>
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
                    width:
                      isSticky && stickyColumnRef.current
                        ? `${stickyColumnRef.current.offsetWidth}px`
                        : "auto",
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
                Our Other Related Services
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
                      border: `1px solid ${
                        active === service.name ? "#000" : "#ccc"
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
              className="faq-section"
              style={{
                margin: "14px auto",
                padding: "20px",
                background: "#FFFFFF",
                borderRadius: "10px",
                width: "80%",
              }}
            >
             
              <br />
              <>
               <h2 className="faq-tag-title-h3">
            <strong>Apply For PAN Card Services – Make My Documents </strong>
          </h2>
          <p style={{ textAlign: "left" }}>
            Are you in need of a quick and efficient method to acquire your PAN
            card without the usual long waits and tons of paperwork? We at Make
            My Documents take the hassle out of the complete process of PAN card
            application, correction, and replacement. New PAN card, updating
            inaccurate details, or PAN card loss, our team is committed to
            providing you with a quick, hassle-free, and low-cost solution.
          </p>
          <p style={{ textAlign: "left" }}>
            We do the hard work so that you can apply for a PAN card online
            without any inconvenience. Our method, which is safe and sound,
            along with the professional verification and delivery at your
            doorstep, ensures that you will never encounter rejections or
            delays.
          </p>
          <h2 className="faq-tag-title-h3" style={{textAlign:'left', fontSize: "22px"}}>
            <strong> How It Works</strong>
          </h2>
          <p style={{ textAlign: "left" }}>
            We follow a simple, step-by-step process to make PAN card
            applications stress-free:
          </p>

          <p style={{ textAlign: "left" }}>
            <strong>Register & Pay Online – </strong> Choose your service and
            pay securely through our platform.
          </p>
          <p style={{ textAlign: "left" }}>
            <strong>Upload Documents – </strong> Submit your Aadhaar card and
            other required documents digitally.
          </p>
          <p style={{ textAlign: "left" }}>
            <strong>Online e-KYC Verification – </strong> Complete your identity
            verification online in minutes.
          </p>
          <p style={{ textAlign: "left" }}>
            <strong>Get Delivered – </strong> Receive your e-PAN card within
            24-48 hours and a physical card at your doorstep.
          </p>

          <h2 className="faq-tag-title-h3" style={{textAlign:'left', fontSize: "22px"}}>
            <strong>Processing Time</strong>
          </h2>
          <ul>
            <li>
              <strong>New PAN Card (Physical): </strong>15–20 working days
            </li>
            <li>
              <strong>Correction / Lost / Damaged PAN Card: </strong>20–30
              working days
            </li>
            <li>
              <strong>E-PAN Card (New Applications): </strong>Delivered in 24–48
              hours
            </li>
          </ul>

          <p style={{ textAlign: "left" }}>
            All applicants will receive both e-PAN and physical PAN card for
            convenience.
          </p>
          <h2 className="faq-tag-title-h3" style={{textAlign:'left', fontSize: "22px"}}>
            <strong>Documents Required for New PAN Application</strong>
          </h2>

          <p style={{ textAlign: "left" }}>
            It requires minimal documents to get a new PAN card online. PAN
            (Permanent Account Number) is a must for tax filing, bank account
            opening, and financial transactions in India. So:
          </p>
          <ul>
            <li>
              Aadhaar Card (must) – Your Aadhaar number is taken as the
              identification and linking will be done.{" "}
            </li>
            <li>
              {" "}
              Passport-size Photograph – A recent, clear photo (as per the
              government's standards).
            </li>
            <li>
              Proof of Date of Birth – Aadhaar, birth certificate, or passport.{" "}
            </li>
            <li>
              {" "}
              Mobile Number Linked to Aadhaar – Needed for OTP-based e-KYC
              verification.
            </li>
            <li>
              {" "}
              Valid Email Address – For e-PAN delivery and other communication.
            </li>
            <li> e-KYC</li>
            <li>
              {" "}
              Aadhaar-based e-KYC removes the need for physical paperwork and
              signatures.
            </li>
          </ul>
          <h2 className="faq-tag-title-h3" style={{textAlign:'left', fontSize: "22px"}}>
            <strong>Online PAN Application – Steps for Filling</strong>
          </h2>
             <p style={{ textAlign: "left" }}>Filing for a PAN card online is a fully digital procedure, which is why it is more efficient and convenient than going to the government offices. A guide to the procedure in brief:</p>
          <p style={{ textAlign: "left", fontWeight: "bold" }}>PAN Application Type Selection</p>
          <p style={{ textAlign: "left" }}>Choose “New PAN Card” if you want to create a new one or “Correction/Update PAN” to modify the existing one.</p>
          <p style={{ textAlign: "left", fontWeight: "bold" }}>Complete the Form (49A)</p>
          <p style={{ textAlign: "left" }}>Type your name, father’s name, date of birth, Aadhaar, and contact details correctly to assure acceptance of the form.</p>
          <p style={{ textAlign: "left", fontWeight: "bold" }}>Submit the Documents for PAN</p>
          <p style={{ textAlign: "left" }}>Submit the electronic copies of your Aadhaar and any other required documents.</p>
          <p style={{ textAlign: "left", fontWeight: "bold" }}>e-KYC & Payment</p>
          <p style={{ textAlign: "left" }}>Authenticate identity through Aadhaar OTP and make the payment online.</p>
          <p style={{ textAlign: "left", fontWeight: "bold" }}>Get your e-PAN</p>
       <p style={{ textAlign: "left" }}>The e-PAN card will be with you 24–48 hours after successful online filing and a physical card will be delivered to you within 15–20 working days.</p>

          <h2 className="faq-tag-title-h3" style={{textAlign:'left', fontSize: "22px"}}>
            <strong>How to Reapply for a Lost or Damaged PAN Card</strong>
          </h2>
          <p style={{ textAlign: "left" }}>Losing your PAN card can be stressful, but you don’t need to worry — applying for a replacement is quick and easy. Follow these steps:</p>
          <p style={{ textAlign: "left", fontWeight: "bold" }}>Gather Your Aadhaar & PAN Details</p>
          <p style={{ textAlign: "left" }}> Have your Aadhaar card and PAN number handy (PAN copy if available).</p>
          <p style={{ textAlign: "left", fontWeight: "bold" }}>Submit a Reprint Request</p>
          <p style={{ textAlign: "left"}}> Choose the ‘Reprint/Replacement’ option while filling the PAN form online.</p>
          <p style={{ textAlign: "left", fontWeight: "bold" }}>Verify Identity</p>
          <p style={{ textAlign: "left" }}>Complete OTP-based Aadhaar e-KYC for instant verification.</p>
          <p style={{ textAlign: "left", fontWeight: "bold" }}>Pay the Replacement Fee</p>
          <p style={{ textAlign: "left" }}> A small fee is charged for reissuing your PAN card.</p>
          <p style={{ textAlign: "left", fontWeight: "bold" }}>Receive Your e-PAN and Physical Card</p>
          <ul>
            <li>e-PAN: Delivered via email in 24–48 hours.</li>
             <li>Physical PAN Card: Delivered to your registered address in 20–30 working days.</li>
          </ul>
            
            
              </>
                <br />
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
                      <h5 style={{ fontSize: "16px" }}>{faq.question}</h5>
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

            <br />
          </div>
        </div>
       </div>
    </>
  );
};

export default PancardNew;
