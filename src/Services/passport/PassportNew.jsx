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

const PassportNew = () => {
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
      question: "Who qualifies for an Indian passport?",
 
      answer:
        "You can qualify for Indian citizenship by being born in the country, being born elsewhere but with at least one Indian parent, or by being granted citizenship through a naturalization process. If none of these categories apply you will not be classed as an Indian citizen, and will not be entitled to an Indian passport.",
    },
    {
      question: "What is Ordinary, Diplomatic or Official Passport?",
      answer:
        "All private citizens apply for an ordinary passport however the other two types of passports are for government workers who are being send overseas on official business only.",
    },
    {
      question: "What is validity of passport?",
      answer: "05 years for minor 10 years for adults",
    },
    {
      question: "What is the different between normal and tatkal application?",
      answer: (
        <ul style={{ listStyleType: "none" }}>
          <li>
            In normal application you will receive your passport within 10 to 15
            working days
          </li>
          <br />
          <li>
            In tatkal application you will receive your passport within 2 to 5
            working days
          </li>
        </ul>
      ),
    },
    {
      question: "Within how many days will I get the appointment?",
      answer:
        "Its depends on the demand in market, our executive will give 3 to 4 days’ options you can book according to your calendar.",
    },
    {
      question: "Is that possible to get the appointment in weekends?",
      answer: "No appointments are booked only in weekdays.",
    },
    {
      question: "What happens if I missed the passport appointment?",
      answer:
        "If you missed your 1st appointment still you have 2 more chance to reschedule",
    },
    {
      question: "Can someone else attend my passport appointment for me?",
      answer:
        "You have to attend in person for your passport interview, even if you are ill or if it is very inconvenient for you to do so. You are allowed to bring someone with you for your passport interview if you find it difficult to travel.",
    },
    {
      question: "When the police verification will happen?",
      answer:
        "After the appointment, police verification will happen at your nearest police station.",
    },
    {
      question: "How will I get the passport?",
      answer:
        "Passport will be dispatched through Indian speed post for your address.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    
          <Helmet>
           <title>Apply for Passport Online with Trusted Expert Assistance</title>
       <meta name="description" content="Apply for your passport easily with our expert services. Get fast, reliable assistance from a trusted team to ensure a smooth passport application process."/>
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
             Passport
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
                    Apply for Passport Services
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
                    height: "150px",
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
                   Apply for Passport Services
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
                                                                > "Sunitha from Make.My.Document is professional, very helpful, and has excellent communication. She made my passport process easy and hassle-free."
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
                                                                       Charlspinto Pinto

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
                                                                    "Very nice service! Understands the needs and provides quick resolution!! Thank you for helping us renew our passport in a day through tatkal"
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
                                                                      Rekha Naveen

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
                                                                    "helped me to get the passport I would like to strongly recommend to the make my documents, thank you so much make my documents team"
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
                                                                       kumar harish
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
                                                                    "Makemy Documents service is excellent! I received my documents well before the expected time. Their professionalism and prompt delivery truly impressed me. I strongly recommend their services to others!"
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
                                                                       Gangadhar S Poojary
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
                                                                    "Thanks to make my documents team and especially suneetha , to help me in getting passport, perfect date fix and got by 30 days thanks"
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
                                                                        Vishwa
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
                                                                    "Make My Documents team made the entire process so simple and stress-free. I got my passport much earlier than expected. Truly reliable and highly recommended!"
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
                                                                      Anjali R
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
                                                                name: "Charlspinto Pinto",
                                                                initial: "V",
                                                                review:
                                                                    "Sunitha from Make.My.Document is professional, very helpful, and has excellent communication. She made my passport process easy and hassle-free",
                                                            },
                                                            {
                                                                name: "Rekha Naveen",
                                                                initial: "H",
                                                                review:
                                                                    "Very nice service! Understands the needs and provides quick resolution!! Thank you for helping us renew our passport in a day through tatkal",
                                                            },
                                                             {
                                                                name: "kumar harish",
                                                                initial: "K",
                                                                review:
                                                                    "helped me to get the passport I would like to strongly recommend to the make my documents, thank you so much make my documents team",
                                                            },
                                                             {
                                                                name: "Gangadhar S Poojary",
                                                                initial: "S",
                                                                review:
                                                                    "Makemy Documents service is excellent! I received my documents well before the expected time. Their professionalism and prompt delivery truly impressed me. I strongly recommend their services to others!",
                                                            },
                                                             {
                                                                name: "Vishwa",
                                                                initial: "V",
                                                                review:
                                                                    "Thanks to make my documents team and especially suneetha , to help me in getting passport, perfect date fix and got by 30 days thanks",
                                                            },
                                                             {
                                                                name: "Anjali R",
                                                                initial: "R",
                                                                review:
                                                                    "Make My Documents team made the entire process so simple and stress-free. I got my passport much earlier than expected. Truly reliable and highly recommended!",
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
            <strong>Comprehensive Passport Services - Make My Documents</strong>
          </h2>
          <p style={{textAlign:'left'}}>
            Do you have plans to travel abroad and require a trustworthy passport agent to indicate the way, then, don't look beyond the Make My Documents. We are a squad of passport agents with great experience and are willingly at your disposal to offer you rapid, effective, and problem-less passport services. No matter if it is your holiday, education abroad, career relocation, or whatsoever, do not hesitate to contact us, and we will make your passport the least of your worries.
          </p>

          <h2 className="faq-tag-title-h3" style={{textAlign:'left', fontSize: "22px"}}>
            <strong>Why Choose Our Passport Services?</strong>
          </h2>
          <p  style={{textAlign:'left'}}>
          
          We at Make My Documents, value the significance that an up-to-date passport has for travels out of the country. Our squad specializes in handling diverse passport assignments that will be exactly up to your expectations, like:

          </p>

          <p  style={{textAlign:'left'}}>
            <strong>New Passport Applications:</strong> Are you going to live in another country? Just with our help, you will manage to submit a new passport application without any mistakes.
          </p>
          <p  style={{textAlign:'left'}}>
            <strong>Passport Renewals:</strong> Is your passport about to expire? Our quick passport renewal services will enable you to take off as planned without any delays.
          </p>
          <p style={{textAlign:'left'}}>
            <strong>Passport Corrections:</strong> Are there incorrect details in your passport which need to be corrected? We do passport correction work swiftly so that you have no problems when traveling.
          </p>
          <p  style={{textAlign:'left'}}>
            <strong>Lost or Stolen Passport Replacement:</strong> In case you have lost or had your passport stolen, we will support you step by step until you receive a replacement.
          </p>
          <p  style={{textAlign:'left'}}>
            <strong>Name Change on Passport:</strong> Has your name changed recently? We help you change your passport to your new name.
          </p>
          <p  style={{textAlign:'left'}}>
            <strong>Child Passport Applications:</strong> Are you planning to travel with your children? We show you all the necessary steps to get a child’s passport.
          </p>
          <p  style={{textAlign:'left'}}>
            <strong>Passport Expedite Services:</strong> Do you need your passport as soon as possible? Our rushed passport services allow you to get your passport without delay.
          </p>

          <h3  style={{textAlign:'left', fontSize:"20px"}}>
            <strong> Expertise You Can Rely On</strong>
          </h3>
          <p  style={{textAlign:'left'}}>
            Understanding the current passport requirements and regulations can be quite a task. The skilled team of passport agents is constantly updated with the newest changes so that your application complies with all the requirements. We make sure each and every detail of the application process is correct, from your completed forms to the delivery of your application at the passport office.
          </p>

          <h3  style={{textAlign:'left', fontSize:"20px"}}>
            <strong>Exceptional Customer Service</strong>
          </h3>
          <p  style={{textAlign:'left'}}>
           We at Make My Documents, are committed to providing the best customer service possible. We recognize that applying for a passport may be complicated. That is why we provide our help and support to you at every step of the way, without taking half your breath or patience. The regular check-ups and support that we provide during the application process, confirm your easy-walking right from the beginning to the end.
          </p>

          <h3  style={{textAlign:'left', fontSize:"20px"}}>
            <strong>Fast and Efficient Turnaround Times</strong>
          </h3>
          <p  style={{textAlign:'left'}}>
           We understand that when it comes to obtaining a passport, the clock is ticking. Our short waiting times mean that as soon as possible, you can be holding your passport, hence planning your trip will be what you should turn your attention to. Be it a vacation prepared for in the near future, a business trip abroad, or any other reason that requires a passport; we are fully committed to facilitating the processing of your viaje.
          </p>

          <h3  style={{textAlign:'left',fontSize:"20px"}}>
            <strong>Competitive Pricing</strong>
          </h3>
          <p  style={{textAlign:'left'}}>
           Getting a passport should not be the reason that your account gets overdrawn. At Make My Documents, we provide pricing for passport services at competitive rates. We adhere to the principle of offering high-quality services at reasonably priced rates, on the condition that our clients get their money's worth.
          </p>
           <p  style={{textAlign:'left'}}>
           If you require passport services, please get in touch with Make My Documents. The members of our staff who have expertise and are well equipped with the right information are on standby to offer you the assistance you require for your next international adventure. Do not procrastinate and come along to make a booking. It is the first step that takes one to the accomplishment of the passport.
          </p>
 <h2  className="faq-tag-title-h3" style={{textAlign:'left', fontSize: "22px"}}>
            <strong>Different Passport types in India: An overview that covers all the grounds for a smooth application process</strong>
          </h2>
    <p  style={{textAlign:'left'}}>
           Do you want to know how to apply for an Indian passport? The various kinds of passports are so confusing, and the application process is hard to grasp. With Make My Documentation, we make the process a breeze for you, from the start until the end of it, with no hassles at all. Personal, business, or diplomatic travel — we accommodate them all. Check out the distinctions among the different types of Indian passports.
          </p>
          <h3  style={{textAlign:'left',fontSize:"20px"}}>
            <strong>Ordinary Passport (Blue Passport)</strong>
          </h3>
            <p  style={{textAlign:'left'}}>
           Besides a blue passport, the Indian citizens are usually handed the Ordinary Passport, and it is the most frequent type of passport. It is the easiest type of foreign travel, including tours, businessmen, cultural and educational exchanges. It is valid for 10 years and consequently is quite user-friendly for frequent fliers.
          </p>
          <p style={{textAlign:'left'}}>
            <strong>Main attributes:</strong>
          </p>
          <ul>
            <li>Traveling is the main reason it is adapted to.</li>
              <li>Last for 10 years.</li>
                <li>Can be renewed when it expires.</li>
                  <li>Official Passport (White Passport)</li>
          </ul>
           <p style={{textAlign:'left'}}>
          The White Passport or Official Passport is assigned to those who, as representatives of the Indian government, have to travel abroad to take care of the official work. It is a government employee, an ambassador, or a delegate who attends an international conference.
          </p>

          <p style={{textAlign:'left'}}>
            <strong>Main attributes:</strong>
          </p>
          <ul>
            <li>It is a passport for official government travel only.</li>
              <li>Depending on the time of the task, the validity varies.</li>
                <li>The application process is easy through government channels.</li>
                  <li>Diplomatic Passport (Maroon Passport)</li>
          </ul>
           <p style={{textAlign:'left'}}>
          Indian diplomats, consular staff, and their family members use the Diplomatic Passport. It is a passport that makes diplomatic duties easier and provides certain privileges and immunities while in a foreign country.
          </p>
          <p style={{textAlign:'left'}}>
            <strong>Main attributes:</strong>
          </p>
          <ul>
            <li>Only for diplomats and consular officials.</li>
              <li>It gives diplomatic immunity and privileges along with it.</li>
                <li>The validity of the passport is equal to the duration of the diplomatic mission.</li>
          </ul>
           <p style={{textAlign:'left'}}>
          The issues and troubles one has to face to have an Indian passport are known by Make My Documents. Our expert team is always ready to assist and guide you in the whole smooth and effective process of the application form.
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

export default PassportNew;
