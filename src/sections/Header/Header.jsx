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
				<a href="/">
					<img src={Logo} alt="logo" width={48} height={32} />
				</a>
			</nav>
		</header>
	);
};

export default Header;
