import React, { useState, useEffect } from "react";
import Image30 from "../../images/rentalimage.svg";
import circleIcon from "../../images/circle1.svg";
import documentsIcon from "../../images/how.svg";
import howIcon from "../../images/Time.svg";
import { ArrowLeft } from "lucide-react";
import { useLayoutEffect } from "react";
import Price from "../../images/Price Tag.svg";
import axios from "axios";
import "../rental/rental.css"
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const stateData = [
  {
    state: "Karnataka",
    districts: [
      "Bagalkot",
      "Ballari (Bellary)",
      "Belagavi (Belgaum)",
      "Bengaluru (Bangalore) Rural",
      "Bengaluru (Bangalore) Urban",
      "Bidar",
      "Chamarajanagar",
      "Chikballapur",
      "Chikkamagaluru (Chikmagalur)",
      "Chitradurga",
      "Dakshina Kannada",
      "Davangere",
      "Dharwad",
      "Gadag",
      "Hassan",
      "Haveri",
      "Kalaburagi (Gulbarga)",
      "Kodagu",
      "Kolar",
      "Koppal",
      "Mandya",
      "Mysuru (Mysore)",
      "Raichur",
      "Ramanagara",
      "Shivamogga (Shimoga)",
      "Tumakuru (Tumkur)",
      "Udupi",
      " Uttara Kannada (Karwar)",
      " Vijayapura (Bijapur)",
      "Yadgir",
    ],
  },
];

const Rental = () => {
    const navigate = useNavigate();
    const location = useLocation();
  const [openIndex, setOpenIndex] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [securitydeposit, setSecurityDeposit] = useState('');
  const [maskedNumber, setMaskedNumber] = useState("XXXX-XXXX-XXXX");
  const [resendCountdown, setResendCountdown] = useState(30);
  const [isCompleted, setIsCompleted] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [fullName, setFullName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [houseStreetName, setHouseStreetName] = useState("");
  const [villageTownCity, setVillageTownCity] = useState("");
  const [dob, setDob] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [shiftingaddress, setShiftingAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [ownerAddress, setOwnerAddress] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [ownername, setOwnerName] = useState("");
  const [tenantName, setTenantName] = useState("");
  // const [userData, setUserData] = useState(null);
   const [ownersfathername, setOwnerFatherName] = useState("");
  const [error, setError] = useState("");
  const [shippingaddress, shippingAddress] = useState(null);
  const [shiftingdate, setShiftingDate] = useState("");
  const [showOtpSection, setShowOtpSection] = useState(true);
  const handleOwnerFatherName = (e) => setOwnerFatherName(e.target.value);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth <= 768);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  // const closePopup = () => {
  //   setShowPopup(false);
  //   setCurrentStep(1);
  //   setIsCompleted(false);
  // };
   const openPopup = () => {
      setShowPopup(true);
      navigate("/rental-agreement-form"); // Update the URL
    };
  
    // Function to close the popup and revert the URL
    const closePopup = () => {
      setShowPopup(false);
      navigate("/rental-agreement"); // Revert the URL
      setCurrentStep(1);
      setIsCompleted(false);
    };

    const handleShiftingdate = (e) => {
      const value = e.target.value;
      const year = value.split("-")[0];
  
      if (/^\d{4}$/.test(year)) {
        setShiftingDate(value);
          setError("");
      } else {
          setError("Year must be exactly 4 digits.");
      }
  };
  
    React.useEffect(() => {
      // Automatically show the popup if the URL matches /two-wheeler-insurance-info
      if (location.pathname === "/rental-agreement-form" || location.pathname === "/rental-agreement/proceed-to-pay") {
        setShowPopup(true);
      } else {
        setShowPopup(false);
      }
    }, [location.pathname]);

    const handleSecurityDeposit =(e) => setSecurityDeposit(e.target.value);
      const [advancePaidThrough, setAdvancePaidThrough] = useState("");
      const handleAdvancePaidThroughChange = (e) => {
        setAdvancePaidThrough(e.target.value);
    };
const [tenantsfathername, setTenantFatherName] = useState("");
    const handleTenantFatherName =(e) => setTenantFatherName(e.target.value)
  const [tenantaddress, setTeanantAddress] = useState("");
  const [monthlyrent, setMonthlyRent] = useState("");
  const [registrationNumber, setSeletedRegistrationNumber] = useState("");
  const [ownerDistrict, setOwnerDistrict] = useState("");
  const [ownerPincode, setOwnerPincode] = useState("");
  const [tenantDistrict, setTenantDistrict] = useState("");
  const [tenantPincode, setTenantPincode] = useState("");
  const [advanceamount, setAdvanceAmount ] = useState("");
  const handleOwnerDistrictChange = (e) => setOwnerDistrict(e.target.value);
  const handleOwnerPincodeChange = (e) => {
    const value = e.target.value;

    // Validate if the value is a number and has exactly 6 digits
    if (/^\d{0,6}$/.test(value)) {
      setOwnerPincode(value);
      setError(false);
    } else {
      setError(true);
    }
  };
  const handleTenantDistrictChange = (e) => setTenantDistrict(e.target.value);
  const handleTenantPincodeChange = (e) => {
    const value = e.target.value;

    // Validate if the value is a number and has exactly 6 digits
    if (/^\d{0,6}$/.test(value)) {
      setTenantPincode(value);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };
  const handleAdvanceAmount =(e) => setAdvanceAmount(e.target.value)
  const handleMonthlyRent = (e) => setMonthlyRent(e.target.value);
  const handleShiftingAddress = (e) => setShiftingAddress(e.target.value);
  // const handleShiftingdate = (e) => setShiftingDate(e.target.value);
  const handleTenantAddress = (e) => setTeanantAddress(e.target.value);
  const handleOwnerName = (e) => setOwnerName(e.target.value);
  const handleTenantName = (e) => setTenantName(e.target.value);
  const handleEmailIdChange = (e) => setEmailId(e.target.value);
  const handleVillageTownCityChange = (e) => setVillageTownCity(e.target.value);
  const handleStateChange = (e) => setSelectedState(e.target.value);
  const handleDistrictChange = (e) => setSelectedDistrict(e.target.value);
  const handleRegistrationNumber = (e) =>
    setSeletedRegistrationNumber(e.target.value);
  const handleOwnerAddress = (e) => setOwnerAddress(e.target.value);
  const getMaskedMobileNumber = (number) => {
    if (!number || number.length < 3) return ""; // Return empty if number is too short
    const firstTwo = number.slice(0, 2); // First two digits
    const lastDigit = number.slice(-1); // Last digit
    const masked = `${firstTwo}******${lastDigit}`; // Mask the middle digits
    return masked;
  };
  const [isLoading, setIsLoading] = useState(false);
  const [agreementOption, setAgreementOption] = useState("");
  const [identityOption, setIdentityOption] = useState(""); // State for radio buttons
  const [stampPaper, setStampPaper] = useState("");
  const [waterCharges, setWaterCharges] = useState(""); // Radio button
  const [paintingCharges, setPaintingCharges] = useState(""); // Dropdown
  const [accommodation, setAccommodation] = useState(""); // Text input
  const [appliancesFittings, setAppliancesFittings] = useState(""); // Textarea
  const handleWaterChargesChange = (e) => setWaterCharges(e.target.value);
  const handlePaintingChargesChange = (e) => setPaintingCharges(e.target.value);
  const handleAccommodationChange = (e) => setAccommodation(e.target.value);
  const handleAppliancesFittingsChange = (e) =>
    setAppliancesFittings(e.target.value);
  const handleAgreementChange = (e) => {
    setAgreementOption(e.target.value);
    console.log("Selected Agreement Option:", e.target.value); // Debugging log
  };

  const handleIdentityChange = (e) => {
    setIdentityOption(e.target.value);
    console.log("Selected Identity Option:", e.target.value); // Debugging log
  };

  //  useEffect(() => {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: 'smooth',
  //     });
  //   }, []); 

  const handleStampPaperChange = (e) => {
    setStampPaper(e.target.value);
    console.log("Selected Stamp Paper:", e.target.value); // Debugging log
  };

  const handlePincodeChange = (e) => {
    const value = e.target.value;

    // Validate if the value is a number and has exactly 6 digits
    if (/^\d{0,6}$/.test(value)) {
      setPincode(value);
      setError(false);
    } else {
      setError(true);
    }
  };

  const validateStep = () => {
    switch (currentStep) {
      case 1:
        const agreementOption = document.querySelector(
          'input[name="agreementOption"]:checked'
        );
        if (!agreementOption) {
          setError("Please select an agreement option.");
          return false;
        }
        break;
  
      case 2:
        const identityOption = document.querySelector(
          'input[name="identityOption"]:checked'
        );
        const stampPaper = document.getElementById("stampPaper").value;
        if (!identityOption) {
          setError("Please select your identity.");
          return false;
        }
        if (!stampPaper) {
          setError("Please select a required stamp paper.");
          return false;
        }
        break;
  
      case 3:
        if (!ownername) {
          setError("Owner's name and age are required.");
          return false;
        }
        if (!ownerAddress) {
          setError("Owner's address is required.");
          return false;
        }
        if (!ownersfathername) {
          setError("Owner's fathername is required.");
          return false;
        }
        if (!selectedState) {
          setError("Please select a state.");
          return false;
        }
        if (!ownerDistrict) {
          setError("Please select a district.");
          return false;
        }
        if (!ownerPincode) {
          setError("Please enter a pin code.");
          return false;
        }
        if (ownerPincode.length !== 6) {
          setError("Owner Pin Code must be exactly 6 digits.");
          return false;
        }
        break;
  
      case 4:
        if (!tenantName) {
          setError("Tenant's name and age are required.");
          return false;
        }
        if (!tenantsfathername) {
          setError("Tenant's address is required.");
          return false;
        }
        if (!tenantaddress) {
          setError("Tenant's fathername is required.");
          return false;
        }
        if (!selectedState) {
          setError("Please select a state.");
          return false;
        }
        if (!tenantDistrict) {
          setError("Please select a district.");
          return false;
        }
        if (!tenantPincode) {
          setError("Please enter a pin code.");
          return false;
        }
        if (tenantPincode.length !== 6) {
          setError("Tenant Pin Code must be exactly 6 digits.");
          return false;
        }
        break;
  
        case 5:
          if (!shiftingdate) {
            setError("Shifted Date is required.");
            return false;
        }
        const shiftingYear = shiftingdate.split("-")[0];
        if (!/^\d{4}$/.test(shiftingYear)) {
            setError("Shifting date year must be exactly 4 digits.");
            return false;
        }
          if (!shiftingaddress) {
            setError("Shifting Address is required.");
            return false;
          }
          if (!securitydeposit || isNaN(securitydeposit) || securitydeposit < 0) {
            setError("Security Deposit must be a valid positive number.");
            return false;
          }
          if (!monthlyrent || isNaN(monthlyrent) || monthlyrent < 0) {
            setError("Monthly Rent must be a valid positive number.");
            return false;
          }
          break;
    
        case 6:
          if (!advancePaidThrough) {
            setError("Please select how the advance was paid through.");
            return false;
          }
          if (!waterCharges) {
            setError("Please select water charges option.");
            return false;
          }
          if (!paintingCharges) {
            setError("Please select painting charges option.");
            return false;
          }
          if (!accommodation) {
            setError("Accommodation details are required.");
            return false;
          }
          if (!appliancesFittings) {
            setError("Appliances/Fittings details are required.");
            return false;
          }
          break;
      case 7:
        if (!shippingaddress) {
          setError("Shipping address is required.");
          return false;
        }
        if (!mobileNumber) {
          setError("Mobile number is required.");
          return false;
        }
        if (!selectedState) {
          setError("State is required.");
          return false;
        }
        if (!selectedDistrict) {
          setError("District is required.");
          return false;
        }
        if (!pincode) {
          setError("Pin code is required.");
          return false;
        }
        if (pincode.length !== 6) {
          setError("Pin Code must be exactly 6 digits.");
          return false;
        }
        break;
  
      default:
        break;
    }
  
    setError(""); // Clear error if validation passes
    return true; // Validation passed
  };

  const nextStep = () => {
    if (validateStep()) {
      if (currentStep < 7) setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };


  useEffect(() => {
    const handleBackButton = (event) => {
      // Prevent default back navigation
      event.preventDefault();

      // Call prevStep only if the currentStep is greater than 1
      if (currentStep > 1) {
        prevStep();
      }
    };

    // Add listener for popstate
    window.addEventListener("popstate", handleBackButton);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [currentStep]); 

  const handleMobileNumberChange = (e) => setMobileNumber(e.target.value);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };




  const handleBackspace = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);

      // Move focus to the previous input
      if (index > 0) {
        document.getElementById(`otp-input-${index - 1}`).focus();
      }
    }
  };
  const selectedStateData = stateData.find(
    (stateObj) => stateObj.state === selectedState
  );
  const districts = selectedStateData ? selectedStateData.districts : [];

  const [otpSent, setOtpSent] = useState(false); // To track if OTP has been sent

  const handleSendOtp = async () => {
    try {
      let formattedNumber = mobileNumber.trim();
      if (!/^\d{10}$/.test(formattedNumber)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
      }
      formattedNumber = `91${formattedNumber}`;
      console.log("Formatted Mobile Number:", formattedNumber);

      const response = await axios.post(
        "https://api.makemydocuments.com/api/sendOTP",
        {
          mobilenumber: formattedNumber,
        }
      );

      if (response.status === 200) {
        console.log("API Response:", response.data);
        if (response.data.status === "success") {
          // Remove the alert and just set the state
          setOtpSent(true);
          setResendCountdown(30); // Reset countdown to 30 seconds
        } else {
          alert(response.data.message || "Error sending OTP.");
        }
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("An error occurred while sending OTP. Please try again.");
    }
  };

  React.useEffect(() => {
    if (resendCountdown > 0 && otpSent) {
      const timer = setInterval(() => {
        setResendCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (resendCountdown === 0) {
      setOtpSent(false); // Reset otpSent when countdown reaches zero
    }
  }, [resendCountdown, otpSent]);

useLayoutEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);


 const [userDetails, setUserDetails] = useState(null);
  const [orderid, setOrderID] = useState();

  // Handle Proceed to Pay API call
  const [paidAmount, setPaidAmount] = React.useState(99); 
    const [paymentSuccess, setPaymentSuccess] = React.useState(false);

  const [leadId,setLeadId]=useState();
  const handleProceedToPay = async () => {
    const txnBaseAmount = userDetails?.baseAmount || 0;
    const txnFee = 99;
    const txnAmount = txnBaseAmount + txnFee;

    const custId = userDetails?.name
        ? `CUST_${userDetails.name.toUpperCase()}`
        : "CUST0012";

    // ✅ Generate Unique Order ID if not available
    const orderId = userDetails?.orderid || `ORD_${Date.now()}`;

    const requestBody = {
        MID: "MAKEMY09422872921500",
        ORDER_ID: orderId,  // Make sure ORDER_ID is set
        CUST_ID: custId,
        INDUSTRY_TYPE_ID: "Retail",
        CHANNEL_ID: "WEB",
        TXN_AMOUNT: txnAmount.toString(),
        WEBSITE: "DEFAULT",
        SERVICE: "Rental Agreement",
        id: leadId, 
        mobilenumber: userDetails.mobile
    };

    console.log("Sending Payment Payload:", requestBody);

    try {
        const response = await axios.post(
            "https://api.makemydocuments.com/api/PG/paytm/initiate",
            requestBody
        );

        console.log("Paytm Response:", response.data);

        if (response.data.paramList && response.data.CHECKSUMHASH) {
            const paramList = response.data.paramList;
            const paytmTxnUrl = "https://secure.paytmpayments.com/theia/processTransaction";
            // https://secure.paytmpayments.com/theia/processTransaction

            // Create a form dynamically
            const form = document.createElement("form");
            form.method = "POST";
            form.action = paytmTxnUrl;

            // Append all parameters as hidden inputs
            Object.keys(paramList).forEach((key) => {
                const input = document.createElement("input");
                input.type = "hidden";
                input.name = key;
                input.value = paramList[key];
                form.appendChild(input);
            });

            // Append form to the body and submit
            document.body.appendChild(form);
            form.submit();

            setPaidAmount(txnAmount);
        } else {
            setError("Payment initiation failed.");
        }
    } catch (err) {
        console.error(
            "Payment API Error:", 
            err.response ? err.response.data : err.message
        );
        setError("Error initiating payment.");
    }
};
  

  const checkPaymentStatus = async (orderid) => {
    try {
      const statusResponse = await axios.get(
        `https://makemydocuments.nakshatranamahacreations.in/payment-status.php?orderid=${orderid}`
      );
  
      if (statusResponse.status === 200) {
        console.log("Payment Status Response:", statusResponse.data);
  
       
        if (statusResponse.data.status === "SUCCESS") {
          const formattedNumber = userDetails?.mobileNumber; // Ensure you have the mobile number available
        // sendMessage(formattedNumber);
        } else {
          // alert("Payment failed or is pending.");
        }
      } else {
        // alert("Unable to fetch payment status. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching payment status:", error);
      // alert("An error occurred while fetching the payment status.");
    }
  };
  

  const [isResending, setIsResending] = useState(false);
  const handleResend = async () => {
    try {
      let formattedNumber = mobileNumber.trim();
      if (!/^91\d{10}$/.test(formattedNumber)) {
        formattedNumber = `91${formattedNumber}`;
      }
  
      console.log("Formatted Mobile Number for Resend:", formattedNumber);
  
      const config = {
        url: "https://api.makemydocuments.com/api/sendOTP",
        method: "post",
        data: {
          mobilenumber: formattedNumber,
        },
      };
      const response = await axios(config);
  
      if (response.status === 200 && response.data.status === "success") {
        console.log("Resend OTP Response:", response.data);
        setResendCountdown(30); 
        startCountdown(); 
       
      } else {
    
      }
    } catch (error) {
      console.error("Error resending OTP:", error);
    } finally {
      setIsResending(false); 
    }
  };
  

  const startCountdown = () => {
    let countdownValue = resendCountdown;
    const interval = setInterval(() => {
      if (countdownValue > 0) {
        countdownValue -= 1;
        setResendCountdown(countdownValue);
      } else {
        clearInterval(interval);
      }
    }, 1000);
  };
  

  const handleVerify = async () => {
    try {
      let formattedNumber = mobileNumber.trim();
  
      if (!/^\d{10}$/.test(formattedNumber)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
      }
  
      formattedNumber = `${formattedNumber}`;
      console.log("Formatted Mobile Number:", formattedNumber);
  
      const enteredOtp = otp.join("").trim();
      if (!enteredOtp || enteredOtp.length !== 4) {
        alert("Please enter a valid 4-digit OTP.");
        return;
      }
  
      const response = await axios.post(
        "https://api.makemydocuments.com/api/verifyOTP",
        { mobilenumber: formattedNumber, otp: enteredOtp }
      );
  
      if (response.status === 200) {
        console.log("OTP Verification Response:", response.data);
        if (response.data.status === "success") {
          // alert("OTP Verified Successfully!");
          setShowOtpSection(false);
  
          // Finish submission first
          finishSubmission();
          navigate("/rental-agreement/proceed-to-pay");
          // await sendMessage(formattedNumber);
          // Fetch user details after finishing submission
          // await fetchUserDetails(formattedNumber);
        } else {
          alert(response.data.message || "Error verifying OTP.");
        }
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("An error occurred while verifying OTP. Please try again.");
    }
  };


  // const sendMessage = async (formattedNumber) => {
  //   try {
  //     const name = fullName || "User"; // Assuming `fullName` is available in your state
  //     const url = `https://makemydocuments.nakshatranamahacreations.in/message-insurance.php?mobile=${formattedNumber}&name=${encodeURIComponent(
  //       name
  //     )}`;

  //     const response = await axios.get(url);

  //     if (response.status === 200) {
  //       console.log("Message sent successfully:", response.data);
  //     } else {
  //       console.error("Error sending message:", response.data);
  //     }
  //   } catch (error) {
  //     console.error("Error while sending message:", error);
  //     alert("An error occurred while sending the message. Please try again.");
  //   }
  // };

  const [selectedDistrict, setSelectedDistrict] = useState("");
  const finishSubmission = () => {
    submitDataToAPI();
    if (mobileNumber) {
      setMaskedNumber(getMaskedMobileNumber(mobileNumber));
    }
    setIsCompleted(true);
  };

  const [date, setDate] = useState(null); 
    const [time, setTime] = useState(null);
   
    useEffect(() => {
      if (!date) {
        setDate(new Date().toISOString().split("T")[0]); 
      }
      if (!time) {
        setTime(new Date().toLocaleTimeString("en-US", { hour12: false })); 
      }
    }, []); 
  const submitDataToAPI = async () => {
    const data = {
      orderid: orderid || "",
      name: ownername || "",
      mobilenumber: mobileNumber || "",
      email: emailId || "",
      waterCharges: waterCharges || "",
      paintingCharges: paintingCharges || "",
      accommodation: accommodation || "",
      appliancesFittings: appliancesFittings || "",
      applying_for: agreementOption || "",
      services: selectedOption || "",
      identityOption: identityOption || "",
      stampPaper: stampPaper || "",
      address: villageTownCity || "",
      district: selectedDistrict || "",
      dob: dob || "",
      date: date,
      registrationNumber : registrationNumber || "",
      shippingaddress : shippingaddress || "", 
      shiftingdate: shiftingdate || "",
      shiftingaddress: shiftingaddress || "",
      insurance_registration_number: registrationNumber || "",
      paidAmount: "99",
      tenantName: tenantName || "",
      tenantaddress: tenantaddress || "",
      monthlyrent: monthlyrent || "",
      safetyDeposit: advanceamount || "",
      // qualification: "",
      ownername: ownername || "",
      ownerAddress: ownerAddress || "",
      securitydeposit :securitydeposit || '',
      advancePaidThrough : advancePaidThrough || "",
      tenantsfathername : tenantsfathername || '',
      ownersfathername :  ownersfathername || "",
      applyingfor: "",
      ownerDistrict: ownerDistrict || "",
      ownerPincode :ownerPincode || "",
      tenantDistrict: tenantDistrict ||"",
      tenantPincode : tenantPincode || "",
      shiftingdate: shiftingdate || "",
      shiftingaddress:  shiftingaddress || "",
      gender: selectedGender || "",
      // fathername: fatherName || "",
      // mothername: motherName || "",
      pincode: pincode || "",
      // PGID: `ORD_${Date.now()}`,
      adharnumber: aadharNumber || "",
      pancard: "",
      time: time && time !== "00:00:00" ? time : new Date().toLocaleTimeString("en-US", { hour12: false }),
      comment: "",
      status: "",
      service: "Rental Agreement",
     
      village: villageTownCity || "",
      state : selectedState || "",
      // "pancard-district": selectedDistrict || "",
    };

    console.log("Data being sent to API:", data);

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
      console.log("API Response:", response.data);
     

        if (response.data.status === "success") {
          const leadData = response.data.lead;
    
          setLeadId(leadData._id); // Correctly setting the lead ID
          setUserDetails({
            ownername: leadData.ownername || "",
            mobilenumber: leadData.mobilenumber || "",
            orderid: leadData.orderId || "",
            services: leadData.services || "N/A",
            paidAmount: leadData.paidAmount || "₹99",
            // PGID: leadData.PGID,
          });
      }  else {
      }
    } catch (error) {
      console.error("Error while saving data:", error);
      // alert("An error occurred while saving your details. Please try again.");
    }
  };
  
  const faqs = [
    {
      question: "What is the validity of a rental agreement in Bangalore?",
      answer:  "Most rental agreements are made for 11 months to avoid registration charges. They can be renewed as needed.",
    },
    {
      question: "Do I need to visit any office to get a rental agreement?",
      answer:
        "No. Our process is completely online. The agreement is delivered to your doorstep.",
    },
    {
      question: "WWhat is the value of stamp paper required?",
      answer:
        "The value of stamp paper depends on the rent, deposit, and property details. Commonly used values are Rs. 20, Rs. 50, or Rs. 100.",
    },
    {
      question: "Do I need notarization for a rental agreement?",
      answer:
        "Notarization is not mandatory but is often recommended for added legal validity.",
    },
    {
      question: "How long does it take to get the final agreement?",
      answer:
        "You will receive the draft within 60 minutes and the final stamped agreement within 1–2 working days.",
    },


    {
      question: "Can I make changes to the agreement before it is finalized?",
      answer: "Yes, you can review the draft and request edits before the final stamping and delivery.",
    },
    {
      question: "Is police verification mandatory for tenants in Bangalore?",
      answer:
        "Police verification is not mandatory but highly recommended to ensure safety and avoid legal issues.",
    },
    {
      question: "Can I create a rental agreement for commercial properties?",
      answer:
        "Yes, we offer agreements for both residential and commercial properties as per your requirements.",
    },
    {
      question: "What documents are required from the landlord and tenant?",
      answer:
        "You’ll need Aadhaar, PAN, and passport-sized photos of both parties along with property details.",
    },
    {
      question: "Can I get a soft copy of the agreement?",
      answer:
        "Yes, a soft copy of the agreement will be emailed to you for your records before delivery.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <Helmet>
    <title> Rental Agreement Online|Draft In 60 Minutes|Delivery Within 24 Hours</title>
<meta name="description" content="Now get your Rental agreement online, Rental Agreement simple online process.Register online, Drafting, Review Drafting, Payment, Doorstep Delivery"/>
<meta name="keywords" content="rental agreement, rental agreement online, how to create rental agreement,rental agreement near me, rental agreement bangalore, online rental agreement, online rent agreement near me, rent agreement, notarized rent agreement online, house rental agreement, online house rental agreement,
home rental agreement, rent agreement near me, rent agreement bangalore,rent agreement online bangalore, rental agreement karnataka, online agreement services."/>
<meta name="author" content="https://www.makemydocuments.com/rental-agreement"/>
<link rel="canonical" href="https://www.makemydocuments.com/rental-agreement" />
<meta name="rating" CONTENT="General"/>
<meta name="revisit-after" CONTENT="2 days"/>
<meta name="robots" content=" ALL, index, follow"/>
<meta name="distribution" content="Global" />
<meta name="rating" content="Safe For All" />
<meta name="language" content="English" />
<meta http-equiv="window-target" content="_top"/>
<meta http-equiv="pics-label" content="for all ages"/>
<meta name="rating" content="general"/>
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
    <div style={{overflow:'hidden'}}>
      <div className="container-rental"
        style={{
          background: "linear-gradient(182.42deg, #FCA505 2.01%, #FFFFFF)",
          minHeight: "60vh",
          paddingTop: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "3%",
        }}
      >
        <div style={{ flex: 1, textAlign: "left", fontWeight: "bold" }} className="rental-text-container">
          <p>Find Peace of Mind with our Comprehensive Rental Agreement  <br className="d-block d-lg-none"/>
          Services - Simplifying the Rental Agreement Process!</p>
        </div>
        <div>
          <img
            src={Image30}
            alt="Rental Agreement"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>

      <div style={{ padding: "10px", textAlign: "left", marginLeft: "8%" }}>
        <h2
          style={{ color: "#1A76D8", fontWeight: "bold", marginLeft: "20px" }}
        >
          What We Do!
        </h2>
        <p style={{ textAlign: "left" ,   padding: "2%", fontWeight: "600" }}>
          <span style={{}}>Make My Documents Online Agreements Service.</span>
          <br />
          <span style={{}}>Service available only in Karnataka.</span>
          <br />
          <span style={{}}>
            Draft will be shared to your mail id within 60min.
          </span>
        </p>
      </div>
      <div
               className="content-section"
               style={{
                 backgroundColor: "#fffff",
                 padding: "30px 15px",
                 borderRadius: "10px",
                 margin: "-1% ",
                 marginLeft:'10%',
                 marginRight: "72%",
               }}
             >
               <div className="row justify-content-center">
                 <div className="col-12 col-md-8 position-relative d-none d-lg-block">
                   {/* First Section: Documents Required (Any One Address Proof) */}
                   <div className="d-flex align-items-center mb-5" style={{gap: '20px'}}>
                     <div style={{ position: "relative", minWidth: "80px", marginTop:'-145%' }}>
                       <img src={circleIcon} alt="Circle Background" className="img-fluid" />
                       <img
                         src={documentsIcon}
                         alt="Documents Icon"
                         style={{
                           position: "absolute",
                           top: "58%",
                           left: "40%",
                           width:'43%',
                           transform: "translate(-50%, -50%)",
                         }}
                       />
                     </div>
                     <div>
                       <h4 className="desktop-text">How It Works</h4>
                       <ul className="desktop-ul">
                         <li>Register online</li>
                         <li>Drafting</li>
                         <li>Review Drafting</li>
                         <li>Payment</li>
      
                         <li>Doorstep Delivery</li>
                       </ul>
                     </div>
                   </div>
             
                   {/* Second Section: How It Works */}
                   <div className="d-flex align-items-center mb-5" style={{gap: '20px'}}>
                     <div style={{ position: "relative", minWidth: "80px", marginTop:'-60%' }}>
                       <img src={circleIcon} alt="Circle Background" className="img-fluid" />
                       <img
                         src={howIcon}
                         alt="How It Works Icon"
                         style={{
                           position: "absolute",
                           top: "58%",
                           left: "40%",
                           width:'43%',
                           transform: "translate(-50%, -50%)",
                         }}
                       />
                     </div>
                     <div>
                       <h4 className="desktop-text">Time Duration</h4>
                       <ul className="desktop-ul">
                         {/* <li>Register online</li> */}
                         <li>1-2 working days</li>
                         {/* <li>Get Appointment</li> */}
                         {/* <li>Visit Police Station</li> */}
                         {/* <li>Get Delivered</li> */}
                       </ul>
                     </div>
                   </div>
             
                   {/* Third Section: Charges */}
                   <div className="d-flex align-items-center mb-5" style={{gap: '20px'}}>
                     <div style={{ position: "relative", minWidth: "80px" , marginTop:'-115%'}}>
                       <img src={circleIcon} alt="Circle Background" className="img-fluid" />
                       <img
                         src={Price}
                         alt="Price Icon"
                         style={{
                           position: "absolute",
                           top: "58%",
                           left: "40%",
                           width:'43%',
                           transform: "translate(-50%, -50%)",
                         }}
                       />
                     </div>
                     <div>
                       <h4 className="desktop-text">Charges</h4>
                       <ul className="desktop-ul">
                         <li>
                           <strong>Rs 300</strong>
                         </li>
                         <li>
                           <strong>Rs.50</strong> as booking/consulting charge. Need to pay while submitting online form
                         </li>
                         <li>Note: Additional charges for stamp paper</li>
                       </ul>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
      <div className="mobile-content-container d-block d-lg-none">
  {/* Row 1: How It Works */}
  <div className="mobile-row">
    <div className="mobile-icon-container">
      <div style={{ position: "relative" }}>
        <img
          src={circleIcon}
          alt="Circle Background"
          className="mobile-circle-icon"
        />
        <img
          src={documentsIcon}
          alt="Documents Icon"
          className="mobile-documents-icon"
        />
      </div>
    </div>
    <div className="mobile-content">
    <h4 className="mobile-title">How It Works</h4>
      <ul className="mobile-list" style={{marginLeft:'-34%', listStyleType: "disc",}}>
        <li className="mobile-item">Register Online</li>
        <li className="mobile-item">Drafting</li>
        <li className="mobile-item">Review Drafting</li>
        <li className="mobile-item">Payment</li>
        <li className="mobile-item">Doorstep Delivery</li>
      </ul>
   
    </div>
  </div>

  {/* Row 2: Time Duration */}
  <div className="mobile-row">
    <div className="mobile-icon-container">
      <div style={{ position: "relative" }}>
        <img
          src={circleIcon}
          alt="Circle Background"
          className="mobile-circle-icon"
        />
        <img
          src={howIcon}
          alt="How Icon"
          className="mobile-how-icon"
        />
      </div>
    </div>
    <div className="mobile-content">
    <h4 className="mobile-title">Time Duration</h4>
      <ul className="mobile-list" style={{marginLeft:'-34%', listStyleType: "disc",}}>
        <li className="mobile-item">1-2 working days</li>
      </ul>
  
    </div>
  </div>

  {/* Row 3: Charges */}
  <div className="mobile-row">
    <div className="mobile-icon-container">
      <div style={{ position: "relative" }}>
        <img
          src={circleIcon}
          alt="Circle Background"
          className="mobile-circle-icon"
        />
        <img
          src={Price}
          alt="Price Icon"
          className="mobile-price-icon"
        />
      </div>
    </div>
    <div className="mobile-content">
    <h4 className="mobile-title">Charges</h4>
      <ul className="mobile-list" style={{marginLeft:'-21%', listStyleType: "disc",}}>
        <li className="mobile-item">Rs 300</li>
        <li className="mobile-item">
          Rs 50 as booking/consulting charge.
          Need to pay while submitting the online form
        </li>
        <li className="mobile-item mobile-note">
          Note: Additional charges for stamp paper
        </li>
      </ul>
  
    </div>
  </div>
</div>



      <div>
        {/* Get Quotes Button */}
        {/* <div style={{ textAlign: "center", marginTop: "4%" }}>
          <button
            style={{
              backgroundColor: "#FCA505",
              color: "#000000",
              padding: "12px 50px",
              border: "none",
              borderRadius: "30px",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "16px",
              marginRight: "40%",
              marginTop: "-30%",
            }}
            onClick={openPopup}
          >
            CONTINUE
          </button>
        </div> */}
        <div className="continue-button-container">
  <button
    className="continue-button"
    onClick={openPopup}
    style={{borderRadius:'0px'}}
  >
     Apply Now
  </button>
</div>
         


            
        {/* Modal Popup */}
        {showPopup && (
          <div  className="popupstyle-rental"
            style={{
              position: "fixed",
              top: "100px",
              left: "0",
              width: "100%",
              height: "86%",
              backgroundColor: "#126ece",
              // backgroundColor:'#fff',
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: "9999",
            }}
          >
            <div className="popup-rental"
              // style={{
              //   backgroundColor: "#FFFFFF",
              //   padding: "40px",
              //   borderRadius: "28px",
              //   width: "70%",
              //   maxHeight: "90%", // Maximum height of the popup
              //   overflowY: "auto", // Enable scrolling if content overflows
              //   textAlign: "center",
              //   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              // }}
            >
              {/* Stepper */}

              {!isCompleted ? (
                <>
                  <div className="stepper-rental"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "30px",
                    }}
                  >
                    {Array.from({ length: 7 }).map((_, index) => (
                      <React.Fragment key={index}>
                        <div className="step-container"
                       
                          style={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                            flex: 1,
                          }}
                        >
                          <button
                           className="button-rental-stepper"
                            onClick={() => setCurrentStep(index + 1)} // Make step clickable
                            style={{
                              width: "50px",
                              height: "50px",
                              backgroundColor:
                                currentStep >= index + 1 ? "#4285F4" : "#ccc",
                              color: "white",
                              borderRadius: "50%",
                              lineHeight: "50px",
                              fontWeight: "bold",
                              border: "none",
                              cursor: "pointer",
                              outline: "none",
                            }}
                          >
                            {index + 1}
                          </button>
                          {/* Optional Step Labels */}
                          {/* <span style={{ marginTop: "10px", fontSize: "16px" }}>Step {index + 1}</span> */}
                        </div>

                        {/* Add Connection Divider Between Steps */}
                        {index < 6 && (
                          <div
                            style={{
                              height: "2px",
                              flex: 1,
                              backgroundColor:
                                currentStep > index + 1 ? "#4285F4" : "#ccc",
                              alignSelf: "center",
                            }}
                            className="step-divider"
                          />
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  <div style={{ marginBottom: "20px" }}>
                    {currentStep === 1 && (
                   <div className="agreement-container">
                   <h4 className="agreement-title d-none d-lg-block">Rental Agreement</h4>
                 
                   <h5 className="agreement-subtitle">
                     I Want to get
                     <span className="required-asterisk">*</span>
                   </h5>
                 
                   {/* Radio Buttons */}
                   <div className="agreement-options">
                     <label className="agreement-option">
                       <input
                         type="radio"
                         name="agreementOption"
                         value="flatHouseRentalAgreement"
                         onChange={handleAgreementChange}
                         className="radio-input"
                       />
                       Flat/House Rental Agreement
                     </label>
                     <label className="agreement-option">
                       <input
                         type="radio"
                         name="agreementOption"
                         value="commercialOfficeShopRentalAgreement"
                         onChange={handleAgreementChange}
                         className="radio-input"
                       />
                       Commercial Office/Shop Rental Agreement
                     </label>
                   </div>
                 
                   {error && <div className="error-message">{error}</div>}
                 </div>
                 
                    )}

                    {currentStep === 2 && (
                      <div style={{ textAlign: "center" }}>
                        {/* Step 3 Heading */}
                        {/* <h5
                          style={{
                            color: "#007BFF",
                            fontWeight: "bold",
                            marginLeft: "-79%",
                            fontSize: "20px",
                          }}
                        >
                          I Am
                          <span style={{ color: "red" }}>*</span>
                        </h5> */}

                        {/* Identity Option Radio Buttons */}
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            marginLeft: "4%",
                            width: "fit-content",
                            gap: "20px",
                          }}
                        >
                          <label
                            style={{
                              fontSize: "18px",
                              fontWeight: "500",
                              color: "#333",
                            }}
                          >
                            <input
                              type="radio"
                              name="identityOption"
                              value="owner"
                              onChange={handleIdentityChange} // Update state on change
                              style={{ marginRight: "10px" }}
                            />
                            Owner
                          </label>
                          <label
                            style={{
                              fontSize: "18px",
                              fontWeight: "500",
                              color: "#333",
                            }}
                          >
                            <input
                              type="radio"
                              name="identityOption"
                              value="tenant"
                              onChange={handleIdentityChange} // Update state on change
                              style={{ marginRight: "10px" }}
                            />
                            Tenant
                          </label>
                        </div>

                        {/* Required Stamp Paper Dropdown */}
                        <div
                          style={{
                            marginBottom: "33px",
                            textAlign: "left",
                            marginTop: "60px",
                          }}
                        >
                          <label
                            htmlFor="stampPaper"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Required Stamp Paper
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <select
                            id="stampPaper"
                            value={stampPaper}
                            onChange={handleStampPaperChange} // Update state on change
                            style={{
                              width: "100%",
                              padding: "10px",
                              fontSize: "16px",
                              border: "1px solid #ccc",
                              borderRadius: "4px",
                            }}
                          >
                            <option value="">Choose</option>
                            <option value="100Rs">100Rs</option>
                            <option value="200Rs">200Rs</option>
                            <option value="500Rs">500Rs</option>
                            <option value="400Rs">400Rs</option>
                            <option value="300Rs">300Rs</option>
                          </select>

                        </div>

                        {/* Error Message */}
                        {error && (
                          <div style={{ color: "red", textAlign: "center" }}>
                            {error}
                          </div>
                        )}
                        <br/>
                      </div>
                    )}

                    {currentStep === 3 && (
                      <div style={{ textAlign: "center" }}>
                        {/* Step 3 Heading */}
                        <p style={{ color: "#1A76D8", fontWeight: "600" }}>
                          Owner's Details<span style={{ color: "red" }}>*</span>
                        </p>

                        {/* Owner's Name & Age */}
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="ownerName"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Owner's Name & Age
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            id="ownerName"
                            value={ownername}
                            onChange={handleOwnerName}
                            placeholder="Enter Owner's Name & Age"
                            style={{
                              width: "100%",
                              height: "45px",
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "4px",
                            }}
                          />
                          {error && !ownername && (
                            <span style={{ color: "red" }}>{error}</span>
                          )}
                        </div>

                        {/* Owner's Father's Name */}
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="ownerFatherName"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Owner's Father's Name
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            id="ownerFatherName"
                            value={ownersfathername}
                            onChange={handleOwnerFatherName}
                            placeholder="Enter Owner's Father's Name"
                            style={{
                              width: "100%",
                              height: "45px",
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "4px",
                            }}
                          />
                             {error && !ownersfathername && (
                            <span style={{ color: "red" }}>{error}</span>
                          )}
                        </div>

                        {/* Owner's Address */}
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="ownerAddress"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Owner's Address
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <textarea
                            id="ownerAddress"
                            value={ownerAddress}
                            onChange={handleOwnerAddress}
                            placeholder="Enter Owner's Address"
                            style={{
                              width: "100%",
                              height: "90px", // Increased height for address
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "4px",
                            }}
                          />
                          {error && !ownerAddress && (
                            <span style={{ color: "red" }}>{error}</span>
                          )}
                        </div>

                        {/* State Selection */}
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="ownerState"
                            style={{ fontSize: "16px" }}
                          >
                            State<span style={{ color: "red" }}>*</span>
                          </label>
                          <select
                            id="ownerState"
                            value={selectedState}
                            onChange={handleStateChange}
                            style={{
                              width: "100%",
                              height: "45px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "4px",
                            }}
                          >
                            <option value="">Select State</option>
                            {stateData.map((stateObj, index) => (
                              <option key={index} value={stateObj.state}>
                                {stateObj.state}
                              </option>
                            ))}
                          </select>
                          {error && !selectedState && (
                            <span style={{ color: "red" }}>
                              State is required
                            </span>
                          )}
                        </div>

                        {/* Owner District */}
                        {selectedState && (
                          <div
                            style={{ marginBottom: "20px", textAlign: "left" }}
                          >
                            <label
                              htmlFor="ownerDistrict"
                              style={{ fontSize: "16px" }}
                            >
                              District<span style={{ color: "red" }}>*</span>
                            </label>
                            <select
                              id="ownerDistrict"
                              value={ownerDistrict}
                              onChange={handleOwnerDistrictChange}
                              style={{
                                width: "100%",
                                height: "45px",
                                fontSize: "16px",
                                border: "2px solid #FCA505",
                                borderRadius: "4px",
                              }}
                            >
                              <option value="">Select District</option>
                              {districts.map((district, index) => (
                                <option key={index} value={district}>
                                  {district}
                                </option>
                              ))}
                            </select>
                            {error && !ownerDistrict && (
                              <span style={{ color: "red" }}>
                                District is required
                              </span>
                            )}
                          </div>
                        )}

                        {/* Owner Pin Code */}
                        <div style={{ marginBottom: "20px", textAlign: "left" }}>
      <label htmlFor="ownerPincode" style={{ fontSize: "16px" }}>
        Pin Code <span style={{ color: "red" }}>*</span>
      </label>
      <input
        type="text"
        value={ownerPincode}
        onChange={handleOwnerPincodeChange}
        id="ownerPincode"
        maxLength="6" // Limit input to 6 characters
        style={{
          width: "100%",
          height: "45px",
          fontSize: "16px",
          border: "2px solid #FCA505",
          borderRadius: "4px",
        }}
      />
 
      {error && ownerPincode.length !== 6 && (
        <span style={{ color: "red" }}>Pin Code must be 6 digits</span>
      )}
    </div>
    <br/>
                      </div>
                    )}

                    {currentStep === 4 && (
                      <div style={{ textAlign: "center" }}>
                        {/* Step 3 Heading */}
                        <p style={{ color: "#1A76D8", fontWeight: "600" }}>
                          Tenant Details<span style={{ color: "red" }}>*</span>
                        </p>

                        {/* Tenant Name & Age */}
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="TenantName"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Tenant Name & Age
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            id="tenantName"
                            value={tenantName}
                            onChange={handleTenantName}
                            placeholder="Enter Tenant Name & Age"
                            style={{
                              width: "100%",
                              height: "45px",
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "4px",
                            }}
                          />
                           {error && !tenantName && (
                              <span style={{ color: "red" }}>
                                tenant name is required
                              </span>
                            )}
                        </div>

                        {/* Tenant Father's Name */}
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="TenantFatherName"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Tenant Father's Name
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            id="TenantFatherName"
                            value={tenantsfathername}
                            onChange={handleTenantFatherName}
                            placeholder="Enter Tenant's Father's Name"
                            style={{
                              width: "100%",
                              height: "45px",
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "4px",
                            }}
                          />
                           {error && !tenantsfathername && (
                              <span style={{ color: "red" }}>
                                tenant father name is required
                              </span>
                            )}
                        </div>

                        {/* Tenant Address */}
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="TenantAddress"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Tenant Address
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            id="TenantAddress"
                            value={tenantaddress}
                            onChange={handleTenantAddress}
                            placeholder="Enter Tenant Address"
                            style={{
                              width: "100%",
                              height: "90px",
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "4px",
                            }}
                          />
                           {error && !tenantaddress && (
                              <span style={{ color: "red" }}>
                                tenantaddress is required
                              </span>
                            )}
                        </div>

                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="tenantState"
                            style={{ fontSize: "16px" }}
                          >
                            State<span style={{ color: "red" }}>*</span>
                          </label>
                          <select
                            id="tenantState"
                            value={selectedState}
                            onChange={handleStateChange}
                            style={{
                              width: "100%",
                              height: "45px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "4px",
                            }}
                          >
                            <option value="">Select State</option>
                            {stateData.map((stateObj, index) => (
                              <option key={index} value={stateObj.state}>
                                {stateObj.state}
                              </option>
                            ))}
                          </select>
                          {error && !selectedState && (
                            <span style={{ color: "red" }}>
                              State is required
                            </span>
                          )}
                        </div>

                        {/* Tenant District */}
                        {selectedState && (
                          <div
                            style={{ marginBottom: "20px", textAlign: "left" }}
                          >
                            <label
                              htmlFor="tenantDistrict"
                              style={{ fontSize: "16px" }}
                            >
                              District<span style={{ color: "red" }}>*</span>
                            </label>
                            <select
                              id="tenantDistrict"
                              value={tenantDistrict}
                              onChange={handleTenantDistrictChange}
                              style={{
                                width: "100%",
                                height: "45px",
                                fontSize: "16px",
                                border: "2px solid #FCA505",
                                borderRadius: "4px",
                              }}
                            >
                              <option value="">Select District</option>
                              {districts.map((district, index) => (
                                <option key={index} value={district}>
                                  {district}
                                </option>
                              ))}
                            </select>
                            {error && !tenantDistrict && (
                              <span style={{ color: "red" }}>
                                District is required
                              </span>
                            )}
                          </div>
                        )}

                        {/* Tenant Pin Code */}
                        <div style={{ marginBottom: "20px", textAlign: "left" }}>
      <label htmlFor="tenantPincode" style={{ fontSize: "16px" }}>
        Pin Code <span style={{ color: "red" }}>*</span>
      </label>
      <input
        type="number"
        value={tenantPincode}
        onChange={handleTenantPincodeChange}
        id="tenantPincode"
        maxLength="6" // Limit input to 6 characters
        style={{
          width: "100%",
          height: "45px",
          fontSize: "16px",
          border: "2px solid #FCA505",
          borderRadius: "4px",
        }}
      />
      {error && !tenantPincode && (
        <span style={{ color: "red" }}>Pin Code is required</span>
      )}
      {error && tenantPincode.length !== 6 && (
        <span style={{ color: "red" }}>Pin Code must be 6 digits</span>
      )}
    </div>
    <br/>
                      </div>
                    )}

                    {currentStep === 5 && (
                      <div style={{ textAlign: "center" }}>
                        <p style={{ color: "#1A76D8", fontWeight: "600" }}>
                          Other Info<span style={{ color: "red" }}>*</span>
                        </p>

                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="ShifterDate"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Shifted Date
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="date"
                            id="ShifterDate"
                            value={shiftingdate}
                            onChange={handleShiftingdate}
                            placeholder=""
                            style={{
                              width: "100%",
                              height: "45px",
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "4px",
                            }}
                            required
                            pattern="\d{4}-\d{2}-\d{2}" 
                          />
                        </div>

                        {/* Owner's Father's Name */}

                        {/* Owner's Address */}
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="ShiftingAddress"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Shifting Address
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <textarea
                            id="TenantAddress"
                            value={shiftingaddress}
                            onChange={handleShiftingAddress}
                            placeholder=""
                            style={{
                              width: "100%",
                              height: "90px", // Increased height for address
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "4px",
                            }}
                          />
                        </div>

                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="SecurityDeposit"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Security Deposit
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="number"
                            id="SecurityDeposit"
                            value={securitydeposit}
                            onChange={handleSecurityDeposit}
                            placeholder=""
                            style={{
                              width: "100%",
                              height: "45px",
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "4px",
                            }}
                            min="0"
                            required
                          />
                          
                        </div>
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="SecurityDeposit"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                           Advance Amount 
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="number"
                            id="AdvanceAmount"
                            value={advanceamount}
                            onChange={handleAdvanceAmount}
                            placeholder=""
                            style={{
                              width: "100%",
                              height: "45px",
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "4px",
                            }}
                            min="0"
                            required
                          />
                          
                        </div>
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="MonthlyRent"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Monthly Rent
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="number"
                            id="MonthlyRent"
                            value={monthlyrent}
                            onChange={handleMonthlyRent}
                            placeholder=""
                            style={{
                              width: "100%",
                              height: "45px",
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "4px",
                            }}
                            min="0"
                            required
                          />
                        </div>
                        {error && (
                          <div style={{ color: "red", textAlign: "center" }}>
                            {error}
                          </div>
                        )}
                        <br/>
                      </div>
                    )}
                    {currentStep === 6 && (
                      <div style={{ marginBottom: "20px", textAlign: "left" }}>
                          <div style={{ marginBottom: "20px" }}>
    <label style={{ fontSize: "20px", fontWeight: "600" }}>
        Advance Paid Through <span style={{ color: "red" }}>*</span>
    </label>
    <div
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginLeft: "4%",
            width: "fit-content",
            gap: "20px",
            marginTop: "2%",
        }}
    >
        {["cash", "cheque", "netBanking"].map((method) => (
            <label
                key={method}
                style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#333",
                }}
            >
                <input
                    type="radio"
                    name="advancePaidThrough"
                    value={method}
                    checked={advancePaidThrough === method}
                    onChange={handleAdvancePaidThroughChange}
                    style={{ marginRight: "10px" }}
                />
                {method.charAt(0).toUpperCase() + method.slice(1).replace(/([A-Z])/g, ' $1')}
            </label>
        ))}
    </div>

   
</div>

                        <div style={{ textAlign: "left" }}>
                          <label
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            Water Charges{" "}
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              marginLeft: "4%",
                              width: "fit-content",
                              gap: "9px",
                              marginTop: "20px",
                            }}
                          >
                            <label
                              style={{
                                fontSize: "16px",
                                fontWeight: "500",
                                color: "#333",
                              }}
                            >
                              <input
                                type="radio"
                                name="waterCharges"
                                value="included"
                                onChange={handleWaterChargesChange}
                                style={{ marginRight: "10px" }}
                              />
                              Included in Rent
                            </label>
                            <label
                              style={{
                                fontSize: "16px",
                                fontWeight: "500",
                                color: "#333",
                              }}
                            >
                              <input
                                type="radio"
                                name="waterCharges"
                                value="excluded"
                                onChange={handleWaterChargesChange}
                                style={{ marginRight: "10px" }}
                              />
                              Excluded
                            </label>
                          </div>
                        </div>

                        <div
                          style={{
                            marginBottom: "40px",
                            textAlign: "left",
                            marginTop: "26px",
                          }}
                        >
                          <label
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            Painting Charges{" "}
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <select
                            style={{
                              width: "100%",
                              padding: "10px",
                              marginTop: "10px",
                              border: "1px solid orange",
                              borderRadius: "4px",
                              fontSize: "16px",
                            }}
                            defaultValue=""
                            value={paintingCharges}
                            onChange={handlePaintingChargesChange}
                          >
                            <option value="" disabled>
                              Choose
                            </option>
                            <option value="applicable">Applicable</option>
                            <option value="notApplicable">
                              Not Applicable
                            </option>
                          </select>
                        </div>

                        <div
                          style={{ marginBottom: "40px", textAlign: "left" }}
                        >
                          <label
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            Accommodation{" "}
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Enter accommodation details"
                            value={accommodation}
                            onChange={handleAccommodationChange}
                            style={{
                              width: "100%",
                              padding: "10px",
                              marginTop: "10px",
                              border: "1px solid orange",
                              borderRadius: "4px",
                            }}
                          />
                        </div>

                        <div
                          style={{
                            marginBottom: "40px",
                            textAlign: "left",
                            marginTop: "-4px",
                          }}
                        >
                          <label
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            Appliances/Fittings Details{" "}
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <textarea
                            placeholder="Enter appliances and fitting details"
                            value={appliancesFittings}
                            onChange={handleAppliancesFittingsChange}
                            style={{
                              width: "100%",
                              padding: "10px",
                              marginTop: "10px",
                              border: "1px solid orange",
                              borderRadius: "4px",
                              minHeight: "100px",
                            }}
                          />
                        </div>
                        {error && (
                          <div style={{ color: "red", textAlign: "center" }}>
                            {error}
                          </div>
                        )}
                        <br/>
                      </div>
                      
                    )}

                    {currentStep === 7 && (
                      <div style={{ textAlign: "center" }}>
                        {/* Step 7 Heading */}
                        <p style={{ color: "#1A76D8", fontWeight: "600" }}>
                          Contact Details<span style={{ color: "red" }}>*</span>
                        </p>

                        {/* Shipping Address */}
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="ownerAddress"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Shipping Address
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <textarea
                            id="ownerAddress"
                            value={shippingaddress}
                            onChange={(e) => shippingAddress(e.target.value)}
                            placeholder=""
                            style={{
                              width: "100%",
                              height: "90px", // Increased height for address
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "4px",
                            }}
                          />
                        </div>

                        {/* State */}
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="state"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            State<span style={{ color: "red" }}>*</span>
                          </label>
                          <select
                            id="state"
                            value={selectedState}
                            onChange={handleStateChange}
                            style={{
                              width: "100%",
                              height: "45px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              border: "1px solid #ccc",
                              borderRadius: "4px",
                            }}
                          >
                            <option value="">Select State</option>
                            {stateData.map((stateObj, index) => (
                              <option key={index} value={stateObj.state}>
                                {stateObj.state}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* District */}
                        {selectedState && (
                          <div
                            style={{ marginBottom: "20px", textAlign: "left" }}
                          >
                            <label
                              htmlFor="district"
                              style={{
                                display: "block",
                                marginBottom: "10px",
                                fontSize: "16px",
                                fontWeight: "500",
                              }}
                            >
                              District<span style={{ color: "red" }}>*</span>
                            </label>
                            <select
                              id="district"
                              value={selectedDistrict}
                              onChange={handleDistrictChange}
                              style={{
                                width: "100%",
                                height: "45px",
                                fontSize: "16px",
                                border: "2px solid #FCA505",
                                borderRadius: "4px",
                              }}
                            >
                              <option value="">Select District</option>
                              {districts.map((district, index) => (
                                <option key={index} value={district}>
                                  {district}
                                </option>
                              ))}
                            </select>
                          </div>
                        )}

                        {/* Pin Code */}
                        <div style={{ marginBottom: "20px", textAlign: "left" }}>
      <label
        htmlFor="pincode"
        style={{
          display: "block",
          marginBottom: "10px",
          fontSize: "16px",
          fontWeight: "500",
        }}
      >
        Pin Code <span style={{ color: "red" }}>*</span>
      </label>
      <input
        type="text"
        value={pincode}
        onChange={handlePincodeChange}
        id="pincode"
        maxLength="6" // Limit input to 6 characters
        style={{
          width: "100%",
          height: "45px",
          padding: "10px",
          fontSize: "16px",
          border: "2px solid #FCA505",
          borderRadius: "10px",
        }}
      />
      {error && !pincode && (
        <span style={{ color: "red" }}>Pin Code is required</span>
      )}
      {error && pincode.length !== 6 && (
        <span style={{ color: "red" }}>Pin Code must be 6 digits</span>
      )}
    </div>

                        {/* Mobile Number */}
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="mobilenumber"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Mobile Number
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            id="ownerName"
                            value={mobileNumber}
                            onChange={handleMobileNumberChange}
                            placeholder=""
                            style={{
                              width: "100%",
                              height: "45px",
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "4px",
                            }}
                          />
                        </div>

                        {/* Email ID */}
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="ownerFatherName"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Email ID
                          </label>
                          <input
                            type="text"
                            value={emailId}
                            onChange={handleEmailIdChange}
                            id="email"
                            placeholder=""
                            style={{
                              width: "100%",
                              height: "45px",
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "4px",
                            }}
                          />
                        </div>

                        {/* Error Message */}
                        {error && (
                          <div style={{ color: "red", textAlign: "center" }}>
                            {error}
                          </div>
                        )}

                        {/* Terms and Conditions */}
                        <p
                          style={{
                            marginTop: "20px",
                            fontSize: "14px",
                            textAlign: "left",
                          }}
                        >
                          By clicking submit, you agree to our{" "}
                          <a
                            href="/terms-conditions"
                            style={{
                              color: "#007BFF",
                              textDecoration: "underline",
                            }}
                          >
                            Terms & Conditions
                          </a>{" "}
                          and{" "}
                          <a
                            href="/privacy-policy"
                            style={{
                              color: "#007BFF",
                              textDecoration: "underline",
                            }}
                          >
                            Privacy Policy
                          </a>
                          .
                        </p>
                        <br/>
                      </div>
                      
                    )}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "20px",
                    }}
                  >
                    {currentStep > 1 && (
                     <>
                     {/* Desktop Button */}
                     {!isMobile && (
                       <button
                         onClick={prevStep}
                         className="desktop-back-btn"
                         style={{
                           padding: "10px 20px",
                           backgroundColor: "#FCA505",
                           color: "#000000",
                           border: "none",
                           borderRadius: "5px",
                           cursor: "pointer",
                           marginTop:'2%',
                           height:'1%'
                         }}
                       >
                         Back
                       </button>
                     )}
                     
                     {/* Mobile Button */}
                     {isMobile && (
                       <button
                         onClick={prevStep}
                         className="mobile-back-btn"
                         style={{
                           padding: "10px",
                           backgroundColor: "#FCA505",
                           color: "#000000",
                           border: "none",
                           borderRadius: "50%",
                           cursor: "pointer",
                           width: "40px",
                           height: "40px",
                           display: "flex",
                           alignItems: "center",
                           justifyContent: "center",
                           position: "absolute",
                           top: "10px", // Adjust for positioning
                           left: "10px",
                         }}
                       >
                         <ArrowLeft size={20} />
                       </button>
                     )}
                     </>
                    )}

                    {currentStep < 7 ? (
                      // <button
                      //   onClick={nextStep}
                      //   style={{
                      //     padding: "10px 20px",
                      //     backgroundColor: "#FCA505",
                      //     color: "#000000",
                      //     border: "none",
                      //     borderRadius: "5px",
                      //     cursor: "pointer",
                      //   }}
                      // >
                      //   Next
                      // </button>
                      <div className="next-button-container">
                        <br/>
  <button className="next-button" onClick={nextStep}>
    Next
  </button>
</div>

                    ) : (
                      // <button
                      //   onClick={() => {
                      //     if (!mobileNumber) {
                      //       setError("Mobile number is required.");
                      //       return;
                      //     }
                      //     handleSendOtp();  
                      //     setShowOtpSection(true);  
                      //     setError(""); 
                      //     setIsCompleted(true)
                      //   }}
                      //   style={{
                      //     padding: "10px 20px",
                      //     backgroundColor: "#FCA505",
                      //     color: "#000000",
                      //     border: "none",
                      //     borderRadius: "5px",
                      //     cursor: "pointer",
                      //   }}
                      // >
                      //   SUBMIT
                      // </button>
                      <div className="submit-button-container">
                      <button
                        className="submit-button"
                        onClick={() => {
                          // Step 7 validation
                          if (!shippingaddress) {
                            setError("Shipping address is required.");
                            return;
                          }
                          if (!mobileNumber) {
                            setError("Mobile number is required.");
                            return;
                          }
                          if (!/^\d{10}$/.test(mobileNumber)) {
                            setError("Mobile number must be exactly 10 digits.");
                            return;
                          }
                          if (!selectedState) {
                            setError("State is required.");
                            return;
                          }
                          if (!selectedDistrict) {
                            setError("District is required.");
                            return;
                          }
                          if (!pincode) {
                            setError("Pin code is required.");
                            return;
                          }
                          if (!/^\d{6}$/.test(pincode)) {
                            setError("Pin Code must be exactly 6 digits.");
                            return;
                          }
                    
                          // If validation passes, proceed with OTP and submission
                          handleSendOtp();
                          setShowOtpSection(true);
                          setError("");
                          setIsCompleted(true);
                        }}
                      >
                        Submit
                      </button>
                    </div>
                    

                    )}
                  </div>
                </>
              ) : (
                <div style={{ textAlign: "center", padding: "20px" }}>
                  {showOtpSection ? (
                    <div>
                      <h4 style={{ color: "#007BFF", fontWeight: "bold" }}>
                        OTP sent on{" "}
                        {mobileNumber
                          ? mobileNumber.replace(/.(?=.{4})/g, "*")
                          : ""}
                      </h4>
                      <div style={{ margin: "20px 0" }}>
                        <label
                          style={{ fontWeight: "500", marginBottom: "10px" }}
                        >
                          Enter OTP <span style={{ color: "red" }}>*</span>
                        </label>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "10px",
                          }}
                        >
                          {otp.map((digit, index) => (
                            <input
                              key={index}
                              id={`otp-input-${index}`}
                              type="text"
                              maxLength="1"
                              value={digit}
                              onChange={(e) =>
                                handleChange(e.target.value, index)
                              }
                              onKeyDown={(e) => handleBackspace(e, index)}
                              style={{
                                width: "50px",
                                height: "50px",
                                textAlign: "center",
                                fontSize: "18px",
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      <div style={{ marginTop: "20px", textAlign: "center" }}>
                        <p style={{ fontSize: "14px", color: "#888" }}>
                          {resendCountdown > 0 ? (
                            <>Not Received? Resend in {resendCountdown}s</>
                          ) : (
                            <a
                              href="#"
                              onClick={handleResend}
                              style={{
                                textDecoration: "none",
                                color: isResending ? "#ccc" : "#007BFF",
                                pointerEvents: isResending ? "none" : "auto",
                              }}
                            >
                              Resend OTP
                            </a>
                          )}
                        </p>
                        
                      </div>

                      <div className="verify-button-container">
  <button
    onClick={() => {
      handleVerify().then((isVerified) => {
        if (isVerified) {
          finishSubmission();
        } else {
          setError("OTP verification failed.");
        }
      });
    }}
    style={{color:'#000', fontWeight:'bold'}}
    className="verify-button"
  >
    VERIFY
  </button>
</div>
                    </div>
                  ) : (
                    <>
                    {paymentSuccess ? ( // Conditionally render success message
                      <div>
                        <h2 style={styles.successMessage}>Payment Successful!</h2>
                        <h3 style={styles.thankYouMessage}>Thank You for Your Submission!</h3>
                      </div>
                    ) : (
                      <>
                 {location.pathname === "/rental-agreement/proceed-to-pay" && (
                      <div>
                        <h2 style={styles.thankYouMessage}>Thank You for Your Submission!</h2>
                        <div style={{ padding: "10px", maxWidth: "600px", margin: "auto" }}>
  {/* Owner Name & Mobile Number */}
  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
    {[
      { label: "Owner Name", value: userDetails?.ownername || "N/A" },
      { label: "Mobile Number", value: userDetails?.mobilenumber || "N/A" },
    ].map((item, index) => (
      <div key={index} style={{ flex: "1 1 45%", minWidth: "200px" }}>
        <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px", textAlign: "left" }}>
          {item.label}
        </label>
        <input type="text" value={item.value} readOnly 
               style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "5px" }} />
      </div>
    ))}
  </div>

  {/* Order ID & Services */}
  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "10px" }}>
    {[
      { label: "Order ID", value: userDetails?.orderid || "N/A" },
      { label: "Services", value:  "Rental Agreement" }, // Allows dynamic service selection
    ].map((item, index) => (
      <div key={index} style={{ flex: "1 1 45%", minWidth: "200px" }}>
        <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px", textAlign: "left" }}>
          {item.label}
        </label>
        <input type="text" value={item.value} readOnly 
               style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "5px" }} />
      </div>
    ))}
  </div>

  {/* Amount (Booking Fee) */}
  <div style={{ marginTop: "10px" }}>
    <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px", textAlign: "left" }}>
      Amount (Booking Fee)
    </label>
    <input type="text" value={paidAmount || "₹0"} readOnly 
           style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "5px" }} />
    <p style={{ fontSize: "12px", marginTop: "5px" }}>
      You can pay the balance amount post documents verification by our consultant.
    </p>
  </div>
</div>

                       
                        <div className="proceed-button-container">
  <button
    onClick={handleProceedToPay}
    className="proceed-button"
    disabled={isLoading} // Disable button while loading
    style={{color:'#000', fontWeight:'bold'}}
  >
    {isLoading ? "Loading..." : "Proceed to Pay"}
  </button>
</div>

      {/* Spinner */}
      {isLoading && (
        <div style={styles.spinnerContainer}>
          <div style={styles.spinner}></div>
        </div>
      )}
                      </div>
                      )}

                      </>
                    )}
                  </>
                  )}
                </div>
              )}

              {/* Close Button */}
              <button
              className="d-none d-lg-block"
                onClick={closePopup}
                style={{
                  position: "absolute",
                  top: "25px",
                  left: "8%",
                  background: "#000000",
                  border: "1px solid #FCA505",
                  fontSize: "20px",
                  padding: "8px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  color: "#fff",
                }}
              >
                <FaArrowLeft />
              </button>
            </div>
          </div>
        )}
      </div>

      <br /> <br />
        <div style={{   margin: "14px auto",
          padding: "20px",
          background: "#FFFFFF",
          borderRadius: "10px",
          width: "80%",}}>
          <h1 className="faq-tag-title-h3">
            <strong>Online Rental Agreement in Bangalore</strong>
          </h1>
          <p style={{textAlign:'left'}}>
            Renting a home or commercial property in Bangalore can be an exciting journey, but it also comes with important legal formalities. One of the most crucial steps is creating a rental agreement that clearly defines the terms and conditions between the landlord and the tenant. Without a proper agreement, disputes may arise, and both parties may face legal and financial risks.
          </p>
 <p  style={{textAlign:'left'}}>
           At Make My Documents, we simplify the entire process of preparing an online rental agreement in Bangalore. Our service ensures that you receive a legally valid, professionally drafted rental agreement without the stress of visiting government offices or lawyers. With our quick, affordable, and transparent process, you can have your rental agreement ready in just a couple of days.
            </p>
          <h2 className="faq-tag-title-h3" style={{textAlign:'left', fontSize: "22px"}}>
            <strong>What is a Rental Agreement?</strong>
          </h2>
        <p  style={{textAlign:'left'}}>
           A rental agreement is a legally binding contract between a landlord and a tenant that outlines the terms of renting a property. It defines important aspects such as:
            </p>
              <ul>
         <li> Monthly rent amount and payment schedule</li>
           <li>Security deposit details </li>
            <li>Duration of tenancy (commonly 11 months in Bangalore) </li>
             <li>Responsibilities of landlord and tenant </li>
              <li>Maintenance and utility charges </li>
               <li>Termination or renewal clauses </li>
          </ul>
 <p  style={{textAlign:'left'}}>
           A well-drafted rental agreement protects both parties by providing clarity and preventing disputes. It also serves as valid address proof for tenants in Bangalore, which is often required for banks, schools, and other formal purposes.
            </p>
             <h2 className="faq-tag-title-h3" style={{textAlign:'left', fontSize: "22px"}}>
            <strong>Why Online Rental Agreement in Bangalore?</strong>
          </h2>

             <p  style={{textAlign:'left'}}>
           Traditionally, rental agreements were made by visiting lawyers, notary offices, or government offices. This process was time-consuming and involved multiple visits, delays, and unnecessary expenses.
            </p>
 <p  style={{textAlign:'left'}}>
           With online rental agreement services, you can now complete the entire process from the comfort of your home. Here’s why it’s better:
            </p>
          <ul>
          <li><strong> Convenience: </strong> Apply online without visiting any office. </li>
          <li><strong>Speed: </strong> Draft shared within 60 minutes, agreement delivered in 1–2 working days.</li> 
          <li><strong>Legal Accuracy: </strong> Drafted by experts, ensuring compliance with Karnataka laws.</li> 
          <li><strong> Transparency: </strong> No hidden charges—only Rs. 50 booking fee and Rs. 300 drafting fee (plus stamp duty). </li> 
          <li><strong>Doorstep Delivery: </strong> Get the finalized agreement delivered to your address.</li> 
          </ul>
         <h2 className="faq-tag-title-h3" style={{textAlign:'left', fontSize: "22px"}}>
            <strong>How Our Rental Agreement Process Works</strong>
          </h2>
          <p  style={{textAlign:'left'}}>
           At Make My Documents, we follow a simple and efficient process to ensure you get your rental agreement quickly:
            </p>
             <ul>
         <li><strong>Register Online –  </strong> Fill out the online form with your details.</li>
           <li><strong>Drafting – </strong> Our legal team prepares a customized draft agreement.</li>
            <li><strong>Review Draft – </strong> Receive the draft by email within 60 minutes for approval.</li>
             <li><strong>Payment – </strong> Pay securely online (Rs. 50 booking + Rs. 300 drafting fee).</li>
              <li><strong>Doorstep Delivery – </strong> Get your stamped rental agreement delivered within 1–2 working days. </li>
          </ul>
 <p  style={{textAlign:'left'}}>
           This smooth and transparent process makes us one of the most reliable rental agreement service providers in Bangalore.
            </p>
  <h2 className="faq-tag-title-h3" style={{textAlign:'left', fontSize: "22px"}}>
            <strong>Benefits of Our Rental Agreement Service</strong>
          </h2>
             <p  style={{textAlign:'left'}}>
           Choosing Make My Documents for your rental agreement in Bangalore comes with several advantages:
            </p>
           <ul>
         <li> Legally valid and accurate agreements</li>
           <li> Affordable charges with no hidden costs</li>
            <li> Quick turnaround time</li>
             <li> Expert legal drafting</li>
              <li> Doorstep delivery of final document</li>
               <li>Custom clauses for rent, deposit, maintenance, pets, and more</li>
                <li>Residential and commercial rental agreements</li>
          </ul>
           <p  style={{textAlign:'left'}}>
           Whether you are a tenant moving into an apartment or a landlord renting out your property, our service ensures that both sides are legally protected.
            </p>

              <h2 className="faq-tag-title-h3" style={{textAlign:'left', fontSize: "22px"}}>
            <strong>Why Choose Us in Bangalore?</strong>
          </h2>
           <p  style={{textAlign:'left'}}>
       Bangalore is one of India’s fastest-growing cities, with thousands of rental transactions happening every day. From professionals renting apartments in Whitefield and Koramangala to students looking for PGs in Jayanagar or landlords leasing commercial spaces in MG Road, the demand for quick and reliable rental agreements is constant.
            </p>
            <p  style={{textAlign:'left'}}>
       At Make My Documents, we understand the unique needs of Bangalore residents and provide fast, affordable, and legally compliant rental agreement services. Our commitment to transparency, accuracy, and customer satisfaction makes us a trusted choice for thousands of clients across the city.
            </p>
              <h2 className="faq-tag-title-h3" style={{textAlign:'left', fontSize: "22px"}}>
            <strong>Apply Now – Get Your Rental Agreement Online</strong>
          </h2>
           <p  style={{textAlign:'left'}}>
       If you are a tenant or landlord in Bangalore, don’t waste time with complicated paperwork or unreliable services. With Make My Documents, your rental agreement is just a few clicks away.
            </p>
           <ul>
         <li> Quick Online Application</li>
           <li> Expert Legal Drafting</li>
            <li>Affordable Pricing </li>
           <li> Doorstep Delivery</li>

          </ul>
  <p  style={{textAlign:'left'}}>
       Apply today and experience the easiest way to create a rental agreement in Bangalore. Let us handle the legalities so you can enjoy a stress-free rental experience.
            </p>
        </div>
   



      <div
        className="faq-section"
        style={{
          margin: "10px auto",
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
                {faq.question}
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
       
      </div>
    </div>
    </>
  );
};

const styles = {
  paymentSummary: {
    maxWidth: "600px",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  },
  thankYouMessage: {
    textAlign: "center",
    color: "#007BFF",
    marginBottom: "20px",
  },
  infoBox: {
    marginBottom: "20px",
  },
  inputGroup: {
    display: "flex",
    alignItems: "center",
    margin: "10px 0",
  },
  label: {
    flex: "1",
    fontWeight: "bold",
    color: "#333",
  },
  input: {
    flex: "2",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px",
    marginLeft: "10px",
    width: "45%",
  },
  proceedButton: {
    backgroundColor: "#fca505",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  spinnerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 9999,
  },
  
  spinner: {
    width: "50px",
    height: "50px",
    border: "5px solid #ccc",
    borderTop: "5px solid #007bff",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
  "@keyframes spin": {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  },


};


export default Rental;
