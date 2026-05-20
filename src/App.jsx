import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Router setup

import Nav from './assets/Nav';
import Banner from './assets/Banner';
import About from './assets/About';
import Service from './assets/Service';
import Project from './assets/Project';
import Contact from './assets/Contact';
import Footer from './assets/Footer';
import Experience from './assets/Experience'; // Import Experience.jsx page

import { BallTriangle } from 'react-loader-spinner'; // Loader

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 second loader
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen bg-slate-900">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#d946ef"
            ariaLabel="ball-triangle-loading"
            visible={true}
          />
        </div>
      ) : (
        <Router>
          <div className="bg-slate-900">
            <Nav />

            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Banner />
                    <About />
                    <Service />
                    <Project />
                    <Contact />
                    <Footer />
                  </>
                }
              />
              <Route path="/experience" element={<Experience />} />
            </Routes>

          </div>
        </Router>
      )}
    </>
  );
}

export default App;
