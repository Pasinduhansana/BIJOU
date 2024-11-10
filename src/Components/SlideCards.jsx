import React, { useEffect } from "react";
import { Button } from "@material-tailwind/react";
import img1 from "../assets/promise1.jpg";
import img2 from "../assets/Couple6.png";
import img3 from "../assets/Couple.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

const SlideCard = () => {
	// Ref and inView for each card
	const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
	const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
	const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });

	const navigate = useNavigate();

	const handleButtonClick = () => {
		navigate("/gallery");
	};
	const handleButtonClick1 = () => {
		navigate("/about");
	};

	return (
		<>
			{/* Card 1 */}
			<motion.div
				id="card1" // Assign a unique ID for each card
				className="flex flex-row items-center"
				ref={ref1}
				initial={{ opacity: 0, y: -150 }} // Start off-screen
				animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 150 }} // Animate based on inView1
				transition={{ duration: 0.6 }}
			>
				<motion.div className="m-10 h-[500px] w-full overflow-hidden rounded-[10px] flex justify-center items-center">
					<img
						src={img1}
						alt="Card Image"
						className="object-cover w-[700px] top-10 mt-36"
					/>
				</motion.div>
				<motion.div className="text-card flex flex-col justify-start text-left text-gray-900 gap-2 my-4 max-w-[500px] select-none px-5">
					<h1 className="text-[35px] font-semibold">The Promise Setting</h1>
					<p className="text-[14px] font-normal text-gray-500">
						Every Bijou engagement ring is a stunning work of art, meticulously
						crafted and elegantly designed to showcase the unique beauty of its
						diamond.
					</p>

					<Button
						variant="outlined"
						className="w-[250px] h-[40px] rounded-0 self-start mt-8 text-[#2f2f2f] border-[#2f2f2f] hover:bg-gradient-to-r hover:from-[#f6ae29] hover:to-[#f68529] hover:text-[#ffffff] hover:border-white hover:shadow-lg transition-all duration-300 ease-in-out focus:shadow-none"
						onClick={handleButtonClick}
					>
						Shop Now
					</Button>
				</motion.div>
			</motion.div>

			<hr
				style={{
					border: "1px solid gainsboro",
					width: "96%",
					opacity: 0.3,
					margin: "auto",
				}}
			/>

			{/* Card 2 */}
			<motion.div
				id="card2"
				className="flex flex-row items-center"
				ref={ref2}
				initial={{ opacity: 0, y: -150 }} // Start off-screen
				animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 150 }} // Animate based on inView2
				transition={{ duration: 0.6 }}
			>
				<motion.div className="text-card flex flex-col content-center text-right text-gray-900 gap-2 my-4 max-w-[500px] select-none px-5">
					<h1 className="text-[35px] font-semibold">Diamond Mastery</h1>
					<p className="text-[14px] font-normal text-gray-500">
						Each Bijou jewellery creation is a dazzling testament to
						unparalleled craftsmanship, radiating with flawless brilliance,
						breathtaking beauty, and an irresistible allure. Discover the
						timeless elegance and extraordinary artistry that define Classic
						Bijou.
					</p>

					<Button
						variant="outlined"
						className="w-[250px] h-[40px] rounded-0 self-end mt-8 text-[#2f2f2f] border-[#2f2f2f] hover:bg-gradient-to-r hover:from-[#f6ae29] hover:to-[#f68529] hover:text-[#ffffff] hover:border-white hover:shadow-lg transition-all duration-300 ease-in-out focus:shadow-none"
						onClick={handleButtonClick}
					>
						Shop Now
					</Button>
				</motion.div>
				<div className="m-10 h-[500px] w-full overflow-hidden rounded-[10px] flex justify-center items-center">
					<img
						src={img2}
						alt="Card Image"
						className="object-cover w-[700px] mb-18"
					/>
				</div>
			</motion.div>

			<hr
				style={{
					border: "1px solid gainsboro",
					width: "96%",
					opacity: 0.3,
					margin: "auto",
				}}
			/>

			{/* Card 3 */}
			<motion.div
				id="card3"
				className="flex flex-row items-center"
				ref={ref3}
				initial={{ opacity: 0, y: -150 }} // Start off-screen
				animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 150 }} // Animate based on inView3
				transition={{ duration: 0.6 }}
			>
				<div className="m-10 h-[500px] w-full overflow-hidden rounded-[10px] flex justify-center items-center">
					<img
						src={img3}
						alt="Card Image"
						className="object-cover w-[800px] top-10 mt-44"
					/>
				</div>
				<motion.div className="text-card flex flex-col justify-start text-left text-gray-900 gap-2 my-4 max-w-[700px] select-none px-5">
					<h1 className="text-[35px] text-gray-900 font-semibold bg-gradient-to-r from-gray-900 to-gray-900 text-transparent bg-clip-text transition-all duration-300 ease-in-out ">
						Celebrate Your Love Story with Bijou
					</h1>
					<p className="text-[14px] font-normal text-gray-500">
						The diamond you adorn reflects the essence of your love. With a rich
						heritage of crafting and perfecting some of the world’s most
						legendary gems, Bijou has been a symbol of unrivaled diamond
						excellence for over six decades.
					</p>

					<Button
						variant="outlined"
						className="w-[250px] h-[40px] rounded-0 self-start mt-8 text-[#2f2f2f] border-[#2f2f2f] hover:bg-gradient-to-r hover:from-[#f6ae29] hover:to-[#f68529] hover:text-[#ffffff] hover:border-white hover:shadow-lg transition-all duration-300 ease-in-out focus:shadow-none"
						onClick={handleButtonClick1}
					>
						Discover
					</Button>
				</motion.div>
			</motion.div>
		</>
	);
};

export default SlideCard;
