// 백엔드와 프론트엔드 연결을 위한 proxy 라이브러리

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
      '/api',
      createProxyMiddleware({
        target: 'http://localhost:8002',
        changeOrigin: true,
      })
    );
    app.use(
      '/v1/payment/ready', 
      createProxyMiddleware({
        target: 'https://kapi.kakao.com',
        changeOrigin: true,
      })
    );
    app.use(
      '/v1/payment/approve', 
      createProxyMiddleware({
        target: 'https://kapi.kakao.com',
        changeOrigin: true,
      })
    )
    // app.use(
    //   '',
    //   createProxyMiddleware({
    //     target: 'https://www.youtube.com/results?search_query=%EC%B8%84',
    //     changeOrigin: true,
    //   })
    // )
  };