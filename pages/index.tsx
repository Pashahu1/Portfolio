import Header from "@/Components/Header/Header";
import Hero from "@/Components/Hero/Hero";
import {About} from "@/Components/About/About";
import {Services} from "@/Components/Services/Services";
import {Skills} from "@/Components/Skils/Skills";
import {Projects} from "@/Components/Projects/Projects";
import {Footer} from "@/Components/Footer/Footer";

const HomePage = () => {
  return (
      <div className='overflow-x-hidden'>
        <Header />
        <Hero />
        <div className='reletive z-[30] '>
            <About />
            <Services />
            <Skills />
            <Projects />
            <Footer />
        </div>
      </div>
  )
};

export default HomePage;
