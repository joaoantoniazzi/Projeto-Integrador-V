import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore();

export function logoutUser() {
  signOut(auth);
}

export async function registerUser(email: string, password: string, name: string) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
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

export function loginUser(email: string, password: string) {
  signInWithEmailAndPassword(auth, email, password).catch((error) => {
    window.alert("Erro ao fazer login: " + error.message);
  });
}
