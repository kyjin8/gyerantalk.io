// 백엔드와 프론트엔드 연결을 위한 proxy 라이브러리

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
      '/api',
      createProxyMiddleware({
        target: 'http://localhost:4000',
        changeOrigin: true,
      })
    );
    app.use(
      '/kapi', 
      createProxyMiddleware({
        target: 'https://kapi.kakao.com',
        changeOrigin: true,
      })
    )
  };