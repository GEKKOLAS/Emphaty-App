import React from 'react';
import Analytics from './Components/Analytics';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Newsletter from './Components/Newsletter';
import { Content, } from './Components/Content';
import videobg from './assets/videobg.mp4'

function App() {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <video src={videobg} autoPlay loop muted className='object-cover absolute h-screen w-screen -z-10 top-0 left-0'></video>
      <Hero />
      <Analytics />
      <Content/>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;