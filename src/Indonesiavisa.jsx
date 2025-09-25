import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import "./Service.css";
import circleIcon from "../src/images/circle1.svg";
import Price from "../src/images/Price Tag.svg";
import bannerimage from "../src/images/indonesiavisaindian.png";
import { Helmet } from "react-helmet";

const relatedServices = [
  { name: "United Arab Emirates", path: "/dubai-visa" },
  { name: "Singapore", path: "/singapore-visa" },
  { name: "United Kingdom", path: "/uk-visa" },
  { name: "Australia", path: "/australia-visa" },
  { name: "Malaysia", path: "/malaysia-visa" },
  { name: "Egypt", path: "/egypet-visa" },
  { name: "Hong Kong", path: "/hongkong-visa" },

  { name: "Vietnam", path: "/vietnam-visa" },

  { name: "Azerbaijan", path: "/azerbaijan-visa" },
  { name: "Oman", path: "/oman-visa" },

  { name: "Morocco", path: "/morocco-visa" },
  { name: "Bahrain", path: "/bahrain-visa" },

  { name: "Qatar", path: "/qatar-visa" },

  { name: "Russia", path: "/russia-visa" },
  { name: "Uzbekistan", path: "/uzbekistan-visa" },
];

const Indonesiavisa = () => {
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
    navigate("/indonesia-tourist-visa-for-indians-form");
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
      question:
        " What should I do if my passport is not valid for six months? ",

      answer:
        "Your passport must be valid for at least 6 months from the date of application. If it’s not, renew your passport before applying for the visa.",
    },
    {
      question: "Can I use the Indonesia Tourist Visa for business purposes?",
      answer:
        "No, the Indonesia Tourist Visa is strictly for tourism purposes, if you need to attend meetings or conferences, a business visa is required.",
    },
    {
      question: "Do I need to visit the Indonesian embassy for visa processing?",
      answer:
        "No, you do not need to visit the embassy in person, you can apply for the Indonesia Tourist Visa online or through an authorized agent.",
    },
    {
      question: "Can I travel to Indonesia with a valid multiple-entry visa?",
      answer:
        "No, the Indonesia Tourist Visa is typically issued as a single-entry visa for tourism. For multiple entries, a different visa type is required.",
    },
    {
      question:
        " Can I extend my Indonesia Tourist Visa?",
      answer:
        "Yes, you can extend your Indonesia Tourist Visa for an additional 30 days by applying at the immigration office in Indonesia before your initial visa expires.",
    },
    {
      question: "What happens if my Indonesia Tourist Visa application is rejected?",
      answer:
        "If your visa application is rejected, you will need to correct any errors or missing documents and reapply for the visa.",
    },
    {
      question:
        "Can I travel to Indonesia with a single-entry visa?",
      answer:
        "Yes, the Indonesia Tourist Visa is usually a single-entry visa, allowing you to enter the country once within the visa's validity period.",
    },
    {
      question: "Is there any age restriction for applying for an Indonesia Tourist Visa? ",
      answer:
        "There is no specific age restriction for the Indonesia Tourist Visa; however, minors may need additional documents like a birth certificate and consent letter from parents.",
    },
    {
      question:
        "Can I apply for an Indonesia Tourist Visa if I have a pending travel ban?",
      answer:
        "If you have a travel ban or previous immigration issues, it may impact your eligibility. Consult with the Indonesian embassy before applying for the Indonesia Tourist Visa.",
    },

  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>
          Indonesia Tourist Visa for Indians - Easy Online Application
        </title>
        <meta
          name="description"
          content="Apply for an Indonesia Tourist Visa for Indians with a simple online process. Get expert guidance and reliable visa approval in 5-7 working days. Start your journey!"
        />
        <meta
          name="keywords"
          content=""
        />
        <link
          rel="canonical"
          href="https://www.makemydocuments.com/indonesia-tourist-visa-for-indians"
        />
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

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-QN4189EDG5"
        ></script>
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
        "image": "https://www.makemydocuments.com/static/media/logo.31258f6da87268f7ee2d04f6f96e256d.svg",
        "@id": "https://www.makemydocuments.com/indonesia-tourist-visa-for-indians",
        "url": "https://www.makemydocuments.com/indonesia-tourist-visa-for-indians",
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
        "description": "Apply for an Indonesia Tourist Visa for Indians with a simple online process. Get expert guidance and reliable visa approval in 5-7 working days. Start your journey!",
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
            "name": "What should I do if my passport is not valid for six months?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Your passport must be valid for at least 6 months from the date of application. If it’s not, renew your passport before applying for the visa."
            }
          },
          {
            "@type": "Question",
            "name": "Can I use the Indonesia Tourist Visa for business purposes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, the Indonesia Tourist Visa is strictly for tourism purposes. If you need to attend meetings or conferences, a business visa is required."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need to visit the Indonesian embassy for visa processing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, you do not need to visit the embassy in person. You can apply for the Indonesia Tourist Visa online or through an authorized agent."
            }
          },
          {
            "@type": "Question",
            "name": "Can I travel to Indonesia with a valid multiple-entry visa?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, the Indonesia Tourist Visa is typically issued as a single-entry visa for tourism. For multiple entries, a different visa type is required."
            }
          },
          {
            "@type": "Question",
            "name": "Can I extend my Indonesia Tourist Visa?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, you can extend your Indonesia Tourist Visa for an additional 30 days by applying at the immigration office in Indonesia before your initial visa expires."
            }
          },
          {
            "@type": "Question",
            "name": "What happens if my Indonesia Tourist Visa application is rejected?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If your visa application is rejected, you will need to correct any errors or missing documents and reapply for the visa."
            }
          },
          {
            "@type": "Question",
            "name": "Can I travel to Indonesia with a single-entry visa?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, the Indonesia Tourist Visa is usually a single-entry visa, allowing you to enter the country once within the visa's validity period."
            }
          },
          {
            "@type": "Question",
            "name": "Is there any age restriction for applying for an Indonesia Tourist Visa?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "There is no specific age restriction for the Indonesia Tourist Visa; however, minors may need additional documents like a birth certificate and consent letter from parents."
            }
          },
          {
            "@type": "Question",
            "name": "Can I apply for an Indonesia Tourist Visa if I have a pending travel ban?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If you have a travel ban or previous immigration issues, it may impact your eligibility. Consult with the Indonesian embassy before applying for the Indonesia Tourist Visa."
            }
          }
        ]
      }
    `}
        </script>

        <meta property="og:title" content="Indonesia Tourist Visa for Indians - Easy Online Application" />
        <meta property="og:description" content="Apply for an Indonesia Tourist Visa for Indians with a simple online process. Get expert guidance and reliable visa approval in 5-7 working days. Start your journey!" />
        <meta property="og:url" content="https://www.makemydocuments.com/indonesia-tourist-visa-for-indians" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.makemydocuments.com/static/media/bannerimage-g.9468cc5ebd5dcf5ebb9d.png" />
        <meta property="og:site_name" content="Make My Documents" />


        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Indonesia Tourist Visa for Indians - Easy Online Application" />
        <meta name="twitter:description" content="Apply for an Indonesia Tourist Visa for Indians with a simple online process. Get expert guidance and reliable visa approval in 5-7 working days. Start your journey!" />
        <meta name="twitter:image" content="https://www.makemydocuments.com/static/media/bannerimage-g.9468cc5ebd5dcf5ebb9d.png" />
        <meta name="twitter:site" content="@makemydocuments" />

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
              Indonesia Tourist Visa for Indians


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
                    Indonesia Tourist Visa for Indians
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
                          color: "#333",
                          fontWeight: "600",
                        }}
                      >
                        Processing time
                      </p>
                      <p
                        style={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          color: "#333",
                          margin: 0,
                          backgroundColor: "#e3f2fd",
                          padding: "6px 10px",
                          borderRadius: "6px",
                          display: "inline-block",
                        }}
                      >
                        05 - 07 working days
                      </p>
                    </div>

                    <div style={{ flex: 1, textAlign: "right" }}>
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
                          fontSize: "16px",
                          fontWeight: "bold",
                          color: "#333",
                          backgroundColor: "#e3f2fd",
                          padding: "6px 10px",
                          borderRadius: "6px",
                          display: "inline-block",
                          margin: 0,
                        }}
                      >
                        ₹5,109/-
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
                    Indonesia Tourist Visa for Indians

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
                      <p style={{ margin: 0, fontSize: "10px", }}>05 - 07 working days          </p>
                    </div>
                    <div>
                      <p style={{ margin: 0, fontWeight: "bold", fontSize: "10px", }}>Starting from</p>
                      <p style={{ margin: 0, color: "#ffc107", fontWeight: "bold", fontSize: "10px", }}>
                        ₹5,109/-
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
                      Documents Required For Indonesia Tourist Visa for Indians

                    </h2>
                    <p
                      style={{
                        fontSize: "16px",
                        margin: 0,
                        color: "#333",
                      }}
                    >
                      - Clear scanned copy of passport front and back copy in colour scanner

                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        margin: 0,
                        color: "#333",
                      }}
                    >
                      - Hotel Address Information

                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        margin: 0,
                        color: "#333",
                      }}
                    >
                      - Return Flight Ticket


                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        margin: 0,
                        color: "#333",
                      }}
                    >
                      - Traveler Photo


                    </p>
                  </div>
                  <div className="d-block d-lg-none" style={{ padding: "15px" }}>
                    <div style={{
                      backgroundColor: "#fff",
                      borderRadius: "8px",
                      padding: "15px",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                      marginBottom: "20px"
                    }}>
                      <h5 style={{ fontSize: "18px", fontWeight: "bold" }}>Documents Required</h5>
                      <p style={{ fontSize: "14px", marginBottom: 0 }}>
                        - Clear scanned copy of passport front and back copy in colour scanner

                      </p>
                      <p style={{ fontSize: "14px", marginBottom: 0 }}>
                        - Hotel Address Information

                      </p>
                      <p style={{ fontSize: "14px", marginBottom: 0 }}>
                        - Return Flight Ticket
                      </p>
                      <p style={{ fontSize: "14px", marginBottom: 0 }}>
                        - Traveler Photo

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
                      <div className="d-flex align-items-center w-100 flex-wrap mt-5 gap-3  d-none d-lg-block" style={{ marginLeft: '2%' }}>
                    {/* Image Section */}
            
                    <div style={{ marginTop: '' }}>
                      <h5 style={{ color: "#007BFF", fontWeight: "bold" }}>Charges</h5>
                      <ul style={{ listStyleType: "disc", paddingLeft: "20px", }}>
                        <li>
                          Indonesia 30 Days Single Entry E-Visa  <strong style={{ color: '#ff9800' }}>Rs. 5,109/-</strong> </li>

                        <li> <strong style={{ color: '#ff9800' }}>Rs. 99/-</strong> as booking fee. Need to pay while submitting online form <br />(This mount will a be adjusted in total bill)</li>

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
                        <h5 style={{ color: "#007BFF", fontWeight: "bold", fontSize: "16px" }}>
                          Charges
                        </h5>
                        <ul style={{ fontSize: "14px", paddingLeft: "15px", marginBottom: 0 }}>
                          <li>
                            Indonesia 30 Days Single Entry E-Visa {" "}
                            <strong style={{ color: "#ff9800" }}>Rs. 5,109/-</strong>
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
                                  "I was worried about the visa process, but the team made it hassle-free. The Indonesia Tourist Visa for Indians was approved quickly, and I received it well within the time frame.

                                  "
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
                                    Rohit S
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
                                  "
                                  I applied for the Indonesia Tourist Visa for Indians, and the whole process was so convenient. The team kept me updated throughout, and the visa was delivered without any issues.
                                  "
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
                                    Ankit

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
                                  "I was a bit anxious about applying for the Indonesia Tourist Visa for Indians, but the team made everything clear and simple. The visa came through just as promised
                                  "
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
                                    Priya S
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
                                  "I had no issues applying for my Indonesia Tourist Visa for Indians. The step-by-step guidance was perfect, and the support team was always there to help.

                                  "
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
                                    Neeraja V

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
                                  "This was the fastest Indonesia Tourist Visa for Indians application I’ve ever done. The whole procedure took just a few days, and I was able to focus on my trip without any worries.

                                  ."
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
                                    Karthik C
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
                                  "I had a great experience applying for my Indonesia Tourist Visa for Indians through this service. The process was smooth, and I received my visa in just 5 days.

                                  "
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
                                    D
                                  </div>
                                  <span
                                    style={{
                                      fontWeight: "bold",
                                      fontSize: "14px",
                                      color: "#374151",
                                    }}
                                  >
                                    Divya P

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
                                name: "Neha",
                                initial: "N",
                                review:
                                  "I was worried about the visa process, but the team made it hassle-free. The Indonesia Tourist Visa for Indians was approved quickly, and I received it well within the time frame.",
                              },
                              {
                                name: "Arjun",
                                initial: "A",
                                review:
                                  "I applied for the Indonesia Tourist Visa for Indians, and the whole process was so convenient. The team kept me updated throughout, and the visa was delivered without any issues.",
                              },
                              {
                                name: "Priya S",
                                initial: "P",
                                review:
                                  "I was a bit anxious about applying for the Indonesia Tourist Visa for Indians, but the team made everything clear and simple. The visa came through just as promised",
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
              <br></br>
              <>
                <h2 className="faq-tag-title-h3">
                  <strong>
                    Indonesia Tourist Visa for Indians - A Complete Guide
                  </strong>
                </h2>
                <br />

                <p>Indian passport holders are required to apply for a tourist visa to visit Indonesia. Our service simplifies the process of obtaining an Indonesia Tourist Visa, ensuring a quick and hassle-free experience. We guide you through every step of the application, from document submission to visa approval, so you can focus on planning your trip.
                </p>


                <br />
                <h2 style={{ fontSize: "22px", fontWeight: "bold" }}> What are the Types of Indonesia Visa

                </h2>
                <br />
                <p>
                  Indonesia offers several types of visas depending on the purpose of your visit. Here’s a breakdown of the main visa types:
                </p>
                <br />

                <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>
                  Tourist Visa
                </h3>
                <p>A Tourist Visa is required for those traveling to Indonesia for leisure or tourism. It allows you to explore the country and enjoy its cultural and natural attractions.
                </p>
                <br />

                <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>
                  Business Visa

                </h3>
                <p>A Business Visa is essential for individuals traveling to Indonesia for business purposes. Whether attending meetings, conferences, or business-related events, this visa facilitates professional engagements in the country.
                </p>
                <br />

                <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>
                  Social-Cultural Visa

                </h3>
                <p>The Social-Cultural Visa is designed for visitors traveling for family visits, cultural exchanges, or social purposes. It allows you to stay in Indonesia for personal reasons, such as visiting relatives or participating in cultural programs.
                </p>
                <br />
                <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>
                  Work Visa

                </h3>
                <p>If you are planning to work in Indonesia, you will need a Work Visa. This visa is required for employment purposes and ensures you can legally work while in the country.
                </p>
                <br />
                <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>
                  Transit Visa

                </h3>
                <p>The Transit Visa is for travelers who are passing through Indonesia on their way to another destination. It allows a short stay in the country while you wait for your next flight or onward journey.
                </p>
                <br />

                <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>Indonesia Visa Extension and Renewal</h2>
                <br />
                <p>If you're planning to extend your stay in Vietnam, you can apply for an extension or renewal of your visa through the appropriate channels. Our team can assist in guiding you through the necessary steps to ensure your stay is extended smoothly.
                </p>
                <br />
                <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>How to Avoid Indonesia Visa Rejection?</h2>
                <p>To avoid Indonesia visa rejection, ensure that you:
                </p>
                <p> - Submit accurate and complete documents.

                </p>
                <p> - Apply well in advance of your travel date.

                </p>
                <p> - Double-check your passport validity (it should be valid for at least 6 months).</p>
                <p> - Provide proof of sufficient funds for your stay in Indonesia.</p>
                <p> - Ensure that your return flight and hotel booking are confirmed.
                </p>
                <br />

                <h2 style={{ fontSize: "20px", fontWeight: "bold" }}> Is there an Indonesia Visa on Arrival for Indian Passport Holders?</h2>
                <br />

                <p>Yes, Indonesia offers a Visa on Arrival (VoA) for Indian passport holders. The Visa on Arrival is available for tourism and business purposes, allowing you to stay for a maximum of 30 days, extendable by another 30 days. Ensure that you have the necessary documents, including a valid passport, return flight ticket, and sufficient funds.</p>
                <br />

                <h2 style={{ fontSize: "20px", fontWeight: "bold" }}> Is travel insurance required for an Indonesia Visa Application?</h2>
                <br />

                <p>Travel insurance is not mandatory when applying for an Indonesia Tourist Visa, but it is highly recommended. Insurance helps cover unexpected events such as medical emergencies, cancellations, or delays, ensuring a safe and stress-free trip.
                </p>
                <br />


                <h2 style={{ fontSize: "20px", fontWeight: "bold" }}> Why Choose Make My Document to Apply for an Indonesia Tourist Visa?</h2>
                <br />

                <p>Choosing Make My Document for your Indonesia Tourist Visa application ensures a smooth and hassle-free experience. We provide:</p>
                <br />
                <p> - Quick and reliable service</p>
                <p> - Expert guidance throughout the application process</p>
                <p> - Secure document submission and verification</p>
                <p> - Fast processing and delivery of your visa</p>


                <br />

                <h2 style={{ fontSize: "20px", fontWeight: "bold" }}> WThings to Know Before Traveling to Hong Kong
                </h2>
                <br />
                <p>Before traveling to Indonesia, consider the following tips:</p>
                <br />
                <p> <strong>Currency:</strong> The local currency is the Indonesian Rupiah (IDR). It's a good idea to carry some local currency for small expenses.</p>
                <p> <strong>Language:</strong> Bahasa Indonesia is the official language, but English is widely spoken in tourist areas.</p>
                <p> <strong>Health:</strong>  Check if any vaccinations are required or recommended before your trip.</p>
                <p> <strong>Cultural Etiquette:</strong> Indonesians are known for their hospitality, but be mindful of local customs, especially in temples and rural areas.</p>
                <p> <strong>Weather:</strong> Indonesia has a tropical climate, so pack light, comfortable clothes and be prepared for rain if traveling during the wet season.</p>
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

export default Indonesiavisa;
