import React, { useState } from 'react';
import Header from './Header';
import { DropDownArrow } from '../svgIcon';
import './styles/faq.css';

function FAQ() {
  const [open, setOpen] = useState();
  const faqData = [
    {
      title: 'How to import Prime into Figma?',
      desc: 'When people hear about your business, they first check your online presence. If they are not able to find it, chances are you lose customers.',
    },
    {
      title: 'Why do businesses need Design services in Bangalore?',
      desc: 'When people hear about your business, they first check your online presence. If they are not able to find it, chances are you lose customers.',
    },
    {
      title: 'Why do businesses need Design services in Bangalore?',
      desc: 'When people hear about your business, they first check your online presence. If they are not able to find it, chances are you lose customers.',
    },
    {
      title: 'Why do businesses need Design services in Bangalore?',
      desc: 'When people hear about your business, they first check your online presence. If they are not able to find it, chances are you lose customers.',
    },
    {
      title: 'Why do businesses need Design services in Bangalore?',
      desc: 'When people hear about your business, they first check your online presence. If they are not able to find it, chances are you lose customers.',
    },
  ];

  return (
    <div className="faq-wrap">

      <div className="footer-container">
        {faqData.map((item, index) => (
          <div className="each-faq">
            <div className="title-arrow"
              onClick={() => setOpen(index)}
            >
              <h2 >{item.title}</h2>
              <span
                style={{
                  opacity: open !== index ? '1' : '0'
                }}
              ><DropDownArrow /></span>
            </div>
            <p
              style={{
                lineHeight: open !== index ? '0px' : '20px',
                opacity: open !== index ? '0' : '1'
              }}
            >{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
