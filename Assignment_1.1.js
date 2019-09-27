function WeatherData(val, event, dataType) {

    function value() {
        return val;
    }

    function setValue(newValue) {
        val = newValue;
    }
    return Object.assign({}, event, dataType, {
        value,
        setValue
    });
}

function CloudCoverage(weatherData) {
    function coverage() {
        console.log("Cloud coverage is: " + weatherData.value() + "%");
    }
    return Object.assign({}, weatherData, {
        coverage
    })
}

function DateInterval(fromDate, toDate) {
    function from() {
        console.log("The starting date is: " + fromDate);
    }

    function to() {
        console.log("The ending date is: " + toDate);
    }

    function contains(date) {
        if (date > fromDate && date < toDate) {
            return true
        }
        return false;
    }
    return {
        from,
        to,
        contains
    }
}

function WeatherPrediction(fromValue, toValue, event, dataType) {
    function matches(weatherData) {
        if (weatherData.value() > fromValue && weatherData.value() < toValue) {
            console.log(weatherData.value() + " matches the interval prediction between " + fromValue + " and " + toValue)
        } else return false;
    }

    function from() {
        return fromValue;
    }

    function to() {
        return toValue;
    }
    return Object.assign({}, event, dataType, {
        matches,
        from,
        to
    })
}

function TemperaturePrediction(weatherPrediction) {
    function convertToF() {
        if (weatherPrediction.unit() !== "us") {
            weatherPrediction.setUnit("us")
            const tempFrom = weatherPrediction.from() * 9 / 5 + 32
            const tempTo = weatherPrediction.to() * 9 / 5 + 32
            console.log("The temperature prediction in Fahrenheit is between " + tempFrom + " and " + tempTo)
        } else console.log("Invalid unit type")
    }

    function convertToC() {
        if (weatherPrediction.unit() !== "international") {
            weatherPrediction.setUnit("international")
            const tempFrom = (weatherPrediction.from() - 32) * 5 / 9
            const tempTo = (weatherPrediction.to() - 32) * 5 / 9
            console.log("The temperature prediction in Celsius is between " + tempFrom + " and " + tempTo)
        } else console.log("Invalid unit type")
    }
    return Object.assign({}, weatherPrediction, {
        convertToF,
        convertToC
    })
}

function PrecipitationPrediction(weatherPrediction, pTypes) {

    function types() {
        return pTypes
    }

    function matches(data) {
        return weatherPrediction.matches(data.value())
    }

    function convertToInches() {
        if (weatherPrediction.unit() !== "us") {
            weatherPrediction.setUnit("us")
            const inchesFrom = weatherPrediction.from() / 25.4
            const inchesTo = weatherPrediction.to() / 25.4
            console.log("The precipitation prediction in inches is " + inchesFrom + " and " + inchesTo)
        } else {
            console.log("Invalid unit type")
        }
    }

    function convertToMM() {
        if (weatherPrediction.unit() !== "international") {
            weatherPrediction.setUnit("international")
            const mmFrom = weatherPrediction.from() * 25.4
            const mmTo = weatherPrediction.to() * 25.4
            console.log("The precipitation prediction in mm is " + mmFrom + " and " + mmTo)
        } else {
            console.log("Invalid unit type")
        }
    }
    return Object.assign({}, weatherPrediction, {
        types,
        matches,
        convertToInches,
        convertToMM
    })
}

function WindPrediction(wDirections, weatherPrediction) {

    function directions() {
        return wDirections
    }

    function matches() {
        return weatherPrediction.matches(data.value())
    }

    function convertToMPH() {
        if (weatherPrediction.unit() !== "us") {
            weatherPrediction.setUnit("us")
            const mphFrom = weatherPrediction.from() * 2.2369
            const mphTo = weatherPrediction.to() * 2.2369
            console.log("The wind speed prediction in mph is " + mphFrom + " and " + mphTo)
        } else {
            console.log("Invalid unit type")
        }
    }

    function convertToMS() {
        if (weatherPrediction.unit() !== "international") {
            weatherPrediction.setUnit("international")
            const msFrom = weatherPrediction.from() / 2.2369
            const msTo = weatherPrediction.to() / 2.2369
            console.log("The wind speed prediction in ms is " + msFrom + " and " + msTo)
        } else {
            console.log("Invalid unit type")
        }
    }
    return Object.assign({}, weatherPrediction, {
        directions,
        matches,
        convertToMPH,
        convertToMS
    })
}

function CloudCoveragePrediction(weatherPrediction) {
    function coverage() {
        console.log("Cloud coverage is: " + data.value() + "%" + ", and the prediction was from: " + weatherPrediction.from() + "%" + ", to: " + weatherPrediction.to() + "%");
    }
    return Object.assign({}, weatherPrediction, {
        coverage
    })
}

function WeatherHistory() {

    let currentData = null;
    let currentPlace = null;
    let currentType = null;
    let currentPeriod = null;
    const namesOfMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return {
        WeatherReport: function () {
            currentData.forEach(d => {
                const date = d.time();

                console.log("On the date " + date.getDate() + " of the " + namesOfMonths[date.getMonth()] + " following data was measured: " + d.type() + " with value of " + d.value() + " in the " + d.unit() + " units.");
            });
        },
        getCurrentPlace: function () {
            return currentPlace;
        },
        setCurrentPlace: function (newPlace) {
            currentPlace = newPlace;
        },
        clearCurrentPlace: function () {
            currentPlace = null;
        },
        getCurrentType: function () {
            return currentType;
        },
        setCurrentType: function (newType) {
            currentType = newType;
        },
        clearCurrentType: function () {
            currentType = null;
        },
        getCurrentPeriod: function () {
            return currentPeriod;
        },
        setCurrentPeriod: function (newPeriod) {
            currentPeriod = newPeriod;
        },
        clearCurrentPeriod: function () {
            currentPeriod = null;
        },
        convertToUSUnits: function () {
            currentData.forEach(d => {
                if (d.unit() !== "us")
                    d.setUnit("us");
                switch (d.type()) {
                    case "temperature":
                        d.convertToF();
                        break;
                    case "precipitation":
                        d.convertToInches();
                        break;
                    case "wind":
                        d.convertToMPH();
                }
            });
        },
        convertToInternationalUnits: function () {
            currentData.forEach(d => {
                if (d.unit() !== "international")
                    d.setUnit("international");
                switch (d.type()) {
                    case "temperature":
                        d.convertToC();
                        break;
                    case "precipitation":
                        d.convertToMm();
                        break;
                    case "wind":
                        d.convertToMS();
                }
            })
        },
        add: function (data) {
            if (currentData === null) {
                currentData = data;
            } else {
                currentData = Array.concat(currentData, data);
            }
        },
        data: function () {
            let result = null;
            if (currentPlace !== null) {
                result = currentData.filter(d => d.place() === currentPlace);
            }
            if (currentType !== null && result !== null) {
                result = result.filter(d => d.type() === currentType);
            } else if (currentType !== null) {
                result = currentData.filter(d => d.type() === currentType);
            }
            if (currentPeriod !== null && result !== null) {
                result = result.map(d => {
                    if (currentPeriod.contains(d.time())) {
                        return d;
                    }
                });
            } else if (currentPeriod !== null) {
                result = currentData.filter(d => {
                    if (currentPeriod.contains(d.time())) {
                        return d;
                    }
                });
            }
            if (result === null) {
                result = currentData;
            }
            result.forEach(d => {
                console.log(d.time() + " " + d.type() + " " + d.value());
            });
        }
    }
}

function WeatherForecast() {
    let currentData = null
    let currentPlace = null
    let currentType = null
    let currentPeriod = null
    const namesOfMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return {
        weatherForecast: function () {
            currentData.forEach(d => {
                const date = d.time();

                console.log("For " + date.getDate() + " of " + namesOfMonths[date.getMonth()] + " is predicted that " + d.type() + " will be with the value of " + d.from() + " to " + d.to() + " in the " + d.unit() + " units")
            });
        },
        getCurrentPlace: function () {
            return currentPlace;
        },
        setCurrentPlace: function (newPlace) {
            currentPlace = newPlace;
        },
        clearCurrentPlace: function () {
            currentPlace = null;
        },
        getCurrentType: function () {
            return currentType;
        },
        setCurrentType: function (newType) {
            currentType = newType;
        },
        clearCurrentType: function () {
            currentType = null;
        },
        getCurrentPeriod: function () {
            return currentPeriod;
        },
        setCurrentPeriod: function (newPeriod) {
            currentPeriod = newPeriod;
        },
        clearCurrentPeriod: function () {
            currentPeriod = null;
        },
        convertToUSUnits: function () {
            currentData.forEach(d => {
                if (d.unit() !== "us")
                    d.setUnit("us");
                switch (d.type()) {
                    case "temperature":
                        d.convertToF();
                        break;
                    case "precipitation":
                        d.convertToInches();
                        break;
                    case "wind":
                        d.convertToMPH();
                }
            });
        },
        convertToInternationalUnits: function () {
            currentData.forEach(d => {
                if (d.unit() !== "international")
                    d.setUnit("international");
                switch (d.type()) {
                    case "temperature":
                        d.convertToC();
                        break;
                    case "precipitation":
                        d.convertToMm();
                        break;
                    case "wind":
                        d.convertToMS();
                }
            })
        },
        add: function (data) {
            if (currentData === null) {
                currentData = data;
            } else {
                currentData = Array.concat(currentData, data);
            }
        },
        data: function () {
            let result = null;
            if (currentPlace !== null) {
                result = currentData.filter(d => d.place() === currentPlace);
            }
            if (currentType !== null && result !== null) {
                result = result.filter(d => d.type() === currentType);
            } else if (currentType !== null) {
                result = currentData.filter(d => d.type() === currentType);
            }
            if (currentPeriod !== null && result !== null) {
                result = result.map(d => {
                    if (currentPeriod.contains(d.time())) {
                        return d;
                    }
                });
            } else if (currentPeriod !== null) {
                result = currentData.filter(d => {
                    if (currentPeriod.contains(d.time())) {
                        return d;
                    }
                });
            }
            if (result === null) {
                result = currentData;
            }
            result.forEach(d => {
                console.log(d.time() + " " + d.type() + " ");
            });
        }
    }
}

function Event(date, placeValue) {
    function time() {
        return date;
    }

    function place() {
        return placeValue;
    }
    return {
        time,
        place
    }
}

function DataType(dType, unitValue) {
    function type() {
        return dType
    }

    function unit() {
        return unitValue
    }

    function setUnit(newUnit) {
        uType = newUnit;
    }
    return {
        type,
        unit,
        setUnit
    };
}

function Temperature(weatherData) {

    function convertToF() {
        weatherData.setUnit("us");
        const f = weatherData.value() * 9 / 5 + 32;
        weatherData.setValue(f);
        //else console.log("Invalid unit type")
    }

    function convertToC() {
        weatherData.setUnit("international");
        const c = (weatherData.value() - 32) * 5 / 9;
        weatherData.setValue(c);
        //else console.log("Invalid unit type")
    }
    return Object.assign({}, weatherData, {
        convertToF,
        convertToC
    })
}

function Precipitation(weatherData, perType) {

    function precipitationType() {
        console.log("The precipitation type is: " + perType);
    }

    function convertToInches() {
        weatherData.setUnit("us");
        const inches = weatherData.value() * 25.4;
        weatherData.setValue(inches);
    }

    function convertToMm() {
        weatherData.setUnit("international");
        const mm = weatherData.value() / 25.4;
        weatherData.setValue(mm);
    }
    return Object.assign({}, weatherData, {
        precipitationType,
        convertToInches,
        convertToMm
    });
}

function Wind(weatherData, windDirection) {
    function direction() {
        console.log("The direction of the wind is " + windDirection)
    }

    function convertToMPH() {
        weatherData.setUnit("us");
        const mph = weatherData.value() * 2.2369;
        weatherData.setValue(mph);
        //console.log(ms + "meters per second = " + mph + "miles per hour")
    }

    function convertToMS() {
        weatherData.setUnit("international");
        const ms = weatherData.value() / 2.2369;
        weatherData.setValue(ms);
        //console.log(mph + "miles per hour = " + ms + "meters per second")
    }
    return Object.assign({}, weatherData, {
        direction,
        convertToMPH,
        convertToMS
    });
}