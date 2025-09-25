import React, { useState, useEffect } from "react";
import Image30 from "../../images/pancard_image.svg";
import circleIcon from "../../images/circle1.svg";
import documentsIcon from "../../images/documents.svg";
import TimeIcon from "../../images/Time.svg";
import { useLayoutEffect } from "react";
import Price from "../../images/Price Tag.svg";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios";
import "../pancard/pancard.css";
import { ArrowLeft } from "lucide-react";
import howIcon from "../../../src/images/how.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const stateData = [
  {
    state: "Arunachal Pradesh",
    districts: [
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
      "West Siang",
    ],
  },
  {
    state: "Andhra Pradesh",
    districts: [
      "Alluri Sitharama Raju",
      "Anakapalli",
      "Ananthapuramu",
      "Annamayya",
      "Bapatla",
      "Chittoor",
      "Dr. B.R. Ambedkar Konaseema",
      "East Godavari",
      "Eluru",
      "Guntur",
      "Kakinada",
      "Krishna",
      "Kurnool",
      "Nandyal",
      "Ntr",
      "Palnadu",
      "Parvathipuram Manyam",
      "Prakasam",
      "Sri Potti Sriramulu Nellore",
      "Sri Sathya Sai",
      "Srikakulam",
      "Tirupati",
      "Visakhapatnam",
      "Vizianagaram",
      "West Godavari",
      "Y.S.R.",
    ],
  },
  {
    state: "Arunachal Pradesh",
    districts: [
      "Anjaw",
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
      "West Siang",
    ],
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
      "West Karbi Anglong",
    ],
  },
  {
    state: "Bihar",
    districts: [
      "Araria",
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
      "Vaishali",
    ],
  },
  {
    state: "Chhattisgarh",
    districts: [
      "Balod",
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
      "Uttar Bastar Kanker",
    ],
  },
  {
    state: "Goa",
    districts: ["North Goa", "South Goa"],
  },
  {
    state: "Gujarat",
    districts: [
      "Ahmedabad",
      "Amreli",
      "Anand",
      "Arvalli",
      " Banas Kantha",
      "Bharuch",
      "Bhavnagar",
      "Botad",
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
      "Panch Mahals",
      "Patan",
      "Porbandar",
      "Rajkot",
      "Sabar Kantha",
      "Surat",
      "Surendranagar",
      "Tapi",
      "Vadodara",
      "Valsad",
    ],
  },
  {
    state: "Haryana",
    districts: [
      "Ambala",
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
      "Yamunanagar",
    ],
  },
  {
    state: "Jammu and Kashmir",
    districts: [
      "Anantnag",
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
      "Udhampur",
    ],
  },
  {
    state: "Himachal Pradesh",
    districts: [
      "Bilaspur",
      "Chamba",
      "Hamirpur",
      "Kangra",
      "Kinnaur",
      "Kullu",
      "Lahaul And Spiti",
      "Mandi",
      "Shimla",
      "Sirmaur",
      "Solan",
      "Una",
    ],
  },
  {
    state: "Jharkhand",
    districts: [
      "Bokaro",
      "Chatra",
      "Deoghar",
      "Dhanbad",
      "Dumka",
      "East Singhbum",
      "Garhwa",
      "Giridih",
      "Godda",
      "Gumla",
      "Hazaribagh",
      "Jamtara",
      "Khunti",
      "Koderma",
      "Latehar",
      "Lohardaga",
      "Pakur",
      "Palamu",
      "Ramgarh",
      "Ranchi",
      "Sahebganj",
      "Saraikela Kharsawan",
      "Simdega",
      "West Singhbhu",
    ],
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
    districts: [
      "Alappuzha",
      "Ernakulam",
      "Idukki",
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
      "Wayanad",
    ],
  },
  {
    state: "Ladakh",
    districts: ["Leh", "Kargil"],
  },
  {
    state: "Madhya Pradesh",
    districts: [
      "Agar Malwa",
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
      "Vidisha",
    ],
  },
  {
    state: "Lakshadweep",
    districts: ["Lakshadweep"],
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
      "Yavatmal",
    ],
  },

  {
    state: "Manipur",
    districts: [
      "Bishnupur",
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
      "Ukhrul",
    ],
  },
  {
    state: "Meghalaya",
    districts: [
      "East Garo Hills",
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
      "West Khasi Hills",
    ],
  },
  {
    state: "Mizoram",
    districts: [
      "Aizawl",
      "Champhai",
      "Hnahthial",
      "Kolasib",
      "Lawngtlai",
      "Lunglei",
      "Mamit",
      "Saitual",
      "Serchhip",
      "Siaha",
      "Vaihnuai",
    ],
  },
  {
    state: "Nagaland",
    districts: [
      "Chumoukedima",
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
      "Zunheboto",
    ],
  },
  {
    state: "Odisha",
    districts: [
      "Angul",
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
      "Sundargarh",
    ],
  },
  {
    state: "Punjab",
    districts: [
      "Amritsar",
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
      "Tarn Taran",
    ],
  },
  {
    state: "Rajasthan",
    districts: [
      "Ajmer",
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
      "Sawai Madhopur",
    ],
  },
  {
    state: "Sikkim",
    districts: [
      "Gangtok",
      "Namchi",
      "Mangan",
      "Soreng",
      "Gyalshing",
      "Pakyong",
    ],
  },
  {
    state: "Tamil Nadu",
    districts: [
      "Ariyalur",
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
      "Virudhunagar",
    ],
  },
  {
    state: "Telangana",
    districts: [
      "Adilabad",
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
      "Yadadri Bhuvanagiri",
    ],
  },
  {
    state: "Tripura",
    districts: [
      "Dhalai",
      "Gomati",
      "Khowai",
      "North Tripura",
      "South Tripura",
      "Unakoti",
      "West Tripura",
    ],
  },
  {
    state: "Uttar Pradesh",
    districts: [
      "Agra",
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
      "Varanasi",
    ],
  },
  {
    state: "Uttarakhand",
    districts: [
      "Almora",
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
      "Uttarkashi",
    ],
  },
  {
    state: "West Bengal",
    districts: [
      "Alipurduar",
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
      "Uttar Dinajpur",
    ],
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
    districts: [
      "Central",
      "East",
      " New Delhi ",
      "North",
      "North East ",
      "North West ",
      "Shahdara",
      "South",
      " South East ",
      "South West",
      "West",
    ],
  },
  {
    state: "Puducherry",
    districts: ["Puducherry", "Karaikal"],
  },
];

const Pancard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openIndex, setOpenIndex] = useState(null);
  const [current, setCurrent] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  useLayoutEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const [isCompleted, setIsCompleted] = useState(false);
  // const [userData, setUserData] = useState(null);
  const [showOtpSection, setShowOtpSection] = useState(true);
  const openPopup = () => {
    setShowPopup(true);
    navigate("/pan-card-form"); // Update the URL
  };

  // Function to close the popup and revert the URL
  const closePopup = () => {
    setShowPopup(false);
    navigate("/pan-card"); // Revert the URL
    setCurrentStep(1);
    setIsCompleted(false);
  };

  React.useEffect(() => {
    // Automatically show the popup if the URL matches /two-wheeler-insurance-info
    if (
      location.pathname === "/pan-card-form" ||
      location.pathname === "/pan-card/proceed-to-pay"
    ) {
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  }, [location.pathname]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [gender, setSelectedGender] = useState("");
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [selectedParent, setSelectedParent] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [leadId, setLeadId] = useState();
  const [houseStreetName, setHouseStreetName] = useState("");
  const [villageTownCity, setVillageTownCity] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [pincode, setPincode] = useState("");
  const [error, setError] = useState("");
  // const [orderid, setOrderID] = useState(null);
  const [mobileNumber, setMobileNumber] = useState("");
  const [emailId, setEmailId] = useState("");
  const handleHouseStreetNameChange = (e) => setHouseStreetName(e.target.value);
  const handleVillageTownCityChange = (e) => setVillageTownCity(e.target.value);
  const handleStateChange = (e) => setSelectedState(e.target.value);
  const handleDistrictChange = (e) => setSelectedDistrict(e.target.value);

  const handleFatherNameChange = (e) => setFatherName(e.target.value);
  const handleMotherNameChange = (e) => setMotherName(e.target.value);
  const handleAadharChange = (e) => setAadharNumber(e.target.value);
  const handleParentSelection = (e) => setSelectedParent(e.target.value);
  const handleMobileNumberChange = (e) => setMobileNumber(e.target.value);

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleFullNameChange = (e) => {
    const value = e.target.value;
    const nameRegex = /^[A-Za-z\s]*$/; // allows only alphabets and spaces

    if (nameRegex.test(value)) {
      setFullName(value);
      setError(""); // clear error when valid
    } else {
      setError("Full name should contain only letters and spaces.");
    }
  };

  // const handleDobChange = (event) => {
  //   setDob(event.target.value);
  // };

  const handlePincodeChange = (e) => {
    const value = e.target.value;

    // Only allow numeric input and limit it to 6 digits
    if (/^\d{0,6}$/.test(value)) {
      setPincode(value);
      setError(""); // Clear error if the input is valid
    }
  };

  const handleBlur = () => {
    // Check if the pin code has exactly 6 digits
    if (pincode.length !== 6) {
      setError("Pin Code must be exactly 6 digits.");
    } else {
      setError("");
    }
  };

  const [otp, setOtp] = useState(["", "", "", ""]);
  const [maskedNumber, setMaskedNumber] = useState("XXXX-XXXX-XXXX");
  const [resendCountdown, setResendCountdown] = useState(30);
  const [isResending, setIsResending] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  useEffect(() => {
    let timer;
    if (resendCountdown > 0) {
      timer = setInterval(() => {
        setResendCountdown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [resendCountdown]);

  // Handle OTP Input Change
  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return; // Only allow digits
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus on the next input
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const validateAge = (dateString) => {
    const birthDate = new Date(dateString);
    const ageDifMs = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const selectedStateData = stateData.find(
    (stateObj) => stateObj.state === selectedState
  );
  const districts = selectedStateData ? selectedStateData.districts : [];

  // Handle Backspace Logic
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
          navigate("/pan-card/proceed-to-pay");
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

  const formatDateForDisplay = (dateString) => {
    if (!dateString) return "";
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };

  // Function to format date for backend storage (yyyy-mm-dd)
  const formatDateForBackend = (dateString) => {
    if (!dateString) return "";
    const [day, month, year] = dateString.split("/");
    return `${year}-${month}-${day}`;
  };

  const handleDobChange = (e) => {
    const selectedDate = e.target.value; // yyyy-mm-dd from <input type="date">

    if (!selectedDate) return;

    const dobYear = selectedDate.split("-")[0];

    // Validate 4-digit year format
    if (!/^\d{4}$/.test(dobYear)) {
      setError("Year must be exactly 4 digits.");
      return;
    }

    const age = validateAge(selectedDate);

    if (age < 18) {
      setError("You must be at least 18 years old.");
    } else {
      setError("");
      setDob(selectedDate);
    }
  };

  const generateOrderId = () => {
    return `ORD${Date.now()}`;
  };

  const [orderid, setOrderID] = useState();

  const [paidAmount, setPaidAmount] = React.useState(350);
  const [paymentSuccess, setPaymentSuccess] = React.useState(false);

  const handleProceedToPay = async () => {
    const txnBaseAmount = userDetails?.baseAmount || 0;
    const txnFee = 350;
    const txnAmount = txnBaseAmount + txnFee;

    const custId = userDetails?.name
      ? `CUST_${userDetails.name.toUpperCase()}`
      : "CUST0012";

    // ✅ Generate Unique Order ID if not available
    const orderId = userDetails?.orderid || `ORD_${Date.now()}`;

    const requestBody = {
      MID: "MAKEMY09422872921500",
      ORDER_ID: orderId, // Make sure ORDER_ID is set
      CUST_ID: custId,
      INDUSTRY_TYPE_ID: "Retail",
      CHANNEL_ID: "WEB",
      TXN_AMOUNT: txnAmount.toString(),
      WEBSITE: "DEFAULT",
      SERVICE: "Pancard",
      id: leadId,
      mobilenumber: userDetails.mobile,
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
        const paytmTxnUrl =
          "https://secure.paytmpayments.com/theia/processTransaction";
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
          // const formattedNumber = userDetails?.mobile || "";
          // await sendSuccessMessage(formattedNumber);
        } else {
        }
      } else {
        // alert("Unable to fetch payment status. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching payment status:", error);
      // alert("An error occurred while fetching the payment status.");
    }
  };

  const handleEmailIdChange = (e) => {
    setEmailId(e.target.value);
    setError(""); // Clear error as user types
  };

  const [emailError, setEmailError] = useState(""); // Add this to your component

  const handleAgreementChange = (e) => {
    setSelectedAgreement(e.target.value);
    setError("");
  };

  const nextStep = () => {
    // Validate all required fields for the current step
    if (currentStep === 1) {
      if (!selectedAgreement) {
        setError("Please select an option to proceed.");
        return;
      }
    }

    if (currentStep === 2) {
      // Gender validation
      if (!gender) {
        setError("Please select your gender.");
        return;
      }

      // Full name validation
      if (!fullName) {
        setError("Please enter your full name.");
        return;
      }

      // Date of Birth validation
      if (!dob) {
        setError("Please select your date of birth.");
        return;
      }

      // Validate age (18+)
      const dobYear = dob.split("-")[0];
      if (!/^\d{4}$/.test(dobYear)) {
        setError("Year in Date of Birth must be exactly 4 digits.");
        return false;
      }

      const age = validateAge(dob);
      if (age < 18) {
        setError("You must be at least 18 years old.");
        return false;
      }

      if (
        (selectedAgreement === "correctionInPanCard" ||
          selectedAgreement === "lostDamagePanCard") &&
        !existingPanCardNumber
      ) {
        setError("Please enter your existing Pan Card number.");
        return;
      }
    }

    if (currentStep === 3) {
      if (!fatherName) {
        setError("Please enter Father's Name.");
        return;
      }
      if (!motherName) {
        setError("Please enter Mother's Name.");
        return;
      }
      if (!selectedParent) {
        setError(
          "Please select the name (Father or Mother) to print on the PAN card."
        );
        return;
      }
      if (!aadharNumber) {
        setError("Please enter your Aadhar number.");
        return;
      }
    }

    if (currentStep === 4) {
      if (!houseStreetName) {
        setError("Please enter House No. and Street Name.");
        return;
      }
      if (!villageTownCity) {
        setError("Please enter Village / Town / City.");
        return;
      }
      if (!selectedState) {
        setError("Please select your State.");
        return;
      }
      if (!selectedDistrict) {
        setError("Please select your District.");
        return;
      }
      if (!pincode) {
        setError("Please enter your Pin Code.");
        return;
      }
      if (pincode.length !== 6) {
        setError("Pin Code must be exactly 6 digits.");
        return;
      }
    }

    if (currentStep === 5) {
      const mobileRegex = /^[0-9]{10}$/;
      if (!mobileNumber) {
        setError("Please enter your mobile number.");
        return;
      }
      if (!mobileRegex.test(mobileNumber)) {
        setError("Please enter a valid 10-digit mobile number.");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailId) {
        setError("Please enter your email address.");
        return;
      }
      if (!emailRegex.test(emailId)) {
        setError("Please enter a valid email address.");
        return;
      }
    }

    if (currentStep < 5) {
      setCurrentStep((prevStep) => prevStep + 1); // Correct way to update state
      setError(""); // Clear the error message on valid form submission
    }
  };

  const [date, setDate] = useState(null); // Manage date state
  const [time, setTime] = useState(null); // Manage time state

  useEffect(() => {
    if (!date) {
      setDate(new Date().toISOString().split("T")[0]); // Set the current date once when the component mounts
    }
    if (!time) {
      setTime(new Date().toLocaleTimeString("en-US", { hour12: false })); // Set the current time once when the component mounts
    }
  }, []);

  const submitDataToAPI = async () => {
    const data = {
      orderid: orderid || "",
      name: fullName || "",
      mobilenumber: mobileNumber || "",
      email: emailId || "",
      services: selectedAgreement || "",
      address: villageTownCity || "",
      district: selectedDistrict || "",
      dob: dob || "",
      date: date,
      paidAmount: "350",
      qualification: "",
      applying_for: selectedAgreement || "",
      gender: gender || "",
      fathername: fatherName || "",
      mothername: motherName || "",
      pincode: pincode || "",
      adharnumber: aadharNumber || "",
      placeofbirth: houseStreetName || "",
      pancard: "",
      time:
        time && time !== "00:00:00"
          ? time
          : new Date().toLocaleTimeString("en-US", { hour12: false }),
      comment: "",
      status: "",
      printOnPanCard: selectedParent || "",
      service: "Pancard",
      // PGID: `ORD_${Date.now()}`,
      existingpancardnumber: existingPanCardNumber || "",
      village: villageTownCity || "",
      state: selectedState || "",
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
          name: leadData.name || "",
          mobilenumber: leadData.mobilenumber || "",
          orderid: leadData.orderId || "",
          services: leadData.services || "N/A",
          paidAmount: leadData.paidAmount || "₹350",
          // PGID: leadData.PGID,
        });
      } else {
        console.error("Error in API Response:", response.data);
      }
    } catch (error) {
      console.error("Error while saving data:", error);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const getMaskedMobileNumber = (number) => {
    if (!number || number.length < 3) return ""; // Return empty if number is too short
    const firstTwo = number.slice(0, 2); // First two digits
    const lastDigit = number.slice(-1); // Last digit
    const masked = `${firstTwo}******${lastDigit}`; // Mask the middle digits
    return masked;
  };

  const finishSubmission = () => {
    submitDataToAPI();
    if (mobileNumber) {
      setMaskedNumber(getMaskedMobileNumber(mobileNumber)); // Mask the mobile number
    }
    setIsCompleted(true);
  };

  const [selectedAgreement, setSelectedAgreement] = useState("");
  const [existingPanCardNumber, setExistingPanCardNumber] = useState("");

  const handleExistingPanCardChange = (event) => {
    setExistingPanCardNumber(event.target.value);
  };

  const faqs = [
    {
      question: "What is a PAN card and why is it important?",
      answer:
        "A PAN (Permanent Account Number) card is a government-issued ID required for filing taxes, opening bank accounts, and conducting high-value financial transactions in India.",
    },
    {
      question: "Can I apply for a PAN card online without visiting an office?",
      answer:
        "Yes! With Aadhaar-based e-KYC, the entire process is 100% online. You can apply, verify, and receive your PAN card without visiting any office.",
    },
    {
      question:
        "How long does it take to get a PAN card?",
      answer: (
        <div>
          {/* <p>
            e-PAN: Delivered via email within 24–48 hours (for new applications).
          </p>
          <p>In such cases:</p> */}
          <ul style={{ listStyleType: "disc" }}>
            <li>
              e-PAN: Delivered via email within 24–48 hours (for new applications).
            </li>
            <li>
             Physical PAN Card: Delivered within 15–20 working days.
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "What if I have lost my PAN card?",
      answer: "You can easily request a duplicate or reprint. Just submit Aadhaar details and your PAN number, and you’ll receive a replacement card.",
    },
    {
      question:
        "Is Aadhaar mandatory for PAN card applications?",

      answer:  "Yes, Aadhaar is mandatory for identity verification and linking PAN.",
      
    },
    {
      question: "How much does it cost to apply for a PAN card online?",
      answer:
        "We charge ₹350 for new, correction, or lost card applications. A cancellation fee of ₹50 applies if you cancel after payment",
    },
    {
      question: "Can I update my name or address on the PAN card?",
      answer:
        "Yes! You can apply for PAN card correction to update your name, DOB, photo, or signature online.",
    },
    {
      question: "Can NRI or foreign citizens apply for a PAN card through this service?",
      answer:
        "Yes, NRIs and foreign citizens can apply, but additional documents may be required, such as passport copies or overseas address proof.",
    },
    {
      question: "Is e-PAN a valid document?",
      answer:
        "Yes, e-PAN is fully valid and can be used anywhere like a physical PAN car",
    },
    {
      question:
        "Can I link my PAN with Aadhaar through this service?",
      answer:
        "Yes, we assist with Aadhaar-PAN linking during the application process for hassle-free transactions.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>
          {" "}
          Apply Pan Card Online | Online Pan Card Application | form 49A{" "}
        </title>
        <meta
          name="description"
          content="Click here to apply pan card and get it the earliest,with expertise advice and guidance.New pan(form 49A),Changes or Correction in existing PANData."
        />
        <meta
          name="keywords"
          content="pan card, apply pan card, pan card online, pan card apply online, pan card apply online India, pan card apply bangalore, instant pan card, pan card application, pan card application online, pan application, pan card agents near me, online pan card agents, how to apply for pan card, new pan card application, documents required for pan card, pan card form, pan card application near me, how to get pan card online, pan card site, e pan card, new pan card apply, e pan card apply"
        />
        <link rel="canonical" href="https://www.makemydocuments.com/pan-card" />
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

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-QN4189EDG5"
        ></script>
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

        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=7447820&fmt=gif" />`,
          }}
        />
      </Helmet>
      <div style={{ overflow: "hidden" }}>
        <div
          className="container-pancard"
          style={{
            background: "linear-gradient(182.42deg, #FCA505 2.01%, #FFFFFF)",
            minHeight: "60vh",
            paddingTop: "20px",
            display: "flex",

            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 20px",
          }}
        >
          <div
            style={{ flex: 1, textAlign: "left", fontWeight: "bold" }}
            className="pancard-text"
          >
            {/* <h2 style={{marginLeft:"25%", marginBottom:"60px",fontWeight:"bold"}}>Lease Agreement Online</h2> */}
            <p>
              "Expert Assistance for Quick and Convenient{" "}
              <br className="d-block d-lg-none" />
              PAN Card Services - Apply Now!"
            </p>
          </div>
          <div>
            <img
              src={Image30}
              alt="Lease Agreement"
              style={{ maxWidth: "80%", height: "20%", marginTop: "10%" }}
            />
          </div>
        </div>

        <div
          className="content-section"
          style={{
            backgroundColor: "#fffff",
            padding: "30px 15px",
            borderRadius: "10px",
            margin: "-1% ",
            marginLeft: "10%",
            marginRight: "72%",
          }}
        >
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 position-relative d-none d-lg-block">
              {/* First Section: Documents */}
              <div
                className="d-flex align-items-center mb-5"
                style={{ gap: "20px" }}
              >
                <div
                  style={{
                    position: "relative",
                    minWidth: "80px",
                    marginTop: "-28%",
                  }}
                >
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
                      top: "58%",
                      left: "40%",
                      width: "43%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                </div>
                <div>
                  <h4 className="desktop-text">
                    Documents Required For New Pan Card
                  </h4>
                  <ul className="desktop-ul">
                    <li>Aadhaar card</li>
                  </ul>
                </div>
              </div>

              {/* Second Section */}
              <div
                className="d-flex align-items-center mb-5"
                style={{ gap: "20px" }}
              >
                <div
                  style={{
                    position: "relative",
                    minWidth: "80px",
                    marginTop: "-42%",
                  }}
                >
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
                      top: "58%",
                      left: "40%",
                      width: "43%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                </div>
                <div>
                  <h4 className="desktop-text">
                    Documents Required For Correction/Lost/Damage Pan Card
                  </h4>
                  <ul className="desktop-ul">
                    <li>Aadhaar card</li>
                    <li>Existing Pan copy</li>
                  </ul>
                </div>
              </div>

              {/* Third Section: How It Works */}
              <div
                className="d-flex align-items-center mb-5"
                style={{ gap: "20px" }}
              >
                <div
                  style={{
                    position: "relative",
                    minWidth: "80px",
                    marginTop: "-79%",
                  }}
                >
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
                      top: "58%",
                      width: "43%",
                      left: "40%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                </div>
                <div>
                  <h4 className="desktop-text">How It Works</h4>
                  <ul className="desktop-ul">
                    <li>Register And Pay Online</li>
                    <li>Upload Documents</li>
                    <li>Online EKYC</li>
                    <li>Get Delivered</li>
                  </ul>
                </div>
              </div>

              {/* Fourth Section: Time Duration */}
              <div
                className="d-flex align-items-center mb-5"
                style={{ gap: "20px" }}
              >
                <div
                  style={{
                    position: "relative",
                    minWidth: "80px",
                    marginTop: "-79%",
                  }}
                >
                  <img
                    src={circleIcon}
                    alt="Circle Background"
                    className="img-fluid"
                  />
                  <img
                    src={TimeIcon}
                    alt="Time Duration Icon"
                    style={{
                      position: "absolute",
                      top: "58%",
                      left: "40%",
                      width: "43%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                </div>
                <div>
                  <h4 className="desktop-text">Time Duration</h4>
                  <ul className="desktop-ul">
                    <li>15-20 working days (New Physical Pan Card)</li>
                    <li>20-30 working days (Lost/Correction)</li>
                    <li>E- Pan Card Copy 24 - 48 hrs (New Application Only)</li>
                    <li>
                      Applicant Will Receive Both E- Pan And Physical Card
                    </li>
                  </ul>
                </div>
              </div>

              {/* Fifth Section: Charges */}
              <div
                className="d-flex align-items-center mb-5"
                style={{ gap: "20px" }}
              >
                <div
                  style={{
                    position: "relative",
                    minWidth: "80px",
                    marginTop: "-50%",
                  }}
                >
                  <img
                    src={circleIcon}
                    alt="Circle Background"
                    className="img-fluid"
                  />
                  <img
                    src={Price}
                    alt="Price Icon"
                    style={{
                      position: "absolute",
                      top: "58%",
                      width: "43%",
                      left: "40%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                </div>
                <div>
                  <h4 className="desktop-text">Charges</h4>
                  <ul className="desktop-ul">
                    <li>
                      <strong>
                        <del style={{ color: "grey" }}>Rs.399</del> Rs.350
                      </strong>
                    </li>
                    <li>
                      If you decide to cancel your order after payment, please
                      note that a cancellation fee of <strong>Rs. 50</strong>{" "}
                      will apply.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* mobile view */}

        <div
          className="pan-card-container d-block d-lg-none"
          style={{ marginTop: "-21%" }}
        >
          {/* Documents Required For New Pan Card Section */}
          <div className="new-pan-documents-section  row-container">
            <div className="icon-container">
              <div style={{ position: "relative" }}>
                <img
                  src={circleIcon}
                  alt="Circle Background"
                  className="img-fluid"
                  style={{ maxWidth: "55%" }}
                />
                <img
                  src={documentsIcon}
                  alt="Documents Icon"
                  style={{
                    position: "absolute",
                    top: "70%",
                    width: "20px",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>
            </div>
            <div className="content-container">
              <h4 className="new-pan-title" style={{ textAlign: "left" }}>
                Documents Required For New <br /> Pan Card{" "}
                <span className="required-text">*</span>
              </h4>
              <ul className="new-pan-list" style={{ listStyleType: "disc" }}>
                <li>Aadhaar card</li>
              </ul>
            </div>
          </div>

          {/* Documents Required For Correction/Lost/Damaged Pan Card Section */}
          <div className="correction-pan-documents-section row-container">
            <div className="icon-container">
              <div style={{ position: "relative" }}>
                <img
                  src={circleIcon}
                  alt="Circle Background"
                  className="img-fluid"
                  style={{ maxWidth: "55%" }}
                />
                <img
                  src={documentsIcon}
                  alt="Documents Icon"
                  style={{
                    position: "absolute",
                    width: "20px",
                    top: "70%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>
            </div>
            <div className="content-container">
              <h4
                className="correction-pan-title"
                style={{ textAlign: "left" }}
              >
                Documents Required For <br /> Correction / Lost / Damaged <br />{" "}
                Pan Card
              </h4>
              <ul
                className="correction-pan-list"
                style={{ listStyleType: "disc" }}
              >
                <li>Aadhaar card</li>
                <li>Existing Pan copy</li>
              </ul>
            </div>
          </div>

          {/* How It Works Section */}
          <div
            className="how-it-works-section row-container"
            style={{ marginTop: "" }}
          >
            <div className="icon-container">
              <div style={{ position: "relative" }}>
                <img
                  src={circleIcon}
                  alt="Circle Background"
                  className="img-fluid"
                  style={{ maxWidth: "55%" }}
                />
                <img
                  src={howIcon}
                  alt="How It Works Icon"
                  style={{
                    position: "absolute",
                    top: "70%",
                    width: "20px",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>
            </div>
            <div className="content-container">
              <h4 className="how-it-works-title" style={{ textAlign: "left" }}>
                How It Works
              </h4>
              <ul
                className="how-it-works-list"
                style={{ listStyleType: "disc" }}
              >
                <li>Register And Pay Online</li>
                <li>Upload Documents</li>
                <li>Online EKYC</li>
                <li>Get Delivered</li>
              </ul>
            </div>
          </div>

          {/* Time Duration Section */}
          <div
            className="time-duration-section row-container"
            style={{ marginTop: "" }}
          >
            <div className="icon-container">
              <div style={{ position: "relative" }}>
                <img
                  src={circleIcon}
                  alt="Circle Background"
                  className="img-fluid"
                  style={{ maxWidth: "55%" }}
                />
                <img
                  src={TimeIcon}
                  alt="Time Duration Icon"
                  style={{
                    position: "absolute",
                    top: "70%",
                    width: "20px",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>
            </div>
            <div className="content-container">
              <h4
                className="time-duration-title"
                style={{ textAlign: "left", marginTop: "" }}
              >
                Time Duration
              </h4>
              <ul
                className="time-duration-list"
                style={{ listStyleType: "disc" }}
              >
                <li>15-20 working days (New Physical Pan Card)</li>
                <li>20-30 working days (Lost/Correction)</li>
                <li>E- Pan Card Copy 24 - 48 hrs (New Application Only)</li>
                <li>Applicant Will Receive Both E- Pan And Physical Card</li>
              </ul>
            </div>
          </div>

          {/* Charges Section */}
          <div className="charges-section row-container">
            <div className="icon-container">
              <div style={{ position: "relative" }}>
                <img
                  src={circleIcon}
                  alt="Circle Background"
                  className="img-fluid"
                  style={{ maxWidth: "55%" }}
                />
                <img
                  src={Price}
                  alt="Charges Icon"
                  style={{
                    position: "absolute",
                    top: "70%",
                    width: "20px",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>
            </div>
            <div className="content-container">
              <h4 className="charges-title" style={{ textAlign: "left" }}>
                Charges
              </h4>
              <ul className="charges-list" style={{ listStyleType: "disc" }}>
                <li>
                  <strong>
                    <del className="original-price">Rs.399</del> Rs.350
                  </strong>
                </li>
                <li>
                  If you decide to cancel your order after payment, please note
                  that a cancellation fee of <strong>Rs. 50</strong> will apply.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <br />
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
          <div className="continue-button-container" style={{alignItems:"center"}}>
            <button
              className="continue-button"
              onClick={openPopup}
              style={{ borderRadius: "0px" }}
            >
              Apply Now
            </button>
          </div>

          {/* Modal Popup */}
          {showPopup && (
            <div
              className="popupstyle-pancard"
              style={{
                position: "fixed",
                top: "100px",
                left: "0",
                width: "100%",
                height: "86%",
                // backgroundColor: "rgba(26, 118, 216, 0.9)",
                // backgroundColor:'#fff',
                backgroundColor: "#126ece",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: "9999",
              }}
            >
              <div
                className="popup-pancard"

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
                    <div
                      className="stepper-pancard"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "30px",
                      }}
                    >
                      {Array.from({ length: 5 }).map((_, index) => (
                        <React.Fragment key={index}>
                          <div
                            className="step-container"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              flexDirection: "column",
                              flex: 1,
                            }}
                          >
                            <button
                              className="button-stepper"
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
                          </div>

                          {index < 4 && (
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
                        <div style={{ textAlign: "center" }}>
                          <h5 style={{ color: "#007BFF", fontWeight: "bold" }}>
                            Applying for <span style={{ color: "red" }}>*</span>
                          </h5>
                          {error && (
                            <p style={{ color: "red", fontSize: "14px" }}>
                              {error}
                            </p>
                          )}{" "}
                          {/* Show error message */}
                          {/* Radio Buttons */}
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              marginLeft: "4%",
                              textAlign: "left",
                              width: "fit-content",
                              gap: "20px",
                            }}
                          >
                            <label style={{ fontSize: "18px", color: "#333" }}>
                              <input
                                type="radio"
                                name="agreementOption"
                                value="newPanCard"
                                onChange={handleAgreementChange}
                                style={{ marginRight: "10px" }}
                              />
                              New Pan Card
                            </label>
                            <label style={{ fontSize: "18px", color: "#333" }}>
                              <input
                                type="radio"
                                name="agreementOption"
                                value="correctionInPanCard"
                                onChange={handleAgreementChange}
                                style={{ marginRight: "10px" }}
                              />
                              Correction in Pan Card
                            </label>
                            <label style={{ fontSize: "18px", color: "#333" }}>
                              <input
                                type="radio"
                                name="agreementOption"
                                value="lostDamagePanCard"
                                onChange={handleAgreementChange}
                                style={{ marginRight: "10px" }}
                              />
                              Lost/Damage Pan Card
                            </label>
                          </div>
                          <br />
                        </div>
                      )}

                      {currentStep === 2 && (
                        <div style={{ textAlign: "center" }}>
                          {/* <h5 style={{ color: "#007BFF", fontWeight: "bold" }}>
                          I Am <span style={{ color: "red" }}>*</span>
                        </h5> */}
                          {/* {error && (
                          <p style={{ color: "red", fontSize: "14px" }}>
                            {error}
                          </p>
                        )} */}

                          {/* Existing Pan Card Number */}
                          {(selectedAgreement === "correctionInPanCard" ||
                            selectedAgreement === "lostDamagePanCard") && (
                            <div
                              style={{
                                marginBottom: "33px",
                                textAlign: "left",
                              }}
                            >
                              <label
                                htmlFor="existingPanCardNumber"
                                style={{
                                  display: "block",
                                  marginBottom: "10px",
                                  fontSize: "16px",
                                  fontWeight: "500",
                                }}
                              >
                                Existing Pan Card Number
                                <span style={{ color: "red" }}>*</span>
                              </label>
                              <input
                                type="text"
                                id="existingPanCardNumber"
                                value={existingPanCardNumber}
                                onChange={handleExistingPanCardChange}
                                style={{
                                  width: "100%",
                                  padding: "10px",
                                  fontSize: "16px",
                                  border: "1px solid #ccc",
                                  borderRadius: "4px",
                                }}
                              />
                            </div>
                          )}

                          {/* Applicant's Full Name */}
                          <div
                            style={{ marginBottom: "33px", textAlign: "left" }}
                          >
                            <label
                              htmlFor="fullName"
                              style={{
                                display: "block",
                                marginBottom: "10px",
                                fontSize: "16px",
                                fontWeight: "500",
                              }}
                            >
                              Applicant’s Full Name (Mention Name As Per
                              Aadhaar)
                              <span style={{ color: "red" }}>*</span>
                            </label>
                            <input
                              type="text"
                              id="fullName"
                              value={fullName}
                              onChange={handleFullNameChange}
                              style={{
                                width: "100%",
                                padding: "10px",
                                fontSize: "16px",
                                border: "1px solid #ccc",
                                borderRadius: "4px",
                              }}
                            />
                          </div>

                          {/* Gender */}
                          <div
                            style={{
                              marginBottom: "33px",
                              textAlign: "left",
                              gap: "10px",
                            }}
                          >
                            <label
                              style={{ fontSize: "16px", fontWeight: "500" }}
                            >
                              Gender <span style={{ color: "red" }}>*</span>
                            </label>
                            <br />
                            <div>
                              <label style={{ marginRight: "20px" }}>
                                <input
                                  type="radio"
                                  name="gender"
                                  value="female"
                                  onChange={handleGenderChange}
                                  style={{ marginRight: "10px" }}
                                />
                                Female
                              </label>
                              <br />
                              <label style={{ marginRight: "20px" }}>
                                <input
                                  type="radio"
                                  name="gender"
                                  value="male"
                                  onChange={handleGenderChange}
                                  style={{ marginRight: "10px" }}
                                />
                                Male
                              </label>
                              <br />
                              <label style={{ marginRight: "20px" }}>
                                <input
                                  type="radio"
                                  name="gender"
                                  value="transgender"
                                  onChange={handleGenderChange}
                                  style={{ marginRight: "10px" }}
                                />
                                Transgender
                              </label>
                            </div>
                          </div>

                          {/* Date of Birth */}
                          <div
                            style={{ marginBottom: "33px", textAlign: "left" }}
                          >
                            <label
                              htmlFor="dob"
                              style={{
                                display: "block",
                                marginBottom: "10px",
                                fontSize: "16px",
                                fontWeight: "500",
                              }}
                            >
                              Date of Birth{" "}
                              <span style={{ color: "red" }}>*</span>
                            </label>
                            <input
                              type="date"
                              id="dob"
                              value={dob ? dob : ""}
                              onChange={handleDobChange}
                              style={{
                                width: "100%",
                                padding: "10px",
                                fontSize: "16px",
                                border: "1px solid #ccc",
                                borderRadius: "4px",
                                appearance: "auto",
                              }}
                            />
                          </div>

                          {/* Error Message */}
                          {error && (
                            <div
                              style={{
                                color: "red",
                                marginTop: "10px",
                                textAlign: "left",
                              }}
                            >
                              {error}
                            </div>
                          )}
                          <br />
                        </div>
                      )}

                      {currentStep === 3 && (
                        <div style={{ textAlign: "center" }}>
                          {/* Step 3 Heading */}
                          <p style={{ color: "#1A76D8", fontWeight: "600" }}>
                            Parents Details
                            <span style={{ color: "red" }}>*</span>
                          </p>
                          {/* Show error message */}
                          {/* Father's Name */}
                          <div
                            style={{ marginBottom: "20px", textAlign: "left" }}
                          >
                            <label
                              htmlFor="fathername"
                              style={{
                                display: "block",
                                marginBottom: "10px",
                                fontSize: "16px",
                                fontWeight: "500",
                              }}
                            >
                              Father's Name
                              <span style={{ color: "red" }}>*</span>
                            </label>
                            <input
                              type="text"
                              id="fathername"
                              value={fatherName}
                              onChange={handleFatherNameChange}
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
                          {/* Mother's Name */}
                          <div
                            style={{ marginBottom: "20px", textAlign: "left" }}
                          >
                            <label
                              htmlFor="mothername"
                              style={{
                                display: "block",
                                marginBottom: "10px",
                                fontSize: "16px",
                                fontWeight: "500",
                              }}
                            >
                              Mother's Name{" "}
                              <span style={{ color: "red" }}>*</span>
                            </label>
                            <input
                              type="text"
                              id="mothername"
                              value={motherName}
                              onChange={handleMotherNameChange}
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
                          {/* Parent Name Selection */}
                          <div
                            style={{
                              display: "flex",
                              textAlign: "left",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              width: "fit-content",
                              gap: "20px",
                              fontWeight: "500",
                            }}
                          >
                            <label
                              style={{
                                display: "block",

                                fontSize: "18px",
                                fontWeight: "500",
                              }}
                            >
                              Select the name either father or mother which you
                              may like to print on PAN CARD
                              <span style={{ color: "red" }}>*</span>
                            </label>
                            <label style={{ fontSize: "16px", color: "#333" }}>
                              <input
                                type="radio"
                                name="parentName"
                                value="father"
                                onChange={handleParentSelection}
                                style={{ marginRight: "10px" }}
                              />
                              Father
                            </label>
                            <label style={{ fontSize: "16px", color: "#333" }}>
                              <input
                                type="radio"
                                name="parentName"
                                value="mother"
                                onChange={handleParentSelection}
                                style={{ marginRight: "10px" }}
                              />
                              Mother
                            </label>
                          </div>
                          <br />
                          {/* Aadhar Number */}
                          <div
                            style={{ marginBottom: "20px", textAlign: "left" }}
                          >
                            <label
                              htmlFor="aadhar"
                              style={{
                                display: "block",
                                marginBottom: "10px",
                                fontSize: "16px",
                                fontWeight: "500",
                              }}
                            >
                              Please Mention your AADHAR Number
                              <span style={{ color: "red" }}>*</span>
                            </label>
                            <input
                              type="number"
                              id="aadhar"
                              value={aadharNumber}
                              onChange={handleAadharChange}
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
                          {error && (
                            <p
                              style={{
                                color: "red",
                                fontSize: "14px",
                                textAlign: "left",
                              }}
                            >
                              {error}
                            </p>
                          )}{" "}
                          <br />
                        </div>
                      )}

                      {currentStep === 4 && (
                        <div style={{ textAlign: "center" }}>
                          {/* Address Heading */}
                          <p style={{ color: "#1A76D8", fontWeight: "600" }}>
                            Address
                          </p>

                          {/* Show error message */}
                          {/* House No. and Street Name */}
                          <div
                            style={{ marginBottom: "20px", textAlign: "left" }}
                          >
                            <label
                              htmlFor="houseStreetName"
                              style={{
                                display: "block",
                                marginBottom: "10px",
                                fontSize: "16px",
                                fontWeight: "500",
                              }}
                            >
                              House No. and Street Name{" "}
                              <span style={{ color: "red" }}>*</span>
                            </label>
                            <input
                              type="text"
                              id="houseStreetName"
                              placeholder="Enter House No. and Street Name"
                              value={houseStreetName}
                              onChange={handleHouseStreetNameChange}
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
                          {/* Village / Town / City */}
                          <div
                            style={{ marginBottom: "20px", textAlign: "left" }}
                          >
                            <label
                              htmlFor="Village"
                              style={{
                                display: "block",
                                marginBottom: "10px",
                                fontSize: "16px",
                                fontWeight: "500",
                              }}
                            >
                              Village / Town / City{" "}
                              <span style={{ color: "red" }}>*</span>
                            </label>
                            <input
                              type="text"
                              id="Village"
                              placeholder="Enter Village / Town / City"
                              value={villageTownCity}
                              onChange={handleVillageTownCityChange}
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
                          {/* States Dropdown */}
                          <div>
                            {/* State Dropdown */}
                            <div
                              style={{
                                marginBottom: "20px",
                                textAlign: "left",
                              }}
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
                            {/* {selectedStateError && (
        <p style={{ color: "red", fontSize: "14px"  , textAlign:'left', }} >
          {selectedStateError}
        </p>
      )} */}

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
                                  District
                                  <span style={{ color: "red" }}>*</span>
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
                          {/* Pin Code */}
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
                              maxLength="6" // Limit input to 6 characters
                              style={{
                                width: "100%",
                                height: "45px",
                                padding: "10px",
                                fontSize: "16px",
                                border: `2px solid ${
                                  error ? "red" : "#FCA505"
                                }`, // Red border if error
                                borderRadius: "4px",
                              }}
                            />
                            {error && (
                              <p
                                style={{
                                  color: "red",
                                  fontSize: "14px",
                                  textAlign: "left",
                                }}
                              >
                                {error}
                              </p>
                            )}
                          </div>
                          <br />
                        </div>
                      )}

                      {currentStep === 5 && (
                        <div style={{ textAlign: "center" }}>
                          <p style={{ color: "#1A76D8", fontWeight: "600" }}>
                            Contact Details
                            <span style={{ color: "red" }}>*</span>
                          </p>

                          <div
                            style={{
                              marginBottom: "20px",
                              textAlign: "left",
                            }}
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
                              Mobile Number{" "}
                              <span style={{ color: "red" }}>*</span>
                            </label>
                            <input
                              type="text"
                              id="mobilenumber"
                              placeholder="Enter Mobile Number"
                              value={mobileNumber}
                              onChange={handleMobileNumberChange}
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

                          {/* Email Id */}
                          <div
                            style={{ marginBottom: "20px", textAlign: "left" }}
                          >
                            <label
                              htmlFor="emailid"
                              style={{
                                display: "block",
                                marginBottom: "10px",
                                fontSize: "16px",
                                fontWeight: "500",
                              }}
                            >
                              Email Id <span style={{ color: "red" }}>*</span>
                            </label>
                            <input
                              type="text"
                              id="emailid"
                              placeholder="Enter Email Id"
                              value={emailId}
                              onChange={handleEmailIdChange}
                              style={{
                                width: "100%",
                                height: "45px",
                                padding: "10px",
                                fontSize: "16px",
                                border: emailError
                                  ? "2px solid red"
                                  : "2px solid #FCA505", // Highlight border on error
                                borderRadius: "4px",
                              }}
                            />
                            {emailError && (
                              <p
                                style={{
                                  color: "red",
                                  fontSize: "14px",
                                  marginTop: "5px",
                                }}
                              >
                                {emailError}
                              </p>
                            )}
                          </div>
                          {error && (
                            <p
                              style={{
                                color: "red",
                                fontSize: "14px",
                                textAlign: "left",
                              }}
                            >
                              {error}
                            </p>
                          )}
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

                          <br />
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
                                marginTop: "2%",
                                height: "1%",
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

                      {currentStep < 5 ? (
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
                          <button className="next-button" onClick={nextStep}>
                            Next
                          </button>
                        </div>
                      ) : (
                        // <button
                        //   onClick={() => {
                        //     const mobileRegex = /^[0-9]{10}$/;
                        //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                        //     // Perform validation for Step 5
                        //     if (!mobileNumber) {
                        //       setError("Please enter your mobile number.");
                        //       return;
                        //     }
                        //     if (!mobileRegex.test(mobileNumber)) {
                        //       setError(
                        //         "Please enter a valid 10-digit mobile number."
                        //       );
                        //       return;
                        //     }
                        //     if (!emailId) {
                        //       setError("Please enter your email address.");
                        //       return;
                        //     }
                        //     if (!emailRegex.test(emailId)) {
                        //       setError("Please enter a valid email address.");
                        //       return;
                        //     }

                        //     handleSendOtp();
                        //     setShowOtpSection(true);
                        //     setError("");
                        //     setIsCompleted(true);
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
                              const mobileRegex = /^[0-9]{10}$/;
                              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                              // Perform validation for Step 5
                              if (!mobileNumber) {
                                setError("Please enter your mobile number.");
                                return;
                              }
                              if (!mobileRegex.test(mobileNumber)) {
                                setError(
                                  "Please enter a valid 10-digit mobile number."
                                );
                                return;
                              }
                              if (!emailId) {
                                setError("Please enter your email address.");
                                return;
                              }
                              if (!emailRegex.test(emailId)) {
                                setError("Please enter a valid email address.");
                                return;
                              }

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
                            className="verify-button"
                            style={{ color: "#000", fontWeight: "bold" }}
                          >
                            Verify
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        {location.pathname === "/pan-card/proceed-to-pay" && (
                          <>
                            {paymentSuccess ? (
                              <div>
                                <h2 style={styles.successMessage}>
                                  Payment Successful!
                                </h2>
                                <h3 style={styles.thankYouMessage}>
                                  Thank You for Your Submission!
                                </h3>
                              </div>
                            ) : (
                              <div>
                                <h2 style={styles.thankYouMessage}>
                                  Thank You for Your Submission!
                                </h2>
                                <div style={styles.infoBox}>
                                  <div style={styles.inputGroup}>
                                    <label style={styles.label}>Name:</label>
                                    <input
                                      type="text"
                                      value={userDetails?.name || "N/A"}
                                      readOnly
                                      style={styles.input}
                                    />
                                  </div>
                                  <div style={styles.inputGroup}>
                                    <label style={styles.label}>
                                      Mobile Number:
                                    </label>
                                    <input
                                      type="text"
                                      value={userDetails?.mobilenumber || "N/A"}
                                      readOnly
                                      style={styles.input}
                                    />
                                  </div>
                                  <div style={styles.inputGroup}>
                                    <label style={styles.label}>
                                      Order ID:
                                    </label>
                                    <input
                                      type="text"
                                      value={userDetails?.orderid || "N/A"}
                                      readOnly
                                      style={styles.input}
                                    />
                                  </div>
                                  <div style={styles.inputGroup}>
                                    <label style={styles.label}>
                                      Services:
                                    </label>
                                    <input
                                      type="text"
                                      value={userDetails?.services || "Pancard"}
                                      readOnly
                                      style={styles.input}
                                    />
                                  </div>
                                  <div style={styles.inputGroup}>
                                    <label style={styles.label}>
                                      Payment Amount:
                                    </label>
                                    <input
                                      type="text"
                                      value={paidAmount || "₹0"}
                                      readOnly
                                      style={styles.input}
                                    />
                                  </div>
                                </div>
                                {/* <button
                          onClick={handleProceedToPay}
                          style={styles.proceedButton}
                          disabled={isLoading} // Disable button while loading
                        >
                          {isLoading ? "Loading..." : "Proceed to Pay"}
                        </button> */}
                                <div className="proceed-button-container">
                                  <button
                                    onClick={handleProceedToPay}
                                    className="proceed-button"
                                    style={{
                                      color: "#000",
                                      fontWeight: "bold",
                                    }}
                                    disabled={isLoading} // Disable button while loading
                                  >
                                    {isLoading
                                      ? "Loading..."
                                      : "Proceed to Pay"}
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
                  onClick={closePopup}
                  className="d-none d-lg-block"
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

            <div
                                        className="col-md-12  d-none d-lg-block"
                                        style={{ padding: "20px", backgroundColor: "#f0f4f8", margin: "10px auto", width: "80%", }}
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
                                                                > "Trustworthy and very easy making pan at home"
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
                                                                        Maryam Azeez

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
                                                                    "I had lost my PAN card and needed a replacement urgently. The team guided me step-by-step, and I received both the e-PAN and physical card without any hassle. Highly recommended!"
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
                                                                      Arun Kumar 

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
                                                                    "Very professional and secure service! I was worried about rejections, but their verification process ensured everything was correct the first time."
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
                                                                        Meera N
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
                                                                    "Make my documents was supportive and attentive to let me get my new pan card It actively works during its scheduled time"
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
                                                                        Aneel Ram
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
                                                                    "Process is very clearly defined which made it easy to follow through. The person is also very helpful and polite. Thanks"
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
                                                                        Aneev Sinha
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
                                                                    "Exceptional service! The entire process was smooth and stress-free. They kept me updated at every stage, and I received my documents right on time. Highly recommend!"
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

                                                                    </div>
                                                                    <span
                                                                        style={{
                                                                            fontWeight: "bold",
                                                                            fontSize: "14px",
                                                                            color: "#374151",
                                                                        }}
                                                                    >
                                                                       Sahana R.
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
                                                                name: "Maryam Azeez",
                                                                initial: "N",
                                                                review:
                                                                    "Trustworthy and very easy making pan at home",
                                                            },
                                                            {
                                                                name: "Arun Kumar",
                                                                initial: "R",
                                                                review:
                                                                    "I had lost my PAN card and needed a replacement urgently. The team guided me step-by-step, and I received both the e-PAN and physical card without any hassle. Highly recommended!",
                                                            },
                                                            {
                                                                name: "Meera N",
                                                                initial: "S",
                                                                review:
                                                                    "Very professional and secure service! I was worried about rejections, but their verification process ensured everything was correct the first time.",
                                                            },
                                                            {
                                                                name: "Aneel Ram",
                                                                initial: "M",
                                                                review:
                                                                    "Make my documents was supportive and attentive to let me get my new pan card It actively works during its scheduled time",
                                                            },
                                                            {
                                                                name: "Aneev Sinha",
                                                                initial: "S",
                                                                review:
                                                                    "Process is very clearly defined which made it easy to follow through. The person is also very helpful and polite. Thanks",
                                                            },
                                                            {
                                                                name: "Sahana R.",
                                                                initial: "R",
                                                                review:
                                                                    "Exceptional service! The entire process was smooth and stress-free. They kept me updated at every stage, and I received my documents right on time. Highly recommend!",
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
<br />
        <div
          style={{
            margin: "10px auto",
            padding: "20px",
            background: "#FFFFFF",
            borderRadius: "10px",
            width: "80%",
          }}
        >
          <h1 className="faq-tag-title-h3">
            <strong>PAN Card Services – Make My Documents </strong>
          </h1>
          <p style={{ textAlign: "left" }}>
            Are you in need of a quick and efficient method to acquire your PAN
            card without the usual long waits and tons of paperwork? We at Make
            My Documents take the hassle out of the complete process of PAN card
            application, correction, and replacement. New PAN card, updating
            inaccurate details, or PAN card loss, our team is committed to
            providing you with a quick, hassle-free, and low-cost solution.
          </p>
          <p style={{ textAlign: "left" }}>
            We do the hard work so that you can apply for a PAN card online
            without any inconvenience. Our method, which is safe and sound,
            along with the professional verification and delivery at your
            doorstep, ensures that you will never encounter rejections or
            delays.
          </p>
          <h2 className="faq-tag-title-h3" style={{textAlign:'left', fontSize: "22px"}}>
            <strong> How It Works</strong>
          </h2>
          <p style={{ textAlign: "left" }}>
            We follow a simple, step-by-step process to make PAN card
            applications stress-free:
          </p>

          <p style={{ textAlign: "left" }}>
            <strong>Register & Pay Online – </strong> Choose your service and
            pay securely through our platform.
          </p>
          <p style={{ textAlign: "left" }}>
            <strong>Upload Documents – </strong> Submit your Aadhaar card and
            other required documents digitally.
          </p>
          <p style={{ textAlign: "left" }}>
            <strong>Online e-KYC Verification – </strong> Complete your identity
            verification online in minutes.
          </p>
          <p style={{ textAlign: "left" }}>
            <strong>Get Delivered – </strong> Receive your e-PAN card within
            24-48 hours and a physical card at your doorstep.
          </p>

          <h2 className="faq-tag-title-h3" style={{textAlign:'left', fontSize: "22px"}}>
            <strong>Processing Time</strong>
          </h2>
          <ul>
            <li>
              <strong>New PAN Card (Physical): </strong>15–20 working days
            </li>
            <li>
              <strong>Correction / Lost / Damaged PAN Card: </strong>20–30
              working days
            </li>
            <li>
              <strong>E-PAN Card (New Applications): </strong>Delivered in 24–48
              hours
            </li>
          </ul>

          <p style={{ textAlign: "left" }}>
            All applicants will receive both e-PAN and physical PAN card for
            convenience.
          </p>
          <h2 className="faq-tag-title-h3" style={{textAlign:'left', fontSize: "22px"}}>
            <strong>Documents Required for New PAN Application</strong>
          </h2>

          <p style={{ textAlign: "left" }}>
            It requires minimal documents to get a new PAN card online. PAN
            (Permanent Account Number) is a must for tax filing, bank account
            opening, and financial transactions in India. So:
          </p>
          <ul>
            <li>
              Aadhaar Card (must) – Your Aadhaar number is taken as the
              identification and linking will be done.{" "}
            </li>
            <li>
              {" "}
              Passport-size Photograph – A recent, clear photo (as per the
              government's standards).
            </li>
            <li>
              Proof of Date of Birth – Aadhaar, birth certificate, or passport.{" "}
            </li>
            <li>
              {" "}
              Mobile Number Linked to Aadhaar – Needed for OTP-based e-KYC
              verification.
            </li>
            <li>
              {" "}
              Valid Email Address – For e-PAN delivery and other communication.
            </li>
            <li> e-KYC</li>
            <li>
              {" "}
              Aadhaar-based e-KYC removes the need for physical paperwork and
              signatures.
            </li>
          </ul>
          <h2 className="faq-tag-title-h3" style={{textAlign:'left', fontSize: "22px"}}>
            <strong>Online PAN Application – Steps for Filling</strong>
          </h2>
             <p style={{ textAlign: "left" }}>Filing for a PAN card online is a fully digital procedure, which is why it is more efficient and convenient than going to the government offices. A guide to the procedure in brief:</p>
          <p style={{ textAlign: "left", fontWeight: "bold" }}>PAN Application Type Selection</p>
          <p style={{ textAlign: "left" }}>Choose “New PAN Card” if you want to create a new one or “Correction/Update PAN” to modify the existing one.</p>
          <p style={{ textAlign: "left", fontWeight: "bold" }}>Complete the Form (49A)</p>
          <p style={{ textAlign: "left" }}>Type your name, father’s name, date of birth, Aadhaar, and contact details correctly to assure acceptance of the form.</p>
          <p style={{ textAlign: "left", fontWeight: "bold" }}>Submit the Documents for PAN</p>
          <p style={{ textAlign: "left" }}>Submit the electronic copies of your Aadhaar and any other required documents.</p>
          <p style={{ textAlign: "left", fontWeight: "bold" }}>e-KYC & Payment</p>
          <p style={{ textAlign: "left" }}>Authenticate identity through Aadhaar OTP and make the payment online.</p>
          <p style={{ textAlign: "left", fontWeight: "bold" }}>Get your e-PAN</p>
       <p style={{ textAlign: "left" }}>The e-PAN card will be with you 24–48 hours after successful online filing and a physical card will be delivered to you within 15–20 working days.</p>

          <h2 className="faq-tag-title-h3" style={{textAlign:'left', fontSize: "22px"}}>
            <strong>How to Reapply for a Lost or Damaged PAN Card</strong>
          </h2>
          <p style={{ textAlign: "left" }}>Losing your PAN card can be stressful, but you don’t need to worry — applying for a replacement is quick and easy. Follow these steps:</p>
          <p style={{ textAlign: "left", fontWeight: "bold" }}>Gather Your Aadhaar & PAN Details</p>
          <p style={{ textAlign: "left" }}> Have your Aadhaar card and PAN number handy (PAN copy if available).</p>
          <p style={{ textAlign: "left", fontWeight: "bold" }}>Submit a Reprint Request</p>
          <p style={{ textAlign: "left"}}> Choose the ‘Reprint/Replacement’ option while filling the PAN form online.</p>
          <p style={{ textAlign: "left", fontWeight: "bold" }}>Verify Identity</p>
          <p style={{ textAlign: "left" }}>Complete OTP-based Aadhaar e-KYC for instant verification.</p>
          <p style={{ textAlign: "left", fontWeight: "bold" }}>Pay the Replacement Fee</p>
          <p style={{ textAlign: "left" }}> A small fee is charged for reissuing your PAN card.</p>
          <p style={{ textAlign: "left", fontWeight: "bold" }}>Receive Your e-PAN and Physical Card</p>
          <ul>
            <li>e-PAN: Delivered via email in 24–48 hours.</li>
             <li>Physical PAN Card: Delivered to your registered address in 20–30 working days.</li>
          </ul>

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
                      textAlign: "left",
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
                      textAlign: "left",
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
export default Pancard;
