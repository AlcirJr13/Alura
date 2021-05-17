export class Cliente {
  get cpf() {
    return this._cpf;
  }

  get nome() {
    return this._nome;
  }

  constructor(nome, cpf, senha) {
    this._nome = nome;
    this._cpf = cpf;
    this._senha = senha;
  }

  autenticar() {
    return true;
  }
}
