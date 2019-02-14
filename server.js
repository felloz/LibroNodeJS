let http = require('http');
let fs   = require('fs');


function serveStaticFile(res, path, contentType, responseCode){
        if(!responseCode){
                responseCode = 200;
        }
        fs.readFile(__dirname + path, function(err, data){
                if(err){
                        res.writeHead(500, {'Content-Type': 'text-plain'});
                        res.end('500 - Internal Error');
                }else{
                        res.writeHead(responseCode, {'Content-Type' : contentType});
                        res.end(data);
                }
        });
}



function conexion(req, res){
    let path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();

    switch(path){
                case '':
                        res.writeHead(200, {'Content-Type': 'text/plain'});
                        res.end('Homepage');
                        break;
                case '/about':
                        res.writeHead(200,{'Content-Type': 'text/plain'} );
                        res.end('About, todo el contenido de about se puede modificar aqui');
                        break;
                default:
                        res.writeHead(200,{'Content-Type': 'text/plain'} );
                        res.end('Not Found');
                        break;
            }
}


http.createServer(conexion).listen(3000);
console.log('Server started on localhost:3000; press Ctrl-C to terminate....');