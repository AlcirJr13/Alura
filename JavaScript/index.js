import { Cliente } from "./Cliente.js";
import { Diretor } from "./Funcionários/Diretor.js";
import { Gerente } from "./Funcionários/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("12345");
const gerente = new Gerente("Ricardo", 5000, 98765432189);
gerente.cadastrarSenha("123456");
const cliente = new Cliente("Lais", 78945612363, "987");

const gerenteestaLogado = SistemaAutenticacao.login(gerente, "123456");
const diretorestaLogado = SistemaAutenticacao.login(diretor, "12345");
const clienteestaLogado = SistemaAutenticacao.login(cliente, "12345");

console.log(gerenteestaLogado, diretorestaLogado, clienteestaLogado);
