import React from "react";
import { Button } from "@material-tailwind/react";
import img1 from "../assets/jewelerywithgirl.jpg";
import img2 from "../assets/Bridla.jpg";
import img3 from "../assets/Crafting.jpg";
import img4 from "../assets/bookingimg.jpg";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const TriCards = () => {
	const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.1 });
	const navigate = useNavigate();

	const handleButtonClick = () => {
		navigate("/gallery");
	};
	return (
		<>
			<div className="flex flex-col mt-10">
				<motion.div
					className="flex flex-col text-gray-800"
					ref={ref1}
					initial={{ opacity: 0, y: -150 }} // Start off-screen
					animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 150 }} // Animate based on inView1
					transition={{ duration: 0.6, delay: 0 }}
				>
					<h1 className="text-gray-800 text-[32px] font-semibold uppercase">
						The House of Bijou
					</h1>
					<p className="text-gray-600 text-[16px]  mx-8">Featured</p>
				</motion.div>

				<div className="flex flex-row gap-10 text-gray-900 p-8 ">
					<motion.div
						className="flex flex-col gap-2 justify-center text-center  hover:shadow-[0_2px_16px_rgba(0,0,0,0.12)] rounded-[10px] pb-6 hover:scale-[1.01] transition-all duration-500 ease-in-out select-none"
						ref={ref1}
						initial={{ opacity: 0, y: -150 }} // Start off-screen
						animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 150 }} // Animate based on inView1
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<div className="h-[300px] overflow-hidden rounded-[10px] m-2  shadow-[0_2px_16px_rgba(0,0,0,0.19)]">
							<img src={img3} alt="Crafting Image" />
						</div>
						<h1 className="text-gray-800 text-[24px] font-semibold">
							Crafted For Eternity
						</h1>
						<p className="text-gray-700 text-[14px]  mx-8">
							Unveil the artistry behind the creation of a high jewelry
							masterpiece.
						</p>
						<Button
							variant="outlined"
							className="w-[250px] h-[40px] rounded-0 self-center mt-4 text-[#2f2f2f] border-[#2f2f2f] hover:bg-gradient-to-r hover:from-[#f6ae29] hover:to-[#f68529] hover:text-[#ffffff] hover:border-white hover:shadow-lg transition-all duration-300 ease-in-out focus:shadow-none uppercase"
							onClick={handleButtonClick}
						>
							Discover
						</Button>
					</motion.div>

					<motion.div
						className="flex flex-col gap-2 justify-center text-center  hover:shadow-[0_2px_16px_rgba(0,0,0,0.12)] rounded-[10px] pb-6 hover:scale-[1.01] transition-all duration-500 ease-in-out select-none"
						ref={ref1}
						initial={{ opacity: 0, y: -150 }} // Start off-screen
						animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 150 }} // Animate based on inView1
						transition={{ duration: 0.6, delay: 0.6 }}
					>
						<div className="h-[300px] overflow-hidden rounded-[10px] m-2  shadow-[0_2px_16px_rgba(0,0,0,0.19)]">
							<img src={img4} alt="Booking Image" />
						</div>
						<h1 className="text-gray-800 text-[24px] font-semibold">
							Book an Appointment
						</h1>
						<p className="text-gray-700 text-[14px]  mx-8">
							Explore our exquisite jewelry designs at your closest Graff
							boutique
						</p>
						<Button
							variant="outlined"
							className="w-[250px] h-[40px] rounded-0 self-center mt-4 text-[#2f2f2f] border-[#2f2f2f] hover:bg-gradient-to-r hover:from-[#f6ae29] hover:to-[#f68529] hover:text-[#ffffff] hover:border-white hover:shadow-lg transition-all duration-300 ease-in-out focus:shadow-none uppercase"
							onClick={handleButtonClick}
						>
							Discover
						</Button>
					</motion.div>

					<motion.div
						className="flex flex-col gap-2 justify-center text-center  hover:shadow-[0_2px_16px_rgba(0,0,0,0.12)] rounded-[10px] pb-6 hover:scale-[1.01] transition-all duration-500 ease-in-out select-none"
						ref={ref1}
						initial={{ opacity: 0, y: -150 }} // Start off-screen
						animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 150 }} // Animate based on inView1
						transition={{ duration: 0.6, delay: 1 }}
					>
						<div className="h-[300px] overflow-hidden rounded-[10px] m-2  shadow-[0_2px_16px_rgba(0,0,0,0.19)]">
							<img
								src={img1}
								alt="Bridel Image"
								className="object-scale-down"
							/>
						</div>
						<h1 className="text-gray-800 text-[24px] font-semibold">
							Unique Solitaires
						</h1>
						<p className="text-gray-700 text-[14px] mx-8">
							Experience the allure of exceptional high jewelry creations, each
							piece mesmerizing with unmatched elegance and timeless beauty.
						</p>
						<Button
							variant="outlined"
							className="w-[250px] h-[40px] rounded-0 self-center mt-4 text-[#2f2f2f] border-[#2f2f2f] hover:bg-gradient-to-r hover:from-[#f6ae29] hover:to-[#f68529] hover:text-[#ffffff] hover:border-white hover:shadow-lg transition-all duration-300 ease-in-out focus:shadow-none uppercase"
							onClick={handleButtonClick}
						>
							Discover
						</Button>
					</motion.div>
				</div>
			</div>
		</>
	);
};
export default TriCards;
