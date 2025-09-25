import React, { useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
  // Navigate,
  BrowserRouter,
} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./home";
import About from "./About";
import Insurance from "./Services/Insurance.jsx";
import TwoWheeler from "./Services/TwoWheeler.jsx";
import FourWheeler from "./Services/FourWheeler.jsx";
import CommercialVehicle from "./Services/CommercialVehicle.jsx";
import Health from "./Services/Health.jsx";
import Life from "./Services/Life.jsx";
// import Contact from "./Contact.jsx";
import Rental from "./Services/rental/Rental.jsx";
import Lease from "./Services/lease/Lease.jsx";
import Affidavit from "./Services/affidavit/Affidavit.jsx";
import Pancard from "./Services/pancard/Pancard.jsx";
import Passport from "./Services/passport/Passport.jsx";
import SeniorCitizen from "./Services/senior/SeniorCitizen.jsx";
import Msme from "./Services/msme/Msme.jsx";
import Food from "./Services/food/Food.jsx";
import PoliceClearance from "./Services/police/PoliceClearance.jsx";
import TravelVisa from "./Services/visa/TravelVisa.jsx";
import Terms from "./Terms.jsx";
import PrivacyPolicy from "./PrivacyPolicy.jsx";
import Disclaimer from "./Disclaimer.jsx";
import PoliceVerification from "./Services/gst/PoliceVerification.js";
import FailurePayment from "./FailurePayment.js";
import Services from "./Services.js";
import Blogs from "./Blogs.jsx";
import ContactUs from "./Contact.jsx";
import PartnersPage from "./Services/PartnersPage.js";
import PaymentStatus from "./PaymentStatus.js";
import Custom404Page from "./Custom404Page.js";
import BlogDetails from "./BlogDetails.jsx";
import PassportAgency from "./Services/passport/passportagency.jsx";
import DubaiVisa from "./Dubaivisa.jsx";
import Hongkongvisa from "./Hongkongvisa.jsx";
import Vietnam from "./Vietnam.jsx";
import Indonesiavisa from "./Indonesiavisa.jsx";
import PassportAgentinChennai from "./Services/passport/PassportAgentinChennai.jsx";
import PassportAgentinHyderabad from "./Services/passport/PassportAgentinHyderabad.jsx";
import PassportAgentinMumbai from "./Services/passport/PassportAgentinMumbai.jsx";
import PassportAgentinPune from "./Services/passport/PassportAgentinPune.jsx";
import PassportAgentinMysore from "./Services/passport/PassportAgentinMysore.jsx";
import SingaporeVisaIndians from "./Services/visa/SingaporeVisaIndians.jsx";
import UKVisaIndians from "./Services/visa/UKVisaIndians.jsx";
import AustraliaVisaIndians from "./Services/visa/AustraliaVisaIndians.jsx";
import MalaysiaVisaIndians from "./Services/visa/MalaysiaVisaIndians.jsx";
import EgyptVisaIndians from "./Services/visa/EgyptVisaIndians.jsx";
// import VietnamVisaIndians from "./Services/visa/VietnamVisaIndians.jsx";
// import HongKongVisaIndians from "./Services/visa/HongKongVisaIndians.jsx";
// import IndonesiaVisaIndians from "./Services/visa/IndonesiaVisaIndians.jsx";
import AzerbaijanVisaIndians from "./Services/visa/AzerbaijanVisaIndians.jsx";
import OmanVisaIndians from "./Services/visa/OmanVisaIndians.jsx";
import MoroccoVisaIndians from "./Services/visa/MoroccoVisaIndians.jsx";
import BahrainVisaIndians from "./Services/visa/BahrainVisaIndians.jsx";
import QatarVisaIndians from "./Services/visa/QatarVisaIndians.jsx";
import RussiaVisaIndians from "./Services/visa/RussiaVisaIndians.jsx";
import UzbekistanVisaIndians from "./Services/visa/UzbekistanVisaIndians.jsx";
import { Navigate } from "react-router-dom";
import PassportNew from "./Services/passport/PassportNew.jsx";
import TravelVisaNew from "./Services/visa/TravelVisaNew.jsx";
import RentalNew from "./Services/rental/RentalNew.jsx";
import LeaseNew from "./Services/lease/LeaseNew.jsx";
import PancardNew from "./Services/pancard/PancardNew.jsx";
import SeniorCitizenNew from "./Services/senior/SeniorCitizenNew.jsx";
import PoliceVerificationNew from "./Services/gst/PoliceVerificationNew.jsx";
import PoliceClearenceNew from "./Services/police/PoliceClearenceNew.jsx";
import MemsNew from "./Services/msme/MemsNew.jsx";

import PassportLandingPage from "./Services/passport/PassportLandingPage.jsx";
import AffidavitNew from "./Services/affidavit/AffidavitNew.jsx";



const Layout = ({ children }) => {
  const location = useLocation();
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  useEffect(() => {
    const allowedPages = ["/", "/insurance", "/tourist-visa", "/contact-us"];
    const isAllowedPage = allowedPages.includes(location.pathname);

    const removeWhatsAppWidget = () => {
      const existingScript = document.querySelector('script[src*="kiwi-sdk"]');
      if (existingScript) existingScript.remove();

      const kiwiContainer = document.getElementById("kiwi-widget");
      if (kiwiContainer) kiwiContainer.remove();

      if (window.kiwi) window.kiwi = undefined;
    };

    if (isAllowedPage) {
      try {
        if (!document.querySelector('script[src*="kiwi-sdk"]')) {
          const script = document.createElement("script");
          script.type = "text/javascript";
          script.async = true;
          script.src = `https://app.interakt.ai/kiwi-sdk/kiwi-sdk-17-prod-min.js?v=${new Date().getTime()}`;

          script.onload = () => {
            if (window.kiwi) {
              window.kiwi.init("", "AMai21iIUS09oEEkxbBftGabLTzAZeI0", {});
            } else {
              console.error("Kiwi SDK failed to load.");
            }
          };

          script.onerror = () => {
            console.error("Failed to load the Kiwi SDK script.");
          };

          document.body.appendChild(script);
        }
      } catch (error) {
        console.error("Error adding the script:", error);
      }
    } else {
      removeWhatsAppWidget();
    }

    return () => {
      if (!isAllowedPage) {
        removeWhatsAppWidget();
      }
    };
  }, [location.pathname]);

  const noHeaderRoutes = ["/request_success", "/failure", "/404", "*"];
  const hideHeader = noHeaderRoutes.includes(location.pathname);

  return (
    <>
      {!hideHeader && <Header />}
      <div style={{ minHeight: "calc(100vh - 66px)" }}>{children}</div>
      {["/", "/about-us", "/terms-conditions", "/privacy-policy", "/disclaimer", "/blogs", "/contact-us",].includes(
        location.pathname
      ) && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Wrap valid routes inside Layout */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/:services" element={<Services />} />
        <Route path="/:services-form" element={<Services />} />
        <Route path="/:services/proceed-to-pay" element={<Services />} />
        <Route path="/about-us" element={<Layout><About /></Layout>} />
        <Route path="/terms-conditions" element={<Layout><Terms /></Layout>} />
        <Route path="/privacy-policy" element={<Layout><PrivacyPolicy /></Layout>} />
        <Route path="/disclaimer" element={<Layout><Disclaimer /></Layout>} />
        <Route path="/blogs" element={<Layout><Blogs /></Layout>} />
        <Route path="/blogs/:title" element={<Layout><BlogDetails /></Layout>} />
        <Route path="/contact-us" element={<Layout><ContactUs /></Layout>} />
        <Route path="/insurance" element={<Layout><Insurance /></Layout>} />
        <Route path="/two-wheeler-insurance" element={<Layout><TwoWheeler /></Layout>} />
        <Route path="/two-wheeler-insurance-info" element={<Layout><TwoWheeler /></Layout>} />
        <Route path="/car-insurance" element={<Layout><FourWheeler /></Layout>} />
        <Route path="/car-insurance-info" element={<Layout><FourWheeler /></Layout>} />
        <Route path="/commercial-insurance-instruction" element={<Layout><CommercialVehicle /></Layout>} />
        <Route path="/commercial-insurance" element={<Layout><CommercialVehicle /></Layout>} />
        <Route path="/health-insurance" element={<Layout><Health /></Layout>} />
        <Route path="/health-insurance-info" element={<Layout><Health /></Layout>} />
        <Route path="/life-insurance" element={<Layout><Life /></Layout>} />
        <Route path="/life-insurance-info" element={<Layout><Life /></Layout>} />
        {/* <Route path="/rental-agreement" element={<Layout><Rental /></Layout>} /> */}
        <Route path="/rental-agreement-form" element={<Layout><Rental /></Layout>} />
        <Route path="/rental-agreement/proceed-to-pay" element={<Layout><Rental /></Layout>} />
        {/* <Route path="/lease-agreement" element={<Layout><Lease /></Layout>} /> */}
        <Route path="/lease-agreement-form" element={<Layout><Lease /></Layout>} />
        <Route path="/lease-agreement/proceed-to-pay" element={<Layout><Lease /></Layout>} />
        {/* <Route path="/affidavits" element={<Layout><Affidavit /></Layout>} /> */}
        <Route path="/affidavits/:selectedAffidavit" element={<Layout><Affidavit /></Layout>} />
        <Route path="/affidavits/:selectedAffidavit/proceed-to-pay" element={<Layout><Affidavit /></Layout>} />
        {/* <Route path="/pan-card" element={<Layout><Pancard /></Layout>} /> */}
        <Route path="/pan-card/proceed-to-pay" element={<Layout><Pancard /></Layout>} />
        <Route path="/pan-card-form" element={<Layout><Pancard /></Layout>} />
        {/* <Route path="/passport" element={<Layout><Passport /></Layout>} /> */}
        <Route path="/passport-form" element={<Layout><Passport /></Layout>} />
        <Route path="/passport/proceed-to-pay" element={<Layout><Passport /></Layout>} />
        {/* <Route path="/senior-citizen-card" element={<Layout><SeniorCitizen /></Layout>} /> */}
        <Route path="/senior-citizen-card-form" element={<Layout><SeniorCitizen /></Layout>} />
        <Route path="/senior-citizen-card/proceed-to-pay" element={<Layout><SeniorCitizen /></Layout>} />
        {/* <Route path="/msme-registration" element={<Layout><Msme /></Layout>} /> */}
        <Route path="/msme-registration-form" element={<Layout><Msme /></Layout>} />
        <Route path="/msme-registration/proceed-to-pay" element={<Layout><Msme /></Layout>} />
        {/* <Route path="/food-license" element={<Layout><Food /></Layout>} /> */}
        {/* <Route path="/food-license-form" element={<Layout><Food /></Layout>} /> */}
        <Route path="/food-license/proceed-to-pay" element={<Layout><Food /></Layout>} />
        {/* <Route path="/police-verification" element={<Layout><PoliceVerification /></Layout>} /> */}
        <Route path="/policeverification-form" element={<Layout><PoliceVerification /></Layout>} />
        <Route path="/policeverification/proceed-to-pay" element={<Layout><PoliceVerification /></Layout>} />
        {/* <Route path="/police-clearance-certificate" element={<Layout><PoliceClearance /></Layout>} /> */}
        <Route path="/police-clearance-certificate-form" element={<Layout><PoliceClearance /></Layout>} />
        <Route path="/police-clearance-certificate/proceed-to-pay" element={<Layout><PoliceClearance /></Layout>} />
        {/* <Route path="/visa" element={<Layout><TravelVisa /></Layout>} /> */}

        <Route path="/our_partners" element={<Layout><PartnersPage /></Layout>} />
        <Route path="/request_success" element={<Layout><PaymentStatus /></Layout>} />
        <Route path="/failure" element={<Layout><FailurePayment /></Layout>} />
        <Route path="/passport-agent-in-bangalore" element={<Layout><PassportAgency /></Layout>} />
        <Route path="/passport-agent-in-chennai" element={<Layout><PassportAgentinChennai /></Layout>} />
        <Route path="/passport-agent-in-hyderabad" element={<Layout><PassportAgentinHyderabad /></Layout>} />
        <Route path="/passport-agent-in-mumbai" element={<Layout><PassportAgentinMumbai /></Layout>} />
        <Route path="/passport-agent-in-pune" element={<Layout><PassportAgentinPune /></Layout>} />
        <Route path="/passport-agent-in-mysore" element={<Layout><PassportAgentinMysore /></Layout>} />


        <Route path="/vietnam-tourist-visa-for-indians" element={<Layout><Vietnam /></Layout>}></Route>
        <Route path="/indonesia-tourist-visa-for-indians" element={<Layout><Indonesiavisa /></Layout>}></Route>
        <Route path="/singapore-visa" element={<Layout><SingaporeVisaIndians /></Layout>}></Route>
        <Route path="/uk-visa" element={<Layout><UKVisaIndians /></Layout>}></Route>
        <Route path="/australia-visa" element={<Layout><AustraliaVisaIndians /></Layout>}></Route>
        <Route path="/malaysia-visa" element={<Layout><MalaysiaVisaIndians /></Layout>}></Route>
        <Route path="/egypt-visa" element={<Layout><EgyptVisaIndians /></Layout>}></Route>
    
        <Route path="/azerbaijan-visa" element={<Layout><AzerbaijanVisaIndians /></Layout>}></Route>
        <Route path="/oman-visa" element={<Layout><OmanVisaIndians /></Layout>}></Route>
        <Route path="/morocco-visa" element={<Layout><MoroccoVisaIndians /></Layout>}></Route>
        <Route path="/bahrain-visa" element={<Layout><BahrainVisaIndians /></Layout>}></Route>
        <Route path="/qatar-visa" element={<Layout><QatarVisaIndians /></Layout>}></Route>
        <Route path="/russia-visa" element={<Layout><RussiaVisaIndians /></Layout>}></Route>
        <Route path="/uzbekistan-visa" element={<Layout><UzbekistanVisaIndians /></Layout>}></Route>
       <Route path="/dubai-tourist-visa-for-indians" element={<Layout><DubaiVisa /></Layout>} />
        <Route path="/hong-kong-tourist-visa-for-indians" element={<Layout><Hongkongvisa /></Layout>} />



<Route path="/passport" element={<Layout><PassportNew /></Layout>}></Route>
<Route path="/tourist-visa" element={<Layout><TravelVisaNew /></Layout>} />
  <Route path="/rental-agreement" element={<Layout><RentalNew /></Layout>} />
   <Route path="/lease-agreement" element={<Layout><LeaseNew /></Layout>} />
 {/* <Route path="/pan-card-new" element={<Layout><PancardNew /></Layout>} /> */}
 <Route path="/pan-card" element={<Layout><PancardNew /></Layout>} />
 <Route path="/senior-citizen-card" element={<Layout><SeniorCitizenNew /></Layout>} />
 <Route path="/policeverification" element={<Layout><PoliceVerificationNew /></Layout>} />
 <Route path="/police-clearance-certificate" element={<Layout><PoliceClearenceNew /></Layout>} />
 <Route path="/msme-registration" element={<Layout><MemsNew /></Layout>} />
 <Route path="/apply-passport-online" element={<Layout><PassportLandingPage /></Layout>} />
 <Route path="/affidavits" element={<Layout><AffidavitNew /></Layout>} />

        <Route path="/dubai-visa" element={<Navigate to="/dubai-tourist-visa-for-indians" replace />} />
        <Route path="/hongkong-visa" element={<Navigate to="/hong-kong-tourist-visa-for-indians" replace />} />
        <Route path="/vietnam-visa" element={<Navigate to="/vietnam-tourist-visa-for-indians" replace />} />
        <Route path="/indonesia-visa" element={<Navigate to="/indonesia-tourist-visa-for-indians" replace />} />
      <Route path="/indonesia-visa" element={<Navigate to="/indonesia-tourist-visa-for-indians" replace />} />


      
        <Route path="/passport-agency-in-bangalore"element={<Navigate to="/passport-agent-in-bangalore" replace />} />




        {/* Custom 404 Page without Header  */}
        <Route path="*" element={<Custom404Page />} />


      </Routes>


    </BrowserRouter>
  );
};

export default App;



