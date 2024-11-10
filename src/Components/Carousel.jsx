import { Carousel } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

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
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import white_img1 from "../assets/Rings/White/img1.jpg";
import white_img2 from "../assets/Rings/White/img2.jpg";
import white_img3 from "../assets/Rings/White/img3.jpg";
import white_img4 from "../assets/Rings/White/img4.jpg";
import white_img5 from "../assets/Rings/White/img5.jpg";
import white_img6 from "../assets/Rings/White/img6.jpg";
import white_img7 from "../assets/Rings/White/img7.jpg";
import white_img8 from "../assets/Rings/White/img8.jpg";
import white_img9 from "../assets/Rings/White/img9.jpg";
import white_img10 from "../assets/Rings/White/img10.jpg";
import white_img11 from "../assets/Rings/White/img11.jpg";

const cardData = [
  {
    text: "Wild Flower Diamond Drop Necklace",
    imageUrl: white_img1,
    text1: "Wild Flower Diamond Drop Necklace",
    imageUrl1: white_img2,
    text2: "Wild Flower Diamond Drop Necklace",
    imageUrl2: white_img3,
  },
  {
    text: "Wild Flower Diamond Drop Necklace",
    imageUrl: white_img4,
    text1: "Wild Flower Diamond Drop Necklace",
    imageUrl1: white_img5,
    text2: "Wild Flower Diamond Drop Necklace",
    imageUrl2: white_img6,
  },
  {
    text: "Wild Flower Diamond Drop Necklace",
    imageUrl: white_img11,
    text1: "Wild Flower Diamond Drop Necklace",
    imageUrl1: white_img8,
    text2: "Wild Flower Diamond Drop Necklace",
    imageUrl2: white_img9,
  },
];

const CarouselCustomNavigation = () => {
  const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.1 });
  const black_card_colour = "#9a9a9a46";

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/gallery");
  };

  return (
    <motion.div
      className="flex p-10 gap-3 items-center"
      ref={ref1}
      initial={{ opacity: 0, y: -150 }} // Start off-screen
      animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 150 }} // Animate based on inView1
      transition={{ duration: 0.6 }}
    >
      <Carousel
        className="rounded-xl"
        autoplay="True"
        autoplayDelay="9000"
        loop="True"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-gray-700" : "w-4 bg-gray-400"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {cardData.map((card, index) => (
          <div
            key={index}
            className="relative h-[350px] w-full flex flex-row gap-2 bottom-10 mt-10 overflow-hidden"
          >
            <div className="card1 h-[350px]  rounded-[20px] overflow-hidden ">
              <img
                src={card.imageUrl}
                alt={`image ${index + 1}`}
                className="h-full w-full object-cover"
              />
              <div
                className="relative flex-col bottom-[50px]  left-0 right-0 backdrop-blur-[10px] h-10 transition-all mx-3 rounded-[2rem] group-hover:backdrop-blur-none items-center content-center"
                style={{ backgroundColor: black_card_colour }}
              >
                <p className="text-[14px] font-[500] text-gray-900 px-5 transition-all font-poppins group-hover:text-white text-wrap">
                  {card.text}
                </p>
              </div>
            </div>

            <div className="card2 h-[350px]  rounded-[20px] overflow-hidden">
              <img
                src={card.imageUrl1}
                alt={`image ${index + 1}`}
                className="h-full w-full object-cover"
              />
              <div
                className="relative flex-col bottom-[50px]  left-0 right-0 backdrop-blur-[10px] h-10 transition-all mx-3 rounded-[2rem] group-hover:backdrop-blur-none items-center content-center"
                style={{ backgroundColor: black_card_colour }}
              >
                <p className="text-[14px] font-[500] text-gray-900 px-5 transition-all font-poppins group-hover:text-white text-wrap">
                  {card.text1}
                </p>
              </div>
            </div>

            <div className="card3 h-[350px]  rounded-[20px] overflow-hidden">
              <img
                src={card.imageUrl2}
                alt={`image ${index + 1}`}
                className="h-full w-full object-cover"
              />
              <div
                className="relative flex-col bottom-[50px]  left-0 right-0 backdrop-blur-[10px] h-10 transition-all mx-3 rounded-[2rem] group-hover:backdrop-blur-none items-center content-center"
                style={{ backgroundColor: black_card_colour }}
              >
                <p className="text-[14px] font-[500] text-gray-900 px-5 transition-all font-poppins group-hover:text-white text-wrap">
                  {card.text2}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      <div className="text-card flex flex-col content-center text-center text-gray-900 gap-2 my-5 max-w-96 ">
        <h1 className="text-[35px] font-semibold">Exquisite Treasures</h1>
        <p className="text-[14px] font-normal text-gray-500 px-5">
          For over half a century, the House of Graff has remained unwavering in
          its commitment to designing and crafting magnificent pieces of
          timeless jewellery.
        </p>

        <Button
          variant="outlined"
          className="w-[250px] h-[40px] rounded-0 self-center mt-4 text-[#2f2f2f] border-[#2f2f2f] hover:bg-gradient-to-r hover:from-[#f6ae29] hover:to-[#f68529] hover:text-[#ffffff] hover:border-white hover:shadow-lg transition-all duration-300 ease-in-out focus:shadow-none"
          onClick={handleButtonClick}
        >
          Shop Now
        </Button>
      </div>
    </motion.div>
  );
};

export default CarouselCustomNavigation;
