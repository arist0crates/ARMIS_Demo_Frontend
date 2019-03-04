export class Config{
    // fetchFaturasPendentes URL
    private static "fetchFaturasBaseURL" = "http://localhost:8080/api/faturas/";

    public static fetchFaturasPendentesByInsertUserURL = function (insertUser:string){
        return Config.fetchFaturasBaseURL + insertUser + "/pendentes"
    };

    public static fetchFaturasByInsertUserURL = function (insertUser:string){
        return Config.fetchFaturasBaseURL + insertUser
    };
};