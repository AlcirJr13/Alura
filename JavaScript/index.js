import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
const ContaCorrenteRicardo = new ContaCorrente();
ContaCorrenteRicardo.cliente = cliente1;
ContaCorrenteRicardo.agencia = 1001;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 44455566608;
const ContaCorrenteAlice = new ContaCorrente();
ContaCorrenteAlice.cliente = cliente2;
ContaCorrenteAlice.agencia = 1001;
