import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
const ContaCorrenteRicardo = new ContaCorrente(cliente1, 1001);

const cliente2 = new Cliente("Alice", 44455566608);
const ContaCorrenteAlice = new ContaCorrente(cliente2, 1001);

console.log(ContaCorrente.numeroDeContas);
