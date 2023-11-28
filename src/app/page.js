import Image from 'next/image'
import styles from './page.module.css'
import { Header } from '@/Components/Header/header'
import { Cover } from '@/Components/Cover/cover'
import { Container } from '@/Components/Container/container'
import { Footer } from '@/Components/Footer/footer'
import { ListCard } from '@/Components/ListCart/listCard'

export default function Home() {
  return (
    <main >
      <Header />
      <Cover />
      <Container>

        <ListCard/>

      </Container>
      <Footer/>
    </main>
  )
}
