
import { Container } from "../Container/container";
import styles from "./footer.module.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export const Footer = () => {
    return <div className={styles.footer}>
        <Container>
            <div className={styles.content}>
                <p>All Rights Reserved - Aon2023</p>
                <div className={styles.media}>
                    <FaFacebook  size={32}/>
                    <FaInstagram   size={32}/>
                    <FaTwitter  size={32}/>
                </div>
            </div>
        </Container>

    </div>
}
