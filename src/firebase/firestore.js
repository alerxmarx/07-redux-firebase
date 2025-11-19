import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

export const guardarDato = async (dato) => {
  try {
    await addDoc(collection(db, "datos"), dato);
  } catch (error) {
    console.error("Error al guardar en Firestore:", error);
  }
};
