import React, { useState, useEffect } from "react";

function ContinentSouthAmerica() {
    const [casesContinent, setCasesContinent] = useState([]);
    const [nameContinent, setNameContinent] = useState([]);

    const confirmedNumberCases = () => {
        fetch("https://disease.sh/v3/covid-19/continents/south%20america", {
            method: "GET",
            mode: "cors"
        })
        .then((response) => response.json())
        .then((json) => setCasesContinent(json.cases))
        .catch((error) => console.log(error));
    };

    useEffect(() => confirmedNumberCases(), []);

    const nameContinentCases = () => {
        fetch("https://disease.sh/v3/covid-19/continents/south%20america", {
            method: "GET",
            mode: "cors"
        })
        .then((response) => response.json())
        .then((json) => setNameContinent(json.continent))
        .catch((error) => console.log(error));
    };

    useEffect(() => nameContinentCases(), []);

    return (
        <div className="data-continent">
            <h3>{casesContinent}</h3>
            <h3>{nameContinent}</h3>
        </div>
    );
}

export default ContinentSouthAmerica;