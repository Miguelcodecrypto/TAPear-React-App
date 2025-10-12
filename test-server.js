import http from 'http';

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Access-Control-Allow-Origin': '*'
  });
  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Test Server</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body style="font-family: Arial; text-align: center; padding: 50px;">
      <h1>🎉 Test Server Funcionando</h1>
      <p>Si ves esto en tu móvil, la conectividad funciona!</p>
      <p>Hora: ${new Date().toLocaleString()}</p>
      <p>IP del servidor: Todas las interfaces</p>
    </body>
    </html>
  `);
});

server.listen(8082, '0.0.0.0', () => {
  console.log('🚀 Test server running on:');
  console.log('📱 Mobile: http://192.168.0.11:8082/');
  console.log('💻 Local: http://localhost:8082/');
});