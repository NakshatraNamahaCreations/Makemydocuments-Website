import React, { useState, useEffect } from "react";
import Image30 from "../../images/passport_image.svg";
import circleIcon from "../../images/circle1.svg";
import documentsIcon from "../../images/documents.svg";
import TimeIcon from "../../images/Time.svg";
import Price from "../../images/Price Tag.svg";
import axios from "axios";
import { useLayoutEffect } from "react";
import "../passport/passport.css"
import { ArrowLeft } from "lucide-react";
import { FaArrowLeft } from "react-icons/fa";
import howIcon from "../../images/how.svg";
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

const relatedServices = [
    { name: "Insurance", path: "/insurance" },
    { name: "Travel Visa", path: "/visa" },
    { name: "Police Verification", path: "/policeverification" },
    { name: "Police Clearance Certificate", path: "/police-clearance-certificate" },
    { name: "Pan Card", path: "/pan-card" },
    { name: "Affidavits / Annexure", path: "/affidavits" },
  ];

const PassportAgency = () => {
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
  const [nearbypolicestation, setNearByPoliceStation] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [houseStreetName, setHouseStreetName] = useState("");
  const [villageTownCity, setVillageTownCity] = useState("");
  const [dob, setDob] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [pincode, setPincode] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [qualification, setQualification] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [applyingFor, setApplyingFor] = useState("");
  // const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const [active, setActive] = useState(null);
//   const navigate = useNavigate();

const handleClick = (service) => {
    setActive(service.name);
    navigate(service.path);
  };


  useLayoutEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [showOtpSection, setShowOtpSection] = useState(true);
  const [typeofapplication, setTypeOfApplication] = useState(true);
  const openPopup = () => {
       setShowPopup(true);
       navigate("/passport-form"); // Update the URL
     };
   
     // Function to close the popup and revert the URL
     const closePopup = () => {
       setShowPopup(false);
       navigate("/passport"); // Revert the URL
       setCurrentStep(1);
       setIsCompleted(false);
     };
   
     React.useEffect(() => {
      if (location.pathname === "/passport-form" || location.pathname === "/passport/proceed-to-pay") {
        setShowPopup(true);
      } else {
        setShowPopup(false);
      }
    }, [location.pathname]);
    
  const [typeofbooklet, setTypeOfBooklet] = useState("");
  const [surname, setSurName] = useState('');
  const [registrationNumber, setSeletedRegistrationNumber] = useState("");
  const [placeofbirth, setPlaceOfBirth ] = useState('');
  const handleDob = (e) => setDob(e.target.value);
  const handleQualification = (e) => setQualification(e.target.value);
  const handleNearbyPoliceStation =(e) => setNearByPoliceStation (e.target.value)
 const  handleSurName = (e) => setSurName(e.target.value);
  const handleMaritalStatus = (e) => setMaritalStatus(e.target.value);
  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };
  const handlePlaceOfBirth =(e) => setPlaceOfBirth (e.target.value);
  const handleTypeOfBooklet = (e) => setTypeOfBooklet(e.target.value);
  const handleMotherName = (e) => setMotherName(e.target.value);
  const handleFatherName = (e) => setFatherName(e.target.value);
  // const handleGender = (e) => setSelectedGender(e.target.value);
  const handleTypeOfApplication = (e) => setTypeOfApplication(e.target.value);
  const handleEmailIdChange = (e) => setEmailId(e.target.value);
  const handleVillageTownCityChange = (e) => setVillageTownCity(e.target.value);
  const handleStateChange = (e) => setSelectedState(e.target.value);
  const handleDistrictChange = (e) => setSelectedDistrict(e.target.value);
  const handleRegistrationNumber = (e) =>
    setSeletedRegistrationNumber(e.target.value);
  const handleApplyingFor = (e) => setApplyingFor(e.target.value);
  const [applicationType, setApplicationType] = useState("");
  const [passportBookletType, setPassportBookletType] = useState("");
  const [educationQualification, setEducationQualification] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  // const [maritalstatus, setMaritalStatus]=useState("");
  const [gender, setGender] = useState("");
  const getMaskedMobileNumber = (number) => {
    if (!number || number.length < 3) return ""; // Return empty if number is too short
    const firstTwo = number.slice(0, 2); // First two digits
    const lastDigit = number.slice(-1); // Last digit
    const masked = `${firstTwo}******${lastDigit}`; // Mask the middle digits
    return masked;
  };

  const [spouseName, setSpouseName] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
const [leadId,setLeadId]=useState();
  const selectedStateData = stateData.find(
    (stateObj) => stateObj.state === selectedState
  );
  const districts = selectedStateData ? selectedStateData.districts : [];


  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };


  // Navigate steps
  const validateStep = () => {
    let errors = {};
    switch (currentStep) {
      case 1:
        const applyingForOptions =
          document.getElementsByName("agreementOption");
        if (!Array.from(applyingForOptions).some((option) => option.checked)) {
          errors.applyingFor = "Please select an option.";
        }
        break;
      case 2:
      case 2:
        if (!applicationType) {
          errors.applicationType = "Please select a type of application.";
        }
        if (!passportBookletType) {
          errors.passportBookletType =
            "Please select a type of passport booklet.";
        }
        if (!selectedGender) {
          errors.selectedGender = "Please select your gender.";
        }
        break;

        case 3:
          if (!fullName.trim()) {
              errors.fullName = "Given Name is required.";
          }
          if (!surname.trim()) {
              errors.surname = "Surname is required.";
          }
          if (!dob) {
              errors.dob = "Date of Birth is required.";
          } else {
              const selectedDate = new Date(dob);
              const year = selectedDate.getFullYear();

              if (year.toString().length !== 4) {
                  errors.dob = "Year must be a 4-digit number.";
              } else if (selectedDate > new Date()) {
                  errors.dob = "Date of Birth cannot be in the future.";
              }
          }
          if (!placeofbirth.trim()) {
              errors.place = "Place of Birth is required.";
          }
          break;
      case 4:
        if (!qualification) {
          errors.qualification = "Please select your education qualification.";
        }
        if (!employmentType) {
          errors.employment = "Please select your employment type.";
        }
        break;
      case 5:
        if (!maritalStatus) {
          errors.maritalStatus = "Please select your marital status.";
        }
        break;
      case 6:
        if (!fatherName) {
          errors.fatherName = "Father's Given Name is required.";
        }
        if (!motherName) {
          errors.motherName = "Mother's Given Name is required.";
        }
        break;
      case 7:
        if (!villageTownCity) {
          errors.villageTownCity = "House No. and Street Name is required.";
        }
        if (!selectedState) {
          errors.selectedState = "State is required.";
        }
        if (!selectedDistrict) {
          errors.selectedDistrict = "District is required.";
        }
        if (!document.getElementById("pincode").value) {
          errors.pincode = "Pin Code is required.";
        }
        if (!emailId) {
          errors.emailId = "Email ID is required.";
        }
        if (!mobileNumber) {
          errors.mobileNumber = "Mobile Number is required.";
        }
        break;
      default:
        break;
    }
    return errors;
  };

  const nextStep = () => {
    const errors = validateStep();
    if (Object.keys(errors).length === 0) {
      setErrorMessages({});
      if (currentStep < 7) setCurrentStep(currentStep + 1);
    } else {
      setErrorMessages(errors);
    }
  };

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
      setOtpSent(false); // Reset otpSent when countdown reaches zero
    }
  }, [resendCountdown, otpSent]);



  const generateOrderId = () => {
    return `ORD${Date.now()}`;
  };

  const handleInputChange = (e) => {
    const value = e.target.value;

    // Only allow numeric input and limit it to 6 digits
    if (/^\d{0,6}$/.test(value)) {
      setPincode(value);
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        pincode: "", // Clear error if the input is valid
      }));
    }
  };

  const handleBlur = () => {
    // Validate pin code length when user leaves input field
    if (pincode.length !== 6) {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        pincode: "Pin Code must be exactly 6 digits.",
      }));
    }
  };

  const [userDetails, setUserDetails] = useState(null); // Holds user details
  const [orderid, setOrderID] = useState();
  const [paidAmount, setPaidAmount] = React.useState(99); 
  const [paymentSuccess, setPaymentSuccess] = React.useState(false);
  
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
      ORDER_ID: orderId,
      CUST_ID: custId,
      INDUSTRY_TYPE_ID: "Retail",
      CHANNEL_ID: "WEB",
      TXN_AMOUNT: txnAmount.toString(),
      WEBSITE: "DEFAULT",
      SERVICE: "PassPort",
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
  

  // useEffect(() => {
  //   window.scrollTo(0, 0); // Opens at the top without scrolling
  // }, []);

  const checkPaymentStatus = async (orderid) => {
    try {
      const statusResponse = await axios.get(
        `https://makemydocuments.nakshatranamahacreations.in/payment-status.php?orderid=${orderid}`
      );
  
      if (statusResponse.status === 200) {
        console.log("Payment Status Response:", statusResponse.data);
  
       
        if (statusResponse.data.status === "SUCCESS") {
          // alert("Payment was successful!");
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
          navigate("/passport/proceed-to-pay");
          // await sendMessage(formattedNumber);
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


  const sendMessage = async (formattedNumber) => {
    try {
      const name = fullName || "User"; // Assuming `fullName` is available in your state
      const url = `https://makemydocuments.nakshatranamahacreations.in/message-insurance.php?mobile=${formattedNumber}&name=${encodeURIComponent(
        name
      )}`;

      const response = await axios.get(url);

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
  
    const [date, setDate] = useState(null);  // Manage date state
          const [time, setTime] = useState(null);  // Manage time state
         
          useEffect(() => {
            if (!date) {
              setDate(new Date().toISOString().split("T")[0]); // Set the current date once when the component mounts
            }
            if (!time) {
              setTime(new Date().toLocaleTimeString("en-US", { hour12: false })); // Set the current time once when the component mounts
            }
          }, []); 

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
      orderid:orderid || "",
      name: fullName || "",
      mobilenumber: mobileNumber || "",
      email: emailId || "",
      services: selectedOption || "",
      address: villageTownCity || "", 
      district: selectedDistrict || "",
      date: date,
      dob: dob || "",
      insurance_registration_number: registrationNumber || "",
      paidAmount: "99",
      qualification: qualification || "",
      typeofapplication: typeofapplication || "",
      applying_for: applyingFor || "",
      applicationType : applicationType ||"",
      // PGID:`ORD_${Date.now()}`,
      passportBookletType : passportBookletType || "",
      gender: selectedGender || "",
      spouseName : spouseName || "",
      placeofbirth : placeofbirth || "",
      nearby_police_station : nearbypolicestation || "",
      fathername: fatherName || "",
      surname : surname || "",
      mothername: motherName || "",
      employmentType : employmentType  || "",
      pincode: pincode || "",
      adharnumber: aadharNumber || "",
      maritalStatus: maritalStatus || "",
      pancard: "",
      time: time,
      comment: "",
      status: "",
      service: "PassPort",
    
      // existingpancardnumber: existingPanCardNumber || "",
      village: villageTownCity || "",
      state: selectedState || "", 
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
            name: leadData.name || "",
            mobilenumber: leadData.mobilenumber || "",
            orderid: leadData.orderId || "",
            services: leadData.services || "N/A",
            paidAmount: leadData.paidAmount || "₹99",
            // PGID: leadData.PGID,
          });
      } else {
      }
    } catch (error) {
      console.error("Error while saving data:", error);
      // alert("An error occurred while saving your details. Please try again.");
    }
  };

  const faqs = [
    {
      question: "Can I track the status of my passport application?",
      // answer: (
      //   <ul style={{ listStyleType: 'disc' }}>
      //     <li>Minimizes the conflicts between a tenant and the owner</li>
      //     <li>Rental/lease agreement acts as an address proof</li>
      //     <li>Acts as a proof for Bank loans</li>
      //     <li>Helps in investment & loan</li>
      //     <li>Vehicle registration</li>
      //   </ul>
      // ),
      answer:
        "Yes, you can track the status of your passport application online through the Passport Seva Portal. Use the application reference number (ARN) or passport number to check the current status of your application.",
    },
    {
      question: "Can I apply for a passport for my minor child?",
      answer:
        "Yes, you can apply for a passport for your minor child. The process requires both parents' consent and the child’s birth certificate or school ID will be needed as proof of age. Parents must also submit their documents alongside those of the child.",
    },
    {
      question: "How do I change the address on my passport?",
      answer: "To change the address on your passport, you need to apply for a re-issue of the passport with the updated address. Submit proof of your new address (e.g., utility bill, rental agreement) along with your application for passport re-issue.",
    },
    {
      question: "What should I do if I have lost my passport?",
      answer: "If you've lost your passport, immediately report the loss to the local police station and obtain a police report. Then, apply for a replacement passport through the Passport Seva Portal by submitting the necessary documents, including the police report.",
    },
    {
      question: "What should I do if there is a mistake on my passport?",
      answer:
        "If you find a mistake on your passport, you should immediately apply for a correction through the Passport Seva Portal. Submit the relevant documents to correct the information and the passport will be reissued with the accurate details.",
    },
    {
      question: "Do I need to have an Aadhaar card for passport application?",
      answer: "While an Aadhaar card is not mandatory for passport applications, it is recommended as a valid proof of identity and address. If you don’t have one, other documents like voter ID or ration card can also be used.",
    },
    {
      question: "What happens if my passport application is rejected?",
      answer:
        "If your passport application is rejected, the passport authorities will inform you of the reason for rejection. You can rectify the issue, such as providing missing documents or clarifications and reapply for the passport.",
    },
    {
      question: "How do I know if my passport application is approved?",
      answer:
        "You can check the status of your passport application through the Passport Seva Portal using your application reference number (ARN). Once approved, you will be notified and your passport will be dispatched.",
    },
    {
      question: "Can I change my name on the passport after marriage?",
      answer:
        "Yes, you can change your name on the passport after marriage. You need to submit proof of your marriage (marriage certificate) along with a passport re-issue application to update your name in the passport.",
    },
    {
      question: "What is the difference between normal and Tatkal passport services?",
      answer:
        "Normal passport service takes 7 to 15 working days, while Tatkal service ensures faster processing, usually within 1 to 3 working days. Tatkal service comes with an additional fee for expedited processing.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <Helmet>
    <title>Get Your Passport Fast | Passport Agency in Bangalore
    </title>
<meta name="description" content="Need your passport fast? Our passport agency in Bangalore provides expert assistance for new applications, renewals and corrections to ensure a smooth process.
"/>
<meta name="keywords" content="passport, get passport fast, passport application, passport services, passport assistance, hassle-free passport, quick passport, passport team, passport solutions, secure passport, professional passport services, efficient passport application"/>
<link rel="canonical" href="https://makemydocuments.com/passport-agency-in-bangalore
" />
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

    </Helmet>
    <div style={{overflow:'hidden'}}>
      <div>
        <div className="container-passport" style={{height:'480px'}}
    //       style={{
    //         background: "linear-gradient(182.42deg, #FCA505 2.01%, #FFFFFF)",
    //         height: '500px',
    // paddingTop: '20px',
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    // padding: '0 20px'
    //       }}
        >
          <div style={{ flex: 1, textAlign: "left", fontWeight: "bold" }}>
            <h1 style={{fontSize:'24px', fontWeight:'bold'}}>Passport Agency in Bangalore
            </h1>
            <p>"Looking to get your passport without the hassle? <br className="d-block d-lg-none"/>
            Our expert team in Bangalore offers seamless <br className="d-block d-lg-none"/>assistance with all your passport-related needs"</p>
          </div>
          <div className="passport-image" style={{marginTop:'10%'}}>
            <img
              src={Image30}
              alt="Rental Agreement"
              // style={{ maxWidth: '80%', height: '20%', marginTop:'20%' }}
            />
          </div>
        </div>
      </div>

      <div
  className="content-section d-none d-lg-block"
  style={{
    backgroundColor: "#fffff",
    padding: "30px 15px",
    borderRadius: "10px",
    margin: "-1% auto",
    display: "flex",
    marginLeft:'-8%',
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between"
  }}
>
  {/* Section 1: Documents Required For Fresh Passport */}
  <div className="d-flex align-items-start w-100 flex-wrap mt-3 gap-3"style={{marginLeft:'14%'}} >
  {/* Image Section */}
  <div className="d-flex justify-content-center align-items-center">
    <div style={{ position: "relative", display: "inline-block" , marginTop:'-36%'}}>
      <img
        src={circleIcon}
        alt="Circle Background"
        className="img-fluid"
        // style={{ maxWidth: "100px" }}
      />
      <img
        src={documentsIcon}
        alt="Documents Icon"
        style={{
          position: "absolute",
          top: "56%",
          left: "43%",
          transform: "translate(-50%, -50%)",
          maxWidth: "35px",
        }}
      />
    </div>
  </div>

  {/* Content Section */}
  <div>
    <h5 className="text-primary font-weight-bold mb-2" style={{fontWeight:'bold'}}>Documents Required For Fresh Passport</h5>

    {/* Proof of Identity */}
    <ul className="pl-3 mb-2" style={{ listStyleType: "disc" }}>
      <li className="font-weight-bold" style={{fontWeight:'bold'}}>Proof of Identity (Any 01)</li>
      <li>Aadhar Card</li>
      <li>Voter ID</li>
      <li>Pan Card</li>
      <li>Driving Licence</li>
    </ul>

    {/* Proof of Address */}
    <ul className="pl-3 mb-2" style={{ listStyleType: "disc" }}>
      <li className="font-weight-bold" style={{fontWeight:'bold'}}>Proof of Address (Any 01)</li>
      <li>Aadhar Card</li>
      <li>Voter ID</li>
      <li>Bank Account Passbook</li>
      <li>Gas Connection Bill / Electricity Bill / Telephone Bill / Water Bill</li>
      <li>Parents Passport / Spouse Passport</li>
    </ul>

    {/* Proof of Birth */}
    <ul className="pl-3 mb-2" style={{ listStyleType: "disc" }}>
      <li className="font-weight-bold" style={{fontWeight:'bold'}}>Proof of Birth (Any 01)</li>
      <li>10th Certificate</li>
      <li>12th Certificate</li>
      <li>Higher Education Pass Certificate</li>
      <li>School Leaving Certificate</li>
      <li>Income Tax Assessment Order</li>
    </ul>
  </div>
</div>


  {/* Section 2: Document Required for Renewal / Reissue of Passport */}
  <div className="d-flex align-items-center w-100 flex-wrap mt-3 gap-3" style={{marginLeft:'14%'}}>
  {/* Image Section */}
  <div className="d-flex justify-content-center align-items-center">
    <div style={{ position: "relative", display: "inline-block", marginTop: "-52px" }}>
      <img
        src={circleIcon}
        alt="Circle Background"
        className="img-fluid"
        // style={{ maxWidth: "100px" }}
      />
      <img
        src={documentsIcon}
        alt="Documents Icon"
        style={{
          position: "absolute",
          top: "56%",
          left: "43%",
          transform: "translate(-50%, -50%)",
          maxWidth: "35px",
        }}
      />
    </div>
  </div>

  {/* Content Section */}
  <div>
    <h5 className="text-primary font-weight-bold mb-1" style={{ fontWeight: "bold" }}>
      Document Required for Renewal / Reissue of Passport
    </h5>
    <ul className="pl-3 mb-1" style={{ listStyleType: "disc" }}>
      <li>Original Old Passport</li>
      <li>Id And Present Address Proof</li>
    </ul>
  </div>
</div>


  {/* Section 3: Document Required for Minor Passport */}
  <div className="d-flex align-items-center w-100 mt-5 gap-3" style={{marginLeft:'14%'}}>
  {/* Image Section */}
  <div style={{ position: "relative", display: "inline-block" , marginTop:'-4%'}}>
    <img src={circleIcon} alt="Circle Background" className="img-fluid" style={{ maxWidth: "" }}/>
    <img
      src={documentsIcon}
      alt="Documents Icon"
      style={{
        position: "absolute",
        top: "56%",
        left: "43%",
        transform: "translate(-50%, -50%)",
        maxWidth: "35px",
      }}
    />
  </div>

  {/* Content Section */}
  <div>
    <h5 style={{ color: "#007BFF", fontWeight: "bold", whiteSpace: "nowrap" }}>
      Document Required for Minor Passport
    </h5>
    <ul style={{ listStyleType: "disc", paddingLeft: "20px", whiteSpace: "nowrap",  }}>
      <li>Birth Certificate</li>
      <li>Both Parents Passport</li>
    </ul>
  </div>
</div>

<div className="d-flex align-items-center w-100 flex-wrap mt-5 gap-3" style={{marginLeft:'14%'}}>
  {/* Image Section */}
  <div className="d-flex justify-content-center align-items-center">
    <div style={{ position: "relative", display: "inline-block" , marginTop:'-200%'}}>
      <img src={circleIcon} alt="Circle Background" className="img-fluid" style={{maxWidth:''}} />
      <img
        src={howIcon}
        alt="How It Works Icon"
        style={{
          position: "absolute",
        top: "56%",
        left: "43%",
        transform: "translate(-50%, -50%)",
        maxWidth: "35px",
        }}
      />
    </div>
  </div>

  {/* Content Section */}
  <div>
    <h5 style={{ color: "#007BFF", fontWeight: "bold", whiteSpace: "nowrap" }}>How It Works</h5>
    <ul style={{ listStyleType: "disc", paddingLeft: "20px",}}>
      <li>Register Online & Make Payment</li>
      <li>Upload Documents</li>
      <li>Get Appointment</li>
      <li>Visit PSK</li>
      <li>Get Delivered</li>
    </ul>
  </div>
</div>


  {/* Section 3: Time Duration */}
  <div className="d-flex align-items-center w-100 flex-wrap mt-5 gap-3" style={{marginLeft:'14%'}}>
  {/* Image Section */}
  <div className="d-flex justify-content-center align-items-center">
    <div style={{ position: "relative", display: "inline-block", marginTop:'-111%' }}>
      <img src={circleIcon} alt="Circle Background" className="img-fluid" style={{maxWidth:''}} />
      <img
        src={TimeIcon}
        alt="Time Duration Icon"
        style={{
          position: "absolute",
          top: "56%",
          left: "43%",
          transform: "translate(-50%, -50%)",
          maxWidth: "35px",
        }}
      />
    </div>
  </div>

  {/* Content Section */}
  <div>
    <h5 style={{ color: "#007BFF", fontWeight: "bold" }}>Time Duration</h5>
    <ul style={{ listStyleType: "disc", paddingLeft: "20px",  }}>
      <li>15-20 working days (Normal)</li>
      <li>5-10 working days (Tatkal)</li>
    </ul>
  </div>
</div>


  {/* Section 4: Charges */}
  <div className="d-flex align-items-center w-100 flex-wrap mt-5 gap-3" style={{marginLeft:'14%'}}>
  {/* Image Section */}
  <div className="d-flex justify-content-center align-items-center">
    <div style={{ position: "relative", display: "inline-block",  marginTop:'-160%' }}>
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
  </div>

  {/* Content Section */}
  <div>
    <h5 style={{ color: "#007BFF", fontWeight: "bold" }}>Charges</h5>
    <ul style={{ listStyleType: "disc", paddingLeft: "20px", }}>
      <li><strong>Rs. 2,499</strong> For (Normal Application)</li>
      <li><strong>Rs. 4,499</strong> For (Tatkal Application)</li>
      <li><strong>Rs. 99</strong> as booking fee. Need to pay while submitting online form (This fee is non-refundable and <br/> will be adjusted in the total bill.)</li>
    </ul>
  </div>
</div>

</div>



      <div className="document-container d-block d-lg-none" style={{marginTop:'-34%'}}>
  {/* Section for Fresh Passport */}
  <div className="document-section fresh-passport row-container">
    <div className="icon-container">
      <div style={{ position: "relative", }}>
        <img src={circleIcon} alt="Circle Background" className="img-fluid" style={{ width:"50%"}}/>
        <img
          src={documentsIcon}
          alt="Documents Icon"
          style={{
            position: "absolute",
            top: "71%",
            left: "50%",
            width:'20px',
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
    </div>
    <div className="content-container">
      <h4 className="section-title" style={{ textAlign: "left" }}>
        Documents Required For Fresh <br /> Passport
      </h4>
      <ul className="document-list" style={{ listStyleType: "disc",}}>
        <li className="list-title">Proof of Identity (Any 01)</li>
        <li >Aadhar Card</li>
        <li >Voter ID</li>
        <li >Pan Card</li>
        <li >Driving Licence</li>
      </ul>
      <ul className="document-list" style={{ listStyleType: "disc",}}>
        <li className="list-title">Proof of Identity (Any 01)</li>
        <li >Aadhar Card</li>
        <li >Voter ID</li>
        <li >Bank Account Passbook</li>
        <li >Gas Connection Bill / Electricity Bill / Telephone Bill / Water Bill</li>
        <li >Parents Passport / Spouse Passport</li>
      </ul>
      <ul className="document-list" style={{ listStyleType: "disc",}}>
        <li className="list-title">Proof of Identity (Any 01)</li>
        <li >10th Certificate</li>
        <li >12th Certificate</li>
        <li>Higher Educational Pass Certificate</li>
        <li >School leaving Certificate</li>
        <li>Income Tax Assessment Order</li>
      </ul>
    </div>
  </div>

  {/* Section for Renewal / Reissue */}
  <div className="document-section renewal-passport row-container">
    <div className="icon-container">
      <div style={{ position: "relative", }}>
        <img src={circleIcon} alt="Circle Background" className="img-fluid" style={{ width:"50%"}}/>
        <img
          src={documentsIcon}
          alt="Documents Icon"
          style={{
            position: "absolute",
            top: "71%",
            width:'20px',
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
    </div>
    <div className="content-container">
      <h4 className="section-title" style={{ textAlign: "left" }}>
        Document Required for Renewal / <br /> Reissue of Passport
      </h4>
      <ul className="document-list"  style={{ listStyleType: "disc",}}>
        <li >Original Old Passport</li>
        <li>Id And Present Address Proof</li>
      </ul>
    </div>
  </div>

  {/* Section for Minor Passport */}
  <div className="document-section minor-passport row-container">
    <div className="icon-container">
      <div style={{ position: "relative" ,  }}>
        <img src={circleIcon} alt="Circle Background" className="img-fluid" style={{ width:"50%"}}/>
        <img
          src={documentsIcon}
          alt="Documents Icon"
          style={{
            position: "absolute",
            top: "71%",
            width:'20px',
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
    </div>
    <div className="content-container">
      <h4 className="section-title" style={{ textAlign: "left" }}>
        Document Required for Minor <br/> Passport
      </h4>
      <ul className="document-list" style={{ listStyleType: "disc",}}>
        <li >Birth Certificate</li>
        <li >Both Parents Passport</li>
      </ul>
    </div>
  </div>

  {/* Section for How It Works */}
  <div className="document-section how-it-works row-container">
    <div className="icon-container">
      <div style={{ position: "relative" ,  }}>
        <img src={circleIcon} alt="Circle Background" className="img-fluid" style={{ width:"50%"}}/>
        <img
          src={howIcon}
          alt="How It Works Icon"
          style={{
            position: "absolute",
            top: "71%",
            width:'20px',
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
    </div>
    <div className="content-container">
      <h4 className="section-title" style={{ textAlign: "left" }}>
        How It Works
      </h4>
      <ul className="document-list" style={{ listStyleType: "disc",}}>
        <li >Register Online & Make Payment</li>
        <li >Upload Documents</li>
        <li>Get Appointment</li>
        <li >Visit Psk</li>
        <li >Get Delivered</li>
      </ul>
    </div>
  </div>

  {/* Section for Time Duration */}
  <div className="document-section time-duration row-container">
    <div className="icon-container">
      <div style={{ position: "relative", }}>
        <img src={circleIcon} alt="Circle Background" className="img-fluid" style={{ width:"50%"}}/>
        <img
          src={TimeIcon}
          alt="Time Icon"
          style={{
            position: "absolute",
            top: "71%",
            width:'20px',
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
    </div>
    <div className="content-container">
      <h4 className="section-title" style={{ textAlign: "left" }}>
        Time Duration
      </h4>
      <ul className="document-list" style={{ listStyleType: "disc",}}>
        <li >15-20 working days (Normal)</li>
        <li >5-10 working days (Tatkal)</li>
      </ul>
    </div>
  </div>

  {/* Section for Charges */}
  <div className="document-section charges-section row-container">
    <div className="icon-container">
      <div style={{ position: "relative",  }}>
        <img src={circleIcon} alt="Circle Background" className="img-fluid" style={{ width:"50%"}}/>
        <img
          src={Price}
          alt="Charges Icon"
          style={{
            position: "absolute",
            top: "70%",
            width:'20px',
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
    </div>
    <div className="content-container">
      <h4 className="section-title" style={{ textAlign: "left" }}>
        Charges
      </h4>
      <ul className="document-list" style={{ listStyleType: "disc",}}>
        <li >
          <strong>Rs. 2,499</strong> For (Normal Application)
        </li>
        <li >
          <strong>Rs. 4,499</strong> For (Tatkal Application)
        </li>
        <li>
          <strong>Rs.99</strong> as booking fee. Need to pay while submitting online form (This fee is non-refundable and will be adjusted in the total bill.)
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
  <button className="continue-button" onClick={openPopup} style={{borderRadius:'0px'}}>
  Apply Now
  </button>
</div>

        {/* Modal Popup */}
        {showPopup && (
          <div
           className="popupstyle-passport"
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
            <div className="popup-passport"
              // style={{
              //   backgroundColor: "#FFFFFF",
              //   padding: "40px",
              //   borderRadius: "28px",
              //   width: "70%",
              //   maxHeight: "90%",
              //   overflowY: "auto",
              //   textAlign: "center",
              //   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              // }}
            >
              {/* Stepper */}
              {!isCompleted ? (
                <>
                  <div className="stepper-passport"
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
                          <button className="button-passport-stepper"
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
                      <div style={{ textAlign: "center" }}>
                        <h5 style={{ color: "#007BFF", fontWeight: "bold" }}>
                          Applying For
                          <span style={{ color: "red" }}>*</span>
                        </h5>

                        {/* Radio Buttons */}
                        <div
                        
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            marginLeft: "4%",
                            textAlign:'left',
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
                              name="agreementOption"
                              value=" Fresh Passport"
                              onChange={handleApplyingFor}
                              style={{ marginRight: "10px" }}
                            />
                            Fresh Passport 
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
                              name="agreementOption"
                              value="Re-issue of Passport "
                              onChange={handleApplyingFor}
                              style={{ marginRight: "10px" }}
                            />
                            Re-issue of Passport 
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
                              name="agreementOption"
                              value="Change In Existing Personal Particulars "
                              onChange={handleApplyingFor}
                              style={{ marginRight: "10px" }}
                            />
                            Change In Existing Personal Particulars 
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
                              name="agreementOption"
                              value="Damaged Passport"
                              onChange={handleApplyingFor}
                              style={{ marginRight: "10px" }}
                            />
                            Damaged Passport 
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
                              name="agreementOption"
                              value="Exhaustion Of Pages"
                              onChange={handleApplyingFor}
                              style={{ marginRight: "10px" }}
                            />
                            Exhaustion Of Pages  
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
                              name="agreementOption"
                              value="Lost Passport"
                              onChange={handleApplyingFor}
                              style={{ marginRight: "10px" }}
                            />
                            Lost Passport
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
                              name="agreementOption"
                              value="Validity Expired More Than 3 Years Ago "
                              onChange={handleApplyingFor}
                              style={{ marginRight: "10px" }}
                            />
                            Validity Expired More Than 3 Years Ago 
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
                              name="agreementOption"
                              value="Validity Expired Within 3 Years/Due To Expire"
                              onChange={handleApplyingFor}
                              style={{ marginRight: "10px" }}
                            />
                            Validity Expired Within 3 Years/Due To Expire
                          </label>
                        </div>
                        {errorMessages.applyingFor && (
                          <p style={{ color: "red" }}>
                            {errorMessages.applyingFor}
                          </p>
                        )}
                      </div>
                    )}
                    {currentStep === 2 && (
                      <div style={{ textAlign: "center" }}>
                        <h5 style={{ color: "#007BFF", fontWeight: "bold" }}>
                          Application Details
                          <span style={{ color: "red" }}>*</span>
                        </h5>

                        {/* Type of Application */}
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
                          <h5 style={{ fontWeight: "600", fontSize: "22px" }}>
                            Type of Application
                          </h5>
                          <label
                            style={{
                              fontSize: "18px",
                              fontWeight: "500",
                              color: "#333",
                            }}
                          >
                            <input
                              type="radio"
                              name="applicationType"
                              value="normal"
                              onChange={(e) =>
                                setApplicationType(e.target.value)
                              }
                              style={{ marginRight: "10px" }}
                            />
                            Normal
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
                              name="applicationType"
                              value="tatkal"
                              onChange={(e) =>
                                setApplicationType(e.target.value)
                              }
                              style={{ marginRight: "10px" }}
                            />
                            Tatkal
                          </label>
                          {errorMessages.applicationType && (
                            <p style={{ color: "red" }}>
                              {errorMessages.applicationType}
                            </p>
                          )}
                        </div>
                        <br />
                        {/* Type of Passport Booklet */}
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
                          <h5 style={{ fontWeight: "600", fontSize: "22px", textAlign:'left' }}>
                            Type of Passport Booklet
                          </h5>
                          <label
                            style={{
                              fontSize: "18px",
                              fontWeight: "500",
                              color: "#333",
                            }}
                          >
                            <input
                              type="radio"
                              name="passportBookletType"
                              value="36Pages"
                              onChange={(e) =>
                                setPassportBookletType(e.target.value)
                              }
                              style={{ marginRight: "10px" }}
                            />
                            36 Pages
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
                              name="passportBookletType"
                              value="60Pages"
                              onChange={(e) =>
                                setPassportBookletType(e.target.value)
                              }
                              style={{ marginRight: "10px" }}
                            />
                            60 Pages
                          </label>
                          {errorMessages.passportBookletType && (
                            <p style={{ color: "red" }}>
                              {errorMessages.passportBookletType}
                            </p>
                          )}
                        </div>
                        <br />
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
                          <h5 style={{ fontWeight: "600", fontSize: "22px" }}>
                            Gender<span style={{ color: "red" }}>*</span>
                          </h5>
                          <label
                            style={{
                              fontSize: "18px",
                              fontWeight: "500",
                              color: "#333",
                            }}
                          >
                            <input
                              type="radio"
                              name="gender"
                              value="female"
                              onChange={handleGenderChange}
                              style={{ marginRight: "10px" }}
                            />
                            Female
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
                              name="gender"
                              value="male"
                              onChange={handleGenderChange}
                              style={{ marginRight: "10px" }}
                            />
                            Male
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
                              name="gender"
                              value="transgender"
                              onChange={handleGenderChange}
                              style={{ marginRight: "10px" }}
                            />
                            Transgender
                          </label>
                          {errorMessages.selectedGender && (
                            <p style={{ color: "red" }}>
                              {errorMessages.selectedGender}
                            </p>
                          )}
                       
                        </div>
                      </div>
                    )}
                    {currentStep === 3 && (
                      <div style={{ textAlign: "center" }}>
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="givenname"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Given Name
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            value={fullName}
                            onChange={handleFullNameChange}
                            id="givernname"
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
                           {errorMessages.fullName && (
                <p style={{ color: "red" }}>{errorMessages.fullName}</p>
            )}
                        </div>
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="surname"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Surname<span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            value={surname}
                            onChange={handleSurName}
                            id="ownerFatherName"
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
                             {errorMessages.surname && (
                <p style={{ color: "red" }}>{errorMessages.surname}</p>
            )}
                        </div>

                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="dateOfBirth"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Date of Birth
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="date"
                            id="dateOfBirth"
                            value={dob}
                            onChange={handleDob}
                            max={new Date().toISOString().split("T")[0]}
                            placeholder="Enter Date of Birth"
                            style={{
                              width: "100%",
                              height: "45px",
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "4px",
                            }}
                          />
                           {errorMessages.dob && (
                <p style={{ color: "red" }}>{errorMessages.dob}</p>
            )}
                        </div>
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="place"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Place of Birth (Village/ Town / City) *
                          </label>
                          <input
                            type="text"
                            value={placeofbirth}
                            onChange={handlePlaceOfBirth}
                            id="place"
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
                           {errorMessages.place && (
                <p style={{ color: "red" }}>{errorMessages.place}</p>
            )}
                        </div>
{/* 
                        {errorMessages.place && (
                          <p style={{ color: "red" }}>{errorMessages.place}</p>
                        )} */}
                      </div>
                    )}
                    {currentStep === 4 && (
                      <div style={{ textAlign: "center" }}>
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
                          <p style={{ fontWeight: "600", fontSize: "18px" }}>
                            Education Qualification
                          </p>

                          {/* Education Qualification Radio Buttons */}
                          <label
                            style={{
                              fontSize: "18px",
                              fontWeight: "500",
                              color: "#333",
                            }}
                          >
                            <input
                              type="radio"
                              name="qualification"
                              value="graduateAndAbove"
                              onChange={handleQualification}
                              style={{ marginRight: "10px" }}
                            />
                            Graduate And Above
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
                              name="qualification"
                              value="10thPassAndAbove"
                              onChange={handleQualification}
                              style={{ marginRight: "10px" }}
                            />
                            10th Pass And Above
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
                              name="qualification"
                              value="below10th"
                              onChange={handleQualification}
                              style={{ marginRight: "10px" }}
                            />
                            Below 10th
                          </label>

                          <p style={{ fontWeight: "600", fontSize: "18px" }}>
                            Employment Type
                          </p>

                          {/* Employment Type Radio Buttons */}
                          <label
                            style={{
                              fontSize: "18px",
                              fontWeight: "500",
                              color: "#333",
                            }}
                          >
                            <input
                              type="radio"
                              name="employmentType"
                              value="government"
                              onChange={(e) =>
                                setEmploymentType(e.target.value)
                              }
                              style={{ marginRight: "10px" }}
                            />
                            Government
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
                              name="employmentType"
                              value="private"
                              onChange={(e) =>
                                setEmploymentType(e.target.value)
                              }
                              style={{ marginRight: "10px" }}
                            />
                            Private
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
                              name="employmentType"
                              value="selfEmployed"
                              onChange={(e) =>
                                setEmploymentType(e.target.value)
                              }
                              style={{ marginRight: "10px" }}
                            />
                            Self Employed
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
                              name="employmentType"
                              value="student"
                              onChange={(e) =>
                                setEmploymentType(e.target.value)
                              }
                              style={{ marginRight: "10px" }}
                            />
                            Student
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
                              name="employmentType"
                              value="homeMaker"
                              onChange={(e) =>
                                setEmploymentType(e.target.value)
                              }
                              style={{ marginRight: "10px" }}
                            />
                            Home Maker
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
                              name="employmentType"
                              value="retired"
                              onChange={(e) =>
                                setEmploymentType(e.target.value)
                              }
                              style={{ marginRight: "10px" }}
                            />
                            Retired
                          </label>

                          {errorMessages.qualification && (
                            <p style={{ color: "red" }}>
                              {errorMessages.qualification}
                            </p>
                          )}
                          {errorMessages.employment && (
                            <p style={{ color: "red" }}>
                              {errorMessages.employment}
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                    {currentStep === 5 && (
                      <div style={{ textAlign: "center" }}>
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
                          <p style={{ color: "#1A76D8", fontWeight: "600" }}>
                            Marital Status{" "}
                            <span style={{ color: "red" }}>*</span>
                          </p>

                          {/* Marital Status Radio Buttons */}
                          <label
                            style={{
                              fontSize: "18px",
                              fontWeight: "500",
                              color: "#333",
                            }}
                          >
                            <input
                              type="radio"
                              name="maritalStatus"
                              value="single"
                              onChange={(e) => setMaritalStatus(e.target.value)}
                              style={{ marginRight: "10px" }}
                            />
                            Single
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
                              name="maritalStatus"
                              value="married"
                              onChange={(e) => setMaritalStatus(e.target.value)}
                              style={{ marginRight: "10px" }}
                            />
                            Married
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
                              name="maritalStatus"
                              value="widowWidower"
                              onChange={(e) => setMaritalStatus(e.target.value)}
                              style={{ marginRight: "10px" }}
                            />
                            Widow/Widower
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
                              name="maritalStatus"
                              value="separated"
                              onChange={(e) => setMaritalStatus(e.target.value)}
                              style={{ marginRight: "10px" }}
                            />
                            Separated
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
                              name="maritalStatus"
                              value="divorced"
                              onChange={(e) => setMaritalStatus(e.target.value)}
                              style={{ marginRight: "10px" }}
                            />
                            Divorced
                          </label>
                        </div>
                        {errorMessages.maritalStatus && (
                          <p style={{ color: "red" }}>
                            {errorMessages.maritalStatus}
                          </p>
                        )}
                      </div>
                    )}
                    {currentStep === 6 && (
                      <div style={{ textAlign: "center" }}>
                        <div style={{ marginBottom: "20px" }}>
                          <label
                            style={{ fontSize: "20px", fontWeight: "600" }}
                          >
                            Present Residential Address
                            <span style={{ color: "red" }}>*</span>
                          </label>
                        </div>

                        {/* Father's Given Name */}
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
                            Father's Given Name
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            value={fatherName}
                            onChange={handleFatherName}
                            placeholder=""
                            style={{
                              width: "100%",
                              padding: "10px",
                              marginTop: "10px",
                              border: "1px solid orange",
                              borderRadius: "4px",
                            }}
                          />
                          {errorMessages.fatherName && (
                            <p style={{ color: "red" }}>
                              {errorMessages.fatherName}
                            </p>
                          )}
                        </div>

                        {/* Mother's Given Name */}
                        <div
                          style={{ marginBottom: "40px", textAlign: "left" }}
                        >
                          <label
                            style={{ fontSize: "16px", fontWeight: "bold" }}
                          >
                            Mother's Given Name{" "}
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            value={motherName}
                            onChange={handleMotherName}
                            placeholder=""
                            style={{
                              width: "100%",
                              padding: "10px",
                              marginTop: "10px",
                              border: "1px solid orange",
                              borderRadius: "4px",
                            }}
                          />
                          {errorMessages.motherName && (
                            <p style={{ color: "red" }}>
                              {errorMessages.motherName}
                            </p>
                          )}
                        </div>

                        {/* Spouse's Given Name - Conditionally Rendered */}
                        {maritalStatus !== "single" &&
                          maritalStatus !== "widowWidower" &&
                          maritalStatus !== "divorced" && (
                            <div
                              style={{
                                marginBottom: "40px",
                                textAlign: "left",
                              }}
                            >
                              <label
                                style={{ fontSize: "16px", fontWeight: "bold" }}
                              >
                                Spouse's Given Name{" "}
                                <span style={{ color: "red" }}>*</span>
                              </label>
                              <input
                                type="text"
                                value={spouseName}
                                onChange={(e) => setSpouseName(e.target.value)}
                                placeholder=""
                                style={{
                                  width: "100%",
                                  padding: "10px",
                                  marginTop: "10px",
                                  border: "1px solid orange",
                                  borderRadius: "4px",
                                }}
                              />
                            </div>
                          )}
                      </div>
                    )}

                    {currentStep === 7 && (
                      <div style={{ textAlign: "center" }}>
                        {/* Step 3 Heading */}
                        <p style={{ color: "#1A76D8", fontWeight: "600" }}>
                          Present Residential Address
                          <span style={{ color: "red" }}>*</span>
                        </p>

                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            //  htmlFor="ownerName"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            House No. and Street Name
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            value={villageTownCity}
                            onChange={handleVillageTownCityChange}
                            id=""
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
                          {errorMessages.villageTownCity && (
                            <p style={{ color: "red" }}>
                              {errorMessages.villageTownCity}
                            </p>
                          )}
                        </div>

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
                            {errorMessages.selectedState && (
                              <p style={{ color: "red" }}>
                                {errorMessages.selectedState}
                              </p>
                            )}
                          </div>

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
                              {errorMessages.selectedDistrict && (
                                <p style={{ color: "red" }}>
                                  {errorMessages.selectedDistrict}
                                </p>
                              )}
                            </div>
                          )}
                        </div>

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
        id="pincode"
        value={pincode} // Bind the input value to the state
        onChange={handleInputChange} // Handle changes to input
        onBlur={handleBlur} // Validate when input loses focus
        maxLength="6" // Restrict input length to 6 characters
        placeholder="Enter Pin Code"
        style={{
          width: "100%",
          height: "45px",
          padding: "10px",
          fontSize: "16px",
          border: `2px solid ${errorMessages.pincode ? "red" : "#FCA505"}`, // Red border if there's an error
          borderRadius: "4px",
        }}
      />
      {errorMessages.pincode && (
        <p style={{ color: "red", fontSize: "14px", textAlign: "left" }}>
          {errorMessages.pincode}
        </p>
      )}
    </div>
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor=""
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Email ID <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            value={emailId}
                            onChange={handleEmailIdChange}
                            id=""
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
                          {errorMessages.emailId && (
                            <p style={{ color: "red" }}>
                              {errorMessages.emailId}
                            </p>
                          )}
                        </div>

                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            //  htmlFor="ownerName"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Nearest Police Station
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            id=""
                            value={nearbypolicestation}
                            onChange={handleNearbyPoliceStation}
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
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            //  htmlFor="ownerName"
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
                            id=""
                            value={mobileNumber}
                            onChange={handleMobileNumberChange}
                            placeholder=""
                            style={{
                              width: "100%",
                              height: "45px",
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "10px",
                            }}
                          />
                          {errorMessages.mobileNumber && (
                            <p style={{ color: "red" }}>
                              {errorMessages.mobileNumber}
                            </p>
                          )}
                        </div>

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
                      //   // onClick={()=>console.log("test009897", )}

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
                      //     if (!mobileNumber) {
                      //       setError("Mobile number is required.");
                      //       return;
                      //     }
                      //     handleSendOtp();
                      //     setShowOtpSection(true);
                      //     setError("");
                      //     setIsCompleted(true);
                      //   }}
                      //   style={{
                      //     padding: "10px 20px",
                      //     backgroundColor: "FCA505",
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
                          // Perform the 7th step validation
                          let errors = {};
                    
                          // 7th Step Validation
                          if (!villageTownCity) {
                            errors.villageTownCity = "House No. and Street Name is required.";
                          }
                          if (!selectedState) {
                            errors.selectedState = "State is required.";
                          }
                          if (!selectedDistrict) {
                            errors.selectedDistrict = "District is required.";
                          }
                          if (!pincode) {
                            errors.pincode = "Pin Code is required.";
                          } else if (!/^\d{6}$/.test(pincode)) {
                            errors.pincode = "Pin Code must be exactly 6 digits.";
                          }
                          if (!emailId) {
                            errors.emailId = "Email ID is required.";
                          }
                          if (!nearbypolicestation) {
                            errors.nearbypolicestation = "Nearest Police Station is required.";
                        }
                        
                          if (!mobileNumber) {
                            errors.mobileNumber = "Mobile Number is required.";
                          } else if (!/^\d{10}$/.test(mobileNumber)) {
                            errors.mobileNumber = "Mobile Number must be exactly 10 digits.";
                          }
                    
                          // If there are errors, set them and do not proceed
                          if (Object.keys(errors).length > 0) {
                            setErrorMessages(errors);
                            return;
                          }
                    
                          // Clear errors if validation passes
                          setErrorMessages({});
                          setError("");
                    
                          // Proceed with OTP and submission
                          handleSendOtp();
                          setShowOtpSection(true);
                          setIsCompleted(true);
                        }}
                        style={{ backgroundColor: '#fca505' }}
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
    Verify
  </button>
</div>

                    </div>
                  ) : (
                    <>
                 {location.pathname === "/passport/proceed-to-pay" && (
                    <>
       
            
                <h2 style={styles.thankYouMessage}>Thank You for Your Submission!</h2>
                <div style={{ padding: "10px", maxWidth: "600px", margin: "auto" }}>
  {/* Name and Mobile Number (Responsive) */}
  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
    <div style={{ flex: "1 1 45%", minWidth: "200px" }}>
      <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px", textAlign:'left' }}>Name</label>
      <input type="text" value={userDetails?.name || "N/A"} readOnly 
             style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "5px" }} />
    </div>
    <div style={{ flex: "1 1 45%", minWidth: "200px" }}>
      <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px", textAlign:'left' }}>Mobile Number</label>
      <input type="text" value={userDetails?.mobilenumber || "N/A"} readOnly 
             style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "5px" }} />
    </div>
  </div>

  {/* Order ID and Services (Responsive) */}
  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "10px" }}>
    <div style={{ flex: "1 1 45%", minWidth: "200px" }}>
      <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px", textAlign:'left' }}>Order ID</label>
      <input type="text" value={userDetails?.orderid} readOnly 
             style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "5px" }} />
    </div>
    <div style={{ flex: "1 1 45%", minWidth: "200px" }}>
      <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px" , textAlign:'left'}}>Services</label>
      <input type="text" value={applyingFor} readOnly 
             style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "5px" }} />
    </div>
  </div>

  {/* Amount Booking Fee */}
  <div style={{ marginTop: "10px" }}>
    <label style={{ fontWeight: "bold", display: "block", marginBottom: "5px" , textAlign:'left'}}>
      Amount (Booking Fee)
      {/* <p style={{ fontSize: "12px", margin: "5px 0" }} className="d-none d-lg-block">
        You can pay the balance amount post documents verification by our consultant:
      </p> */}
    </label>
    <input type="text" value={paidAmount || "₹0"} readOnly 
           style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "5px" }} />
    <p style={{ fontSize: "12px", marginTop: "5px" }} >
      You can pay the balance amount post documents verification by our consultant:
    </p>
  </div>
</div>



             
                <div className="proceed-button-container">
  <button
    onClick={handleProceedToPay}
    className="proceed-button"
    style={{color:'#000', fontWeight:'bold'}}
    disabled={isLoading} // Disable button while loading
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

      <div
      style={{
        backgroundColor: "#f8f8f8",
        padding: "30px 20px",
        borderRadius: "10px",
        textAlign: "center",
        margin: "40px auto",
        maxWidth: "1000px",
      }}
    >
      <h2 style={{ fontWeight: "bold", fontSize: "24px", marginBottom: "20px" }}>
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
              border: `1px solid ${active === service.name ? "#000" : "#ccc"}`,
              backgroundColor: active === service.name ? "#212529" : "#fff",
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
                <h5 style={{fontSize:'16px'}}>{faq.question}</h5>
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
            <strong>Passport Agency in Bangalore
            </strong>
          </h2>
          <p style={{textAlign:'left'}}>
          Are you looking for reliable and efficient passport services in Bangalore? Whether you are applying for your first passport, renewing an existing one or need assistance with a lost or damaged passport, we are here to guide you through the entire process. Our Passport Agency in Bangalore offers expert assistance to ensure that your application is submitted correctly and processed without any delays.

          </p>
          <p style={{textAlign:'left'}}>
          With years of experience in handling passport applications, we provide a range of services including guidance for online applications, document verification and personalized support for both individual and family passport needs. If you need help navigating the requirements or fast-tracking your application, our team is dedicated to making the process smooth and hassle-free. Let our team take care of your passport needs with professionalism and efficiency.

          </p>
          <br/>

          <h2  style={{textAlign:'left', fontSize:'18px'}}>
            <strong>Types of Indian Passports            </strong>
          </h2>
          <br/>
          <h3 style={{fontSize:'16px', fontWeight:'bold'}}>Ordinary Passport (Blue Passport)
          </h3>
          <p  style={{textAlign:'left'}}>
          The standard passport issued to Indian citizens for general travel purposes. It is valid for 10 years for adults and 5 years for minors. This passport is suitable for regular citizens traveling abroad for tourism, business, or personal reasons.

          </p>

          <h3 style={{fontSize:'16px', fontWeight:'bold'}}>Diplomatic Passport (Maroon Passport)</h3>

          <p  style={{textAlign:'left'}}>
          Issued to high-ranking government officials, diplomats and representatives of the Indian government. It allows easier travel and visa facilitation as it is meant for official government duties. This passport is typically issued to Indian Foreign Service (IFS) officers and individuals representing India abroad.
          </p>


          <h3 style={{fontSize:'16px', fontWeight:'bold'}}>Official Passport (White Passport)
          </h3>

<p  style={{textAlign:'left'}}>
Provided to government employees traveling on official government business or service. It is issued for official trips and diplomatic work but differs from a diplomatic passport in terms of eligibility. This passport is granted to those working in ministries, public sector undertakings, or government bodies.

</p>

<h3 style={{fontSize:'16px', fontWeight:'bold'}}>Emergency (Tatkal) Passport (Blue Passport)
          </h3>

<p  style={{textAlign:'left'}}>
Issued in urgent cases when individuals need to travel quickly due to emergencies such as medical, family emergencies, or work-related reasons. It is processed faster than the normal passport and is available for both adults and minors.</p>

<h2 style={{fontSize:'16px', fontWeight:'bold'}}> Eligibility for Passport Application 
          </h2>

<p  style={{textAlign:'left'}}>
When applying for a passport, it is important to ensure that you meet the necessary eligibility criteria to avoid delays. As a trusted Passport Agency in Bangalore, we guide you through the entire process, making sure you fulfill all the required conditions. Our team in Bangalore provides clear instructions and assistance to help you gather the necessary documents and meet the eligibility requirements.
</p>
<br/>
<h3  style={{textAlign:'left', fontSize:'18px'}}>
            <strong>Who Can Apply for a Passport in Bangalore?
            </strong>
          </h3>
          <br/>
          <h4 style={{fontSize:'16px', fontWeight:'bold'}}> Age Requirements

          </h4>

<p  style={{textAlign:'left'}}>
To apply for a passport in Bangalore, applicants must meet the age criteria set by the government. Adults aged 18 years or older can apply for an adult passport. For minors under the age of 18, a parent or legal guardian must apply on their behalf and specific documentation is required to prove the child's identity and relationship to the parent or guardian.</p>

<h4 style={{fontSize:'16px', fontWeight:'bold'}}> Residency Requirements
</h4>

<p  style={{textAlign:'left'}}>
Applicants must be residents of India to apply for a passport in Bangalore. Proof of residence is often required, such as utility bills, rent agreements or Aadhaar cards, to verify that the applicant resides in the jurisdiction of the Bangalore Passport Office.
</p>


<h4 style={{fontSize:'16px', fontWeight:'bold'}}>Specific Eligibility for Minors and Adults
</h4>

<p  style={{textAlign:'left'}}>
For adults, the eligibility is straightforward, requiring valid identification and address proof. Minors, on the other hand, must have both parents consent and a valid birth certificate or school ID as proof of age. Parents must submit their own documents along with those of the child to support the application.
</p>
<br/>

<h3  style={{textAlign:'left', fontSize:'18px'}}>
            <strong> Special Considerations
            </strong>
          </h3>
          <br/>
         
          <h4 style={{fontSize:'16px', fontWeight:'bold'}}>Persons with Criminal Records

</h4>

<p  style={{textAlign:'left'}}>
Individuals with a criminal record may face restrictions or additional scrutiny when applying for a passport. If the applicant has been convicted of a criminal offense, the passport authorities will assess the situation. Depending on the nature of the offense and whether a police clearance certificate (PCC) is needed, the applicant may face delays or rejections.

</p>

<h4 style={{fontSize:'16px', fontWeight:'bold'}}>First-Time Applicants vs. Renewal</h4>

<p  style={{textAlign:'left'}}>
First-time applicants and those renewing their passports follow different processes. For first-time applicants, there is a need to provide all necessary documents for identity, address and citizenship verification. Renewal applications are simpler, but the applicant must ensure that their existing passport is valid or expired for less than three years. If the passport has been expired for longer, additional documentation may be required.</p>
<br/>
<h2  style={{textAlign:'left', fontSize:'18px'}}>
            <strong>  Why Choose Our Passport Services?
            </strong>
          </h2>
          <br/>

          <h3 style={{fontSize:'16px', fontWeight:'bold'}}>Trusted Passport Agency in Bangalore
          </h3>

<p  style={{textAlign:'left'}}>
We are a well-established and reliable passport agency, trusted by thousands of customers in Bangalore. Our experienced team ensures that your application is handled with the utmost care and professionalism. You can count on us to deliver accurate and timely passport services.</p>

<h3 style={{fontSize:'16px', fontWeight:'bold'}}> Efficient and Quick Passport Processing
          </h3>

<p  style={{textAlign:'left'}}>
We prioritize efficiency to ensure your passport application is processed quickly. With our streamlined procedures and expert guidance, we minimize delays and help you receive your passport in the shortest possible time. Choose us for a fast, hassle-free experience.</p>


<h3 style={{fontSize:'16px', fontWeight:'bold'}}> Personalized Assistance for Passport Applications</h3>

<p  style={{textAlign:'left'}}>
Our team provides personalized assistance at every step of the passport application process. Whether you're applying for the first time or renewing your passport, we are here to guide you through the requirements and help with document verification. We ensure your process runs smoothly.</p>

<h3 style={{fontSize:'16px', fontWeight:'bold'}}> Transparent and Affordable Service Fees
</h3>

<p  style={{textAlign:'left'}}>
We believe in clear and upfront communication with no hidden charges. Our service fees are competitive and we provide value for your money with quality services. You will know exactly what to expect, ensuring peace of mind throughout your passport journey.
</p>

<h3 style={{fontSize:'16px', fontWeight:'bold'}}>Comprehensive Support for All Passport Needs

</h3>

<p  style={{textAlign:'left'}}>
Whether you're applying for a Tatkal passport, renewing your current passport or dealing with a lost or damaged passport, we offer comprehensive support. Our expertise covers all passport services and we are always available to assist with your unique needs.

</p>
<br/>
<h2  style={{textAlign:'left', fontSize:'18px'}}>
            <strong>  The Passport Application Process
            </strong>
          </h2>
          <br/>
          <span style={{fontSize:'16px', fontWeight:'bold'}}>Step 1: Schedule Your Appointment</span>

<p  style={{textAlign:'left'}}>
The first step is to schedule an appointment through the official Passport Seva Portal. Choose the date and time for your visit to the Passport Seva Kendra (PSK) in Bangalore. Make sure to select the appropriate category of service (normal, Tatkal, etc.) based on your needs.</p>

<span style={{fontSize:'16px', fontWeight:'bold'}}>Step 2: Submit Your Documents
</span>

<p  style={{textAlign:'left'}}>
On the day of your appointment, visit the Passport Seva Kendra with your original documents and their copies. Documents typically include proof of identity, address and date of birth. Ensure that all documents are verified and ready for submission to avoid delays.</p>

<span style={{fontSize:'16px', fontWeight:'bold'}}>Step 3: Attend the Passport Interview
</span>

<p  style={{textAlign:'left'}}>
During your visit, you will have to attend a brief interview with a passport officer. The officer will verify your documents, take your biometric details (photo and fingerprints) and confirm your personal information. It’s a straightforward process, ensuring all details are accurate before proceeding.</p>

<span style={{fontSize:'16px', fontWeight:'bold'}}>Step 4: Passport Dispatch and Delivery
</span>

<p  style={{textAlign:'left'}}>
After successful verification, your passport will be printed and dispatched to your address. You can track your passport status online to monitor its progress. Once dispatched, it will be delivered to your home, usually within 7-15 working days, depending on the service type (normal or Tatkal).</p>

{/* <h2 style={{fontSize:'16px'}}> Our Customers Testimonials</h2> */}
<br/>
        </>
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

export default PassportAgency;
