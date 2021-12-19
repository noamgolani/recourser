module.exports = {
  server: [
    {
      command: 'cd ../ && NODE_ENV=test npm run start:server',
      debug: true,
      port: 8080,
    },
    {
      command: 'cd ../ && BROWSER=none NODE_ENV=test npm run start:client',
      port: 3000,
    },
  ],
};
