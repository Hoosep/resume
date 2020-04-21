import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';

// Own component
import { MainLayout, NormalLayout } from "./Layouts/";
import { Main, Profile, Contact,
         Education, Experience, Software } from "./Landing/";

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Main />
      </MainLayout>
      <NormalLayout>
        <Profile />
        <Education />
        <Experience />
        <Software />
        <Contact />
      </NormalLayout>
    </Router>
  );
}

export default App;
