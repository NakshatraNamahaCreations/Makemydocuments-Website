import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./blogs.css"

const BlogDetails = () => {
  const { id } = useParams();
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
      
          // setShowSuccessModal(true);
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
  }, [id]);

  const fetchBlogById = async () => {
    try {
      const res = await axios.get(`https://api.makemydocuments.com/api/blogs/${id}`);
      setBlog(res.data);
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
    <div
     className="blog-details-wrapper"
    >
      {/* Left: Blog Content */}
      <div className="blog-content-scrollable">
        <h1 className="blog-title">{blog.title}</h1>
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
    </div>
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
