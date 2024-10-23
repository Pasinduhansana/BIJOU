import React from "react";
import {
	Navbar,
	Collapse,
	Typography,
	Button,
	IconButton,
	List,
	Avatar,
	Input,
	ListItem,
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
} from "@material-tailwind/react";
import {
	ChevronDownIcon,
	Bars3Icon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import {
	UserCircleIcon,
	Cog6ToothIcon,
	InboxArrowDownIcon,
	LifebuoyIcon,
	PowerIcon,
	ShoppingCartIcon,
} from "@heroicons/react/24/solid";
import hor_logo from "../assets/logo_horizon.png";
import profile_img from "../assets/wallpaper.jpg";

import { useNavigate } from "react-router-dom";

const navListMenuItems1 = [
	{
		title: "Engagement Rings",
		description: "Love's timeless symbol.",
		icon: "https://img.icons8.com/?size=100&id=Va0yr8pF3UlY&format=png&color=000000",
	},
	{
		title: "Wedding Bands",
		description: "Everlasting commitment rings.",
		icon: "https://img.icons8.com/?size=100&id=eNKYFpCGZ8vi&format=png&color=000000",
	},
	{
		title: "Necklaces",
		description: "Elegant neck adornments.",
		icon: "https://img.icons8.com/?size=100&id=iDiwUuGKdU7o&format=png&color=000000",
	},
	{
		title: "Earrings",
		description: "Stunning ear accents.",
		icon: "https://img.icons8.com/?size=100&id=JxNHQB26kZgm&format=png&color=000000",
	},
	{
		title: "Bracelets",
		description: "Stylish wristwear pieces.",
		icon: "https://img.icons8.com/?size=100&id=ap3oGe38IZD3&format=png&color=000000",
	},
	{
		title: "Anklets",
		description: "Charming ankle jewelry.",
		icon: "https://img.icons8.com/?size=100&id=bcH9UnhA8MhR&format=png&color=000000",
	},
	{
		title: "Jewelry Sets",
		description: "Coordinated matching pieces.",
		icon: "https://img.icons8.com/?size=100&id=10509&format=png&color=000000",
	},
	{
		title: "Birthstone Jewelry",
		description: "Personalized gemstone pieces.",
		icon: "https://img.icons8.com/?size=100&id=37630&format=png&color=000000",
	},
	{
		title: "Vintage & Antique Jewelry",
		description: "Unique historical treasures.",
		icon: "https://img.icons8.com/?size=100&id=9887&format=png&color=000000",
	},
];

const navListMenuItems2 = [
	{
		title: "Engagement Rings",
		description: "Love's timeless symbol.",
		icon: "https://img.icons8.com/?size=100&id=1yaYsPE2KVRn&format=png&color=000000", // Engagement Ring icon
	},
	{
		title: "Wedding Bands",
		description: "Everlasting commitment rings.",
		icon: "https://img.icons8.com/?size=100&id=5z5Rvj2F4jZB&format=png&color=000000", // Wedding Band icon
	},
	{
		title: "Bridal Sets",
		description: "Perfectly paired rings for her.",
		icon: "https://img.icons8.com/?size=100&id=DA67d1tKQ9Pr&format=png&color=000000", // Bridal Set icon
	},
	{
		title: "Anniversary Rings",
		description: "Celebrate years of love.",
		icon: "https://img.icons8.com/?size=100&id=SWz50mYtWTad&format=png&color=000000", // Anniversary icon
	},
	{
		title: "Promise Rings",
		description: "A vow of your love.",
		icon: "https://img.icons8.com/?size=100&id=WA1NlKXDoNpx&format=png&color=000000", // Promise Ring icon
	},
	{
		title: "Gifts for Her",
		description: "Jewelry that speaks love.",
		icon: "https://img.icons8.com/?size=100&id=kLORTzuNOM2d&format=png&color=000000", // Gift icon
	},
	{
		title: "Gifts for Him",
		description: "Timeless and elegant pieces.",
		icon: "https://img.icons8.com/?size=100&id=aPAHTIQEcgiq&format=png&color=000000", // Star icon (for uniqueness)
	},
	{
		title: "Custom Engagement Rings",
		description: "Design a ring as unique as your love.",
		icon: "https://img.icons8.com/?size=100&id=C17kAYcL0DEL&format=png&color=000000", // Customization icon
	},
	{
		title: "Wedding Accessories",
		description: "Elegant accents for your special day.",
		icon: "https://img.icons8.com/?size=100&id=yd4mReUJEvkX&format=png&color=000000", // Accessories icon
	},
];

const navListMenuItems3 = [
	{
		title: "Luxury Watches",
		description: "Timeless craftsmanship for the elite.",
		icon: "https://img.icons8.com/?size=100&id=A3c04Fnghx1E&format=png&color=000000", // Luxury Watch icon
	},
	{
		title: "Smart Watches",
		description: "Stay connected with technology on your wrist.",
		icon: "https://img.icons8.com/?size=100&id=aMjpjszRU4DZ&format=png&color=000000", // Smart Watch icon
	},
	{
		title: "Chronograph",
		description: "Precision timing for the modern man.",
		icon: "https://img.icons8.com/?size=100&id=2nVS5Wx4ZIp8&format=png&color=000000", // Chronograph icon
	},
	{
		title: "Diving Watches",
		description: "Built for underwater adventures.",
		icon: "https://img.icons8.com/?size=100&id=BEl9D9Wp2F7Y&format=png&color=000000", // Diving Watch icon
	},
	{
		title: "Analog Watches",
		description: "Classic design for timeless elegance.",
		icon: "https://img.icons8.com/?size=100&id=NYyqD95LOGBq&format=png&color=000000", // Analog Watch icon
	},
	{
		title: "Watch Accessories",
		description: "Enhance your timepieces with style.",
		icon: "https://img.icons8.com/?size=100&id=DjxLmZ1Zqncw&format=png&color=000000", // Watch Accessories icon
	},
];

const navListMenuItems4 = [
	{
		title: "Gift Baskets",
		description: "Delightful assortments for every occasion.",
		icon: "https://img.icons8.com/?size=100&id=kLORTzuNOM2d&format=png&color=000000", // Gift Basket icon
	},
	{
		title: "Experience Gifts",
		description: "Memorable experiences to cherish forever.",
		icon: "https://img.icons8.com/?size=100&id=q5eB6pZkQ1OF&format=png&color=000000", // Experience Gifts icon
	},
	{
		title: "Handmade Gifts",
		description: "Crafted with love and care.",
		icon: "https://img.icons8.com/?size=100&id=1jawc6EAIZaa&format=png&color=000000", // Handmade Gift icon
	},
	{
		title: "Gift Cards",
		description: "The perfect gift for any occasion.",
		icon: "https://img.icons8.com/?size=100&id=9Ko3U2Vjyti7&format=png&color=000000", // Gift Card icon
	},
];

function NavListMenu1() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

	const renderItems = navListMenuItems1.map(
		({ icon, title, description }, key) => (
			<a href="#" key={key}>
				<MenuItem className="flex items-center gap-3 rounded-lg">
					<div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
						<img src={icon} alt="icon" className="h-6 text-gray-900 w-6" />
					</div>
					<div>
						<Typography
							variant="h6"
							color="blue-gray"
							className="flex items-center text-sm font-semibold text-gray-800"
						>
							{title}
						</Typography>
						<Typography
							variant="paragraph"
							className="text-xs !font-medium text-blue-gray-400 text-[12px]"
						>
							{description}
						</Typography>
					</div>
				</MenuItem>
			</a>
		)
	);

	return (
		<React.Fragment>
			<Menu
				open={isMenuOpen}
				handler={setIsMenuOpen}
				offset={{ mainAxis: 20 }}
				placement="bottom"
				allowHover={true}
			>
				<MenuHandler>
					<Typography
						as="div"
						variant="small"
						className="font-medium self-center"
					>
						<ListItem
							className="flex items-center gap-2 py-2 pr-4 font-semibold text-gray-600 text-[11px] uppercase text-center "
							selected={isMenuOpen || isMobileMenuOpen}
							onClick={() => setIsMobileMenuOpen((cur) => !cur)}
						>
							Jewellery
							<ChevronDownIcon
								strokeWidth={2.5}
								className={`hidden h-3 w-3 transition-transform lg:block ${
									isMenuOpen ? "rotate-180" : ""
								}`}
							/>
							<ChevronDownIcon
								strokeWidth={2.5}
								className={`block h-3 w-3 transition-transform lg:hidden ${
									isMobileMenuOpen ? "rotate-180" : ""
								}`}
							/>
						</ListItem>
					</Typography>
				</MenuHandler>
				<MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
					<ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
						{renderItems}
					</ul>
				</MenuList>
			</Menu>
			<div className="block lg:hidden">
				<Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
			</div>
		</React.Fragment>
	);
}

function NavListMenu2() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

	const renderItems = navListMenuItems2.map(
		({ icon, title, description }, key) => (
			<a href="#" key={key}>
				<MenuItem className="flex items-center gap-3 rounded-lg">
					<div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
						<img src={icon} alt="icon" className="h-6 text-gray-900 w-6" />
					</div>
					<div>
						<Typography
							variant="h6"
							color="blue-gray"
							className="flex items-center text-sm font-semibold text-gray-800"
						>
							{title}
						</Typography>
						<Typography
							variant="paragraph"
							className="text-xs !font-medium text-blue-gray-400 text-[12px]"
						>
							{description}
						</Typography>
					</div>
				</MenuItem>
			</a>
		)
	);

	return (
		<React.Fragment>
			<Menu
				open={isMenuOpen}
				handler={setIsMenuOpen}
				offset={{ mainAxis: 20 }}
				placement="bottom"
				allowHover={true}
			>
				<MenuHandler>
					<Typography
						as="div"
						variant="small"
						className="font-medium self-center"
					>
						<ListItem
							className="flex items-center gap-2 py-2 pr-4 font-semibold text-gray-600 text-[11px] uppercase text-center "
							selected={isMenuOpen || isMobileMenuOpen}
							onClick={() => setIsMobileMenuOpen((cur) => !cur)}
						>
							Engagement & Bridal
							<ChevronDownIcon
								strokeWidth={2.5}
								className={`hidden h-3 w-3 transition-transform lg:block ${
									isMenuOpen ? "rotate-180" : ""
								}`}
							/>
							<ChevronDownIcon
								strokeWidth={2.5}
								className={`block h-3 w-3 transition-transform lg:hidden ${
									isMobileMenuOpen ? "rotate-180" : ""
								}`}
							/>
						</ListItem>
					</Typography>
				</MenuHandler>
				<MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
					<ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
						{renderItems}
					</ul>
				</MenuList>
			</Menu>
			<div className="block lg:hidden">
				<Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
			</div>
		</React.Fragment>
	);
}

function NavListMenu3() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

	const renderItems = navListMenuItems3.map(
		({ icon, title, description }, key) => (
			<a href="#" key={key}>
				<MenuItem className="flex items-center gap-3 rounded-lg">
					<div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
						<img src={icon} alt="icon" className="h-6 text-gray-900 w-6" />
					</div>
					<div>
						<Typography
							variant="h6"
							color="blue-gray"
							className="flex items-center text-sm font-semibold text-gray-800"
						>
							{title}
						</Typography>
						<Typography
							variant="paragraph"
							className="text-xs !font-medium text-blue-gray-400 text-[12px]"
						>
							{description}
						</Typography>
					</div>
				</MenuItem>
			</a>
		)
	);

	return (
		<React.Fragment>
			<Menu
				open={isMenuOpen}
				handler={setIsMenuOpen}
				offset={{ mainAxis: 20 }}
				placement="bottom"
				allowHover={true}
			>
				<MenuHandler>
					<Typography
						as="div"
						variant="small"
						className="font-medium self-center"
					>
						<ListItem
							className="flex items-center gap-2 py-2 pr-4 font-semibold text-gray-600 text-[11px] uppercase text-center"
							selected={isMenuOpen || isMobileMenuOpen}
							onClick={() => setIsMobileMenuOpen((cur) => !cur)}
						>
							Watches
							<ChevronDownIcon
								strokeWidth={2.5}
								className={`hidden h-3 w-3 transition-transform lg:block ${
									isMenuOpen ? "rotate-180" : ""
								}`}
							/>
							<ChevronDownIcon
								strokeWidth={2.5}
								className={`block h-3 w-3 transition-transform lg:hidden ${
									isMobileMenuOpen ? "rotate-180" : ""
								}`}
							/>
						</ListItem>
					</Typography>
				</MenuHandler>
				<MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
					<ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
						{renderItems}
					</ul>
				</MenuList>
			</Menu>
			<div className="block lg:hidden">
				<Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
			</div>
		</React.Fragment>
	);
}

function NavListMenu4() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

	const renderItems = navListMenuItems4.map(
		({ icon, title, description }, key) => (
			<a href="#" key={key}>
				<MenuItem className="flex items-center gap-3 rounded-lg">
					<div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
						<img src={icon} alt="icon" className="h-6 text-gray-900 w-6" />
					</div>
					<div>
						<Typography
							variant="h6"
							color="blue-gray"
							className="flex items-center text-sm font-semibold text-gray-800"
						>
							{title}
						</Typography>
						<Typography
							variant="paragraph"
							className="text-xs !font-medium text-blue-gray-400 text-[12px]"
						>
							{description}
						</Typography>
					</div>
				</MenuItem>
			</a>
		)
	);

	return (
		<React.Fragment>
			<Menu
				open={isMenuOpen}
				handler={setIsMenuOpen}
				offset={{ mainAxis: 20 }}
				placement="bottom"
				allowHover={true}
			>
				<MenuHandler>
					<Typography
						as="div"
						variant="small"
						className="font-medium self-center"
					>
						<ListItem
							className="flex items-center gap-2 py-2 pr-4 font-semibold text-gray-600 text-[11px] uppercase text-center"
							selected={isMenuOpen || isMobileMenuOpen}
							onClick={() => setIsMobileMenuOpen((cur) => !cur)}
						>
							Gifts
							<ChevronDownIcon
								strokeWidth={2.5}
								className={`hidden h-3 w-3 transition-transform lg:block ${
									isMenuOpen ? "rotate-180" : ""
								}`}
							/>
							<ChevronDownIcon
								strokeWidth={2.5}
								className={`block h-3 w-3 transition-transform lg:hidden ${
									isMobileMenuOpen ? "rotate-180" : ""
								}`}
							/>
						</ListItem>
					</Typography>
				</MenuHandler>
				<MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
					<ul className="grid grid-cols-2 gap-y-2 outline-none outline-0">
						{renderItems}
					</ul>
				</MenuList>
			</Menu>
			<div className="block lg:hidden">
				<Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
			</div>
		</React.Fragment>
	);
}

function NavList() {
	return (
		<List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
			<NavListMenu1 />
			<NavListMenu2 />
			<NavListMenu3 />
			<NavListMenu4 />
		</List>
	);
}

const Header = () => {
	const navigate = useNavigate();

	const handleButtonClick = () => {
		navigate("/");
	};
	const [openNav, setOpenNav] = React.useState(false);

	React.useEffect(() => {
		window.addEventListener(
			"resize",
			() => window.innerWidth >= 960 && setOpenNav(false)
		);
	}, []);

	return (
		<Navbar className="relative mx-auto px-4 py-2 !w-screen !max-w-screen l-0 r-o top-0">
			<div className="flex items-center justify-between text-blue-gray-900">
				<div
					className="img h-12 flex items-center mr-0 cursor-pointer"
					onClick={handleButtonClick}
				>
					<img src={hor_logo} alt="logo" className="w-[10rem]" />
				</div>

				<div className="hidden lg:block">
					<NavList />
				</div>

				<div className="hidden gap-2 lg:flex md:flex">
					<Searchbar />
					<IconButton variant="text" color="black" className="p-5">
						<ShoppingCartIcon className="h-5 w-5" />
					</IconButton>

					<Button
						variant="gradient"
						size="sm"
						className="text-[10px] w-[80px] h-[34px] self-center p-[-10px]"
					>
						Sign In
					</Button>
				</div>

				<div className="flex flex-row md:ml-4">
					<ProfileMenu />

					<IconButton
						variant="text"
						color="blue-gray"
						className="lg:hidden"
						onClick={() => setOpenNav(!openNav)}
					>
						{openNav ? (
							<XMarkIcon className="h-6 w-6" strokeWidth={2} />
						) : (
							<Bars3Icon className="h-6 w-6" strokeWidth={2} />
						)}
					</IconButton>
				</div>
			</div>
			<Collapse open={openNav}>
				<NavList />

				<div className="flex w-full flex-nowrap items-center gap-2 lg:hidden md:hidden">
					<Button variant="outlined" size="sm" color="blue-gray" fullWidth>
						Log In
					</Button>
					<Button variant="gradient" size="sm" fullWidth>
						Sign In
					</Button>
				</div>
			</Collapse>
		</Navbar>
	);
};

//Profile Section

const profileMenuItems = [
	{
		label: "My Profile",
		icon: UserCircleIcon,
	},
	{
		label: "Edit Profile",
		icon: Cog6ToothIcon,
	},
	{
		label: "Inbox",
		icon: InboxArrowDownIcon,
	},
	{
		label: "Help",
		icon: LifebuoyIcon,
	},
	{
		label: "Sign Out",
		icon: PowerIcon,
	},
];

function ProfileMenu() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	const closeMenu = () => setIsMenuOpen(false);

	return (
		<Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
			<MenuHandler>
				<Button
					variant="text"
					color="blue-gray"
					className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
				>
					<Avatar
						variant="circular"
						size="sm"
						alt="tania andrew"
						className="border border-gray-900 p-0.5"
						src={profile_img}
					/>
					<ChevronDownIcon
						strokeWidth={2.5}
						className={`h-3 w-3 transition-transform ${
							isMenuOpen ? "rotate-180" : ""
						}`}
					/>
				</Button>
			</MenuHandler>
			<MenuList className="p-1">
				{profileMenuItems.map(({ label, icon }, key) => {
					const isLastItem = key === profileMenuItems.length - 1;
					return (
						<MenuItem
							key={label}
							onClick={closeMenu}
							className={`flex items-center gap-2 rounded ${
								isLastItem
									? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
									: ""
							}`}
						>
							{React.createElement(icon, {
								className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
								strokeWidth: 2,
							})}
							<Typography
								as="span"
								variant="small"
								className="font-normal"
								color={isLastItem ? "red" : "inherit"}
							>
								{label}
							</Typography>
						</MenuItem>
					);
				})}
			</MenuList>
		</Menu>
	);
}

function Searchbar() {
	return (
		<div className="relative flex w-full gap-2 md:w-max ml-14">
			<Input
				type="search"
				color="dark-gray"
				label="Type here..."
				className="pr-20"
				containerProps={{
					className: "min-w-[288px]",
				}}
			/>
			<Button
				size="sm"
				color="black"
				className="!absolute right-1 top-1 rounded"
			>
				Search
			</Button>
		</div>
	);
}
//search Bar

export default Header;
