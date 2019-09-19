function WeatherData(number){
    function value(){
        return number;
    }
    return {value}
}

function Temperature(f,c){
    function convertToF(){
        f = c * 9/5 + 32
        return console.log("The temperature in Fahrenheit is" + f)
    }
    function convertToC(){
        c = (f - 32) * 5/9
        return console.log("The temperature in Celsius is" + c)
    }
    return {convertToF, convertToC}
}

function Wind(windDirection, mph, ms){
    function direction(){
        return console.log("The direction of the wind is " + windDirection)
    }
    function convertToMPH(){
        mph = ms * 2.2369
        return console.log(ms + "meters per second = " + mph + "miles per hour")
    }
    function convertToMS(){
        ms = mph/2.2369
        return console.log(mph + "miles per hour = " + ms + "meters per second")
    }
}