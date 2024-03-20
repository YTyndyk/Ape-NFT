import { socialLinks } from "../../constants";
import { Link } from "react-router-dom";
import styles from "./socialLinls.module.scss";

const SocialLinks = () => {
	return (
		<div className={styles.socialLinks}>
			{socialLinks.map((item) => (
				<Link key={item.name} to={item.link} target="_blank">
					<img src={item.iconUrl} alt={item.name} className={styles.link} />
				</Link>
			))}
		</div>
	);
};

export default SocialLinks;
