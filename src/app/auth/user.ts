export interface Roles {
    customer: boolean;
    contentManager: boolean;
    orderManager: boolean;
    clericalWorker: boolean  
}

export class User {
    email: string;
    nome:string
    papel: string;
    constructor(email: string, papel: string, nome: string) {
        this.email = email; this.nome=nome;
        this.papel = papel;
    }

    public static parseName(email: string) : string{
        let name = email.split('@')[0];
        return this.toTitleCase(name);
    }

    private static toTitleCase(str) {
        return str.replace(/\w\S*/g, function(txt){
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
}

