import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function NotFound() {
  return (
    <div
      className="error"
      style={{ backgroundColor: "#030005", height: "90vh" }}
    >
      <Helmet>
        <title>Not-Found</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div style={{ textAlign: "center" }}>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <button>
          <Link to="/" style={{ color: "#ff005a", textDecoration: "none" }}>
            Go to Home{" "}
          </Link>
        </button>
      </div>
    </div>
  );
}

export default NotFound;
