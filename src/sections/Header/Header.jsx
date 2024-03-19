import { useState } from "react";
import { Logo } from "../../assets/icons";
import { navLinks } from "../../constants/index";

import styles from "./header.module.scss";

const Header = () => {
	const [activeLink, setActiveLink] = useState("home");
	const [toggle, setToggle] = useState(false);
	const handleLinkClick = (label) => {
		setActiveLink(label);
	};
	return (
		<header className={styles.header}>
			<nav>
				<div className={styles.navigation}>
					<a href="/">
						<img src={Logo} alt="logo" className="styles.logo" />
					</a>
					<button className={styles.btnMenu}>MENU</button>
				</div>

				<ul hidden>
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
				</ul>
			</nav>
		</header>
	);
};

export default Header;
