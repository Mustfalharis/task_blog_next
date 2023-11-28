'use client';
import { useEffect, useState } from 'react';
import { Header } from "@/Components/Header/header";
import styles from './page.module.css'
import { Container } from "@/Components/Container/container";
import Image from "next/image";
import { Footer } from '@/Components/Footer/footer';
import dayjs from 'dayjs';
export default function Articlet({ params }) {
    const [blog, setblog] = useState({});
    const getProducts = () => {
        fetch(`https://api.slingacademy.com/v1/sample-data/blog-posts/${params.id}`)
            .then((res) => res.json())
            .then((data) => {
                setblog(data.blog);
            });
    };
    useEffect(() => {
        getProducts();
    }, []);
    return <div>
        <Header />
        <Container>
            <div className={styles.title}>
                <div className={styles.subtitle}>
                    <h1>{blog.title}</h1>
                    <p>{blog.description}</p>
                </div>
                <span>{dayjs(blog.created_at).format('YYYY MMMM DD')}</span>
            </div>
            <div className={styles.img}>
                <Image
                    src={blog.photo_url}
                    alt="Picture of the author"
                    fill={true}
                />
            </div>
            <div dangerouslySetInnerHTML={{ __html: blog.content_html }}></div>
        </Container>
        <Footer />
    </div>
}

