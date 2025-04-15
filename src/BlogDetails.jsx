import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import "./blogs.css"
import { Helmet } from "react-helmet";
import Footer from "./Footer";

const BlogDetails = () => {
  const { title } = useParams();

  
  
  const [blog, setBlog] = useState(null);
   const [fullName, setFullName] = useState("");
    const [emailId, setEmailId] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [selectedService, setSelectedService] = useState("");
    const [date, setDate] = useState(null);  
    const [time, setTime] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
 const [isCheck, setIsCheck] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  

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

    setErrors(formErrors);
    const isValid = Object.keys(formErrors).length === 0;
    setIsFormValid(isValid);
    return isValid;
  };



    const submitDataToAPI = async () => {
      // if (!isFormValid) return;
  
      const data = {
        name: fullName || "",
        mobilenumber: mobileNumber || "",
        email: emailId || "",
        district: "N/A",
        source: "Blog page",
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
      setIsCheck(true); 
      const isValid = validateForm();
      if (isValid) {
        await submitDataToAPI();
      }
    };
  

  useEffect(() => {
    fetchBlogById();
  }, [title]);
  

  // const fetchBlogById = async () => {
  //   try {
  //     const res = await axios.get(`https://api.makemydocuments.com/api/blogs/${title}`);
  //     setBlog(res.data);
  //   } catch (error) {
  //     console.error("Error fetching blog:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const fetchBlogById = async () => {
    try {
      const res = await axios.get(`https://api.makemydocuments.com/api/blogs`);
      const blogList = res.data;
      const matchedBlog = blogList.find(
        (b) => b.title.toLowerCase() === title.toLowerCase()
      );
      setBlog(matchedBlog || null);
    } catch (error) {
      console.error("Error fetching blog:", error);
    } finally {
      setLoading(false);
    }
  };
  



  if (loading) {
    return <h2 style={{ marginTop: "10%", textAlign: "center" }}>Loading...</h2>;
  }

  if (!blog) {
    return <h2 style={{ marginTop: "10%", textAlign: "center" }}>Blog not found</h2>;
  }

  return (
<>
    <Helmet>
    <title>{blog.metaTitle || blog.title}</title>
    <meta name="description" content={blog.metaDescription || "Read our latest blog article."} />
    <link rel="canonical" href={`https://makemydocuments.com/blogs/${title}`} />
    <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://makemydocuments.com/blogs/${title}"
      },
      "headline": "${blog.metaTitle?.replace(/"/g, '\\"') || blog.title?.replace(/"/g, '\\"')}",
      "description": "${blog.metaDescription?.replace(/"/g, '\\"') || ""}",
      "image": "https://api.makemydocuments.com/uploads/blogs/${blog.image}",
      "author": {
        "@type": "Person",
        "name": "Make My Documents",
        "url": "https://makemydocuments.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Make My Documents",
        "logo": {
          "@type": "ImageObject",
          "url": "https://makemydocuments.com/static/media/logo.31258f6da87268f7ee2d04f6f96e256d.svg"
        }
      },
      "datePublished": "${new Date(blog.createdAt).toISOString()}",
      "dateModified": "${new Date(blog.createdAt).toISOString()}"
    }
    `}
  </script>
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://makemydocuments.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blogs",
          "item": "https://makemydocuments.com/blogs"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "${(blog.metaTitle || blog.title)?.replace(/"/g, '\\"')}",
          "item": "https://makemydocuments.com/blogs/${title}"
        }
      ]
    }
    `}
  </script>

    </Helmet>

    {/* Breadcrumb Navigation */}
<div style={{ backgroundColor: "#f4f4f4", padding: "15px 25px", marginTop: "8%" }} className="breadcrumb-title">
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb mb-0">
      <li className="breadcrumb-item" style={{fontWeight:'bold'}}>
        <a href="/" style={{ color: "#007bff", textDecoration: "none" }}>Home</a>
      </li>
      <li className="breadcrumb-item" style={{fontWeight:'bold'}}>
        <a href="/blogs" style={{ color: "#007bff", textDecoration: "none" }}>Blogs</a>
      </li>
      <li className="breadcrumb-item active" aria-current="page" style={{fontWeight:'bold'}}>
        {blog?.title?.replace(/-/g, " ")}
      </li>
    </ol>
  </nav>
</div>

    <div
     className="blog-details-wrapper"
    >
      {/* Left: Blog Content */}
      <div className="blog-content-scrollable">
      <h1 className="blog-title">{blog.title.replace(/-/g, " ")}</h1>

        {/* <img
          src={`https://api.makemydocuments.com/uploads/blogs/${blog.image}`}
          alt={blog.title}
          style={{
            width: "100%",
            height: "350px",
            objectFit: "cover",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        /> */}
        <img
  src={`https://api.makemydocuments.com/uploads/blogs/${blog.image}`}
  alt={blog.title}
  className="blog-image"
/>

        <div
          style={{
            color: "#555",
            lineHeight: "1.6",
            fontSize: "16px",
          }}
          dangerouslySetInnerHTML={{ __html: blog.description }}
        />
      </div>

      {/* Right: Enquiry Form */}
      <div
       className="enquiry-form-box"
      >
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              // onChange={handleEnquiryChange}
              required
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              required
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
              required
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>Service</label>
            <select
              name="service"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              required
              style={inputStyle}
            >
             <option value="">Select a Service</option>
          <option value="Insurance">Insurance</option>
          <option value="Travel Visa">Travel visa</option>
          <option value="Rental Agreement">Rental agreement</option>
          <option value="Lease Agreement">Lease agreement</option>
          <option value="Affidavits/ Annexure">Affidavits/Annexture</option>
          <option value="Pan Card">PanCard</option>
          <option value="Pan Card">Passport</option>
          <option value="Senior Citizen Card">Senior Citizen Card</option>
          <option value="Police Verification Certificate">Police verification certificate</option>
          <option value="Food License (FSSAI)">Food License (FSSAI)</option>
          <option value="MSME Certification">MSME Certification</option>
          <option value="Police Clearance Certificate">Police clearance certificate</option>
            </select>
          </div>
          <button
            type="submit"
            
            style={{
              backgroundColor: "#28a745",
              color: "#fff",
              padding: "10px 20px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Submit
          </button>
        </form>
      </div>
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
    </div>
    <Footer/>
    </>
  );
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "5px",
  border: "1px solid #ccc",
  borderRadius: "4px",
};

export default BlogDetails;
