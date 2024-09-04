const db = require('../config/connection');
const { Item } = require('../models');
const cleanDB = require('./cleanDB');

const itemData = require('./itemData.json');

db.once('open', async () => {
  // clean database
  await cleanDB("Item", "items");

  // bulk create each model
  await Item.insertMany(itemData);

  console.log('all done!');
  process.exit(0);
});