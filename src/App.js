import React from 'react';
import Analytics from './Components/Analytics';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Newsletter from './Components/Newsletter';
import { Content, } from './Components/Content';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Content/>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;