
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
    function time(date){
        var dateTime = new Date(date)
        console.log("The time the event will happen is: " + dateTime)
    }
    function place(where){
        console.log("The place of the event is: " + where)
    }
    return {time,place}
}

function DataType(dType, value){
    function type(){
        console.log("The data type is: " + dType)
    }
    function unit(){
        console.log("The data type unit is: " + value)
    }
    return{type,unit}
}

function Temperature(weatherData){

    let value = weatherData.value()
    function convertToF(){
        f = value * 9/5 + 32
        console.log("The temperature in Fahrenheit is" + f)
    }
    function convertToC(f){
        c = (f - 32) * 5/9
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
        inches == weatherData.value() * 25.4
        return console.log("The precipitation is: " + inches + " inches")
    }
    function convertToMm(){
        mm = weatherData.value()/25.4
        return console.log("The precipitation is: " + mm + " inches")
    }
    return Object.assign({}, weatherData, {precipitationType, convertToInches, convertToMm});
}

function Wind(weatherData){
    function direction(windDirection){
        console.log("The direction of the wind is " + windDirection)
    }
    function convertToMPH(){
        const ms = weatherData.value();
        mph = weatherData.value() * 2.2369
        console.log(ms + "meters per second = " + mph + "miles per hour")
    }
    function convertToMS(){
        const mph = weatherData.value();
        ms = weatherData.value()/2.2369
        console.log(mph + "miles per hour = " + ms + "meters per second")
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

