export class Conta {
  constructor(saldoInicial, cliente, agencia) {
    if (this.constructor == Conta) {
      throw new Error(
        "Você não deveria instanciar um objeto do tipo Conta diretamente, pois está é uma classe abstrata."
      );
    }

    this._agencia = agencia;
    this._saldo = saldoInicial;
    this._cliente = cliente;
  }
  set Cliente(novoValor) {
    if (novoValor instanceof Cliente) this._cliente = novoValor;
  }

  get Cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }

  //Método abstrato
  sacar(valor) {
    throw new Error("O método Sacar da conta é abstrato.");
  }

  _sacar(valor, taxa) {
    const valorSacado = taxa * valor;
    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    }

    return 0;
  }

  deposito(valor) {
    this._saldo += valor;
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.deposito(valorSacado);
  }
}
