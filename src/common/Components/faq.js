import React from 'react';
import Header from './Header';

function FAQ() {
  return (
    <div className="faq-container">
      <Header 
        heading="FAQ's"
        title={<>Got <span>questions</span>? We've got the answers</>}
        desc="Our belief system says that effective design is born from combining empathy, data, and insights"
        underline
      />
    </div>
  );
}

export default FAQ;
