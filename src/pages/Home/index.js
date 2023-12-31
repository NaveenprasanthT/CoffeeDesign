import React from 'react';
import FAQ from '../../common/Components/faq';
import Services from '../../common/Components/Services';
import Aboutus from '../../common/Components/Aboutus';
import Card from '../../common/Components/Card';

function Home() {
  return (
    <div>
      <Services />
      <Aboutus />
      <FAQ />
      <Card />
    </div>
  );
}

export default Home;
