import * as SQLite from 'expo-sqlite';

const db = await SQLite.openDatabaseAsync('inventory-db');

// `execAsync()` is useful for bulk queries when you want to execute altogether.
// Note that `execAsync()` does not escape parameters and may lead to SQL injection.
// `runAsync()` is useful when you want to execute some write operations.
const result = await db.runAsync('INSERT INTO product (description, name, price, quantity, location_id) VALUES (desc, nom, prix, quant, local)');
console.log(result.lastInsertRowId, result.changes);