// const amount = 12

// if(amount < 10) {
//     console.log('Smaller');
// }else if(amount === 12){
//     console.log('Equal');
// }else{
//     console.log('Bigger');
// }

// console.log(__dirname);
// console.log(__filename);
// console.log(require);
// console.log(module);
// console.log(process);



// Modules


// const names = require('./module')
// const winner = require('./utils')
// winner(names.peter)
// winner(names.susan)

// const {peter,susan} = names
// winner(peter)
// winner(susan)

// const items = require('./Alt')
// const person = require('./Alt')

// console.log(items);
// console.log(person);

// require('./grenade')


// setInterval(()=>{
//     winner(peter)
// },2000)

// Build-In Modules

// Operating System
// const os = require('os')

// info about user
// const user = os.userInfo()
// console.log(user);

// method returns the system uptime in seconds
// console.log(`${os.uptime()}`);


// Path
// control the paths

// const path = require('path')
// console.log(path.sep);

// const filePath = path.join('/content','folder', 'test.js')
// console.log(filePath);

// const base = path.basename(filePath)
// console.log(base);

// const absolute = path.resolve(__dirname,'/content','folder', 'test.js')
// console.log(absolute);

// Module Fs

// const {readFileSync, writeFileSync} = require('fs')

// const first = readFileSync('./folder2/first.txt', 'utf8')
// const second = readFileSync('./folder2/second.txt', 'utf8')


// writeFileSync('./folder2/result-sync.txt',
// `Result ${first}, ${second}`)

// const {readFile, writeFile} = require('fs')
// readFile('./folder2/first.txt', 'utf8')

// const http = require('http')
// const { init } = require('uui/mods/util')

// const server = http.createServer((req,res)=>{
//     if(req.url === '/'){
//    res.end(`
//    <h1>Home</h1>
//    <p>This is the homepage!</p>
//    <a href="/products">Products<a>
// `)
   
//    return;
//     }
//     if (req.url === '/products') {
//         res.end(`
//         <h1>Products</h1>
//         <p>Choose One:</p>
//         <a href="/">Home<a>
//     `)
//         return;
//     }
//     res.end(`
//         <h1>404</h1>
//         <p>Page not found!</p>
//         <a href="/">Home<a>
//     `)
        
  
// })

// server.listen(5001)

const _ = require('lodash')
 
const items = [1,2,3,4]

const newItems = _.flattenDeep(items);
console.log(newItems);