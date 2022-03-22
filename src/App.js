import './App.css';
import React from 'react';
import Navbar from './components/navbar/navbar';
import Note from './components/note/note';
import Learn from './components/learn/learn';
import PopularKeynote from './components/popularKeynote/popularKeynote';
import MeetRory from './components/meetRory/meetRory';
import Secrets from './components/secrets/secrets';
import Footer from './components/footer/footer';
import Insights from './components/insights/insights';
import Intro from './components/intro/intro';
import TimeLine from './components/timeLine/timeLine';
import Speakers from './components/speakers/speakers';
import Companies from './components/companies/companies';


function App() {
  return (
    <>
      <Note />
      <Navbar />
      <Intro />
      <Insights />
      <Learn />
      <TimeLine />
      <Companies />
      <PopularKeynote />
      <Speakers />
      <Secrets />
      <MeetRory />
      <Footer />
    </>
  );
}

export default App;
