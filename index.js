const contacts = require("./contacts");
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const argv = yargs(hideBin(process.argv)).argv;

console.log(argv);

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contactsList = await contacts.listContacts();
      console.table(contactsList);
      break;

    case "get":
      const contact = await contacts.getContactById(id);
      console.log(contact || "Kontakt nie znaleziony.");
      break;

    case "add":
      await contacts.addContact(name, email, phone);
      console.log("Dodano kontakt!");
      break;

    case "remove":
      await contacts.removeContact(id);
      console.log("Usunięto kontakt!");
      break;

    default:
      console.warn("\x1B[31m! Unknown action type!");
  }
}

invokeAction(argv);
