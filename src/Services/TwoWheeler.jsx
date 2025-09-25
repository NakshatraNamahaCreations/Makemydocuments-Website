import React, { useState, useEffect } from "react";
import "./InsurancePage.css";
import checklistIcon from "../images/notebook.svg";
import vehiclesIcon from "../images/Twowheeler.svg";
import circleIcon from "../images/circle1.svg";
import documentsIcon from "../images/documents.svg";
import howIcon from "../images/how.svg";
import thirdImage from "../images/third.png";
import "./twowheeler.css"
import { useLayoutEffect } from "react";
import Header from "../Header";
import axios from "axios";
import { ArrowLeft } from "lucide-react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const stateData = [
  {
    state:"Arunachal Pradesh",
    districts:[

"Anjaw",
"Changlang",
"Dibang Valley",
"East Kameng",
"East Siang",
"Kamle",
"Kra Daadi",
"Kurung Kumey",
"Leparada",
"Lohit",
"Longding", 
"Lower Dibang Valley",
"Lower Siang",
"Lower Subansiri",
"Namsai",
"Pakke Kessang",
"Papum Pare ",
"Shi Yomi",
"Siang",
"Tawang", 
"Tirap", 
"Upper Siang", 
"Upper Subansiri",
"West Kameng", 
"West Siang"]
  },
  {
    state: "Andhra Pradesh",
    districts: ["Alluri Sitharama Raju","Anakapalli","Ananthapuramu","Annamayya" ,"Bapatla" , "Chittoor" , "Dr. B.R. Ambedkar Konaseema","East Godavari", "Eluru" ,"Guntur", "Kakinada", "Krishna", "Kurnool","Nandyal", "Ntr", "Palnadu", "Parvathipuram Manyam", "Prakasam", "Sri Potti Sriramulu Nellore", "Sri Sathya Sai", "Srikakulam","Tirupati","Visakhapatnam","Vizianagaram", "West Godavari","Y.S.R."],
  },
  {
    state: "Arunachal Pradesh",
    districts: ["Anjaw",
    "Changlang",
    "Dibang Valley",
    "East Kameng",
    "East Siang",
    "Itanagar Capital Complex",
    "Kamle",
    "Kra Daadi",
    "Kurung Kumey",
    "Lepa Rada",
    "Lohit",
    "Longding",
    "Lower Dibang Valley",
    "Lower Siang",
    "Lower Subansiri",
    "Namsai",
    "Pakke-Kessang",
    "Papum Pare",
    "Shi-Yomi",
    "Siang",
    "Tawang",
    "Tirap",
    "Upper Siang",
    "Upper Subansiri",
    "West Kameng",
    "West Siang"],
  },
  {
    state: "Assam",
    districts: [
      "Bajali",
      "Baksa",
      "Barpeta",
      "Biswanath",
      "Bongaigaon",
      "Cachar",
      "Charaideo",
      "Chirang",
      "Darrang",
      "Dhemaji",
      "Dhubri",
      "Dibrugarh",
      "Goalpara",
      "Golaghat",
      "Hailakandi",
      "Hojai",
      "Jorhat",
      "Kamrup",
      "Kamrup Metropolitan",
      "Karbi Anglong",
      "Karimganj",
      "Kokrajhar",
      "Lakhimpur",
      "Majuli",
      "Morigaon",
      "Nagaon",
      "Nalbari",
      "Sivasagar",
      "Sonitpur",
      "South Salmara-Mankachar",
      "Tinsukia",
      "Udalguri",
      "West Karbi Anglong"
    ]
  },  
  {
    state: "Bihar",
    districts: ["Araria", 
      "Arwal",
      "Aurangabad", 
      "Banka",
      "Begusarai", 
      "Bhagalpur",
      "Bhojpur",
      "Buxar",
      "Darbhanga", 
      "Gaya",
      "Gopalganj", 
      "Jamui",
      "Jehanabad", 
      "Kaimur (Bhabua)",
      "Katihar",
      "Khagaria",
      "Kishanganj", 
      "Lakhisarai",
      "Madhepura",
      "Madhubani",
      "Munger",
      "Muzaffarpur", 
      "Nalanda",
      "Nawada",
      "Pashchim Champaran", 
      "Patna",
      "Purbi Champaran", 
      "Purnia",
      "Rohtas",
      "Saharsa", 
      "Samastipur", 
      "Saran",
      "Sheikhpura", 
      "Sheohar",
      "Sitamarhi",
      "Siwan",
      "Supaul",
      "Vaishali"],
  },
  {
    state: "Chhattisgarh",
    districts: ["Balod", 
      "Balodabazar-Bhatapara",
      "Balrampur-Ramanujganj",
      "Bastar", 
      "Bemetara", 
      "Bijapur", 
      "Bilaspur", 
      "Dakshin Bastar Dantewada", 
      "Dhamtari", 
      "Durg", 
      "Gariyaband", 
      "Gaurela-Pendra-Marwahi", 
      "Janjgir-Champa", 
      "Jashpur", 
      "Kabeerdham", 
      "Khairagarh-Chhuikhadan-Gandai",
      "Kondagaon", 
      "Korba", 
      "Korea", 
      "Mahasamund", 
      "Manendragarh-Chirmiri-Bharatpur(M C B)",
     " Mohla-Manpur-Ambagarh Chouki", 
      "Mungeli", 
      "Narayanpur", 
      "Raigarh", 
      "Raipur", 
      "Rajnandgaon", 
      "Sakti",
      "Sarangarh-Bilaigarh",
      "Sukma", 
      "Surajpur", 
      "Surguja", 
      "Uttar Bastar Kanker"],
  },
  {
    state: "Goa",
    districts: [ "North Goa",
      "South Goa"],
  },
  {
    state: "Gujarat",
    districts: ["Ahmedabad", 
      "Amreli",
      "Anand",
      "Arvalli", 
     " Banas Kantha", 
      "Bharuch",
      "Bhavnagar", 
      'Botad',
      "Chhotaudepur", 
      "Dahod",
      "Dangs",
      "Devbhumi Dwarka", 
      "Gandhinagar",
      "Gir Somnath",
      "Jamnagar",
      "Junagadh",
      "Kachchh",
      "Kheda",
      "Mahesana", 
      "Mahisagar", 
      "Morbi",
      "Narmada", 
      "Navsari",
      'Panch Mahals', 
      "Patan",
      "Porbandar", 
      "Rajkot",
      "Sabar Kantha", 
      "Surat",
      "Surendranagar", 
      "Tapi",
      "Vadodara", 
      'Valsad'],
  },
  {
    state: "Haryana",
    districts: [ "Ambala",
      "Bhiwani",
      "Charkhi Dadri",
      "Faridabad",
      "Fatehabad",
      "Gurugram",
      "Hisar",
      "Jhajjar",
      "Jind",
      "Kaithal",
      "Karnal",
      "Kurukshetra",
      "Mahendragarh",
      "Nuh",
      "Palwal",
      "Panchkula",
      "Panipat",
      "Rewari",
      "Rohtak",
      "Sirsa",
      "Sonipat",
      "Yamunanagar"],
  },
  {
    state:"Jammu and Kashmir",
    districts :["Anantnag",
    "Bandipora",
    "Baramulla",
    "Budgam",
    "Doda",
    "Jammu",
    "Kathua",
    "Kishtwar",
    "Kulgam",
    "Kupwara",
    "Poonch",
    "Pulwama",
    "Rajouri",
    "Ramban",
    "Reasi",
    "Samba",
    "Shopian",
    "Srinagar",
    "Udhampur"]
  },
  {
    state: "Himachal Pradesh",
    districts: ["Bilaspur" ,
      "Chamba",
      "Hamirpur", 
      "Kangra", 
      'Kinnaur' ,
      'Kullu' ,
      'Lahaul And Spiti' ,
      'Mandi' ,
      'Shimla' ,
      'Sirmaur', 
      'Solan' ,
      'Una'],
  },
  {
    state: "Jharkhand",
    districts: ["Bokaro", 
      'Chatra' ,
      'Deoghar' ,
      'Dhanbad' ,
      'Dumka' ,
      'East Singhbum' ,
      'Garhwa' ,
      'Giridih' ,
      'Godda' ,
      'Gumla' ,
      'Hazaribagh', 
      'Jamtara' ,
      'Khunti' ,
      'Koderma' ,
      'Latehar' ,
      'Lohardaga', 
      'Pakur',
      'Palamu' ,
      'Ramgarh' ,
      'Ranchi' ,
      'Sahebganj' ,
      'Saraikela Kharsawan' ,
      'Simdega' ,
      'West Singhbhu'],
  },
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
  {
    state: "Kerala",
    districts: ["Alappuzha",
      "Ernakulam",
      "Idukki" ,
      "Kannur",
      "Kasaragod", 
      "Kollam",
      "Kottayam", 
      "Kozhikode", 
      "Malappuram", 
      "Palakkad",
      "Pathanamthitta", 
      "Thiruvananthapuram", 
      "Thrissur",
      "Wayanad"],
  },
  {
    state:"Ladakh",
    districts:["Leh",
    "Kargil"]
  },
  {
    state: "Madhya Pradesh",
    districts: [ "Agar Malwa",
      "Alirajpur",
      "Anuppur",
      "Ashoknagar",
      "Balaghat",
      "Barwani",
      "Betul",
      "Bhind",
      "Bhopal",
      "Burhanpur",
      "Chhatarpur",
      "Chhindwara",
      "Damoh",
      "Datia",
      "Dewas",
      "Dhar",
      "Dindori",
      "Guna",
      "Gwalior",
      "Harda",
      "Hoshangabad",
      "Indore",
      "Jabalpur",
      "Jhabua",
      "Katni",
      "Khandwa",
      "Khargone",
      "Mandla",
      "Mandsaur",
      "Morena",
      "Narsinghpur",
      "Neemuch",
      "Niwari",
      "Panna",
      "Raisen",
      "Rajgarh",
      "Ratlam",
      "Rewa",
      "Sagar",
      "Satna",
      "Sehore",
      "Seoni",
      "Shahdol",
      "Shajapur",
      "Sheopur",
      "Shivpuri",
      "Sidhi",
      "Singrauli",
      "Tikamgarh",
      "Ujjain",
      "Umaria",
      "Vidisha"],
  },
  {
    state:"Lakshadweep",
    districts:["Lakshadweep"]
  },
  {
    state: "Maharashtra",
    districts: [
      "Ahilyanagar",
      "Akola",
      "Amravati",
      "Beed",
      "Bhandara",
      "Buldhana",
      "Chandrapur",
      "Chhatrapati Sambhajinagar",
      "Dharashiv",
      "Dhule",
      "Gadchiroli",
      "Gondia",
      "Hingoli",
      "Jalgaon",
      "Jalna",
      "Kolhapur",
      "Latur",
      "Mumbai",
      "Mumbai Suburban",
      "Nagpur",
      "Nanded",
      "Nandurbar",
      "Nashik",
      "Palghar",
      "Parbhani",
      "Pune",
      "Raigad",
      "Ratnagiri",
      "Sangli",
      "Satara",
      "Sindhudurg",
      "Solapur",
      "Thane",
      "Wardha",
      "Washim",
      "Yavatmal"
    ]
  },
  
  {
    state: "Manipur",
    districts: [ "Bishnupur",
      "Chandel",
      "Churachandpur",
      "Imphal East",
      "Imphal West",
      "Jiribam",
      "Kakching",
      "Kamjong",
      "Kangpokpi",
      "Noney",
      "Peren",
      "Senapati",
      "Tamenglong",
      "Thoubal",
      "Ukhrul"],
  },
  {
    state: "Meghalaya",
    districts: [ "East Garo Hills",
      "East Jaintia Hills",
      "East Khasi Hills",
      "Eastern West Khasi Hills",
      "North Garo Hills",
      "Ri Bhoi",
      "South Garo Hills",
      "South West Garo Hills",
      "South West Khasi Hills",
      "West Garo Hills",
      "West Jaintia Hills",
      "West Khasi Hills"],
  },
  {
    state: "Mizoram",
    districts: [  "Aizawl",
      "Champhai",
      "Hnahthial",
      "Kolasib",
      "Lawngtlai",
      "Lunglei",
      "Mamit",
      "Saitual",
      "Serchhip",
      "Siaha",
      "Vaihnuai"],
  },
  {
    state: "Nagaland",
    districts: [ "Chumoukedima",
      "Dimapur",
      "Kiphire",
      "Kohima",
      "Longleng",
      "Mokokchung",
      "Mon",
      "Niuland",
      "Noklak",
      "Peren",
      "Phek",
      "Shamator",
      "Tseminyu",
      "Tuensang",
      "Wokha",
      "Zunheboto"],
  },
  {
    state: "Odisha",
    districts: [  "Angul",
      "Balangir",
      "Balasore",
      "Bargarh",
      "Bhadrak",
      "Boudh",
      "Cuttack",
      "Deogarh",
      "Dhenkanal",
      "Gajapati",
      "Ganjam",
      "Jagatsinghpur",
      "Jajpur",
      "Jharsuguda",
      "Kalahandi",
      "Kandhamal",
      "Kendrapara",
      "Kendujhar",
      "Khurda",
      "Koraput",
      "Malkangiri",
      "Mayurbhanj",
      "Nabarangpur",
      "Nayagarh",
      "Nuapada",
      "Puri",
      "Rayagada",
      "Sambalpur",
      "Subarnapur",
      "Sundargarh"],
  },
  {
    state: "Punjab",
    districts: [ "Amritsar",
      "Barnala",
      "Bathinda",
      "Faridkot",
      "Fatehgarh Sahib",
      "Firozpur",
      "Gurdaspur",
      "Hoshiarpur",
      "Jalandhar",
      "Kapurthala",
      "Ludhiana",
      "Mansa",
      "Moga",
      "Muktsar",
      "Nawan Shehr",
      "Patiala",
      "Rupnagar",
      "Sahibzada Ajit Singh Nagar (Mohali)",
      "Sangrur",
      "Tarn Taran"],
  },
  {
    state: "Rajasthan",
    districts: [  "Ajmer",
      "Alwar",
      "Anupgarh",
      "Balotra",
      "Banswara",
      "Baran",
      "Barmer",
      "Beawar",
      "Bharatpur",
      "Bhilwara",
      "Bikaner",
      "Bundi",
      "Chittorgarh",
      "Churu",
      "Dausa",
      "Deeg",
      "Dholpur",
      "Didwana-Kuchaman",
      "Dudu",
      "Dungarpur",
      "Ganganagar",
      "Gangapurcity",
      "Hanumangarh",
      "Jaipur",
      "Jaipur (Gramin)",
      "Jaisalmer",
      "Jalore",
      "Jhalawar",
      "Jhunjhunu",
      "Jodhpur",
      "Jodhpur (Gramin)",
      "Karauli",
      "Kekri",
      "Khairthal-Tijara",
      "Kota",
      "Nagaur",
      "Neem Ka Thana",
      "Pali",
      "Phalodi",
      "Shahpura",
      "Sikar",
      "Sirohi",
      "Tonk",
      "Udaipur",
      "Pratapgarh",
      "Rajsamand",
      "Salumbar",
      "Sanchore",
      "Sawai Madhopur"],
  },
  {
    state: "Sikkim",
    districts: ["Gangtok", "Namchi", "Mangan", "Soreng", "Gyalshing", "Pakyong"],
  },
  {
    state: "Tamil Nadu",
    districts: ["Ariyalur",
      "Chengalpattu",
      "Chennai", 
      "Coimbatore",
      "Cuddalore",
      "Dharmapuri", 
      "Dindigul",  
      "Erode", 
      "Kallakurichi",
      "Kancheepuram",
      "Kanniyakumari", 
      "Karur",
      "Krishnagiri",
      "Madurai",
      "Mayiladuthurai", 
      "Nagapattinam",
      "Namakkal",
      "Perambalur", 
      "Pudukkottai", 
      "Ramanathapuram", 
      "Ranipet",
      "Salem",
      "Sivaganga",
      "Tenkasi",
      "Thanjavur", 
      "The Nilgiris", 
      "Theni", 
      "Thiruvallur", 
      "Thiruvarur", 
      "Thoothukkudi",
      "Tiruchirappalli", 
      "Tirunelveli",
      "Tirupathur", 
      "Tiruppur",
      "Tiruvannamalai", 
      "Vellore",
      "Viluppuram", 
      "Virudhunagar",],
  },
  {
    state: "Telangana",
    districts: [ "Adilabad",
      "Hyderabad",
      "Jagtial",
      "Jangaon",
      "Jayashankar Bhupalapally",
      "Jogulamba Gadwal",
      "Kamareddy",
      "Karimnagar",
      "Khammam",
      "Komaram Bheem Asifabad",
      "Mahabubabad",
      "Mahabubnagar",
      "Mancherial",
      "Medak",
      "Medchal-Malkajgiri",
      "Mulugu",
      "Nagarkurnool",
      "Nalgonda",
      "Nirmal",
      "Nizamabad",
      "Peddapalli",
      "Rajanna Sircilla",
      "Rangareddy",
      "Sangareddy",
      "Siddipet",
      "Suryapet",
      "Vikarabad",
      "Warangal",
      "Warangal (Rural)",
      "Yadadri Bhuvanagiri"],
  },
  {
    state: "Tripura",
    districts: [ "Dhalai",
      "Gomati",
      "Khowai",
      "North Tripura",
      "South Tripura",
      "Unakoti",
      "West Tripura"],
  },
  {
    state: "Uttar Pradesh",
    districts: [  "Agra",
      "Aligarh",
      "Ambedkar Nagar",
      "Amethi",
      "Amroha",
      "Auraiya",
      "Azamgarh",
      "Baghpat",
      "Bahraich",
      "Ballia",
      "Banda",
      "Barabanki",
      "Bareilly",
      "Basti",
      "Bijnor",
      "Bulandshahr",
      "Chandauli",
      "Chitrakoot",
      "Deoria",
      "Etah",
      "Etawah",
      "Faizabad",
      "Farrukhabad",
      "Fatehpur",
      "Firozabad",
      "Gautam Buddha Nagar",
      "Ghaziabad",
      "Ghazipur",
      "Gonda",
      "Gorakhpur",
      "Hamirpur",
      "Hapur",
      "Hardoi",
      "Hathras",
      "Jalaun",
      "Jaunpur",
      "Jhansi",
      "Kannauj",
      "Kanpur Dehat",
      "Kanpur Nagar",
      "Kushinagar",
      "Lakhimpur Kheri",
      "Lalitpur",
      "Lucknow",
      "Mau",
      "Meerut",
      "Mirzapur",
      "Moradabad",
      "Muzaffarnagar",
      "Pilibhit",
      "Pratapgarh",
      "Raebareli",
      "Rampur",
      "Saharanpur",
      "Sant Kabir Nagar",
      "Shahjahanpur",
      "Shamli",
      "Siddharth Nagar",
      "Sitapur",
      "Sonbhadra",
      "Sultanpur",
      "Unnao",
      "Varanasi"],
  },
  {
    state: "Uttarakhand",
    districts: [ "Almora",
      "Bageshwar",
      "Chamoli",
      "Champawat",
      "Dehradun",
      "Haridwar",
      "Nainital",
      "Pauri Garhwal",
      "Pithoragarh",
      "Rudraprayag",
      "Tehri Garhwal",
      "Udham Singh Nagar",
      "Uttarkashi"],
  },
  {
    state: "West Bengal",
    districts: ["Alipurduar",
    "Bankura",
    "Birbhum",
    "Cooch Behar",
    "Dakshin Dinajpur",
    "Darjeeling",
    "Hooghly",
    "Howrah",
    "Jalpaiguri",
    "Jhargram",
    "Kolkata",
    "Malda",
    "Murshidabad",
    "Nadia",
    "North 24 Parganas",
    "Paschim Bardhaman",
    "Paschim Medinipur",
    "Purba Bardhaman",
    "Purba Medinipur",
    "Purulia",
    "South 24 Parganas",
    "Uttar Dinajpur"],
  },
  {
    state: "Andaman and Nicobar Islands",
    districts: ["Port Blair", "Nicobar", "Car Nicobar", "Little Andaman"],
  },
  {
    state: "Chandigarh",
    districts: ["Chandigarh"],
  },
  {
    state: "Dadra and Nagar Haveli and Daman and Diu",
    districts: ["Daman", "Diu", "Silvassa"],
  },

  {
    state: "Delhi",
    districts: ["Central",
      "East",
     " New Delhi ",
      "North",
      "North East ",
      "North West ",
      "Shahdara" ,
      "South" ,
     " South East ",
      "South West" ,
      "West"],
  },
  {
    state: "Puducherry",
    districts: ["Puducherry", "Karaikal", ],
  },
];

const TwoWheeler = () => {
  const navigate = useNavigate();
  const location = useLocation();


  const [openIndex, setOpenIndex] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
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
  const [applyingfor, setApplyingFor] = useState("");
  const [pincode, setPincode] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [selectedState, setSelectedState] = useState("");

  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const [showOtpSection, setShowOtpSection] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const openPopup = () => {
    setShowPopup(true);
    navigate("/two-wheeler-insurance-info"); 
  };

 useLayoutEffect(() => {
     document.documentElement.scrollTop = 0;
     document.body.scrollTop = 0;
   }, []);

  const handleGoHome = () => {
    navigate("/"); 
  };

  
  const closePopup = () => {
    setShowPopup(false);
    navigate("/two-wheeler-insurance"); 
    setCurrentStep(1);
    setIsCompleted(false);
  };

  React.useEffect(() => {
  
    if (location.pathname === "/two-wheeler-insurance-info") {
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  }, [location.pathname]);

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };
  const [policyOption, setPolicyOption] = useState("");
  const [policyOptionError, setPolicyOptionError] = useState("");

  const [registrationNumber, setRegistrationNumber] = useState("");
  const [registrationNumberError, setRegistrationNumberError] = useState("");
  const handlePincodeChange = (e) => {
    const value = e.target.value;

 
    if (/^\d{0,6}$/.test(value)) {
      setPincode(value);
      setPincodeError(""); 
    } else {
      setPincodeError("Pin Code must be a 6-digit number.");
    }
  };
  const handleBlur = () => {
    if (pincode.length !== 6) {
      setPincodeError("Pin Code must be exactly 6 digits.");
    }
  };
  const [registrationDate, setRegistrationDate] = useState("");
  const [registrationDateError, setRegistrationDateError] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [mobileNumberError, setMobileNumberError] = useState("");
  const [emailIdError, setEmailIdError] = useState("");
  const [villageTownCityError, setVillageTownCityError] = useState("");
  const [selectedStateError, setSelectedStateError] = useState("");
  const [selectedDistrictError, setSelectedDistrictError] = useState("");
  const [pincodError, setPincodeError] = useState("");

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setSelectedDistrict("");
    setSelectedStateError("");
    setSelectedDistrictError("");
  };
  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
    setSelectedDistrictError("");
  };
  const handleEmailIdChange = (e) => setEmailId(e.target.value);
  const handleVillageTownCityChange = (e) => setVillageTownCity(e.target.value);
  const handleApplyingFor = (e) => setApplyingFor(e.target.value);
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
  const getMaskedMobileNumber = (number) => {
    if (!number || number.length < 3) return "";
    const firstTwo = number.slice(0, 2);
    const lastDigit = number.slice(-1);
    const masked = `${firstTwo}******${lastDigit}`;
    return masked;
  };


  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

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
        setResendCountdown();
        alert("OTP resent successfully!");
      } else {
        alert(response.data.message || "Error resending OTP.");
      }
    } catch (error) {
      console.error("Error resending OTP:", error);
      
    } finally {
      setIsResending(false); 
    }
  };

  React.useEffect(() => {
    if (resendCountdown > 0) {
      const timer = setInterval(
        () => setResendCountdown(resendCountdown - 1),
        1000
      );
      return () => clearInterval(timer);
    }
  }, [resendCountdown]);

  
  const validateForm = () => {
    let isValid = true;

  
    if (currentStep === 1) {
      if (!policyOption) {
        setPolicyOptionError("Please select an option");
        isValid = false;
      } else {
        setPolicyOptionError("");
      }
    }

  
    if (currentStep === 2) {
      if (!registrationNumber) {
        setRegistrationNumberError("Please enter registration number");

        isValid = false;
      } else {
        setRegistrationNumberError("");
      }

      if (!registrationDate) {
        setRegistrationDateError("Please enter registration date");
        isValid = false;
      } else {
        setRegistrationDateError("");
      }
    }

    
    if (currentStep === 3) {
      if (!fullName) {
        setFullNameError("Please enter your name");
        isValid = false;
      } else {
        setFullNameError("");
      }

      if (!mobileNumber) {
        setMobileNumberError("Please enter your mobile number");
        isValid = false;
      } else if (!/^[0-9]{10}$/.test(mobileNumber)) {
        setMobileNumberError("Please enter a valid 10-digit mobile number");
        isValid = false;
      } else {
        setMobileNumberError("");
      }

      if (!emailId) {
        setEmailIdError("Please enter your email ID");
        isValid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailId)) {
        setEmailIdError("Please enter a valid email address");
        isValid = false;
      } else {
        setEmailIdError("");
      }

      if (!villageTownCity) {
        setVillageTownCityError("Please enter your address");
        isValid = false;
      } else {
        setVillageTownCityError("");
      }

      if (!selectedState) {
        setSelectedStateError("Please select a state");
        isValid = false;
      } else {
        setSelectedStateError("");
      }

      if (!selectedDistrict) {
        setSelectedDistrictError("Please select a district");
        isValid = false;
      } else {
        setSelectedDistrictError("");
      }
      if (!pincode) {
        setPincodeError("Please enter the Pincode");
        isValid = false;
      } else if (!/^[0-9]{6}$/.test(pincode)) {
      
        setPincodeError("Please enter a valid 6-digit Pincode");
        isValid = false;
      } else {
        setPincodeError("");
      }
    }

    return isValid;
  };

  const selectedStateData = stateData.find(
    (stateObj) => stateObj.state === selectedState
  );
  const districts = selectedStateData ? selectedStateData.districts : [];



  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

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

      if (index > 0) {
        document.getElementById(`otp-input-${index - 1}`).focus();
      }
    }
  };

  const [otpSent, setOtpSent] = useState(false); 

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
         
          setOtpSent(true);
          setResendCountdown(30); 
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
      setOtpSent(false); 
    }
  }, [resendCountdown, otpSent]);



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
         
          setShowOtpSection(false); 
          finishSubmission();

      
          await sendMessage(formattedNumber);
        } else {
          alert(response.data.message || "Error verifying OTP.");
        }
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);

    }
  };


  const sendMessage = async (formattedNumber, name) => {
    try {
      const payload = {
        mobile: formattedNumber,
        name: fullName  
      };
  console.log('name', fullName)
      const response = await axios.post(
        "https://api.makemydocuments.com/api/send-sms",
        payload
      );
  
      if (response.status === 200) {
        console.log("Message sent successfully:", response.data);
      } else {
        console.error("Error sending message:", response.data);
      }
    } catch (error) {
      console.error("Error while sending message:", error);
      alert("An error occurred while sending the message. Please try again.");
    }
  };

  const [isResending, setIsResending] = useState(false);
 



  const [selectedDistrict, setSelectedDistrict] = useState("");
  const finishSubmission = () => {
    submitDataToAPI();
    if (mobileNumber) {
      setMaskedNumber(getMaskedMobileNumber(mobileNumber));
    }
    setIsCompleted(true);
  };
  const submitDataToAPI = async () => {
    const data = {
      name: fullName || "",
      applying_for: policyOption || "",
      registrationDate: registrationDate || "",
      registrationNumber : registrationNumber || "",
      mobilenumber: mobileNumber || "",
      email: emailId || "",
      address: villageTownCity || "",
      district: selectedDistrict || "",
      dob: dob || "",
      date: date && date !== "0000-00-00" ? date : new Date().toISOString().split("T")[0],
      paidamount: "0.00",
      gender: selectedGender || "",
      pincode: pincode || "",
      adharnumber: aadharNumber || "",
      pancard: "",
      time: time && time !== "00:00:00" ? time : new Date().toLocaleTimeString("en-US", { hour12: false }),
      comment: "",
      status: "",
      service: "TwoWheeler Insurance",
    
      village: villageTownCity || "",
      state : selectedState || "",
    
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
      if (response.data.success) {
        alert("Details saved successfully!");
      } else {
      }
    } catch (error) {
      console.error("Error while saving data:", error);
      alert("An error occurred while saving your details. Please try again.");
    }
  };

  const faqs = [
    {
      question: " How many types of two-wheeler insurance are available in India?",
      answer:
        " There are mainly two types of bike insurance – Third-Party Liability Insurance (mandatory by law) and Comprehensive Insurance (covers both own damage and third-party liabilities). Some insurers also offer Multi-Year Insurance for added convenience.",
    },
    {
      question: "What is the difference between comprehensive and third-party bike insurance?",
answer: (
  <div>
    <p>Third-Party Insurance covers damages to another person, vehicle, or property but not your own bike.</p>
    <p>Comprehensive Insurance covers both third-party liabilities and own damage (accident, theft, fire, or natural disasters).</p>
  </div>
)

    },
    {
      question:
        "What is IDV in bike insurance?",
      answer:
        "IDV stands for Insured Declared Value. It is the maximum amount your insurer will pay if your two-wheeler is stolen or completely damaged. Higher IDV means better coverage but slightly higher premiums.",
    },
    {
      question: "What is not covered under two-wheeler insurance?",
answer: (
  <div>
    <p>Common exclusions include:</p>
    <ul>
    <li>Riding without a valid driving license</li>
    <li>Drunk driving accidents</li>
    <li>Mechanical/electrical breakdowns</li>
    <li>Wear and tear of parts</li>
    <li>Using the bike for illegal activities</li>
    </ul>
  </div>
)

    },
    {
      question: "What is Multi-Year Two-Wheeler Insurance?",
      answer:
        "Multi-Year Insurance allows you to buy coverage for 2–3 years at once, protecting you from annual premium hikes and avoiding the hassle of yearly renewals.",
    },
    {
      question:
        "What happens if my two-wheeler insurance policy expires?",
      answer:
        " If your bike insurance is not renewed on time, your vehicle becomes uninsured and illegal to drive. You may face penalties, and you’ll also lose protection against theft or accidents. Renewal after expiry often requires a vehicle inspection.",
    },
    {
      question: "How can I make a bike insurance claim online?",
    answer: (
  <div>
    <p>To file a claim:</p>
    <ul>
    
    <li>Inform your insurer immediately.</li>
    <li>Submit necessary documents (RC, policy details, claim form, photos of damage).</li>
    <li>Get inspection done (if required).</li>
    <li>Once approved, claims are settled directly with the garage (cashless) or reimbursed to you.</li>
    </ul>
  </div>
) 
    
    },
  
    {
      question:
        "Is it better to buy two-wheeler insurance online or offline?",
      answer:
        "Buying insurance online is faster, cheaper, and more transparent. You can compare policies instantly, get the best premium, and download your policy immediately. Offline agents often charge extra and involve more paperwork.",
    },
    {
      question: "What are the documents which would be required for making a successful claim",
      answer:
        "To make a successful claim you should submit your driving license, RC book of the bike, insurance document and claim form. In case of third party claim or if the bike is stolen, police FIR is also required.",
    },
    {
      question: "What would happen if the policy is not renewed on time?",
      answer:
        "If the policy is not renewed before the current plan expires, coverage would lapse. In a lapsed policy, no claim is admissible. On renewing the plan after a lapse, inspection of the bike would be required which would be time-consuming. Premiums might also increase for renewals of a lapsed policy. Moreover, if the policy is not renewed within 90 days of lapse, the accumulated no claim bonus is lost.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <Helmet>
    <title>Two Wheeler Insurance - Buy/Renew Bike Insurance Policy Online</title>
 <meta name="description" content="click here to get two wheeler insurance instantly,comprehensive or thrid party, no paper work, no inspection and instant policy download, complete online process."/>
<meta name="keywords" content=" two wheeler insurance, bike insurance, long term bike insurance online, long term two wheeler insurance, online motorcycle insurance,
2 wheeler insurance, bike insurance renewal, scooter insurance, sooty insurance,two wheeler insurance renewal, motorcycle bike insurance, bike insurance online,
two wheeler insurance online, bike insurance renewal online, how to get bike insurance online, how to apply bike insurance online "/>
<meta name="author" content="https://www.makemydocuments.com/two-wheeler-insurance"/>
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
    <div
     style={{overflow:'hidden'}} 
    >
    
      <div
  className="row justify-content-start align-items-center insurance-container"
  style={{
    minHeight: "60vh",
    paddingTop: "20px",
    background: "linear-gradient(182.42deg, #FCA505 2.01%, #FFFFFF)",
  }}
>
 
  <div className="col-12 col-md-6 text-left">
    <div className="text-content rotate-on-hover">
      <h1>Protect Your Two-Wheeler with Ease</h1>
      <p style={{ fontWeight: "500" }}>
        Insurance applications made simple and stress-free.
      </p>
    </div>
    <img
      src={checklistIcon}
      alt="Checklist Icon"
      className=" checklist-icon d-none d-lg-none"
      style={{maxWidth:'293px', marginTop:'24%'}}
    />
  </div>

 
  <div className="col-12 col-md-6 text-center">
    <img
      src={vehiclesIcon}
      alt="Vehicles and Phone"
      className="img-fluid vehicles-icon"
    />
  </div>
</div>


   
      <div
        className="content-section"
        style={{
          backgroundColor: "#fffff",
          padding: "30px 15px",
          borderRadius: "10px",
          margin: "-2% auto",
          marginRight: "72%",
        }}
      >
        <div className="row justify-content-center">
     
          <div className="d-none d-lg-block col-12 col-md-8 position-relative">
         
            <div className="text-center mb-5">
              <div style={{ position: "relative" }}>
                <img
                  src={circleIcon}
                  alt="Circle Background"
                  className="img-fluid"
                />
                <img
                  src={documentsIcon}
                  alt="Documents Icon"
                  style={{
                    position: "absolute",
                    top: "68%",
                    left: "50%",
                    justifyContent: "center",
                    alignItems: "center",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>
            </div>

            <div
              style={{
                borderLeft: "3px solid #007BFF",
                height: "100%",
             
                width: "4px",
                marginTop: "-32%",
                marginLeft: "50%",
              }}
            ></div>

            <div className="text-center mb-5" style={{marginTop:'-22%'}}>
              <div style={{ position: "relative" }}>
                <img
                  src={circleIcon}
                  alt="Circle Background"
                  className="img-fluid"
                />
                <img
                  src={howIcon}
                  alt="How It Works Icon"
                  style={{
                    position: "absolute",
                    top: "68%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>
            </div>

            {/* Blue Line */}
            <div
              style={{
                borderLeft: "3px solid #007BFF",
                height: "110%",
                // margin: '0 auto',
                marginLeft: "49.8%",
                marginTop: "-32%",
                width: "4px",
              }}
            ></div>

            {/* Third Section */}
            <div className="text-center">
              <div style={{ position: "relative" }}>
                <img
                  src={thirdImage}
                  alt="Third Section Icon"
                  style={{
                    position: "absolute",
                    top: "60%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="d-none d-lg-block">
          <div
            className="desktop-document mb-5"
           
          >
            <h4 className="text-document"
            >
              Documents Required For Two-Wheeler Insurance
            </h4>
            <ul  className="text-ul"
              style={{
                listStyleType: "disc",
                
                fontSize: "bold",
              }}
            >
              <li style={{ padding: "0px", marginBottom: "0px" }}>
                Registration Copy
              </li>
              <li style={{ padding: "0px", marginBottom: "0px" }}>
                Old Policy Details If It's Renew
              </li>
            </ul>
          </div>

          {/* How It Works Section */}
          <div  className="desktop-how mb-5" >
            <h4  className="text-how"
            
            >
              How It Works
            </h4>
            <ul className="text-ul"
              style={{
                listStyleType: "disc",
               
              }}
            >
              <li style={{ padding: "0px", marginBottom: "0px" }}>
                Register Online
              </li>
              <li style={{ padding: "0px", marginBottom: "0px" }}>
                Get Quotation Via E-mail / WhatsApp
              </li>
              <li style={{ padding: "0px", marginBottom: "0px" }}>
                Compare Policies
              </li>
              <li style={{ padding: "0px", marginBottom: "0px" }}>
                Make Payment
              </li>
              <li style={{ padding: "0px", marginBottom: "0px" }}>
                Download Your Policy Instantly
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="d-block d-lg-none" style={{marginTop:'-16%'}}>
  {/* First Row: Documents Section */}
  <div className="row align-items-center mb-5">
    <div className="col-3 text-center">
      {/* First Icon */}
      <div className="icon-section position-relative">
        <img src={circleIcon} alt="Circle Background" className="img-fluid-circle" />
        <img
          src={documentsIcon}
          alt="Documents Icon"
          className="position-absolute top-50 start-50 translate-middle overlay-icon"
        />
      </div>
    </div>
    <div className="col-9">
      {/* Documents Content */}
      <div className="desktop-document" style={{marginTop:'1%'}}>
        <h4 className="text-document" style={{textAlign:'left', fontSize:'14px', marginBottom:'10px'}}>
          Documents Required For <br/>Two-Wheeler Insurance
        </h4>
        
        <ul className="text-ul list-unstyled" style={{textAlign:'left', fontSize:'12px',listStyleType: "disc",}}>
          <li>Registration Copy</li>
          <li>Old Policy Details If It's Renew</li>
        </ul>
      </div>
    </div>
  </div>

  {/* Second Row: How It Works Section */}
  <div className="row align-items-center" style={{marginTop:'-31%'}}>
    <div className="col-3 text-center">
      {/* Second Icon */}
      <div className="icon-section position-relative">
        <img src={circleIcon} alt="Circle Background" className="img-fluid-circle" />
        <img
          src={howIcon}
          alt="How It Works Icon"
          className="position-absolute top-50 start-50 translate-middle overlay-icon"
        />
      </div>
    </div>
    <div className="col-9">
      {/* How It Works Content */}
      <div className="desktop-how" style={{marginTop:'1%'}}>
        <h4 className="text-how" style={{textAlign:'left', fontSize:'14px', marginTop:'41%'}}>How It Works</h4>
        <ul className="text-ul list-unstyled" style={{textAlign:'left', fontSize:'12px',listStyleType: "disc",}}>
          <li>Register Online</li>
          <li>Get Quotation Via E-mail <br/>/ WhatsApp</li>
          <li>Compare Policies</li>
          <li>Make Payment</li>
          <li>Download Your Policy Instantly</li>
        </ul>
      </div>
    </div>
  </div>
</div>
      <div>
        {/* Get Quotes Button */}
        {/* <div style={{ textAlign: "center", marginTop: "-10%" }}>
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
            Get Quotes
          </button>
        </div> */}

<div className="get-quotes-button">
  <button  className="button-static" onClick={openPopup}>
    Get Quotes
  </button>
</div>


        {/* Modal Popup */}
        {showPopup && (
          <div className="popupstyle-twowheeler"
            style={{
              position: "fixed",
              top: "100px",
              left: "0",
              width: "100%",
              height: "86%",
              // backgroundColor: "rgba(26, 118, 216, 0.9)",
              backgroundColor: "#126ece",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: "9999",
            }}
          >
            <div className="popup-twowheeler"
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
                  <div className="stepper-clearance"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "30px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        flex: 1,
                      }}
                    >
                      <div
                        style={{
                          width: "50px",
                          height: "50px",
                          backgroundColor:
                            currentStep >= 1 ? "#4285F4" : "#ccc",
                          color: "white",
                          borderRadius: "50%",
                          lineHeight: "60px",
                          fontWeight: "bold",
                        }}
                      >
                        1
                      </div>
                      {/* <span style={{ marginTop: "10px", fontSize: "16px" }}>Step 1</span> */}
                    </div>
                    <div
                      style={{
                        height: "2px",
                        flex: 1,
                        backgroundColor: currentStep >= 2 ? "#4285F4" : "#ccc",
                        alignSelf: "center",
                      }}
                    ></div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        flex: 1,
                      }}
                    >
                      <div
                        style={{
                          width: "50px",
                          height: "50px",
                          backgroundColor:
                            currentStep >= 2 ? "#4285F4" : "#ccc",
                          color: "white",
                          borderRadius: "50%",
                          lineHeight: "50px",
                          fontWeight: "bold",
                        }}
                      >
                        2
                      </div>
                      {/* <span style={{ marginTop: "10px", fontSize: "16px" }}>Step 2</span> */}
                    </div>
                    <div
                      style={{
                        height: "2px",
                        flex: 1,
                        backgroundColor: currentStep >= 3 ? "#4285F4" : "#ccc",
                        alignSelf: "center",
                      }}
                    ></div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        flex: 1,
                      }}
                    >
                      <div
                        style={{
                          width: "50px",
                          height: "50px",
                          backgroundColor:
                            currentStep === 3 ? "#4285F4" : "#ccc",
                          color: "white",
                          borderRadius: "50%",
                          lineHeight: "50px",
                          fontWeight: "bold",
                        }}
                      >
                        3
                      </div>
                      {/* <span style={{ marginTop: "10px", fontSize: "16px" }}>Step 3</span> */}
                    </div>
                  </div>

                  {/* Popup Content Based on Step */}
                  <div style={{ marginBottom: "20px" }}>
                    {currentStep === 1 && (
                      <div style={{ textAlign: "center" }}>
                        <p style={{ fontWeight: "600" }}>
                          Buy / Renew bike insurance without inspection or
                          paperwork
                        </p>

                        <h4 style={{ color: "#007BFF", fontWeight: "bold" }}>
                          I Want to
                          <span style={{ color: "red" }}>*</span>
                        </h4>

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
                              name="policyOption"
                              value="buyNewPolicy"
                              checked={policyOption === "buyNewPolicy"}
                              onChange={(e) => setPolicyOption(e.target.value)}
                              style={{ marginRight: "10px" }}
                            />
                            Buy New Policy
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
                              name="policyOption"
                              value="renewExistingPolicy"
                              checked={policyOption === "renewExistingPolicy"}
                              onChange={(e) => setPolicyOption(e.target.value)}
                              style={{ marginRight: "10px" }}
                            />
                            Renew Existing Policy
                          </label>
                        </div>
                        {policyOptionError && (
                          <p
                            style={{
                              color: "red",
                              fontSize: "14px",
                              textAlign: "left",
                            }}
                          >
                            {policyOptionError}
                          </p>
                        )}
                      </div>
                    )}

                    {currentStep === 2 && (
                      <div style={{ textAlign: "center" }}>
                        {/* Step 2 Heading */}
                        <p>Buy Insurance, the smart way</p>

                        {/* Subheading */}
                        <h3
                          style={{
                            color: "#007BFF",
                            fontWeight: "600",
                            margin: "20px 0",
                          }}
                        >
                          Enter Your Bike Details
                        </h3>

                        {/* Registration Input */}
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="registrationNumber"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Registration Number
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            id="registrationNumber"
                            // onChange={handleRegistrationNumberChange}
                            value={registrationNumber}
                            placeholder="Enter Registration Number"
                            style={{
                              width: "100%",
                              padding: "10px",
                              fontSize: "16px",
                              border: "1px solid #ccc",
                              borderRadius: "4px",
                            }}
                            onChange={(e) =>
                              setRegistrationNumber(e.target.value)
                            }
                          />
                          {registrationNumberError && (
                            <p
                              style={{
                                color: "red",
                                fontSize: "14px",
                                textAlign: "left",
                              }}
                            >
                              {registrationNumberError}
                            </p>
                          )}
                        </div>

                        {/* Registration Date Input */}
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="registrationDate"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Registration Date
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="date"
                            id="registrationDate"
                            value={registrationDate}
                            style={{
                              width: "100%",
                              padding: "10px",
                              fontSize: "16px",
                              border: "1px solid #ccc",
                              borderRadius: "4px",
                            }}
                            onChange={(e) =>
                              setRegistrationDate(e.target.value)
                            }
                          />
                          {registrationDateError && (
                            <p
                              style={{
                                color: "red",
                                fontSize: "14px",
                                textAlign: "left",
                              }}
                            >
                              {registrationDateError}
                            </p>
                          )}
                        </div>
                      </div>
                    )}

                    {currentStep === 3 && (
                      <div style={{ textAlign: "center" }}>
                        <p>Buy Insurance, the smart way</p>

                        <h3
                          style={{
                            color: "#007BFF",
                            fontWeight: "600",
                            margin: "20px 0",
                          }}
                        >
                          Contact Details
                        </h3>

                        {/* Form Fields */}
                        {/* Name */}
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="name"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Name<span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            value={fullName}
                            onChange={handleFullNameChange}
                            placeholder="Enter Your Name"
                            style={{
                              width: "100%",
                              height: "45px",
                              padding: "10px",
                              fontSize: "16px",
                              border: "1px solid #ccc",
                              borderRadius: "4px",
                            }}
                          />
                        </div>
                        {fullNameError && (
                          <p
                            style={{
                              color: "red",
                              fontSize: "14px",
                              textAlign: "left",
                            }}
                          >
                            {fullNameError}
                          </p>
                        )}

                        {/* Mobile Number */}
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="mobileNumber"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Mobile Number<span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="number"
                            id="mobileNumber"
                            value={mobileNumber}
                            onChange={handleMobileNumberChange}
                            placeholder="Enter Your Mobile Number"
                            style={{
                              width: "100%",
                              height: "45px",
                              padding: "10px",
                              fontSize: "16px",
                              border: "1px solid #ccc",
                              borderRadius: "4px",
                            }}
                          />
                        </div>
                        {mobileNumberError && (
                          <p
                            style={{
                              color: "red",
                              fontSize: "14px",
                              textAlign: "left",
                            }}
                          >
                            {mobileNumberError}
                          </p>
                        )}

                        {/* Email ID */}
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="email"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Email ID<span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            value={emailId}
                            onChange={handleEmailIdChange}
                            placeholder="Enter Your Email ID"
                            style={{
                              width: "100%",
                              height: "45px",
                              padding: "10px",
                              fontSize: "16px",
                              border: "1px solid #ccc",
                              borderRadius: "4px",
                            }}
                          />
                        </div>
                        {emailIdError && (
                          <p
                            style={{
                              color: "red",
                              fontSize: "14px",
                              textAlign: "left",
                            }}
                          >
                            {emailIdError}
                          </p>
                        )}

                        {/* Address */}
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="address"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Address<span style={{ color: "red" }}>*</span>
                          </label>
                          <textarea
                            id="address"
                            value={villageTownCity}
                            onChange={handleVillageTownCityChange}
                            placeholder="Enter Your Address"
                            style={{
                              width: "100%",
                              height: "70px",
                              padding: "10px",
                              fontSize: "16px",
                              border: "1px solid #ccc",
                              borderRadius: "4px",
                            }}
                          />
                        </div>
                        {villageTownCityError && (
                          <p
                            style={{
                              color: "red",
                              fontSize: "14px",
                              textAlign: "left",
                            }}
                          >
                            {villageTownCityError}
                          </p>
                        )}

                        <div>
                          {/* State Dropdown */}
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
                          {selectedStateError && (
                            <p
                              style={{
                                color: "red",
                                fontSize: "14px",
                                textAlign: "left",
                              }}
                            >
                              {selectedStateError}
                            </p>
                          )}

                          {/* District Dropdown */}
                          {selectedState && (
                            <div
                              style={{
                                marginBottom: "20px",
                                textAlign: "left",
                              }}
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
                                  border: "1px solid #ccc",
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
                        </div>
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
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
                            id="pincode"
                            placeholder="Enter Pin Code"
                            value={pincode}
                            onChange={handlePincodeChange}
                            onBlur={handleBlur}
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

                        {pincodError && (
                          <p
                            style={{
                              color: "red",
                              fontSize: "14px",
                              textAlign: "left",
                            }}
                          >
                            {pincodError}
                          </p>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Stepper Navigation */}
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

                    {currentStep < 3 ? (
                      // <button
                      //   onClick={() => {
                      //     if (!validateForm()) {
                      //       setError("Please fill all required fields.");
                      //       return;
                      //     }

                      //     nextStep();
                      //   }}
                      //   className="next-insurance-button"
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
  <button
    onClick={() => {
      if (!validateForm()) {
        setError("Please fill all required fields.");
        return;
      }

      nextStep();
    }}
    className="next-insurance-button"
  >
    Next
  </button>
</div>

                    ) : (
                      // <button
                      //   onClick={() => {
                      //     if (!validateForm()) {
                      //       setError("Please fill all required fields.");
                      //       return;
                      //     }

                      //     handleSendOtp();
                      //     setShowOtpSection(true);  
                      //     setError(""); 
                      //     setIsCompleted(true)
                      //   }}
                      //   style={{
                      //     padding: "10px 20px",
                      //     backgroundColor: "#FCA505", // Corrected the color code to include #
                      //     color: "#000000",
                      //     border: "none",
                      //     borderRadius: "5px",
                      //     cursor: "pointer",
                      //   }}
                      // >
                      //   SUBMIT
                      // </button>
                      <div className="submit-button-container">
                        <br/>
  <button
    onClick={() => {
      if (!validateForm()) {
        setError("Please fill all required fields.");
        return;
      }

      handleSendOtp();
      setShowOtpSection(true);
      setError("");
      setIsCompleted(true);
    }}
    className="submit-insurance-button"
  >
    SUBMIT
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
                        style={{
                          backgroundColor: "#FFA500",
                          color: "#000",
                          border: "none",
                          borderRadius: "5px",
                          padding: "10px 20px",
                          fontSize: "16px",
                          cursor: "pointer",
                        }}
                      >
                        VERIFY
                      </button>
                    </div>
                  ) : (
                    <div style={{ marginTop: "20px", textAlign: "center" }}>
      {/* Success Message with Checkmark */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            display: "inline-block",
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            backgroundColor: "#28a745",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            animation: "circleAnimation 1s ease-in-out",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20 6L9 17l-5-5"
            />
          </svg>
        </div>
      </div>
      <br />
      <p style={{ fontSize: "30px" }}> Thank You!</p>

      <p>Your request has been Submitted.</p>
      <p>
        We appreciate your interest and will get back to you as soon as possible.
      </p>

      {/* Back to Home Button */}
      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={handleGoHome}
      >
        Back to Home
      </button>
    </div>
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



<br />
<br />




      <div
        className="py-0"
        style={{ padding: "0", width: "77%", margin: "0 auto" }}
      >
        <h3 className="faq-tag-title-h3">
          <strong>Protect Your Two-Wheeler with Ease – Simple & Stress-Free Insurance Services</strong>
        </h3>
        <p style={{ textAlign: "left" }}>
          Owning a two-wheeler gives you the freedom to ride anywhere, anytime. But with that freedom comes responsibility—keeping your bike legally protected and financially secure. Two-wheeler insurance is not just a legal requirement in India; it’s your safety net against accidents, theft, damages, and third-party liabilities.
        </p>
<p style={{ textAlign: "left" }}>
         At Make My Documents, we make two-wheeler insurance applications simple, fast, and hassle-free. With our 100% online services, you can compare policies, get instant quotes, and download your policy—all from the comfort of your home. 
        </p>
        <h5 style={{ textAlign: "left" }}>
          <strong>Documents Required for Two-Wheeler Insurance</strong>
        </h5>
        <p style={{ textAlign: "left" }}>
         To apply or renew your bike insurance, you’ll need:
        </p>

        <ul
          style={{
            textAlign: "left",
            paddingLeft: "18px",
            listStyleType: "disc",
          }}
        >
          <li>Registration Copy (RC) of your two-wheeler</li>
          <li> Old Policy Details (only if you are renewing)</li>
   
        </ul>
<p style={{ textAlign: "left" }}>
         That’s it! With these simple documents, our team will help you secure the right policy without confusion or delays.
        </p>
        <h5 style={{ textAlign: "left" }}>
          <strong>How It Works with Make My Documents</strong>
        </h5>
        <p style={{ textAlign: "left" }}>
        Our process is designed to be transparent, quick, and stress-free:
        </p>
  <ul
          style={{
            textAlign: "left",
            paddingLeft: "18px",
            listStyleType: "disc",
          }}
        >
          <li><strong>Register Online – </strong>Enter your basic details on our website.</li>
          <li><strong>Get Quotation via Email/WhatsApp – </strong>Receive instant quotes from top insurers. </li>
          <li> <strong>Compare Policies –</strong> Choose the best plan that fits your budget and needs.</li>
         <li> <strong>Make Payment –</strong> Pay securely online.</li>
         <li> <strong>Download Your Policy Instantly –</strong> No waiting, no delays—get your e-policy instantly. </li>
        </ul>




        <h5 style={{ textAlign: "left" }}>
          <strong>Why Buy Two-Wheeler Insurance Online?</strong>
        </h5>

         <p style={{ textAlign: "left" }}>
        Buying your bike insurance online with Make My Document comes with several benefits:
        </p>
        <ul
          style={{
            textAlign: "left",
            paddingLeft: "18px",
            listStyleType: "disc",
          }}
        >
          <li><strong>Instant Comparison –</strong> View multiple policy options at once.</li>
          <li><strong>Best Premium Rates –</strong> Save money with competitive quotes.</li>
          <li><strong>Paperless Process –</strong> No physical visits, no long forms.</li>
          <li><strong>24/7 Support –</strong> We’re always available to guide you.</li>
          <li><strong>Instant Policy Download –</strong> Ride worry-free without waiting for documents.</li> 
      
        </ul>
        <h5 style={{ textAlign: "left" }}>
          <strong> Types of Two-Wheeler Insurance</strong>
        </h5>
        <p style={{ textAlign: "left" }}>
        When choosing an insurance plan, it’s important to know your options:
        </p>

         <ul
          style={{
            textAlign: "left",
            paddingLeft: "18px",
            listStyleType: "disc",
          }}
        >
          <li><strong>Third-Party Liability Insurance –</strong>Mandatory by law, it covers damages caused to another person, vehicle, or property.</li>
          <li><strong>Comprehensive Insurance –</strong>Provides complete coverage, including damage to your own two-wheeler, theft, fire, natural calamities, and third-party liabilities.</li>
          <li><strong>Multi-Year Insurance –</strong> Save time and money by buying coverage for multiple years in one go.</li>
         
        </ul>

           <h5 style={{ textAlign: "left" }}>
          <strong>Why Choose to Make My Documents?</strong>
        </h5>
        <p style={{ textAlign: "left" }}>
       There are plenty of agents and websites out there, but here’s why thousands trust Make My Document:
        </p>
           <ul
          style={{
            textAlign: "left",
            paddingLeft: "18px",
            listStyleType: "disc",
          }}
        >
          <li>Transparent pricing with no hidden charges</li>
          <li>Fast and 100% online process</li>
          <li>Wide range of insurers to compare</li>
          <li>Expert guidance at every step</li>
         <li>Hassle-free claim support when needed</li>
        </ul>
         <p style={{ textAlign: "left" }}>
       With us, protecting your two-wheeler is easier than ever.
        </p>

        <h5 style={{ textAlign: "left" }}>
          <strong>Your Bike Insurance Today</strong>
        </h5>
        <p style={{ textAlign: "left" }}>
       Don’t wait until your policy expires or an unexpected accident occurs. Secure your two-wheeler today with Make My Documents and enjoy stress-free rides knowing you’re protected.
        </p>
      </div>






      {/* FAQ Section */}
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
      </div>
      <br/>
    </div>

    
      <br />
    
  </>
  );
};

export default TwoWheeler;
