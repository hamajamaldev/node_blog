const fsystem = require('fs');

// fsystem.writeFile('blog.txt','hello only hama',(err)=>{
//     if(err){
//     console.log(err);
//         }else{
//         console.log('file was written');
//             }
            
// });
// fsystem.readFile('blog.txt',(err,data)=>{
//  if(err){
//   console.log(err);
//     }else{
//     console.log(data.toString());
//         }
        
// });

// fsystem.appendFile('blog.txt','hello only hama2',(err)=>{
//     if(err){
//     console.log(err);
//         }else{
//         console.log('file was written');
//             }
            
// });

// fsystem.rename('blog.txt','blog2.txt',(err)=>{
//     if(err){
//     console.log(err);
//         }else{
//         console.log('file was renamed');
//             }
            
// });

// fsystem.unlink('blog2.txt',(err)=>{
//     if(err){
//     console.log(err);
//         }else{
//         console.log('file was deleted');
//             }
            
// });

// fsystem.mkdir('newfolder',(err)=>{
//     if(err){
//     console.log(err);
//         }else{
//         console.log('folder was created');
//             }
            
// });

// fsystem.writeFile('./newfolder/blog3.txt','hello only hama',(err)=>{
//     if(err){
//     console.log(err);
//         }else{
//         console.log('file was written');
//             }
            
// });
// fsystem.unlink('./newfolder/blog3.txt',(err)=>{
//     if(err){
//     console.log(err);
//         }else{
//         console.log('file was deleted');
//             }
            
// });

// fsystem.readdir('newfolder',(err,files)=>{
//     if(err){
//     console.log(err);
//         }else{
//         console.log(files);
//             }
            
// });



// fsystem.rmdir('newfolder',(err)=>{
//     if(err){
//     console.log(err);
//         }else{
//         console.log('folder was deleted');
//             }
            
// });



// fsystem.createReadStream('./blog2.txt').pipe(fsystem.createWriteStream('./blog3.txt'));


// const readStream = fsystem.createReadStream('./blog2.txt',{encoding:'utf8'});
// readStream.on('data',(chunk)=>{
// console.log('new chunk received');
// console.log(chunk);
// });

