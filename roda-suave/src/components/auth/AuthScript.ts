import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore();

export function botaoLogout() {
  signOut(auth);
}

export async function cadastrar(email: string, senha: string, name: string) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      senha,
    );
    const user = userCredential.user;

    await setDoc(doc(db, "user", user.uid), {
      name: name,
      email: email,
      createdAt: new Date(),
    });

    return user;
  } catch (error: any) {
    window.alert("Erro ao criar usuário: " + error.message);
  }
}

export function login(email: string, senha: string) {
  signInWithEmailAndPassword(auth, email, senha).catch((error) => {
    window.alert("Erro ao fazer login: " + error.message);
  });
}
