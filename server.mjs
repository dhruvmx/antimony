import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
http.createServer((req,res)=>{let name=decodeURIComponent(req.url.split('?')[0]);let file=path.join(root,name);if(!path.extname(name))file=path.join(root,'index.html');if(!file.startsWith(root)){res.writeHead(403);res.end();return;}fs.readFile(file,(err,data)=>{res.writeHead(err?404:200,{'Content-Type':({'.html':'text/html','.js':'text/javascript','.css':'text/css','.png':'image/png','.webp':'image/webp','.jpg':'image/jpeg','.glb':'model/gltf-binary'})[path.extname(file)]||'text/plain'});res.end(err?'Not found':data);});}).listen(4173,'127.0.0.1',()=>console.log('Antimony: http://127.0.0.1:4173'));


