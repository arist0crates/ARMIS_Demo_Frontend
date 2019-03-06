export interface Roles {
    customer: boolean;
    contentManager: boolean;
    orderManager: boolean;
    clericalWorker: boolean  
}

export class User {
    email: string;
    nome:string
    roles: Roles;
    papel: string;
    constructor(email, roles : Roles, nome) {
        this.email = email; this.roles = roles; this.nome=nome;
        this.papel = "Administrador";
    }
}

