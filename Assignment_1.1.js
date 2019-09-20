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

function WeatherData(){
    function value(number){
        return number;
    }
    return {value}
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