//WeatherData Inharitance
class WeatherData{
    
}
class Temperature extends WeatherData{
    convertToF(F,C) {this.F = (C*1.8)+32}
    convertToC(F,C) {this.C = (F-32)/1.8}
}
class Precipitation extends WeatherData{
    precipitationType(){}
}
class Wind extends WeatherData{
    direction(){}
}
class CloudCoverage extends WeatherData {

}

//WeatherPrediction Inharitance
class WeatherPrediction{
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