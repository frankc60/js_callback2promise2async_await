#Convert a Callback to Promise - async/await
frankc60@gmail.com 2020

Convert the builtin NodeJS callback "https" module to a Promise.

use either then().catch() or async/await to retrieve the data.

steps.
1. take the callback code and put it in a normal function/method
   const fetcher = (url) => { ...

2. put the callback in a return promise statement:
  return new Promise((resolve, reject) => { ...
  
3. change all the outputs / returns to resolve(data) or reject(data)
 ```js
         //console.log("Got a response: ", jsondata);
         resolve("Got a response: ",jsondata);
         //console.error("error " + er);
         reject("Got an error: ", e);
 ```
 
4. call the newly created function (step #1), call it with either then().catch() 
 ```js
 fetcher(url)
  .then((a) => {
    console.log("data:\n" + JSON.stringify(a));
    return "the end";
  })
  .then((b) => console.log("data:\n" + b))
  .catch((e) => {
    console.error(e);
  });
 ``` 
  OR ASYNC/AWAIT
 ```js
const init = (async (url) => {
    //init IFFF
    let f = await frank(url);
    console.log("\nreturned from frank() after await:\n\n" + JSON.stringify(f));
    console.log("\n\nNOW - the end!!!!");
  })(url);
```
