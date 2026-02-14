import React, { useState } from "react";

const CountrySelector = () => {
    const countries = ["India", "USA", "Australia"];

    const countryData = {
        India: ["Andhra Pradesh", "Karnataka", "Tamil Nadu"],
          USA: ["California", "Texas", "New York"],
    Australia: ["New South Wales", "Victoria", "Queensland"],
    };

    const [country, setCountry] = useState("");
    const [state, setState] = useState("");

    const handleCountryChange = (e) => {
        setCountry(e.target.value);
        setState("");
    };

    const containerStyle = {
        width: "350px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        fontFamily: "Arial",
    };

    const titleStyle = {
        fontSize: "18px",
        fontWeight: "bold",
        marginBottom: "20px",
    };

    const labelStyle = {
        display: "block",
        marginBottom: "6px",
        fontWeight: "600",
    };

    const selectStyle = {
        width: "100%",
        padding: "8px",
        marginBottom: "15px",
    };

    return (
        <div style={containerStyle}>
            <div style={titleStyle}>Country & State Selector</div>

            <label style={labelStyle}>Country:</label>
            <select value={country} onChange={handleCountryChange} style={selectStyle}>
                <option value="">Select Country</option>
                {countries.map((countryName) => (
                    <option key={countryName} value={countryName}>
                        {countryName}
                    </option>
                ))}
            </select>

            <label style={labelStyle}>State:</label>
            <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                style={selectStyle}
                disabled={!country}
            >
                <option value="">
                    {country ? "Select State" : "Select Country First"}
                </option>

                {country &&
                    countryData[country].map((stateName) => (
                        <option key={stateName} value={stateName}>
                            {stateName}
                        </option>
                    ))}
            </select>
            {country && state && (
                <div style={{ marginTop: "15px", fontWeight: "600" }}>
                    <div>Country: {country}</div>
                    <div>State: {state}</div>
                </div>
            )}

        </div>
    );
}

export default CountrySelector;
