import Footer from './Component/Footer'
import Header from './Component/Header'
import Navbar from './Component/Navbar'
import Section from './Section'

export const metadata = {
  title: 'Informasi Umum',
}

export default function Home() {
  return (
    <main className='main'>
      <Header />
      <Navbar name={'umum'} />
      <Section />
      <Footer />
    </main>
  )
}
