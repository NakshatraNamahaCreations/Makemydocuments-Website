import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import axios from "axios";
import "./blogs.css"

const Blogs = () => {
  const [visibleCount, setVisibleCount] = useState(6); 
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("https://api.makemydocuments.com/api/blogs");
      setBlogs(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setLoading(false);
    }
  };

  const showMore = () => {
    setVisibleCount((prev) => prev + 6); // load 6 more each time
  };

  return (
    <>
      <Helmet>
        <title>Make My Documents Blog | Expert Tips on Document Services</title>
        <meta
          name="description"
          content="Explore our blog for expert tips and insights on document services like PAN cards, passports, visas, MSME certificates, and more."
        />
        <link rel="canonical" href="https://makemydocuments.com/blogs" />

        <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Make My Documents Blog",
      "description":
        "Explore expert advice on documents like PAN cards, passports, visas, MSME certifications, and more.",
      "url": "https://makemydocuments.com/blogs",
      "blogPost": blogs.slice(0, visibleCount).map((blog) => ({
        "@type": "BlogPosting",
        "headline": blog.metaTitle || blog.title,
        "description": blog.metaDescription || "",
        "url": `https://makemydocuments.com/blogs/${blog.title}`,
        "image": `https://api.makemydocuments.com/uploads/blogs/${blog.image}`,
        "author": {
          "@type": "Person",
          "name": "Make My Documents",
        },
        "publisher": {
          "@type": "Organization",
          "name": "Make My Documents",
          "logo": {
            "@type": "ImageObject",
            "url": "https://makemydocuments.com/static/media/logo.31258f6da87268f7ee2d04f6f96e256d.svg",
          },
        },
        "datePublished": new Date(blog.createdAt).toISOString(),
        "dateModified": new Date(blog.createdAt).toISOString(),
      })),
    })}
  </script>

  <script type="application/ld+json">
{`
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://makemydocuments.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blogs",
        "item": "https://makemydocuments.com/blogs"
      }
    ]
  }
`}
</script>

      </Helmet>
      <div style={{ backgroundColor: "#f4f4f4", padding: "15px 25px", marginTop:'8%' }} className="breadcrumb-title">
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb mb-0">
      <li className="breadcrumb-item" style={{fontWeight:'bold'}}>
        <Link to="/" style={{ color: "#007bff", textDecoration: "none" }}>Home</Link>
      </li>
      <li className="breadcrumb-item active" aria-current="page" style={{fontWeight:'bold'}}>
        Blogs
      </li>
    </ol>
  </nav>
</div>

      <div
         className="blog-container"
      >
        <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
          Blogs
        </h1>

        {/* Blog Cards Grid */}
        {loading ? (
          <p style={{ textAlign: "center" }}>Loading blogs...</p>
        ) : blogs.length === 0 ? (
          <p style={{ textAlign: "center" }}>No blogs found.</p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "20px",
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
  <Link to={`/blogs/${blog.title}`}>
    <img
      className="blog-card-image"
      src={`https://api.makemydocuments.com/uploads/blogs/${blog.image}`}
      alt={blog.title}
    />
  </Link>
)}

                <div style={{ padding: "15px" }}>
                <h3 className="blog-title">{blog.title.replace(/-/g, " ")}</h3>

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
                  <Link to={`/blogs/${blog.title}`}
                   
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
        )}

        {/* Show More Button */}
        {visibleCount < blogs.length && (
          <div style={{ textAlign: "center", marginTop: "30px" }}>
            <button
              onClick={showMore}
              style={{
                padding: "10px 20px",
                backgroundColor: "#fca505",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Blogs;
