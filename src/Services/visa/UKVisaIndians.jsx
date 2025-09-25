import React, { useState, useEffect, useRef } from "react";
import bannerimage from "../../images/United Kingdom_image_banner.jpg";
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

const UKVisaIndians = () => {
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
        navigate("/uk-visa-form");
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
            question: "What types of UK visas do you assist with?",
            answer:
                "We only assist with UK Tourist Visas and Family Visit Visas. We do not assist with Travel visas.",
        },
        {
            question: "Do I need to visit your office for UK visa assistance?",
            answer:
                "No, our entire process can be handled online or via WhatsApp/phone. You can upload documents digitally, and we guide you through every step remotely.",
        },
        {
            question: "How long does the UK visa application process take?",
            answer: "It usually takes 15 working days for standard applications. Priority services can get results within 5-7 days depending on availability.",
        },
        {
            question: "What documents are required for a UK Tourist Visa from India?",
            answer: "Typically, you’ll need a valid passport, financial proofs, travel itinerary, accommodation details, employment letter, and cover letter. We’ll share a personalized checklist.",
        },
        {
            question: "Do you help with appointment booking at VFS Global?",
            answer:
                "Yes, we handle appointment booking at VFS and assist with selecting the nearest location and suitable time slot.",
        },
        {
            question: "Can you help me write a cover letter for the UK visa?",
            answer: "Absolutely. We draft professional and personalized cover letters tailored to your purpose of travel, enhancing your visa approval chances.",
        },
        {
            question: "Do you offer priority or express visa application support?",
            answer:
                "Yes, we assist with both standard and priority UK visa applications, subject to availability from the UK visa center.",
        },
        {
            question: "Is your service available in all Indian cities?",
            answer:
                "Yes, our visa assistance is available PAN-India. Whether you're in a metro or a small town, we support clients nationwide.",
        },
        {
            question: "How much do you charge for UK visa assistance?",
            answer:
                "We do not disclose service charges in advance. Please contact our team for a consultation based on your travel needs.",
        },
        {
            question: "What happens if my UK visa gets rejected?",
            answer:
                "If your visa is refused, we help you understand the rejection reason and guide you with re-application, corrections, or appeal if needed.",
        },
    ];


    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <Helmet>
                <title>UK Tourist Visa from India | Trusted Visa Consultants</title>

                {/* Meta Description */}
                <meta
                    name="description"
                    content="Apply for your UK Tourist Visa from India with expert help. Get full assistance, fast documentation, and real-time updates. 10,000+ visas approved."
                />

                {/* Canonical URL */}
                <link
                    rel="canonical"
                    href="https://www.makemydocuments.com/uk-tourist-visa"
                />

                {/* Focus Keywords as Meta Keywords */}
                <meta
                    name="keywords"
                    content="UK Tourist Visa for Indians, UK Tourist Visa from India, UK Visa consultants, UK Visitor Visa assistance, Apply for UK Tourist Visa, UK travel visa documentation, Tourist visa agents in India, UK Visa processing help, UK Tourist Visa requirements, How to apply for UK Visa"
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



            <div style={{ overflow: "hidden" }}>
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
                            UK Tourist Visa
                        </li>
                    </ol>
                </nav>
            </div>
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
                                        UK Tourist Visa for Indians
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
                                                15-20 working days

                                            </p>

                                        </div>

                                        <div style={{ flex: 1, textAlign: "right" }}>
                                            <p
                                                style={{
                                                    fontSize: "14px",
                                                    marginBottom: "5px",
                                                
                                                    fontWeight: "600",
                                                    color:"#fff"
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
                                                ₹12,499/-
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
                                        UK Tourist Visa for Indians

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
                                            <p style={{ margin: 0, fontWeight: "bold", fontSize: "10px",   }}>Processing time</p>
                                            <p style={{ margin: 0, fontSize: "10px", }}> 15-20 working days </p>

                                        </div>
                                        <div>
                                            <p style={{ margin: 0, fontWeight: "bold", fontSize: "10px", }}>Starting from</p>
                                            <p style={{ margin: 0, color: "#ffc107", fontWeight: "bold", fontSize: "10px", }}>
                                                ₹12,499/-
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
                                            Documents Required For United Kingdom Visa
                                        </h2>

                                        <h4 style={{ fontSize: '16px' }}>Original Passport</h4>

                                        <h4 style={{ fontSize: '16px' }} className="mt-3">Original passport with 06 months validity from the date of travel. + Old Passports if any.</h4>
                                        <h4 style={{ fontSize: '16px' }} className="mt-3">02 Colour photographs with white background, matte finish size 35 mm X 45 mm 80% face size.</h4>

                                        <h4 style={{ fontSize: '16px' }} className="mt-3">Covering letter mentioning your travel details and stay details while in the UK.</h4>

                                        <h4 style={{ fontSize: '16px' }} className="mt-3">Original Bank statement for the last 6 months updated with healthy and sufficient balance.</h4>
                                        <h4 style={{ fontSize: '16px' }} className="mt-3">Income tax / Form 16 for the last 3 years.</h4>
                                        <h4 style={{ fontSize: '16px' }} className="mt-3">Salary Slips for the last 6 months - if employed.</h4>
                                        <h4 style={{ fontSize: '16px' }} className="mt-3">Original Leave letter from employer/ school/college.</h4>
                                        <h4 style={{ fontSize: '16px' }} className="mt-3">Retirement Letter if retired.</h4>
                                        <h4 style={{ fontSize: '16px' }} className="mt-3">School / College ID proof - if student.</h4>
                                        <h4 style={{ fontSize: '16px' }} className="mt-3">Other financial papers (NSC, PPF, Bonds, FD, shares, property papers, etc.)</h4>
                                        <h4 style={{ fontSize: '16px' }} className="mt-3">Minor travelers:</h4>
                                        <h4 style={{ fontSize: '16px' }} className="mt-3"> &#8226; a minor accompanied by one parent shall provide an original notarized NOC by the other parent, plus copies of parents' passports or ID.</h4>
                                        <h4 style={{ fontSize: '16px' }} className="mt-3"> &#8226; a minor traveling alone shall provide an original notarized NOC by both parents/legal guardians, plus copies of parents' passports or ID.</h4>
                                        <h4 style={{ fontSize: '16px' }} className="mt-3">Visiting Card (if your own business)</h4>
                                        <h4 style={{ fontSize: '16px' }} className="mt-3">School ID card copy (if your student)</h4>
                                        <h4 style={{ fontSize: '16px' }} className="mt-3">Last 3 months Bank statement.</h4>
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
                                                Documents Required For Singapore Visa
                                            </h5>
                                            <h4 style={{ fontSize: '14px' }}>Original Passport</h4>

                                            <h4 style={{ fontSize: '16px' }}>Original Passport</h4>

                                            <h4 style={{ fontSize: '14px', marginBottom: "5px" }} >Original passport with 06 months validity from the date of travel. + Old Passports if any.</h4>
                                            <h4 style={{ fontSize: '14px', marginBottom: "5px" }} >02 Colour photographs with white background, matte finish size 35 mm X 45 mm 80% face size.</h4>

                                            <h4 style={{ fontSize: '14px', marginBottom: "5px" }} >Covering letter mentioning your travel details and stay details while in the UK.</h4>

                                            <h4 style={{ fontSize: '14px', marginBottom: "5px" }}>Original Bank statement for the last 6 months updated with healthy and sufficient balance.</h4>
                                            <h4 style={{ fontSize: '14px', marginBottom: "5px" }}>Income tax / Form 16 for the last 3 years.</h4>
                                            <h4 style={{ fontSize: '14px', marginBottom: "5px" }} >Salary Slips for the last 6 months - if employed.</h4>
                                            <h4 style={{ fontSize: '14px', marginBottom: "5px" }} >Original Leave letter from employer/ school/college.</h4>
                                            <h4 style={{ fontSize: '14px', marginBottom: "5px" }} >Retirement Letter if retired.</h4>
                                            <h4 style={{ fontSize: '14px', marginBottom: "5px" }}>School / College ID proof - if student.</h4>
                                            <h4 style={{ fontSize: '14px', marginBottom: "5px" }} >Other financial papers (NSC, PPF, Bonds, FD, shares, property papers, etc.)</h4>
                                            <h4 style={{ fontSize: '14px', marginBottom: "5px" }}>Minor travelers:</h4>
                                            <h4 style={{ fontSize: '14px', marginBottom: "5px" }}> &#8226; a minor accompanied by one parent shall provide an original notarized NOC by the other parent, plus copies of parents' passports or ID.</h4>
                                            <h4 style={{ fontSize: '14px', marginBottom: "5px" }}> &#8226; a minor traveling alone shall provide an original notarized NOC by both parents/legal guardians, plus copies of parents' passports or ID.</h4>
                                            <h4 style={{ fontSize: '14px', marginBottom: "5px" }} >Visiting Card (if your own business)</h4>
                                            <h4 style={{ fontSize: '14px', marginBottom: "5px" }} >School ID card copy (if your student)</h4>
                                            <h4 style={{ fontSize: '14px', marginBottom: "5px" }} >Last 3 months Bank statement.</h4>
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
                                                        Step 2: Door Step Documents Pickup & Verification
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
                                                        Step 3: Payment
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
                                                        Step 4: Get Appointment
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
                                                        Step 5: Visit For Documents Verification
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
                                                        Step 6: Get Delivered
                                                    </h3>
                                                </div>
                                              
                                            </div>


                                        </div>
                                    </div>
                                               {/* Charges Section (Scrollable) */}
                                    <div className="d-flex align-items-center w-100 flex-wrap mt-5 gap-3  d-none d-lg-block" style={{ marginLeft: '2%' }}>

                                        {/* Content Section */}
                                        <div style={{ marginTop: '' }}>
                                            <h5 style={{ color: "#007BFF", fontWeight: "bold" }}>Charges</h5>
                                            <ul style={{ listStyleType: "disc", paddingLeft: "20px", }}>
                                                <li><strong style={{ color: '#ff9800' }}>Rs. 12,499/-</strong> For (Normal Application)
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
                                                    <li><strong style={{ color: "#ff9800" }}>Rs. 12,499/-</strong> For (Normal Application)
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
                                                                    "Perfect for first-time applicants
                                                                    As a first-time UK visa applicant, I was nervous. But their team reviewed my documents, helped with my financials, and booked my VFS appointment too."

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
                                                                        Sanjay Tiwari

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
                                                                    "Affordable and trustworthy
                                                                    Compared to others, their charges were reasonable and they didn’t upsell anything unnecessary. I received regular updates till my passport came back.
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
                                                                        Shraddha Jain

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
                                                                    "Quick, professional, and very transparent. They helped with my multiple-entry uk tourist visa without any issues."
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
                                                                        Ramya M.
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
                                                                    "Absolutely smooth experience! I was completely overwhelmed by the UK visa process, but Make My Documents handled everything—from documentation to application scheduling. Got my visa without any issues. Highly recommended!"
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
                                                                        Ritika Mehra

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
                                                                    "Reliable and professional service
                                                                    They guided me step-by-step for my UK tourist visa. The checklist they provided was clear, and their team patiently answered all my queries."

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
                                                                        Ramesh Chandra

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
                                                                    "Saved me so much time The Make My Documents team was quick, professional, and made sure everything was in order before submission. My visa was approved in 5 days!"
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
                                                                        Neha Suri

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
                                                                name: "Ritika Mehra",
                                                                initial: "L",
                                                                review:
                                                                    "Absolutely smooth experience! I was completely overwhelmed by the UK visa process, but Make My Documents handled everything—from documentation to application scheduling. Got my visa without any issues. Highly recommended!",
                                                            },
                                                            {
                                                                name: "Ramesh Chandra",
                                                                initial: "R",
                                                                review:
                                                                    "Reliable and professional service They guided me step-by-step for my UK tourist visa. The checklist they provided was clear, and their team patiently answered all my queries.",
                                                            },
                                                            {
                                                                name: "Neha Suri",
                                                                initial: "S",
                                                                review:
                                                                    "Saved me so much time The Make My Documents team was quick, professional, and made sure everything was in order before submission. My visa was approved in 5 days!",
                                                            },
                                                            {
                                                                name: "Sanjay Tiwari",
                                                                initial: "R",
                                                                review:
                                                                    "Perfect for first-time applicantsAs a first-time UK visa applicant, I was nervous. But their team reviewed my documents, helped with my financials, and booked my VFS appointment too.",
                                                            },
                                                            {
                                                                name: "Shraddha Jain",
                                                                initial: "R",
                                                                review:
                                                                    "Affordable and trustworthy Compared to others, their charges were reasonable and they didn’t upsell anything unnecessary. I received regular updates till my passport came back.",
                                                            },
                                                            {
                                                                name: "Ramya .M",
                                                                initial: "K",
                                                                review:
                                                                    "Quick, professional, and very transparent. They helped with my multiple-entry uk tourist visa without any issues."
                                                               ,
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
                                    <strong>UK Tourist Visa for Indians
                                    </strong>
                                </h2>
                                <p style={{ textAlign: 'left' }}>
                                    Applying for a UK tourist visa can be hard, more so for those doing it for the first time. At Make My Documents, we help people from India get their UK tourist visa easily. If you're going to London, seeing Scotland, or having fun in the English land, we let you live out your travel wish without stress and keep your visa work easy.
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    Our team gives tips on picking the right type of visa, gets all papers ready without mistakes, and makes sure they are sent in on time. We keep you updated all the way, so you never feel lost. With our help, travelers from India can just plan their tour while we take care of the visa work.

                                </p>
                                <br />

                                <h2 className="faq-tag-title-h3">
                                    <strong> How to Apply for a UK Tourist Visa from India       </strong>
                                </h2>
                                <br />

                                <p style={{ textAlign: 'left' }}>
                                    Asking for a UK tourist visa from India might look hard, but with Make My Documents, it gets easy and calm. Our visa pros help you at each step—from knowing the right visa kind to getting your papers ready and setting up a VFS meet. With up-to-date news and full help, we make sure your form is right, on time, and free from stress.

                                </p>

                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>Visa Type & Check if You Can Get It</h3>

                                <p style={{ textAlign: 'left' }}>
                                    We start with looking at why you want to go to the UK, how long you want to stay, and what you are like. Our team helps you pick the right visa type and checks if you can get it by the UK government's rules. This cuts down the risk of them saying no and saves you both time and worry.

                                </p>


                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}> Gather & Check Papers
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    Our group helps you get all the papers you need for the UK tourist visa, like money proofs, travel plans, and ID proofs. We make sure each paper is right and fits what the UK embassy needs—keeping clear of small mistakes that cause long waits.
                                </p>

                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>Fill Out Forms Online & Set Up a Meet

                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    When your papers are set, we fill out your UK tourist visa form online and put up all needed files safely. We then set up the time to meet at the nearest VFS Global place. We make sure this time fits with when you want to travel and when the embassy can see you.
                                </p>


                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>Watch & Tell You

                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    After we send it in, we keep an eye on your UK tourist visa by the UK government's paths. You'll get news as it goes so you always know what's up. From when they look at it to when you get your passport back, we tell you all until you have your visa.
                                </p>

                                <br />
                                <h2 className="faq-tag-title-h3">
                                    <strong>  UK Visitor Visa Requirements for Indian Citizens
                                    </strong>
                                </h2>
                                <p style={{ textAlign: 'left' }}>
                                    People from India who want to visit the UK need to meet some rules from UK Visas and Immigration (UKVI). At Make My Documents, we help you know and meet these rules—so your form is right, full, and free from holds or denials.

                                </p>
                                <br />

                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>Clear Visit Plan
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    To get a UK visitor visa, your trip must be clear—like seeing places, meeting kin, or going to an event. We help you show the needed papers that make your travel aim clear, making it easy for the office to say yes to your form without doubts.
                                </p>
                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}> Needed Money
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    You must show you have enough money to take care of yourself in the UK. Bank notes or money records are needed to prove you won't need public help. Our team makes sure your money papers match UKVI's needs for an easy visa process.
                                </p>
                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}> Home Links</h3>

                                <p style={{ textAlign: 'left' }}>
                                    UK visa staff need to know you will go back home. Owning a job, land, or having close family in India shows strong links. We help you show these links well to prove your visit is short and that you have strong reasons to return.

                                </p>

                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}> Plan to Return
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    A big need for the UK guest visa is to show that you plan to go back home after your visit. You can do this by showing a return flight ticket or a full travel plan. We help make this proof to make sure the UK visa staff believe your trip is just for a short time.
                                </p>

                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}> Clean Visa Record
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    A good past with visas helps. If you’ve kept to visa rules before and have no crime record, your UK visitor visa odds get better. We check your past visa record and make sure there’s nothing that could cause issues in your form review.

                                </p>


                                <br />


                                <h2 className="faq-tag-title-h3">
                                    <strong>  UK Tourist Visa Fees and Processing Time in India
                                    </strong>
                                </h2>
                                <p style={{ textAlign: 'left' }}>
                                    UK tourist visa processing time may vary depending on service speed. At Make My Documents, we guide you on timelines and steps involved, keeping the process smooth—no hidden steps, no confusion.

                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    &#8226; <strong>Standard 6-Month Tourist Visa:</strong> ₹12000 – ₹24,000 (End price might shift a bit due to current money rates and VFS fees.)


                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    &#8226;    <strong>Priority Visa Service (Optional):</strong> Additional fee for faster processing

                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    &#8226;  <strong>Super Priority Visa Service:</strong> Available in select cities at a higher cost

                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    We also offer complete breakdowns of government fees and our service charges before the application begins.
                                </p>
                                <br />

                                <h3 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong>  Papers for Indian People
                                    </strong>
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    To Get a UK Tourist Visa, Indian folks need to give all needed papers. These show why you visit, your money, health, and your plan to go back. At Make My Documents, we help make every paper just right to meet UKVI rules and stop no's.    </p>


                                <h3 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong>Valid Passport
                                    </strong>
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    Your passport must be good for six months past your trip and have one open page for the visa. This is key for a UK tourist visa, and we make sure it's right before we begin your ask.
                                </p>
                                <h3 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong>New Passport-Sized Photos
                                    </strong>
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    Photos should follow UKVI rules—white behind, new, and your full face seen. Our group makes sure your photo fits the size and look needed to stop slow downs or ask to send again during the UK visa steps.
                                </p>
                                <h3 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong>Sure Return Flight Tickets
                                    </strong>
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    A back flight ticket shows you plan to leave the UK after your visit. This makes visa folks sure your stay is short. We help you add the right travel show in your UK tourist visa ask.
                                </p>
                                <h3 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong>Hotel Book or Call Note
                                    </strong>
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    You need to show where you'll stay in the UK. This can be a hotel book or a call note from a friend or kin there. We show you how to give the right show, made right as per embassy needs.
                                </p>
                                <h3 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong>Last 6 Months Bank Papers
                                    </strong>
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    Bank papers are a must to show you can pay for your travel and stay in the UK. We help you show your money papers right, pointing out enough cash and steady money, which make your visa ask stronger.
                                </p>
                                <h3 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong>Money Proof (Pay Notes / ITR)
                                    </strong>
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    New pay stubs, tax forms, or Form 16s show you have a job and are money sure. These papers show your ties to India, which is key for a UK tourist visa okay. We help set them up right.
                                </p>
                                <h3 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong>Cover Note
                                    </strong>
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    A well-done cover note tells why you're going to the UK, your travel plan, how you'll pay for it, and why you will go back to India. Our team helps you write a short, clear note that adds to your task.
                                </p>
                                <h3 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong>Travel Past (if needed)
                                    </strong>
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    If you've been to other lands before, show visas or stamps can prove you travel safe. It’s not a must but does help. We check if your past travel helps your UK visa ask and guide you on how to add it right.
                                </p>


                                <br />


                                <h2 className="faq-tag-title-h3">
                                    <strong>Step-by-Step UK Tourist Visa Application Process
                                    </strong>
                                </h2>
                                <p style={{ textAlign: 'left' }}>
                                    Getting a UK tourist visa from India is now easy with the right help. At Make My Documents, we help you at each step with care. From picking the right visa type, to uploading files and going for VFS meet-ups, we make sure your form is right, complete, and worry-free.
                                </p>


                                <h3 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong>Visa Type Confirmation
                                    </strong>
                                </h3>


                                <p style={{ textAlign: 'left' }}>
                                    We begin by checking why you are traveling—may it be for fun, family visits, or an event—and pick the best UK tourist visa type. This makes sure your form fits your plan and ups your chance of quick, sure yes from UK Visas and Immigration (UKVI).
                                </p>
                                <h3 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong>Customized Document Checklist
                                    </strong>
                                </h3>


                                <p style={{ textAlign: 'left' }}>
                                    Each person is unique. That's why we give you a list of documents that are set just for you, based on your job, money, past travels, and reason for visit. You will know just what you need, this stops you from missing files or making errors that could slow or stop the process.
                                </p>
                                <h3 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong>Online Application Form Assistance
                                    </strong>
                                </h3>


                                <p style={{ textAlign: 'left' }}>
                                    Our team fills your UK tourist visa form on the official GOV.UK site with care. Every part—from your info to your travel plans—is checked to meet UKVI rules, cutting down on errors and ensuring a solid form send-off.
                                </p>
                                <h3 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong>Document Upload on TLScontact/VFS Portal
                                    </strong>
                                </h3>


                                <p style={{ textAlign: 'left' }}>
                                    We help in putting all needed files on the TLS contact or VFS site. Each file is set up and named right, following embassy rules. This step is key to avoid embassy 'no' due to bad file quality or wrong uploads.
                                </p>
                                <h3 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong>VFS Appointment Scheduling
                                    </strong>
                                </h3>


                                <p style={{ textAlign: 'left' }}>
                                    Your biometric meet-up is set up at the closest VFS Global place, when it works for you. We make sure it fits your plan and tell you what to bring for the meet-up, like slips and real files.
                                </p>
                                <h3 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong>Ongoing Updates and Support
                                    </strong>
                                </h3>


                                <p style={{ textAlign: 'left' }}>
                                    After sending it off, we watch your UK tourist visa status and share news at each part. From start to end, we let you know. Our help goes on until you get your passport back—now with a visa and all set for your UK trip.
                                </p>

                                <br />

                                <h2 className="faq-tag-title-h3">
                                    <strong>Eligibility Criteria for UK Travel Visa (India)
                                    </strong>
                                </h2>
                                <p style={{ textAlign: 'left' }}>
                                    If you need a UK travel visa and you're from India, you must follow the rules of UK Visas and Immigration (UKVI). At Make My Documents, we check your profile, papers, and travel plans closely to make sure you fit all needs and hand in a full, strong visa form.

                                </p>


                                <h3 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong>Plan a real trip to the UK
                                    </strong>
                                </h3>


                                <p style={{ textAlign: 'left' }}>
                                    Your visit to the UK must be for a real reason—like travel, seeing family, or going to an event. UKVI wants a clear aim with proof. We help show your travel plans in a way that meets visa rules, making getting it okayed easier.

                                </p>
                                <h3 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong>Can pay for your time there
                                    </strong>
                                </h3>


                                <p style={{ textAlign: 'left' }}>
                                    You need to prove you have enough money for your trip, stay, and day-to-day costs when in the UK. We help set up and show money proof—like bank notes or pay proof—that fits UKVI needs and shows you can pay for your visit.
                                </p>
                                <h3 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong>Plan to go back to India after your trip

                                    </strong>
                                </h3>


                                <p style={{ textAlign: 'left' }}>
                                    A solid UK travel visa form needs proof that you will go back to India after your visit. This could be a job, home tasks, owning land, or ongoing duties. We guide you in how to show these links well to make your case strong and dodge doubts of staying too long.
                                </p>
                                <h3 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong>Put in a full and true form
                                    </strong>
                                </h3>


                                <p style={{ textAlign: 'left' }}>
                                    It's key to hand in a form that’s fully filled and honest. Mistakes, missing info, or false facts can cause no's or bans. Our team makes sure all your info and papers are spot on, helping you hand in a clean form to the UKVI with no risks.
                                </p>


                                <br />


                                <h2 className="faq-tag-title-h3">
                                    <strong>Why Choose Make My Documents for Your UK Tourist Visa Application?
                                    </strong>
                                </h2>
                                <p style={{ textAlign: 'left' }}>
                                    When you want to go to the UK for a trip from India, you need people who know the steps and care about your travel plans. At Make My Documents, we bring expert know-how, quick help, and close attention to make your UK visa form easy, right, and free of stress.
                                </p>

                                <p style={{ textAlign: 'left' }}>
                                    &#8226;   Over 10,000 Visa Wins

                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    We’ve helped more than 10,000 Indian travelers get their UK travel visas on time. Our knowledge and high pass rate prove that we know what the UK Visas and Immigration (UKVI) looks for and how to meet those needs the right way.

                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    &#8226; Expert Team with Personal Help

                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    Every visitor has their own reasons to go to the UK. Our skilled visa advisers give one-on-one help, shaping the process based on your need—be it sightseeing, family visits, or events—so your form is done with care and right detail.
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    &#8226;  Quick Papers & Checklist Help
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    We give you a custom list of documents and fast check of your papers. This cuts down on usual hold-ups, stops rejection, and checks all boxes. You don’t have to guess what is needed—we set up everything early.

                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    &#8226;  Up-to-Date App Updates
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    From start to finish, you’ll get live info on your UK travel visa form through WhatsApp and email. Be it approval, paper status, or embassy reply, you'll always be in the know without needing to ask. Stay updated via WhatsApp and email from the beginning to the end of your visa trip.


                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    &#8226;  Sticks to UKVI Rules
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    We stick to the latest UKVI rules to make sure your form is fully right. Our group keeps up with visa rule changes, so you face no surprises, tech mistakes, or last-minute paper issues that could change your visa outcome.

                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    &#8226;  Quick Options Based on Travel Plans
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    Pick from standard or fast-track options based on your planned travel date. Whether early or urgent, we guide you with the right process speed to fit your schedule—with no fee disclosure.


                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    &#8226;  Help All the Way – Online & In Person
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    Whether you need help online or face-to-face, we’re here for you through your UK travel visa path. From making papers to setting your VFS meet and tracking your passport, Make My Documents does it all—so you don’t have to.

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

export default UKVisaIndians;