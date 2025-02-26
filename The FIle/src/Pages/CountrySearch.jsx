import React, { useState, useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import { CountryContext } from "../context/CountryContext"; 
import "../styles/CountrySearch.css";

const CountrySearch = () => {
    const { countries, loading } = useContext(CountryContext); 
    const [searchTerm, setSearchTerm] = useState("");
    const [region, setRegion] = useState("");
    const [language, setLanguage] = useState("");
    const [independent, setIndependent] = useState(false);


    const filteredCountries = useMemo(() => {
        if (loading) return [];

        return countries.filter((country) => {
            if (searchTerm && !country.name.common.toLowerCase().includes(searchTerm.toLowerCase())) {
                return false;
            }
            if (region && country.region.toLowerCase() !== region.toLowerCase()) {
                return false;
            }
            if (language && (!country.languages || !Object.values(country.languages).some(lang => lang.toLowerCase().includes(language.toLowerCase())))) {
                return false;
            }
            if (independent && !country.independent) {
                return false;
            }
            return true;
        });
    }, [searchTerm, region, language, independent, countries, loading]);

    if (loading) {
        return (
            <div className="search-page">
                <div className="search-container">
                    <h1 className="search-title">Loading Countries...</h1>
                    <div className="country-list">
                        {[...Array(8)].map((_, index) => (
                            <div key={index} className="skeleton-card">
                                <div className="skeleton-flag"></div>
                                <div className="skeleton-text"></div>
                                <div className="skeleton-text"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="search-page">
            <div className="search-container">
                <div className="title-decoration">🌍 World Search Explorer 🌍</div>
                <h1 className="search-title">Search for a Country</h1>
                <div className="search-decoration"></div>

                <p className="desc">Search Country By Their Name</p>
                <p className="desc">Which country do you want to search for?</p>

                <input
                    type="text"
                    placeholder="Enter country name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />

                <h2 className="filter-title">Filter</h2>

                <div className="filter-options">
                    <div className="custom-dropdown">
                        <select value={region} onChange={(e) => setRegion(e.target.value)}>
                            <option value="">Select Region</option>
                            <option value="africa">Africa</option>
                            <option value="americas">Americas</option>
                            <option value="asia">Asia</option>
                            <option value="europe">Europe</option>
                            <option value="oceania">Oceania</option>
                        </select>
                    </div>

                    <div className="custom-dropdown">
                        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                            <option value="">Select Language</option>
                            <option value="english">English</option>
                            <option value="french">French</option>
                            <option value="spanish">Spanish</option>
                        </select>
                    </div>

                    <div className="switch-container">
                        <label className="switch-label">Independent Country</label>
                        <label className="switch">
                            <input type="checkbox" checked={independent} onChange={() => setIndependent(!independent)} />
                            <span className="slider"></span>
                        </label>
                    </div>
                </div>
            </div>

            <div className="country-list">
                {filteredCountries.length > 0 ? (
                    filteredCountries.map((country) => (
                        <div key={country.cca3} className="country-card">
                            <Link to={`/detail/${encodeURIComponent(country.name.common)}`} className="country-link">
                                <img src={country.flags.svg} alt={country.name.common} className="flag" />
                                <h2>{country.name.common}</h2>
                                <p>Population: {country.population.toLocaleString()}</p>
                            </Link>
                        </div>
                    ))
                ) : (
                    <div className="not-found-container">
                        <div className="not-Found">
                            <p>No countries found.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CountrySearch;
