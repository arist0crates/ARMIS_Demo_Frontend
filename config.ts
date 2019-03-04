export class Config{
    // fetchFaturasPendentes URL
    private static "fetchFaturasBaseURL" = "http://localhost:8080/api/faturas/";

    public static fetchFaturasPendentesURL = function (insertUser:string){
        return Config.fetchFaturasBaseURL + insertUser + "/pendentes"
    };
};