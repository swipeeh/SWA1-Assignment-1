//WeatherData Inharitance
class WeatherData{
    constructor(value){
        this.value = value
    }
}

class Temperature extends WeatherData{
    constructor(value,F,C){
        super(value)
        this.F = F
        this.C = C
    }
    convertToF(){
        this.setUnit("us");
        const f = this.value() * 9/5 + 32;
        this.setValue(f);
    }
    convertToC(){
        this.setUnit("international");
        const c = (this.value() - 32) * 5/9;
        this.setValue(c);
    }
}

class Precipitation extends WeatherData{
    constructor(value,ptype,mm,inch){
        super(value)
        this.ptype = ptype
        this.mm = mm 
        this.inch = inch
    }
    precipitationType(ptype){this.ptype = ptype}
    convertToInches(){
        this.setUnit("us");
        const inches = this.value() * 25.4;
        this.setValue(inches);
    }
    convertToMm(){
        this.setUnit("international");
        const mm = this.value()/25.4;
        this.setValue(mm);
    }
}

class Wind extends WeatherData{
    constructor(value,N,W,S,E,km,MPH){
        super(value)
        this.N = N
        this.W = W
        this.S = S
        this.E = E  
        this.km = km
        this.MPH = MPH
    }
    direction(N,W,S,E){
        this.N = N
        this.W = W
        this.S = S
        this.E = E
    }
    convertToMPH(){
        this.setUnit("us");
        const mph = this.value() * 2.2369;
        this.setValue(mph);
    }
    convertToMS() {
        this.setUnit("international");
        const ms = this.value() / 2.2369;
        this.setValue(ms);
    }
}

class CloudCoverage extends WeatherData {
    constructor(value){super(value)}
    getCoverage() {
        return value;
    }
}

//WeatherPrediction Inharitance
class WeatherPrediction extends DataType , Event{
    matches(data){return this.data}
}

class TemperaturePrediction extends WeatherPrediction{
    //Questionable
    constructor(C) {
        super()
        this.C = C}
    getPrediction() {return this.C}
    setPrediction(C) {this.C = C}
}

class PrecipitationPrediction extends WeatherPrediction{
    constructor(value,type,mm,inch){
        super()
        this.type = type 
        this.mm = mm
        this.inch = inch
    }
    types() {return this.type}
    matches(data) {this.data = data}
    converToInches(mm){return "Convertion mm to inches"+ mm*0.039370}
    convertToMm(inch){return "Convertion inches to mm" + inch*25.4}
}

class WindPrediction extends WeatherPrediction{
    constructor(value,data,N,W,S,E,km,MPH){
        super(value)
        this.data = data
        this.N = N
        this.W = W
        this.S = S
        this.E = E  
        this.km = km
        this.MPH = MPH
    }
    direction(N,W,S,E){
        this.N = N
        this.W = W
        this.S = S
        this.E = E
    }
    matches (data) {this.data = data}
    convertToMPH(km){return "Convention KM to MPH"+ km*0.6213711922}
    convertToMS(MPH){return "Convention MPH to MS" + MPH/2.2369}
}

class CloudCoveragePrediction extends WeatherPrediction{
    constructor(value){super(value)}
}

//WeatherFOrecast Class
class WeatherForecast{
    constructor(){
        this.currentData = null;
        this.place = null;
        this.type = null;
        this.period = null;
    }
    WeatherReport(data) {this.data = data}
    getCurrentPlace() {return this.place}
    setCurrentPlace(place) {this.place = place}
    clearCurrentPlace() {this.place = null}
    getCurrentType() {return this.type}
    setCurrentType(type) {this.type = type}
    clearCurrentType() {this.type = null}
    getCurrentPeriod() {return this.period}
    setCurrentPeriod(newPeriod) {this.period = newPeriod}
    clearCurrentPeriod() {this.period = null}
    convertToUSUnits() {
        this.currentData.forEach(d => {
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
    }
    convertToInternationalUnits() {
        this.currentData.forEach(d => {
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
    }
    data() {

    }
}

//WeatherHistory
class WeatherHistory{
    constructor() {
        this.currentData = null;
        this.currentPlace = null;
        this.currentType = null;
        this.currentPeriod = null;
        this.namesOfMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    }

    WeatherReport() {
        this.currentData.forEach(d => {
            const date = d.time();

            console.log("On the date " + date.getDate() + " of the " + this.namesOfMonths[date.getMonth()] + " following data was measured: " + d.type() + " with value of " + d.value() + " in the " + d.unit() + " units.");
        });
    }
    getCurrentPlace() {
        return this.currentPlace;
    }
    setCurrentPlace(newPlace) {
        this.currentPlace = newPlace;
    }
    clearCurrentPlace() {
        this.currentPlace = null;
    }
    getCurrentType() {
        return this.currentType;
    }
    setCurrentType(newType) {
        this.currentType = newType;
    }
    clearCurrentType() {
        this.currentType = null;
    }
    getCurrentPeriod() {
        return this.currentPeriod;
    }
    setCurrentPeriod(newPeriod) {
        this.currentPeriod = newPeriod;
    }
    clearCurrentPeriod() {
        this.currentPeriod = null;
    }
    convertToUSUnits() {
        this.currentData.forEach(d => {
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
    }
    convertToInternationalUnits() {
        this.currentData.forEach(d => {
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
    }
    add(data) {
        if(this.currentData === null) {
            this.currentData = data;
        }
        else {
            this.currentData = Array.concat(this.currentData, data);
        }
    }
    data() {
        let result  = null;
        if(this.currentPlace !== null){
            result = this.currentData.filter(d => d.place() === this.currentPlace);
        }
        if(this.currentType !== null && result !== null) {
            result = result.filter(d => d.type() === this.currentType);
        }
        else if(this.currentType !== null) {
            result = this.currentData.filter(d => d.type() === this.currentType);
        }
        if(this.currentPeriod !== null && result !== null) {
            result = result.map(d => {
                if(this.currentPeriod.contains(d.time())){
                    return d;
                }
            });
        }
        else if(this.currentPeriod !== null) {
            result = this.currentData.filter(d => {
                if(this.currentPeriod.contains(d.time())){
                    return d;
                }
            });
        }
        if (result === null) {
            result = this.currentData;
        }
        result.forEach(d => {
            console.log(d.time() + " " + d.type() + " " + d.value());
        });
    }
}
//super classes for weatherdata and weatherprediction
class DataType{
    constructor(type, unit){
        this.type = type
        this.unit = unit
    }
    setTime(time){this.time = time}
    getTime(){return this.time}
    setUnit(unit){this.unit = unit}
    getUnit(){return this.unit}
}

class Event{
    constructor(time,place){
        this.time = time
        this.place = place
    }
    setTime(time){this.time = time}
    getTime(){return this.time}
    setPlace(place){this.place = place}
    getPlace(){return this.place}
}

class DateInterval {
    constructor(fromDate, toDate) {
        this.fromDate = fromDate
        this.toDate = toDate
    }

    from() {
        return this.fromDate
    }

    to() {
        return this.toDate
    }

    contains(date) {
        if (date > this.fromDate && date < this.toDate) {
            return true
        }
        return false;
    }
}