import React, { useState, useEffect, useRef } from "react";
import bannerimage from "../../images/Australia_image_banner.jpg";
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

const AustraliaVisaIndians = () => {
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
        navigate("/australia-visa-form");
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
            question: "What types of Australia visas do you assist with?",
            answer:
                "We provide assistance for tourist visas",
        },
        {
            question: "Do you offer complete Australia visa application support?",
            answer:
                "Yes, we assist with document preparation, application form filling, appointment booking, cover letter writing, and ongoing support until you receive your visa.",
        },
        {
            question: "Can I apply for an Australia visa without visiting your office?",
            answer: "Yes, our services are fully remote. You can share your documents online, and we’ll guide you through the entire process via call, WhatsApp, or email.",
        },
        {
            question: "What is the processing time for an Australia Tourist Visa from India?",
            answer: "Standard tourist visa processing usually takes 15–30 days depending on the volume at the embassy. We help ensure your application is complete to avoid delays.",
        },
        {
            question: "What documents do I need for an Australia visa?",
            answer:
                "You’ll need a valid passport, financial documents, travel itinerary, invitation letter (if applicable), employment proofs, and more. We provide a detailed checklist customized to your case.",
        },
        {
            question: "Do you help with booking appointments and biometric scheduling?",
            answer: "Yes, we handle biometric appointment booking at VFS centers and guide you on what to carry and how to prepare.",
        },
        {
            question: "Can you help students applying for an Australian study visa?",
            answer:
                "Absolutely. We assist with preparing your Statement of Purpose (SOP), gathering required academic and financial documents, and managing the visa filing.",
        },
        {
            question: "Is visa consultation available for dependent or family visas?",
            answer:
                "Yes, we assist with dependent, spouse, and family visit visas for Australia, ensuring all supporting documents are properly arranged.",
        },
        {
            question: "How much does your Australia visa assistance cost?",
            answer:
                "Our charges vary depending on the visa type and services required. Get in touch with us for a detailed cost breakdown—no hidden fees.",
        },
        {
            question: "What if my Australia visa application gets rejected?",
            answer:
                "In case of rejection, we analyze the refusal reasons and guide you on how to strengthen your documents for reapplication or appeal, if applicable.",
        },
    ];


    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <Helmet>
                {/* Meta Title */}
                <title>Australia Visa for Indians | Apply Tourist & Visit Visa</title>

                {/* Meta Description */}
                <meta
                    name="description"
                    content="Apply for your Australia Visa from India hassle-free. Tourist & visitor visa assistance, step-by-step process, eligibility guidance, fees, and quick support."
                />

                {/* Canonical URL */}
                <link
                    rel="canonical"
                    href="https://www.makemydocuments.com/australia-visa"
                />

                {/* Meta Keywords */}
                <meta
                    name="keywords"
                    content="Australia Visa for Indians, Australia Tourist Visa from India, Australia Visitor Visa, Apply for Australia Visa India, Australia Visa Requirements for Indians, Australia Visa Eligibility Indian Citizens, Visitor Visa vs Visitor Visa Australia"
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
                            Australia Visa for Indians
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
                                        Australia Visa for Indians
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
                                                   color:"#fff",
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
                                                20-25 working days

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
                                                ₹10,999/-
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
                                        Australia Visa for Indians

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
                                            <p style={{ margin: 0, fontSize: "10px", }}>20-25 working days </p>

                                        </div>
                                        <div>
                                            <p style={{ margin: 0, fontWeight: "bold", fontSize: "10px", }}>Starting from</p>
                                            <p style={{ margin: 0, color: "#ffc107", fontWeight: "bold", fontSize: "10px", }}>
                                                ₹10,999/-
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
                                            Documents Required For Australia Visa
                                        </h2>

                                        <h4 style={{ fontSize: '16px' }}>Original Passport</h4>

                                        <h4 style={{ fontSize: '16px' }} className="mt-3">Aadhar card</h4>
                                        <h4 style={{ fontSize: '16px' }} className="mt-3">02 photos with white background and no border (35mm X 45mm)</h4>

                                        <h4 style={{ fontSize: '16px' }} className="mt-3">Invitee passport & visa copy</h4>

                                        <h4 style={{ fontSize: '16px' }} className="mt-3">Invitee's one residence proof </h4>
                                        <h4 style={{ fontSize: '16px' }} className="mt-3">Applicant's 6 months bank statement (with stamp & signature and sufficient funds)</h4>
                                        <h4 style={{ fontSize: '16px' }} className="mt-3">3 months pay slips</h4>
                                        <h4 style={{ fontSize: '16px' }} className="mt-3">2-3 years Income Tax Return (ITR)</h4>
                                        <h4 style={{ fontSize: '16px' }} className="mt-3">Previous travel passport stamped copy</h4>
                                        <h4 style={{ fontSize: '16px' }} className="mt-3">Any investment documents like fixed deposits or property documents (optional)</h4>
                                        <h4 style={{ fontSize: '16px' }} className="mt-3">Flight booking confirmation (optional)</h4>
                                        <h4 style={{ fontSize: '16px' }} className="mt-3">Covering letter (Given by us)</h4>
                                        <h4 style={{ fontSize: '16px' }} className="mt-3">Company leave approval letter</h4>

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
                                                Documents Required For Australia Visa
                                            </h5>
                                            <h4 style={{ fontSize: '14px' }}>Original Passport</h4>

                                            <h4 style={{ fontSize: '14px', marginBottom: "5px" }} className="mt-3">Aadhar card</h4>
                                            <h4 style={{ fontSize: '14px', marginBottom: "5px" }} className="mt-3">02 photos with white background and no border (35mm X 45mm)</h4>

                                            <h4 style={{ fontSize: '14px', marginBottom: "5px" }} className="mt-3">Invitee passport & visa copy</h4>

                                            <h4 style={{ fontSize: '14px', marginBottom: "5px" }} className="mt-3">Invitee's one residence proof </h4>
                                            <h4 style={{ fontSize: '14px', marginBottom: "5px" }} className="mt-3">Applicant's 6 months bank statement (with stamp & signature and sufficient funds)</h4>
                                            <h4 style={{ fontSize: '14px', marginBottom: "5px" }} className="mt-3">3 months pay slips</h4>
                                            <h4 style={{ fontSize: '14px', marginBottom: "5px" }} className="mt-3">2-3 years Income Tax Return (ITR)</h4>
                                            <h4 style={{ fontSize: '14px', marginBottom: "5px" }} className="mt-3">Previous travel passport stamped copy</h4>
                                            <h4 style={{ fontSize: '14px', marginBottom: "5px" }} className="mt-3">Any investment documents like fixed deposits or property documents (optional)</h4>
                                            <h4 style={{ fontSize: '14px', marginBottom: "5px" }} className="mt-3">Flight booking confirmation (optional)</h4>
                                            <h4 style={{ fontSize: '14px', marginBottom: "5px" }} className="mt-3">Covering letter (Given by us)</h4>
                                            <h4 style={{ fontSize: '14px', marginBottom: "5px" }} className="mt-3">Company leave approval letter</h4>
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

                                     {/* Content Section */}
                                       {/*} <div style={{ marginTop: '50px' }}>
                                            <h5 style={{ color: "#007BFF", fontWeight: "bold" }}>Charges</h5>
                                            <ul style={{ listStyleType: "disc", paddingLeft: "20px", }}>
                                                <li><strong style={{ color: '#ff9800' }}>Rs. 10,999/-</strong> For (Normal Application)
                                                </li>
                                                <li> <strong style={{ color: '#ff9800' }}>Rs. 99/-</strong> as booking fee. Need to pay while submitting online form <br />(This mount will a be adjusted in total bill)</li>

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
                                                <h5 style={{ color: "#007BFF", fontWeight: "bold", fontSize: "16px" }}>
                                                    Charges
                                                </h5>
                                                <ul style={{ fontSize: "14px", paddingLeft: "15px", marginBottom: 0 }}>
                                                    <li><strong style={{ color: "#ff9800" }}>Rs. 10,999/-</strong> For (Normal Application)
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
                                                                    "Make My Documents made the Australia visa process incredibly simple. I was worried about getting all my papers in order, but their team walked me through everything. My tourist visa came through faster than I expected. Very professional service."
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
                                                                        Aarav Sharma

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
                                                                    "I got my student visa approved without any hassle. As a first-time applicant, I wasn’t sure where to start. They helped me compile my financial documents, SOP, and even booked my biometric appointment. Super helpful and friendly."
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
                                                                        Rohan Patel

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
                                                                    "Fast communication and smooth coordination Every time I had a question, they responded quickly. From document review to tracking my application, everything was managed efficiently."
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
                                                                        Ishita Singh
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
                                                                    "Honest and reliable visa support. What I appreciated most was their transparency. No hidden charges, no false promises. Just a clear process and timely updates. I’d definitely recommend them to anyone applying for an Australia visa from India."
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
                                                                        Karan Mehta

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
                                                                    "Exceptional service from start to finish. They guided me through the Australia visa process with patience and clarity. The checklist they provided was spot on, and I was never left guessing. Got my visa without any delays"
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
                                                                        Raju

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
                                                                    "Very professional and organized team. They kept me informed at every step of the Australia visa process. The documentation help was accurate, and their follow-ups made sure nothing was missed. Highly recommended for first-time travelers!"
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
                                                                name: "Aarav Sharma",
                                                                initial: "N",
                                                                review:
                                                                    "Make My Documents made the Australia visa process incredibly simple. I was worried about getting all my papers in order, but their team walked me through everything. My tourist visa came through faster than I expected. Very professional service.",
                                                            },
                                                            {
                                                                name: "Rohan Patel",
                                                                initial: "R",
                                                                review:
                                                                    "I got my student visa approved without any hassle. As a first-time applicant, I wasn’t sure where to start. They helped me compile my financial documents, SOP, and even booked my biometric appointment. Super helpful and friendly",
                                                            },
                                                            {
                                                                name: "Ishita Singh",
                                                                initial: "N",
                                                                review:
                                                                    "Fast communication and smooth coordination Every time I had a question, they responded quickly. From document review to tracking my application, everything was managed efficiently.",
                                                            },
                                                            {
                                                                name: "Karan Mehta",
                                                                initial: "K",
                                                                review:
                                                                    "Honest and reliable visa support. What I appreciated most was their transparency. No hidden charges, no false promises. Just a clear process and timely updates. I’d definitely recommend them to anyone applying for an Australia visa from India.",
                                                            },
                                                            {
                                                                name: "Raju",
                                                                initial: "R",
                                                                review:
                                                                    "Exceptional service from start to finish. They guided me through the Australia visa process with patience and clarity. The checklist they provided was spot on, and I was never left guessing. Got my visa without any delays—truly stress-free!",
                                                            },
                                                            {
                                                                name: "Neha R.",
                                                                initial: "L",
                                                                review:
                                                                    "Very professional and organized team. They kept me informed at every step of the Australia visa process. The documentation help was accurate, and their follow-ups made sure nothing was missed. Highly recommended for first-time travelers!",
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
                                    <strong>Australia Visa for Indians
                                    </strong>
                                </h2>
                                <p style={{ textAlign: 'left' }}>
                                    Thinking of going to Australia, If you go for fun, work, or to learn, the visa process can be hard. At Make My Documents, we make the Australia visa form easy for Indian people. We guide you step by step, give support just for you, and help with all the papers needed. Our team makes sure your form meets the new rules of immigration, giving you a top chance to get it okayed—no stress.
                                </p>
                                <br />

                                <h2 className="faq-tag-title-h3">
                                    <strong> Tourist Visa  </strong>
                                </h2>
                                <br />

                                <p style={{ textAlign: 'left' }}>
                                    The Australian tourist visa is for Indian folks looking to see Australia for fun, holidays, or to hang out with family and friends. Based on why you travel, you might stay for 3, 6, or 12 months. We help you apply with the right papers and plans.

                                </p>

                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>Business Visa</h3>

                                <p style={{ textAlign: 'left' }}>
                                    The Australia business visa is for Indians going to meetings, confabs, shows, or looking for business chances. This visa won't let you work or sell stuff. Our team makes sure your papers fit what Australia needs and show clearly what you plan, so you get a yes fast and easy.

                                </p>


                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>Student Visa
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    Indian students who want to study more in Australia can go for the student visa. This visa lets you study full-time and work a bit on the side. We help with it all—papers that show where you'll study, money details, and that you're really just staying for a while for study.
                                </p>

                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>Dependent & Family Visas
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    If you’re moving to be with your spouse, child, or kin in Australia, pick a dependent or family visa. We help Indians show their family ties, shared papers, and letters from sponsors to make sure your ask to stay for a while or forever in Australia is all good.

                                </p>

                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>Visitor Visa
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    The Australian visitor visa is made for short trips that are not about work. This includes family things, helping someone who's sick, or just for kicks. It often gets mixed up with the tourist visa but is kind of different. We guide Indian folks in picking the right kind of visitor visa and getting all forms ready.
                                </p>


                                <br />






                                <h2 className="faq-tag-title-h3">
                                    <strong>  How to Apply for an Australia Tourist Visa from India

                                    </strong>
                                </h2>
                                <p style={{ textAlign: 'left' }}>
                                    Trying to get a tourist visa for Australia from India might seem hard because there are many steps and you need a lot of papers. But, if you know the right way, it gets a lot easier. Here is an easy guide to help you get through it with sure steps:

                                </p>
                                <br />

                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>See if You Can Get the Visa
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    Before you apply, make sure you fit the visa needs. You should have an Indian passport that is good to use, a clear plan for your visit, enough money, and a strong reason to go back to India. Our team checks all this so you start right.
                                </p>
                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>  Get All Needed Papers
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    You need to have some key papers like a copy of your passport, new photos like those in passports, details of your money, proof of income, your travel plans, and where you work. We give you a full list and help you set all in order to meet rules from Australi
                                </p>
                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}> Fill in Visa Form 1419</h3>

                                <p style={{ textAlign: 'left' }}>
                                    Form 1419 is the needed form to ask for an Australian visitor visa (subclass 600). We help you through every part, making sure you dodge common slips that could slow down or risk getting your visa. Everything you write is checked twice by our pros before you send it in.
                                </p>

                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}> Set a Time for Your Biometrics
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    Most people from India need to give biometrics - prints from fingers and a photo - at the nearest VFS Global center. We help in setting your visit when it works for you and tell you what will happen there.

                                </p>
                                <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}> Send and Watch Your Application
                                </h3>

                                <p style={{ textAlign: 'left' }}>
                                    After you send your application and biometrics, we keep an eye on your visa status through the official site and update you often. If more papers are needed or a problem comes up, we act fast to keep your visa try moving well.
                                </p>



                                <br />
                                <h2 className="faq-tag-title-h3">
                                    <strong>  Australia Visa Requirements for Indians
                                    </strong>
                                </h2>
                                <p style={{ textAlign: 'left' }}>
                                    If you plan to go to Australia from India, you need to get all your papers right. Even a small miss can hold up your visa. Here is a short list of what you need for an Australia tourist visa as an Indian:
                                </p>



                                <h3 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong>  Valid Passport
                                    </strong>
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    Your passport should be good for at least six months from when you go and must have two blank pages for the visa stamp. Check that it’s not old or about to run out.
                                </p>
                                <h3 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong>  Recent Passport-Sized Photo
                                    </strong>
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    You need two new, color photos with a white back, no dark spots, and a plain face. These should be less than six months old and the right size.
                                </p>
                                <h3 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong>  Cover Letter
                                    </strong>
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    Write a note to the Australian High Commission. Tell them why you are going, how long you will stay, where you get your money, and your strong links to India that make you sure to go back.
                                </p>
                                <h3 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong>  Proof of Funds
                                    </strong>
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    Add six months of bank papers, pay slips, tax returns, and other money papers to show you can pay for your trip. This shows you don't need cash help while there.
                                </p>
                                <h3 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong>  Travel Plan or Flight Bookings
                                    </strong>
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    Share a basic plan with maybe flight dates and what you want to see. You don't need full tickets yet, but this shows your trip outline and aim.
                                </p>
                                <h3 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong>  Where You Will Stay
                                    </strong>
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    Show hotel spots, Airbnb details, or a letter if staying with friends. This tells the visa person where you’ll be in Australia.
                                </p>
                                <h3 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong>  Job or Business Info
                                    </strong>
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    If you work, give a NOC from your boss, a job letter, and pay slips. If you own a business, show GST stuff, proof you own it, and money details to show steady cash flow and strong ties back home.
                                </p>
                                <h3 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong>  Invite Letter (if needed)
                                    </strong>
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    If you are going to see family or friends, add a letter from them with their details and proof they are okay in Australia. This backs up why you are going.
                                </p>
                                <h3 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong>  Fill Visa Form (Form 1419)
                                    </strong>
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    Complete Form 1419 well and fully. This is the main visa form for Indian tourists to Australia. Any mistakes or left out bits can hold up or mess up your visa result.
                                </p>
                                <br />
                                <h2 className="faq-tag-title-h3">
                                    <strong>Australia Visa Fees and Processing Time (India)
                                    </strong>
                                </h2>
                                <p style={{ textAlign: 'left' }}>
                                    Are you off to Australia, You should know about visa fees and the time it takes to get them. Here is a simple guide on common visa types, what they cost, and usual wait times for applications from India.
                                </p>


                                <h3 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong>Visa Processing Time
                                    </strong>
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    Tourist & Travel Visas – typically processed within 15 to 30 working days depending on the destination country and embassy workload.
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    Note: Processing time may vary based on the embassy and document verification process.
                                </p>
                                <br />

                                <h2 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong>Step-by-Step Australia Visa Application Process
                                    </strong>
                                </h2>
                                <p style={{ textAlign: 'left' }}>
                                    Getting an Australian visa from India might look hard—but with our help, it gets easy and calm. Here’s how we help you at each step:
                                </p>


                                <h3 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong>First Talk
                                    </strong>
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    We start with a face-to-face talk to know why you want to travel—may be for fun, school, work, or to see family. Based on what you want and your time plan, we pick the best visa for Australia and explain the whole thing to you clearly.
                                </p>
                                <h3 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong>Gathering Papers
                                    </strong>
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    You don’t have to come to us. Just send your papers by email or WhatsApp, and we’ll check all for fullness and right info. This way of doing it from afar saves time and makes sure you give only what you really need for a smooth try.
                                </p>
                                <h3 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong>Form Filling & Letter Writing
                                    </strong>
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    Our group fills out your visa forms right and writes a strong letter for your visit's reason. We know what the Australian office looks for, so we make sure your try is well-done from the first step to the last.
                                </p>
                                <h3 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong> Biometrics Time Setting
                                    </strong>
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    After your papers are set, we pick a time for your VFS biometrics at the place nearest you. We also give full tips on what to bring, how to get ready, and what goes on at the time to keep off any mix-ups or waiting.
                                </p>
                                <h3 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong> Sending Files & Watching
                                    </strong>
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    We send in your try and watch it closely. From the first nod to news, we tell you about each thing so you don’t have to ask or worry about where your visa try stands.
                                </p>
                                <h3 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong>Help After Sending
                                    </strong>
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    After we send it, we're not done. We help with embassy questions, need for more papers (if any), and tell you right when a choice is made. We stay with you until your visa is fully okay and you have it.
                                </p>
                                <br />

                                <h2 className="faq-tag-title-h3">
                                    <strong>Eligibility Criteria for Australia Visit Visa from India
                                    </strong>
                                </h2>
                                <p style={{ textAlign: 'left' }}>
                                    Before you try to get a visa for going to Australia, check if you fit the main needs set by the Department of Home Affairs. Here are the things you must have to qualify:
                                </p>


                                <h3 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong> Plan to Go
                                    </strong>
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    You need to show that your visit is just for a short time—for fun, to see family or pals, or to go to events. Good proof of your travel plans and that you will go back helps show you won’t stay too long or work without permission in Australia.
                                </p>
                                <h3 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong>Money Proof
                                    </strong>
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    You should prove you have enough money for your whole trip, this means your flight both ways, where you stay, food, local rides, and daily costs. Bank notes, pay slips, or letters of help might be needed to show that you won't need public money in Australia.
                                </p>
                                <h3 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong>Strong Links to India
                                    </strong>
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    To make the visa officer believe you will go back home, you need documents that show deep ties to India—like a solid job, school work, family bonds, or owning land. These ties show you have reasons to return after your visit.
                                </p>
                                <h3 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong>No Bad Record
                                    </strong>
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    You should not have done any major bad things or stayed longer than allowed on a visa—in Australia or elsewhere. Police checks or old travel papers might be looked at to show you’re right for Australia’s laws on character.
                                </p>
                                <h3 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong>Stay Well
                                    </strong>
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    If you're going to stay a while, they might ask you to get a health check. This could be an X-ray or another test to ensure you’re not sick. For short trips, you often don’t need a full check-up unless they say so.
                                </p>
                                <br />
                                <h2 className="faq-tag-title-h3">
                                    <strong>Why Choose Make My Documents for Your Australia Visa Services?
                                    </strong>
                                </h2>
                                <p style={{ textAlign: 'left' }}>
                                    At Make My Documents, we’re committed to making your visa journey smooth, stress-free, and successful. Here's why travelers across India trust us with their Australia visa needs:
                                </p>


                                <h3 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong> Visitor Visa 
                                    </strong>
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    Every application is unique. We assess your profile individually and provide custom visa advice based on your travel purpose.
                                </p>
                                <h3 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong>100% Online Process
                                    </strong>
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    You don’t need to visit us. From consultation to document submission, everything is handled remotely through WhatsApp, email, and calls.
                                </p>
                                <h3 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong> Expert Team
                                    </strong>
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    Our visa consultants have years of hands-on experience handling Australia tourist visa.
                                </p>
                                <h3 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong>Error-Free Applications
                                    </strong>
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    We double-check every detail—forms, letters, documents—to minimize chances of delay or rejection.
                                </p>
                                <h3 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong> Transparent Pricing
                                    </strong>
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    No confusing fees. You get clear cost breakdowns upfront—no hidden charges, no last-minute surprises.
                                </p>

                                <br />
                                <h2 className="faq-tag-title-h3">
                                    <strong>Australia eVisitor Visa vs. Visitor Visa – What’s Best for You?
                                    </strong>
                                </h2>
                                <p style={{ textAlign: 'left' }}>
                                    When you plan a trip to Australia, you need to know the right visa type. The eVisitor Visa and Visitor Visa (Subclass 600) let you in, but they are not the same in who can use them and why.

                                </p>

                                <h3 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong> eVisitor Visa
                                    </strong>
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    &#8226; Who can use: Only for people with passports from certain European countries.
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    &#8226; Not for India: People from India can't get the eVisitor visa.
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    &#8226; How to get it: You must apply online on the Australian Government site.
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    &#8226; Cost: Usually free or very low.
                                </p>



                                <h3 style={{ textAlign: 'left', fontSize: '18px' }}>
                                    <strong>  Visitor Visa 
                                    </strong>
                                </h3>
                                <p style={{ textAlign: 'left' }}>
                                    &#8226; Who can use: Needed for people with Indian passports.
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    &#8226; Why use it: Good for travel, seeing family, work talks, or short study.
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    &#8226; How long you can stay: Often up to 3, 6, or 12 months, as allowed.
                                </p>
                                <p style={{ textAlign: 'left' }}>
                                    &#8226; How long it takes: Depends on the type (Tourist)    
                                </p>
                                  <p style={{ textAlign: 'left' }}>
                                    &#8226; How to apply: Uses VFS, needs biometric and papers.
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

export default AustraliaVisaIndians;