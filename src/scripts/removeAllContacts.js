import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
export const removeAllContacts = async () => {
  try {
    const parseOldContacts = [];
    await fs.writeFile(PATH_DB, JSON.stringify(parseOldContacts), 'utf8');
  } catch (error) {
    console.error('Error:', error);
  }
};

await removeAllContacts();
