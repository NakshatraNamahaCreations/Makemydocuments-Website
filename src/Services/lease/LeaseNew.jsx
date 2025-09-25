import React, { useState, useEffect, useRef } from "react";
import bannerimage from "../../images/LeaseAgreementBanner.png";
import circleIcon from "../../images/circle1.svg";
// import documentsIcon from "../../images/documents.svg";
// import TimeIcon from "../../images/Time.svg";
import Price from "../../images/Price Tag.svg";
import verify from "../../images/policeverification.svg";
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

const LeaseNew = () => {
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
    navigate("/lease-agreement-form");
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
      question: "What is the difference between a rental and lease agreement?",
      answer:  "A rental agreement is usually short-term (11 months), while a lease agreement is long-term (1 year or more) and often requires registration.",

    },
    {
      question: "Do I need to visit an office to get my lease agreement?",
      answer:
        "No. Our service is 100% online, and your finalized agreement will be delivered to your doorstep.",
    },
    {
      question: "What is the value of stamp paper for a lease agreement in Karnataka?",
      answer:
        "The value varies based on rent, deposit, and duration. We guide you on the exact requirement.",
    },
    {
      question: "Is notarization mandatory for lease agreements?",
      answer:
        " Notarization is not mandatory but is recommended to add extra legal validity.",
    },
    {
      question: "How long is a lease agreement valid?",
      answer:
        "Lease agreements are generally valid for 12 months or longer, depending on the terms agreed between landlord and tenant.",
    },
    {
      question: "Who keeps the original lease agreement?",
      answer: "Both landlord and tenant should keep a signed copy of the lease agreement for legal reference.",
    },
    {
      question: "Can I make changes to the lease agreement after signing?",
      answer:
        "Yes, changes can be made through an addendum or mutual agreement signed by both parties.",
    },
    {
      question: "Do lease agreements need to be registered?",
      answer:
        "Yes, lease agreements for 12 months or more are legally required to be registered with the local sub-registrar.",
    },
    {
      question: "What happens if either party breaks the lease early?",
      answer:
        "Breaking a lease early usually requires notice and may involve a penalty or forfeiture of the deposit, depending on the terms.",
    },
    {
      question: "Are digital signatures valid for lease agreements?",
      answer:
        "Yes, digital signatures are legally valid and accepted for most online lease agreements in India.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    
         <Helmet>
            <title> Lease Agreement Online | Draft in 60 Min & Delivered Fast</title>
              <meta name="description" content="Make your lease agreement online in 3 easy steps. Draft within 60 minutes, review securely, and get doorstep delivery in 24 hours through a simple process."/>
             <meta name="keywords" content="lease agreement, lease agreement online, how to create lease agreement,lease agreement near me, lease agreement bangalore, online lease agreement, online lease agreement near me, lease agreement, notarized lease agreement online, house lease agreement, online house lease agreement, 
             home lease agreement, lease agreement near me, lease agreement bangalore,lease agreement online bangalore, lease agreement karnataka, online agreement services."/>
             <meta name="author" content="https://www.makemydocuments.com/lease-agreement"/>
             <link rel="canonical" href="https://www.makemydocuments.com/lease-agreement" />
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
            Lease Agreement
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
                   Online Lease Agreement Services 
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
                        1-2 working days 
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
                 Online Lease Agreement Services 
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
                    1-2 working days 
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

     <div style={{ marginTop: "" }}>
                      <h5 style={{ color: "#007BFF", fontWeight: "bold" }}>
                       What We Do!
                      </h5>
                      <ul
                        style={{ listStyleType: "disc", paddingLeft: "20px" }}
                      >
                        <li>
                          Make My Documents Online Agreements Service.
                        </li>
                         <li>
                          Service available only in Karnataka.
                        </li>
                         <li>
                          Draft will be shared to your mail id within 60min.
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
                          style={{ width: "60%", height: "60%" }}
                        />
                        <img
                          src={verify}
                          alt="Price Icon"
                          style={{
                            position: "absolute",
                            top: "30%",
                            left: "30%",
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
                           What We Do!
                        </h5>
                        <ul
                          style={{
                            fontSize: "14px",
                            paddingLeft: "15px",
                            marginBottom: 0,
                          }}
                        >
                          <li>
                          Make My Documents Online Agreements Service.
                          </li>
                          <li>
                         Service available only in Karnataka.
                          </li>
                        <li>
                         Draft will be shared to your mail id within 60min.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                

                  <br />
                  {/* Documents Required Section (Non-scrollable) */}
              

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
                            Step 1: Register online
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
                            Step 2: Drafting
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
                            Step 3: Review Drafting
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
                            Step 4: Payment
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
                            Step 5: Doorstep Delivery
                          </h3>
                         
                        </div>
                      </div>
                  
                      
                    </div>
                    <br />
                  </div>
                    {/* Content Section */}
                   {/*} <div style={{ marginTop: "10px" }}>
                      <h5 style={{ color: "#007BFF", fontWeight: "bold" }}>
                        Charges
                      </h5>
                      <ul
                        style={{ listStyleType: "disc", paddingLeft: "20px" }}
                      >
                        <li>
                          <strong style={{ color: "#ff9800" }}>
                            Rs. Rs 300/-
                          </strong>{" "}
                          For Application
                        </li>
                        <li>
                          <strong style={{ color: "#ff9800" }}>
                            Rs. 50/-
                          </strong>{" "}
                          as booking/consulting charge. Need to pay while submitting online form
Note: Additional charges for stamp paper
                        </li>
                    
                      </ul>
                    </div>*/}
                    <div
                    className="d-block"
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
                     {/*} <div
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
                      </div>*/}
                      <div>
                        <h5
                          style={{
                            color: "#007BFF",
                            fontWeight: "bold",
                            fontSize: "18px",
                          }}
                        >
                          Charges
                        </h5>
                        <ul
                          style={{
                            fontSize: "15px",
                            paddingLeft: "15px",
                            marginBottom: 0,
                          }}
                        >
                          <li>
                            <strong style={{ color: "#ff9800" }}>
                              Rs. 300/-
                            </strong>{" "}
                            For Application{" "}
                          </li>
                          <li>
                            <strong style={{ color: "#ff9800" }}>
                              Rs. 50 /-{" "}
                            </strong>{" "}
                            as booking/consulting charge. Need to pay while submitting online form
Note: Additional charges for stamp paper
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
                                                                > 
                                                               "The entire process was seamless. My lease agreement was drafted in less than an hour and delivered quickly. Truly professional and efficient service."
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
                                                                  "I really liked how simple the online process was. From drafting to final delivery, everything was clear and straightforward. Highly satisfied with the experience." 
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
                                                                      Rohan M.

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
                                                                 "The team was very supportive and guided me through each step. My lease agreement was accurate, legally valid, and delivered right on time." 
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
                                                                       Kavita D.
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
                                                                  "Fast, reliable, and stress-free! I received the draft in under 60 minutes and the final agreement soon after. Couldn’t have asked for a better service."
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
                                                                    Siddharth P.
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
                                                                  
 "I appreciate the professionalism and transparency. The online process saved me a lot of effort, and the final document was exactly as expected." 
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
                                                                      Meera J.
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
                                                                  "Great experience overall. The agreement was prepared quickly, checked thoroughly, and delivered without any delays. Definitely recommend this service."
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
                                                                   Arjun V.
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
                                                                review: "The entire process was seamless. My lease agreement was drafted in less than an hour and delivered quickly. Truly professional and efficient service.",
                                                                  
                                                              },
                                                            {
                                                                name: "Rohan M",
                                                                initial: "H",
                                                                review:
                                                                   "I really liked how simple the online process was. From drafting to final delivery, everything was clear and straightforward. Highly satisfied with the experience.",
                                                            },
                                                             {
                                                                name: "Kavita D.",
                                                                initial: "K",
                                                                review:
                                                                  "The team was very supportive and guided me through each step. My lease agreement was accurate, legally valid, and delivered right on time." ,
                                                            },
                                                             {
                                                                name: "Siddharth P.",
                                                                initial: "S",
                                                                review:
                                                                   "Fast, reliable, and stress-free! I received the draft in under 60 minutes and the final agreement soon after. Couldn’t have asked for a better service." ,
                                                            },
                                                             {
                                                                name: "Meera J.",
                                                                initial: "V",
                                                                review:
                                                                   "I appreciate the professionalism and transparency. The online process saved me a lot of effort, and the final document was exactly as expected.",
                                                            },
                                                             {
                                                                name: "Divya R.",
                                                                initial: "R",
                                                                review:
                                                                    "Great experience overall. The agreement was prepared quickly, checked thoroughly, and delivered without any delays. Definitely recommend this service.",
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
            <strong>Online Lease Agreement Services in Bangalore  </strong>
          </h2>
          <p style={{textAlign:'left'}}>
          When it comes to renting or leasing a property, one of the most important steps is securing a legally valid lease agreement. A well-drafted lease agreement ensures that both the landlord and the tenant have clear terms and conditions, reducing the chances of disputes in the future. At Make My Documents, we specialize in providing online lease agreement services in Karnataka, designed to make the process simple, quick, and completely hassle-free.
            </p>
         <p  style={{textAlign:'left'}}>
          Our aim is to give you peace of mind by offering a smooth experience from start to finish—right from applying online to receiving your finalized lease agreement at your doorstep.
            </p>
          <h2 className="faq-tag-title-h3" style={{textAlign:'left', fontSize: "22px"}}>
            <strong>What is a Lease Agreement?</strong>
          </h2>
     <p  style={{textAlign:'left'}}>
           A lease agreement is a legal contract between a landlord and a tenant that allows the tenant to use the property for a specified period in exchange for rent. Unlike a short-term rental agreement, lease agreements are usually longer in duration (often one year or more) and may require registration depending on the state’s legal requirements.
            </p>
            <p  style={{textAlign:'left'}}>
           A lease agreement typically includes:
            </p>
        <ul>
         <li> Rent amount and due date</li>
           <li> Security deposit terms</li>
            <li>Duration of lease (usually 12 months or longer) </li>
             <li>Responsibilities of landlord and tenant </li>
              <li>Maintenance and repair conditions </li>
               <li>Renewal and termination clauses </li>
          </ul>
           <p  style={{textAlign:'left'}}>
           Having a lease agreement in place provides legal protection, transparency, and peace of mind for both parties.
            </p>
            <h2 className="faq-tag-title-h3" style={{textAlign:'left', fontSize: "22px"}}>
            <strong>What We Do</strong>
          </h2>
           <p  style={{textAlign:'left'}}>
             At Make My Documents, we provide a wide range of online lease agreement services to suit your needs, including:
            </p>
            <ul>
         <li><strong> New Lease Agreements – </strong> For tenants and landlords starting a fresh contract. </li>
          <li><strong> Lease Agreement Renewals – </strong> Extending your existing agreement with updated terms.</li>
          <li><strong> Lease Amendments – </strong> Making changes to an ongoing lease contract. </li>
          <li><strong> Customized Lease Agreements – </strong> Adding specific clauses tailored to your requirements.</li>
          <li><strong> Notarized Lease Agreements – </strong> Strengthening the legal validity of your document.</li>
          <li><strong> Guidance on Stamp Duty – </strong> Helping you determine the correct value of stamp paper required.</li>
          </ul>
            <p  style={{textAlign:'left'}}>
           With us, you can be sure that every agreement is prepared by experienced legal professionals who ensure compliance with Karnataka’s legal standards.
            </p>
            <h2 className="faq-tag-title-h3" style={{textAlign:'left', fontSize: "22px"}}>
            <strong>How It Works</strong>
          </h2>
           <p  style={{textAlign:'left'}}>
             Our lease agreement process is straightforward and designed to save you time:
            </p>
            <ul>
         <li><strong> Register Online – </strong> Submit your details using our simple online form.</li>
          <li><strong> Drafting – </strong> Our experts prepare a lease agreement based on your inputs. </li>
          <li><strong> Review Draft – </strong> You will receive the draft in your email within 60 minutes for review.</li>
          <li><strong> Payment – </strong>  Pay the nominal service fee (Rs. 50 booking + Rs. 300 drafting fee; extra for stamp paper).</li>
          <li><strong> Doorstep Delivery – </strong> The finalized stamped lease agreement will be delivered to your home or office within 1–2 working days.</li>
          </ul>
             <p  style={{textAlign:'left'}}>
            This online process ensures a fast, secure, and hassle-free experience.
            </p>
                <h2 className="faq-tag-title-h3" style={{textAlign:'left', fontSize: "22px"}}>
            <strong>Charges</strong>
          </h2>
         
            <ul>
         <li> Drafting Fee: Rs. 300  </li>
          <li> Booking/Consulting Fee: Rs. 50 (payable while submitting the form)</li>
          <li>Stamp Paper Charges: Additional, based on property details and lease duration </li>

          </ul>
 <p  style={{textAlign:'left'}}>
         We keep our pricing transparent, ensuring you know exactly what you are paying for.
            </p>
                <h2 className="faq-tag-title-h3" style={{textAlign:'left', fontSize: "22px"}}>
            <strong>Benefits of Our Lease Agreement Service</strong>
          </h2>
           <p  style={{textAlign:'left'}}>
            When you choose Make My Documents, you get more than just a document—you get a complete service designed around your convenience.
            </p>
            <ul>
         <li>  Legally Valid Documents prepared by legal experts</li>
           <li> Quick Drafting – draft delivered within 60 minutes</li>
            <li> Fast Processing – final document within 1–2 days </li>
            <li> Affordable Pricing without hidden costs</li>
            <li>  Doorstep Delivery of stamped agreements</li>
            <li> Customized Clauses to suit your unique needs </li>
            <li>  Complete Guidance on stamp duty and notarization</li>
          </ul>

             <h2 className="faq-tag-title-h3" style={{textAlign:'left', fontSize: "22px"}}>
            <strong>Why Choose to Make My Documents?</strong>
          </h2>
           <p  style={{textAlign:'left'}}>
      In a busy city like Bangalore and across Karnataka, tenants and landlords want fast, reliable, and affordable solutions for legal paperwork. That’s exactly what we deliver. With our expertise, customer-first approach, and transparent pricing, we have become a trusted name in online lease agreement services.
            </p>
            <p  style={{textAlign:'left'}}>
       Whether you are leasing a house, apartment, office, or commercial property, we make sure your agreement is legally sound and delivered to you without stress. Our step-by-step support ensures that you are guided through the entire process with ease.
            </p>
              <h2 className="faq-tag-title-h3" style={{textAlign:'left', fontSize: "22px"}}>
            <strong>Apply Now – Get Your Lease Agreement Online </strong>
          </h2>
           <p  style={{textAlign:'left'}}>
       Don’t let paperwork slow down your property rental process. With Make My Documents, you can secure your lease agreement online in Karnataka quickly, affordably, and without hassle.
            </p>
           <ul>
         <li> Easy Online Registration</li>
           <li> Expert Legal Drafting</li>
            <li>Fast Turnaround </li>
           <li> Affordable Pricing</li>
           <li> Doorstep Delivery</li>
          </ul>
  <p  style={{textAlign:'left'}}>
      Start your application today and experience the most convenient way to prepare your lease agreement. Let us handle the legalities so you can focus on what matters most.
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

export default LeaseNew;
