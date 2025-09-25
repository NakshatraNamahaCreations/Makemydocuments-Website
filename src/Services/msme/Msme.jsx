import React, { useState, useEffect } from "react";
import Image30 from "../../images/msme-image.svg";
import circleIcon from "../../images/circle1.svg";
import documentsIcon from "../../images/documents.svg";
import TimeIcon from "../../images/Time.svg";
import Price from "../../images/Price Tag.svg";
import axios from "axios";
import { useLayoutEffect } from "react";
import { ArrowLeft } from "lucide-react";
import "../msme/msme.css"
import { useNavigate, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import howIcon from "../../images/how.svg";
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

const Msme = () => {
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
  const [errors, setErrors] = useState({});
  const [pincode, setPincode] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedState, setSelectedState] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
useLayoutEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);
  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [error, setError] = useState("");
  const [showOtpSection, setShowOtpSection] = useState(true);
  const openPopup = () => {
            setShowPopup(true);
            navigate("/msme-registration-form"); // Update the URL
          };
        
          // Function to close the popup and revert the URL
          const closePopup = () => {
            setShowPopup(false);
            navigate("/msme-registration"); // Revert the URL
            setCurrentStep(1);
            setIsCompleted(false);
          };
        
          React.useEffect(() => {
            // Automatically show the popup if the URL matches /two-wheeler-insurance-info
            if (location.pathname === "/msme-registration-form" || location.pathname === "/msme-registration/proceed-to-pay") {
              setShowPopup(true);
            } else {
              setShowPopup(false);
            }
          }, [location.pathname]);
  const [registrationNumber, setSeletedRegistrationNumber] = useState("");

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };
  const handleEmailIdChange = (e) => setEmailId(e.target.value);
  const handleVillageTownCityChange = (e) => setVillageTownCity(e.target.value);
  const handleStateChange = (e) => setSelectedState(e.target.value);
  const handleDistrictChange = (e) => setSelectedDistrict(e.target.value);
  const handleAadharChange = (e) => setAadhaarNumber(e.target.value);
  const handleRegistrationNumber = (e) =>
    setSeletedRegistrationNumber(e.target.value);
  const [adharnumber, setAadhaarNumber] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [organisationType, setOrganisationType] = useState("");
  const [dateOfIncorporation, setDateOfIncorporation] = useState("");
  const [panNumber, setPanNumber] = useState("");

  const getMaskedMobileNumber = (number) => {
    if (!number || number.length < 3) return "";
    const firstTwo = number.slice(0, 2);
    const lastDigit = number.slice(-1);
    const masked = `${firstTwo}******${lastDigit}`;
    return masked;
  };
  const handlePincodeChange = (e) => {
    const value = e.target.value;

    // Only allow numbers and restrict the input to 6 digits
    if (/^\d{0,6}$/.test(value)) {
      setPincode(value);  // Update pincode state
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Validate pincode is exactly 6 digits
    if (!pincode || pincode.length !== 6) {
      newErrors.pincode = "Pin Code must be exactly 6 digits.";
    }

    setErrors(newErrors);
  };

  const selectedStateData = stateData.find(
    (stateObj) => stateObj.state === selectedState
  );
  const districts = selectedStateData ? selectedStateData.districts : [];

  const validateStep1 = () => {
    const validationErrors = {};

    // Name Validation
    if (!fullName.trim()) {
        validationErrors.fullName = "Name is required.";
    }

    // Aadhaar Number Validation (12 Digits)
    if (!adharnumber.trim()) {
        validationErrors.adharnumber = "Aadhaar number is required.";
    } else if (!/^\d{12}$/.test(adharnumber)) {
        validationErrors.adharnumber = "Aadhaar number must be 12 digits.";
    }

    // Business Name Validation
    if (!businessName.trim()) {
        validationErrors.businessName = "Name of Enterprise/Business is required.";
    }

    // Type of Organisation Validation
    if (!organisationType.trim()) {
        validationErrors.organisationType = "Type of Organisation is required.";
    }

  // Date of Incorporation Validation
// Date of Incorporation Validation
if (!dateOfIncorporation) {
  validationErrors.dateOfIncorporation = "Date of Incorporation / Registration is required.";
} else {
  // Extract the year from the date string
  const year = dateOfIncorporation.split("-")[0]; 

  // Validate the year format to ensure exactly 4 digits
  if (!/^\d{4}$/.test(year)) {
      validationErrors.dateOfIncorporation = "Year must be exactly 4 digits.";
  } else {
      const selectedDate = new Date(dateOfIncorporation);
      if (selectedDate > new Date()) {
          validationErrors.dateOfIncorporation = "Incorporation date cannot be in the future.";
      }
  }
}



    // Business PAN Number Validation (Format: AAAAA9999A)
    if (!panNumber.trim()) {
        validationErrors.panNumber = "Business PAN Number is required.";
    } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(panNumber.toUpperCase())) {
        validationErrors.panNumber = "Invalid PAN Number format (e.g., AAAAA9999A).";
    }

    setErrors(validationErrors);

    // Return false if any validation errors exist
    return Object.keys(validationErrors).length === 0;
};




  const validateStep2 = () => {
    const errors = {};

    if (!villageTownCity.trim()) {
      errors.villageTownCity = "Address is required.";
    }
    if (!selectedState.trim()) {
      errors.selectedState = "State is required.";
    }
    if (!selectedDistrict.trim()) {
      errors.selectedDistrict = "District is required.";
    }
    if (!pincode.trim()) {
      errors.pincode = "Pin code is required.";
    } else if (!/^\d{6}$/.test(pincode)) {
      errors.pincode = "Pin code must be 6 digits.";
    }
    if (!mobileNumber.trim()) {
      errors.mobileNumber = "Mobile number is required.";
    } else if (!/^\d{10}$/.test(mobileNumber)) {
      errors.mobileNumber = "Mobile number must be 10 digits.";
    }
    if (!emailId.trim()) {
      errors.emailId = "Email ID is required.";
    } else if (!/\S+@\S+\.\S+/.test(emailId)) {
      errors.emailId = "Email ID is invalid.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // const handleSubmit = () => {
  //   if (currentStep === 1 && validateStep1()) {
  //     handleNext(); // Proceed to the next step (Step 2)
  //   } else if (currentStep === 2 && validateStep2()) {
  //     handleSendOtp();
  //     setShowOtpSection(true);
  //     setError("");
  //     setIsCompleted(true);
  //   }
  // };

  const handleSubmit = () => {
    if (currentStep === 1) {
        if (validateStep1()) {
            handleNext(); // Proceed to Step 2 only if Step 1 validation is successful
        } else {
            setError("Please fill all required fields correctly before proceeding.");
        }
    } else if (currentStep === 2) {
        if (validateStep2()) {
            handleSendOtp();
            setShowOtpSection(true);
            setError("");
            setIsCompleted(true);
        } else {
            setError("Please complete all required fields in Step 2.");
        }
    }
};


const handleNext = () => {
  // Apply validation for Step 1
  if (currentStep === 1) {
      if (validateStep1()) {
          // Proceed to the next step if validation passes
          setCurrentStep((prevStep) => prevStep + 1);
          setError(""); // Clear any existing error messages
      } else {
          setError("Please fill all required fields correctly before proceeding.");
      }
  } else {
      // Directly proceed if not on Step 1
      setCurrentStep((prevStep) => prevStep + 1);
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



  const generateOrderId = () => {
    return `ORD${Date.now()}`;
  };

  const [userDetails, setUserDetails] = useState(null); // Holds user details
  const [orderid, setOrderID] = useState();
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
            SERVICE: "MSME",
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
      
    //  useEffect(() => {
    //     window.scrollTo({
    //       top: 0,
    //       behavior: 'smooth',
    //     });
    //   }, []); 
      
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
          navigate("/msme-registration/proceed-to-pay");
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




  const [selectedDistrict, setSelectedDistrict] = useState("");

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
  const finishSubmission = () => {
    submitDataToAPI();
    if (mobileNumber) {
      setMaskedNumber(getMaskedMobileNumber(mobileNumber));
    }
    setIsCompleted(true);
  };
  const submitDataToAPI = async () => {
    const data = {
      orderid: orderid ||"",
      name: fullName || "",
      mobilenumber: mobileNumber || "",
      email: emailId || "",
      services: selectedOption || "",
      address: villageTownCity || "", 
      district: selectedDistrict || "",
      businessName : businessName || "",
      organisationType : organisationType || "",
      dateOfIncorporation : dateOfIncorporation || "",
      date: date,
      dob: dob || "",
      insurance_registration_number: registrationNumber || "",
      paidAmount: "99",
      // PGID: `ORD_${Date.now()}`,
      // qualification: "",
      adharnumber: adharnumber || "N/A",
      applyingfor: "",
      panNumber : panNumber || "",
      gender: selectedGender || "",
      // fathername: fatherName || "",
      // mothername: motherName || "",
      pincode: pincode || "",
     
      pancard: "",
      time: time && time !== "00:00:00" ? time : new Date().toLocaleTimeString("en-US", { hour12: false }),
      comment: "",
      status: "",
      service: "MSME",
     
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
      question: "Who are eligible for MSME Registration?",
      answer: (
        <div>
          <p>
          Businesses classified as Micro, Small, or Medium Enterprises based on investment and turnover criteria are eligible for MSME Udyam Registration.
          </p>
          
        </div>
      ),
    },
    {
      question: "How long does it take to get an MSME certificate?",
      answer: (
        <div>
          <p>
          The MSME registration process online is quick and can be completed within 1-2 working days.
          </p>
          
        </div>
      ),
    },
    {
      question: "What are the benefits Of MSME?",
      answer: (
        <div>
          <ul style={{ listStyleType: "disc", marginTop: "10px" }}>
            <li>
              MSME registration helps new entrepreneurs, traders, and business
              owners in getting loans at low interest rates.
            </li>
            <li>MSME registration helps in getting government tenders.</li>
            <li>
              Under bank loan, 15% import subsidy on fully automatic machinery.
            </li>
            <li>
              Becomes easy to get licenses, approvals, and registrations,
              irrespective of the field of business.
            </li>
            <li>Compensation of ISO certificate expenditure.</li>
            <li>
              Registered MSMEs get tariff subsidies and tax and capital
              subsidies.
            </li>
            <li>Get exemption under Direct Tax Laws.</li>
            <li>Concession in electricity bills.</li>
            <li>
              Protection against payments (Delayed payments) through MSME
              Samadhan.
            </li>
            <li>Technology and quality up-gradation support to MSMEs.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "How Wll I Get MSME Certificate ?",
      answer:
        "Soft copy will be shared to your registered mail id. No physical copy of MSME Certificate will be issued.",
    },
    {
      question:
        "What is the difference between Udyam Registration and MSME/Udyog Aadhar?",
      answer:
        "Udyam Registration is MSME registration to start business under Ministry of Micro, Small and Medium Enterprises (MoMSME) approved by Government of India. Whereas MSME/Udyog Aadhaar is a 12-digit Unique Identification Number (UIN) provided by the MoMSME for Small and Medium Enterprises (SMEs).",
    },
    {
      question: "Is Aadhaar Number mandatory for online MSME Registration?",
      answer:
        "Yes Aadhaar Number is mandatory for issuance of MSME Certificate",
    },
    {
      question: "Is there any renewal provision of MSME registration?",
      answer:
        "Registration Number is a permanent identity number and there will be no need for renewal of Registration.",
    },
    {
      question: "What are the chances of rejection of Online MSME Application?",
      answer:
        "The application will be approved on the basis of the information provided by the applicant.",
    },
    {
      question:
        "Can MSME borrowers get collateral-free loans from financial institutions?",
      answer:
        "MSME borrowers get collateral-free loans from financial institutions",
    },
    {
      question:
        "What documents are required for MSME registration?",
      answer:
        "You typically need an Aadhaar Card, PAN Card, business address proof, and bank details to apply for an MSME certificate online.",
    },
    {
      question:
        "Is MSME registration mandatory?",
      answer:
        "While not mandatory, MSME Udyam Registration provides multiple benefits, making it highly recommended for business growth.",
    },
    {
      question:
        "What is the validity of an MSME certificate?",
      answer:
        (<div>
          <p>The MSME Registration Certificate (Udyam Certificate) does not expire and remains valid as long as the business meets the MSME criteria.</p>
          
        </div>),
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <Helmet>
    <title> MSME Registration Online | Udyam Certificate Application </title>
<meta name="description" content="Apply MSME certificate online with expert support. Quick Udyam registration process, secure guidance, and instant certificate approval for your business needs."/>
<meta name="keywords" content="MSME certificate, apply MSME certificate, MSME registration, MSME certificate online, MSME certificate application, Udyam registration, Udyam certificate, online MSME registration India, MSME application, MSME agents near me, how to apply for MSME certificate, MSME registration form, MSME registration near me, MSME registration portal, documents required for MSME certificate, MSME certificate process, MSME site, new MSME certificate apply, Udyam certificate application, online Udyam registration"/>
<link rel="canonical" href="https://www.makemydocuments.com/msme-certificate"/>
<meta name="rating" content="General"/>
<meta name="revisit-after" content="2 days"/>
<meta name="robots" content="ALL, index, follow"/>
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
      <div className="container-msme"
        style={{
          background: "linear-gradient(182.42deg, #FCA505 2.01%, #FFFFFF)",
          minHeight: "60vh",
          paddingTop: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          marginTop: "4%",
        }}
      >
        <div style={{ flex: 1, textAlign: "left", fontWeight: "bold" }}>
          <h2
            // style={{
            //   marginLeft: "25%",
            //   marginBottom: "60px",
            //   fontWeight: "bold",
            // }}
          >
            MSME registration 
          </h2>

          {/* Form section */}
        </div>

        <div>
          <img
            src={Image30}
            alt="Lease Agreement"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>

      <div
  className="content-section"
  style={{
    backgroundColor: "#fffff",
    padding: "30px 15px",
    borderRadius: "10px",
    margin: "3% ",
    marginLeft:'10%',
    marginRight: "72%",
  }}
>
  <div className="row justify-content-center">
    <div className="col-12 col-md-8 position-relative d-none d-lg-block">
      {/* First Section: Documents Required For MSME Registration */}
      <div className="d-flex align-items-center mb-5" style={{gap: '20px'}}>
        <div style={{ position: "relative", minWidth: "80px", marginTop:'-78%' }}>
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
          <h4 className="desktop-text">Documents Required For MSME Registration</h4>
          <ul className="desktop-ul">
            <li>Aadhar Card</li>
            <li>Pan Card</li>
          </ul>
        </div>
      </div>

      {/* Second Section: How It Works */}
      <div className="d-flex align-items-start mb-5" style={{gap: '20px'}}>
        <div style={{ position: "relative", minWidth: "80px" }}>
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
          <h4 className="desktop-text">How It Works</h4>
          <ul className="desktop-ul">
            <li>Register Online</li>
            <li>Upload Documents</li>
            <li>Payment</li>
            <li>Get Delivered</li>
          </ul>
        </div>
      </div>

      {/* Third Section: Time Duration */}
      <div className="d-flex align-items-start mb-5" style={{gap: '20px'}}>
        <div style={{ position: "relative", minWidth: "80px" }}>
          <img src={circleIcon} alt="Circle Background" className="img-fluid" />
          <img
            src={TimeIcon}
            alt="Time Duration Icon"
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
            <li>1-2 working days</li>
          </ul>
        </div>
      </div>

      {/* Fourth Section: Charges */}
      <div className="d-flex align-items-start mb-5" style={{gap: '20px'}}>
        <div style={{ position: "relative", minWidth: "80px" }}>
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
              <strong>Rs 500</strong>
            </li>
            <li>
              <strong>Rs 99</strong> as booking/consulting charge. Need to pay while submitting online form.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>



      {/* mobil view */}
      <div className="msme-container d-block d-lg-none" style={{marginTop:'12%'}}>
  {/* Documents Section */}
  <div className="msme-section documents-section row-container ">
    <div className="icon-container">
      <div className="circle-icon-container">
        <img src={circleIcon} alt="Circle Background" className="circle-img img-fluid" />
        <img
          src={documentsIcon}
          alt="Documents Icon"
          className="icon-overlay"
        />
      </div>
    </div>
    <div className="content-container">
      <h4 className="section-title" style={{ textAlign: 'left' }}>
        Documents Required For MSME <br />Registration
      </h4>
      <ul className="document-list" style={{ listStyleType: "disc",}}>
        <li>Aadhar Card</li>
        <li>Pan Card</li>
      </ul>
    </div>
  </div>

  {/* How It Works Section */}
  <div className="msme-section how-it-works-section row-container">
    <div className="icon-container">
      <div className="circle-icon-container">
        <img src={circleIcon} alt="Circle Background" className="circle-img img-fluid" />
        <img
          src={howIcon}
          alt="How It Works Icon"
          className="icon-overlay"
        />
      </div>
    </div>
    <div className="content-container">
      <h4 className="section-title" style={{ textAlign: 'left' }}>How It Works</h4>
      <ul className="steps-list" style={{ listStyleType: "disc",}}>
        <li>Register Online</li>
        <li>Upload Documents</li>
        <li>Payment</li>
        <li>Get Delivered</li>
      </ul>
    </div>
  </div>

  {/* Time Duration Section */}
  <div className="msme-section time-duration-section row-container">
    <div className="icon-container">
      <div className="circle-icon-container">
        <img src={circleIcon} alt="Circle Background" className="circle-img img-fluid" />
        <img
          src={TimeIcon}
          alt="Time Duration Icon"
          className="icon-overlay"
        />
      </div>
    </div>
    <div className="content-container">
      <h4 className="section-title" style={{ textAlign: 'left' }}>Time Duration</h4>
      <ul className="time-list" style={{ listStyleType: "disc",}}>
        <li>1-2 working days</li>
      </ul>
    </div>
  </div>

  {/* Charges Section */}
  <div className="msme-section charges-section row-container">
    <div className="icon-container">
      <div className="circle-icon-container">
        <img src={circleIcon} alt="Circle Background" className="circle-img img-fluid" />
        <img
          src={Price}
          alt="Charges Icon"
          className="icon-overlay"
        />
      </div>
    </div>
    <div className="content-container">
      <h4 className="section-title" style={{ textAlign: 'left' }}>Charges</h4>
      <ul className="charges-list" style={{ listStyleType: "disc",}}>
        <li><strong>Rs 500</strong></li>
        <li>
          <strong>Rs 99</strong> as booking/consulting charge. Need to pay while submitting online form
        </li>
      </ul>
    </div>
  </div>
</div>

<br/>
      <div>
        {/* Get Quotes Button */}
        {/* <div style={{ textAlign: "center", marginTop: "-2%" }}>
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
        <div className="continue-button-container" style={{marginTop:'-6%'}}>
  <button className="continue-button" onClick={openPopup} style={{borderRadius:'0px'}}>
  Apply Now
  </button>
</div>

        {/* Modal Popup */}
        {showPopup && (
          <div className="popupstyle-msme"
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
            <div className="popup-msme"
              // style={{
              //   backgroundColor: "#FFFFFF",
              //   padding: "40px",
              //   marginTop: "-5%",
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
                  <div className="stepper-msme"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "30px",
                    }}
                  >
                    {Array.from({ length: 2 }).map((_, index) => (
                      <React.Fragment key={index}>
                        <div className="step-container"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                            flex: 1,
                          }}
                        > 
                          <button className="button-msme-stepper"
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
                        {index < 1 && (
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
                     <div className="application-form" style={{ textAlign: "center" }}>
                     <h4 className="application-title" style={{ color: "#1A76D8", fontWeight: "600" }}>
                       Application
                     </h4>
                   
                     <div className="form-row">
                       <div className="form-group">
                         <label>Name<span style={{ color: "red" }}>*</span></label>
                         <input
                           type="text"
                           value={fullName}
                           onChange={handleFullNameChange}
                           placeholder="Enter your name"
                         />
                         {errors.fullName && <p className="error-message" style={{textAlign:'left'}}>{errors.fullName}</p>}
                       </div>
                       <div className="form-group">
                         <label>
                           Aadhaar Number<span style={{ color: "red" }}>*</span>
                         </label>
                         <input
                           type="number"
                           value={adharnumber}
                           onChange={handleAadharChange}
                           placeholder="Enter your Aadhaar number"
                         />
                         {errors.adharnumber && <p className="error-message" style={{textAlign:'left'}}>{errors.adharnumber}</p>}
                       </div>
                     </div>
                   
                     <div className="form-row">
                       <div className="form-group">
                         <label>
                           Name of Enterprise/Business<span style={{ color: "red" }}>*</span>
                         </label>
                         <input
                           type="text"
                           value={businessName}
                           onChange={(e) => setBusinessName(e.target.value)}
                           placeholder="Enter your Name of Enterprise/Business"
                         />
                         {errors.businessName && <p className="error-message" style={{textAlign:'left'}}>{errors.businessName}</p>}
                       </div>
                       <div className="form-group">
                         <label>
                           Type of Organisation<span style={{ color: "red" }}>*</span>
                         </label>
                         <select value={organisationType} onChange={(e) => setOrganisationType(e.target.value)}>
                           <option value="">--Select Organisation--</option>
                           <option value="Proprietorship">Proprietorship</option>
                           <option value="Private Limited">Private Limited</option>
                           <option value="Public Limited">Public Limited</option>
                           <option value="Partnership Firm">Partnership Firm</option>
                           <option value="Limited Liability Partnership">
                             Limited Liability Partnership
                           </option>
                           <option value="Trust">Trust</option>
                           <option value="Society">Society</option>
                           <option value="Hindu Undivided Family">Hindu Undivided Family</option>
                           <option value="Co-operative">Co-operative</option>
                           <option value="Other">Other</option>
                         </select>
                         {errors.organisationType && <p className="error-message" style={{textAlign:'left'}}>{errors.organisationType}</p>}
                       </div>
                     </div>
                   
                     <div className="form-row">
                     <div className="form-group" style={{ marginBottom: "20px" }}>
    <label
        className="form-label"
        style={{ fontSize: "18px", fontWeight: "500", color: "#333" }}
    >
        Date of Incorporation / Registration <span style={{ color: "red" }}>*</span>
    </label>
    <input
        type="date"
        value={dateOfIncorporation}
        onChange={(e) => {
            const inputDate = e.target.value;
            const year = inputDate.split("-")[0];

            // Restrict year to 4 digits only
            if (/^\d{4}$/.test(year)) {
                setDateOfIncorporation(inputDate);
                setErrors((prevErrors) => ({ ...prevErrors, dateOfIncorporation: "" }));
            } else {
                setErrors((prevErrors) => ({ 
                    ...prevErrors, 
                    dateOfIncorporation: "Year must be exactly 4 digits." 
                }));
            }
        }}
        style={{
            width: "100%",
            padding: "8px",
            marginTop: "5px",
            border: `2px solid ${errors.dateOfIncorporation ? "red" : "#FCA505"}`,
            borderRadius: "10px",
        }}
        max="9999-12-31" // Prevents entering more than 4-digit years
    />
    {errors.dateOfIncorporation && (
        <span style={{ color: "red" }}>
            {errors.dateOfIncorporation}
        </span>
    )}
</div>


                   
                       <div className="form-group" style={{marginLeft:''}}>
                         <label>
                           Business PAN Number<span style={{ color: "red" }}>*</span>
                         </label>
                         <input
                           type="text"
                           value={panNumber}
                           onChange={(e) => setPanNumber(e.target.value)}
                           placeholder="Enter your Business PAN Number"
                         />
                         {errors.panNumber && <p className="error-message" style={{textAlign:'left'}}>{errors.panNumber}</p>}
                       </div>
                       <br/>
                     </div>
                     <br/>
                   </div>
                   
                    )}

                    {currentStep === 2 && (
                      <div style={{ textAlign: "center" }}>
                        {/* <h4 style={{ color: "#1A76D8", fontWeight: "600" }}>Application</h4> */}

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
                            Address
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            value={villageTownCity}
                            onChange={(e) => setVillageTownCity(e.target.value)}
                            placeholder="Enter your address"
                            style={{
                              width: "100%",
                              height: "80px",
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "10px",
                            }}
                          />
                          {errors.villageTownCity && (
                            <p style={{ color: "red" }}>
                              {errors.villageTownCity}
                            </p>
                          )}
                        </div>

                        {/* State and District */}

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
                                border: "2px solid #FCA505",
                              }}
                            >
                              <option value="">Select State</option>
                              {stateData.map((stateObj, index) => (
                                <option key={index} value={stateObj.state}>
                                  {stateObj.state}
                                </option>
                              ))}
                            </select>
                            {errors.selectedState && (
                              <p style={{ color: "red" }}>
                                {errors.selectedState}
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
                                  border: "2px solid #FCA505",
                                }}
                              >
                                <option value="">Select District</option>
                                {districts.map((district, index) => (
                                  <option key={index} value={district}>
                                    {district}
                                  </option>
                                ))}
                              </select>
                              {errors.selectedDistrict && (
                                <p style={{ color: "red" }}>
                                  {errors.selectedDistrict}
                                </p>
                              )}
                            </div>
                          )}
                        </div>

                        <br></br>
                        {/* Name, Mobile Number, and Email */}
                        <div className="form-row">
  <div className="form-group">
    <label className="form-label">
      Pincode <span style={{ color: "red" }}>*</span>
    </label>
    <input
      type="text"
      placeholder="Enter your Pincode"
      value={pincode}
      onChange={handlePincodeChange} // Handle the input change
      onBlur={validateForm} // Validate when input loses focus
      className="form-input"
    />
    {errors.pincode && <p className="error-message">{errors.pincode}</p>}
  </div>

  <div className="form-group">
    <label className="form-label">
      Mobile Number <span style={{ color: "red" }}>*</span>
    </label>
    <input
      type="text"
      id="mobileNumber"
      value={mobileNumber}
      onChange={handleMobileNumberChange}
      placeholder="Enter your mobile number"
      className="form-input"
    />
    {errors.mobileNumber && (
      <p className="error-message">{errors.mobileNumber}</p>
    )}
  </div>

  <div className="form-group">
    <label className="form-label">
      Email ID <span style={{ color: "red" }}>*</span>
    </label>
    <input
      value={emailId}
      onChange={handleEmailIdChange}
      type="email"
      placeholder="Enter your email"
      className="form-input"
    />
    {errors.emailId && <p className="error-message">{errors.emailId}</p>}
  </div>
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
                    {currentStep < 2 ? (
                      // <button
                      //   onClick={handleNext}
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
  <button className="next-button" onClick={handleNext}>
    Next
  </button>
</div>

                    ) : (
                      // <button
                      //   onClick={handleSubmit}
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
  <button className="submit-button" onClick={handleSubmit}>
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
          OTP sent on {mobileNumber ? mobileNumber.replace(/.(?=.{4})/g, "*") : ""}
        </h4>
        <div style={{ margin: "20px 0" }}>
          <label style={{ fontWeight: "500", marginBottom: "10px" }}>
            Enter OTP <span style={{ color: "red" }}>*</span>
          </label>
          <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-input-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
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
    Verfiy
  </button>
</div>
      </div>
          ) : (
            <>
                 {location.pathname === "/msme-registration/proceed-to-pay" && (
            <>
            {paymentSuccess ? ( // Conditionally render success message
              <div>
                <h2 style={styles.successMessage}>Payment Successful!</h2>
                <h3 style={styles.thankYouMessage}>Thank You for Your Submission!</h3>
              </div>
            ) : (
              <div>
                <h2 style={styles.thankYouMessage}>Thank You for Your Submission!</h2>
                <div style={{ padding: "10px", maxWidth: "600px", margin: "auto" }}>
  {/* Name, Mobile Number, Order ID, Services */}
  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
    {[
      { label: "Name", value: userDetails?.name || "N/A" },
      { label: "Mobile Number", value: userDetails?.mobilenumber || "N/A" },
      { label: "Order ID", value: userDetails?.orderid || "N/A" },
      { label: "Services", value:  "MSME" }, // Allows dynamic service selection
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
    style={{color:'#000', fontWeight:'bold'}}
    className="proceed-button"
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
        <>
          <h1 className="faq-tag-title-h3">
            <strong>MSME Registration Services by Make My Documents</strong>
          </h1>
          <p style={{textAlign:'left'}}>
          At <strong>Make My Documents</strong>, we specialize in helping small and medium-sized businesses obtain <strong>MSME Registration</strong> quickly and hassle-free. Whether you need an <strong>Udyam Registration Certificate</strong> for business benefits, subsidies, or government schemes, our expert team ensures a smooth process with end-to-end assistance. Get your <strong>MSME certificate online</strong>   with our professional support.
          </p>

          <h2  style={{textAlign:'left', fontSize:'20px'}}>
            <strong>What is MSME Registration?</strong>
          </h2>
          <p  style={{textAlign:'left', marginTop:'2%'}}>
          Micro, Small, and Medium Enterprises <strong> (MSME)</strong> registration, also known as <strong> Udyam Registration</strong>, is an official recognition issued by the Government of India to businesses that qualify under MSME criteria. This certification provides access to various <strong>government benefits, MSME loans, tax exemptions, and financial support</strong> to promote business growth.
           
          </p>

          <h2  style={{textAlign:'left', fontSize:'20px', fontWeight:'bold'}}>
          Why is MSME Registration Important?
          </h2>
          <br/>
          <div>
          <h3 style={{fontSize: '16px', display: 'inline', marginRight: '8px'}}><strong>• Eligibility for Government Schemes:</strong></h3>
<p style={{display: 'inline'}}>Get access to MSME subsidies, business grants, and low-interest MSME loans.</p>
</div>
<br/>
<div>
<h3 style={{fontSize: '16px', display: 'inline', marginRight: '8px'}}><strong>• Tax Benefits & Exemptions: </strong></h3>
<p style={{display: 'inline'}}>Enjoy income tax benefits for MSMEs, reduced GST rates, and financial incentives.</p>
</div>
<br/>
<div>
<h3 style={{fontSize: '16px', display: 'inline', marginRight: '8px'}}><strong>•	Easier Loan Approvals: </strong></h3>
<p style={{display: 'inline'}}>Banks and NBFCs provide collateral-free business loans for MSMEs with lower interest rates.</p>
</div>
<br/>
<div>
<h3 style={{fontSize: '16px', display: 'inline', marginRight: '8px'}}><strong>•	Tender & Contract Preferences:  </strong></h3>
<p style={{display: 'inline'}}>MSME-registered businesses get priority in government tenders and procurement policies.</p>
</div>
<br/>
<div>
<h3 style={{fontSize: '16px', display: 'inline', marginRight: '8px'}}><strong>•	Increased Business Credibility:  </strong></h3>
<p style={{display: 'inline'}}>Having an MSME certificate enhances trust and recognition for your business.</p>
</div>

<br/>

          <h2  style={{textAlign:'left', fontSize:'20px', fontWeight:'bold'}}>
          How Make My Documents Can Help You Register for MSME Easily
          </h2>
          <br/>
          <p>
          Applying for an <strong>MSME registration certificate online</strong> can be complicated. At Make My Documents, we simplify the registration process with:
          </p>
          <div>
          <h3 style={{fontSize: '16px', display: 'inline', marginRight: '8px'}}><strong>• Expert Assistance:</strong></h3>
<p style={{display: 'inline'}}>Our team provides step-by-step guidance for Udyam Registration online. </p>
</div>
<br/>
<div>
<h3 style={{fontSize: '16px', display: 'inline', marginRight: '8px'}}><strong>• Document Preparation: </strong></h3>
<p style={{display: 'inline'}}>We ensure that all required MSME registration documents are correctly compiled to avoid rejections. </p>
</div>
<br/>
<div>
<h3 style={{fontSize: '16px', display: 'inline', marginRight: '8px'}}><strong>•	Quick Application Submission: </strong></h3>
<p style={{display: 'inline'}}>We submit your MSME registration form online promptly to speed up processing. </p>
</div>
<br/>
<div>
<h3 style={{fontSize: '16px', display: 'inline', marginRight: '8px'}}><strong>•	Real-time Status Tracking:   </strong></h3>
<p style={{display: 'inline'}}>Stay updated on your MSME certificate status with our tracking service. </p>
</div>
<br/>
<div>
<h3 style={{fontSize: '16px', display: 'inline', marginRight: '8px'}}><strong>•	Hassle-Free Processing </strong></h3>
<p style={{display: 'inline'}}>Get your MSME/Udyam Certificate online without any delays or errors.</p>
</div>
<br/>
<p>For <strong>quick and reliable MSME registration services, contact Make My Documents today!</strong>  Our team is ready to assist you in obtaining your <strong>MSME/Udyam Certificate</strong> smoothly and efficiently.</p>
          
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

export default Msme;
