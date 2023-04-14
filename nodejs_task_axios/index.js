const { forkJoin } = require('rxjs');
const { catchError, map } = require('rxjs/operators');
const axios = require('axios');
const http = require('http');
const url = require('url');
const PORT = 3050;



// const server = http.createServer(async function(req, res){
//     console.log(req.url)
//     let baseURI = url.parse(req.url, true);
//     let path = baseURI.pathname.split('?');
//     console.log(path[0])
//     let queryParameter = baseURI.query;
//     console.log(queryParameter.count);

//     const jokes = []
//     if(path[0]==='/api/jokes' ){
//         console.log("Inside path.")
//         for(let i=0; i<queryParameter.count; i++){
//            const response =  await axios('https://api.chucknorris.io/jokes/random');
//            console.log(response);
//         //    const json = await response.json();
//            const joke = {
//             id: response.data.id,
//             jokeText: response.data.value
//            };
//            jokes.push(joke);
//             // console.log(json);
//             // console.log(jokes[i]);
//         }
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify(jokes));
//     }else{
//         res.end("Wrong url.")
//     }

// })

// server.listen(PORT, "127.0.0.1", ()=>{
//     console.log(`server listening at ${PORT}`);
// })



// const server = http.createServer(async function(req, res){
//     // console.log(req.url)
//     let baseURI = url.parse(req.url, true);
//     let path = baseURI.pathname.split('?');
//     // console.log(path[0])
//     let queryParameter = baseURI.query;
//     const totalJokes=queryParameter.count;

//     // const jokes = []
//     if(path[0]==='/api/jokes' ){
        
//         const promises = Array.from({length:totalJokes}, ()=>axios('https://api.chucknorris.io/jokes/random'));
//         const jokes = await Promise.all(promises);
//         const jokesData = jokes.map((res)=>{
//             console.log("res: ", res.data);
//             return {id:res.data.id, jokesText:res.data.value};
//         })
//         console.log("Jokes : =>" ,jokesData)
//         res.end(JSON.stringify(jokesData))
        
//     }else{
//         res.end("Wrong url.")
//     }

// })

// server.listen(PORT, "127.0.0.1", ()=>{
//     console.log(`server listening at ${PORT}`);
// })








async function getJokes(totalJokes) {
  const jokes = [];

  for (let i = 0; i < totalJokes; i++) {
    jokes.push(
      axios.get('https://api.chucknorris.io/jokes/random').pipe(
        map((res) => {
          console.log('res--', res.data);
          return { id: res.data.id, jokesText: res.data.value };
        }),
        catchError((err) => {
          console.log(err);
          throw new Error('API not available');
        }),
      ),
    );
  }

  return forkJoin([jokes]).pipe(
    map((jokes) => {
      return { jokes: jokes, count: jokes.length };
    }),
  ).toPromise();
}



const server = http.createServer(async function(req, res){
    // console.log(req.url)
    let baseURI = url.parse(req.url, true);
    let path = baseURI.pathname.split('?');
    // console.log(path[0])
    let queryParameter = baseURI.query;
    const totalJokes=queryParameter.count;

    // const jokes = []
    if(path[0]==='/api/jokes' ){
        
        // const arr = Array.from({length:totalJokes}, ()=>axios('https://api.chucknorris.io/jokes/random'));
        
        
        getJokes(totalJokes).then((result) => {
          console.log(result);
        }).catch((error) => {
          console.error(error);
        });
        res.end('Worked i guess.')
        
    }else{
        res.end("Wrong url.")
    }

})

server.listen(PORT, "127.0.0.1", ()=>{
    console.log(`server listening at ${PORT}`);
})














// const { forkJoin, of, timer }= require('rxjs');
// const axios = require('axios');
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

//     const jokes = []
//     if(path[0]==='/api/jokes' ){
//         console.log("Inside path.")
//         for(let i=0; i<queryParameter.count; i++){
//            jokes.push(await axios('https://api.chucknorris.io/jokes/random'));
//         }

//         const observable = forkJoin(jokes);
//           observable.subscribe({
//            next: value => console.log(value),
//            complete: () => console.log('This is how it ends!'),
//           });

//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify(jokes));
//     }else{
//         res.end("Wrong url.")
//     }

// })

// server.listen(PORT, "127.0.0.1", ()=>{
//     console.log(`server listening at ${PORT}`);
// })






 
