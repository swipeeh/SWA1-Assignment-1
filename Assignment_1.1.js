
const WeatherData = function () {
    const weatherData = Object.assign(Event(), DataType());
    weatherData.value = function () {

    }
};

const CloudCoverage = function () {

};

const DateInterval = function () {
    return {
        from: function () {

        },
        to: function () {

        },
        contains: function (d) {

        }
    }
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

function DataType(){
    function type(dType){
        console.log("The data type is: " + dType)
    }
    function unit(value){
        console.log("The data type unit is: " + value)
    }
    return{type,unit}
}

function Temperature(){
    function convertToF(c){
        f = c * 9/5 + 32
        return console.log("The temperature in Fahrenheit is" + f)
    }
    function convertToC(f){
        c = (f - 32) * 5/9
        return console.log("The temperature in Celsius is" + c)
    }
    return {convertToF, convertToC}
}

function Precipitation(){
    function precipitationType(type){
        return console.log("The precipitation type is: " + type)
    }
    function convertToInches(mm){
        inches == mm * 25.4
        return console.log("The precipitation is: " + inches + " inches")
    }
    function convertToMm(inches){
        mm = inches/25.4
        return console.log("The precipitation is: " + mm + " inches")
    }
    return {precipitationType, convertToInches, convertToMm}
}

function Wind(){
    function direction(windDirection){
        return console.log("The direction of the wind is " + windDirection)
    }
    function convertToMPH(ms){
        mph = ms * 2.2369
        return console.log(ms + "meters per second = " + mph + "miles per hour")
    }
    function convertToMS(mph){
        ms = mph/2.2369
        return console.log(mph + "miles per hour = " + ms + "meters per second")
    }
    return {direction, convertToMPH, convertToMS}
}