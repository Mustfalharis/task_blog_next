import { Container } from "../Container/container";
import styles from "./cover.module.css";

export const Cover=()=>{

    return (
        <div className={styles.cover}>
            <div className={styles.overlay}>
                <Container>
                <h1>Simple Blog.</h1>
               <p>A blog created by Aon 2023</p>
                </Container>
            </div>
        </div>
    )


}