import React from "react";
import { Button } from "@material-tailwind/react";

//Import Images - White mode
import img1 from "../assets/Rings/img1.jpg";
import img2 from "../assets/Rings/img2.jpg";
import img3 from "../assets/Rings/img3.jpg";
import img4 from "../assets/Rings/img4.jpg";
import img5 from "../assets/Rings/img5.jpg";
import img6 from "../assets/Rings/img6.jpg";
import img7 from "../assets/Rings/img7.jpg";
import img8 from "../assets/Rings/img8.jpg";
import img9 from "../assets/Rings/img9.jpg";
import img10 from "../assets/Rings/img10.jpg";
import img11 from "../assets/Rings/img11.jpg";

const DefaultGallery = () => {
  const data = [
    {
      imageLink: img1,
      title: "Elegant Gold Ring",
      description: "A beautiful gold ring with intricate designs.",
    },
    {
      imageLink: img2,
      title: "Diamond Stud Earrings",
      description: "Classic diamond stud earrings for any occasion.",
    },
    {
      imageLink: img3,
      title: "Sapphire Pendant Necklace",
      description: "A stunning sapphire pendant that captures the light.",
    },
    {
      imageLink: img4,
      title: "Pearl Bracelet",
      description: "A timeless pearl bracelet, perfect for elegance.",
    },
    {
      imageLink: img5,
      title: "Emerald Cocktail Ring",
      description: "A bold emerald ring that makes a statement.",
    },
    {
      imageLink: img6,
      title: "Vintage Brooch",
      description: "A vintage brooch with unique artistry.",
    },
    {
      imageLink: img7,
      title: "Luxury Watch",
      description: "A luxury watch combining style and precision.",
    },
    {
      imageLink: img8,
      title: "Charm Bracelet",
      description: "A charm bracelet to showcase your unique style.",
    },
    {
      imageLink: img9,
      title: "Custom Engagement Ring",
      description: "A custom engagement ring designed just for you.",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 my-10 mx-4 mb-22">
      {data.map(({ imageLink, title, description }, index) => (
        <div key={index}>
          <div className="flex flex-col gap-2 justify-center text-center  hover:shadow-[0_2px_16px_rgba(0,0,0,0.12)] rounded-[10px] pb-6 hover:scale-[1.01] transition-all duration-500 ease-in-out select-none">
            <div className="h-[450px] min-h-[400ox] overflow-hidden rounded-[10px] m-2  shadow-[0_2px_16px_rgba(0,0,0,0.19)]">
              <img src={imageLink} alt="Crafting Image" />
            </div>
            <h1 className="text-gray-800 text-[24px] font-semibold">{title}</h1>
            <p className="text-gray-700 text-[14px]  mx-8">{description}.</p>

            <div className="flex flex-row gap-5 self-center">
              <Button
                variant="outlined"
                className="w-[150px] h-[40px] rounded-0 self-center mt-4 text-[#2f2f2f] border-[#2f2f2f] hover:bg-gradient-to-r hover:from-[#f6ae29] hover:to-[#f68529] hover:text-[#ffffff] hover:border-white hover:shadow-lg transition-all duration-300 ease-in-out focus:shadow-none uppercase"
              >
                purchase
              </Button>
              <Button
                variant="outlined"
                className="w-[150px] h-[40px] rounded-0 self-center mt-4 text-[#2f2f2f] border-[#2f2f2f] hover:bg-gradient-to-r hover:from-[#f6ae29] hover:to-[#f68529] hover:text-[#ffffff] hover:border-white hover:shadow-lg transition-all duration-300 ease-in-out focus:shadow-none uppercase"
              >
                Add Cart
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DefaultGallery;
