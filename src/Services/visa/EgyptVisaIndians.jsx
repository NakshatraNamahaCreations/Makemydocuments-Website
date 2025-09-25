import React, { useState, useEffect, useRef } from "react";
import bannerimage from "../../images/Egypt_image_banner.jpg";
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

const EgyptVisaIndians = () => {
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
        navigate("/egypt-visa-form");
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
            question: "Do Indian citizens need a visa to travel to Egypt?",
            answer:
                "Yes, Indian passport holders require a visa to enter Egypt. We assist with Egypt tourist visa applications for Indian citizens.",
        },
        {
            question: "What types of Egypt visas do you help with?",
            answer:
                "We assist with Egypt tourist visas. Based on your purpose, we guide you with the right documentation.",
        },
        {
            question: "What documents are needed for an Egypt tourist visa?",
            answer: "Common requirements include a passport, recent photograph, confirmed flight tickets, hotel booking, financial proofs, and a cover letter. We provide a full checklist.",
        },
        {
            question: "Is the Egypt visa application process online or offline?",
            answer: "Egypt visa applications for Indian citizens are usually submitted offline via the embassy. We assist with document preparation and appointment booking if needed.",
        },
        {
            question: "How long does it take to get an Egypt visa from India?",
            answer:
                "Standard Egypt visa processing may take 5–10 working days after submission, depending on embassy workload and document verification.",
        },
        {
            question: "Do I need to visit the Egypt embassy myself?",
            answer: "In most cases, you don’t have to visit personally. We handle the application submission and collection process for you, wherever possible.",
        },
        {
            question: "Is travel insurance required for Egypt visa?",
            answer:
                "While not always mandatory, having travel insurance is highly recommended. We guide you on what's necessary for smooth visa approval.",
        },
        {
            question: "Can you help with Egypt visa for family or group travel?",
            answer:
                "Yes, we specialize in group visa processing for families and tour groups. We help ensure all applications are submitted together with proper coordination.",
        },
        {
            question: "Do you provide cover letter drafting for Egypt visas?",
            answer:
                "Yes, we draft customized cover letters that explain your purpose of visit, travel plan, and financial backing to support your visa application.",
        },
        {
            question: "What happens if my Egypt visa is rejected?",
            answer:
                "If your visa is denied, we help identify the reason, revise the documents, and guide you through the reapplication process to improve your chances.",
        },
    ];


    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <Helmet>
                {/* Meta Title */}
                <title>Egypt Visa for Indians – Apply Online with Expert Help</title>
                {/* Meta Description */}
                <meta
                    name="description"
                    content="Apply for an Egypt tourist visa from India online. Quick approvals, expert guidance, low fees. Get your Egypt Visa hassle-free today."
                />

                {/* Canonical URL */}
                <link rel="canonical" href="https://www.makemydocuments.com/egypt-visa" />

                {/* Meta Keywords */}
                <meta
                    name="keywords"
                    content="Egypt visa for Indians, Egypt visa agents in India, Apply Egypt visa online from India, Egypt Visa application India, Tourist visa for Egypt from India, Egypt consulate visa processing for Indians, Visa requirements for Indian travelers to Egypt, Egypt visa helpdesk India"
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
                            Egypt Visa for Indians
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
                                        Egypt Visa for Indians
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
                                                  
                                                    fontWeight: "600",
                                                     color:"#fff"
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
                                                07 - 10 working days

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
                                                 ₹4,798/-
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
                                    height:"200px"
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
                                         height:"200px"
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
                                        Egypt Visa for Indians

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
                                            <p style={{ margin: 0, fontSize: "10px", }}>07 - 10 working days </p>

                                        </div>
                                        <div>
                                            <p style={{ margin: 0, fontWeight: "bold", fontSize: "10px", }}>Starting from</p>
                                            <p style={{ margin: 0, color: "#ffc107", fontWeight: "bold", fontSize: "10px", }}>
                                                 ₹4,798/-
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
                                            Documents Required For Egypet Visa
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
                                                Documents Required For Egypet Visa
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
                                       <div className="d-flex align-items-center w-100 flex-wrap mt-5 gap-3  d-none d-lg-block" style={{ marginLeft: '2%' }}>

                                        {/* Content Section */}
                                        <div style={{ marginTop: '' }}>
                                            <h5 style={{ color: "#007BFF", fontWeight: "bold" }}>Charges</h5>
                                            <ul style={{ listStyleType: "disc", paddingLeft: "20px", }}>
                                                <li><strong style={{ color: '#ff9800' }}>Rs. 4,798/-</strong> For 30 days Single Entry E-Visa
                                                </li>
                                                <li><strong style={{ color: '#ff9800' }}>Rs. 6,580/-</strong> For 30 days Multiple Entry E-Visa
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
                                                    <li><strong style={{ color: "#ff9800" }}>Rs. 4,798/-</strong> For 30 days Single Entry E-Visa
                                                        {" "}

                                                    </li>

                                                    <li><strong style={{ color: "#ff9800" }}>Rs. 6,580/-</strong> For 30 days Multiple Entry E-Visa
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
                                                                >
                                                                    "Seamless Egypt visa experience.
                                                                    I was traveling to Cairo for a short vacation and didn’t know where to begin. Make My Documents handled my tourist visa process with complete clarity and no delays."
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
                                                                        Meera Iyer

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
                                                                    "Great support from start to finish.
                                                                    Their team guided me through every step—documents, payment, submission—and kept me updated until my visa was approved. Very responsive and professional."
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
                                                                        Suresh Nair

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
                                                                    "Trusted them for my first trip to Egypt.
                                                                    As a solo traveler, I wanted to be sure everything was in order. Their checklist was spot-on, and they even helped with formatting my documents correctly."
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
                                                                        Kavya Reddy

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
                                                                    "Prompt service and clear instructions.
                                                                    I contacted them through WhatsApp, and within an hour, I had a clear list of documents and a timeline. It felt very personalized and efficient."
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
                                                                        Arjun Verma

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
                                                                    "Helped with visa for our group tour.
                                                                    We were a group of five heading to Egypt, and Make My Documents took care of all our applications together. It was stress-free and on time."
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
                                                                        Tanya Sharma

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
                                                                    "Smooth and stress-free experience.
                                                                    I was a bit nervous about applying for an Egypt visa online, but their team made it incredibly simple. The process was well explained, and they were quick to respond to all my queries. I got my visa approval in just a few days!"
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
                                                                        Ritika Sharma D

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
                                                                name: "Meera Iyer",
                                                                initial: "N",
                                                                review:
                                                                    "Seamless Egypt visa experience. I was traveling to Cairo for a short vacation and didn’t know where to begin. Make My Documents handled my tourist visa process with complete clarity and no delays.",
                                                            },
                                                            {
                                                                name: "Suresh Nair",
                                                                initial: "R",
                                                                review:
                                                                    "Trusted them for my first trip to Egypt. As a solo traveler, I wanted to be sure everything was in order. Their checklist was spot-on, and they even helped with formatting my documents correctly.",
                                                            },
                                                            {
                                                                name: "Kavya Reddy",
                                                                initial: "L",
                                                                review:
                                                                    "I applied from Chennai and didn’t have to travel anywhere. Their remote support is excellent. I shared my documents via WhatsApp and got my visa processed within a few days. Really convenient.",
                                                            },
                                                            {
                                                                name: "Arjun Verma",
                                                                initial: "R",
                                                                review:
                                                                    "Prompt service and clear instructions. I contacted them through WhatsApp, and within an hour, I had a clear list of documents and a timeline. It felt very personalized and efficient.",
                                                            },
                                                            {
                                                                name: "Tanya Sharma",
                                                                initial: "M",
                                                                review:
                                                                    "Helped with visa for our group tour. We were a group of five heading to Egypt, and Make My Documents took care of all our applications together. It was stress-free and on time.",
                                                            },
                                                            {
                                                                name: "Ritika Sharma D",
                                                                initial: "D",
                                                                review:
                                                                    "Smooth and stress-free experience. I was a bit nervous about applying for an Egypt visa online, but their team made it incredibly simple. The process was well explained, and they were quick to respond to all my queries. I got my visa approval in just a few days!",
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
                                    <strong>Egypt Visa for Indians

                                    </strong>
                                </h2>
                                <p style={{ textAlign: 'left' }}>
                                    Are you planning a trip to Egypt from India, It does not matter if it is for fun, work, or with family, having the right visa is important. This guide shows you how to get an Egypt visa with an Indian passport. It talks about the different visas you can get, who can apply, and how Make My Documents can help you do it quicker and simpler.
                                </p>
                                <br />

                                <h2 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong> How to Apply for an Egypt Tourist Visa from India  </strong>
                                </h2>

                                <p style={{ textAlign: 'left' }}>
                                    Thinking about going to Egypt from India? If you want to see the pyramids, go on a Nile trip, or be at a work meet, knowing how to get a visa is key. People with an Indian passport have two main ways to get a tourist visa. With help from Make My Documents, this task is easy, quick, and without worries.
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    Thinking about going to Egypt from India? If you want to see the pyramids, go on a Nile trip, or be at a work meet, knowing how to get a visa is key. People with an Indian passport have two main ways to get a tourist visa. With help from Make My Documents, this task is easy, quick, and without worries.
                                </p>


                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>Egypt Visa Application (Recommended for Most Tourists)
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    Ideal for short stays up to 30 days, the Visa can be applied for entirely online.
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    &#8226; Suitable for single or multiple entries
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    &#8226; Requires basic documentation (passport scan, photo, itinerary)
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    &#8226; Typically approved within 3–5 working days
                                </p>

                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>How We Simplify the Egypt Visa Process
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    Make My Documents offers expert help at every step so you don’t miss out on important details.

                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    &#8226; 100% remote process: No need to visit our office or the embassy
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    &#8226; Document checks to reduce rejections or delays
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    &#8226; Status updates via WhatsApp and email
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    &#8226; Optional add-ons: flight and hotel bookings for visa purpose
                                </p>
                                <br />
                                <h2 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong> Types of Egypt Visas for Indian Passport Holders </strong>
                                </h2>

                                <p style={{ textAlign: 'left' }}>
                                    Egypt gives out different visa types for reasons such as trips, work, or short visits. Finding the right visa is key for a smooth stay. Below are the main visas available for Indian travelers:
                                </p>

                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}> Tourist Visa (One Time/Many Times)
                                </h3>


                                <p style={{ textAlign: 'left' }}>
                                    &#8226; Good for trips, fun rides, or meeting family and pals in Egypt.
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    &#8226; A one-time visa lets you in once for 30 days max.
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    &#8226; A visa for many visits works if you want to go a few times in 180 days.
                                </p>
                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>Business Visa
                                </h3>


                                <p style={{ textAlign: 'left' }}>
                                    &#8226; Made for pros going to meetings, shows, or to see clients.
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    &#8226; You need an invite from a group or firm in Egypt.
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    &#8226; You can stay for a short time, usually up to 30 days, with a chance to stay longer.
                                </p>
                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>Transit Visa
                                </h3>


                                <p style={{ textAlign: 'left' }}>
                                    &#8226; You'll need this only if you want to leave the airport during a stop in Egypt.
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    &#8226; Not needed if your stop is less than 24 hours and you stay in the transit area.
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    &#8226; It's handy for long waits if you wish to see Cairo for a bit.
                                </p>
                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>Student or Work Visas
                                </h3>


                                <p style={{ textAlign: 'left' }}>
                                    &#8226; Given to those going to learn or work in Egypt.
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    &#8226; You must apply in person at the Egyptian consulate in India.
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    &#8226; You must have papers like an offer or admission letter, a sponsor, and health okay.
                                </p>

                                <br />
                                <h2 className="faq-tag-title-h3">
                                    <strong>Egypt Visa Requirements for Indian Citizens

                                    </strong>
                                </h2>
                                <p style={{ textAlign: 'left' }}>
                                    Egypt Visa Rules for Indian People before you fill out your Egypt visa form, you must know all the needed steps and paper rules. These rules help the office know why you want to visit and check if you have enough money for your time in Egypt.
                                </p>
                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>Have a Good Indian Passport
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    Your Indian passport should be good for at least 6 months after you plan to get to Egypt. Also, make sure it has at least two empty pages for the visa stamp. A torn or almost out-of-date passport might slow things down or lead to a visa no-go, so look it over early.
                                </p>
                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>Book Return Flights & Places to Stay
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    You need to show both ways flight tickets and place booking proofs when you ask for a visa. These papers prove that you have a set plan, know where you will stay, and plan to go back after your trip. You don't always have to pay for these bookings, but they must be real.
                                </p>
                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>Show Enough Money
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    To show you can pay for the trip, you might need to give bank papers from the last 3 to 6 months, showing good money in it. Having from ₹40,000 to ₹60,000 is usually seen as enough. This money proof helps show you can pay for living, moving, eating, and more by yourself.
                                </p>
                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>Say Why You Are Visiting
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    You need to tell why you are going to Egypt—maybe for fun, work, family, or just passing through. A short note or note with details like when, where, and what you plan to do helps the office look at and say yes to your ask quicker and with less ask.
                                </p>
                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>Documents Required for Egypt Visa – Indian Applicants
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    When you want an Egypt Visa online, Indian people must put up clear, easy to read digital copies of key papers. All files must be in PDF or JPG type. If you send wrong or not full papers, it could slow down your ask or cause a no.

                                </p>
                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>Scanned Copy of Passport
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    You need to put up a top scan of the first and last page of your passport. The passport must be good for six months from when you plan to get to Egypt. Check all info like your name, passport number, and picture are clear and full.
                                </p>
                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}> Recent Passport-Size Photo
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    Put up a new (taken in the last 6 months) passport-size picture with a white back. The size must be 35mm x 45mm. It should be a right photo—no selfies, fuzzy pics, or cut-outs from group photos are okay.
                                </p>
                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>Set Flight Plan
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    Put up a copy of your two-way flight ticket. This must show when you leave India and when you come back. A set plan shows why and how long you will be on your trip and shows you plan to come back.
                                </p>
                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>Hotel Stay or Invite Letter
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    You must show where you will stay in Egypt. This can be a set hotel stay or, if with kin or friends, an invite letter from them with a copy of their Egyptian ID or where they live. It should say how you know them and how long you will stay.
                                </p>
                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>Last 3 Months’ Bank Note
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    Add a bank note (PDF type) that shows good money moves and enough cash from the last 3 months. This tells the Egyptian folks that you can pay for your time there, like for travel, food, stay, and if things go wrong.
                                </p>
                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>Travel Plan or Cover Note
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    Write a short cover note that tells your travel dates, the towns or spots you will see, and why you are going (for fun, work, or just passing by). This makes your ask clear and helps the visa folks see why you are traveling.
                                </p>

                                <br />
                                <h2 className="faq-tag-title-h3">
                                    <strong>Egypt Visa Fees and Processing Time for Indians

                                    </strong>
                                </h2>
                                <p style={{ textAlign: 'left' }}>
                                    If you want to go to Egypt from India, knowing about visa costs and wait times is key. The price and how long it takes to get a visa can change based on the kind of visa and if you apply online or at a consulate. Here's a simple list to help you get ready:
                                </p>
                                <table className="table table-bordered table-hover">
                                    <thead className="table-light">
                                        <tr>
                                            <th>Visa Type</th>
                                            <th>Fee (INR Approx.)</th>
                                            <th>Processing Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>e-Visa (Tourist)</td>
                                            <td>₹4,798 – ₹6,580</td>
                                            <td>7–10 working days</td>
                                        </tr>
                                        {/* Add more rows here if needed */}
                                    </tbody>
                                </table>

                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>
                                    Kinds of Visas and Their Cost
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    Single Use Visa: Good for one visit to Egypt; cheap and best for brief stays.
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    Many Times Use Visa: Lets you go in more than once while the visa is good, but costs more since it lets you do more.
                                </p>
                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>
                                    What Makes Getting the Visa Take Time?
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    Visa: Usually quick because it's all done online. But, make sure every paper is right and clear, or it might take longer.
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    Sticker Visa: Needs more time since you must give papers in person at the consulate and they check by hand.
                                </p>
                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>Other Fees Might Add Up
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    Service Costs: If you ask help from a travel group or a place like Make My Documents, they might charge a bit for help with forms, putting up documents, or checking on them.
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    Fast Process (if you can): You might be able to ask for a quicker service for more money (up to the embassy to decide).
                                </p>
                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>What Does the Visa Fee Cover?
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    Charges for processing by the government or embassy
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    Handling and checking your form
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    Setting up your Visa or putting the stamp from the consulate (depends on the kind)
                                </p>
                                <br />
                                <h2 className="faq-tag-title-h3">
                                    <strong>Eligibility Criteria for Egypt Visa from India

                                    </strong>
                                </h2>
                                <p style={{ textAlign: 'left' }}>
                                    People from India who want to go to Egypt for fun, work, or short trips need to meet certain rules. Here's a clear list of what you need to be able to ask for an Visa or sticker visa:
                                </p>
                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>
                                    Valid Indian Passport
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    Your passport needs to be good for at least 6 months from when you get into Egypt.
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    It should have at least 2 blank pages for visa stamps.
                                </p>
                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>
                                    Proof of Return Travel
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    You must have a booked return flight ticket.
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    This shows you plan to go back to India after your stay and is very important.
                                </p>
                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>
                                    Enough Money
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    You need to show recent bank statements from the last 3 months.
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    This proves you can pay for your stay, food, and travel in Egypt.
                                </p>
                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>Clear Reason for Visit
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    Whether you're going for fun, work, or to see family, you need to clearly say why:
                                    A cover note or travel plan

                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    An invite if visiting friends or family or going to a work meeting
                                </p>

                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>
                                    Good Travel Record
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    You should not be on any blacklist or have been turned down for an Egypt visa for no good reason.
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    People with bad visa histories may be looked at more.
                                </p>
                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>
                                    Age and Travel Rules
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    Young ones flying alone or with one parent might need to give a NOC (No Objection Certificate) from their guardians.
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    Groups need to make sure each person meets the visa rules on their own.
                                </p>
                                <br />
                                <h2 className="faq-tag-title-h3">
                                    <strong>Why Choose Us for Your Egypt Visa Application?

                                    </strong>
                                </h2>
                                <p style={{ textAlign: 'left' }}>
                                    Getting a visa for another country can be hard—but with us, it's easy, safe, and all done from home. Here’s why many people from India choose us for their Egypt visa needs:
                                </p>
                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>
                                    Visa Help Made Just for You
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    Our team looks at your papers and picks the best Egypt visa for your trip needs. This cuts down the risk of being turned down and saves you time and money by not having to deal with wrong forms. You get help that is built for your own case, not just broad tips.
                                </p>

                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>
                                    All Done Online
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    No need to go to the embassy or wait in lines. You can do all your Egypt visa work online from any place in India. Send your papers via email, WhatsApp, or our safe site. It’s secure, fast, and simple—making your whole process worry-free and easy for you.
                                </p>
                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>
                                    Quick Okays, Less No's
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    We pay close attention to details and follow Egypt visa rules closely. Our team looks at every bit to dodge usual slips that lead to no's. As a result, our clients get their visas faster, face fewer bumps, and know their forms are handled well.
                                </p>
                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>
                                    Help & Updates Anytime
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    From start to finish, we keep you in the know. We keep you updated often and you can reach us anytime through WhatsApp or a phone call. Got questions or need quick help? Our team responds fast to make sure your visa journey goes smoothly.
                                </p>
                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>
                                    Clear and Fair Costs
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    We stand for total clearness—no surprises in fees or hidden charges. You see all costs up front. What you pay is the full price, no extra charges later. It's straight, clear pricing so you can set your travel money with no worry.
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

export default EgyptVisaIndians;