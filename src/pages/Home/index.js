import React from 'react';
import FAQ from '../../common/Components/faq';
import HeaderSection from './Components/HeaderSection';
import Services from '../../common/Components/Services';
import Aboutus from '../../common/Components/Aboutus';

function Home() {
  return (
    <div>
      <HeaderSection />
      <Services />
      <Aboutus />
      <FAQ />
    </div>
  );
}

export default Home;
