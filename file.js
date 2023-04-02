var fs = require('fs');


//fs = file system


//escreve arquivo 
// fs.writeFile('./public/document/data.txt', 'hello world from SON', function(err){
//     if (err) {
//         throw  err;
//     }
// });

//ler o conteudo dentro do arquivo
// fs.readFile('./public/document/data.txt', function(err, data) {
//     if(err) {
//         throw err;
//     }
//     console.log(data.toString('utf8'));
// });


//lista os diretórios
// fs.readdir('.', function(err, files) {
//     if(err) {
//         throw err;
//     }

//     for (var file in files) {
//         console.log(files[file]);
//     }
   
// });


fs.readdirSync('.')
.filter(function(file){
    return (file.endsWith('.js'))
})
.forEach(function(file){
    console.log(file);
});