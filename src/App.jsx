import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Button } from "@material-tailwind/react";
import Home from "./Components/Home";
import Gallery from "./Components/Gallery";
import NotFound from "./Components/NotFound";
import About from "./Components/About";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Router>
          <div className="flex-grow">
            <Header />
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="*" element={<NotFound />} />{" "}
            {/* Catch-all route for 404 */}
          </Routes>

          <Footer className="relative w-full bg-gray-800 text-white p-4" />
        </Router>
      </div>
    </>
  );
}

export default App;
