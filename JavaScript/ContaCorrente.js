import { Cliente } from "./cliente.js";

export class ContaCorrente {
  static numeroDeContas = 0;

  set Cliente(novoValor) {
    if (novoValor instanceof Cliente) this._cliente = novoValor;
  }

  get Cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }

  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
  }

  deposito(valor) {
    if (valor <= 0) {
      return;
    }

    this._saldo += valor;
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.deposito(valorSacado);
  }

  constructor(cliente, agencia) {
    this.agencia = agencia;
    this.cliente = cliente;
    this._saldo = 0;
    ContaCorrente.numeroDeContas += 1;
  }
}
