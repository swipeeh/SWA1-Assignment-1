
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
    return Object.assign({},weatherPrediction, {convertToF, convertToC})
};

function PrecipitationPrediction(weatherPrediction, pType) {
    let data = weatherPrediction.weatherData()
    let type = weatherPrediction.dataType()
    let event = weatherPrediction.event()

    function types(){
        return pType
    }

    function matches(){

    }
    function convertToInches(){
        if(type.unit() == "inches"){
            return data.value() / 25.4
        }
        else { console.log("Invalid unit type")}
    }
    function convertToMM(){
        if(type.unit() == "mm"){
            return data.value() * 25.4
        }
        else { console.log("Invalid unit type")}
    }
    return Object.assign({}, weatherPrediction,{types, matches, convertToInches, convertToMM})
};

function WindPrediction(wDirections , weatherPrediction) {
    let data = weatherPrediction.weatherData()
    let type = weatherPrediction.dataType()
    let event = weatherPrediction.event()

    function directions(){
        return wDirections
    }

    function matches(){

    }
    function convertToMPH(){
        if(type.unit() == "mph"){
            return data.value() * 2.2369
        }
        else { console.log("Invalid unit type")}
    }

    function convertToMS(){
        if(type.unit() == "ms"){
            return data.value() / 2.2369
        }
        else { console.log("Invalid unit type")}
    }
    return Object.assign({}, weatherPrediction,{directions, matches, convertToMPH, convertToMS})
};

function CloudCoveragePrediction (weatherPrediction) {
    let data = weatherPrediction.weatherData()
    function coverage() {
        console.log("Cloud coverage is: " + data.value() + "%" + ", and the prediction was from: " + weatherPrediction.from()+ "%" + ", to: " + weatherPrediction.to() + "%");
    }
    return Object.assign({}, weatherData, {coverage})
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
    return Object.assign({}, weatherData, {windDirection, convertToMPH, convertToMS});
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
//fin.data();
fin.convertToUSUnits();
fin.convertToInternationalUnits();
fin.WeatherReport();
