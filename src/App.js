import './App.css';
import React from 'react';
import Navbar from './components/navbar/navbar';
import Learn from './components/learn/learn';
import PopularKeynote from './components/popularKeynote/popularKeynote';
import MeetRory from './components/meetRory/meetRory';
import Secrets from './components/secrets/secrets';
import Footer from './components/footer/footer';
import Insights from './components/insights/insights';
import Intro from './components/intro/intro';
import TimeLine from './components/timeLine/timeLine';
import Speakers from './components/speakers/speakers';


function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <Insights />
      <Learn />
      <TimeLine />
      <PopularKeynote />
      <Speakers />
      <Secrets />
      <MeetRory />
      <Footer />
    </>
  );
}

export default App;
