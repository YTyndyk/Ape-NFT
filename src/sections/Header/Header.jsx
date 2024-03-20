// import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../assets/icons";
import { socialLinks } from "../../constants/index";

import styles from "./header.module.scss";

const Header = () => {
	// const [activeLink, setActiveLink] = useState("home");
	// const [toggle, setToggle] = useState(false);
	// const handleLinkClick = (label) => {
	// 	setActiveLink(label);
	// };
	return (
		<header className={styles.header}>
			<nav className={styles.navigation}>
				<a href="/">
					<img src={Logo} alt="logo" className="styles.logo" />
				</a>
				<button className={styles.btnMenu}>MENU</button>

				{/* <ul hidden>
					{navLinks.map((item) => (
						<li key={item.label}>
							<button className={styles.navMenu}>
								<a
									href={item.href}
									className={`font-montserrat leading-normal text-lg hover:text-coral-red ${
										activeLink === item.label
											? "text-coral-red"
											: "text-slate-gray"
									}`}
									onClick={() => handleLinkClick(item.label)}
								>
									{item.label}
								</a>
							</button>
						</li>
					))}
				</ul> */}
			</nav>
			<div className={styles.socialLinks}>
				{socialLinks.map((item) => (
					<Link key={item.name} to={item.link} target="_blank">
						<img src={item.iconUrl} alt={item.name} className={styles.link} />
					</Link>
				))}
			</div>
		</header>
	);
};

export default Header;
