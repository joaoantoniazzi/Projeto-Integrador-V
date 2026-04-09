import { defineStore } from "pinia";
import { ref } from "vue";
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "vue-router";

export const useUserStore = defineStore("user", () => {
  const user = ref(null);
  const profile = ref(null);
  const loading = ref(true);
  const router = useRouter();

  const init = () => {
    onAuthStateChanged(auth, async (firebaseUser) => {
      loading.value = true;
      if (firebaseUser) {
        user.value = firebaseUser;

        const docRef = doc(db, "user", firebaseUser.uid);
        const snap = await getDoc(docRef);

        profile.value = snap.exists() ? snap.data() : null;

        router.push("/dashboard");
      } else {
        user.value = null;
        profile.value = null;

        router.push("/login");
      }
      loading.value = false;
    });
  };

  return { user, profile, loading, init };
});
