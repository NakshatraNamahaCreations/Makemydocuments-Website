import React, { useState, useEffect, useRef } from "react";
import bannerimage from "../../images/passportindianbanner.png";
import circleIcon from "../../images/circle1.svg";
import documentsIcon from "../../images/documents.svg";
import TimeIcon from "../../images/Time.svg";
import Price from "../../images/Price Tag.svg";
import axios from "axios";

import { Link } from "react-router-dom";
import "../passport/passport.css"

import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const relatedServices = [
    { name: "Insurance", path: "/insurance" },
    { name: "Travel Visa", path: "/visa" },
    { name: "Police Verification", path: "/policeverification" },
    { name: "Police Clearance Certificate", path: "/police-clearance-certificate" },
    { name: "Pan Card", path: "/pan-card" },
    { name: "Affidavits / Annexure", path: "/affidavits" },
];

const PassportAgentinChennai = () => {
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
            question: "Can I apply for a passport without a birth certificate?",
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
                "Yes, if you're born before 1989, alternative documents like a school certificate are acceptable.",
        },
        {
            question: "What is the difference between Normal and Tatkal passport?",
            answer:
                "Tatkal is for urgent processing; Normal takes standard processing time with pre-verification.",
        },
        {
            question: "Is police verification mandatory for all passports?",
            answer: "Yes, except in some Tatkal cases where verification is done after issuance.",
        },
        {
            question: "Can I renew my passport before expiry?",
            answer: "Yes, you can apply for renewal within 1 year before expiry.",
        },
        {
            question: "Can I update my name or address in the passport?",
            answer:
                "Yes, a reissue application with valid proof is required for any updates.",
        },
        {
            question: "Can minors apply for a passport?",
            answer: "Yes, with parental consent and supporting documents.",
        },
        {
            question: " Do I need to visit the Passport Seva Kendra in person?",
            answer:
                "Yes, biometric capture and document verification require in-person visits.",
        },
        {
            question: "Is a passport mandatory for international travel?",
            answer:
                "Yes, a valid passport is required to travel outside India.",
        },
        {
            question: "Do I need to update my passport after divorce?",
            answer:
                "Yes, you can remove your spouse's name by submitting a reissue with divorce decree.",
        },
        {
            question: "Is a passport required for domestic air travel?",
            answer:
                "No, government-issued IDs like Aadhaar or PAN are enough for domestic travel.",
        },
    ];


    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <Helmet>
                <title>Get Your Passport Fast | Passport Agent in Chennai
                </title>
                <meta name="description" content="Need your passport fast? Our passport agency in Bangalore provides expert assistance for new applications, renewals and corrections to ensure a smooth process.
"/>
                <meta name="keywords" content="passport, get passport fast, passport application, passport services, passport assistance, hassle-free passport, quick passport, passport team, passport solutions, secure passport, professional passport services, efficient passport application" />
                <link rel="canonical" href="https://makemydocuments.com/passport-agent-in-chennai
" />
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
        "@id": "https://makemydocuments.com/passport-agent-in-chennai",
        "url": "https://makemydocuments.com/passport-agent-in-chennai",
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
        "description": "We are reliable passport agent in Chennai, specializing in passport applications, renewals, name/address updates and Tatkal service. Get expert assistance today",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Passport Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "New Passport Applications"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Passport Renewal"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Lost or Stolen Passport Replacement"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Passport Corrections"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Child Passport Applications"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Name Change on Passport"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Expedited Passport Services"
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
                  "name": "Can I apply for a passport without a birth certificate?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, if you're born before 1989, alternative documents like a school certificate are acceptable."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the difference between Normal and Tatkal passport?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Tatkal is for urgent processing; Normal takes standard processing time with pre-verification."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is police verification mandatory for all passports?",
          "acceptedAnswer",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text":"Yes, except in some Tatkal cases where verification is done after issuance."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I renew my passport before expiry?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, you can apply for renewal within 1 year before expiry."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I update my name or address in the passport?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, a reissue application with valid proof is required for any updates."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can minors apply for a passport?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, with parental consent and supporting documents."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I need to visit the Passport Seva Kendra in person?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, biometric capture and document verification require in-person visits."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is a passport mandatory for international travel?",
          "acceptedAnswer",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, a valid passport is required to travel outside India."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I need to update my passport after divorce?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, you can remove your spouse's name by submitting a reissue with divorce decree."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is a passport required for domestic air travel?",
          "acceptedAnswer",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, government-issued IDs like Aadhaar or PAN are enough for domestic travel."
                  }
                }
              ]
            }
          `}
                </script>

                <meta property="og:title" content="Leading Passport Agent in Chennai | Expert Passport Services" />
                <meta property="og:description" content="We are reliable passport agent in Chennai, specializing in passport applications, renewals, name/address updates and Tatkal service. Get expert assistance today." />
                <meta property="og:url" content="https://makemydocuments.com/passport-agent-in-chennai" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://www.makemydocuments.com/images/passport-service-banner.jpg" />
                <meta property="og:site_name" content="Make My Documents" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Leading Passport Agent in Chennai | Expert Passport Services" />
                <meta name="twitter:description" content="We are reliable passport agent in Chennai, specializing in passport applications, renewals, name/address updates and Tatkal service. Get expert assistance today." />
                <meta name="twitter:image" content="https://www.makemydocuments.com/images/passport-service-banner.jpg" />
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
                            Passport Agent in Chennai
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
                                        Passport Agent in Chennai
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
                                                    whiteSpace: 'nowrap',
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
                                                    whiteSpace: 'nowrap',
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
                                        Passport Agent in Chennai


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
                                        ⭐ <span style={{ marginLeft: "6px" }}>99% Delivered on time</span>
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
                                            <p style={{ margin: 0, fontSize: "10px", }}>15-20 working days (Normal)
                                            </p>
                                            <p style={{ margin: 0, fontSize: "10px", }}>5-10 working days (Tatkal)

                                            </p>
                                        </div>
                                        <div>
                                            <p style={{ margin: 0, fontWeight: "bold", fontSize: "10px", }}>Starting from</p>
                                            <p style={{ margin: 0, color: "#ffc107", fontWeight: "bold", fontSize: "10px", }}>
                                                ₹2,499/-
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
                                    <div className="d-flex align-items-center w-100 flex-wrap mt-5 gap-3  d-none d-lg-block" style={{ marginLeft: '2%' }}>
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
                                        <div style={{ marginTop: '' }}>
                                            <h5 style={{ color: "#007BFF", fontWeight: "bold" }}>Charges</h5>
                                            <ul style={{ listStyleType: "disc", paddingLeft: "20px", }}>
                                                <li><strong style={{ color: '#ff9800' }}>Rs. 2,499/-</strong> For (Normal Application)
                                                </li>
                                                <li><strong style={{ color: '#ff9800' }}>Rs. 4,499/-</strong>  For (Tatkal Application)
                                                </li>
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
                                                    <li><strong style={{ color: "#ff9800" }}>Rs. 2,499/-</strong> For (Normal Application)
                                                        {" "}

                                                    </li>
                                                    <li><strong style={{ color: "#ff9800" }}>Rs. 4,499/- </strong> For (Tatkal Application)
                                                        {" "}
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

                                        <h4 style={{ fontWeight: '600', fontSize: '20px' }}>Proof of Identity (Any 01)</h4>
                                        <p style={{ fontSize: "16px", color: "#333", margin: 0 }}>- Aadhar Card</p>
                                        <p style={{ fontSize: "16px", color: "#333", margin: 0 }}>- Voter ID</p>
                                        <p style={{ fontSize: "16px", color: "#333", margin: 0 }}>- Pan Card</p>
                                        <p style={{ fontSize: "16px", color: "#333", margin: 0 }}>- Driving Licence</p>

                                        <h4 style={{ fontWeight: '600', fontSize: '20px' }} className="mt-3">Proof of Address (Any 01)</h4>
                                        <p style={{ fontSize: "16px", color: "#333", margin: 0 }}>- Aadhar Card</p>
                                        <p style={{ fontSize: "16px", color: "#333", margin: 0 }}>- Voter ID</p>
                                        <p style={{ fontSize: "16px", color: "#333", margin: 0 }}>- Bank Account Passbook</p>
                                        <p style={{ fontSize: "16px", color: "#333", margin: 0 }}>- Gas / Electricity / Telephone / Water Bill</p>
                                        <p style={{ fontSize: "16px", color: "#333", margin: 0 }}>- Parents Passport / Spouse Passport</p>

                                        <h4 style={{ fontWeight: '600', fontSize: '20px' }} className="mt-3">Proof of Birth (Any 01)</h4>
                                        <p style={{ fontSize: "16px", color: "#333", margin: 0 }}>- 10th Certificate</p>
                                        <p style={{ fontSize: "16px", color: "#333", margin: 0 }}>- 12th Certificate</p>
                                        <p style={{ fontSize: "16px", color: "#333", margin: 0 }}>- Higher Education Pass Certificate</p>
                                        <p style={{ fontSize: "16px", color: "#333", margin: 0 }}>- School Leaving Certificate</p>
                                        <p style={{ fontSize: "16px", color: "#333", margin: 0 }}>- Income Tax Assessment Order</p>

                                        <h3 style={{ fontWeight: '600', fontSize: '20px' }} className="mt-4">Document Required for Renewal / Reissue of Passport</h3>
                                        <p style={{ fontSize: "16px", color: "#333", margin: 0 }}>- Original Old Passport</p>
                                        <p style={{ fontSize: "16px", color: "#333", margin: 0 }}>- ID and Present Address Proof</p>

                                        <h3 style={{ fontWeight: '600', fontSize: '20px' }} className="mt-4">Document Required for Minor Passport</h3>
                                        <p style={{ fontSize: "16px", color: "#333", margin: 0 }}>- Birth Certificate</p>
                                        <p style={{ fontSize: "16px", color: "#333", margin: 0 }}>- Both Parents Passport</p>
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
                                                Documents Required For Fresh Passport
                                            </h5>

                                            <h6 style={{ fontSize: "14px", fontWeight: "bold" }}>Proof of Identity (Any 01)</h6>
                                            <p style={{ fontSize: "13px", marginBottom: "5px" }}>- Aadhar Card</p>
                                            <p style={{ fontSize: "13px", marginBottom: "5px" }}>- Voter ID</p>
                                            <p style={{ fontSize: "13px", marginBottom: "5px" }}>- Pan Card</p>
                                            <p style={{ fontSize: "13px", marginBottom: "5px" }}>- Driving Licence</p>

                                            <h6 style={{ fontSize: "14px", fontWeight: "bold", marginTop: "10px" }}>Proof of Address (Any 01)</h6>
                                            <p style={{ fontSize: "13px", marginBottom: "5px" }}>- Aadhar Card</p>
                                            <p style={{ fontSize: "13px", marginBottom: "5px" }}>- Voter ID</p>
                                            <p style={{ fontSize: "13px", marginBottom: "5px" }}>- Bank Account Passbook</p>
                                            <p style={{ fontSize: "13px", marginBottom: "5px" }}>- Gas / Electricity / Telephone / Water Bill</p>
                                            <p style={{ fontSize: "13px", marginBottom: "5px" }}>- Parents Passport / Spouse Passport</p>

                                            <h6 style={{ fontSize: "14px", fontWeight: "bold", marginTop: "10px" }}>Proof of Birth (Any 01)</h6>
                                            <p style={{ fontSize: "13px", marginBottom: "5px" }}>- 10th Certificate</p>
                                            <p style={{ fontSize: "13px", marginBottom: "5px" }}>- 12th Certificate</p>
                                            <p style={{ fontSize: "13px", marginBottom: "5px" }}>- Higher Education Pass Certificate</p>
                                            <p style={{ fontSize: "13px", marginBottom: "5px" }}>- School Leaving Certificate</p>
                                            <p style={{ fontSize: "13px", marginBottom: "5px" }}>- Income Tax Assessment Order</p>

                                            <h5 style={{ fontSize: "16px", fontWeight: "bold", marginTop: "15px" }}>
                                                Document Required for Renewal / Reissue of Passport
                                            </h5>
                                            <p style={{ fontSize: "13px", marginBottom: "5px" }}>- Original Old Passport</p>
                                            <p style={{ fontSize: "13px", marginBottom: "5px" }}>- ID and Present Address Proof</p>

                                            <h5 style={{ fontSize: "16px", fontWeight: "bold", marginTop: "15px" }}>
                                                Document Required for Minor Passport
                                            </h5>
                                            <p style={{ fontSize: "13px", marginBottom: "5px" }}>- Birth Certificate</p>
                                            <p style={{ fontSize: "13px", marginBottom: "0" }}>- Both Parents Passport</p>
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
                                                        Make a secure online payment to proceed with the application service.

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
                                                        We schedule your Passport Seva Kendra (PSK) appointment as per your preferred date and time.
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
                                                        Visit the designated PSK center with your original documents for biometric and verification.
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
                                                        Step 7:  Police Verification
                                                    </h3>
                                                    <p
                                                        style={{
                                                            fontSize: "14px",
                                                            color: "#555",
                                                            margin: 0,
                                                        }}
                                                    >
                                                        The local police department conducts a verification at your provided address.
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
                                                        Step 8:  Get Delivered
                                                    </h3>
                                                    <p
                                                        style={{
                                                            fontSize: "14px",
                                                            color: "#555",
                                                            margin: 0,
                                                        }}
                                                    >
                                                        Once approved, your passport is printed and delivered to your doorstep.
                                                    </p>
                                                </div>
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
                                                                >I really appreciate Suneetha Madam and Murthy Sir helped lot and very helpful ,Got my passport and delivered on time. The entire process was smooth, and I appreciate the timely communication and professionalism. i am very much thankful to suneeta she is well knowledge about passport documentsI really appreciate Suneetha Madam and Murthy Sir helped lot and very helpful ,Got my passport and delivered on time. The entire process was smooth, and I appreciate the timely communication and professionalism.
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
                                                                        Prakasha N

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
                                                                    Nice quick and Prompt service as promised with at most professional quality
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

                                                                    </div>
                                                                    <span
                                                                        style={{
                                                                            fontWeight: "bold",
                                                                            fontSize: "14px",
                                                                            color: "#374151",
                                                                        }}
                                                                    >
                                                                        Murali Sundarrajan

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
                                                                    "I am very happy to get my passport with make my documents teams will recommend to take their help they will go out of the way and will help even after you get your passport or any other issues I would personally refer.
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

                                                                    </div>
                                                                    <span
                                                                        style={{
                                                                            fontWeight: "bold",
                                                                            fontSize: "14px",
                                                                            color: "#374151",
                                                                        }}
                                                                    >
                                                                        Shilpi Gera
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
                                                                    "Their communication always remains calm and professional, Society must need a service like this and finally thanks to make my documents.
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

                                                                    </div>
                                                                    <span
                                                                        style={{
                                                                            fontWeight: "bold",
                                                                            fontSize: "14px",
                                                                            color: "#374151",
                                                                        }}
                                                                    >
                                                                        Sanjeev Kumar

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
                                                                    "Such a cool mentality people which the issue to be get solved within a finger tip.. Hats off to all your team. Fabulous service.
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

                                                                    </div>
                                                                    <span
                                                                        style={{
                                                                            fontWeight: "bold",
                                                                            fontSize: "14px",
                                                                            color: "#374151",
                                                                        }}
                                                                    >
                                                                        Vinodh Rao
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
                                                                    "I really appreciate the team it's really a wonderful service and immediate response and special thanks to Mr.Murthy for his availability and immediate support. Thanks for make my documents
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

                                                                    </div>
                                                                    <span
                                                                        style={{
                                                                            fontWeight: "bold",
                                                                            fontSize: "14px",
                                                                            color: "#374151",
                                                                        }}
                                                                    >
                                                                        Siva Mani
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
                                                                name: "Prakasha N",
                                                                initial: "P",
                                                                review:
                                                                    "I really appreciate Suneetha Madam and Murthy Sir helped lot and very helpful ,Got my passport and delivered on time. The entire process was smooth, and I appreciate the timely communication and professionalism. i am very much thankful to suneeta she is well knowledge about passport documents",
                                                            },
                                                            {
                                                                name: "Murali Sundarrajan",
                                                                initial: "",
                                                                review:
                                                                    "Nice quick and Prompt service as promised with at most professional quality",
                                                            },
                                                            {
                                                                name: " Shilpi Gera",
                                                                initial: "",
                                                                review:
                                                                    "I am very happy to get my passport with make my documents teams will recommend to take their help they will go out of the way and will help even after you get your passport or any other issues I would personally refer.",
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
                                    <strong>Passport Agent in Chennai
                                    </strong>
                                </h2>
                                <p style={{ textAlign: 'left' }}>

                                    If you are planning to apply for a passport in Chennai, it’s essential to ensure your documents are correct and the application is submitted accurately. Make My Document is a trusted name in Chennai for guiding individuals through the passport process efficiently and with attention to detail.
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    We assist with new passport applications, renewals, address or name changes, lost/damaged passports, and minor passport services. Our goal is to simplify the process and help you complete each step as per official guidelines.
                                </p>
                                <br />

                                <h2 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong>Types of Indian Passports            </strong>
                                </h2>
                                <br />
                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>Ordinary Passport (Blue Passport)
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    The standard passport issued to Indian citizens for general travel purposes. It is valid for 10 years for adults and 5 years for minors. This passport is suitable for regular citizens traveling abroad for tourism, business, or personal reasons.

                                </p>

                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>Diplomatic Passport (Maroon Passport)</h3>

                                <p style={{ textAlign: 'left' }}>
                                    Issued to high-ranking government officials, diplomats and representatives of the Indian government. It allows easier travel and visa facilitation as it is meant for official government duties. This passport is typically issued to Indian Foreign Service (IFS) officers and individuals representing India abroad.
                                </p>


                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>Official Passport (White Passport)
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    Diplomatic passports are issued to Indian diplomats and top-level government officials. These passports provide diplomatic privileges and are used for high-level international representation.
                                </p>

                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>Diplomatic Passport (Maroon Cover)
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    Diplomatic passports are issued to Indian diplomats and top-level government officials. These passports provide diplomatic privileges and are used for high-level international representation.</p>
                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>Emergency (Tatkal) Passport (Blue Passport)
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    This is a fast-track version of the Ordinary Passport issued under the Tatkal scheme. It is suitable for urgent travel needs and is issued quicker, often before police verification. Supporting documents are required to justify the urgency.</p>
                                <h2 style={{ fontSize: '16px', fontWeight: 'bold' }}> Eligibility for Passport Application
                                </h2>

                                <p style={{ textAlign: 'left' }}>
                                    You are eligible to apply for an Indian passport in Chennai if you meet the following conditions:
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    - You are an Indian citizen by birth, naturalization, registration, or descent
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    - You have valid proof of identity, date of birth, and address in India
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    - You are not barred by law from obtaining a passport due to criminal or legal restrictions
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    - Minors can apply through their parents or legal guardians
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    - Applicants must not have pending criminal cases or legal restrictions on international travel unless permitted by a competent court
                                </p>
                                <br />
                                <h2 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong> Who Can Apply for a Passport in Chennai?
                                    </strong>
                                </h2>
                                <p style={{ textAlign: 'left' }}>
                                    Residents of Chennai and nearby areas who are Indian citizens can apply for various passport services. This inclues:</p>
                                <p style={{ textAlign: 'left' }}>
                                    Residents of Chennai and nearby areas who are Indian citizens can apply for various passport services. This includes:
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    1. First-time applicants
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    2. Applicants renewing an expired passport
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    3. Those needing reissue due to lost, stolen, or damaged passports
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    4. Individuals updating personal information like name, address, or marital status
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    5. Parents applying on behalf of their minor children
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    6. Senior citizens seeking renewal or fresh issue
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    Make My Document assists individuals with document preparation, form submission, appointment bookings, and post-submission guidance.
                                </p>
                                <h2 style={{ fontSize: '16px', fontWeight: 'bold' }}>Modes of Indian Passports
                                </h2>

                                <p style={{ textAlign: 'left' }}>
                                    Indian passports can be applied and processed under two primary modes, depending on the urgency and nature of travel. These modes determine the processing speed, documentation requirements, and police verification timelines.
                                </p>
                                <br />

                                <h3 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong>  Normal Mode
                                    </strong>
                                </h3>


                                <p style={{ textAlign: 'left' }}>
                                    This is the standard passport processing mode. It follows the usual timeline for document verification and police clearance.
                                </p>

                                <p style={{ textAlign: 'left' }}>
                                    - <span style={{ fontWeight: 'bold' }}>Processing Time:</span> Typically 25–30 working days (may vary by location)
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    - <span style={{ fontWeight: 'bold' }}>Police Verification:</span> Usually done before the passport is issued
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    - <span style={{ fontWeight: 'bold' }}>Use Case:</span>Ideal for applicants who do not require the passport urgently
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    - <span style={{ fontWeight: 'bold' }}>Documentation:</span>Standard set of identity, address, and birth proofs
                                </p>
                                <h3 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong> Tatkal Mode
                                    </strong>
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    This mode is designed for urgent/emergency travel needs. The passport is issued much faster, often within 1–3 working days after the appointment, depending on eligibility.
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    - <span style={{ fontWeight: 'bold' }}>Processing Time:</span>1–3 working days (after successful document verification)
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    - <span style={{ fontWeight: 'bold' }}>Police Verification:</span> Usually done after passport issuance
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    - <span style={{ fontWeight: 'bold' }}>Use Case:</span> Suitable for those needing a passport on short notice
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    - <span style={{ fontWeight: 'bold' }}>Additional Requirement:</span>  A Verification Certificate (Annexure F) from a Gazetted Officer or other specific documents for faster clearance
                                </p>
                                <br />
                                <h2 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong> Why Choose Make My Documents for Passport Service?
                                    </strong>
                                </h2>
                                <br />
                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>Complete Application Support

                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    We provide end-to-end guidance from understanding the right passport type to form submission. Our team ensures that each detail is correctly filled to avoid processing delays or rejections.</p>
                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>  Document Verification Assistance
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    Our experts help you gather and validate all required documents according to the Passport Seva standards. We inform you of any additional requirements for special cases such as minors, divorced applicants, or Tatkal requests.</p>


                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>Experienced Guidance</h3>

                                <p style={{ textAlign: 'left' }}>
                                    With years of experience in passport facilitation, we are familiar with a wide range of application scenarios. We’re able to address doubts related to police verification, name mismatches, and document discrepancies.
                                </p>

                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}> Convenient Appointment Scheduling
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    We coordinate with you to book appointments at the nearest Passport Seva Kendra (PSK) or Post Office PSK in Chennai. You receive clear instructions for attending the appointment and required documentation.
                                </p>

                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>Transparent Process and Pricing

                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    Our service includes clear communication regarding both government and service charges. We maintain transparency throughout the process and do not charge beyond the agreed amount.
                                </p>
                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>Support for Tatkal and Urgent Cases
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    If you have immediate travel plans, we assist in filing Tatkal applications with the necessary supporting documents. We ensure the forms are correctly filled to avoid rejection or appointment issues.
                                </p>
                                <br />
                                <h2 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong>  The Passport Application Process
                                    </strong>
                                </h2>
                                <br />
                                <span style={{ fontSize: '16px', fontWeight: 'bold' }}>Step 1: Schedule Your Appointment</span>

                                <p style={{ textAlign: 'left' }}>
                                    The first step is to schedule an appointment through the official Passport Seva Portal. Choose the date and time for your visit to the Passport Seva Kendra (PSK) in Bangalore. Make sure to select the appropriate category of service (normal, Tatkal, etc.) based on your needs.</p>

                                <span style={{ fontSize: '16px', fontWeight: 'bold' }}>Step 2: Submit Your Documents
                                </span>

                                <p style={{ textAlign: 'left' }}>
                                    On the day of your appointment, visit the Passport Seva Kendra with your original documents and their copies. Documents typically include proof of identity, address and date of birth. Ensure that all documents are verified and ready for submission to avoid delays.</p>

                                <span style={{ fontSize: '16px', fontWeight: 'bold' }}>Step 3: Attend the Passport Interview
                                </span>

                                <p style={{ textAlign: 'left' }}>
                                    During your visit, you will have to attend a brief interview with a passport officer. The officer will verify your documents, take your biometric details (photo and fingerprints) and confirm your personal information. It’s a straightforward process, ensuring all details are accurate before proceeding.</p>

                                <span style={{ fontSize: '16px', fontWeight: 'bold' }}>Step 4: Passport Dispatch and Delivery
                                </span>

                                <p style={{ textAlign: 'left' }}>
                                    After successful verification, your passport will be printed and dispatched to your address. You can track your passport status online to monitor its progress. Once dispatched, it will be delivered to your home, usually within 7-15 working days, depending on the service type (normal or Tatkal).</p>

                                {/* <h2 style={{fontSize:'16px'}}> Our Customers Testimonials</h2> */}
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

export default PassportAgentinChennai;