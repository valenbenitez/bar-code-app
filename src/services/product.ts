import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../lib/firebase";
import { v4 as uuidv4 } from "uuid";

export const registerProductService = async (product: any) => {
  try {
    const productId = uuidv4();
    const productRef = doc(collection(db, "products"), productId);
    return setDoc(productRef, { ...product, id: productId })
      .then(() => {
        return { ...product, id: productId };
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  } catch (error) {}
};
