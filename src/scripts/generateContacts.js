import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';
const generateContacts = async (number) => {
  const createFakeContacts = (number) => {
    const contacts = [];
    for (let i = 0; i < number; i++) {
      contacts.push(createFakeContact());
    }
    return contacts;
  };
  try {
    const oldContacts = await fs.readFile(PATH_DB, 'utf8');
    const parseOldContacts = JSON.parse(oldContacts);

    const newContacts = createFakeContacts(number);

    const updatedContacts = [...parseOldContacts, ...newContacts];

    await fs.writeFile(
      PATH_DB,
      JSON.stringify(updatedContacts, null, 2),
      'utf8',
    );
  } catch (error) {
    console.error('Error:', error);
  }
};

await generateContacts(5);
