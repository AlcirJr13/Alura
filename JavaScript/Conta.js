export class Conta {
  constructor(saldoInicial, cliente, agencia) {
    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
  }

  get saldo() {
    return this._saldo;
  }

  sacar(valor) {
    taxa = 1.1 * valor;
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
