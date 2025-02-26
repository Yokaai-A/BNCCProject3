import React, { createContext, useState, useEffect } from "react";

export const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch("https://restcountries.com/v3.1/all");
                const data = await response.json();
                setCountries(data);
            } catch (error) {
                console.error("Error fetching country data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCountries();
    }, []);

    return (
        <CountryContext.Provider value={{ countries, loading }}>
            {children}
        </CountryContext.Provider>
    );
};
