const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.com?id=100&state=active');

// serialized url
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domail)
console.log(myUrl.host);

// hostname(does not get port)
console.log(myUrl.hostname);

// pathname
console.log(myUrl.pathname);

//serialized query
console.log(myUrl.search);

//params object
console.log(myUrl.searchParam);

//Add param
myUrl.searchParams.append('abc','123');
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value,name)=>{
    console.log(`${name} : ${value}`);
});
