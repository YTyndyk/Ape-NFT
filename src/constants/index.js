import {
	discord,
	LogomarkBlue,
	logo1,
	discordWhite,
	logoTwitterWhite,
	LogomarkWhite,
} from "../assets/icons";

export const navLinks = [
	{ href: "#about", label: "ABOUT" },
	{ href: "#m-map", label: "M-MAP" },
	{ href: "#faq", label: "FAQ" },
	{ href: "#arts", label: "ARTS" },
	{ href: "#mint", label: "MINT" },
];

export const socialLinks = [
	{
		name: "Discord",
		iconUrl: discord,
		link: "https://discord.com/",
	},
	{
		name: "OpenSea",
		iconUrl: LogomarkBlue,
		link: "https://opensea.io",
	},
	{
		name: "Twitter",
		iconUrl: logo1,
		link: "https://twitter.com/",
	},
];
export const socialLinksModal = [
	{
		name: "Discord",
		iconUrl: discordWhite,
		link: "https://discord.com/",
	},
	{
		name: "OpenSea",
		iconUrl: LogomarkWhite,
		link: "https://opensea.io",
	},
	{
		name: "Twitter",
		iconUrl: logoTwitterWhite,
		link: "https://twitter.com/",
	},
];
