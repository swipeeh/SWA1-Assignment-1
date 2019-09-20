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
    convertToF(F,C) { return "Convertion C to F" + (C*1.8)+32}
    convertToC(F,C) { return "Convertion F to C" + (F-32)/1.8 }
}
class Precipitation extends WeatherData{
    constructor(value,ptype,mm,inch){
        super(value)
        this.ptype = ptype
        this.mm = mm 
        this.inch = inch
    }
    precipitationType(ptype){
        this.ptype = ptype
    }
    converToInches(mm){
        return "Convertion mm to inches"+ mm*0.039370
    }
    convertToMm(inch){
        return "Convertion inches to mm" + inch*25.4
    }
}
class Wind extends WeatherData{
    constructor(value,N,W,S,E){
        super(value)
        this.N = N
        this.W = W
        this.S = S
        this.E = E  
    }
    direction(N,W,S,E){
        this.N = N
        this.W = W
        this.S = S
        this.E = E
    }
    convertToMPH(km){
        return "Convention KM to MPH"+ km*0.6213711922
    }
    convertToMS(MPH){
        return "Convention MPH to MS" + MPH/2.2369
    }
}
class CloudCoverage extends WeatherData {
    constructor(value){
        super(value)
    }
}

//WeatherPrediction Inharitance
class WeatherPrediction extends DataType , Event{
    matches(data){
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
//super classes for weatherdata and weatherprediction
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