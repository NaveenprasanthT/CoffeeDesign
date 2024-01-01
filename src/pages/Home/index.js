import React from 'react';
import FAQ from '../../common/Components/faq';
import HeaderSection from './Components/HeaderSection';
import Services from '../../common/Components/Services';
import Aboutus from '../../common/Components/Aboutus';
import Card from '../../common/Components/Card';

function Home() {
  return (
    <div>
      <HeaderSection />
      <Services />
      <Aboutus />
      <FAQ />
      <Card />
    </div>
  );
}

export default Home;
