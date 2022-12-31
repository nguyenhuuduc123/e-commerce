import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog2" />
      </div>
      <div className="blog-content">
        <p className="date"> 1 Dec 2022</p>
        <h5 className="title">A Beautifull sunnday morning</h5>
        <p className="desc">
          Lorem ipsum dolor sit a met consectetur adipisicing elit. onsequuntur.
        </p>
        <Link className="button" to="/blog/:id">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
