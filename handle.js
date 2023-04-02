function handle(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });

    response.write( '<!DOCTYPE "HTML">');
    response.write( '<html>');
    response.write( '<header><title>Http Module</title></header>');
    
    response.write( '<body>');
    response.write( '<h1>Hello from http module</h1>');
    response.write( '</body>');
    response.write( '<html>');

    response.end();
}

module.exports = handle;