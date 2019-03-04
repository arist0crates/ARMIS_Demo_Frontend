export class Fatura {
    public id:number;
    
    public clienteNome:string;

    public dataFatura:string;

    public dataVencimento:string;

    public valor:number;

    public fornecedor:string;
    
    public estado:string;
    
    constructor(id:number,clienteNome:string,dataFatura:string,dataVencimento:string,valor:number,fornecedor:string,estado:string) {
      this.id=id;
      this.clienteNome=clienteNome;
      this.dataFatura=dataFatura;
      this.dataVencimento=dataVencimento;
      this.valor=valor;
      this.fornecedor=fornecedor; 
      this.estado=estado;
    }
  }