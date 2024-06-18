import React from "react";

import Header from "../../Header/Header";
import "./blog.css";

function Blog() {
  {
    document.body.style.margin = 0;
  }

  return (
    <>
      <div className="blog-page">
        <div class="header">
          <Header />
        </div>

        <main className="blog-container">
          <div className="blog-description">
            Judith's Blog Page is Coming Soon :)
          </div>
        </main>
      </div>
    </>
  );
}

export default Blog;
