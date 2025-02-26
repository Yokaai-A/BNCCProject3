import React, { useState, useEffect } from "react";
import "../styles/CountryFilter.css";

const CountryFilter = () => {
    const [region, setRegion] = useState("");
    const [language, setLanguage] = useState("");
    const [independent, setIndependent] = useState(false);
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        let url = "https://restcountries.com/v3.1/all";

        if (region) url = `https://restcountries.com/v3.1/region/${region}`;
        else if (language) url = `https://restcountries.com/v3.1/lang/${language}`;
        else if (independent) url = `https://restcountries.com/v3.1/independent?status=true`;

        fetch(url)
            .then((res) => res.json())
            .then((data) => setCountries(data))
            .catch((err) => console.error("Error fetching data:", err));
    }, [region, language, independent]);

    return (
        <div className="filter-page">
            <h1 className="filter-title">Filter Countries</h1>

            <div className="filter-options">

                <div className="custom-dropdown">
                    <select onChange={(e) => setRegion(e.target.value)}>
                        <option value="">Select Region</option>
                        <option value="africa">Africa</option>
                        <option value="americas">Americas</option>
                        <option value="asia">Asia</option>
                        <option value="europe">Europe</option>
                        <option value="oceania">Oceania</option>
                    </select>
                </div>

                <div className="custom-dropdown">
                    <select onChange={(e) => setLanguage(e.target.value)}>
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

            <div className="country-list">
                {countries.map((country) => (
                    <div key={country.cca3} className="country-card">
                        <img src={country.flags.png} alt={country.name.common} className="flag" />
                        <h3>{country.name.common}</h3>
                        <p>{country.region}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CountryFilter;
