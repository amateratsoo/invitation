import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages

import LandingPage from "./pages/landing__page/LandingPage";
import InfoPage from "./pages/info__page/InfoPage";
import Invite from './pages/invite__page/invite';


// set the page and it's children
// to fill up all the avaiable space

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
`

export default function App() {

  return (

    <Body>

      <Router>

        <Routes>
          
          <Route path='/' element={<LandingPage />} />
          <Route path='/info' element={<InfoPage />} />
          <Route path='/invite/:name' element={<Invite />} />
        
        </Routes>  

      </Router>

    </Body>

  );
}
