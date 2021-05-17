import { Cliente } from "./Cliente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaCorrente } from "./Contas/ContaCorrente.js";
import { ContaSalario } from "./ContaSalario.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
const ContaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
const ContaSalarioRicardo = new ContaSalario(cliente1, 1001);
ContaSalarioRicardo.deposito(5000);
ContaSalarioRicardo.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

console.log(contaPoupanca);
console.log(ContaCorrenteRicardo);
console.log(ContaSalarioRicardo);
