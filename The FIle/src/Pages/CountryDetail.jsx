import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/CountryDetail.css";

const CountryDetail = () => {
    const { name } = useParams();
    const navigate = useNavigate(); 
    const [country, setCountry] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!name) return;
    
        const fetchCountryDetails = async () => {
            try {
                const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
                console.log("API Response:", response.data); 
                setCountry(response.data[0]); 
                setLoading(false);
            } catch (error) {
                console.error("Error fetching country details:", error);
                setError("Failed to load country details. Please try again.");
                setLoading(false);
            }
        };
    
        fetchCountryDetails();
    }, [name]);

    if (!name) {
        return (
            <div className="no-country-selected">
                <h2>⚠ No Country Selected</h2>
                <p>You must search and select a country first.</p>
                <button onClick={() => navigate("/search")} className="back-button">
                ← Go to Search
                </button>
            </div>
        );
    }

    if (loading) {
        return <p className="loading">Loading country details...</p>;
    }

    if (error) {
        return <p className="error-message">{error}</p>;
    }

    if (!country) {
        return <p className="error-message">Country not found.</p>;
    }

    return (
        <div className="country-detail-container">
            <button onClick={() => navigate(-1)} className="back-button">← Back</button>
            <div className="country-detail">
                <h1>{country.name.common}</h1>
                <img src={country.flags.svg} alt={country.name.common} className="flag" />
                <p><strong>Capital:</strong> {country.capital ? country.capital[0] : "N/A"}</p>
                <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
                <p><strong>Area:</strong> {country.area.toLocaleString()} km²</p>
                <p><strong>Currency:</strong> {Object.values(country.currencies || {}).map(c => c.name).join(", ")}</p>
                <p><strong>Language:</strong> {Object.values(country.languages || {}).join(", ")}</p>
                <a href={country.maps.googleMaps} target="_blank" rel="noopener noreferrer" className="map-link">
                    View on Google Maps
                </a>
            </div>
        </div>
    );
};

export default CountryDetail;
