import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Profile from '@/components/Home';
import WorkLogo from '@/components/WorkLogo'
import Description from '@/components/Description';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <div
      className="w-full h-full bg-center bg-no-repeat bg-cover" style={{backgroundImage: 'url("https://kawsar.design/wp-content/uploads/2023/02/BG-Tx-1.svg")'}}
    >
        <Header />
        <Profile />
        {/* <WorkLogo /> */}
        <Description />
        <Contact />
        <Experience />
    </div>
  )
}
export default Home;