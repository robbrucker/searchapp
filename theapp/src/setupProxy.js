const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    proxy({
      target: process.env.REACT_APP_LISTEN_URL,
      changeOrigin: true,
      auth: process.env.REACT_APP_API_KEY,
    })
  );
};
