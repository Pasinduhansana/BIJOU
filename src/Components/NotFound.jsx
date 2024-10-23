import { color } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Page Not Found</h1>
      <p style={styles.paragraph}>
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" style={styles.link}>
        Go back to the homepage
      </Link>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    textAlign: "center",
    color: "#2d2d2d",
  },
  heading: {
    fontSize: "3rem",
    marginBottom: "1rem",
  },
  paragraph: {
    fontSize: "1.2rem",
    marginBottom: "1.5rem",
  },
  link: {
    fontSize: "1.1rem",
    color: "#3498db",
    textDecoration: "none",
  },
};

export default NotFound;
