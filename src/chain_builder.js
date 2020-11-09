const configs = require("../configs.json");

module.exports = function buildChain(handlerFiles) {
  const handlers = [];
  let lastHandler = null;

  for (let i = 0; i < handlerFiles.length; i++) {
    // Constructure the handler and store it
    const module = require(configs.root_directory + handlerFiles[i]);
    const handler = new module();
    handlers.push(handler);

    // Make sure each handler (except for the last one) has a next handler. We
    // we do this by getting the last handler and set its next handler to the
    // one currently being processed in this for loop.
    const lastHandler = handlers[i - 1];
    if (lastHandler) {
      lastHandler.setNextHandler(handler);
    }
  }

  // Return the chain of handlers
  return handlers;
};
