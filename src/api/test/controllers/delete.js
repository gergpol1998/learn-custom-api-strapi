"use strict";

/**
 * test controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::test.test", () => ({
  async delete(ctx) {
    try {
      await strapi.entityService.deleteMany("api::test.test"); // Use 'strapi.entityService' to delete all records
      ctx.send({ message: `All records in test table have been deleted.` });
    } catch (err) {
      ctx.throw(500, err);
    }
  },
}));
