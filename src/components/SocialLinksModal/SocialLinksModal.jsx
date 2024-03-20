import { Link } from "react-router-dom";
import styles from "./socialLinksModal.module.scss";
import { socialLinksModal } from "../../constants";

const SocialLinksModal = () => {
	return (
		<div className={styles.socialLinksModal}>
			{socialLinksModal.map((item) => (
				<Link key={item.name} to={item.link} target="_blank">
					<img src={item.iconUrl} alt={item.name} className={styles.link} />
				</Link>
			))}
		</div>
	);
};

export default SocialLinksModal;
