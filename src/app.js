const { createServer } = require('http');

const { host, port } = require('./config');
const app = require('./server');
const { testConnection } = require('./db');

const server = createServer(app);

function start() {
  server.listen(+port, host, () => console.log(`Server listening on ${host}:${port}`));
}

function stop(callback) {
  server.close((err) => {
    if (err) {
      console.error(err, 'Failed to close server!');
      callback(err);
      return;
    }

    console.log('Server has been stopped.');
    callback();
  });
}

function enableGracefulExit() {
  const exitHandler = (error) => {
    if (error) console.error(error);

    console.log('Graceful stopping...');
    stop(() => {
      process.exit();
    });
  };
  // ctrl + c
  process.on('SIGINT', exitHandler);
  process.on('SIGTERM', exitHandler);
  // kill pid (nodemon restart)
  process.on('SIGUSR1', exitHandler);
  process.on('SIGUSR2', exitHandler);

  process.on('uncaugthException', exitHandler);
  process.on('unhandledRejection', exitHandler);
}

async function boot() {
  enableGracefulExit();
  await testConnection();
  start();
}

boot();
