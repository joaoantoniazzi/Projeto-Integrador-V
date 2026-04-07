import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

export function botaoLogout(){
    signOut(auth);
}

export function cadastrar(email: string, senha: string){
    console.log("Cadastrando usuário com email:", email);
  createUserWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      console.log("Usuário criado:", userCredential.user);
      window.alert("Usuário criado com sucesso!");
    })
    .catch((error) => {
      console.log(error.message);
      window.alert("Erro ao criar usuário: " + error.message);
    });
}

export function login(email: string, senha: string){
  signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      console.log("Usuário logado:", userCredential.user);
      window.alert("Login bem-sucedido!");
    })
    .catch((error) => {
      console.log(error.message);
        window.alert("Erro ao fazer login: " + error.message);
    });
}