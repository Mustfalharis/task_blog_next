"use client";

import Image from "next/image";
import { Container } from "../container/container";
import styles from "./header.module.css";
import Link from "next/link";

export const Header = ({page="HOME"}) => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
           <h2>Aon 2023</h2>
          <ul>
            <li>
                <Link href='/'>Home</Link>
            </li>
            <li >
            <Link href='/article'>About</Link>
            </li>
            <li >
            <Link href='/articlet'>Help</Link>
            </li>
          </ul>
      </div>
      </Container>
    </header>
  );
};