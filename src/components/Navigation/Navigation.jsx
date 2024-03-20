import { navLinks } from "../../constants/index";
import styles from "./navigation.module.scss";

const Navigation = ({ handleLinkClick }) => {
	return (
		<ul className={styles.pageSection}>
			{navLinks.map((item) => (
				<li key={item.label} className={styles.navMenu}>
					<a
						href={item.href}
						onClick={() => handleLinkClick(item.label)}
						className={styles.textColor}
					>
						{item.label}
					</a>
				</li>
			))}
			<button className={styles.btnClose}>CLOSE</button>
		</ul>
	);
};

export default Navigation;
