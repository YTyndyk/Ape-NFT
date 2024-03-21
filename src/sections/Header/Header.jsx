import { useState, useEffect } from "react";
import { Logo } from "../../assets/icons";
import Modal from "../../components/Modal/Modal";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import Navigation from "../../components/Navigation/Navigation";
import styles from "./header.module.scss";

const Header = () => {
	const [activeLink, setActiveLink] = useState("home");
	const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 768);
	const [modalOpen, setModalOpen] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsWideScreen(window.innerWidth >= 768);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const handleLinkClick = (label) => {
		setActiveLink(label);
	};

	const handleMenuClick = () => {
		setMenuOpen(!menuOpen);
	};
	const handleCloseClick = () => {
		setMenuOpen(false);
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
					<img src={Logo} alt="logo" className={styles.logo} />
				</a>
				{isWideScreen ? (
					<>
						{menuOpen ? null : (
							<button className={styles.btnMenu} onClick={handleMenuClick}>
								MENU
							</button>
						)}
					</>
				) : (
					<button className={styles.btnMenu} onClick={showModal}>
						MENU
					</button>
				)}

				{menuOpen && (
					<Navigation
						handleLinkClick={handleLinkClick}
						handleCloseClick={handleCloseClick}
					/>
				)}
			</nav>
			<SocialLinks />
			{modalOpen && (
				<Modal close={closeModal} handleLinkClick={handleLinkClick} />
			)}
		</header>
	);
};

export default Header;
