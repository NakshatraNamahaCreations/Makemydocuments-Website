import React, { useState, useEffect, useRef } from "react";
import bannerimage from "../../images/Indonesia_image_banner.jpg";
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
     { name: "Tourist Visa", path: "/tourist-visa" },
    { name: "Police Verification", path: "/policeverification" },
    { name: "Police Clearance Certificate", path: "/police-clearance-certificate" },
    { name: "Pan Card", path: "/pan-card" },
    { name: "Affidavits / Annexure", path: "/affidavits" },
];

const IndonesiaVisaIndians = () => {
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
            question: "Do Indian citizens require a visa to travel to Indonesia?",
            answer:
                "Yes, Indian passport holders need a visa to visit Indonesia for tourism, or other purposes. We assist with visa application and document preparation.",
        },
        {
            question: "What types of Indonesia visas do you assist with?",
            answer:
                "We help with tourist visas, social-cultural visas, and multiple-entry visas based on your travel requirements.",
        },
        {
            question: "Is Indonesia visa available as an Visa?",
            answer: "Currently, Indonesia offers visa-on-arrival for Indian travelers, but we assist with pre-arranged visa applications and ensure smooth processing.",
        },
        {
            question: "What documents are needed for an Indonesia visa?",
            answer: "Typically, a valid passport, recent photographs, confirmed travel itinerary, hotel bookings, and financial proofs are required. We provide a detailed checklist.",
        },
        {
            question: "How long does Indonesia visa processing take?",
            answer:
                "Processing times vary but usually range from 5 to 10 working days. We help ensure your application is complete to avoid unnecessary delays.",
        },
        {
            question: "Do I need to visit the embassy in person?",
            answer: "Depending on the visa type, an in-person visit might be required. We guide you through the process and assist with appointment booking if needed.",
        },
        {
            question: "Is visa assistance available across India?",
            answer:
                "Yes, our services cover clients from all cities in India. You can submit documents online and communicate remotely throughout the process.",
        },
        {
            question: "Are there any special requirements for multiple-entry visas?",
            answer:
                "Multiple-entry visas require additional documentation like business proofs or previous travel history. We guide you in gathering the necessary papers.",
        },
        {
            question: "What if my Indonesia visa application is rejected?",
            answer:
                "In case of rejection, we analyze the cause and help you with reapplication strategies or alternate visa options to improve success chances.",
        },
        {
            question: "Can I get a visa on arrival in Indonesia as an Indian citizen?",
            answer:
                "Yes, Indian citizens are eligible for Visa on Arrival (VOA) in Indonesia for tourism purposes. However, it's always safer to check the latest regulations before travel.",
        },
    ];


    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <Helmet>
                {/* Meta Title */}
                <title>Indonesia Visa for Indians – Tourist, VOA & e‑Visa Guide</title>
                <meta
                    name="description"
                    content="Apply for an Indonesia visa for India with ease. Know the tourist visa process, documents, fees, visa on arrival, and photo guidelines."
                />
                <link
                    rel="canonical"
                    href="https://www.makemydocuments.com/indonesia-visa"
                />
                <meta
                    name="keywords"
                    content="Indonesia Visa for Indians, Indonesia Tourist Visa for Indians, Indonesia Visa Requirements for Indian Citizens, Indonesia Visa on Arrival for Indians"
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
                    marginTop: "11%",
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
                        {/* <li
                            className="breadcrumb-item active"
                            aria-current="page"
                            style={{ fontWeight: "bold", fontSize: '14px' }}
                        >
                           Visa Services 
                        </li> */}
                        <li
                            className="breadcrumb-item active"
                            aria-current="page"
                            style={{ fontWeight: "bold", fontSize: '14px' }}
                        >
                            Indonesia Visa for Indians
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
                                        Hong Kong Visa for Indians
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
                                            maxWidth: "500px",

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
                                                02 - 03 working days

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
                                                Indonesia 30 Days Single Entry E-Visa ₹5,109/-
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
                                    marginTop: '36%',
                                    height: "200px"
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
                                        height: "200px"
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
                                        Indonesia Visa for Indians

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
                                            <p style={{ margin: 0, fontSize: "10px", }}>05 - 07 working days</p>

                                        </div>
                                        <div>
                                            <p style={{ margin: 0, fontWeight: "bold", fontSize: "10px", }}>Starting from</p>
                                            <p style={{ margin: 0, color: "#ffc107", fontWeight: "bold", fontSize: "10px", }}>
                                                Indonesia 30 Days Single Entry E-Visa ₹5,109/-
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* forr less tahn 425px*/}


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
                                                <li><strong style={{ color: '#ff9800' }}>Rs. 5,109/-</strong> For Indonesia 30 Days Single Entry E-Visa
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
                                                    <li><strong style={{ color: "#ff9800" }}>Rs. 5,109/-</strong> For Indonesia 30 Days Single Entry E-Visa
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
                                            Documents Required For Indonesia Visa
                                        </h2>


                                        <h4 style={{ fontSize: '16px' }} className="mt-3">Clear scanned copy of passport front and back copy in colour scanner</h4>


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
                                                Documents Required For Indonesia Visa
                                            </h5>

                                            <h4 style={{ fontSize: '14px', marginBottom: "5px" }} className="mt-3">Clear scanned copy of passport front and back copy in colour scanner</h4>
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
                                                    {/* <p
                                                        style={{
                                                            fontSize: "14px",
                                                            color: "#555",
                                                            margin: 0,
                                                        }}
                                                    >
                                                        Fill all the basic details in the application on our secure portal.

                                                    </p> */}
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
                                                    {/* <p
                                                        style={{
                                                            fontSize: "14px",
                                                            color: "#555",
                                                            margin: 0,
                                                        }}
                                                    >
                                                        Submit the required documents via WhatsApp or email.

                                                    </p> */}
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
                                                        Step 5: Receive your E-Visa via E-mail
                                                    </h3>
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
                                                                >
                                                                    "Smooth and hassle-free Indonesia visa process. I applied for a tourist visa to Indonesia, and Make My Documents handled everything from document review to submission. The process was very straightforward."
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
                                                                        Pranav Dixit

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
                                                                    "Quick responses and expert guidance. Their team helped me understand all the requirements and booked my appointment for biometrics. They were patient and clear with instructions throughout."
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
                                                                        Swati Kulkarni

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
                                                                    "Highly recommend for first-time travelers. As a first-time applicant, I appreciated their step-by-step help. They checked my documents carefully and made sure nothing was missed before filing."
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
                                                                        L
                                                                    </div>
                                                                    <span
                                                                        style={{
                                                                            fontWeight: "bold",
                                                                            fontSize: "14px",
                                                                            color: "#374151",
                                                                        }}
                                                                    >
                                                                        Ajay Nair

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
                                                                    "Affordable and trustworthy service. I was worried about hidden charges but their pricing was transparent. They kept me updated at every stage until my visa was approved."
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
                                                                        Snehal Patil

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
                                                                    "Seamless experience from start to finish. The team patiently guided me through the entire process and answered all my questions. Got my visa on time without any stress."
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
                                                                        Manisha Verma

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
                                                                    "Super helpful for last-minute plans. I had to travel on short notice and they managed to process everything quickly. Really impressed by their speed and professionalism."
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
                                                                        Rakesh Iyer

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
                                                                name: "Pranav Dixit",
                                                                initial: "D",
                                                                review:
                                                                    "Smooth and hassle-free Indonesia visa process. I applied for a tourist visa to Indonesia, and Make My Documents handled everything from document review to submission. The process was very straightforward.",
                                                            },
                                                            {
                                                                name: "Swati Kulkarni",
                                                                initial: "M",
                                                                review:
                                                                    "Quick responses and expert guidance. Their team helped me understand all the requirements and booked my appointment for biometrics. They were patient and clear with instructions throughout.",
                                                            },
                                                            {
                                                                name: "Ajay Nair",
                                                                initial: "L",
                                                                review:
                                                                    "Highly recommend for first-time travelers. As a first-time applicant, I appreciated their step-by-step help. They checked my documents carefully and made sure nothing was missed before filing.",
                                                            },
                                                            {
                                                                name: "Snehal Patil",
                                                                initial: "K",
                                                                review:
                                                                    "Affordable and trustworthy service. I was worried about hidden charges but their pricing was transparent. They kept me updated at every stage until my visa was approved.",
                                                            },
                                                            {
                                                                name: "Manisha Verma",
                                                                initial: "S",
                                                                review:
                                                                    "Seamless experience from start to finish. The team patiently guided me through the entire process and answered all my questions. Got my visa on time without any stress.",
                                                            },
                                                            {
                                                                name: "Rakesh Iyer",
                                                                initial: "M",
                                                                review:
                                                                    "Super helpful for last-minute plans. I had to travel on short notice and they managed to process everything quickly. Really impressed by their speed and professionalism.",
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
                                    <strong>Indonesia Visa for Indians

                                    </strong>
                                </h2>
                                <p style={{ textAlign: 'left' }}>
                                    Setting up a trip to Indonesia begins by sorting out the correct visa. Indonesia visa for Indians includes options like Visa on Arrival and Visa. Each has specific rules, processing times, and paperwork. With embassy regulations changing and different ways to submit information, it is important to stay updated and prepared.

                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    MakeMyDocuments provides full help with the Indonesia visa for Indians. From choosing the right type to handling paperwork and tracking the process, our team ensures a smooth, timely experience aligned with your travel needs.

                                </p>
                                <br />

                                <h2 className="faq-tag-title-h3">
                                    <strong> Indonesia Tourist Visa Requirements for Indian Citizens</strong>
                                </h2>

                                <p style={{ textAlign: 'left' }}>
                                    People from India who want to go to Indonesia need a visa. There are two main types and Electronic Visa.. Each type has its own rules, needed papers, and steps to get it. Make sure all your papers are right, and you know the visa rules to travel with no problems.
                                </p>

                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>
                                    Visa for Indonesia from India
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    You can ask for an Visa online before you leave. It's good for those who don't want to wait in line at the airport. You must put up scans of your passport, photos, and your travel plan. When it's okayed, they send the visa right to your email.
                                </p>

                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>
                                    Passport and Travel Paper List
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    You must have a passport that is good for at least 6 months. You also need a ticket to go back, place to stay, your travel plan, and sometimes a new bank note. These help make sure you can go in with no hold-ups.
                                </p>
                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>
                                    Advice from the Embassy
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    Visa rules may change if there are new deals or warnings about travel. It is key to keep up to date by looking at what the Indonesian embassy says or by talking to visa help services like MakeMyDocuments.
                                </p>



                                <br />


                                <h2 className="faq-tag-title-h3">
                                    <strong>Documents Required for Indonesia Tourist Visa </strong>
                                </h2>

                                <p style={{ textAlign: 'left' }}>
                                    To make your visa ask go well, having the right papers set is key. Here are the main needs:
                                </p>

                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>
                                    &#8226; Valid Passport
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    It should be good for at least 6 months from when you plan to go into Indonesia.
                                </p>
                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>
                                    &#8226; Passport-Size Photograph
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    A fresh pic, with a white back, size 3.5cm x 4.5cm, fits normal visa pic rules.
                                </p>
                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>
                                    &#8226; Return Air Ticket
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    A booked back and forth flight to show why and how long you will travel.
                                </p>
                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>
                                    &#8226; Accommodation Details
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    A hotel booking note or a host's ask letter from Indonesia.
                                </p>
                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>
                                    &#8226; Travel Insurance (Suggested)
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    It helps if there are health issues, trip stops, or other unplanned events while you are there.
                                </p>
                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>
                                    &#8226; Visa Application Form
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    When putting in online, make sure to fill out the form right and all the way before you send it in.
                                </p>
                                <br />
                                <h2 className="faq-tag-title-h3">
                                    <strong>Why Choose Make My Documents for Your Indonesia Tourist Visa Assistance </strong>
                                </h2>

                                <p style={{ textAlign: 'left' }}>
When it comes to applying for an Indonesia tourist visa from India, Make My Documents offers unmatched support to simplify the process and reduce errors. Whether you’re traveling for leisure, study, or work, their team helps you avoid delays and ensures your application meets all current requirements. They make the visa experience smooth, fast, and stress-free.
                                </p>
                                <p style={{ textAlign: 'left' }}>
Key Benefits:
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    &#8226; Complete document checklist and guidance
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    &#8226; Photo and form verification by experts
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    &#8226; Faster processing with minimized rejection risk
                                </p>
                                  <p style={{ textAlign: 'left' }}>
                                    &#8226; Dedicated assistance via phone, WhatsApp, or email
                                </p>
                                <br />

                                <h2 className="faq-tag-title-h3">
                                    <strong>Indonesia Tourist Visa Validity for Indian Passport Holders</strong>
                                </h2>

                                <p style={{ textAlign: 'left' }}>
The Visa for Indian travelers are typically valid for 30 days from the date of entry. These visas can usually be extended once for another 30 days, subject to approval by immigration authorities.
                                </p>
                                <p style={{ textAlign: 'left' }}>
Important Notes:
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    &#8226; Extensions must be applied for before the visa expires
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    &#8226; Overstaying your visa can lead to daily fines, potential blacklisting, or even denial of future entry
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    &#8226; Always check entry conditions before travel, especially for remote ports or islands
                                </p>


                            </>
                        </div>

                        <br />
                    </div>
                </div>
            </div>
        </>
    );
};

export default IndonesiaVisaIndians;