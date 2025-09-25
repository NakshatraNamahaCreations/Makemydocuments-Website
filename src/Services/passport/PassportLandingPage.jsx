import React, { useState, useEffect, useRef } from "react";
import bannerimage from "../../images/passportbanner2.png";
import circleIcon from "../../images/circle1.svg";
// import documentsIcon from "../../images/documents.svg";
// import TimeIcon from "../../images/Time.svg";
import Price from "../../images/Price Tag.svg";
import axios from "axios";

import { Link } from "react-router-dom";
import "../passport/passport.css";

import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const relatedServices = [
  { name: "Insurance", path: "/insurance" },
   { name: "Tourist Visa", path: "/tourist-visa" },
  { name: "Police Verification", path: "/policeverification" },
  {
    name: "Police Clearance Certificate",
    path: "/police-clearance-certificate",
  },
  { name: "Pan Card", path: "/pan-card" },
  { name: "Affidavits / Annexure", path: "/affidavits" },
];

const PassportLandingPage = () => {
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
    navigate("/passport-form");
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
      question: "Can I apply for a new passport online through Make My Documents (MMD)?",
 
      answer:
        "Yes, MMD assists applicants across India with fresh passport applications. Our team guides you from document checks to appointment scheduling.",
    },
    {
      question: "Does Make My Documents (MMD) handle Tatkal passport services?",
      answer:
        "Absolutely. MMD supports both Normal and Tatkal applications, ensuring faster processing and reduced errors in the submission.",
    },
    {
      question: "Can MMD help me if I lost my passport?",
      answer: "Yes. MMD provides step-by-step assistance for reissuing lost or stolen passports, including guidance on FIR and required documents.",
    },
    {
      question: "Does Make My Documents (MMD) assist with corrections like name or address change?",
      answer: "Yes, we help applicants update personal details such as name, date of birth, or address changes in passport records.",
    },
    {
      question: "How does MMD support passport tracking after submission?",
      answer:
        "We guide applicants on using the official portal to track status and also provide personalized support if you face delays.",
    },
    {
      question: "Do minors need a separate passport application?",
      answer: "Yes, minors must apply separately with proof such as a birth certificate and parents’ passport copies.",
    },
    {
      question: "Is police verification mandatory for all applicants?",
      answer:
        "In most cases, yes. Police verification is required to confirm identity and residence before a passport is issued.",
    },
    {
      question: "What documents are required for passport renewal?",
      answer:
        "Typically, you need your old passport, valid address proof, and government-issued ID.",
    },
    {
      question: "How long does the passport process usually take?",
      answer:
        "Normal applications take about 15–20 working days, while Tatkal applications are usually completed within 5–10 working days.",
    },
    {
      question: "Can I book an appointment at any Passport Seva Kendra (PSK)?",
      answer:
        "Yes, appointments can be scheduled at your nearest PSK across cities in India, depending on slot availability.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    
          <Helmet>
           <title>Apply Passport Online | Professional Passport Assistance</title>
       <meta name="description" content="Apply for your passport online with expert assistance from Make My Documents. Get guidance for fresh, renewal, or Tatkal applications with error-free filing."/>
       <meta name="keywords" content="passport, get passport fast, passport application, passport services, passport assistance, hassle-free passport, quick passport, passport team, passport solutions, secure passport, professional passport services, efficient passport application"/>
       <link rel="canonical" href="https://www.makemydocuments.com/passport" />
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
             Apply Passport Online
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
                    Apply Passport Online with Professional Assistance
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
                        15-20 working days (Normal)
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
                        5-10 working days (Tatkal)
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
                   Apply Passport Online with Professional Assistance
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
                        15-20 working days (Normal)
                      </p>
                      
                      <p style={{ margin: 0, fontSize: "10px" }}>
                        5-10 working days (Tatkal)
                      </p>
                    </div>
          
                  </div>
                </div>
              </div>
            </div>

            <div className="container my-5">
              <div className="row" style={{ position: "relative" }}>
                {/* Left Column () */}
                <div className="col-md-8" ref={firstColumnRef}>
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
                      Documents Required For Fresh Passport
                    </h2>

                    <h4 style={{ fontWeight: "600", fontSize: "20px" }}>
                      Proof of Identity (Any 01)
                    </h4>
                    <p style={{ fontSize: "16px", color: "#333", margin: 0 }}>
                      - Aadhar Card
                    </p>
                    <p style={{ fontSize: "16px", color: "#333", margin: 0 }}>
                      - Voter ID
                    </p>
                    <p style={{ fontSize: "16px", color: "#333", margin: 0 }}>
                      - Pan Card
                    </p>
                    <p style={{ fontSize: "16px", color: "#333", margin: 0 }}>
                      - Driving Licence
                    </p>

                    <h4
                      style={{ fontWeight: "600", fontSize: "20px" }}
                      className="mt-3"
                    >
                      Proof of Address (Any 01)
                    </h4>
                    <p style={{ fontSize: "16px", color: "#333", margin: 0 }}>
                      - Aadhar Card
                    </p>
                    <p style={{ fontSize: "16px", color: "#333", margin: 0 }}>
                      - Voter ID
                    </p>
                    <p style={{ fontSize: "16px", color: "#333", margin: 0 }}>
                      - Bank Account Passbook
                    </p>
                    <p style={{ fontSize: "16px", color: "#333", margin: 0 }}>
                      - Gas / Electricity / Telephone / Water Bill
                    </p>
                    <p style={{ fontSize: "16px", color: "#333", margin: 0 }}>
                      - Parents Passport / Spouse Passport
                    </p>

                    <h4
                      style={{ fontWeight: "600", fontSize: "20px" }}
                      className="mt-3"
                    >
                      Proof of Birth (Any 01)
                    </h4>
                    <p style={{ fontSize: "16px", color: "#333", margin: 0 }}>
                      - 10th Certificate
                    </p>
                    <p style={{ fontSize: "16px", color: "#333", margin: 0 }}>
                      - 12th Certificate
                    </p>
                    <p style={{ fontSize: "16px", color: "#333", margin: 0 }}>
                      - Higher Education Pass Certificate
                    </p>
                    <p style={{ fontSize: "16px", color: "#333", margin: 0 }}>
                      - School Leaving Certificate
                    </p>
                    <p style={{ fontSize: "16px", color: "#333", margin: 0 }}>
                      - Income Tax Assessment Order
                    </p>

                    <h3
                      style={{ fontWeight: "600", fontSize: "20px" }}
                      className="mt-4"
                    >
                      Document Required for Renewal / Reissue of Passport
                    </h3>
                    <p style={{ fontSize: "16px", color: "#333", margin: 0 }}>
                      - Original Old Passport
                    </p>
                    <p style={{ fontSize: "16px", color: "#333", margin: 0 }}>
                      - ID and Present Address Proof
                    </p>

                    <h3
                      style={{ fontWeight: "600", fontSize: "20px" }}
                      className="mt-4"
                    >
                      Document Required for Minor Passport
                    </h3>
                    <p style={{ fontSize: "16px", color: "#333", margin: 0 }}>
                      - Birth Certificate
                    </p>
                    <p style={{ fontSize: "16px", color: "#333", margin: 0 }}>
                      - Both Parents Passport
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
                        Documents Required For Fresh Passport
                      </h5>

                      <h6 style={{ fontSize: "14px", fontWeight: "bold" }}>
                        Proof of Identity (Any 01)
                      </h6>
                      <p style={{ fontSize: "13px", marginBottom: "5px" }}>
                        - Aadhar Card
                      </p>
                      <p style={{ fontSize: "13px", marginBottom: "5px" }}>
                        - Voter ID
                      </p>
                      <p style={{ fontSize: "13px", marginBottom: "5px" }}>
                        - Pan Card
                      </p>
                      <p style={{ fontSize: "13px", marginBottom: "5px" }}>
                        - Driving Licence
                      </p>

                      <h6
                        style={{
                          fontSize: "14px",
                          fontWeight: "bold",
                          marginTop: "10px",
                        }}
                      >
                        Proof of Address (Any 01)
                      </h6>
                      <p style={{ fontSize: "13px", marginBottom: "5px" }}>
                        - Aadhar Card
                      </p>
                      <p style={{ fontSize: "13px", marginBottom: "5px" }}>
                        - Voter ID
                      </p>
                      <p style={{ fontSize: "13px", marginBottom: "5px" }}>
                        - Bank Account Passbook
                      </p>
                      <p style={{ fontSize: "13px", marginBottom: "5px" }}>
                        - Gas / Electricity / Telephone / Water Bill
                      </p>
                      <p style={{ fontSize: "13px", marginBottom: "5px" }}>
                        - Parents Passport / Spouse Passport
                      </p>

                      <h6
                        style={{
                          fontSize: "14px",
                          fontWeight: "bold",
                          marginTop: "10px",
                        }}
                      >
                        Proof of Birth (Any 01)
                      </h6>
                      <p style={{ fontSize: "13px", marginBottom: "5px" }}>
                        - 10th Certificate
                      </p>
                      <p style={{ fontSize: "13px", marginBottom: "5px" }}>
                        - 12th Certificate
                      </p>
                      <p style={{ fontSize: "13px", marginBottom: "5px" }}>
                        - Higher Education Pass Certificate
                      </p>
                      <p style={{ fontSize: "13px", marginBottom: "5px" }}>
                        - School Leaving Certificate
                      </p>
                      <p style={{ fontSize: "13px", marginBottom: "5px" }}>
                        - Income Tax Assessment Order
                      </p>

                      <h5
                        style={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          marginTop: "15px",
                        }}
                      >
                        Document Required for Renewal / Reissue of Passport
                      </h5>
                      <p style={{ fontSize: "13px", marginBottom: "5px" }}>
                        - Original Old Passport
                      </p>
                      <p style={{ fontSize: "13px", marginBottom: "5px" }}>
                        - ID and Present Address Proof
                      </p>

                      <h5
                        style={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          marginTop: "15px",
                        }}
                      >
                        Document Required for Minor Passport
                      </h5>
                      <p style={{ fontSize: "13px", marginBottom: "5px" }}>
                        - Birth Certificate
                      </p>
                      <p style={{ fontSize: "13px", marginBottom: "0" }}>
                        - Both Parents Passport
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
                            Step 1: Register Online & Make Payment
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
                            Step 3: Get Appointment
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
                            Step 4: Visit PSK
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
                            Step 5: Get Delivered
                          </h3>
                         
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
                  </div>

                      <div
                    className="d-flex align-items-center w-100 flex-wrap mt-5 gap-3  d-none d-lg-block"
                    style={{ marginLeft: "2%" }}
                  >
               

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
                            Rs. 2,499/-
                          </strong>{" "}
                          For (Normal Application)
                        </li>
                        <li>
                          <strong style={{ color: "#ff9800" }}>
                            Rs. 4,499/-
                          </strong>{" "}
                          For (Tatkal Application)
                        </li>
                        <li>
                          {" "}
                          <strong style={{ color: "#ff9800" }}>
                            Rs. 99/-
                          </strong>{" "}
                          as booking fee. Need to pay while submitting online
                          form <br />
                          (This mount will a be adjusted in total bill)
                        </li>
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
                                                               "I was worried about applying for a passport online, but their assistance made everything simple. From documents to appointment, the process was smooth and stress-free."
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
                                                                       Ananya S.

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
                                                                    "I applied for my Tatkal passport with their help. The team guided me step by step and my passport was delivered on time without any issues."
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
                                                                     Rohit M.

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
                                                                   "Very professional and reliable service. They checked all my documents before submission, so there were no rejections or delays. Highly recommend their passport assistance."
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
                                                                      Meera K.
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
                                                                   "Lost my passport just before a business trip. Their team quickly handled my reissue process and kept me updated at every stage. Excellent support!"
                                                                     
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
                                                                       Vikram R.
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
                                                                    "Applying for a minor’s passport seemed confusing, but with their guidance it was hassle-free. Both my child’s application and my renewal were completed smoothly."
                                                                    
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
                                                                        Pooja D.
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
                                                                    "I used their service for my passport renewal. The application was error-free, the appointment was booked quickly, and the whole experience was seamless."
                                                                    
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
                                                                      Karthik N.
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
                                                                name: "Ananya S.",
                                                                initial: "V",
                                                                review: "I was worried about applying for a passport online, but their assistance made everything simple. From documents to appointment, the process was smooth and stress-free.",
                                                                   
                                                            },
                                                            {
                                                                name: "Rohit M.",
                                                                initial: "H",
                                                                review: "I applied for my Tatkal passport with their help. The team guided me step by step and my passport was delivered on time without any issues.",
                                                                    
                                                            },
                                                             {
                                                                name: "Meera K.",
                                                                initial: "K",
                                                                review: "Very professional and reliable service. They checked all my documents before submission, so there were no rejections or delays. Highly recommend their passport assistance.",
                                                                    
                                                            },
                                                             {
                                                                name: "Vikram R.",
                                                                initial: "S",
                                                                review:  "Lost my passport just before a business trip. Their team quickly handled my reissue process and kept me updated at every stage. Excellent support!",
                                                             },
                                                             {
                                                                name: "Pooja D.",
                                                                initial: "V",
                                                                review: "Applying for a minor’s passport seemed confusing, but with their guidance it was hassle-free. Both my child’s application and my renewal were completed smoothly.",
                                                                    
                                                            },
                                                             {
                                                                name: "Karthik N.",
                                                                initial: "R",
                                                                review: "I used their service for my passport renewal. The application was error-free, the appointment was booked quickly, and the whole experience was seamless.",
                                                                   
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
            <strong>Apply Passport Online with Professional Assistance - Make My Documents</strong>
          </h2>
          <p style={{textAlign:'left'}}>
            The process to apply passport online is often cumbersome with what feels like infinite forms, a plethora of documents and verification steps. This is the reason why opting for a helping hand to apply for your passport online is the wiser choice. Our professional team takes you through the whole process - from doing the web application to scheduling visits at the Passport Seva Kendra - thus you are not hit with the usual errors and hold-ups.
            </p>

                <p  style={{textAlign:'left'}}>
          
         We at Make My Documents, are committed to making the whole Apply Passport Online process easy and hassle-free. No matter if you are going for a fresh passport, renewal, and reissue. Our professionals take care of everything and also make sure that it is in line with the official rules. Our passport assistance services can make you a time-saving person, stress-relieved, and travel-ready while we take care of your paperwork.
          </p>
          <h2 className="faq-tag-title-h3" style={{textAlign:'left', fontSize: "22px"}}>
            <strong>Our Passport Services</strong>
          </h2>
          <p  style={{textAlign:'left'}}>
          
          We at Make My Documents provide complete passport assistance online for any and every type of requirement. In case you want to Apply Passport Online with the first-time assistance or if you need help with renewal, in both cases, we will make the process simple, fast, and stress-free. That is how we help you:
          </p>
 <h3  style={{textAlign:'left', fontSize:"20px"}}>
          <strong>New Passport:</strong>
          </h3>

          <p  style={{textAlign:'left'}}>
             The procedure of passport for the first time, can confuse you with the multiple forms and document checks involved. Our specialists ensure that your details are correctly filled, your documents are verified, and it is convenient for you to have a passport application appointment at your nearest Passport Seva Kendra (PSK). If we talk about our passport assistance service, you will be able to Apply Passport Online, save your valuable time, and not face a rejection only because of mistakes.
             </p>

              <h3  style={{textAlign:'left', fontSize:"20px"}}>
           <strong>Passport Renewal:</strong>
          </h3>

          <p  style={{textAlign:'left'}}>
             In case the passports have expired or the date of expiry is quite close, we are always there to provide you with the full online assistance for passport renewal. Our team checks your validity passport, address proof, and other documents to guarantee the process of renewal goes smoothly. By tracking the renewal process with online professional aid, one can Apply Passport Online easily, evade the unnecessary hold-ups, and get the passport delivered in less time.  </p>
        
          <h3  style={{textAlign:'left', fontSize:"20px"}}>
            <strong>Lost Passport:</strong> 
          </h3>

          <p style={{textAlign:'left'}}>
           Losing your passport can be very distressing, especially in case you have a flight to catch shortly. Aiding you with lost passport reissue help, we walk with you through the filing of the necessary documents as well as the application for a new passport. When you get us on your side, you are capable of reissuing a passport online and can also Apply Passport Online, thus picking up the lost trail of your travel plans..      </p>
       
         <h3  style={{textAlign:'left', fontSize:"20px"}}>
            <strong>Tatkal Passport:</strong>
          </h3>
         <p  style={{textAlign:'left'}}>
            In case you require a passport as a matter of extreme urgency, we are the best available option for you in the handling of Tatkal passport applications online. Our professionals prepare you for the needed documents and assist you in the accurate submission of your application so that there is no delay in the procedure due to mistakes. With our guidance, you can also Apply Passport Online through the Tatkal passport service and be the holder of your passport very soon i.e. within 5–10 working days at the earliest.  </p>
          
           <h3  style={{textAlign:'left', fontSize:"20px"}}>
            <strong>Damaged Passport:</strong> 
          </h3>
          <p  style={{textAlign:'left'}}>
            In case your passport is ripped, soaked or even has old pages we accompany you step by step in the damaged passport reissue process. The process of seeking help from us to file a new application in the reissued passport category will be very fast and without any kind of misunderstanding. With our assistance, you can Apply Passport Online smoothly, as we ensure that the right documents are being submitted for hassle-free processing.
          </p>
        
         
        <h2 className="faq-tag-title-h3" style={{textAlign:'left', fontSize: "22px"}}>
            <strong>Apply for Passport</strong>
          </h2>
          <p  style={{textAlign:'left'}}>
            Thinking of applying for a passport? The service that we provide solely makes it possible for you to comfortably move through the Passport Seva Kendra (PSK) system without any confusion. A lot of applicants are often confronted with waiting periods or denials that are caused by incomplete forms, lack of documents, or appointment issues — however, with the help of our professional passport service, you can confidently Apply Passport Online and ensure these hurdles do not come in your way.
        </p>

          <h3  style={{textAlign:'left', fontSize:"20px"}}>
            <strong>We offer assistance in every step:</strong>
          </h3>
          <p  style={{textAlign:'left'}}>
          First, choose the right type of passport application, be it a new passport, renewal, reissue, or Tatkal passport.
           </p>
            <p  style={{textAlign:'left'}}>
          Gathering and uploading the appropriate documents for the job – accuracy, and adherence to the official requirements being the main goals.
           </p>
            <p  style={{textAlign:'left'}}>
          Getting a hold of the nearest Passport Seva Kendra (PSK) and booking an appointment there – it's a matter of time and energy saved for you.
           </p>
            <p  style={{textAlign:'left'}}>
          Monitoring your application status right up to delivery – you are thus always updated on the progress of your passport.
           </p>
           <p  style={{textAlign:'left'}}>
          When we are by your side, a passport application is transformed into a hassle-free and trustworthy routine. Our passport consultancy hurries up the process, makes it precise, and releases the stress from the shoulders of first-time applicants as well as Tatkal urgent cases.
           </p>

     

        <h2  className="faq-tag-title-h3" style={{textAlign:'left', fontSize: "22px"}}>
            <strong>Passport Application Process</strong>
          </h2>
          <p  style={{textAlign:'left'}}>
           We follow a transparent and simple process to Apply Passport Online and make your passport application stress-free.
           </p>
           <h3  style={{textAlign:'left',fontSize:"20px"}}>
            <strong>Documents Required for Fresh Passport</strong>
          </h3>
           <h3  style={{textAlign:'left',fontSize:"20px"}}>
            <strong>Proof of Identity (Any one):</strong>
          </h3>
          <ul>
            <li>Aadhaar Card</li>
            <li>Voter ID</li>
            <li>PAN Card</li>
            <li>Driving Licence</li>
          </ul>
                  
           <h3  style={{textAlign:'left',fontSize:"20px"}}>
            <strong>Proof of Address (Any one):</strong>
          </h3>
          <ul>
            <li>Aadhaar Card</li>
            <li>Voter ID</li>
            <li>Bank Passbook</li>
                <li>Gas / Electricity / Telephone / Water Bill</li>
                <li>Parent’s or Spouse’s Passport</li>
            </ul>

   <h3  style={{textAlign:'left',fontSize:"20px"}}>
            <strong>Proof of Birth (Any one):</strong>
          </h3>
          <ul>
            <li>10th or 12th Certificate</li>
            <li>Higher Education Certificate</li>
            <li>Bank Passbook</li>
                <li>School Leaving Certificate</li>
                <li>Income Tax Assessment Order</li>
            </ul>

          <h3  style={{textAlign:'left',fontSize:"20px"}}>
            <strong>Documents Required for Renewal / Reissue</strong>
          </h3>
           
          <ul>
            <li>Original Old Passport</li>
              <li>ID and Present Address Proof</li>
          </ul>
           <h3  style={{textAlign:'left',fontSize:"20px"}}>
            <strong>Documents Required for Minor Passport</strong>
          </h3>
           
          <ul>
            <li>Birth Certificate</li>
              <li>Both Parents’ Passports</li>
          </ul>
<h3  style={{textAlign:'left',fontSize:"20px"}}>
            <strong>How It Works</strong>
          </h3>
          <ul>
            <li>Register Online & Make Payment</li>
              <li>Upload Documents</li>
              <li>Get Appointment</li>
              <li>Visit PSK</li>
              <li>Passport Delivered</li>
          </ul>

        <h2  className="faq-tag-title-h3" style={{textAlign:'left', fontSize: "22px"}}>
            <strong>Why Choose Our Passport Assistance Services?</strong>
          </h2>
         <h3  style={{textAlign:'left',fontSize:"20px"}}>
            <strong>Step-by-step guidance only clarity, no guesswork</strong>
          </h3>
         <p  style={{textAlign:'left'}}>
          We take you through the entire process starting from the selection of the right category (fresh, renewal, reissue, Tatkal) to PSK appointment booking and status tracking. With our checklists and reminders, it becomes easy to Apply Passport Online and get an online passport made with the help of an assistant without missing any step.
         </p>
           <h3  style={{textAlign:'left',fontSize:"20px"}}>
            <strong>Error-free filing minimize the chances of rejection.</strong>
          </h3>
         <p  style={{textAlign:'left'}}>
          For a file that meets the official requisites, we ensure that the form and documents are consistent in the name and address (Aadhaar, PAN, voter ID, etc.), the photo meets the specs, and the supporting proofs are provided. This will reduce the number of resubmissions and common errors that slow down the process when you Apply Passport Online.
         </p>
           <h3  style={{textAlign:'left',fontSize:"20px"}}>
            <strong>Faster turnaround quick process for both Normal and Tatkal.</strong>
          </h3>
         <p  style={{textAlign:'left'}}>
          Files that are well-prepared can get processed smoothly. We assist you in choosing the right slot, keeping the documents ready, and thus avoiding the occurrence of delays—this is especially the case for the Tatkal passport application where time is of the essence
         </p>
           <h3  style={{textAlign:'left',fontSize:"20px"}}>
            <strong>All categories covered fresh, renewal, lost, minor, or damaged.</strong>
          </h3>
         <p  style={{textAlign:'left'}}>
          Our team is there to sort out the complexities in a fresh passport, passport renewal, lost/stolen reissue, minor passport, and damaged passport cases so you don’t have to start from scratch by researching everything on your own.
         </p>
           <h3  style={{textAlign:'left',fontSize:"20px"}}>
            <strong>Trusted support pan-India.</strong>
          </h3>
         <p  style={{textAlign:'left'}}>
          We are the first choice of the crowd who seek passport assistance in India, and we are the reason why hundreds of applicants are satisfied with us. You can have faith in us for clear communication, transparent updates, and reliable guidance right up to delivery when you Apply Passport Online with our support.
         </p>
           <h3  style={{textAlign:'left',fontSize:"20px"}}>
            <strong>Ready to start?</strong>
          </h3>
         <p  style={{textAlign:'left'}}>
          Professional assistance for online passport application — from document preparation to Passport Seva Kendra (PSK) appointment and final dispatch — is just an Apply Passport Online step away from you.
         </p>
            
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

export default PassportLandingPage;
