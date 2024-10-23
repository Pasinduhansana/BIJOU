import React, { useState, useEffect } from "react";
import { Input, Button } from "@material-tailwind/react";
import CarouselCustomNavigation from "../Components/Carousel";
import homeimg from "../assets/wallpaper3.jpg";
import TriCards from "./TriCards";
import { motion } from "framer-motion";
import SlideCard from "./SlideCards";
import { useNavigate } from "react-router-dom";

const Home = () => {
	return (
		<>
			<div className="b-experience-component js-section b-experience-component--banner">
				<div className="b-bnr__image flex justify-center h-screen md:h-[90vh] overflow-hidden">
					<img
						src={homeimg}
						media="(min-width: 1025px)"
						alt=""
						className="self-center h-[100vh] w-[auto] object-cover top-10 mt-36 mr-0 md:mr-10 "
					/>

					<FloatingCard />
					<FloatingCard1 />
					<FloatingCard2 />
					<FloatingCard3 />
				</div>

				<Herotext />
				<hr
					style={{
						border: "1px solid gainsboro",
						width: "96%",
						opacity: 0.3,
						margin: "auto",
					}}
				/>
				{/* Sepetator */}

				<CarouselCustomNavigation />

				<hr
					style={{
						border: "1px solid gainsboro",
						width: "96%",
						opacity: 0.3,
						margin: "auto",
					}}
				/>
				<SlideCard />
				<hr
					style={{
						border: "1px solid gainsboro",
						width: "96%",
						opacity: 0.3,
						margin: "auto",
					}}
				/>
				<TriCards />
			</div>
		</>
	);
};

function Herotext() {
	const navigate = useNavigate();

	const handleButtonClick = () => {
		navigate("/gallery");
	};

	return (
		<div className="flex flex-col content-center text-center text-gray-900 gap-2 my-10">
			<h1 className="text-[35px] font-semibold">The Gift of Graff</h1>
			<p className="text-[14px] font-normal text-gray-500">
				A knowing glance, a touch, a whisper of diamonds and gemstones – the
				true luxury of Graff lies in the feelings it evokes. Make a wish and
				turn dreams into reality.
			</p>

			<Button
				variant="outlined"
				className="w-[250px] h-[40px] rounded-0 self-center mt-4 text-[#2f2f2f] border-[#2f2f2f] hover:bg-gradient-to-r hover:from-[#f6ae29] hover:to-[#f68529] hover:text-[#ffffff] hover:border-white hover:shadow-lg transition-all duration-300 ease-in-out focus:shadow-none"
				onClick={handleButtonClick}
			>
				Discover Gifts
			</Button>
		</div>
	);
}

function FloatingCard() {
	return (
		<div className="absolute animate-float1 flex flex-col content-center text-center w-[250px] md:hidden lg:flex lg:w-[500px] md:w-[350px] left-4 lg:left-20 md:left-10 lg:mt-0 md:mt-2 top-15 lg:top-40 md:top-40 text-gray-900 gap-2 my-5 shadow-[0_2px_16px_rgba(0,0,0,0.09)] rounded-[20px] p-[15px] backdrop-blur-[20px] bg-[#ffffff66] hover:scale-110 transition-all duration-500 ease-in-out select-none cursor-pointer">
			<h1 className="text-[16px] md:text-[18px] font-semibold text-gray-800">
				Sustainable Elegance
			</h1>
			<p className="text-[12px] md:text-[13px] font-normal text-gray-800">
				We create lasting beauty with a commitment to ethical sourcing and
				sustainable practices, ensuring each piece reflects both elegance and
				responsibility.
			</p>
		</div>
	);
}

function FloatingCard1() {
	return (
		<div className="absolute animate-float2 flex flex-col content-center text-center w-[250px] lg:w-[300px] md:w-[280px] right-8 lg:right-32 md:right-8 top-96 opacity-0 md:opacity-100 lg:top-[12rem] md:top-[18rem] text-gray-900 gap-2 my-5 shadow-[0_2px_16px_rgba(0,0,0,0.09)] rounded-[20px] p-[15px] backdrop-blur-[20px] bg-[#ffffff66] hover:scale-110 transition-all duration-500 ease-in-out select-none cursor-pointer">
			<h1 className="text-[16px] md:text-[18px] font-semibold text-gray-800">
				Exquisite Gemstones
			</h1>
			<p className="text-[12px] md:text-[13px] font-normal text-gray-700">
				Our collection features only the finest gemstones, sourced from around
				the world
			</p>
		</div>
	);
}

function FloatingCard2() {
	return (
		<div className="absolute animate-float3 flex flex-col content-center text-center w-[250px] lg:w-[300px] md:w-[400px] right-[2rem] lg:right-48 md:right-20 mt-[50vh] md:mt-[60vh] lg:top-36 md:top-44 text-gray-900 gap-2 my-5 shadow-[0_2px_16px_rgba(0,0,0,0.09)] rounded-[20px] p-[12px] backdrop-blur-[20px] bg-[#ffffff66] hover:scale-110 transition-all duration-500 ease-in-out select-none cursor-pointer">
			<h1 className="text-[16px] md:text-[18px] font-semibold text-gray-800">
				Timeless Craftsmanship
			</h1>
			<p className="text-[12px] md:text-[13px] font-normal text-gray-800">
				Our expert artisans meticulously craft each item, blending tradition
				with modern design for a perfect balance of beauty and precision.
			</p>
		</div>
	);
}

function FloatingCard3() {
	return (
		<div className="absolute animate-float4 flex flex-col content-center text-center w-[250px] lg:w-[300px] md:w-[270px] left-8 lg:left-[8rem] md:left-[4rem] mt-[82vh] md:mt-[0vh] lg:top-[70vh] md:top-[26rem] text-gray-900 gap-2 my-5 shadow-[0_2px_16px_rgba(0,0,0,0.09)] rounded-[20px] p-[12px] backdrop-blur-[20px] bg-[#ffffff66] hover:scale-110 transition-all duration-500 ease-in-out select-none cursor-pointer">
			<h1 className="text-[16px] md:text-[18px] font-semibold text-gray-800">
				Bijou Offers
			</h1>

			<ul className="text-[11px] md:text-[12px] text-left list-disc pl-5 text-gray-700">
				<li>Exclusive Collections</li>
				<li>Lifetime Warranty</li>
				<li>Certificate of Authenticity</li>
				<li>Virtual Try-On</li>
				<li>Jewelry Care Guides</li>
			</ul>
		</div>
	);
}

export default Home;
