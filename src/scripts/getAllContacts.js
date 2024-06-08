import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
export const getAllContacts = async () => {
  try {
    const contacts = await fs.readFile(PATH_DB, 'utf8');
    const parseContacts = JSON.parse(contacts);
    return parseContacts;
  } catch (error) {
    console.error('Error:', error);
  }
};

console.log(await getAllContacts());
