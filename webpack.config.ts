const { NODE_ENV } = process.env;

module.export = require(`./config/webpack${NODE_ENV}.ts`);