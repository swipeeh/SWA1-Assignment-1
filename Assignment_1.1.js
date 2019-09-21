
function WeatherData (val, event, dataType) {

    function value() {
        return val;
    }
    return Object.assign({}, event, dataType, {value});
};

function CloudCoverage (weatherData) {
    function coverage() {
        console.log("Cloud coverage is: " + weatherData.value() + "%") ;
    }
    return Object.assign({}, weatherData, {coverage})
};

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

const WeatherHistory = function () {
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
};

const WeatherForecast = function () {
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
};

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
    return{type,unit}
}

function Temperature(weatherData){
    function convertToF(){
        if(weatherData.unit() == 'F'){
        f = value * 9/5 + 32
        console.log("The temperature in Fahrenheit is" + f)
        }
        else console.log("Invalid unit type")
    }
    function convertToC(){
        if(weatherData.unit() == 'C'){
        c = (value - 32) * 5/9
        console.log("The temperature in Celsius is" + c)
        }
        else console.log("Invalid unit type")
    }
    return Object.assign({},weatherData, {convertToF, convertToC})
}

function Precipitation(weatherData){

    function precipitationType(){
        let type = weatherData.type();
        console.log("The precipitation type is: " + type)
    }
    function convertToInches(){
        if(weatherData.unit() == "inches"){
        inches == weatherData.value() * 25.4
        console.log("The precipitation is: " + inches + " inches")
        }
    }
    function convertToMm(){
        if(weatherData.unit == "mm"){
        mm = weatherData.value()/25.4
        console.log("The precipitation is: " + mm + " inches")
        }
    }
    return Object.assign({}, weatherData, {precipitationType, convertToInches, convertToMm});
}

function Wind(weatherData,windDirection){
    function direction(){
        console.log("The direction of the wind is " + windDirection)
    }
    function convertToMPH(){
        if(weatherData.unit == "mph"){
        mph = weatherData.value() * 2.2369
        console.log(ms + "meters per second = " + mph + "miles per hour")
        }
    }
    function convertToMS(){
        if(weatherData.unit == "ms"){
        ms = weatherData.value()/2.2369
        console.log(mph + "miles per hour = " + ms + "meters per second")
        }
    }
    return {direction, convertToMPH, convertToMS}
}

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

