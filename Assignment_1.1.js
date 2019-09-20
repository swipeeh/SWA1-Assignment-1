
function WeatherData (val, event, dataType) {

    function value() {
        return val;
    }
    return Object.assign({}, event, dataType, {value});
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

const WeatherPrediction = function () {
    return {
        matches: function (data) {

        },
        to: function () {

        },
        from: function () {

        }
    }
};

const TemperaturePrediction = function () {
    return {
        convertToF: function () {

        },
        convertToC: function () {

        }
    }
};

const PrecipitationPrediction = function () {
    return {
        types: function () {

        },
        matches: function () {

        },
        converToInches: function () {

        },
        converToMM: function () {

        }
    }
};

const WindPrediction = function () {
    return {
        directions: function () {

        },
        matches: function () {

        },
        converToMPH: function () {

        },
        convertToMS: function () {

        }
    }
};

const CloudCoveragePrediction = function () {

};

function WeatherHistory(currentPlace, currentType, currentPeriod) {

    let currentData = null;

    return {
        WeatherReport: function () {
            const placeResult = currentData.filter(d => d.place() === currentPlace);
            const typeResult = placeResult.filter(d => d.type() === currentType);
            const periodResult = typeResult.map(d => {
                if(currentPeriod.contains(d.time())){
                    return d;
                }
            });
            periodResult.forEach(d => {
                console.log(d.value);
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
            return currentData;
        }
    }
}

function WeatherForecast() {
    return {
        WeatherReport: function (data) {

        },
        getCurrentPlace: function () {

        },
        setCurrentPlace: function (place) {

        },
        clearCurrentPlace: function () {

        },
        getCurrentType: function () {

        },
        setCurrentType: function () {

        },
        clearCurrentType: function () {

        },
        getCurrentPeriod: function () {

        },
        setCurrentPeriod: function () {

        },
        clearCurrentPeriod: function () {

        },
        convertToUSUnits: function () {

        },
        convertToInternationalUnits: function () {

        },
        add: function (data) {

        },
        data: function () {

        }
    }
}

function Event(date){
    function time(){
        return date;
    }
    function place(where){
        console.log("The place of the event is: " + where)
    }
    return {time,place}
}

function DataType(dType, uType){
    function type(){
        return dType;
    }
    function unit(){
        return uType;
    }
    function setUnit(newUnit){
        uType = newUnit;
    }
    return{type, unit, setUnit};
}

function Temperature(weatherData){

    let value = weatherData.value();
    function convertToF(){
        weatherData.setUnit("us");
        f = value * 9/5 + 32;
        console.log("The temperature in Fahrenheit is" + f)
    }
    function convertToC(){
        weatherData.setUnit("international");
        c = (value - 32) * 5/9;
        console.log("The temperature in Celsius is" + c)
    }
    return Object.assign({},weatherData, {convertToF, convertToC})
}

function Precipitation(weatherData){

    function precipitationType(){
        let type = weatherData.type();
        return console.log("The precipitation type is: " + type)
    }
    function convertToInches(){
        weatherData.setUnit("us");
        inches == weatherData.value() * 25.4
        return console.log("The precipitation is: " + inches + " inches")
    }
    function convertToMm(){
        weatherData.setUnit("international");
        mm = weatherData.value()/25.4
        return console.log("The precipitation is: " + mm + " inches")
    }
    return Object.assign({}, weatherData, {precipitationType, convertToInches, convertToMm});
}

function Wind(weatherData, windDirection){
    function direction(){
        console.log("The direction of the wind is " + windDirection)
    }
    function convertToMPH(){
        weatherData.setUnit("us");
        const ms = weatherData.value();
        mph = weatherData.value() * 2.2369
        console.log(ms + "meters per second = " + mph + "miles per hour")
    }
    function convertToMS(){
        weatherData.setUnit("international");
        const mph = weatherData.value();
        ms = weatherData.value()/2.2369
        console.log(mph + "miles per hour = " + ms + "meters per second")
    }
    return Object.assign({}, weatherData, {direction, convertToMPH, convertToMS})
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
let to = new Date("3-1-2000");
let interval = DateInterval(from, to);
let date = new Date("2-1-2000");
let event = Event(date);
let dataType = DataType("temperature", "international");
let weather = WeatherData(30, event, dataType);
let temp = Temperature(weather);

//temp.convertToC();
//temp.convertToF();
//console.log(temp);

let fin = WeatherHistory("bratislava", "temperature", interval);
fin.add([temp]);
fin.WeatherReport();