import React, { useState, useEffect, useRef } from "react";
import bannerimage from "../../images/passportindianbanner.png";
import circleIcon from "../../images/circle1.svg";
// import documentsIcon from "../../images/documents.svg";
// import TimeIcon from "../../images/Time.svg";
import Price from "../../images/Price Tag.svg";
// import axios from "axios";

import { Link } from "react-router-dom";
import "../passport/passport.css"

import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const relatedServices = [
    { name: "Insurance", path: "/insurance" },
  { name: "Tourist Visa", path: "/tourist-visa" },
    { name: "Police Verification", path: "/policeverification" },
    { name: "Police Clearance Certificate", path: "/police-clearance-certificate" },
    { name: "Pan Card", path: "/pan-card" },
    { name: "Affidavits / Annexure", path: "/affidavits" },
];

const PassportAgentinPune = () => {
    // const serviceRef = useRef(null);
    const navigate = useNavigate();
    //   const { services } = useParams();
    const [visibleCount] = useState(3);
    const [openIndex, setOpenIndex] = useState(null);

    const [blogs] = useState([]);
    const [isSticky, setIsSticky] = useState(false);
    // const [ loading,setLoading] = useState(true);
    // const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);


    const [active, setActive] = useState(null);
    const stickyColumnRef = useRef(null);
    const firstColumnRef = useRef(null);
    const stopStickyRef = useRef(null);
    const handleClick = (service) => {
        setActive(service.name);
        navigate(service.path);
    };

    // useEffect(() => {
    //     const handleResize = () => setIsMobile(window.innerWidth <= 768);
    //     window.addEventListener("resize", handleResize);
    //     return () => window.removeEventListener("resize", handleResize);
    // }, []);


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

    // useEffect(() => {
    //     const fetchBlogs = async () => {
    //         try {
    //             const response = await axios.get("https://api.makemydocuments.com/api/blogs");
    //             setBlogs(response.data.slice(0, 3));
    //             setLoading(false);
    //         } catch (error) {
    //             console.error("Error fetching blogs:", error);
    //             setLoading(false);
    //         }
    //     };

    //     fetchBlogs();
    // }, []);

    const faqs = [
        {
            question: "How many days does it take to get a passport in Pune?",
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
                "Regular passports take around 30 days. Tatkal passports can be issued within 3–7 working days.",
        },
        {
            question: "What documents are required for a fresh passport?",
            answer:
                "Proof of address, identity, date of birth, and additional documents if applying under Tatkal or minor category",
        },
        {
            question: "Do you help with Tatkal passport applications?",
            answer: "Yes, we help you arrange the extra documents and guide you through the faster process.",
        },
        {
            question: "Can I apply for a passport if I live in a rented house in Pune?",
            answer: "Yes, with a valid rent agreement or utility bill in your name, you can apply.",
        },
        {
            question: "What if I miss my appointment at PSK?",
            answer:
                "We assist you in rescheduling and preparing for the next available slot.",
        },
        {
            question: "Can I apply for a minor passport without both parents present?",
            answer: "Yes, but additional declaration documents will be required.",
        },
        {
            question: "Is police verification always mandatory?",
            answer:
                "In most cases, yes. However, Tatkal and government employee applications may have relaxed rules.",
        },
        {
            question: "Do you help with passport renewals?",
            answer:
                "Absolutely. We handle re-issue cases including change of address, name, or damaged passport.",
        },
        {
            question: "Do you provide doorstep service?",
            answer:
                "Currently, we offer online and in-office support. Document pickup may be available in select areas of Pune.",
        },
        {
            question: "How much do you charge for the service?",
            answer:
                "Our charges are reasonable and depend on the type of application. You can contact us for a quick quote.",
        },
    ];


    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <Helmet>

                {/* Canonical URL */}
                <link rel="canonical" href="https://www.makemydocuments.com/passport-agent-in-pune" />

                {/* Meta Title & Description */}
                <title>Reliable Passport Agent in Pune - Expert Passport Services</title>
                <meta
                    name="description"
                    content="Apply for a passport in Pune with expert help from Make My Documents. We assist with fresh, renewal, and Tatkal passport services. Book now!"
                />

                {/* Open Graph Tags */}
                <meta property="og:title" content="Reliable Passport Agent in Pune - Expert Passport Services" />
                <meta
                    property="og:description"
                    content="Apply for a passport in Pune with expert help from Make My Documents. We assist with fresh, renewal, and Tatkal passport services. Book now!"
                />
                <meta property="og:url" content="https://www.makemydocuments.com/passport-agent-in-pune" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://www.makemydocuments.com/images/passport-service-banner.jpg" />
                <meta property="og:site_name" content="Make My Documents" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Reliable Passport Agent in Pune - Expert Passport Services" />
                <meta
                    name="twitter:description"
                    content="Apply for a passport in Pune with expert help from Make My Documents. We assist with fresh, renewal, and Tatkal passport services. Book now!"
                />
                <meta name="twitter:image" content="https://www.makemydocuments.com/images/passport-service-banner.jpg" />
                <meta name="twitter:site" content="@makemydocuments" />

                {/* Schema.org Structured Data */}
                <script type="application/ld+json">
                    {`
      {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "LocalBusiness",
            "@id": "https://www.makemydocuments.com/passport-agent-in-pune",
            "name": "Make My Documents",
            "image": "https://www.makemydocuments.com/static/media/logo.31258f6da87268f7ee2d04f6f96e256d.svg",
            "url": "https://www.makemydocuments.com/passport-agent-in-pune",
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
            "description": "Apply for a passport in Pune with expert help from Make My Documents. We assist with fresh, renewal, and Tatkal passport services. Book now!",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Passport Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "New Passport Applications" }},
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Passport Renewal" }},
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lost or Stolen Passport Replacement" }},
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Passport Corrections" }},
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Child Passport Applications" }},
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Name Change on Passport" }},
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Expedited Passport Services" }}
              ]
            }
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How many days does it take to get a passport in Pune?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Regular passports take around 30 days. Tatkal passports can be issued within 3–7 working days."
                }
              },
              {
                "@type": "Question",
                "name": "What documents are required for a fresh passport?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Proof of address, identity, date of birth, and additional documents if applying under Tatkal or minor category."
                }
              },
              {
                "@type": "Question",
                "name": "Do you help with Tatkal passport applications?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we help you arrange the extra documents and guide you through the faster process."
                }
              },
              {
                "@type": "Question",
                "name": "Can I apply for a passport if I live in a rented house in Pune?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, with a valid rent agreement or utility bill in your name, you can apply."
                }
              },
              {
                "@type": "Question",
                "name": "What if I miss my appointment at PSK?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We assist you in rescheduling and preparing for the next available slot."
                }
              },
              {
                "@type": "Question",
                "name": "Can I apply for a minor passport without both parents present?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, but additional declaration documents will be required."
                }
              },
              {
                "@type": "Question",
                "name": "Is police verification always mandatory?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "In most cases, yes. However, Tatkal and government employee applications may have relaxed rules."
                }
              },
              {
                "@type": "Question",
                "name": "Do you help with passport renewals?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. We handle re-issue cases including change of address, name, or damaged passport."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide doorstep service?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Currently, we offer online and in-office support. Document pickup may be available in select areas of Pune."
                }
              },
              {
                "@type": "Question",
                "name": "How much do you charge for the service?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our charges are reasonable and depend on the type of application. You can contact us for a quick quote."
                }
              }
            ]
          }
        ]
      }
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



            </Helmet >

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
                            Passport Agent in Pune
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
                                        Passport Agent in Pune
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
                                    <p style={{ fontSize: "14px", fontWeight: "bold", marginBottom: "8px" }}>
                                        Passport Agent in Pune


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
                                        {/* <div>
                                            <p style={{ margin: 0, fontWeight: "bold", fontSize: "10px", }}>Starting from</p>
                                            <p style={{ margin: 0, color: "#ffc107", fontWeight: "bold", fontSize: "10px", }}>
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
                                <div className="col-md-8" ref={firstColumnRef} >
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
                                     <div className="d-flex align-items-center w-100 flex-wrap mt-5 gap-3  d-none d-lg-block" style={{ marginLeft: '2%' }}>
                            

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
                                                                >"Their support during my Tatkal application was excellent. Got my passport in 4 days."
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
                                                                        Aditya S.

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
                                                                    “Very responsive team, guided me even through WhatsApp. Highly reliable.”
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
                                                                        Sneha G.

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
                                                                    “I had confusion about documents. They handled everything and even booked my appointment.”
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
                                                                        Ravi T.
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
                                                                    “They’re professional, patient, and made the entire process stress-free.”
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
                                                                        P.
                                                                    </div>
                                                                    <span
                                                                        style={{
                                                                            fontWeight: "bold",
                                                                            fontSize: "14px",
                                                                            color: "#374151",
                                                                        }}
                                                                    >
                                                                        Priyanka M.

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
                                                                    “Make My Documents made passport renewal so easy. Thanks to their clear instructions.”
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
                                                                        V.
                                                                    </div>
                                                                    <span
                                                                        style={{
                                                                            fontWeight: "bold",
                                                                            fontSize: "14px",
                                                                            color: "#374151",
                                                                        }}
                                                                    >
                                                                        Vishal K.
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
                                                                    “Great experience. No pushy sales, just honest and helpful service.”
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
                                                                        Neha R.

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
                                                                name: "Aditya S.",
                                                                initial: "A",
                                                                review:
                                                                    "Their support during my Tatkal application was excellent. Got my passport in 4 days.",
                                                            },
                                                            {
                                                                name: "Sneha G.",
                                                                initial: "S.",
                                                                review:
                                                                    "Very responsive team, guided me even through WhatsApp. Highly reliable.",
                                                            },
                                                            {
                                                                name: "Ravi T.",
                                                                initial: "R.",
                                                                review:
                                                                    "I had confusion about documents. They handled everything and even booked my appointment.",
                                                            },
                                                                  {
                                                                name: "Priyanka M",
                                                                initial: "P.",
                                                                review:
                                                                    "They’re professional, patient, and made the entire process stress-free.",
                                                            },
                                                            {
                                                                name: "Vishal K.",
                                                                initial: "V.",
                                                                review:
                                                                    "Make My Documents made passport renewal so easy. Thanks to their clear instructions.",
                                                            },
                                                               {
                                                                name: "Neha R.",
                                                                initial: "N.",
                                                                review:
                                                                    "Great experience. No pushy sales, just honest and helpful service.",
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
                                    <strong> Passport Agent in Pune
                                    </strong>
                                </h2>
                                <p style={{ textAlign: 'left' }}>

                                    At Make My Document, we specialize in providing expert assistance for all types of passport applications in Pune. Whether you are applying for your first passport, renewing an existing one, or updating your details, our skilled passport agents are committed to ensuring a smooth and efficient experience.
                                    We handle the entire process, guiding you through each step with professionalism, from document submission to final passport delivery. Our goal is to eliminate the confusion often associated with the passport application process, making it as simple and hassle-free as possible for our clients.
                                </p>
                                <br />

                                <h3 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong>  Types of Indian Passports            </strong>
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    In India, different types of passports are issued based on purpose and applicant type:
                                </p>
                                <br />
                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>Ordinary Passport (Blue Passport)
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    This is the most commonly issued passport and is used for general travel such as <span style={{ fontWeight: 'bold' }}>vacations, studies, or business visits abroad.</span> <br />
                                    {/* ● <span style={{ fontWeight: 'bold' }}>Validity: </span>10 years for adults (18+), 5 years for minors (below 18) <br />
                                    ● <span style={{ fontWeight: 'bold' }}>Who can apply:</span> Any eligible Indian citizen */}
                                </p>
                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}> Diplomatic Passport (Maroon)
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    Given to Indian diplomats, ambassadors, and top government officials for international diplomatic duties.
                                </p>

                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}> Official Passport (White)
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    Issued to individuals representing the Indian government on official, non-diplomatic assignments.
                                </p>
                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>Emergency Certificate / Short Validity Passport
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    Used in urgent cases like passport loss or when someone needs to return to India immediately from abroad.
                                </p>
                                {/* <h2 style={{ fontSize: '16px', fontWeight: 'bold' }}>Passport Types Based on Processing Mode
                                </h2>
                                <p style={{ textAlign: 'left' }}>
                                    In addition to the cover color, Indian passports can be applied through two different processing <br
                                    />
                                    <span style={{ fontWeight: 'bold' }}>categories: </span><br />
                                    ●  <span style={{ fontWeight: 'bold' }}>Normal Passport:</span>Standard processing time; usually delivered in 25–30 working days <br />
                                    ●  <span style={{ fontWeight: 'bold' }}>Tatkal Passport:</span> For urgent needs; processed faster (within 1–3 working days, subject to verification).

                                </p> */}

                                <h2 style={{ fontSize: '16px', fontWeight: 'bold' }}>Eligibility for Passport Application</h2>

                                <p style={{ textAlign: 'left' }}>
                                    To apply for an Indian passport, applicants must meet certain eligibility criteria. Here’s what you need to know before starting your application:
                                </p>


                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>Indian Citizenship:
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    You must be a citizen of India by birth, descent, registration, or naturalization.
                                </p>
                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>Valid Identity & Address Proof:
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    You should have official documents proving your identity and current residential address. These include Aadhaar card, voter ID, utility bills, rental agreement, or bank statements.
                                </p>
                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>Clear Legal Record:
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    Applicants should not have any pending criminal cases, court summons, or legal restrictions related to passport issuance. A police verification will be part of the process in most cases.
                                </p>

                                <h2 style={{ fontSize: '16px', fontWeight: 'bold' }}>Age-Based Criteria:
                                </h2>
                                <p style={{ textAlign: 'left' }}>
                                    <span style={{ fontWeight: 'bold' }}>categories: </span><br />
                                    ●  <span style={{ fontWeight: 'bold' }}>Adults (18 years and above): </span>Must submit standard ID, address, and DOB proofs. <br />
                                    ●  <span style={{ fontWeight: 'bold' }}>Minors (below 18 years):</span> Require consent documents from parents or guardians along with age proof.

                                </p>

                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>Document Readiness:
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    You should be able to submit the necessary documents as per your application type (Fresh, Reissue, Tatkal, Minor).
                                </p>

                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>Special Cases:
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    For urgent applications under Tatkal, or if there’s a name change or address update, additional documents and declarations may be required.
                                </p>

                                <h2 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong> Who Can Apply for a Passport in Pune?
                                    </strong>
                                </h2>
                                <p style={{ textAlign: 'left' }}>
                                    If you are staying in Pune, you can apply for a passport if you fall under the following:
                                    ●  <span style={{ fontWeight: 'bold' }}>Permanent Residents:</span> Individuals with residential address proof such as electricity bills, Aadhaar, or rental agreements. <br />
                                    ●  <span style={{ fontWeight: 'bold' }}> Working Professionals:</span> Employees working in Pune with company-issued address proof or HR letters. <br />
                                    ●  <span style={{ fontWeight: 'bold' }}>Students:</span> Students residing in hostels or PGs with college bonafide certificates and guardian details. <br />
                                    ●  <span style={{ fontWeight: 'bold' }}>Relocated Individuals:</span> People recently moved to Pune and are holding temporary address documents (rent deed, bank statement, etc.). <br />

                                </p>

                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>Modes of Indian Passports
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    Depending on your situation, you can apply for:</p>

                                ●  <span style={{ fontWeight: 'bold' }}>Fresh Passport: </span><br />
                                For first-time applicants who do not currently hold any passport.
                                <br />
                                ●  <span style={{ fontWeight: 'bold' }}>Re-issue of Passport:</span><br />
                                For renewal, lost/damaged passports, or change in name, address, or appearance.
                                ●  <span style={{ fontWeight: 'bold' }}>Tatkal Passport: </span><br />
                                Fast-track passport issued under urgent circumstances. Requires extra documents like verification certificates.
                                <br />
                                ●  <span style={{ fontWeight: 'bold' }}> Minor Passport:</span><br />
                                For children under 18 years of age. Parent or guardian documents are required alongside the minor’s details.

                                <br />
                                <h2 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong> Why Choose Make My Documents for Passport Service?
                                    </strong>

                                </h2>
                                <p style={{ textAlign: 'left' }}>
                                    At Make My Documents, we provide dependable, step-by-step support to make your passport process easy and efficient. Our services include:
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    ●  <span style={{ fontWeight: 'bold' }}>Document Preparation:</span><br />
                                    We give you a checklist of documents, help you collect them, and ensure they’re complete and valid.
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    ●  <span style={{ fontWeight: 'bold' }}>Form Submission:</span><br />
                                    We accurately fill your online application to avoid delays or rejection due to errors.
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    ●  <span style={{ fontWeight: 'bold' }}>Appointment Booking:</span><br />
                                    We help you schedule your PSK or POPSK appointment in Pune at your preferred date and time.
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    ●  <span style={{ fontWeight: 'bold' }}>Tatkal Passport Support:</span><br />
                                    We guide you through the additional requirements for fast-track applications.
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    ●  <span style={{ fontWeight: 'bold' }}>Post-submission Support</span><br />
                                    From police verification updates to passport delivery tracking, we stay in touch throughout the process.
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

export default PassportAgentinPune;