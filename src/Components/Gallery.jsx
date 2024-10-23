import React from "react";
import { Button } from "@material-tailwind/react";

// Import Images - White mode
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
import img12 from "../assets/Rings/img1.jpg";

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
		{
			imageLink: img10,
			title: "Luxury Watch",
			description: "A luxury watch combining style and precision.",
		},
		{
			imageLink: img11,
			title: "Charm Bracelet",
			description: "A charm bracelet to showcase your unique style.",
		},
		{
			imageLink: img12,
			title: "Custom Engagement Ring",
			description: "A custom engagement ring designed just for you.",
		},
	];

	return (
		<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
			{data.map(({ imageLink, title, description }, index) => (
				<div
					key={index}
					className="flex flex-col bg-white p-2 rounded-lg shadow-lg transition-transform transform hover:scale-105 transition-all duration-300 h-full justify-between"
				>
					{/* Content container */}
					<div className="flex flex-col items-center">
						<div className="h-auto w-full overflow-hidden rounded-lg">
							<img
								src={imageLink}
								alt={title}
								className="object-cover w-full h-64 rounded-lg"
							/>
						</div>
						<h1 className="text-gray-800 text-lg font-semibold mt-4">
							{title}
						</h1>
						<p className="text-gray-600 text-sm mt-2 text-center px-4">
							{description}
						</p>
					</div>

					{/* Buttons container */}
					<div className="flex flex-wrap justify-center gap-4 mt-4 w-full pb-2">
						<Button
							variant="outlined"
							className="w-[120px] h-[40px] rounded-lg text-[#2f2f2f] border-[#2f2f2f] hover:bg-gradient-to-r hover:from-[#f6ae29] hover:to-[#f68529] hover:text-white hover:border-white transition-all duration-300"
						>
							Purchase
						</Button>
						<Button
							variant="outlined"
							className="w-[120px] h-[40px] rounded-lg text-[#2f2f2f] border-[#2f2f2f] hover:bg-gradient-to-r hover:from-[#f6ae29] hover:to-[#f68529] hover:text-white hover:border-white transition-all duration-300"
						>
							Add Cart
						</Button>
					</div>
				</div>
			))}
		</div>
	);
};

export default DefaultGallery;
