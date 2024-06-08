import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
export const thanos = async () => {
  try {
    const oldContacts = await fs.readFile(PATH_DB, 'utf8');
    const parseOldContacts = JSON.parse(oldContacts);
    const filterContacts = parseOldContacts.filter(() => Math.random() >= 0.5);
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(filterContacts, null, 2),
      'utf8',
    );
  } catch (error) {
    console.error('Error:', error);
  }
};

await thanos();
