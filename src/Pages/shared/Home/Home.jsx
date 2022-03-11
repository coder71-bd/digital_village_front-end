import React from 'react';
import ChatBot from '../ChatBot/ChatBot.jsx';
import Analyticale from './Analyticale/Analyticale.js';
import Banner from './Banner/Banner';
import Faq from './Faq/Faq.jsx';
import News from './News/News';
import Reviews from './Reviews/Reviews';
import Service from './Service/Service';

const Home = () => {
  return (
    <div>
      <Banner />
      <Service />
      <News />
      <Reviews />
      <Analyticale />
      <Faq />
      <ChatBot />
    </div>
  );
};

export default Home;