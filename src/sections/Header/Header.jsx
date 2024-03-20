import { useState, useEffect } from "react";
import { Logo, LogoBig } from "../../assets/icons";
// import { navLinks } from "../../constants/index";
import Modal from "../../components/Modal/Modal";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import Navigation from "../../components/Navigation/Navigation";
import styles from "./header.module.scss";

const Header = () => {
	const [activeLink, setActiveLink] = useState("home");
	const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1280);
	const [modalOpen, setModalOpen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsWideScreen(window.innerWidth >= 1280);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const logoIcon = isWideScreen ? LogoBig : Logo;

	const handleLinkClick = (label) => {
		setActiveLink(label);
	};

	const showModal = () => {
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
	};

	return (
		<header className={styles.header}>
			<nav className={styles.navigation}>
				<a href="/">
					<img src={logoIcon} alt="logo" />
				</a>
				<Navigation handleLinkClick={handleLinkClick} />
				{/* <ul className={styles.pageSection}>
					{navLinks.map((item) => (
						<li key={item.label} className={styles.navMenu}>
							<a href={item.href} onClick={() => handleLinkClick(item.label)}>
								{item.label}
							</a>
						</li>
					))}
					
				</ul> */}
				{/* <button className={styles.btnClose}>CLOSE</button> */}
				<button className={styles.btnMenu} onClick={showModal}>
					MENU
				</button>
			</nav>
			<SocialLinks />
			{modalOpen && (
				<Modal close={closeModal} handleLinkClick={handleLinkClick} />
			)}
		</header>
	);
};

export default Header;
