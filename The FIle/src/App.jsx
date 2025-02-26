import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CountryProvider } from "./context/CountryContext"; 
import "./styles/general1.css";
import Header from "./components1/header";
import LeftSection from "./components1/leftsection";
import RightSection from "./components1/rightsection";
import Footer from "./components1/undersection";
import CountryDetail from "./Pages/CountryDetail";
import CountrySearch from "./Pages/CountrySearch";
import CountryFilter from "./Pages/CountryFilter";
import About from "./Pages/About";

function App() {
  return (
    <CountryProvider>
      <Router>
        <div className="main-container">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={
                <>
                  <div className="container">
                    <LeftSection />
                    <RightSection />
                  </div>
                  <Footer />
                </>
              } />
              <Route path="/search" element={<CountrySearch />} />
              <Route path="/detail/:name" element={<CountryDetail />} />
              <Route path="/detail/" element={<CountryDetail />} />
              <Route path="/filter" element={<CountryFilter />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </div>
      </Router>
    </CountryProvider>
  );
}

export default App;
