import React, { useState, useEffect, useRef } from "react";
import bannerimage from "../../images/passportindianbanner.png";
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

const PassportAgentinMysore = () => {
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
      question: "How long does it take to get a passport in Mysore?",
      answer:
        "The normal passport process takes 7 to 14 working days after the PSK appointment and police verification. Tatkal applications are usually processed within 3 working days.",
    },
    {
      question: "What documents do I need for a fresh passport application?",
      answer:
        "You’ll need proof of address, proof of date of birth (like Aadhaar or birth certificate), and any one valid ID proof. Additional documents may be needed based on your case.",
    },
    {
      question: "Can I apply for a passport online and still take passport agent in mysore support?",
      answer:
        "Yes, we assist you with the online application, form filling, and document uploads while ensuring all entries are accurate and error-free.",
    },
    {
      question: "Is police verification necessary for a passport?",
      answer:
        "Yes, for most fresh applications, a police verification is mandatory. However, certain Tatkal and reissue applications may be exempt under specific conditions..",
    },
    {
      question: "What is the difference between a normal and Tatkal passport?",
      answer:
        "Normal applications follow standard processing timelines. Tatkal passports are fast-tracked for urgent travel but require additional documentation and higher fees.",
    },
    {
      question: "Can I get a passport without a birth certificate?",
      answer:
        "Yes, if you're above 18, other documents like PAN card, Aadhaar, and school certificates can be used instead of a birth certificate.",
    },
    {
      question: "What happens if my passport application is rejected?",
      answer:
        "We review the reason for rejection, correct the errors, and assist in reapplying. Common issues include incorrect documents or incomplete details.",
    },
    {
      question: "Do you offer doorstep document pickup in Mysore?",
      answer:
        "Yes, for selected areas in Mysore, we offer document pickup and submission support for your convenience.",
    },
    {
      question: "Can I reschedule my passport appointment?",
      answer:
        "Yes, you can reschedule it up to two times within one year of the initial application. We help manage rescheduling smoothly.",
    },
    {
      question: "Do you help with minor passports and senior citizen applications?",
      answer:
        "Absolutely. We provide dedicated assistance for minor, senior citizen, and NRI applicants, including age-specific document guidance.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>
          Passport Agent in Mysore | Fast & Reliable Passport Services
        </title>
        <meta
          name="description"
          content="Apply for a new or renewal through a passport agent in Mysore with expert support. Quick documentation, Tatkal service, and doorstep assistance. Call us today."
        />
        <meta
          name="keywords"
          content="passport, get passport fast, passport application, passport services, passport assistance, hassle-free passport, quick passport, passport team, passport solutions, secure passport, professional passport services, efficient passport application"
        />
        <link
          rel="canonical"
          href="https://www.makemydocuments.com/passport-agent-in-mysore"
        />

        <meta name="rating" CONTENT="General" />
        <meta name="revisit-after" CONTENT="2 days" />
        <meta name="robots" content=" ALL, index, follow" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="Safe For All" />
        <meta name="language" content="English" />
        <meta http-equiv="window-target" content="_top" />
        <meta http-equiv="pics-label" content="for all ages" />
        <meta name="rating" content="general" />
        <meta content="All, FOLLOW" name="GOOGLEBOTS" />
        <meta content="All, FOLLOW" name="YAHOOBOTS" />
        <meta content="All, FOLLOW" name="MSNBOTS" />
        <meta content="All, FOLLOW" name="BINGBOTS" />
        <meta content="all" name="Googlebot-Image" />
        <meta content="all" name="Slurp" />
        <meta content="all" name="Scooter" />
        <meta content="ALL" name="WEBCRAWLERS" />

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
          "@graph": [
            {
              "@type": "LocalBusiness",
              "@id": "https://www.makemydocuments.com/passport-agent-in-mysore",
              "name": "Make My Documents",
              "image": "https://www.makemydocuments.com/static/media/logo.31258f6da87268f7ee2d04f6f96e256d.svg",
              "url": "https://www.makemydocuments.com/passport-agent-in-mysore",
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
              "description": "Apply for a new or renewal through a passport agent in Mysore with expert support. Quick documentation, Tatkal service, and doorstep assistance. Call us today.",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Passport Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "New Passport Applications" }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Passport Renewal" }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Lost or Stolen Passport Replacement" }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Passport Corrections" }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Child Passport Applications" }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Name Change on Passport" }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": { "@type": "Service", "name": "Expedited Passport Services" }
                  }
                ]
              }
            }
          ]
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
                  "name": "How long does it take to get a passport in Mysore?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The normal passport process takes 7 to 14 working days after the PSK appointment and police verification. Tatkal applications are usually processed within 3 working days."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What documents do I need for a fresh passport application?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You’ll need proof of address, proof of date of birth (like Aadhaar or birth certificate), and any one valid ID proof. Additional documents may be needed based on your case."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I apply for a passport online and still take agent support?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we assist you with the online application, form filling, and document uploads while ensuring all entries are accurate and error-free."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is police verification necessary for a passport?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, for most fresh applications, a police verification is mandatory. However, certain Tatkal and reissue applications may be exempt under specific conditions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the difference between normal and Tatkal passport?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Normal applications follow standard processing timelines. Tatkal passports are fast-tracked for urgent travel but require additional documentation and higher fees."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I get a passport without a birth certificate?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, if you're above 18, other documents like PAN card, Aadhaar, and school certificates can be used instead of a birth certificate."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What happens if my passport application is rejected?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We review the reason for rejection, correct the errors, and assist in reapplying. Common issues include incorrect documents or incomplete details."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer doorstep document pickup in Mysore?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, for selected areas in Mysore, we offer document pickup and submission support for your convenience."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I reschedule my passport appointment?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, you can reschedule it up to two times within one year of the initial application. We help manage rescheduling smoothly."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you help with minor passports and senior citizen applications?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. We provide dedicated assistance for minor, senior citizen, and NRI applicants, including age-specific document guidance."
                  }
                }
              ]
            }
          `}
        </script>
        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Passport Agent in Mysore | Fast & Reliable Passport Services"
        />
        <meta
          property="og:description"
          content="Apply for a new or renewal through a passport agent in Mysore with expert support. Quick documentation, Tatkal service, and doorstep assistance. Call us today."
        />
        <meta
          property="og:url"
          content="https://www.makemydocuments.com/passport-agent-in-mysore"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Make My Document" />
        <meta
          property="og:image"
          content="https://www.makemydocuments.com/assets/passport-agent-og.jpg"
        />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Passport Agent in Mysore | Fast & Reliable Passport Services"
        />
        <meta
          name="twitter:description"
          content="Apply for a new or renewal through a passport agent in Mysore with expert support. Quick documentation, Tatkal service, and doorstep assistance. Call us today."
        />
        <meta
          name="twitter:image"
          content="https://www.makemydocuments.com/assets/passport-agent-og.jpg"
        />
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

        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=7447820&fmt=gif" />`,
          }}
        />
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
              Passport Agent in Mysore
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
                    Passport Agent in Mysore
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
                  marginTop: "36%",
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
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      marginBottom: "8px",
                    }}
                  >
                    Passport Agent in Mysore
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
                    <div>
                      {/* <p
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
                      </p> */}
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
              

                  {/* Documents Required Section (Non-scrollable) */}
                  <div
                    className="d-none d-lg-block"
                    style={{
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
                            Step 1: Register Online
                          </h3>
                          <p
                            style={{
                              fontSize: "14px",
                              color: "#555",
                              margin: 0,
                            }}
                          >
                            Fill all the basic details in the application on our
                            secure portal.
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
                            Our experts review your documents for accuracy and
                            compliance.
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
                            Make a secure online payment to proceed with the
                            application service.
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
                            Step 5: Get Appointment
                          </h3>
                          <p
                            style={{
                              fontSize: "14px",
                              color: "#555",
                              margin: 0,
                            }}
                          >
                            We schedule your Passport Seva Kendra (PSK)
                            appointment as per your preferred date and time.
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
                            Step 6: Visit PSK
                          </h3>
                          <p
                            style={{
                              fontSize: "14px",
                              color: "#555",
                              margin: 0,
                            }}
                          >
                            Visit the designated PSK center with your original
                            documents for biometric and verification.
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
                            Step 7: Police Verification
                          </h3>
                          <p
                            style={{
                              fontSize: "14px",
                              color: "#555",
                              margin: 0,
                            }}
                          >
                            The local police department conducts a verification
                            at your provided address.
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
                            Step 8: Get Delivered
                          </h3>
                          <p
                            style={{
                              fontSize: "14px",
                              color: "#555",
                              margin: 0,
                            }}
                          >
                            Once approved, your passport is printed and
                            delivered to your doorstep.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
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
                                  "Excellent service! I applied for a Tatkal passport and got it within 3 days. The team handled everything professionally and answered all my queries patiently."
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
                                    R.
                                  </div>
                                  <span
                                    style={{
                                      fontWeight: "bold",
                                      fontSize: "14px",
                                      color: "#374151",
                                    }}
                                  >
                                    Rajesh Hegde, Kuvempu Nagar
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
                                  "Being a first-time applicant, I was confused about the process. Make My Document made it incredibly easy and hassle-free. Highly recommend their service in Mysore."
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
                                    Sneha Rao, Gokulam
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
                                  "They handled the documentation and appointment booking perfectly. I didn’t face any delays or confusion. Totally satisfied with their service."
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
                                    A.      
                                  </div>
                                  <span
                                    style={{
                                      fontWeight: "bold",
                                      fontSize: "14px",
                                      color: "#374151",
                                    }}
                                  >
                                    Arjun M, Saraswathipuram
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
                                  "I needed my passport urgently for a job abroad. Their Tatkal process was quick, and they even followed up post-appointment. Great support!"
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
                                    A.
                                  </div>
                                  <span
                                    style={{
                                      fontWeight: "bold",
                                      fontSize: "14px",
                                      color: "#374151",
                                    }}
                                  >
                                   Ayesha K., JP Nagar
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
                                  "Reliable and prompt. Their team came to my place, picked up the documents, and submitted everything on time. Great for busy professionals like me."
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
                                    N.
                                  </div>
                                  <span
                                    style={{
                                      fontWeight: "bold",
                                      fontSize: "14px",
                                      color: "#374151",
                                    }}
                                  >
                                    Nithin Kumar, Vijayanagar
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
                                  "I applied for my daughter’s minor passport. The entire process was well-managed, and they kept me informed at every step. Excellent family-friendly service."
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
                                    M.
                                  </div>
                                  <span
                                    style={{
                                      fontWeight: "bold",
                                      fontSize: "14px",
                                      color: "#374151",
                                    }}
                                  >
                                    Meenakshi Bhat, Hebbal
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
                                name: "Rohit , Andheri East",
                                initial: "M",
                                review:
                                  "Make My Documents helped me get my Tatkal passport in just two days! Super smooth experience.",
                              },
                              {
                                name: "Fatima , Colaba",
                                initial: "S.",
                                review:
                                  "They guided me patiently through every step. Very reliable passport agent in Mysore.",
                              },
                              {
                                name: "Karan , Borivali",
                                initial: " J.",
                                review:
                                  "From document verification to appointment booking, everything was handled with clarity.",
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
                  <strong> Passport Agent in Mysore</strong>
                </h2>
                <p style={{ textAlign: "left" }}>
            Applying for a passport shouldn’t be stressful. Whether you're planning an international trip or need government identification, getting your passport processed smoothly is a priority. At Make My Document, we simplify every step with expert support and quick documentation services. As a trusted passport agent in Mysore, we guide applicants through every stage — from form filling to appointment scheduling — saving time and avoiding common errors that cause delays.
                </p>
                <p style={{ textAlign: "left" }}>
         With years of experience assisting individuals and families across Mysore, we’ve built a process that is transparent, reliable, and customer-focused. Whether you're applying for the first time or renewing an existing passport, our team ensures your application is complete, compliant, and submitted without hassle.
                </p>
                <br />
                <h3 style={{ textAlign: "left", fontSize: "18px" }}>
                  <strong>Types of Indian Passports </strong>
                </h3>
                <p style={{ textAlign: "left" }}>
               India offers three primary types of passports, each designed to suit the traveler’s role, purpose of travel, and level of official responsibility. Understanding the right category is essential before applying, and at Make My Document, we assist in identifying which type best fits your requirement — ensuring clarity and compliance from the start.
                </p>
                <br />
                <h3 style={{ fontSize: "16px", fontWeight: "bold" }}>
                 Ordinary Passport (Blue Cover)
                </h3>
                <p style={{ textAlign: "left" }}>
                 This is the standard passport issued to ordinary Indian citizens. It is primarily used for personal travel including leisure, education, business trips, and employment abroad. The ordinary passport is issued with a validity of {" "}
                  <span style={{ fontWeight: "bold" }}>
                    10 years for adults
                  </span>{" "}and    <span style={{ fontWeight: "bold" }}>
                     5 years for minors,
                  </span>
                and contains either 36 or 60 pages depending on usage needs. It is the most widely used passport and includes all standard features such as biometric data, machine-readable zones, and security watermarks.
                </p>
                <h3 style={{ fontSize: "16px", fontWeight: "bold" }}>
                  Official Passport (White Cover)
                </h3>
                <p style={{ textAlign: "left" }}>
                 This category is less commonly known and is issued to individuals traveling on official government business. These include employees of the Indian government, such as IFS (Indian Foreign Services) staff, bureaucrats, or individuals who are representing the country for administrative purposes. The official passport authorizes the holder to travel abroad on behalf of the Government of India but does not come with diplomatic privileges.
                </p>
                <h2 style={{ fontSize: "16px", fontWeight: "bold" }}>
                 Diplomatic Passport (Maroon Cover)
                </h2>
                <p style={{ textAlign: "left" }}>
               Reserved for elite government officials and diplomats, the diplomatic passport allows for visa-free or expedited entry into many countries under mutual agreements. It is granted to high-ranking government representatives such as the President, Prime Minister, senior IAS officers on foreign missions, or Indian ambassadors. This passport includes elevated security clearance and immunities as outlined under international diplomatic conventions.
Each passport type not only differs in color and appearance but also in processing protocols, international privileges, and eligibility standards. Our experts at Make My Document are well-versed in guiding applicants through the distinctions and ensuring that every case is handled according to MEA regulations.

                </p>
                <h2 style={{ fontSize: "16px", fontWeight: "bold" }}>
                  Eligibility for Passport Application
                </h2>
                <p style={{ textAlign: "left" }}>
               Applying for an Indian passport involves more than just filling out a form — applicants must satisfy specific eligibility conditions as outlined by the Ministry of External Affairs (MEA). These conditions ensure that the passport is granted only to rightful and legally compliant citizens. At Make My Document (Passport Agent in Mysore), we help assess your eligibility before you begin the process to avoid any setbacks or rejections.
                </p>
                <h3 style={{ fontSize: "16px", fontWeight: "bold" }}>
                  Indian Citizenship: 
                </h3>
                <p style={{ textAlign: "left" }}>
                Only individuals recognized as Indian citizens—whether by birth, descent, registration, or naturalization—are eligible to apply. This is a fundamental requirement, and supporting evidence like a birth certificate, government-issued ID, or citizenship documents may be needed depending on your case.
                </p>

   <h3 style={{ fontSize: "16px", fontWeight: "bold" }}>
                   Valid Proof of Identity and Address: 
                </h3>
                <p style={{ textAlign: "left" }}>
Applicants must provide reliable, government-approved proof of identity (such as Aadhaar, PAN, or Voter ID) and a document establishing their current address (such as utility bills, rental agreements, or bank statements). Incomplete or mismatched documentation is one of the most common causes of application delays.
                </p>
<h3 style={{ fontSize: "16px", fontWeight: "bold" }}>
                 Age Requirement: 
                </h3>
                <p style={{ textAlign: "left" }}>
There is no minimum age limit to apply for an Indian passport. However, special rules apply for minors (under 18), including the need for parental or guardian consent. For minors, the passport is typically issued with a 5-year validity or until they turn 18, whichever is earlier.
                </p>
<h3 style={{ fontSize: "16px", fontWeight: "bold" }}>
                  No Pending Legal Cases: 
                </h3>
                <p style={{ textAlign: "left" }}>
The applicant must not be involved in ongoing criminal proceedings or have unresolved court cases. Those with past legal issues may still apply but must submit relevant clearances or court permissions along with their application.
                </p>
<h3 style={{ fontSize: "16px", fontWeight: "bold" }}>
                 Previous Passport (if applicable): 
                </h3>
                <p style={{ textAlign: "left" }}>
For those applying for reissue or renewal, submitting the old passport is mandatory. This helps the authorities verify your past travel records and any changes to your personal details like address, name, or appearance.

                </p>
   <p style={{ textAlign: "left" }}>
Whether you’re applying for the first time or reissuing a passport after years, our team ensures you meet all eligibility conditions. We perform a thorough check of your documents, advise on exceptions, and handle edge cases — giving you a smooth, error-free passport application experience.
                </p>


                <h2 style={{ textAlign: "left", fontSize: "18px" }}>
                  <strong> Who Can Apply for a Passport in Mysore?</strong>
                </h2>
                <p style={{ textAlign: "left" }}>
                If you are an Indian citizen currently residing in Mysore or surrounding areas such as Nanjangud, Hunsur, or Srirangapatna, you are eligible to apply for an Indian passport through the official Passport Seva system. The application process is standardized nationwide but may involve regional appointment availability and police verification through your local jurisdiction. Make My Document (Passport Agent in Mysore) simplifies this journey by offering local assistance tailored to Mysore residents.
  
                </p>
                <h3 style={{ fontSize: "16px", fontWeight: "bold" }}>
                  Fresh Passport 
                </h3>
                <p style={{ textAlign: "left" }}>
              Ideal for individuals who have never held an Indian passport before. This category is suitable for both adults and children applying for their first international travel document. You’ll need to submit identity, address, and birth proof documents, and attend a PSK (Passport Seva Kendra) appointment in Mysore.
                </p>
                   <h3 style={{ fontSize: "16px", fontWeight: "bold" }}>
                  Reissue of Passport 
                </h3>
                <p style={{ textAlign: "left" }}>
              If your passport is expired, nearing expiration, lost, stolen, or significantly damaged, you can apply for a reissue. This process includes verification of old details and updating new ones like address or name (if changed post-marriage, for example).
                </p>
                   <h3 style={{ fontSize: "16px", fontWeight: "bold" }}>
                  Minor Passport 
                </h3>
                <p style={{ textAlign: "left" }}>
              Children under the age of 18 are eligible to apply for a minor passport, which generally comes with a shorter validity. Parental consent, birth certificate, and identification documents are required, and the application must be submitted by a parent or legal guardian.
                </p>
                   <h3 style={{ fontSize: "16px", fontWeight: "bold" }}>
                  Tatkal Passport
                </h3>
                <p style={{ textAlign: "left" }}>
              For those needing a passport urgently—due to job requirements, travel emergencies, or visa processing deadlines—the Tatkal service offers faster processing, often within 1 to 3 working days. Additional documentation and self-declaration forms are required for eligibility.
                </p>
              
                <h2 style={{ textAlign: "left", fontSize: "18px" }}>
                  <strong>
                    {" "}
                   Why Choose to Make My Document for Passport Service?
                  </strong>
                </h2>
           
                <p style={{ textAlign: "left" }}>
                  At Make My Document a Passport Agent in Mysore, we believe that applying for a passport shouldn’t feel like navigating a maze. We're not just agents—we're your local passport partners in Mysore, ensuring that every step is handled with care, accuracy, and professionalism. Here's what sets us apart:   
                </p>
                <p style={{ textAlign: "left" }}>
                  ●{" "}
                  <span style={{ fontWeight: "bold" }}>
                   End-to-End Support
                  </span>
                  <br />
                 We handle everything — from account registration on the Passport Seva portal, to scheduling appointments, and guiding you through police verification if needed. You won’t have to figure out anything alone.
                </p>
                <p style={{ textAlign: "left" }}>
                  ●{" "}
                  <span style={{ fontWeight: "bold" }}>
                    Expert Guidance
                  </span>
                  <br />
                 Our team stays updated with the latest MEA policies, Tatkal procedures, and regional document guidelines. Whether it’s your first passport or a reissue, we ensure you’re fully prepared and compliant.
                </p>
                <p style={{ textAlign: "left" }}>
                  ●{" "}
                  <span style={{ fontWeight: "bold" }}>
                   Error-Free Filing
                  </span>
                  <br />
                 Most application delays happen due to small mistakes. We double-check every entry, document, and submission format to ensure your application is processed without hiccups.
                </p>
                <p style={{ textAlign: "left" }}>
                  ●{" "}
                  <span style={{ fontWeight: "bold" }}>
                    Local Office & Convenience
                  </span>
                  <br />
                 We’re based right here in Mysore, meaning you get quick in-person assistance, easy document drop-offs, and help in your local language if needed — no long-distance calls or confusion.
                </p>
                <p style={{ textAlign: "left" }}>
                  ●{" "}
                  <span style={{ fontWeight: "bold" }}>
                    Customer Satisfaction 
                  </span>
                  <br />
                 Our success comes from client trust. With hundreds of successfully processed applications and a high referral rate, our service is driven by results and positive experiences.
                </p>
            
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

export default PassportAgentinMysore;
