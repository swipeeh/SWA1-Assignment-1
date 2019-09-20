//WeatherData Inharitance
class WeatherData{
    constructor(value){
        this.value = value
    }
}
class Temperature extends WeatherData{
    convertToF(F,C) {this.F = (C*1.8)+32}
    convertToC(F,C) {this.C = (F-32)/1.8}
}
class Precipitation extends WeatherData{
    precipitationType(){}
}
class Wind extends WeatherData extends DataType , Event{
    direction(){}
}
class CloudCoverage extends WeatherData {

}

//WeatherPrediction Inharitance
class WeatherPrediction extends DataType , Event{
    matche(data){
        return this.data
    }
}
class temperaturePrediction extends WeatherPrediction{
    //Questionable
    constructor(C) {this.C = C}
    getPrediction() {return this.C}
    setPrediction(C) {this.C = C}
}
class PrecipitationPrediction extends WeatherPrediction{
    types() {}
    matches(data) {this.data = data}
}
class WindPrediction extends WeatherPrediction{
    directions(){}
    matches (data) {this.data = data}
}
class CloudCoveragePrediction extends WeatherPrediction{
    
}

//WeatherFOrecast Class
class WeatherForecast{
    constructor(place,type,period){
        this.place = place
        this.type = type
        this.period = period
    }
    WeatherReport(data) {this.data = data}
    getCurrentPlace() {return this.place}
    setCurrentPlace(place) {this.place = place}
    clearCurrentPlace() {this.place = ''}
    getCurrentType() {return this.type}
    setCurrentType(type) {this.type = type}
    clearCurrentType() {this.type = ''}
    getCurrentPeriod() {return this.period}
    setCurrentPeriod(period) {this.period = period}
    clearCurrentPeriod() {this.period = ' '}
}

class DataType{
    constructor(type, unit){
        this.type = type
        this.unit = unit
    }
}

class Event{
    constructor(time,place){
        this.time = time
        this.place = place
    }
}