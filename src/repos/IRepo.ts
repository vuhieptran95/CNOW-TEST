export interface Irepo<T> {
  getAll(collectionName: string): Promise<T[]>;
  getById(collectionName: string, id: string): Promise<T>;
  create(collectionName: string, T: T): Promise<void>;
  createWithId(collectionName: string, T: T, id: string): Promise<void>;
  delete(collectionName: string, id: string): Promise<void>;
  update(collectionName: string, T: T, id: string): Promise<void>;
  isExisted(collectionName: string, id: string): Promise<boolean>;
  test(): void;
}
