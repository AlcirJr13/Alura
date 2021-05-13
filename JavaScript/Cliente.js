export class Cliente {
  nome;
  _cpf;

  get cpf() {
    return this._cpf;
  }

  get nome() {
    return this.nome;
  }

  constructor(nome, cpf) {
    this.nome = nome;
    this._cpf = cpf;
  }
}
