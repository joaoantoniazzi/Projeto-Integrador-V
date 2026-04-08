import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

export function botaoLogout() {
  signOut(auth);
}

export function cadastrar(email: string, senha: string) {
  createUserWithEmailAndPassword(auth, email, senha).catch((error) => {
    window.alert("Erro ao criar usuário: " + error.message);
  });
}

export function login(email: string, senha: string) {
  signInWithEmailAndPassword(auth, email, senha).catch((error) => {
    window.alert("Erro ao fazer login: " + error.message);
  });
}
