const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = __dirname;
const port = Number(process.argv[2] || 8791);
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.webmanifest':'application/manifest+json'};
http.createServer((request,response) => {
  let pathname;
  try { pathname = decodeURIComponent(new URL(request.url,'http://localhost').pathname); }
  catch { response.writeHead(400); response.end(); return; }
  const target = path.resolve(root,'.' + (pathname === '/' ? '/index.html' : pathname));
  if (!target.startsWith(root + path.sep) || pathname.split('/').some((part) => part.startsWith('.'))) {
    response.writeHead(403); response.end(); return;
  }
  fs.readFile(target,(error,body) => {
    if (error) { response.writeHead(404); response.end('Not found'); return; }
    response.writeHead(200,{'Content-Type':types[path.extname(target)] || 'text/plain; charset=utf-8','Cache-Control':'no-store'});
    response.end(body);
  });
}).listen(port,'127.0.0.1',() => process.stdout.write('Local: http://127.0.0.1:' + port + '/\n'));
