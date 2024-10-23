import React from "react";
import { Button } from "@material-tailwind/react";
import img1 from "../assets/Bridel.jpg";
import img2 from "../assets/Bridla.jpg";
import img3 from "../assets/Crafting.jpg";
import img4 from "../assets/bookingimg.jpg";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// JSON format data for card content
const cardData = [
	{
		image: img3,
		title: "Crafted For Eternity",
		description:
			"Unveil the artistry behind the creation of a high jewelry masterpiece.",
		buttonText: "Discover",
	},
	{
		image: img4,
		title: "Book an Appointment",
		description:
			"Explore our exquisite jewelry designs at your closest Graff boutique.",
		buttonText: "Discover",
	},
	{
		image: img1,
		title: "Crafted For Eternity",
		description:
			"At Bijou, it all starts with the diamond – experience the Bijou difference.",
		buttonText: "Discover",
	},
];

const TriCards = () => {
	const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.1 });
	const navigate = useNavigate();

	const handleButtonClick = () => {
		navigate("/gallery");
	};

	// Carousel settings
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false, // Hide arrows for mobile
		swipe: true, // Enable swipe for mobile devices
	};

	return (
		<>
			<div className="flex flex-col mt-10">
				{/* Title Section */}
				<motion.div
					className="flex flex-col text-gray-800 items-center lg:items-center mb-6 px-8 lg:px-0 sm:items-center"
					ref={ref1}
					initial={{
						opacity: 0,
						y: window.innerWidth >= 1024 ? 150 : 0, // top-down for desktop, bottom-up for mobile
					}}
					animate={
						inView1
							? { opacity: 1, y: 0 }
							: {
									opacity: window.innerWidth >= 1024 ? 0 : 1,
									y: window.innerWidth >= 1024 ? 150 : 0,
							  }
					}
					transition={{ duration: 0.6, delay: 0 }}
				>
					<h1 className="text-gray-800 text-[32px] font-semibold uppercase">
						The House of Bijou
					</h1>
					<p className="text-gray-600 text-[16px] text-center mt-2">Featured</p>
				</motion.div>

				{/* Desktop view */}
				<div className="hidden lg:flex flex-row gap-10 text-gray-900 p-8">
					{/* Card components using JSON */}
					{cardData.map((card, index) => (
						<motion.div
							key={index}
							className="flex flex-col gap-2 justify-center text-center hover:shadow-[0_2px_16px_rgba(0,0,0,0.12)] rounded-[10px] pb-6 hover:scale-[1.01] transition-all duration-500 ease-in-out select-none"
							ref={ref1}
							initial={{ opacity: 0, y: -150 }}
							animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 150 }}
							transition={{ duration: 0.6, delay: index * 0.4 }}
						>
							<div className="h-[300px] overflow-hidden rounded-[10px] m-2 shadow-[0_2px_16px_rgba(0,0,0,0.19)]">
								<img src={card.image} alt={card.title} />
							</div>
							<h1 className="text-gray-800 text-[24px] font-semibold">
								{card.title}
							</h1>
							<p className="text-gray-700 text-[14px] mx-8">
								{card.description}
							</p>
							<Button
								variant="outlined"
								className="w-[250px] h-[40px] rounded-0 self-center mt-4 text-[#2f2f2f] border-[#2f2f2f] hover:bg-gradient-to-r hover:from-[#f6ae29] hover:to-[#f68529] hover:text-[#ffffff] hover:border-white hover:shadow-lg transition-all duration-300 ease-in-out focus:shadow-none uppercase"
								onClick={handleButtonClick}
							>
								{card.buttonText}
							</Button>
						</motion.div>
					))}
				</div>

				{/* Mobile view */}
				<div className="lg:hidden p-8">
					<Slider {...settings}>
						{cardData.map((card, index) => (
							<div key={index} className="text-center">
								<div className="h-[auto] overflow-hidden rounded-[10px] m-2 shadow-[0_2px_16px_rgba(0,0,0,0.19)]">
									<img src={card.image} alt={card.title} />
								</div>
								<h1 className="text-gray-800 text-[24px] font-semibold">
									{card.title}
								</h1>
								<p className="text-gray-700 text-[14px] mx-8">
									{card.description}
								</p>
								<Button
									variant="outlined"
									className="w-[250px] h-[40px] rounded-0 self-center mt-4 text-[#2f2f2f] border-[#2f2f2f] hover:bg-gradient-to-r hover:from-[#f6ae29] hover:to-[#f68529] hover:text-[#ffffff] hover:border-white hover:shadow-lg transition-all duration-300 ease-in-out focus:shadow-none uppercase"
									onClick={handleButtonClick}
								>
									{card.buttonText}
								</Button>
							</div>
						))}
					</Slider>
				</div>
			</div>
		</>
	);
};

export default TriCards;
