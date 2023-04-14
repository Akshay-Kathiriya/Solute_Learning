// const fetch = require('node-fetch');
// const http = require('http');
// const url = require('url');
// const PORT = 3050;



// const server = http.createServer(async function(req, res){
//     console.log(req.url)
//     let baseURI = url.parse(req.url, true);
//     let path = baseURI.pathname.split('?');
//     console.log(path[0])
//     let queryParameter = baseURI.query;
//     console.log(queryParameter.count);

//     let jokes = []
//     if(path[0]==='/api/jokes' ){
//         console.log("Inside path.")
//         for(let i=0; i<queryParameter.count; i++){
//            const response =  await fetch('https://api.chucknorris.io/jokes/random');
//         //    console.log(response);
//            const json = await response.json();
//            const joke = {
//             id: json.id,
//             jokeText: json.value
//            };
//            jokes.push(joke);
//             // console.log(json);
//             // console.log(jokes[i]);
//         }
//         res.end(JSON.stringify(jokes));
//     }else{
//         res.end("Wrong url.")
//     }
    
    

// })

// server.listen(PORT, "127.0.0.1", ()=>{
//     console.log(`server listening at ${PORT}`);
// })


// const http = require('http');
// const request = require('request');
// const url = require('url');
// const PORT = 3050;

// const options = {
//     'method': 'GET',
//     'url': 'https://api.chucknorris.io/jokes/random',
//     'headers': {
//       'Content-Type': 'application/json'
//     }
// }



// const server = http.createServer(async function(req, res){
//         console.log(req.url)
//         const baseURI = url.parse(req.url, true);
//         const path = baseURI.pathname.split('?');
//         console.log(path[0])
//         const queryParameter = baseURI.query;
//         const count = parseInt(queryParameter.count) || 1;
//         // console.log(queryParameter.count);
//         let n = 0;    
//         const jokes = []
//         if(path[0]==='/api/jokes' ){
//             console.log("Inside path.")
//             for(let i=0; i<count; i++){
//                request(options,function(error, response){
//                 if(error) res.end(error);
//                 // console.log(response.body);
//                 const data = JSON.parse(response.body);
//                 // console.log(data);
//                 const joke = {
//                     id:data.id,
//                     jokeText: data.value
//                 }
//                 // console.log(joke);
//                 jokes.push(joke);
//                 console.log(jokes)
//                 n++;
//                 // console.log(typeof n)
//                 // console.log(typeof count);
//                 // console.log(n===count);
//                 if(n===count){
//                     res.end(JSON.stringify(jokes));
//                 }
//                })

//             }
//             // console.log(jokes);
//             // res.end(JSON.stringify(jokes));
//         }else{
//             res.end("Wrong url.")
//         }
        
        
    
//     })
    
//     server.listen(PORT, "127.0.0.1", ()=>{
//         console.log(`server listening at ${PORT}`);
//     })


const http = require('http');
const url = require('url');
const PORT = 3050;
const request = require('request');
const util = require('util');

const requestAsync = util.promisify(request);

async function fetchChuckNorrisJoke() {
  const options = {
    url: 'https://api.chucknorris.io/jokes/random',
    method: 'GET'
  };

  try {
    const response = await requestAsync(options);
    const data = JSON.parse(response.body);
    const joke = {
      id: data.id,
      jokeText: data.value
    }
    return joke;
  } catch (error) {
    return error;
  }
}

const server = http.createServer(async function(req, res){
          // console.log(req.url)
          const baseURI = url.parse(req.url, true);
          const path = baseURI.pathname.split('?');
          // console.log(path[0])
          const queryParameter = baseURI.query;
          const count = parseInt(queryParameter.count) || 1;
          // console.log(queryParameter.count);
          let n = 0;    
          const jokes = []
          if(path[0]==='/api/jokes' ){
              console.log("Inside path.")
              for(let i=0; i<count; i++){
                const joke = await fetchChuckNorrisJoke();
                jokes.push(joke);
              }
              // console.log(jokes);
              res.end(JSON.stringify(jokes));
          }else{
              res.end("Wrong url.")
          } 
      
      })
      
      server.listen(PORT, "127.0.0.1", ()=>{
          console.log(`server listening at ${PORT}`);
      })