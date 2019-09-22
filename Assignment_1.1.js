
function WeatherData (val, event, dataType) {

    function value() {
        return val;
    }
    function setValue(newValue) {
        val = newValue;
    }
    return Object.assign({}, event, dataType, {value, setValue});
}

function CloudCoverage (weatherData) {
    function coverage() {
        console.log("Cloud coverage is: " + weatherData.value() + "%") ;
    }
    return Object.assign({}, weatherData, {coverage})
}

function DateInterval(fromDate, toDate) {
    function from () {
        console.log("The starting date is: " + fromDate);
    }
    function to() {
        console.log("The ending date is: " + toDate);
    }
    function contains(date) {
        if (date > fromDate && date < toDate ) {
            return true
        }
        return false;
    }
    return {from, to, contains}
};

function WeatherPrediction(fromValue, toValue, event, dataType){
    function matches(weatherData){
        if(weatherData.value() > fromValue && weatherData.value() < toValue){
            console.log(weatherData.value() + " matches the interval prediction between " + fromValue + " and " + toValue)
        }
        else return false;
    }
    function from(){
        return fromValue;
    }
    function to(){
        return toValue;
    }
    return Object.assign({}, event, dataType, {matches, from, to})
};

function TemperaturePrediction(weatherPrediction) {
    function convertToF(){
        if(weatherPrediction.unit() != "us"){
            weatherPrediction.setUnit("us")
        tempFrom = weatherPrediction.from() * 9/5 + 32
        tempTo = weatherPrediction.to() * 9/5 + 32
        console.log("The temperature prediction in Fahrenheit is between " + tempFrom + " and " + tempTo)
    }
        else console.log("Invalid unit type")
    }
    function convertToC(){
        if(weatherPrediction.unit() != "international"){
        weatherPrediction.setUnit("international")
        tempFrom = (weatherPrediction.from() - 32) * 5/9
        tempTo = (weatherPrediction.to() - 32) * 5/9
        console.log("The temperature prediction in Celsius is between " + tempFrom + " and " + tempTo)
        }
        else console.log("Invalid unit type")
    }
    return Object.assign({},weatherPrediction, {convertToF, convertToC})
};

function PrecipitationPrediction(weatherPrediction, pTypes) {

    function types(){
        return pTypes
    }

    function matches(){
        return weatherPrediction.matches(data.value())
    }
    function convertToInches(){
        if(weatherPrediction.unit() != "us"){
            weatherPrediction.setUnit("us")
            inchesFrom = weatherPrediction.from() / 25.4
            inchesTo = weatherPrediction.to() / 25.4
            console.log("The precipitation prediction in inches is " + inchesFrom + " and " + inchesTo)
        }
        else { console.log("Invalid unit type")}
    }
    function convertToMM(){
        if(weatherPrediction.unit() != "international"){
            weatherPrediction.setUnit("international")
            mmFrom = weatherPrediction.from() * 25.4
            mmTo = weatherPrediction.to() * 25.4
            console.log("The precipitation prediction in mm is " + inchesFrom + " and " + inchesTo)
        }
        else { console.log("Invalid unit type")}
    }
    return Object.assign({}, weatherPrediction,{types, matches, convertToInches, convertToMM})
};

function WindPrediction(wDirections , weatherPrediction) {

    function directions(){
        return wDirections
    }

    function matches(){
        return weatherPrediction.matches(data.value())
    }
    function convertToMPH(){
        if(weatherPrediction.unit() != "us"){
            weatherPrediction.setUnit("us")
            mphFrom = weatherPrediction.from() * 2.2369
            mphTo = weatherPrediction.to() * 2.2369
            console.log("The wind speed prediction in mph is " + mphFrom + " and " + mphTo)
        }
        else { console.log("Invalid unit type")}
    }

    function convertToMS(){
        if(weatherPrediction.unit() != "international"){
            weatherPrediction.setUnit("international")
            msFrom = weatherPrediction.from() / 2.2369
            msTo = weatherPrediction.to() / 2.2369
            console.log("The wind speed prediction in ms is " + msFrom + " and " + msTo)
        }
        else { console.log("Invalid unit type")}
    }
    return Object.assign({}, weatherPrediction,{directions, matches, convertToMPH, convertToMS})
};

function CloudCoveragePrediction (weatherPrediction) {
    function coverage() {
        console.log("Cloud coverage is: " + data.value() + "%" + ", and the prediction was from: " + weatherPrediction.from()+ "%" + ", to: " + weatherPrediction.to() + "%");
    }
    return Object.assign({}, weatherPrediction, {coverage})
};

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
                if(d.unit() !== "us")
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
                if(d.unit() !== "international")
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
            if(currentData === null) {
                currentData = data;
            }
            else {
                currentData = Array.concat(currentData, data);
            }
        },
        data: function () {
            let result  = null;
            if(currentPlace !== null){
                result = currentData.filter(d => d.place() === currentPlace);
            }
            if(currentType !== null && result !== null) {
                result = result.filter(d => d.type() === currentType);
            }
            else if(currentType !== null) {
                result = currentData.filter(d => d.type() === currentType);
            }
            if(currentPeriod !== null && result !== null) {
                result = result.map(d => {
                    if(currentPeriod.contains(d.time())){
                        return d;
                    }
                });
            }
            else if(currentPeriod !== null) {
                result = currentData.filter(d => {
                    if(currentPeriod.contains(d.time())){
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
                if(d.unit() !== "us")
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
                if(d.unit() !== "international")
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
            if(currentData === null) {
                currentData = data;
            }
            else {
                currentData = Array.concat(currentData, data);
            }
        },
        data: function () {
            let result  = null;
            if(currentPlace !== null){
                result = currentData.filter(d => d.place() === currentPlace);
            }
            if(currentType !== null && result !== null) {
                result = result.filter(d => d.type() === currentType);
            }
            else if(currentType !== null) {
                result = currentData.filter(d => d.type() === currentType);
            }
            if(currentPeriod !== null && result !== null) {
                result = result.map(d => {
                    if(currentPeriod.contains(d.time())){
                        return d;
                    }
                });
            }
            else if(currentPeriod !== null) {
                result = currentData.filter(d => {
                    if(currentPeriod.contains(d.time())){
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
    }}

function Event(date, placeValue){
    function time(){
        return date;
    }
    function place(){
        return placeValue;
    }
    return {time,place}
}

function DataType(dType, unitValue){
    function type(){
        return dType
    }
    function unit(){
        return unitValue
    }
    function setUnit(newUnit){
        uType = newUnit;
    }
    return{type, unit, setUnit};
}

function Temperature(weatherData){

    function convertToF(){
        weatherData.setUnit("us");
        const f = weatherData.value() * 9/5 + 32;
        weatherData.setValue(f);
        //else console.log("Invalid unit type")
    }
    function convertToC(){
        weatherData.setUnit("international");
        const c = (weatherData.value() - 32) * 5/9;
        weatherData.setValue(c);
        //else console.log("Invalid unit type")
    }
    return Object.assign({},weatherData, {convertToF, convertToC})
}

function Precipitation(weatherData, perType){

    function precipitationType(){
        console.log("The precipitation type is: " + perType);
    }
    function convertToInches(){
        weatherData.setUnit("us");
        const inches = weatherData.value() * 25.4;
        weatherData.setValue(inches);
    }
    function convertToMm(){
        weatherData.setUnit("international");
        const mm = weatherData.value()/25.4;
        weatherData.setValue(mm);
    }
    return Object.assign({}, weatherData, {precipitationType, convertToInches, convertToMm});
}

function Wind(weatherData, windDirection){
    function direction(){
        console.log("The direction of the wind is " + windDirection)
    }
    function convertToMPH(){
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
    return Object.assign({}, weatherData, {direction, convertToMPH, convertToMS});
}

/*
let event = Event();
let dataType = DataType();

let a = WeatherData(50, event, dataType);
let temp = Temperature(a);
temp.convertToF();

let from = new Date("1-1-2000");
let to = new Date("3-1-2000");
let date = new Date("2-1-2000");

let aaa = DateInterval(from, to);
console.log(aaa.contains(date));
*/

let from = new Date("1-1-2000");
let to = new Date("1-3-2000");
let interval = DateInterval(from, to);
let date = new Date("1-2-2000");
let event = Event(date,"horsens");
let dataType = DataType("temperature", "international");
let dataType2 = DataType("wind", "international");
let dataType3 = DataType("precipitation", "international");
let weather = WeatherData(30, event, dataType);
let weather2 = WeatherData(40, event, dataType2);
let weather3 = WeatherData(80, event, dataType3);
let temp = Temperature(weather);
let wind = Wind(weather2, "south");
let preci = Precipitation(weather3);

//temp.convertToC();
//temp.convertToF();
//console.log(temp);

let fin = WeatherHistory("bratislava", "temperature", interval);
fin.add([temp,wind,preci]);
//fin.setCurrentPlace("horsens");
//fin.setCurrentType("temperature");
fin.setCurrentPeriod(interval);
fin.data();
fin.convertToUSUnits();
fin.convertToInternationalUnits();
fin.WeatherReport();


let from1 = new Date("09-21-2019")
let to1 = new Date("09-23-2019")
let interval1 = DateInterval(from1, to1)
let date1 = new Date("09-22-2019")
let event1 = Event(date1, "Pernik")
let dType = DataType("temperature", "international")
let dType1 = DataType("wind", "international")
let dType2 = DataType("precipitation", "international")
let w = WeatherPrediction(25,35, event1, dType)
let w1 = WeatherPrediction(35,45, event1, dType1)
let w2 = WeatherPrediction(75,85, event1, dType2)
let temperature = TemperaturePrediction(w)
let wnd = WindPrediction(["N", "NW", "NE"], w1)
let prec = PrecipitationPrediction(w2, ["rain", "snow", "muddy"])
let forecast = WeatherForecast("pernik", "temperature", interval1)



forecast.add([temperature,wnd,prec])
forecast.setCurrentPeriod(interval1)
forecast.data()
forecast.weatherForecast()
forecast.convertToUSUnits()
w.matches(weather)