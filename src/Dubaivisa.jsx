import React, { useEffect, useState } from "react";
import circleIcon from "../src/images/circle1.svg";
import documentsIcon from "../src/images/documents.svg";
import TimeIcon from "../src/images/Time.svg";
import Price from "./images/Price Tag.svg";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import howIcon from "./images/how.svg";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ArrowLeft,  } from "lucide-react";
import "./Service.css";
import UAEImage from "../src/images/UAE_image_banner.jpg";
import bannerimage from "../src/images/bannerimage-g.png"
import { Helmet } from "react-helmet";
import Custom404Page from "./Custom404Page";
import Header from "./Header";

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

const visadata = [
  {
    name: "United Arab Emirated",
    routeName: "dubai-tourist-visa-for-indians",
    img: "arabImage1",
    bannerimage: UAEImage,
    data: [
      {
        title: "Documents Required For Visa",
        desc: `
            <ul
              style="
                display: grid;
                list-style-type: disc; 
                padding-left: 20px;
                white-space: nowrap;
                margin: 20px 0; "
            >
              <li>India PAN Card</li>
              <li>Passport</li>
              <li>Passport Back</li>
              <li>Traveler Photo</li>
              <li>Round Trip Flight Ticket</li>
              <li>Hotel Booking</li>
             
            </ul>
          `,
      },
      {
        title: "How It Works",
        desc: `
            <ul
              style="
                display: grid;
                list-style-type: disc; 
                padding-left: 20px;
                white-space: nowrap;
                margin: 20px 0;
              "
            >
              <li>Register Online</li>
              <li>Upload Documents</li>
              <li>Documents Verfication</li>
               <li>Payment</li>
                <li>Receive your E-Visa via E-mail</li>
            </ul>
          `,
      },
      {
        title: "Time Duration",
        desc: `
            
           <ul
              style="
                display: grid;
                list-style-type: disc; 
                padding-left: 20px;
                white-space: nowrap;
                margin: 20px 0;
              "
            >
              <li>04 - 05 working days</li>
              
            </ul>
          `,
      },
      {
        title: "Charges",
        desc: `
            <ul
              style="
                display: grid;
                list-style-type: disc; 
                padding-left: 20px;
                white-space: nowrap;
                margin: 20px 0;
              "
            >
              <li>UAE 30 Days Single Entry E-Visa  <br class="d-block d-lg-none" /> <strong> Rs: 7854</strong></li>
              <li>UAE 30 Days Multiple Entry E-Visa    <br class="d-block d-lg-none" /><strong> Rs: 14,600 </strong></li>
             <li>UAE 60 Days Single Entry E-Visa  <br class="d-block d-lg-none" /> <strong> Rs: 12,446   </strong></li>
             <li>UAE 60 Days Multiple Entry E-Visa   <br class="d-block d-lg-none" /> <strong>  Rs: 19,118 </strong></li>
             <li><strong>Rs. 99 </strong>  as booking fee. Need to pay  <br class="d-block d-lg-none" />while submitting online form (This fee is  <br class="d-block d-lg-none" /> non-refundable and will be adjusted   <br class="d-block d-lg-none" />in the total bill.)</li>
            </ul>
          `,
      },
    ],
  },
];


const relatedServices = [
    { name: "Singapore", path: "/singapore-visa" },
    { name: "United Kingdom", path: "/uk-visa" },
    { name: "Australia", path: "/australia-visa" },
    { name: "Malaysia", path: "/malaysia-visa" },
    { name: "Egypt", path: "/egypet-visa" },
    { name: "Vietnam", path: "/vietnam-visa" },
    { name: "Hong Kong", path: "/hongkong-visa" },

    { name: "Indonesia", path: "/indonesia-visa" },

    { name: "Azerbaijan", path: "/azerbaijan-visa" },
    { name: "Oman", path: "/oman-visa" },

    { name: "Morocco", path: "/morocco-visa" },
    { name: "Bahrain", path: "/bahrain-visa" },

    { name: "Qatar", path: "/qatar-visa" },

    { name: "Russia", path: "/russia-visa" },
    { name: "Uzbekistan", path: "/uzbekistan-visa" },




  ];


const DubaiVisa = () => {

  const navigate = useNavigate();
//   const { services } = useParams();
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
  const [gender, setGender] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [houseStreetName, setHouseStreetName] = useState("");
  const [villageTownCity, setVillageTownCity] = useState("");
  const [dob, setDob] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [travellingDate, setTravellingDate] = useState("");
  const [returningDate, setReturningDate] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [active, setActive] = useState(null);

  const handleClick = (service) => {
    setActive(service.name);
    navigate(service.path);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedAffidavit, setSelectedAffidavit] = useState("");
  const [pincode, setPincode] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [errors, setErrors] = useState({});
  const [aadharNumber, setAadharNumber] = useState("");
  const [selectedVisa, setSelectedVisa] = useState(visadata[0]);
  const [selectedState, setSelectedState] = useState("");

  const [selectedDestination, setSelectedDestination] = useState(null);
  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth',
  //   });
  // }, []); 

  const handleTravellingDateChange = (e) => {
    setTravellingDate(e.target.value);
  };
  const handleReturningDateChange = (e) => {
    setReturningDate(e.target.value);
  };
  const getTomorrowDate = () => {
    const today = new Date();
    today.setDate(today.getDate() + 1); // Set to tomorrow's date
    return today.toISOString().split("T")[0]; // Return in YYYY-MM-DD format
  };
  const getMinReturningDate = () => {
    return travellingDate; // The returning date must be after or on the same day as the travelling date
  };

  useEffect(() => {
    // Validate the returning date when travelling date or returning date changes
    if (returningDate && new Date(returningDate) < new Date(travellingDate)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        returningDate:
          "Returning date must be after or on the same day as the travelling date.",
      }));
    } else {
      setErrors((prevErrors) => {
        const { returningDate, ...rest } = prevErrors;
        return rest;
      });
    }
  }, [travellingDate, returningDate]);
  const [otpSent, setOtpSent] = useState(false);
  // const [userDetails, setUserData] = useState(null); // Holds user details
  const [userDetails, setUserDetails] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const [error, setError] = useState("");
  const [showOtpSection, setShowOtpSection] = useState(true);
  const closePopup = () => {
    setShowPopup(false);
    setCurrentStep(1);
    setIsCompleted(false);
  
    navigate("/dubai-tourist-visa-for-indians");
  };
  
  const routeName = "dubai-tourist-visa-for-indians";


  const [registrationNumber, setSeletedRegistrationNumber] = useState("");

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

  // window.scrollTo({
  //   top: 0,
  //   behavior: 'smooth',
  // })

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
  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };
  const handleEmailIdChange = (e) => {
    const value = e.target.value;
    setEmailId(value);

    // Clear error if input matches a valid email format
    if (/\S+@\S+\.\S+/.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        emailId: "", // Clear error
      }));
    }
  };
  const handleVillageTownCityChange = (e) => setVillageTownCity(e.target.value);
  const handleStateChange = (e) => setSelectedState(e.target.value);
  const handleDistrictChange = (e) => setSelectedDistrict(e.target.value);
  const handleRegistrationNumber = (e) =>
    setSeletedRegistrationNumber(e.target.value);
  const [leadId, setLeadId] = useState();
  const getMaskedMobileNumber = (number) => {
    if (!number || number.length < 3) return ""; // Return empty if number is too short
    const firstTwo = number.slice(0, 2); // First two digits
    const lastDigit = number.slice(-1); // Last digit
    const masked = `${firstTwo}******${lastDigit}`; // Mask the middle digits
    return masked;
  };

  const handleAffidavitChange = (e) => {
    setSelectedAffidavit(e.target.value);
    setError(""); // Clear error when a selection is made
  };

  const handleContinue = () => {
    // setShowPopup(true)
    navigate("/dubai-visa-form");
  };
  useEffect(() => {
    const path = window.location.pathname;
    if (path.endsWith("-form")) {
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  }, []);
  
  
  useEffect(() => {
    const scriptSrc = "https://static.elfsight.com/platform/platform.js";

   
    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (window.elfsight) {
          window.elfsight.reload(); 
        }
      };
    } else {
   
      if (window.elfsight) {
        window.elfsight.reload();
      }
    }
  }, []);

  const handlePincodeChange = (e) => {
    const value = e.target.value;

    // Allow only numeric input and enforce exactly 6 digits
    if (/^\d{0,6}$/.test(value)) {
        setPincode(value);
        if (value.length === 6) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                pincode: "", // Clear error if valid
            }));
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                pincode: "Pin Code must be exactly 6 digits.",
            }));
        }
    } else {
        setErrors((prevErrors) => ({
            ...prevErrors,
            pincode: "Only numbers are allowed for Pin Code.",
        }));
    }
};






  const handleBlur = () => {
    setIsTouched(true); // Mark the field as interacted
    // Check if the length is exactly 6 digits
    if (!pincode || pincode.length !== 6) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        pincode: "Pin Code must be exactly 6 digits.",
      }));
    }
  };
  // Navigate steps
  const nextStep = () => {
    let validationErrors = {};

    if (currentStep === 1) {
      // Step 1 Validation
      if (!fullName.trim()) {
        validationErrors.fullName = "Full Name is required.";
      }
      if (!gender) {
        validationErrors.gender = "Gender is required.";
      }
      if (!travellingDate) {
        validationErrors.travellingDate = "Travelling Date is required.";
      }
      if (!returningDate) {
        validationErrors.returningDate = "Returning Date is required.";
      }
    } else if (currentStep === 2) {
      // Step 2 Validation
      if (!mobileNumber.trim()) {
        validationErrors.mobileNumber = "Mobile Number is required.";
      } else if (!/^\d{10}$/.test(mobileNumber)) {
        validationErrors.mobileNumber = "Mobile Number must be 10 digits.";
      }

      if (!emailId.trim()) {
        validationErrors.emailId = "Email ID is required.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailId)) {
        validationErrors.emailId = "Please enter a valid Email ID.";
      }

      if (!villageTownCity.trim()) {
        validationErrors.villageTownCity = "Address is required.";
      }
      if (!selectedState) {
        validationErrors.selectedState = "State is required.";
      }
      if (!selectedDistrict) {
        validationErrors.selectedDistrict = "District is required.";
      }

      // Pincode Validation
      const pincodeRegex = /^[0-9]{6}$/; // Pincode should be exactly 6 digits.
      if (!pincode.trim()) {
        validationErrors.pincode = "Pincode is required.";
      } else if (!pincodeRegex.test(pincode)) {
        validationErrors.pincode = "Pincode must be exactly 6 digits.";
      }
    }

    // If there are validation errors, set them and stop navigation
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Clear errors and move to the next step
    setErrors({});
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleMobileNumberChange = (e) => {
    const value = e.target.value;

    // Allow only numeric input and a maximum of 10 digits
    if (/^\d{0,10}$/.test(value)) {
      setMobileNumber(value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        mobileNumber: "", // Clear error if valid
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        mobileNumber: "Mobile number must be a 10-digit number.",
      }));
    }
  };

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

  // To track if OTP has been sent

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
        ORDER_ID: orderId,  // Make sure ORDER_ID is set
        CUST_ID: custId,
        INDUSTRY_TYPE_ID: "Retail",
        CHANNEL_ID: "WEB",
        TXN_AMOUNT: txnAmount.toString(),
        WEBSITE: "DEFAULT",
        SERVICE: "Travel visa",
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
        //   if (services) {
        //     navigate(`/${services}/proceed-to-pay`);
        //   } else {
        //     navigate("/"); // Default redirect
        //   }
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



  


  // Filter data based on the resolved route name
  const filteredData = visadata?.find((item) => item.routeName === routeName);



  const finishSubmission = () => {
    submitDataToAPI();
    if (mobileNumber) {
      setMaskedNumber(getMaskedMobileNumber(mobileNumber));
    }
    setIsCompleted(true);
  };
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB"); // "en-GB" for dd/mm/yyyy format
  };
  const submitDataToAPI = async () => {
    const data = {
      
      orderid :orderid ||"",
      name: fullName || "",
      mobilenumber: mobileNumber || "",
      email: emailId || "",
      travellingDate: travellingDate || "",
      returningDate: returningDate || "",
      services: selectedAffidavit || "",
      address: villageTownCity || "",
      district: selectedDistrict || "",
      dob: dob || "",
      date: date && date !== "0000-00-00" ? date : new Date().toISOString().split("T")[0],
      registrationNumber: registrationNumber || "",
      insurance_registration_number: registrationNumber || "",
      paidAmount: "99",
      // PGID: `ORD_${Date.now()}`,
      applying_for: filteredData?.name || "N/A",
      gender: gender || "",
      
      pincode: pincode || "",
      adharnumber: aadharNumber || "",
      pancard: "",
      time:
        time && time !== "00:00:00"
          ? time
          : new Date().toLocaleTimeString("en-US", { hour12: false }),
      comment: "",
      status: "",
      service: "Travel Visa",
     
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
          applying_for: leadData.applying_for || "N/A",
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

  if (!filteredData) {
    return (
      <>
    
      {filteredData ? (
        <div>
          {/* Your Service Content */}
        </div>
      ) : (
        <Custom404Page />
      )}
    </>
    );
  }

  const faqs = [
    {
      question: " Can I apply for a Dubai tourist visa online? ",
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
        "Yes, you can apply for a Dubai tourist visa online through official visa platforms or travel agencies.",
    },
    {
      question: "Is it possible to extend my Dubai tourist visa?",
      answer:
        "Yes, a Dubai tourist visa can be extended for up to 30 days, but the extension is subject to approval by immigration authorities.",
    },
    {
      question: "Do I need to book a flight and hotel before applying for the visa?",
      answer:
        "Yes, you need to provide flight and hotel booking details as part of the visa application process.",
    },
    {
      question: "Can I apply for a Dubai tourist visa if I have a previous visa rejection? ",
      answer:
        "Yes, you can still apply, but previous rejections might affect the approval process depending on the reason.",
    },
    {
      question: "Is health insurance required for a Dubai tourist visa? ",
      answer:
        "While not mandatory, travel health insurance is highly recommended for emergencies during your stay.",
    },
    {
      question: "Do I need to submit original documents for a Dubai tourist visa? ",
      answer:
        "No, you only need to submit scanned copies of the required documents unless requested otherwise by the authorities.",
    },
    {
      question: "How can I track my Dubai tourist visa application status? ",
      answer:
        "You can track your application status online through the visa platform or agency you applied through.",
    },
    {
      question: "Can I get a visa on arrival in Dubai? ",
      answer:
        "Indian nationals generally need to apply for a tourist visa before traveling, as visa on arrival is not available for most Indians.",
    },
    {
      question: "Can I travel to other countries in the UAE with a Dubai tourist visa? ",
      answer:
        "Yes, a Dubai tourist visa allows travel to other emirates within the UAE, as long as the visa is valid.",
    },
    {
      question: "What is the difference between a tourist visa and a transit visa for Dubai? ",
      answer:
        "A tourist visa is for leisure or business stays, while a transit visa is for shortstops (usually 48-96 hours) when passing through Dubai en route to another destination.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

//   const currentMeta = metaTags[routeName] || {};
  return (
    <>
    <Helmet>
    <title>Dubai Tourist Visa for Indians | Fees and Application Process</title>
      <meta name="description" content="Apply for a Dubai tourist visa for Indians with a simple online process. Get all the details on eligibility, visa types, etc., to plan your trip to Dubai.
" />
      <meta name="keywords" content= "Apply for a Dubai tourist visa for Indians with a simple online process. Get all the details on eligibility, visa types, etc., to plan your trip to Dubai." />
      <link rel="canonical" href="https://makemydocuments.com/dubai-tourist-visa-for-indians" />
      {/* <meta name="author" content={currentMeta.canonical} /> */}
      <meta name="rating" content="General" />
      <meta name="revisit-after" content="2 days" />
      <meta name="robots" content="ALL, index, follow" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="Safe For All" />
      <meta name="language" content="English" />
      <meta httpEquiv="window-target" content="_top" />
      <meta httpEquiv="pics-label" content="for all ages" />
      <meta name="GOOGLEBOTS" content="All, FOLLOW" />
      <meta name="YAHOOBOTS" content="All, FOLLOW" />
      <meta name="MSNBOTS" content="All, FOLLOW" />
      <meta name="BINGBOTS" content="All, FOLLOW" />
      <meta name="Googlebot-Image" content="All" />
      <meta name="Slurp" content="All" />
      <meta name="Scooter" content="All" />
      <meta name="WEBCRAWLERS" content="All" />

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
        <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Make My Documents",
        "image": "https://www.makemydocuments.com/logo.png",
        "@id": "https://makemydocuments.com/dubai-tourist-visa-for-indians",
        "url": "https://makemydocuments.com/dubai-tourist-visa-for-indians",
        "telephone": "+91-9429690973",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "No 344, 2nd Main Rd, Manjunath Nagar, Mookambika Nagar, Dattatreya Nagar, Hosakerehalli",
          "addressLocality": "Bengaluru",
          "addressRegion": "Karnataka",
          "postalCode": "560085",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "12.925435912146988",
          "longitude": "77.5409615823579"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "10:00",
            "closes": "17:00"
          }
        ],
        "priceRange": "₹₹",
        "description": "Apply for a Dubai tourist visa for Indians with a simple online process. Get all the details on eligibility, visa types, etc., to plan your trip to Dubai.",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Visa Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "New Tourist Visa Applications"
              }
            }
          ]
        }
      }
    `}
  </script>

  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can I apply for a Dubai tourist visa online?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, you can apply for a Dubai tourist visa online through official visa platforms or travel agencies."
            }
          },
          {
            "@type": "Question",
            "name": "Is it possible to extend my Dubai tourist visa?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, a Dubai tourist visa can be extended for up to 30 days, but the extension is subject to approval by immigration authorities."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need to book a flight and hotel before applying for the visa?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, you need to provide flight and hotel booking details as part of the visa application process."
            }
          },
          {
            "@type": "Question",
            "name": "Can I apply for a Dubai tourist visa if I have a previous visa rejection?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, you can still apply, but previous rejections might affect the approval process depending on the reason."
            }
          },
          {
            "@type": "Question",
            "name": "Is health insurance required for a Dubai tourist visa?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While not mandatory, travel health insurance is highly recommended for emergencies during your stay."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need to submit original documents for a Dubai tourist visa?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, you only need to submit scanned copies of the required documents unless requested otherwise by the authorities."
            }
          },
          {
            "@type": "Question",
            "name": "How can I track my Dubai tourist visa application status?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can track your application status online through the visa platform or agency you applied through."
            }
          },
          {
            "@type": "Question",
            "name": "Can I get a visa on arrival in Dubai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Indian nationals generally need to apply for a tourist visa before traveling, as visa on arrival is not available for most Indians."
            }
          },
          {
            "@type": "Question",
            "name": "Can I travel to other countries in the UAE with a Dubai tourist visa?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, a Dubai tourist visa allows travel to other emirates within the UAE, as long as the visa is valid."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between a tourist visa and a transit visa for Dubai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A tourist visa is for leisure or business stays, while a transit visa is for shortstops (usually 48-96 hours) when passing through Dubai en route to another destination."
            }
          }
        ]
      }
    `}
  </script>
  <meta property="og:title" content="Dubai Tourist Visa for Indians | Fees and Application Process" />
  <meta property="og:description" content="Apply for a Dubai tourist visa for Indians with a simple online process. Get all the details on eligibility, visa types, etc., to plan your trip to Dubai." />
  <meta property="og:url" content="https://makemydocuments.com/dubai-visa" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://www.makemydocuments.com/static/media/bannerimage-g.9468cc5ebd5dcf5ebb9d.png" />
  <meta property="og:site_name" content="Make My Documents" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Dubai Tourist Visa for Indians | Fees and Application Process" />
  <meta name="twitter:description" content="Apply for a Dubai tourist visa for Indians with a simple online process. Get all the details on eligibility, visa types, etc., to plan your trip to Dubai." />
  <meta name="twitter:image" content="https://www.makemydocuments.com/static/media/bannerimage-g.9468cc5ebd5dcf5ebb9d.png" />
  <meta name="twitter:site" content="@makemydocuments" />
  

    </Helmet>

      <div style={{ backgroundColor: "#f4f4f4", padding: "15px 25px", marginTop:'8%' }} className="breadcrumb-title">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item" style={{fontWeight:'bold'}}>
            <Link to="/" style={{ color: "#007bff", textDecoration: "none" }}>Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page" style={{fontWeight:'bold'}}>
          Dubai Tourist Visa for Indians

          </li>
        </ol>
      </nav>
    </div>
    {/* {filteredData?<Header /> :""} */}
    <div style={{overflow:'hidden'}}>
    <div className="mobile-header">
    <div className="headsection">
  <div
    style={{
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      minHeight: "55vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden", // Prevent content from overflowing the container
    }}
  >
    {/* Container for Image */}
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 1, // Keep image behind the text
      }}
    >
      <img
        src={bannerimage} 
        alt="Travel Visa"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>

    {/* Container for Text */}
    <div
      style={{
        position: "relative",
        zIndex: 2, // Keep text on top of the image
        textAlign: "center",
        color: "#ffffff", // White text for better visibility on most backgrounds
        padding: "20px", // Add padding for better spacing
      }}
    >
      <h1
        style={{
          fontSize: "36px", // Font size for desktop
          fontWeight: "bold",
          margin: 0,
        }}
        className="banner-name"
      >
   Dubai Tourist Visa for Indians

      </h1>
    </div>
  </div>
</div>


      <div
        className="content-section"
        style={{
          backgroundColor: "#ffffff",
          padding: "30px 15px",
          borderRadius: "10px",
          margin: "-1% auto",
          marginRight: "72%",
        }}
      >
        <div className="row justify-content-center">
          {/* Main Column for Vertical Layout */}
          <div className="col-12 col-md-8 position-relative">
            {/* First Section: Documents */}
            <div className="text-center mb-5">
              <div className="image-style d-none d-lg-block" style={{ position: "relative" }}>
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
                    top: "67%",
                    left: "50%",
                    justifyContent: "center",
                    alignItems: "center",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>

              {/* Documents Content */}
              <div className="d-none d-lg-block">
  {filteredData.data.map((item, index) => {
    if (item.title === "Documents Required For Visa") {
      // Add the dynamic country name to the description
      const updatedDesc = item.desc.replace(
        /Documents Required For Visa/g, 
        `Documents Required For Visa ${filteredData.name}`
      );

      return (
        <div
          key={index}
          className="mb-5"
          style={{
            marginTop: "-30%",
            marginLeft: "75%",
          }}
        >
          <h4 className="document-title">
            {`Documents Required For ${filteredData.name} Visa `}
          </h4>
          <div
            className="document-ul" style={{ listStyleType: "disc",}}
            dangerouslySetInnerHTML={{ __html: updatedDesc }}
          />
        </div>
      );
    }
    return null;
  })}
</div>

            </div>
      



            {/* Second Section: How It Works */}
            <div className=" text-center mb-5">
              <div className="d-none d-lg-block" style={{ position: "relative" }}>
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
              {/* How It Works Content */}
              <div className="d-none d-lg-block">
              {filteredData.data.map((item, index) => {
                if (item.title === "How It Works") {
                  return (
                    <div
                      key={index}
                      style={{ marginLeft: "80%", marginTop: "-30%" }}
                    >
                      <h4 className="document-title"
                        // style={{
                        //   color: "#007BFF",
                        //   fontWeight: "bold",
                        //   whiteSpace: "nowrap",
                        // }}
                      >
                        {item.title}
                      </h4>
                      <div className="document-ul"
                        style={{
                          textAlign: "left", // Ensure content below the title also aligns to the left
                        }}
                        dangerouslySetInnerHTML={{ __html: item.desc }}
                      />
                    </div>
                  );
                }
                return null;
              })}
              </div>

             

            </div>

            {/* Thwedird Section: Time Duration */}
            <div className="text-center mb-5">
              <div className="d-none d-lg-block"  style={{ position: "relative" }}>
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
                    top: "68%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>
              {/* Time Duration Content */}
              <div className="d-none d-lg-block">
              {filteredData.data.map((item, index) => {
                if (item.title === "Time Duration") {
                  return (
                    <div
                      key={index}
                      style={{ marginLeft: "80%", marginTop: "-25%" }}
                    >
                      <h4 className="document-title"
                        // style={{
                        //   color: "#007BFF",
                        //   fontWeight: "bold",
                        //   whiteSpace: "nowrap",
                        // }}
                      >
                        {item.title}
                      </h4>
                      <div className="document-ul"
                        style={{
                          textAlign: "left", // Ensure content below the title also aligns to the left
                        }}
                        dangerouslySetInnerHTML={{ __html: item.desc }}
                      />
                    </div>
                  );
                }
                return null;
              })}
              </div>

             

            </div>

            {/* Fourth Section: Charges */}
            <div className="text-center mb-5">
              <div className="d-none d-lg-block"  style={{ position: "relative" }}>
                <img
                  src={circleIcon}
                  alt="Circle Background"
                  className="img-fluid"
                />
                <img
                  src={Price}
                  alt="Charges Icon"
                  style={{
                    position: "absolute",
                    top: "68%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>
              {/* Charges Content */}
              <div className="d-none d-lg-block">
              {filteredData.data.map((item, index) => {
                if (item.title === "Charges") {
                  return (
                    <div
                      key={index}
                      style={{ marginLeft: "80%", marginTop: "-25%" }}
                    >
                      <h4 className="document-title"
                        // style={{
                        //   color: "#007BFF",
                        //   fontWeight: "bold",
                        //   whiteSpace: "nowrap",
                        // }}
                      >
                        {item.title}
                      </h4>
                      <div className="document-ul"
                        style={{
                          textAlign: "left", // Ensure content below the title also aligns to the left
                        }}
                        dangerouslySetInnerHTML={{ __html: item.desc }}
                      />
                    </div>
                  );
                }
                return null;
              })}
              </div>

              

            </div>
          </div>
        </div>
      </div>

      <div className="content-section-visa" style={{ marginTop: '-29%', marginLeft: '-10%' }}>
  <div className="content-wrapper">
    <div className="row justify-content-center">
      <div className="col-12 col-md-8 position-relative">

        {/* Mobile Section */}
        <div className="mobile-section d-block d-lg-none">
          {filteredData.data.map((item, index) => {
            let icon;

            // Dynamically update icons based on the title
            if (item.title === `Documents Required For Visa`) {
              icon = documentsIcon;
            } else if (item.title === "How It Works") {
              icon = howIcon;
            } else if (item.title === "Time Duration") {
              icon = TimeIcon;
            } else if (item.title === "Charges") {
              icon = Price;
            }

            return (
              <div
                key={index}
                className="mobile-content d-flex align-items-start"
                style={{ marginBottom: '10px' }} // Reduced global gap between items
              >
                {/* Icon */}
                <div
                  className="mobile-icon-container"
                  style={{
                    position: 'relative',
                    flex: '0 0 15%', // Slightly smaller icon container
                    marginTop: '-4%',
                  }}
                >
                  <img
                    src={circleIcon}
                    alt="Circle Background"
                    className="img-fluid circle-icon-mobile"
                  />
                  <img
                    src={icon}
                    alt={`${item.title} Icon`}
                    className="position-absolute mobile-icon"
                    style={{
                      top: '65%',
                      left: '50%',
                      width: '18px', // Slightly smaller icon size
                      transform: 'translate(-50%, -50%)',
                    }}
                  />
                </div>

                {/* Text Content */}
                <div
                  className="mobile-text-content"
                  style={{
                    flex: '1',
                    paddingLeft: '10px', // Reduced padding for a tighter layout
                    marginTop: '-2%',
                  }}
                >
                  {/* Title with Dynamic Name */}
                  <h4
  className="mobile-title"
  style={{
    fontSize: '16px', // Adjusted font size for better spacing
    marginBottom: '5px',
    whiteSpace: 'normal', // Allow text wrapping
    wordWrap: 'break-word', // Break words if they're too long
  }}
>
  {item.title === "Documents Required For Visa"
    ? `Documents Required For ${filteredData.name} Visa`
    : item.title}
</h4>


                  {/* Description */}
                  <div
                    className="mobile-desc"
                    style={{
                      marginTop: '-10px', // Reduced top margin
                      fontSize: '13px', // Slightly smaller font size for description
                      lineHeight: '1.4',
                     listStyleType: "disc",
                      whiteSpace: 'normal',
                      wordWrap: 'break-word',
                    }}
                    dangerouslySetInnerHTML={{
                      __html: item.desc,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  </div>
</div>






      <div>
        {/* Get Quotes Button */}
        {/* <div style={{ textAlign: "center", marginTop: "26%" }}>
          <button
            style={{
              backgroundColor: "#FCA505",
              color: "#000000",
              padding: "12px 50px",
              border: "none",
              borderRadius: "30px",
              fontWeight: "bold",
              cursor: "pointer",
              textAlign: "center",
              position: "static",
              fontSize: "16px",
              marginRight: "40%",
              marginTop: "-30%",
            }}
            onClick={handleContinue}
          >
            CONTINUE
          </button>
        </div> */}
        
        <div className="text-center-continue">
  <button className="fixed-button" onClick={handleContinue}>
  Apply Now
  </button>
</div>
<br/>

        {/* Modal Popup */}
        {showPopup && (
          <div className="popupstyle-servicevisa"
            style={{
              position: "fixed",
              top: "100px",
              left: "0",
              width: "100%",
              height: "86%",
              backgroundColor: "#126ece",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: "9999",
            }}
          >
            <div className="popup-servicevisa"
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
                  <div className="stepper-servicevisa"
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
                          <button className="button-servicevisa-stepper"
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
                      <div style={{ textAlign: "center" }}>
                        <h4 style={{ color: "#1A76D8", fontWeight: "600" }}>
                          Application
                        </h4>
                        <div>
                          {/* Travelling Date */}
                          <div style={{ width: "100%", textAlign: "left" }}>
                            <label
                              style={{
                                fontSize: "18px",
                                fontWeight: "500",
                                color: "#333",
                              }}
                            >
                              Travelling Date
                              <span style={{ color: "red" }}>*</span>
                            </label>
                            <input
                              type="date"
                              value={travellingDate}
                              onChange={handleTravellingDateChange}
                              min={getTomorrowDate()} // Set minimum date to tomorrow
                              style={{
                                width: "100%",
                                padding: "8px",
                                marginTop: "5px",
                                border: "2px solid #FCA505",
                                borderRadius: "10px",
                                position: "relative",
                                zIndex: 1,
                              }}
                            />
                            {errors.travellingDate && (
                              <p
                                style={{
                                  color: "red",
                                  fontSize: "14px",
                                  textAlign: "left",
                                }}
                              >
                                {errors.travellingDate}
                              </p>
                            )}
                          </div>
                          <br />
                          {/* Returning Date */}
                          <div style={{ width: "100%", textAlign: "left" }}>
                            <label
                              style={{
                                fontSize: "18px",
                                fontWeight: "500",
                                color: "#333",
                              }}
                            >
                              Returning Date
                              <span style={{ color: "red" }}>*</span>
                            </label>
                            <input
                              type="date"
                              value={returningDate}
                              onChange={handleReturningDateChange}
                              min={getMinReturningDate()} // Set minimum date to the travelling date
                              style={{
                                width: "100%",
                                padding: "8px",
                                marginTop: "5px",
                                border: "2px solid #FCA505",
                                borderRadius: "10px",
                                position: "relative",
                                zIndex: 1,
                              }}
                            />
                            {errors.returningDate && (
                              <p
                                style={{
                                  color: "red",
                                  fontSize: "14px",
                                  textAlign: "left",
                                }}
                              >
                                {errors.returningDate}
                              </p>
                            )}
                          </div>
                        </div>
                        <br />
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
                            Name
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            value={fullName}
                            onChange={handleFullNameChange}
                            id="fullName"
                            style={{
                              width: "100%",
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "10px",
                            }}
                          />
                          {errors.fullName && (
                            <p
                              style={{
                                color: "red",
                                fontSize: "14px",
                                textAlign: "left",
                              }}
                            >
                              {errors.fullName}
                            </p>
                          )}
                        </div>

                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            marginRight: "auto",
                            width: "fit-content",
                            // gap: "20px",
                            fontWeight: "700",
                          }}
                        >
                          <label
                            htmlFor="gender"
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Gender
                            <span style={{ color: "red" }}>*</span>
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
                              value="Male"
                              checked={gender === "Male"}
                              onChange={(e) => setGender(e.target.value)}
                              style={{
                                marginRight: "10px",
                                padding: "0px",
                                marginBottom: "0px",
                              }}
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
                              value="Female"
                              checked={gender === "Female"}
                              onChange={(e) => setGender(e.target.value)}
                              style={{
                                marginRight: "10px",
                                padding: "0px",
                                marginBottom: "0px",
                              }}
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
                              value="Transgender"
                              checked={gender === "Transgender"}
                              onChange={(e) => setGender(e.target.value)}
                              style={{
                                marginRight: "10px",
                                padding: "0px",
                                marginBottom: "0px",
                              }}
                            />
                            Transgender
                          </label>
                          {errors.gender && (
                            <p style={{ color: "red", fontSize: "14px" }}>
                              {errors.gender}
                            </p>
                          )}
                          <br/>
                        </div>
                      </div>
                    )}

                    {currentStep === 2 && (
                      <div style={{ textAlign: "center" }}>
                        <p style={{ color: "#1A76D8", fontWeight: "600" }}>
                          Contact Details<span style={{ color: "red" }}>*</span>
                        </p>

                        {/* Mobile Number */}
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
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
                            value={mobileNumber}
                            onChange={handleMobileNumberChange}
                            onBlur={handleBlur} // Trigger error check on blur
                            type="text"
                            id="mobileNumber"
                            placeholder="Enter your mobile number"
                            style={{
                              width: "100%",
                              height: "45px",
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "10px",
                            }}
                          />
                          {/* Show error only after the field is touched and the input is invalid */}
                          {isTouched && errors.mobileNumber && (
                            <p
                              style={{
                                color: "red",
                                fontSize: "14px",
                                textAlign: "left",
                              }}
                            >
                              {errors.mobileNumber}
                            </p>
                          )}
                        </div>

                        {/* Email ID */}
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            htmlFor="emailId"
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
                            type="text"
                            id="emailId"
                            value={emailId}
                            onChange={handleEmailIdChange}
                            onBlur={handleBlur} // Attach handleBlur for validation on focus loss
                            placeholder="Enter your email address"
                            style={{
                              width: "100%",
                              height: "45px",
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "10px",
                            }}
                          />
                          {/* Display error message only if the field is touched and there's an error */}
                          {isTouched && errors.emailId && (
                            <p
                              style={{
                                color: "red",
                                fontSize: "14px",
                                textAlign: "left",
                              }}
                            >
                              {errors.emailId}
                            </p>
                          )}
                        </div>

                        {/* Address */}
                        <div
                          style={{ marginBottom: "20px", textAlign: "left" }}
                        >
                          <label
                            style={{
                              display: "block",
                              marginBottom: "10px",
                              fontSize: "16px",
                              fontWeight: "500",
                            }}
                          >
                            Address<span style={{ color: "red" }}>*</span>
                          </label>
                          <input
                            type="text"
                            value={villageTownCity}
                            onChange={(e) => setVillageTownCity(e.target.value)}
                            onBlur={handleBlur} // Trigger blur on losing focus
                            placeholder="Enter your address"
                            style={{
                              width: "100%",
                              height: "45px",
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "10px",
                            }}
                          />
                          {isTouched && !villageTownCity && (
                            <p
                              style={{
                                color: "red",
                                fontSize: "14px",
                                textAlign: "left",
                              }}
                            >
                              Address is required.
                            </p>
                          )}
                        </div>

                        {/* State Selection */}
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
                              borderRadius: "10px",
                            }}
                          >
                            <option value="">Select State</option>
                            {stateData.map((stateObj, index) => (
                              <option key={index} value={stateObj.state}>
                                {stateObj.state}
                              </option>
                            ))}
                          </select>

                          {isTouched && !selectedState && (
                            <p
                              style={{
                                color: "red",
                                fontSize: "14px",
                                textAlign: "left",
                              }}
                            >
                              State selection is required.
                            </p>
                          )}
                        </div>

                        {/* District Selection */}
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
                                borderRadius: "10px",
                              }}
                            >
                              <option value="">Select District</option>
                              {districts.map((district, index) => (
                                <option key={index} value={district}>
                                  {district}
                                </option>
                              ))}
                            </select>

                            {isTouched && !selectedDistrict && (
                              <p
                                style={{
                                  color: "red",
                                  fontSize: "14px",
                                  textAlign: "left",
                                }}
                              >
                                District selection is required.
                              </p>
                            )}
                          </div>
                        )}

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
                            onBlur={handleBlur} // Trigger error check on blur
                            style={{
                              width: "100%",
                              height: "45px",
                              padding: "10px",
                              fontSize: "16px",
                              border: "2px solid #FCA505",
                              borderRadius: "4px",
                            }}
                          />
                          {/* Show error only after the field is touched and the input is invalid */}
                          {isTouched && errors.pincode && (
                            <p
                              style={{
                                color: "red",
                                fontSize: "14px",
                                textAlign: "left",
                              }}
                            >
                              {errors.pincode}
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
                      <button className="next-button" onClick={nextStep}>
  Next
</button>

                    ) : (
      
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
                  
                          // If all validations pass, proceed with OTP flow
                          setError("");
                          handleSendOtp();
                          setShowOtpSection(true);
                          setIsCompleted(true);
                      }}
                  >
                      Submit
                  </button>
                  
                    
                    
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
    style={{color:"#000", fontWeight:'bold'}}
    className="verify-button"
  >
    VERIFY
  </button>
</div>

                    </div>
                  ) : (
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
                          <div style={{ padding: "10px", maxWidth: "600px", margin: "auto" }}>
  {/* Name and Mobile Number */}
  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
    {[
      { label: "Name", value: userDetails?.name || "N/A" },
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

  {/* Order ID and Services */}
  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "10px" }}>
    {[
      { label: "Order ID", value: userDetails?.orderid || "N/A" },
      { label: "Services", value: filteredData?.name || "N/A" }, // Removed hardcoded value
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
      You can pay the balance amount post documents verification by our consultant:
    </p>
  </div>
</div>

                         
                          <div className="proceed-button-container">
  <button
    onClick={handleProceedToPay}
    className="proceed-button"
    style={{color:"#000", fontWeight:'bold'}}
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
{/* reviewsection */}
      <div className="review-section-dubaivisa">
      <div
        className="d-flex justify-content-between align-items-center"
        style={{ marginBottom: "2%" }}
      >
      </div>
      
      {/* Elfsight Widget Container */}
      <div
        className="elfsight-app-7549c18e-0660-4f32-9586-38be6cbceb68"
        data-elfsight-app-lazy
      ></div>
    </div>
<br/>
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
        Our Other Country Visa Services
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
        className="faq-section-visa"
        // style={{
        //   margin: "10px auto",
        //   padding: "20px",
        //   background: "#FFFFFF",
        //   borderRadius: "10px",
        //   width: "80%",
        // }}
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
            <strong>Dubai Tourist Visa for Indians - A Complete Guide 

            </strong>
          </h2>
          <br/>
          <h2 style={{fontSize:'20px', fontWeight:'bold'}}> Types of Dubai Tourist Visas for Indians
          </h2>
          <br/>
          <h3 style={{fontSize:'16px', fontWeight:'bold'}}> 30-Day Tourist Visa: </h3>
          <p style={{textAlign:'left'}}>
          The 30-Day Tourist Visa is perfect for travelers who want to explore Dubai for a short period. This visa allows you to stay in Dubai for up to 30 days, providing ample time to explore the city's iconic attractions, shopping destinations and cultural sites. This visa is ideal for a quick vacation or business trip.
          </p>
          <br/>
          <h3 style={{fontSize:'16px', fontWeight:'bold'}}> 90-Day Tourist Visa
          : </h3>
          <p style={{textAlign:'left'}}>
          The 90-Day Tourist Visa is designed for those who want to stay in Dubai for a longer duration. With this visa, you can stay up to 90 days, making it perfect for travelers planning a more extended visit. It’s an excellent option for tourists who want to enjoy Dubai at a relaxed pace or who are attending long-term events or activities.
          </p>
          <br/>
          <h3 style={{fontSize:'16px', fontWeight:'bold'}}> Multiple Entry Visa
          : </h3>
          <p style={{textAlign:'left'}}>
          The Multiple Entry Visa allows travelers to visit Dubai multiple times within a specific period (usually six months). This visa is ideal for individuals who need to travel to Dubai for business or leisure multiple times during their stay. The multiple-entry option is more flexible and convenient, as you don't need to apply for a new visa every time you travel.
          </p>
          <br/>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>
  Who is Eligible for a Dubai Tourist Visa?
</h2>
<br/>
<ul style={{ textAlign: 'left', paddingLeft: '18px', listStyleType: 'disc' }}>
  <li>
    <strong>Indian Nationals:</strong> Indian passport holders are eligible to apply for a Dubai tourist visa.
  </li>
  <li>
    <strong>Age Requirement:</strong> Applicants must be 18 years or older. Minors must travel with parents or a guardian.
  </li>
  <li>
    <strong>Valid Passport:</strong> Passport must be valid for at least six months from the date of travel.
  </li>
  <li>
    <strong>Travel Purpose:</strong> The visa is for those visiting Dubai for tourism, leisure, or short business trips.

  </li>
  <li>
    <strong>Clear Travel History:</strong> Applicants should have a clean travel history without any prior visa violations or overstay issues.
  </li>
  <li>
    <strong>Return Ticket:</strong> A return flight booking is typically required to prove the intention of returning to India after the visit.

  </li>
  <li>
    <strong>Hotel Accommodation:</strong> Proof of hotel booking or accommodation details in Dubai is necessary.

  </li>
  <li>
    <strong>No Criminal Record:</strong> A clean criminal background is essential for visa approval.

  </li>
</ul>
<br/>
<h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>
Why Choose Dubai as a Travel Destination?

</h2>
<br/>
<ul style={{ textAlign: 'left', paddingLeft: '18px', listStyleType: 'disc' }}>
  <li>
    <strong>World-Class Attractions:</strong> Dubai is home to some of the world’s most iconic landmarks, including the Burj Khalifa, Burj Al Arab and Palm Jumeirah.
  </li>
  <li>
    <strong>Shopping Paradise:</strong> Dubai boasts some of the largest malls, including the Dubai Mall, offering a vast range of international brands, luxury goods and entertainment options.

  </li>
  <li>
    <strong>Luxury and Comfort:</strong>  The city is renowned for its luxury hotels, resorts and high-end experiences, catering to those seeking a lavish lifestyle.

  </li>
  <li>
    <strong>Adventure and Thrills:</strong>  From desert safaris and dune bashing to skydiving over the Palm, Dubai offers thrilling activities for adventure seekers.


  </li>
  <li>
    <strong>Vibrant Nightlife:</strong> Dubai offers a lively nightlife scene with upscale bars, nightclubs and beach parties.

  </li>
  <li>
    <strong>Events and Festivals:</strong> The city hosts various international events, including the Dubai Shopping Festival, Dubai World Cup and global music festivals.
  </li>
 
</ul>
<br/>
<h2 style={{fontSize:'16px', fontWeight:'bold'}}>How to Apply for a Dubai Tourist Visa for Indians</h2>
          
<br/>
<h3 style={{fontSize:'16px', fontWeight:'bold'}}>Register Online
: </h3>
          <p style={{textAlign:'left'}}>
          The first step in applying for a Dubai Tourist Visa is to register online through the official visa application platform. You will need to provide basic personal information, such as your name, nationality, passport details, and travel dates.
          </p>
          <br/>
          <h3 style={{fontSize:'16px', fontWeight:'bold'}}>Upload Documents
: </h3>
          <p style={{textAlign:'left'}}>
          After registering, you’ll need to upload necessary documents like a clear scan of your passport, a recent passport-sized photograph, flight bookings, hotel reservations, and proof of financial stability (e.g., bank statements).
          </p>
          <br/>
          <h3 style={{fontSize:'16px', fontWeight:'bold'}}>Documents Verification
: </h3>
          <p style={{textAlign:'left'}}>
          Once the documents are uploaded, they will undergo a verification process. The Dubai immigration authorities will check for document authenticity and ensure that all necessary information has been provided.
          </p>
          <br/>
          <h3 style={{fontSize:'16px', fontWeight:'bold'}}>Payment
: </h3>
          <p style={{textAlign:'left'}}>
          Next, you’ll be required to make the payment for the visa application. The payment can be made online using various methods, such as debit/credit cards or bank transfers. Once the payment is confirmed, the processing of your visa application begins.
          </p>
          <br/>
          <h3 style={{fontSize:'16px', fontWeight:'bold'}}> Receive your E-Visa via E-mail

: </h3>
          <p style={{textAlign:'left'}}>
          After processing your application, the approved tourist visa will be sent to your email address in the form of an e-visa. This e-visa will contain all the details about your travel, including the visa validity, entry dates, and duration of stay. Ensure that you print a copy of your e-visa to present at immigration upon arrival in Dubai.

          </p>
          <br/>
          <h2 style={{fontSize:'18px', fontWeight:'bold'}}>Things to Know Before Traveling          </h2>
          <br/>
          <h3 style={{fontSize:'17px', fontWeight:'bold'}}> Dubai Travel Restrictions </h3>
          <br/>
          <h4 style={{fontSize:'16px', fontWeight:'bold'}}> Health Insurance
: </h4>
          <p style={{textAlign:'left'}}>
          Travel insurance covering health and medical emergencies is often recommended.
          </p>
          <br/>
          <h4 style={{fontSize:'16px', fontWeight:'bold'}}>Customs Regulations
: </h4>
          <p style={{textAlign:'left'}}>
          Adhere to Dubai’s strict customs regulations, including limits on alcohol and restricted items.
          </p>
          <br/>
          <h4 style={{fontSize:'16px', fontWeight:'bold'}}>Baggage Allowances
: </h4>
          <p style={{textAlign:'left'}}>
          Be mindful of baggage restrictions and customs allowances for duty-free goods.
          </p>
          <br/>
          <h4 style={{fontSize:'16px', fontWeight:'bold'}}>Travel Advisories
: </h4>
          <p style={{textAlign:'left'}}>
          Always check for any specific travel advisories or regional restrictions before departure.
          </p>
          <br/>
         
          <h4 style={{fontSize:'16px', fontWeight:'bold'}}> Travel Restrictions for Certain Nationalities
: </h4>
          <p style={{textAlign:'left'}}>
          Some countries may face specific entry restrictions; always check the latest updates before applying for a visa.
          </p>
          <br/>
          <h4 style={{fontSize:'16px', fontWeight:'bold'}}> Return Flight 

: </h4>
          <p style={{textAlign:'left'}}>
          Proof of a return flight booking or onward travel may be required.
          </p>
        <br/>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>
          Important Travel Tips

</h3>
<p>Here are a few essential travel tips for your visit to Dubai:
</p>
<br/>
<ul style={{ textAlign: 'left', paddingLeft: '18px', listStyleType: 'disc' }}>
  <li>
    Always carry a copy of your passport and visa.

  </li>
  <li>
  Respect local customs and laws, such as dress codes in public places.


  </li>
  <li>
  Be mindful of the weather, as Dubai can be extremely hot during summer months.


  </li>
  <li>
  Stay hydrated and carry sunscreen to protect from the sun.



  </li>
  <li>
  Familiarize yourself with Dubai’s public transport system for easy travel across the city.


  </li>
  <li>
   Ensure you have travel insurance for emergencies or unforeseen circumstances.

  </li>
 
</ul>
          <br/>
        </>
      </div>
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

export default DubaiVisa;
