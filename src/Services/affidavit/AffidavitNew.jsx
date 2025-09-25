import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from "react-router-dom";
import Image30 from '../../images/affidavit_image.png';
import bannerimage from "../../images/AffidavitBanner1.png";
import circleIcon from '../../images/circle1.svg';
import documentsIcon from '../../images/documents.svg';
import howIcon from "../../../src/images/how.svg";
import { useLayoutEffect } from "react";
import Price from '../../images/Price Tag.svg';
import TimeIcon from "../../images/Time.svg";
import axios from "axios";
import { ArrowLeft } from "lucide-react";
import "../affidavit/affidavit.css"
import { FaArrowLeft } from 'react-icons/fa';
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';


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
      "West Siang"]
  },
  {
    state: "Andhra Pradesh",
    districts: ["Alluri Sitharama Raju", "Anakapalli", "Ananthapuramu", "Annamayya", "Bapatla", "Chittoor", "Dr. B.R. Ambedkar Konaseema", "East Godavari", "Eluru", "Guntur", "Kakinada", "Krishna", "Kurnool", "Nandyal", "Ntr", "Palnadu", "Parvathipuram Manyam", "Prakasam", "Sri Potti Sriramulu Nellore", "Sri Sathya Sai", "Srikakulam", "Tirupati", "Visakhapatnam", "Vizianagaram", "West Godavari", "Y.S.R."],
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
    districts: ["North Goa",
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
    districts: ["Ambala",
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
    state: "Jammu and Kashmir",
    districts: ["Anantnag",
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
    districts: ["Bilaspur",
      "Chamba",
      "Hamirpur",
      "Kangra",
      'Kinnaur',
      'Kullu',
      'Lahaul And Spiti',
      'Mandi',
      'Shimla',
      'Sirmaur',
      'Solan',
      'Una'],
  },
  {
    state: "Jharkhand",
    districts: ["Bokaro",
      'Chatra',
      'Deoghar',
      'Dhanbad',
      'Dumka',
      'East Singhbum',
      'Garhwa',
      'Giridih',
      'Godda',
      'Gumla',
      'Hazaribagh',
      'Jamtara',
      'Khunti',
      'Koderma',
      'Latehar',
      'Lohardaga',
      'Pakur',
      'Palamu',
      'Ramgarh',
      'Ranchi',
      'Sahebganj',
      'Saraikela Kharsawan',
      'Simdega',
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
      "Wayanad"],
  },
  {
    state: "Ladakh",
    districts: ["Leh",
      "Kargil"]
  },
  {
    state: "Madhya Pradesh",
    districts: ["Agar Malwa",
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
    state: "Lakshadweep",
    districts: ["Lakshadweep"]
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
    districts: ["Bishnupur",
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
    districts: ["East Garo Hills",
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
    districts: ["Aizawl",
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
    districts: ["Chumoukedima",
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
    districts: ["Angul",
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
    districts: ["Amritsar",
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
    districts: ["Ajmer",
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
    districts: ["Adilabad",
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
    districts: ["Dhalai",
      "Gomati",
      "Khowai",
      "North Tripura",
      "South Tripura",
      "Unakoti",
      "West Tripura"],
  },
  {
    state: "Uttar Pradesh",
    districts: ["Agra",
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
    districts: ["Almora",
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
      "Shahdara",
      "South",
      " South East ",
      "South West",
      "West"],
  },
  {
    state: "Puducherry",
    districts: ["Puducherry", "Karaikal",],
  },
];

const validAffidavits = [
  "Name-Change-Affidavit-(Annexture-E)",
  "Name-Change-Affidavit-for-Minor",
  "Name-Change-Affidavit-after-Marriage",
  "One-and-the-Same-Person-Affidavit",
  "Change-of-Signature-Affidavit",
];

const relatedServices = [
  { name: "Insurance", path: "/insurance" },
  { name: "Travel Visa", path: "/tourist-visa" },
  { name: "Police Verification", path: "/policeverification" },
  {
    name: "Police Clearance Certificate",
    path: "/police-clearance-certificate",
  },
  { name: "Pan Card", path: "/pan-card" },
  { name: "Affidavits / Annexure", path: "/affidavits" },
];


 const faqs = [
    {
      question: "Are these affidavits legally valid?",
      answer:
        "Yes, all affidavits are drafted by legal experts and are valid across India.",
    },
    {
      question: "Can I apply for an affidavit online?",
      answer:
        "Yes, Make My Documents offers 100% online affidavit application and delivery.",
    },
    {
      question: "Do I need to visit a notary?",
      answer:
        "No, we handle notarization and send you a ready-to-use affidavit.",
    },
    {
      question: "Can I get affidavits in regional languages?",
      answer:
        "Yes, affidavits can be drafted in English or regional languages.",
    },
    {
      question: "Is Aadhaar mandatory for all affidavits?",
      answer: "Yes, Aadhaar is preferred for identity verification.",
    },
    {
      question: "How long does it take to get an affidavit?",
      answer:
        "Most affidavits are ready in 1–2 working days.",
    },
    {
      question: "Are affidavits accepted by banks and government offices?",
      answer:
        "Yes, all documents are legally verified and accepted by official authorities.",
    },
    {
      question: "Can I apply for multiple affidavits at once?",
      answer: "Yes, you can request multiple affidavit types in one application.",
    },
    {
      question: "Will I get a physical copy of the affidavit?",
      answer: "Yes, a signed and notarized hard copy can be delivered upon request.",
    },
    {
      question:
        "Is my personal data secure?",
      answer:
        "Absolutely. We use encrypted systems and maintain strict confidentiality.",
    },
  ];


const AffidavitNew = () => {
  const { selectedAffidavit } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [maskedNumber, setMaskedNumber] = useState("XXXX-XXXX-XXXX");
  const [resendCountdown, setResendCountdown] = useState(30);
  const [isCompleted, setIsCompleted] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']);
  const [fullName, setFullName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [houseStreetName, setHouseStreetName] = useState('');
  const [villageTownCity, setVillageTownCity] = useState('');
  const [dob, setDob] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  // const [selectedAffidavit, setSelectedAffidavit] = useState('');
  const [pincode, setPincode] = useState('');
  const [aadharNumber, setAadharNumber] = useState('');
  const [error, setError] = useState("");
  const [showOtpSection, setShowOtpSection] = useState(true);
  const [registrationNumber, setSeletedRegistrationNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false); // To track if OTP has been sent
  const [selectedState, setSelectedState] = useState('');
  const [userDetails, setUserDetails] = useState(null); // Holds user details
     const [active, setActive] = useState(null);
 const [blogs, setBlogs] = useState([]);
  const stickyColumnRef = useRef(null);
  const firstColumnRef = useRef(null);
  const stopStickyRef = useRef(null);
 const [loading, setLoading] = useState(true);
   const [visibleCount] = useState(3);

  const handleClick = (service) => {
    setActive(service.name);
    navigate(service.path);
  };


    const [isSticky, setIsSticky] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [date, setDate] = useState(null);  // Manage date state
  const [time, setTime] = useState(null);  // Manage time state

  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  useEffect(() => {
    if (!date) {
      setDate(new Date().toISOString().split("T")[0]); // Set the current date once when the component mounts
    }
    if (!time) {
      setTime(new Date().toLocaleTimeString("en-US", { hour12: false })); // Set the current time once when the component mounts
    }
  }, []);

  const handleAffidavitChange = (e) => {
    const selected = e.target.value;
    if (selected) {
      const formattedAffidavit = selected.replace(/\s+/g, "-");
      const newUrl = `${window.location.origin}/affidavits/${formattedAffidavit}`;
      window.history.pushState(null, "", newUrl);
      navigate(`/affidavits/${formattedAffidavit}`);
    }
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

  useEffect(() => {
    // Validate selected affidavit from URL
    if (selectedAffidavit && !validAffidavits.includes(selectedAffidavit)) {
      // Redirect to default if affidavit is invalid
      navigate("/affidavits");
    }
  }, [selectedAffidavit, navigate]);


  const closePopup = () => {
    setShowPopup(false);
    setCurrentStep(1);
    setIsCompleted(false);
  };



  useEffect(() => {
    const handleScroll = () => {
      const stickyColumn = stickyColumnRef.current;
      const firstColumn = firstColumnRef.current;
      const stopSection = stopStickyRef.current;

      if (!stickyColumn || !firstColumn || !stopSection) return;

      const bannerHeight =
        document.querySelector(".breadcrumb-title")?.offsetHeight || 0;
      const scrollTop = window.scrollY;
      const firstColumnTop =
        firstColumn.getBoundingClientRect().top + window.scrollY;
      const stopSectionTop =
        stopSection.getBoundingClientRect().top + window.scrollY;
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





  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };
  const handleEmailIdChange = (e) => setEmailId(e.target.value);
  const handleVillageTownCityChange = (e) => setVillageTownCity(e.target.value);
  const handleStateChange = (e) => setSelectedState(e.target.value);
  const handleDistrictChange = (e) => setSelectedDistrict(e.target.value);
  const handleRegistrationNumber = (e) => setSeletedRegistrationNumber(e.target.value);
  const [leadId, setLeadId] = useState();
  const getMaskedMobileNumber = (number) => {
    if (!number || number.length < 3) return ""; // Return empty if number is too short
    const firstTwo = number.slice(0, 2); // First two digits
    const lastDigit = number.slice(-1); // Last digit
    const masked = `${firstTwo}******${lastDigit}`; // Mask the middle digits
    return masked;
  };


  const handleContinue = () => {
    if (!selectedAffidavit) {
      setError("Please select an affidavit.");
      return;
    }
    setShowPopup(true);

  };

  // Navigate steps
  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
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
  const selectedStateData = stateData.find(
    (stateObj) => stateObj.state === selectedState
  );
  const districts = selectedStateData ? selectedStateData.districts : [];

  //  useEffect(() => {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: 'smooth',
  //     });
  //   }, []); 


  const handleSendOtp = async () => {
    try {
      let formattedNumber = mobileNumber.trim();
      if (!/^\d{10}$/.test(formattedNumber)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
      }
      formattedNumber = `91${formattedNumber}`;
      console.log("Formatted Mobile Number:", formattedNumber);

      const response = await axios.post("https://api.makemydocuments.com/api/sendOTP", {
        mobilenumber: formattedNumber,
      });

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





  const generateOrderId = () => {
    return `ORD${Date.now()}`;
  };
  const [orderid, setOrderID] = useState();


  // Handle Proceed to Pay API call
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
      ORDER_ID: orderId,  // Make sure ORDER_ID is set
      CUST_ID: custId,
      INDUSTRY_TYPE_ID: "Retail",
      CHANNEL_ID: "WEB",
      TXN_AMOUNT: txnAmount.toString(),
      WEBSITE: "DEFAULT",
      SERVICE: "Affidavits/ Annexure",
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
  const handlePincodeChange = (e) => {
    const value = e.target.value;

    // Only allow numeric input and limit to 6 digits
    if (/^\d{0,6}$/.test(value)) {
      setPincode(value);

      // Check if the pin code is exactly 6 digits to clear the error
      if (value.length === 6) {
        setError("");
      } else {
        setError("Pincode must be exactly 6 digits.");
      }
    }
  };


  const handleBlur = () => {
    if (pincode.length !== 6) {
      setError("Pin Code must be exactly 6 digits.");
    } else {
      setError("");
    }
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
          navigate(`/affidavits/${selectedAffidavit}/proceed-to-pay`);

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



  useLayoutEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
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
      orderid: orderid || "",
      name: fullName || "",
      mobilenumber: mobileNumber || "",
      email: emailId || "",
      services: selectedAffidavit || "",
      address: villageTownCity || "",
      district: selectedDistrict || "",
      dob: dob || "",
      date: date && date !== "0000-00-00" ? date : new Date().toISOString().split("T")[0],
      insurance_registration_number: registrationNumber || "",
      paidAmount: "99",
      // qualification: "", 
      applying_for: selectedAffidavit || "",
      gender: selectedGender || "",
      // fathername: fatherName || "", 
      // mothername: motherName || "", 
      pincode: pincode || "",
      adharnumber: aadharNumber || "",
      pancard: "",
      // PGID: `ORD_${Date.now()}`,
      time: time && time !== "00:00:00" ? time : new Date().toLocaleTimeString("en-US", { hour12: false }),
      comment: "",
      status: "",
      service: "Affidavits/ Annexure",

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







  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <>
      <Helmet>
        <title> Apply for Affidavits Online – Name Change Marriage Signature </title>
        <meta name="description" content="Get legal affidavits online in just 1–2 days. Services include name change, marriage, minor, signature, and one-and-the-same-person affidavits." />
        <meta name="keywords" content=" name change affidavit, name change affidavit online, how to get name change affidavit, how to create name change affidavit, create name change affidavit " />
        <meta name="author" content="https://www.makemydocuments.com/name-change-affidavit" />
        <link rel="canonical" href="https://www.makemydocuments.com/affidavits" />
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
    {/* LocalBusiness (update address/phone if needed) */}
<script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Make My Documents",
    "url": "https://www.makemydocuments.com/affidavits",
    "image": "https://www.makemydocuments.com/logo.png",
    "telephone": "+91-9429690973",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No 344, 2nd Main Rd, Manjunath Nagar, Mookambika Nagar, Dattatreya Nagar, Hosakerehalli",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560085",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "10:00",
      "closes": "17:00"
    }],
    "description": "Online affidavits including name change affidavit—draft in 60 minutes and delivery within 24 hours."
  })}
</script>

{/* FAQPage for Name Change Affidavit */}
<script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How fast can I get a name change affidavit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Draft is usually prepared within 60 minutes during working hours and delivered within 24 hours."
        }
      },
      {
        "@type": "Question",
        "name": "What documents are required for a name change affidavit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Generally an ID proof, address proof, and the exact old and new name details. Additional proofs may be requested depending on the case."
        }
      },
      {
        "@type": "Question",
        "name": "Is newspaper publication included?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we guide you with the newspaper publication process online after the affidavit is prepared."
        }
      },
      {
        "@type": "Question",
        "name": "Can I complete the process online?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. You can submit details and proofs online; we prepare the draft, share for approval, and arrange delivery."
        }
      },
      {
        "@type": "Question",
        "name": "Is notary or e-stamp included?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We arrange e-stamp and notarization as applicable in your state. Final charges depend on denomination and location."
        }
      }
    ]
  })}
</script>

        <noscript dangerouslySetInnerHTML={{
          __html: `<img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=7447820&fmt=gif" />`
        }} />

      </Helmet>
      
      <div
        style={{
          backgroundColor: "#f4f4f4",
          padding: "15px 25px",
          marginTop: "10%",
        }}
        className="breadcrumb-title"
      >
        <nav aria-label="breadcrumb" style={{ marginTop: "1%" }}>
          <ol className="breadcrumb mb-0">
            <li
              className="breadcrumb-item"
              style={{ fontWeight: "bold", fontSize: "14px" }}
            >
              <Link to="/" style={{ color: "#007bff", textDecoration: "none" }}>
                Home
              </Link>
            </li>
            <li
              className="breadcrumb-item active"
              aria-current="page"
              style={{ fontWeight: "bold", fontSize: "14px" }}
            >
             Affidavits 
            </li>
          </ol>
        </nav>
      </div>

      <div className='' style={{ overflow: "hidden" }}>
      
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
                    alt="bannerimage"
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
                      fontSize: "34px",
                      fontWeight: "bold",
                      margin: 0,
                    }}
                  >
                   Apply for Affidavits Online  
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
                  

                    {/* <div style={{ flex: 1, textAlign: "right" }}>
                      <p
                        style={{
                          fontSize: "14px",
                          marginBottom: "5px",
                          color: "#333",
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
                        ₹2,499/-
                      </p>
                    </div> */}
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
                  marginTop: "37%",
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
                  }}
                />
                <div
                // className='bannerContent3'
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))",
                    color: "#fff",
                    padding: "10px",
                   
                  }}
                >
                  <div className='bannerContent3'>
                  <p
                  className="banner-text1"
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      marginBottom: "10px",
                  
                    }}
                  >
                   Apply for Affidavits Online 
                  </p>

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
                    ⭐{" "}
                    <span style={{ marginLeft: "6px" }}  className="banner-text2">
                      99% Delivered on time
                    </span>
                  </div>
                  </div>

                </div>
              </div>
            </div>

         


                      <br />
                      <br />
        <div style={{  marginLeft: "200px" }}>


          {/* Select Affidavit Section */}
          {!selectedAffidavit && ( // Hide "Select Affidavit" if an affidavit is selected
            <div className='affidavit-choose' style={{ marginBottom: "20px" }}>
              <label
                htmlFor="selectAffidavit"
                style={{
                  display: "block",
                  fontWeight: "bold",
                  marginBottom: "10px",
                  fontSize: "18px",
                  color: "#000000",
                }}
              >
                Select Affidavit *
              </label>
              <select
                id="selectAffidavit"
                onChange={handleAffidavitChange}
                value={selectedAffidavit}
                style={{
                  width: "50%",
                  padding: "12px",
                  fontSize: "16px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  outline: "none",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  appearance: "none",
                  background: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"gray\"><path d=\"M10 14l6-6H4l6 6z\" /></svg>') no-repeat right 10px center",
                  backgroundColor: "#fff",
                  backgroundSize: "16px",
                }}
              >
                <option value="">Choose</option>
                {validAffidavits.map((affidavit) => (
                  <option
                    key={affidavit}
                    value={affidavit.replace(/-/g, " ")} // Show readable format
                  >
                    {affidavit.replace(/-/g, " ")}
                  </option>
                ))}
              </select>
              {selectedAffidavit === "" && (
                <div style={{ color: "red", marginTop: "5px" }}>
                  Please select an affidavit.
                </div>
              )}
            </div>

          )}

          {/* Conditional Rendering Based on Selection */}
          {selectedAffidavit && validAffidavits.includes(selectedAffidavit) && (
            <div
              className="content-section"
              style={{
                backgroundColor: "#fffff",
                padding: "30px 15px",
                borderRadius: "10px",
                margin: "-1% ",
                marginLeft: '-11%',
                marginRight: "72%",
              }}
            >
              <div className="row justify-content-center">
                <div className="col-12 col-md-8 position-relative d-none d-lg-block">
                  {/* First Section: Documents Required (Any One Address Proof) */}
                  <div className="d-flex align-items-center mb-5" style={{ gap: '20px' }}>
                    <div style={{ position: "relative", minWidth: "80px", marginTop: '-66%' }}>
                      <img src={circleIcon} alt="Circle Background" className="img-fluid" />
                      <img
                        src={howIcon}
                        alt="Documents Icon"
                        style={{
                          position: "absolute",
                          top: "58%",
                          left: "40%",
                          width: '43%',
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
                  <div className="d-flex align-items-center mb-5" style={{ gap: '20px' }}>
                    <div style={{ position: "relative", minWidth: "80px", marginTop: '-30%' }}>
                      <img src={circleIcon} alt="Circle Background" className="img-fluid" />
                      <img
                        src={TimeIcon}
                        alt="How It Works Icon"
                        style={{
                          position: "absolute",
                          top: "58%",
                          left: "40%",
                          width: '43%',
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
                  <div className="d-flex align-items-center mb-5" style={{ gap: '20px' }}>
                    <div style={{ position: "relative", minWidth: "80px", marginTop: '-40%' }}>
                      <img src={circleIcon} alt="Circle Background" className="img-fluid" />
                      <img
                        src={Price}
                        alt="Price Icon"
                        style={{
                          position: "absolute",
                          top: "58%",
                          left: "40%",
                          width: '43%',
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
                          <strong>Rs.50</strong> as booking/consulting charge. Need to pay while submitting online form
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          )}

          {/* mobile view */}
          {selectedAffidavit && validAffidavits.includes(selectedAffidavit) && (
            <div className="status-container d-block d-lg-none" style={{ marginTop: "-70%" }}>
              {/* How It Works Section */}
              <div className="status-section how-it-works">
                <div className="row-container">
                  <div className="icon-container" style={{ position: "relative", marginTop: "33%" }}>
                    <img
                      src={circleIcon}
                      style={{ width: '50%' }}
                      alt="Circle Background"
                      className="img-fluid"
                    />
                    <img
                      src={howIcon}
                      alt="How It Works Icon"
                      style={{
                        position: "absolute",
                        top: "72%",
                        width: '20px',
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  </div>
                  <div className="content-container">
                    <h4 className="section-title how-it-works-title" style={{ textAlign: "left", marginTop: '48%' }}>
                      How It Works
                    </h4>
                    <ul className="status-list how-steps" style={{ listStyleType: "disc", }}>
                      <li className="how-step-item">Register Online</li>
                      <li className="how-step-item">Drafting</li>
                      <li className="how-step-item">Review Drafting</li>
                      <li className="how-step-item">Payment</li>
                      <li className="how-step-item">Doorstep Delivery</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Time Duration Section */}
              <div className="status-section time-duration">
                <div className="row-container">
                  <div className="icon-container" style={{ position: "relative", }}>
                    <img
                      src={circleIcon}
                      style={{ width: '50%' }}
                      alt="Circle Background"
                      className="img-fluid"
                    />
                    <img
                      src={TimeIcon}
                      alt="Documents Icon"
                      style={{
                        position: "absolute",
                        top: "72%",
                        width: '20px',
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  </div>
                  <div className="content-container">
                    <h4 className="section-title time-duration-title" style={{ textAlign: "left" }}>
                      Time Duration
                    </h4>
                    <ul className="status-list duration-details" style={{ listStyleType: "disc", }}>
                      <li className="duration-item">1-2 working days</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Charges Section */}
              <div className="status-section charges-section">
                <div className="row-container">
                  <div className="icon-container" style={{ position: "relative" }}>
                    <img
                      src={circleIcon}
                      style={{ width: '50%' }}
                      alt="Circle Background"
                      className="img-fluid"
                    />
                    <img
                      src={Price}
                      alt="Price Icon"
                      style={{
                        position: "absolute",
                        top: "72%",
                        width: '20px',
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  </div>
                  <div className="content-container">
                    <h4 className="section-title charges-title" style={{ textAlign: "left" }}>
                      Charges
                    </h4>
                    <ul className="status-list charges-details" style={{ listStyleType: "disc", }}>
                      <li className="charges-item">
                        <strong>Rs 500</strong>
                      </li>
                      <li className="charges-item">
                        <strong>Rs 50</strong> as booking/consulting charge. <br />
                        Need to pay while submitting<br /> online form
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <br />
            </div>

          )}



          {selectedAffidavit && validAffidavits.includes(selectedAffidavit) && (
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
         marginRight:"80%",
         marginTop:"-30%",
       }}
      //  onClick={() => setShowPopup(true)}
      onClick={handleContinue} 
     >
       CONTINUE
     </button>
   
   
 </div> */}
              <div className="continue-button-container">
                <br />
                <button className="continue-button" onClick={handleContinue} style={{ borderRadius: '0px' }}>
                  Apply Now
                </button>
              </div>

              {/* Modal Popup */}
              {showPopup && (
                <div className="popupstyle-affidavit"
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
                  <div className="popup-affidavit"
                  //  style={{
                  //    backgroundColor: "#FFFFFF",
                  //    padding: "40px",
                  //    borderRadius: "28px",
                  //    width: "70%",
                  //    maxHeight: "90%", // Maximum height of the popup
                  //    overflowY: "auto", // Enable scrolling if content overflows
                  //    textAlign: "center",
                  //    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                  //  }}
                  >
                    {/* Stepper */}


                    {!isCompleted ? (
                      <>
                        <div className="stepper-affidavit" style={{ display: "flex", justifyContent: "space-between", marginBottom: "30px" }}>
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
                                <button className="button-affidavit"
                                  onClick={() => setCurrentStep(index + 1)} // Make step clickable
                                  style={{
                                    width: "50px",
                                    height: "50px",
                                    backgroundColor: currentStep >= index + 1 ? "#4285F4" : "#ccc",
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
                              {index < 1 && (
                                <div
                                  style={{
                                    height: "2px",
                                    flex: 1,
                                    backgroundColor: currentStep > index + 1 ? "#4285F4" : "#ccc",
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
                              <h4 style={{ color: "#1A76D8", fontWeight: "600" }}>Application</h4>



                              {/* Name, Mobile Number, and Email */}
                              <div className="form-row">
                                <div className="form-field">
                                  <label>
                                    Name<span>*</span>
                                  </label>
                                  <input
                                    value={fullName}
                                    onChange={handleFullNameChange}
                                    type="text"
                                    placeholder="Enter your name"
                                  />
                                </div>
                                <div className="form-field">
                                  <label>
                                    Mobile Number<span>*</span>
                                  </label>
                                  <input
                                    value={mobileNumber}
                                    onChange={handleMobileNumberChange}
                                    type="text"
                                    placeholder="Enter your mobile number"
                                  />
                                </div>
                                <div className="form-field">
                                  <label>
                                    Email ID<span>*</span>
                                  </label>
                                  <input
                                    value={emailId}
                                    onChange={handleEmailIdChange}
                                    type="email"
                                    placeholder="Enter your email"
                                  />
                                </div>
                              </div>


                              {/* Address */}
                              <div className="form-field full-width">
                                <label>
                                  Address<span style={{ color: "red" }}>*</span>
                                </label>
                                <input
                                  value={villageTownCity}
                                  onChange={handleVillageTownCityChange}
                                  type="text"
                                  placeholder="Enter your address"
                                  style={{
                                    width: "100%",
                                    height: "45px",
                                    fontSize: "16px",
                                    border: "1px solid #ccc",
                                    borderRadius: "4px",
                                    border: "2px solid #FCA505"
                                  }}
                                />
                              </div>


                              <div>
                                {/* State Dropdown */}
                                <div style={{ marginBottom: "20px", textAlign: "left" }}>
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
                                      border: "2px solid #FCA505"
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

                                {/* District Dropdown */}
                                {selectedState && (
                                  <div style={{ marginBottom: "20px", textAlign: "left" }}>
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
                                        border: "2px solid #FCA505"
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
                                  onBlur={handleBlur}
                                  id="pincode"
                                  maxLength="6" // Restrict input to 6 characters
                                  style={{
                                    width: "100%",
                                    height: "45px",
                                    padding: "10px",
                                    fontSize: "16px",
                                    border: `2px solid ${error ? 'red' : '#FCA505'}`,
                                    borderRadius: "10px",
                                  }}
                                />

                              </div>
                              {error && <div style={{ color: "red", marginBottom: "20px", textAlign: 'left' }}>{error}</div>}
                              <br />
                            </div>
                          )}

                        </div>
                        <div style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginTop: "20px",
                        }}>
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
                                    marginTop: '2%',
                                    height: '1%'
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
                          {currentStep < 1 ? (
                            //  <button
                            //    onClick={nextStep}
                            //    style={{
                            //      padding: "10px 20px",
                            //      backgroundColor: "#FCA505",
                            //      color: "#000000",
                            //      border: "none",
                            //      borderRadius: "5px",
                            //      cursor: "pointer",
                            //    }}
                            //  >
                            //    Next
                            //  </button>
                            <div className="next-button-container">
                              <button className="next-button" onClick={nextStep}>
                                Next
                              </button>
                            </div>

                          ) : (
                            // <button
                            // onClick={() => {
                            //   if (!fullName) {
                            //     setError("Name is required.");
                            //     return;
                            //   }
                            //   if (!mobileNumber) {
                            //     setError("Mobile number is required."); 
                            //     return;
                            //   }
                            //   if (!emailId) {
                            //     setError("Email ID is required.");
                            //     return;
                            //   }
                            //   if (!villageTownCity) {
                            //     setError("Address is required.");
                            //     return;
                            //   }
                            //   if (!selectedState) {
                            //     setError("State is required.");
                            //     return;
                            //   }
                            //   if (!selectedDistrict) {
                            //     setError("District is required.");
                            //     return;
                            //   }
                            //   if (!pincode) {
                            //     setError("pincode is required");
                            //     return;
                            //   }
                            //   handleSendOtp();  
                            //   setShowOtpSection(true);  
                            //   setError(""); 
                            //   setIsCompleted(true)
                            // }}
                            //   style={{
                            //     padding: "10px 20px",
                            //     backgroundColor: "#FCA505",
                            //     color: "#000000",
                            //     border: "none",
                            //     alignContent:'center',
                            //     alignItems:'center',
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
                                  if (!fullName) {
                                    setError("Name is required.");
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
                                  if (!emailId) {
                                    setError("Email ID is required.");
                                    return;
                                  }
                                  if (!/\S+@\S+\.\S+/.test(emailId)) {
                                    setError("Please enter a valid email address.");
                                    return;
                                  }
                                  if (!villageTownCity) {
                                    setError("Address is required.");
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
                                    setError("Pincode is required.");
                                    return;
                                  }
                                  if (!/^\d{6}$/.test(pincode)) {
                                    setError("Pincode must be exactly 6 digits.");
                                    return;
                                  }

                                  // If all validations pass
                                  setError("");
                                  handleSendOtp();
                                  setShowOtpSection(true);
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
                                style={{ color: '#000', fontWeight: 'bold' }}
                                className="verify-button"
                              >
                                Verify
                              </button>
                            </div>
                          </div>
                        ) : (
                          <>
                            {selectedAffidavit && location.pathname === `/affidavits/${selectedAffidavit}/proceed-to-pay` && (

                              <>
                                <h2 style={styles.thankYouMessage}>Thank You for Your Submitting!</h2>
                                <div style={{ padding: "10px", maxWidth: "600px", margin: "auto" }}>
                                  {/* Name, Mobile Number, Order ID */}
                                  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                                    {[
                                      { label: "Name", value: userDetails?.name || "N/A" },
                                      { label: "Mobile Number", value: userDetails?.mobilenumber || "N/A" },
                                      { label: "Order ID", value: userDetails?.orderid || "N/A" },
                                      { label: "Services", value: selectedAffidavit || "N/A" },
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

                                  {/* Amount Booking Fee */}
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
                                    style={{ color: '#000', fontWeight: 'bold' }}
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
                                {/* // </div> */}
                              </>
                            )}

                          </>
                        )}
                      </div>
                    )}

                    {/* Close Button */}
                    <button
                      onClick={closePopup}
                      className='d-none d-lg-block'
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
          )}

        </div>
   <div className="container my-5">
              <div className="row" style={{ position: "relative" }}>
                {/* Left Column () */}
                <div className="col-md-8" ref={firstColumnRef}>
             
                  

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
                            Step 2: Drafting
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
                            Step 3: Review Drafting
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
                            Step 5: Doorstep Delivery
                          </h3>
                         
                        </div>
                      </div>
                  
                      
                    </div>
                  </div>
                        
                                 {/* Charges Section (Scrollable) */}
                  <div
                    className="d-flex align-items-center w-100 flex-wrap mt-5 gap-3  d-none d-lg-block"
                    style={{ marginLeft: "2%" }}
                  >  

                    {/* Content Section */}
                    <div style={{ marginTop: "" }}>
                      <h5 style={{ color: "#007BFF", fontWeight: "bold" }}>
                        Charges
                      </h5>
                      <ul
                        style={{ listStyleType: "disc", paddingLeft: "20px" }}
                      >
                        <li>
                          <strong style={{ color: "#ff9800" }}>
                            Rs. 500/-
                          </strong>{" "}
                          For (Normal Application)
                        </li>
                        <li>
                         Rs.50 as booking/consulting charge. Need to pay while submitting online form
                        </li>
                 
                      </ul>
                    </div>
                  </div>

                  {/* charges */}
                  <div
                    className="d-block d-lg-none"
                    style={{
                      padding: "15px",
                      backgroundColor: "#ffffff",
                      borderRadius: "10px",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                      margin: "15px",
                    }}
                  >  

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        marginBottom: "20px",
                      }}
                    >
                      <div
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
                      </div>
                      <div>
                        <h5
                          style={{
                            color: "#007BFF",
                            fontWeight: "bold",
                            fontSize: "16px",
                          }}
                        >
                          Charges
                        </h5>
                        <ul
                          style={{
                            fontSize: "14px",
                            paddingLeft: "15px",
                            marginBottom: 0,
                          }}
                        >
                          <li>
                            <strong style={{ color: "#ff9800" }}>
                              Rs. 750/-
                            </strong>{" "}
                            For (Normal Application){" "}
                          </li>
                     
                          <li>
                            Rs.99 as booking fee. Need to pay while submitting online form (This fee is non-refundable
and will be adjusted in the total bill.)
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>


        <br />

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
                                                               "I applied for a name change affidavit online and got it within 24 hours. Very convenient and fast!"
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
                                                                      Anjali Mehta

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
                                                                    "The process was smooth, and I didn’t have to visit any legal office. Excellent service!"
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
                                                                     
                                                                     Rohit Kapoor

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
                                                                   
                                                                  "Affordable and reliable. Got my affidavit on time and without hassle." 
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
                                                                       
                                                              Sneha Iyer
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
                                                                 "Perfect for busy professionals. I got my signature change affidavit quickly for my bank records."
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
                                                                     Karan Singh

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
                                                                  
                                                                 "Perfect for busy professionals. I got my signature change affidavit quickly for my bank records."
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
                                                                         Karan Singh

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
                                                                    "Make My Documents saved me hours of running around. Everything was done online."
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
                                                                     Meera Joshi

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
                            style={{
                              filter: "invert(1)",
                              width: "20px",
                              height: "20px",
                            }}
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
                            style={{
                              filter: "invert(1)",
                              width: "20px",
                              height: "20px",
                            }}
                          ></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {window.innerWidth <= 768 && (
                    <div
                      style={{ padding: "20px", backgroundColor: "#f0f4f8" }}
                      className="d-block d-lg-none"
                    >
                      <div
                        style={{ padding: "20px", backgroundColor: "#f9fafb" }}
                      >
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
                      name: "Anjali Mehta",
                      initial: "V",
                      review:
                        "I applied for a name change affidavit online and got it within 24 hours. Very convenient and fast!",
                       },
                    {
                      name: "Rohit Kapoor",
                      initial: "H",
                      review:
                       "The process was smooth, and I didn’t have to visit any legal office. Excellent service!",
                    },
                    {
                      name: "Sneha Iyer",
                      initial: "K",
                      review:
                       "Affordable and reliable. Got my affidavit on time and without hassle.",
                    },
                    {
                      name: "Karan Singh",
                      initial: "S",
                      review:
                        "Perfect for busy professionals. I got my signature change affidavit quickly for my bank records.",
                    },
                    {
                      name: "Meera Joshi",
                      initial: "V",
                      review:
                        "Make My Documents saved me hours of running around. Everything was done online.",
                    },
                    {
                      name: "Arjun Malhotra.",
                      initial: "R",
                      review:
                        "Smooth and professional service. My affidavit was prepared accurately and delivered right when I needed it.",
                    },
                            ].map((item, index) => (
                              <div
                                className={`carousel-item ${
                                  index === 0 ? "active" : ""
                                }`}
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
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
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
                            <span
                              className="carousel-control-prev-icon"
                              aria-hidden="true"
                              style={{ marginLeft: "-120%" }}
                            ></span>
                          </button>
                          <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#mobileReviewCarousel"
                            data-bs-slide="next"
                          >
                            <span
                              className="carousel-control-next-icon"
                              aria-hidden="true"
                              style={{ marginRight: "-80%" }}
                            ></span>
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
                    width:
                      isSticky && stickyColumnRef.current
                        ? `${stickyColumnRef.current.offsetWidth}px`
                        : "auto",
                    zIndex: 1000,
                  }}
                >
             
                
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
                  {/* <a
    href="https://wa.me/+919980097315"
    style={{
      width: "45px",
      height: "45px",
      backgroundColor: "#25d366",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "8px",
      marginRight: "10px",
      color: "#fff",
      fontSize: "20px",
      textDecoration: "none",
    }}
  >
    <i className="fab fa-whatsapp"></i>
  </a> */}
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

                  {/* <a
    href="tel:+919429690973"
    style={{
      width: "45px",
      height: "45px",
      backgroundColor: "#ff9800",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "8px",
      color: "#fff",
      fontSize: "20px",
      textDecoration: "none",
    }}
  >
    <i className="fa fa-phone"></i>
  </a> */}
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
                      border: `1px solid ${
                        active === service.name ? "#000" : "#ccc"
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
            </div>
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
             
              <br />
              <>
             <h2 className="faq-tag-title-h3">
            <strong>Apply for Affidavits Online – Quick and Hassle-Free  in Karnataka   </strong>
          </h2>
      
          <p style={{ textAlign: "left" }}>
          One thing that is quite certain is that filing for an affidavit is not necessarily a nightmare of standing in long queues, dealing with tons of paperwork, and getting lost in legal jargon. Online through Make My Documents, you are empowered to generate affidavits that are recognized by law for changing names, updating signatures, and any other personal or official use.
            </p>
            <p style={{ textAlign: "left" }}>
          We take care of everything from the writing of the document to the delivery, so it means that you get to save a lot of your time and energy.
            </p>

          <h2
            className="faq-tag-title-h3"
            style={{ textAlign: "left", fontSize: "22px" }}
          >
            <strong>Name Change Affidavit (Annexure E) </strong>
          </h2>
          
          
              <p>An affidavit for a name change (Annexure E) is a formal record used to update your name in legal files, government-issued identification, passports, or financial documentation. It is a necessity for a person who has done a name change with the law and requires the same to be reflected in all documents.</p>
          <p><strong>Use Cases:</strong></p>
          <ul>
            <li>
            Correct spelling errors in your name.
              </li>
                <li>
            Update your name in Aadhaar, PAN, or passport records.
              </li>
        
            <li>
            Legal proof for name changes due to personal preference or legal reasons.
              </li>
        
          </ul>
          <h2
            className="faq-tag-title-h3"
            style={{ textAlign: "left", fontSize: "22px" }}
          >
            <strong>
             Name Change Affidavit for Minor
            </strong>
          </h2>
         
          
          <p style={{ textAlign: "left" }}>
          A Marriage Name Change Affidavit is a document needed when a woman (or a man) decides to change her/his last name or full name after marriage. The affidavit is accepted as a certificate of your new identity in passports, bank records, and other official documents.
            </p>
            <p>
              <strong>Use Cases:</strong>
            </p>
          <ul>
            <li>Get your last name or full name changed after marriage.</li>
             <li>Alter your name in bank accounts, Aadhaar, and passports.</li>
              <li>Serve as legal evidence for immigration or visa purposes.</li>
          </ul>
          <h2
            className="faq-tag-title-h3"
            style={{ textAlign: "left", fontSize: "22px" }}
          >
            <strong>One and the Same Person Affidavit</strong>
          </h2>

          
          <p style={{ textAlign: "left" }}>
         These are the cases when a P.O.A. (Power of Attorney) is required if a person has several names or different forms of a name on various documents. Such a document eliminates misunderstandings by a legal announcement that all the names indicate the same person.

            </p>
            <p>
              <strong>Use Cases:</strong>
            </p>
      
          <ul>
            <li>
              Spelling differences in official documents are corrected.

            </li>
         <li>
            Identifying name differences in educational certificates, property documents, and IDs.

            </li>
             <li>
              During legal or financial checks, to give evidence.

            </li>

         
          </ul>
          <h2
            className="faq-tag-title-h3"
            style={{ textAlign: "left", fontSize: "22px" }}
          >
            <strong>Change of Signature Affidavit</strong>
          </h2>
          <p style={{ textAlign: "left" }}>
         When a person wants to change their signature and their signature is to be changed for banking, property dealings, or any other official use, a Change of Signature Affidavit should be filed.
          </p>
            <p>
              <strong>Use Cases:</strong>
            </p>
          <ul>
              <li> Modify your signature on government records and bank accounts.</li>
           <li>  Present a sealed signature example for use in court.</li>
              <li> Present as evidence in the case of a company transaction or foreigner status. </li>
          </ul>

         <h2
            className="faq-tag-title-h3"
            style={{ textAlign: "left", fontSize: "22px" }}
          >
            <strong>Our Easy Process</strong>
          </h2>
          <p style={{ textAlign: "left" }}>
        We’ve simplified affidavit creation into 4 quick steps:
          </p>
          
          <ul>
              <li><strong>Register Online: </strong> Fill out your details securely.</li>
               <li><strong>Upload Documents: </strong> Submit scanned copies of your ID proof.</li>
                <li><strong>Make Payment: </strong> Complete a quick online payment.</li>
                 <li><strong>Get Delivered: </strong> Receive your legally drafted affidavit digitally or via courier.</li>
          </ul>

            <h2
            className="faq-tag-title-h3"
            style={{ textAlign: "left", fontSize: "22px" }}
          >
            <strong>Documents Required</strong>
          </h2>
          <p style={{ textAlign: "left" }}>
        For most affidavits, you will need:
          </p>
          
          <ul>
              <li>Aadhaar Card or any valid government-issued ID</li>
              <li>Passport-size photo (if required)</li>
              <li>Any additional document supporting the affidavit type</li>
          </ul>
            <h2
            className="faq-tag-title-h3"
            style={{ textAlign: "left", fontSize: "22px" }}
          >
            <strong>Processing Time </strong>
          </h2>
          <p style={{ textAlign: "left" }}>
       Affidavit processing is quick and can be completed within 1–2 working days after document submission.
          </p>
              </>
                <br />
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
                      <h5 style={{ fontSize: "16px" }}>{faq.question}</h5>
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





     

    </>
  );
};

const styles = {
  paymentSummary: {
    maxWidth: '600px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  thankYouMessage: {
    textAlign: 'center',
    color: '#007BFF',
    marginBottom: '20px',
  },
  infoBox: {
    marginBottom: '20px',
  },
  inputGroup: {
    display: 'flex',
    alignItems: 'center',
    margin: '10px 0',
  },
  label: {
    flex: '1',
    fontWeight: 'bold',
    color: '#333',
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
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
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

export default AffidavitNew;
