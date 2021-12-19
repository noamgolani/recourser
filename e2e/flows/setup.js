const { setup: setupDevServer } = require('jest-dev-server');

module.exports = async function globalSetup() {
  await setupDevServer({
	  command: `cd .. && NODE_ENV=test npm run start:server`,
    launchTimeout: 50000,
    port: 8080,
  })
}
