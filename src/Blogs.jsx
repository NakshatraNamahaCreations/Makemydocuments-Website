import React, { useState } from "react";
import { Helmet } from "react-helmet";

const Blogs = () => {

   
  return (
    <>
  <Helmet>
  <title> Make My Documents Blog | Expert Tips on Document Services </title>
<meta name="description" content="Explore our blog for expert tips and insights on document services like PAN cards, passports, visas, MSME certificates, and more. Stay updated with the latest news and updates."/>
<meta name="keywords" content="Make My Documents blog, document services blog, PAN card tips, passport application blog, visa tips, MSME certificate blog, document application tips, legal documents, document advice, latest updates on document services, how to apply for PAN card, how to apply for passport, document-related news"/>
<link rel="canonical" href="https://makemydocuments.com/blogs"/>
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

  </Helmet>

  <div>
  
  </div>
    </>
  );
};

export default Blogs;



// import React, { useState } from "react";
// import { Helmet } from "react-helmet";

// const Blogs = () => {
//   const [blogs, setBlogs] = useState([
//     {
//       title: "How to Apply for a PAN Card Easily",
//       summary: "Step-by-step guide to apply PAN card online.",
//       content: "Learn how to apply for a PAN card in just 10 minutes...",
//       image: "https://via.placeholder.com/300x180",
//     },
//     {
//       title: "Passport Documents Checklist for 2025",
//       summary: "Make sure you have all the required documents.",
//       content: "This guide helps you prepare for passport application...",
//       image: "https://via.placeholder.com/300x180",
//     },
//   ]);

//   const [formData, setFormData] = useState({
//     title: "",
//     summary: "",
//     content: "",
//     image: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formData.title && formData.summary && formData.content) {
//       setBlogs([formData, ...blogs]);
//       setFormData({ title: "", summary: "", content: "", image: "" });
//     }
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Make My Documents Blog | Expert Tips on Document Services</title>
//         <meta
//           name="description"
//           content="Explore our blog for expert tips and insights on document services like PAN cards, passports, visas, MSME certificates, and more."
//         />
//         <link rel="canonical" href="https://makemydocuments.com/blogs" />
//       </Helmet>

//       <div style={{ maxWidth: "900px", margin: "0 auto", padding: "30px 20px" }}>
//         <h1 style={{ textAlign: "center", marginTop: "10%" }}>
//           Make My Documents Blog
//         </h1>

//         {/* Blog Form */}
//         <div
//           style={{
//             background: "#f9f9f9",
//             padding: "20px",
//             borderRadius: "8px",
//             marginBottom: "40px",
//             boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
//           }}
//         >
//           <h2 style={{ marginBottom: "15px" }}>Submit a New Blog</h2>
//           <form onSubmit={handleSubmit}>
//             <div style={{ marginBottom: "15px" }}>
//               <label>Title</label>
//               <input
//                 type="text"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleChange}
//                 required
//                 style={{
//                   width: "100%",
//                   padding: "10px",
//                   marginTop: "5px",
//                   border: "1px solid #ccc",
//                   borderRadius: "4px",
//                 }}
//               />
//             </div>

//             <div style={{ marginBottom: "15px" }}>
//               <label>Summary</label>
//               <input
//                 type="text"
//                 name="summary"
//                 value={formData.summary}
//                 onChange={handleChange}
//                 required
//                 style={{
//                   width: "100%",
//                   padding: "10px",
//                   marginTop: "5px",
//                   border: "1px solid #ccc",
//                   borderRadius: "4px",
//                 }}
//               />
//             </div>

//             <div style={{ marginBottom: "15px" }}>
//               <label>Image URL</label>
//               <input
//                 type="text"
//                 name="image"
//                 value={formData.image}
//                 onChange={handleChange}
//                 style={{
//                   width: "100%",
//                   padding: "10px",
//                   marginTop: "5px",
//                   border: "1px solid #ccc",
//                   borderRadius: "4px",
//                 }}
//               />
//             </div>

//             <div style={{ marginBottom: "15px" }}>
//               <label>Content</label>
//               <textarea
//                 name="content"
//                 value={formData.content}
//                 onChange={handleChange}
//                 rows="4"
//                 required
//                 style={{
//                   width: "100%",
//                   padding: "10px",
//                   marginTop: "5px",
//                   border: "1px solid #ccc",
//                   borderRadius: "4px",
//                 }}
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               style={{
//                 backgroundColor: "#007bff",
//                 color: "#fff",
//                 padding: "10px 20px",
//                 border: "none",
//                 borderRadius: "4px",
//                 cursor: "pointer",
//               }}
//             >
//               Submit Blog
//             </button>
//           </form>
//         </div>

//         {/* Blog Cards */}
//         <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
//           {blogs.map((blog, index) => (
//             <div
//               key={index}
//               style={{
//                 width: "100%",
//                 maxWidth: "420px",
//                 backgroundColor: "#fff",
//                 borderRadius: "8px",
//                 boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
//                 overflow: "hidden",
//                 flex: "1 1 45%",
//               }}
//             >
//               {blog.image && (
//                 <img
//                   src={blog.image}
//                   alt={blog.title}
//                   style={{ width: "100%", height: "200px", objectFit: "cover" }}
//                 />
//               )}
//               <div style={{ padding: "15px" }}>
//                 <h3 style={{ margin: "0 0 10px" }}>{blog.title}</h3>
//                 <p style={{ color: "#666", marginBottom: "10px" }}>
//                   {blog.summary}
//                 </p>
//                 <p style={{ fontSize: "14px", color: "#333" }}>{blog.content}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Blogs;





