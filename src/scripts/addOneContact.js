import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';
export const addOneContact = async () => {
  try {
    const oldContacts = await fs.readFile(PATH_DB, 'utf8');
    const parseOldContacts = JSON.parse(oldContacts);
    const newContacts = createFakeContact();
    parseOldContacts.push(newContacts);

    await fs.writeFile(
      PATH_DB,
      JSON.stringify(parseOldContacts, null, 2),
      'utf8',
    );
  } catch (error) {
    console.error('Error:', error);
  }
};

await addOneContact();
