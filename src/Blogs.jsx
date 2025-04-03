import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import axios from "axios";

const Blogs = () => {
  const [visibleCount, setVisibleCount] = useState(6); // initially show 6
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
      </Helmet>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "30px 20px",
          marginTop: "8%",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
          Make My Documents Blog
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
                key={blog._id}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                  overflow: "hidden",
                }}
              >
                {blog.image && (
                  <img
                    src={`https://api.makemydocuments.com/uploads/blogs/${blog.image}`}
                    alt={blog.title}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                )}
                <div style={{ padding: "15px" }}>
                  <h3 style={{ marginBottom: "10px" }}>{blog.title}</h3>
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
                    to={`/blogs/${blog._id}`}
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
