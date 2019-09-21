
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

function WeatherPrediction(fromValue, toValue, weatherData, event, dataType){
    function matches(){
        if(weatherData.value() > fromValue && weatherData.value() < toValue){
            return true;
        }
        else return false;
    }
    function from(){
        return fromValue;
    }
    function to(){
        return toValue;
    }
    return Object.assign({}, weatherData, event, dataType, {matches, from, to})
};

function TemperaturePrediction(weatherPrediction) {
    let data = weatherPrediction.weatherData()
    let type = weatherPrediction.dataType()
    let event = weatherPrediction.event()

    function convertToF(){
        if(weatherPrediction.matches(value) && type.unit == 'F'){
        f = data.value() * 9/5 + 32
        console.log("The temperature in Fahrenheit is" + f)
    }
        else console.log("Invalid unit type or no value provided for conversion")
    }
    function convertToC(){
        if(weatherPrediction.matches(value) && type.unit == 'C'){
        c = (f - 32) * 5/9
        console.log("The temperature in Celsius is" + c)
        }
        else console.log("Invalid unit type or no value provided for conversion")
    }
    return Object.assign({},weatherData,weatherPrediction, {convertToF, convertToC})
};

function PrecipitationPrediction(weatherPrediction) {
    let data = weatherPrediction.weatherData()
    let type = weatherPrediction.dataType()
    let event = weatherPrediction.event()
};

function WindPrediction() {
    let data = weatherPrediction.weatherData()
    let type = weatherPrediction.dataType()
    let event = weatherPrediction.event()
};

function CloudCoveragePrediction (weatherPrediction) {
    let data = weatherPrediction.weatherData()
    function coverage() {
        console.log("Cloud coverage is: " + data.value() + "%" + ", and the prediction was from: " + weatherPrediction.from()+ "%" + ", to: " + weatherPrediction.to() + "%");
    }
    return Object.assign({}, weatherData, {coverage})
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

function Event(){
    function time(date, eventPlace){
        let dateTime = new Date(date)
        return dateTime
    }
    function place(where){
        return eventPlace
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

    let value = weatherData.value();
    function convertToF(){
        weatherData.setUnit("us");
        f = value * 9/5 + 32;
        console.log("The temperature in Fahrenheit is" + f)
        //else console.log("Invalid unit type")
    }
    function convertToC(){
        weatherData.setUnit("international");
        c = (value - 32) * 5/9;
        console.log("The temperature in Celsius is" + c)
        //else console.log("Invalid unit type")
    }
    return Object.assign({},weatherData, {convertToF, convertToC})
}

function Precipitation(weatherData){

    function precipitationType(){
        let type = weatherData.type();
        console.log("The precipitation type is: " + type)
    }
    function convertToInches(){
        weatherData.setUnit("us");
        inches == weatherData.value() * 25.4
        console.log("The precipitation is: " + inches + " inches")
    }
    function convertToMm(){
        weatherData.setUnit("international");
        mm = weatherData.value()/25.4
        console.log("The precipitation is: " + mm + " inches")
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
    }
    function convertToMS(){
        weatherData.setUnit("international");
        const mph = weatherData.value();
        ms = weatherData.value()/2.2369
        console.log(mph + "miles per hour = " + ms + "meters per second")
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