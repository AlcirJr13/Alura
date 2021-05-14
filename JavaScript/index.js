import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta";

const cliente1 = new Cliente("Ricardo", 11122233309);
const ContaCorrenteRicardo = new Conta(cliente1, 1001);
ContaCorrenteRicardo.deposito(500);
ContaCorrenteRicardo.sacar(100);

const contaPoupanca = new Conta(50, cliente1, 1001);

console.log(contaPoupanca);
console.log(ContaCorrenteRicardo);
