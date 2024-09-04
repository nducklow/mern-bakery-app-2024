const { Item } = require('../models');

const resolvers = {
    Query: {
        items: async () => {
            return Item.find();
        }
    }
};

module.exports = resolvers;