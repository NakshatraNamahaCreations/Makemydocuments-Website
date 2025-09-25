import React, { useState, useEffect } from "react";
import axios from "axios";
import './contact.css'
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { useLayoutEffect } from "react";

const ContactUs = () => {
  const location = useLocation();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [fullName, setFullName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [date, setDate] = useState(null);  
  const [time, setTime] = useState(null);  
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  useEffect(() => {
    if (!date) {
      setDate(new Date().toISOString().split("T")[0]); 
    }
    if (!time) {
      setTime(new Date().toLocaleTimeString("en-US", { hour12: false })); 
    }
  }, []); 

  useLayoutEffect(() => {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, []);

  
  const validateForm = () => {
    let formErrors = {};
    if (!fullName || fullName.length < 3) {
      formErrors.fullName = "Full Name must be at least 3 characters.";
    }
    if (!emailId || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailId)) {
      formErrors.emailId = "Enter a valid email address.";
    }
    if (!mobileNumber || !/^\d{10}$/.test(mobileNumber)) {
      formErrors.mobileNumber = "Enter a valid 10-digit mobile number.";
    }
    if (!selectedService) {
      formErrors.selectedService = "Please select a service.";
    }
console.log("yupp working");

setErrors(formErrors);
const isValid = Object.keys(formErrors).length === 0;
setIsFormValid(isValid);
console.log("Validation Status:", isValid);
return isValid;
  };



  
  const submitDataToAPI = async () => {
    // if (!isFormValid) return;

    const data = {
      name: fullName || "",
      mobilenumber: mobileNumber || "",
      email: emailId || "",
      district: "N/A",
      source: "contact page",
      time: time && time !== "00:00:00" ? time : new Date().toLocaleTimeString("en-US", { hour12: false }),
      date: date && date !== "0000-00-00" ? date : new Date().toISOString().split("T")[0],
      services: selectedService || "",
      paidAmount: "", 
      service: selectedService || "", 
    };

    try {
      const response = await axios.post(
        "https://api.makemydocuments.com/api/lead/createLead",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    
        setShowSuccessModal(true);
        clearFormData(); 
      
    } catch (error) {
      console.error("Error while saving data:", error);
    }
  };


  const clearFormData = () => {
    setFullName("");
    setMobileNumber("");
    setEmailId("");
    setSelectedService("");
    setDate(null);
    setTime(null);
    setErrors({});
    setIsFormValid(false);
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    clearFormData(); 
  };

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsCheck(true); // Set check state to true
    const isValid = validateForm();
    if (isValid) {
      await submitDataToAPI();
    }
  };

// if(isCheck){
//   validateForm();
// }
  return (
    <>
    <Helmet>
    <title>Contact Us | Make My Documents™ | Get Assistance with Visa, Passport & More</title>
<meta name="description" content="Reach out to Make My Documents for hassle-free assistance with PAN cards, passports, travel visas, senior citizen cards, insurance policies, and more. Contact us today!"/>
<meta name="keywords" content="contact Make My Documents, document consultancy, PAN card help, passport assistance, insurance services, senior citizen card, travel visa support, PCC, PVC"/>
<meta name="author" content="https://www.makemydocuments.com/"/>
<link rel="canonical" href="https://www.makemydocuments.com/contact-us" />
<meta name="rating" content="General"/>
<meta name="revisit-after" content="2 days"/>
<meta name="robots" content="ALL, index, follow"/>
<meta name="distribution" content="Global" />
<meta name="rating" content="Safe For All" />
<meta name="language" content="English" />
<meta http-equiv="window-target" content="_top"/>
<meta http-equiv="pics-label" content="for all ages"/>
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
    <div style={{overflow:"hidden"}}>
      <div className="contact-header" style={styles.contactHeader}>
        <h1>Contact Us</h1>
        <p>Any questions or remarks? Just write us a message!</p>
      </div>
      <div className="custom-contact-container">
  <form onSubmit={handleSubmit} className="custom-form-wrapper">
    
    
    <div className="custom-row">
      <div className="custom-field">
        {/* <label className="custom-label">Full Name</label> */}
        <input
          type="text"
          placeholder="Enter your Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className={`custom-input ${errors.fullName ? "custom-error-border" : ""}`}
        />
        {errors.fullName && <p className="custom-error-text">{errors.fullName}</p>}
      </div>

      <div className="custom-field">
        {/* <label className="custom-label">Email</label> */}
        <input
          type="email"
          placeholder="Enter a valid email address"
          value={emailId}
          onChange={(e) => setEmailId(e.target.value)}
          className={`custom-input ${errors.emailId ? "custom-error-border" : ""}`}
        />
        {errors.emailId && <p className="custom-error-text">{errors.emailId}</p>}
      </div>
    </div>

    {/* Second Row: Mobile Number & Service */}
    <div className="custom-row">
      <div className="custom-field">
        {/* <label className="custom-label">Mobile Number</label> */}
        <input
          type="number"
          placeholder="Enter your Mobile Number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          className={`custom-input ${errors.mobileNumber ? "custom-error-border" : ""}`}
        />
        {errors.mobileNumber && <p className="custom-error-text">{errors.mobileNumber}</p>}
      </div>

      <div className="custom-field">
        {/* <label className="custom-label">Select a Service</label> */}
        <select
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
          className={`custom-input ${errors.selectedService ? "custom-error-border" : ""}`}
        >
          <option value="">Select a Service</option>
          <option value="Insurance">Insurance</option>
          <option value="Travel visa">Travel visa</option>
          <option value="Rental Agreement">Rental agreement</option>
          <option value="Lease Agreement">Lease agreement</option>
          <option value="Affidavits/ Annexure">Affidavits/Annexture</option>
          <option value="Pan Card">PanCard</option>
          <option value="Passport">Passport</option>
          <option value="Senior Citizen Card">Senior Citizen Card</option>
          <option value="Police Verification Certificate">Police verification certificate</option>
          <option value="Food License (FSSAI)">Food License (FSSAI)</option>
          <option value="MSME Certification">MSME Certification</option>
          <option value="Police Clearance Certificate">Police clearance certificate</option>
        </select>
        {errors.selectedService && <p className="custom-error-text">{errors.selectedService}</p>}
      </div>
    </div>

    <button
              className="custom-submit-button"
            type="submit"
            // disabled={!isFormValid}
          >
            SUBMIT
          </button>


  </form>

  <Modal show={showSuccessModal} onHide={handleCloseModal} centered>
  <Modal.Header closeButton>
    <Modal.Title>Success</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    Your request has been submitted! Our team will contact you shortly.
  </Modal.Body>
  <Modal.Footer>
    <Button variant="primary" onClick={handleCloseModal}>
      Close
    </Button>
  </Modal.Footer>
</Modal>


  <style>
    {`
      .custom-contact-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
      }

      .custom-form-wrapper {
        width: 87%;
      }

      .custom-row {
        display: flex;
        justify-content: space-between;
        gap: 20px;
        margin-bottom: 15px;
      }

      .custom-field {
        width: 100%;
        display: flex;
        flex-direction: column;
      }

      .custom-label {
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 5px;
        color: #333;
      }

      .custom-input {
        width: 100%;
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
        background-color: #f9f9f9;
      }

      .custom-submit-button {
        background-color: #00bcd4;
        color: #fff;
        border: none;
        border-radius: 5px;
        padding: 12px;
        cursor: pointer;
        width: 100%;
        max-width: 200px;
        font-size: 16px;
        text-align: center;
        transition: background-color 0.3s ease;
      }

      .custom-submit-button:hover {
        background-color: #008c9e;
      }

      .custom-error-text {
        color: red;
        font-size: 14px;
        margin-top: 5px;
      }

      .custom-error-border {
        border: 1px solid red !important;
      }

      @media (max-width: 768px) {
        .custom-row {
          flex-direction: column;
          gap: 10px;
        }

        .custom-field {
          width: 100%;
        }
      }
    `}
  </style>
</div>





      <div className="contact-info" style={styles.contactInfo}>

      <div className="info-box" style={styles.infoBox}>
        <div style={styles.iconWrapper}>
          <div className="icon" style={styles.icon}>📞</div>
          </div>
          <h3 style={{fontWeight:'bold', fontSize:'18px', marginTop:'11%'}}>Contact</h3>
          <p style={{fontSize:'14px', marginBottom:'0px', padding:'0px'}}>+91 94296 90973 </p>
          <p style={{fontSize:'14px', marginBottom:'0px', padding:'0px' }}>support@makemydocuments.com</p>
        </div>
        <div className="info-box" style={styles.infoBox}>
        <div style={styles.iconWrapper}>
          <div className="icon" style={styles.icon}>🏃</div>
          </div>
          <h3 style={{fontWeight:'bold', fontSize:'18px', marginTop:'11%'}}>Office Timings</h3>
          <p style={{fontSize:'14px', }}>Mon - Fri 10am - 05pm <br/>Sat 10am - 01pm</p>
        </div>
      
        <div className="info-box" style={styles.infoBox}>
        <a href="https://maps.app.goo.gl/K9ZM8PQwU9HwpMTb7" target="_blank" rel="noopener noreferrer" style={styles.iconWrapper}>
            <div className="icon" style={styles.icon}>📍</div>
          </a>
          <h3 style={{fontWeight:'bold', fontSize:'18px', marginTop:'11%'}}>Our Office Location</h3>
          <p style={{fontSize:'14px'}}>No 334 2nd main Dattatraya nagar hosakerehalli bsk 3rd stage Bangalore 560085</p>
        </div>
      </div>
    </div>
    </>
  );
};

const styles = {
 
  // contactForm: {
  //   display: 'flex',
  //   gap :'1%',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  //   marginBottom: '40px',
  // },
  formInput: {
    width: '300px',
    padding: '10px',
    margin: '10px 10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  // formButton: {
  //   backgroundColor: '#00bcd4',
  //   color: 'white',
  //   border: 'none',
  //   marginLeft:'41%',
  //   padding: '10px 20px',
  //   borderRadius: '5px',
  //   cursor: 'pointer',
  // },
  contactInfo: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  infoBox: {
    textAlign: 'center',
    margin: '10px',
    padding: '10px',
    backgroundColor: '#e0f7fa',
    borderRadius: '10px',
    width: '260px',
    position: 'relative',
  },
  iconWrapper: {
    backgroundColor: '#fda500',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    cursor:'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '-30px',
    left: 'calc(50% - 30px)',
    textDecoration: 'none',
  },
  icon: {
    fontSize: '24px',
    color: 'white',
  },
};

export default ContactUs;
