// TODO: Install the following package:
import { openDB } from 'idb';

// TODO: Complete the initDb() function below:
const initdb = async () =>
  openDB('info', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('info')) {
        console.log('info database already exists');
        return;
      }
      db.createObjectStore('info', { keyPath: 'id', autoIncrement: true });
      console.log('info database created');
    },
  });


// TODO: Complete the postDb() function below:
export const postDb = async (name, home, cell, email)  => {
 const info = await openDB('info', 1);
 const tx = info.transaction('info', 'readwrite');
 const store = tx.objectStore('info');
 const request = store.add({ name, home, cell, email });
 const result = await request;
 console.log("data has been saved", result);
};

// TODO: Complete the getDb() function below:
export const getDb = async () => {
  const info = await openDB('info', 1);
  const tx = info.transaction('info', 'readonly');
  const store = tx.objectStore('info');
  const request = store.getAll();
  const result = await request;
  console.log("data has been retrieved", result);
  return result;
};

// TODO: Complete the deleteDb() function below:
export const deleteDb = async (id) => {
  const info = await openDB('info', 1);
  const tx = info.transaction('info', 'readwrite');
  const store = tx.objectStore('info');
  const request = store.delete(id);
  const result = await request;
  console.log("data has been deleted", result);
  return result;
};

initdb();
