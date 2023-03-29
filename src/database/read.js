import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "./config";

/**
 * Function that load ALL tasks from the database - firebase
 * @returns
 *  Array with the tasks
 */
export async function load() {
  try {
    const querySnapshot = await getDocs(collection(db, "tasks"));

    const data = [];

    querySnapshot.forEach((doc) => {
      data.push({
        ...doc.data(),
        id: doc.id,
      });
    });

    return data;
  } catch (error) {
    throw new Error("Failed to load the database.");
  }
}

/**
 * Function that load ONE task through its id
 * @param {string} id
 * @returns
 * return the task with the id as parameter
 */
export async function loadById(id) {
  try {
    const docRef = doc(db, "tasks", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    }
  } catch (error) {
    throw new Error("Failed to query this task.");
  }
}
