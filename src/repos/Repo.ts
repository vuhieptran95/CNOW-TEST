import { Irepo } from "./IRepo";
import { db } from "../config/fireabase-config";
export class Repo<T> implements Irepo<T> {
  test(): void {
    console.log("Test in the parent class");
  }
  async isExisted(collectionName: string, id: string): Promise<boolean> {
    const response = await db
      .collection(collectionName)
      .doc(id)
      .get();
    return response.exists;
  }
  createWithId(collectionName: string, T: T, id: string): Promise<void> {
    return db
      .collection(collectionName)
      .doc(id)
      .set(T);
  }
  create(collectionName: string, T: T): Promise<void> {
    return db
      .collection(collectionName)
      .doc()
      .set(T);
  }
  delete(collectionName: string, id: string): Promise<void> {
    return db
      .collection(collectionName)
      .doc(id)
      .delete();
  }
  update(collectionName: string, T: T, id: string): Promise<void> {
    return db
      .collection(collectionName)
      .doc(id)
      .update(T);
  }
  async getAll(collectionName: string): Promise<T[]> {
    const response = await db.collection(collectionName).get();
    const arrayOfT: T[] = response.docs.map(doc => {
      const T: T = ({ id: doc.id, ...doc.data() } as unknown) as T;
      return T;
    });
    return arrayOfT;
  }
  async getById(collectionName: string, id: string): Promise<T> {
    const doc = await db
      .collection(collectionName)
      .doc(id)
      .get();
    const T: T = ({ id: doc.id, ...doc.data() } as unknown) as T;
    return T;
  }
}
