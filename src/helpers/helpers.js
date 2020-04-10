export const filterContact = (allContacts, query) =>
  allContacts.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase()),
  );

export const isUniqueContact = (allContacts, newContactName) =>
  allContacts.some(
    item => item.name.toLowerCase() === newContactName.toLowerCase(),
  );
