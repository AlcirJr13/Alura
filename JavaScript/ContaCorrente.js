import { Cliente } from "./cliente.js";

export class ContaCorrente {
  agencia;
  _cliente;

  set Cliente(novoValor) {
    if (novoValor instanceof Cliente) this._cliente = novoValor;
  }

  get Cliente() {
    return this._cliente;
  }

  _saldo = 0;

  get saldo() {
    return this.saldo;
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
}
