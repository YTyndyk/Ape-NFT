import { useEffect } from "react";
import { createPortal } from "react-dom";
import { LogoWhite } from "../../assets/icons";
import { navLinks } from "../../constants";
import SocialLinksModal from "../SocialLinksModal/SocialLinksModal";
import styles from "./modal.module.scss";

const modalRoot = document.getElementById("modal-root");

const Modal = ({ close, handleLinkClick }) => {
	const closeModal = ({ target, currentTarget, code }) => {
		if (target === currentTarget || code === "Escape") {
			close();
		}
	};

	useEffect(() => {
		document.addEventListener("keydown", closeModal);

		return () => document.removeEventListener("keydown", closeModal);
	}, []);

	return createPortal(
		<div onClick={closeModal} className={styles.overlay}>
			<div className={styles.modal}>
				<div className={styles.logoWhite}>
					<a href="/">
						<img src={LogoWhite} alt="logo" />
					</a>
					<button className={styles.btnCloseModal} onClick={closeModal}>
						CLOSE
					</button>
				</div>

				<ul>
					<SocialLinksModal />
					<div className={styles.qwe}>
						{navLinks.map((item) => (
							<li key={item.label} className={styles.navigationMenu}>
								<a
									href={item.href}
									onClick={() => handleLinkClick(item.label)}
									className={styles.linkPage}
								>
									{item.label}
								</a>
							</li>
						))}
					</div>
				</ul>
			</div>
		</div>,
		modalRoot,
	);
};
export default Modal;
