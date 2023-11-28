import Image from "next/image";
import { Container } from "../Container/container";
import styles from "./card.module.css";
import Link from "next/link";
import dayjs from 'dayjs';
export const Card = ({ blog }) => {
    return <div>
        <Container>
            {<div className={styles.card}>
                <div className={styles.img}>
                    <Image
                    src={blog.photo_url}
                    alt="Picture of the author"
                    fill={true}
                    />
                </div>
                <h4 className={styles.title}>{blog.title}</h4>
                <p className={styles.subtitle}>{blog.category}</p>
                <div className={styles.action}>
                    <Link href={`/articlet/${blog.id}`}>Read Article</Link>
                    <span>{dayjs(blog.created_at).format('YYYY MMMM DD')}</span>
                </div>
            </div>}     
        </Container>
    </div>
}